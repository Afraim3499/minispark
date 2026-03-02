const fs = require('fs');
const readline = require('readline');
const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

const SQL_FILE = 'e:\\minispark\\u914897305_n6Y5F.sql';

// Helper to parse SQL insert values line
function parseSqlLine(line) {
    // This is a naive parser for demo/migration purposes
    // It handles basic quotes and escapes but might need refinement for complex HTML blocks
    const valuesPart = line.trim().replace(/^\(/, '').replace(/\)[,;]$/, '');

    // Split by comma but respect single quotes
    const fields = [];
    let currentField = '';
    let inQuote = false;

    for (let i = 0; i < valuesPart.length; i++) {
        const char = valuesPart[i];
        if (char === "'" && (i === 0 || valuesPart[i - 1] !== "\\")) {
            inQuote = !inQuote;
        } else if (char === "," && !inQuote) {
            fields.push(currentField.trim().replace(/^'|'$/g, '').replace(/\\'/g, "'"));
            currentField = '';
        } else {
            currentField += char;
        }
    }
    fields.push(currentField.trim().replace(/^'|'$/g, '').replace(/\\'/g, "'"));
    return fields;
}

async function migrate() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log('Connected to Supabase');

        const fileStream = fs.createReadStream(SQL_FILE);
        const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

        let activeTable = null;
        let count = 0;

        console.log('Starting migration...');

        for await (const line of rl) {
            if (line.includes('INSERT INTO `wp_users`')) activeTable = 'users';
            else if (line.includes('INSERT INTO `wp_posts`')) activeTable = 'posts';
            else if (line.includes('INSERT INTO `wp_comments`')) activeTable = 'comments';
            else if (line.includes('CREATE TABLE')) activeTable = null;

            if (activeTable && line.trim().startsWith('(')) {
                const fields = parseSqlLine(line);

                if (activeTable === 'users') {
                    // (ID, user_login, user_pass, user_nicename, user_email, user_url, user_registered, user_activation_key, user_status, display_name)
                    await client.query(
                        'INSERT INTO authors (name, slug, legacy_wp_user_id) VALUES ($1, $2, $3) ON CONFLICT (slug) DO NOTHING',
                        [fields[9] || fields[1], fields[3], fields[0]]
                    );
                } else if (activeTable === 'posts') {
                    // (ID, post_author, post_date, post_date_gmt, post_content, post_title, post_excerpt, post_status, comment_status, ping_status, post_password, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_parent, guid, menu_order, post_type, post_mime_type, comment_count)
                    if (fields[20] === 'post' || fields[20] === 'page') {
                        // Map Author ID (simplified: fetch by legacy ID)
                        const authorRes = await client.query('SELECT id FROM authors WHERE legacy_wp_user_id = $1', [fields[1]]);
                        const authorId = authorRes.rows[0]?.id;

                        await client.query(
                            `INSERT INTO posts (title, slug, content_html, author_id, status, published_at, legacy_wp_post_id) 
                             VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (slug) DO NOTHING`,
                            [fields[5], fields[11], fields[4], authorId, fields[7] === 'publish' ? 'published' : 'draft', fields[2], fields[0]]
                        );
                    }
                } else if (activeTable === 'comments') {
                    // (comment_ID, comment_post_ID, comment_author, comment_author_email, comment_author_url, comment_author_IP, comment_date, comment_date_gmt, comment_content, comment_karma, comment_approved, comment_agent, comment_type, comment_parent, user_id)
                    const postRes = await client.query('SELECT id FROM posts WHERE legacy_wp_post_id = $1', [fields[1]]);
                    const postId = postRes.rows[0]?.id;

                    if (postId) {
                        await client.query(
                            `INSERT INTO comments (post_id, author_name, author_email, body, status, created_at, legacy_wp_comment_id) 
                             VALUES ($1, $2, $3, $4, $5, $6, $7)`,
                            [postId, fields[2], fields[3], fields[8], fields[10] === '1' ? 'approved' : 'pending', fields[6], fields[0]]
                        );
                    }
                }

                count++;
                if (count % 100 === 0) process.stdout.write(`Migrated ${count} rows...\r`);
            }
        }

        console.log('\nMigration finished successfully.');
    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        await client.end();
    }
}

migrate();
