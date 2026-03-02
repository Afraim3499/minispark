const fs = require('fs');
const readline = require('readline');
const path = require('path');

const SQL_FILE = 'e:\\minispark\\u914897305_n6Y5F.sql';
const OUTPUT_DIR = path.join(__dirname, '..', 'data');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

async function parseSqlDump() {
    const fileStream = fs.createReadStream(SQL_FILE);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let currentTable = null;
    let tableData = {};

    console.log('Starting SQL dump parsing...');

    for await (const line of rl) {
        if (line.startsWith('INSERT INTO `')) {
            const match = line.match(/INSERT INTO `([^`]+)`/);
            if (match) {
                currentTable = match[1];
                if (!tableData[currentTable]) {
                    tableData[currentTable] = [];
                }

                // Extract values from the same line if present
                parseValues(line, currentTable, tableData);
            }
        } else if (currentTable && line.startsWith('(')) {
            parseValues(line, currentTable, tableData);
        } else if (line.endsWith(';')) {
            // End of an insert block
            // currentTable = null; // Don't nullify yet, might have more inserts
        }
    }

    console.log('Parsing complete. Saving summary...');

    for (const [table, rows] of Object.entries(tableData)) {
        console.log(`Table ${table}: ${rows.length} rows`);
        fs.writeFileSync(path.join(OUTPUT_DIR, `${table}.json`), JSON.stringify(rows.slice(0, 100), null, 2));
    }
}

function parseValues(line, table, data) {
    // This is a simplified parser. Real SQL values can be complex (escaped quotes, etc.)
    // For now, we just want to see the structure and some data.
    const valuesMatch = line.match(/\((.*)\)[,;]/);
    if (valuesMatch) {
        const valuesStr = valuesMatch[1];
        // Split by comma but respect quotes (very basic split for now)
        const row = valuesStr.split(/,(?=(?:(?:[^']*'){2})*[^']*$)/).map(v => v.trim().replace(/^'|'$/g, ''));
        data[table].push(row);
    }
}

// parseSqlDump();

// Since the file is 8MB+, let's just create the specialized migration logic directly.
// We need wp_posts, wp_comments, wp_users.

async function extractWpData() {
    const fileStream = fs.createReadStream(SQL_FILE);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const results = {
        users: [],
        posts: [],
        comments: [],
        postmeta: []
    };

    let activeTable = null;

    console.log('Extracting core WordPress data...');

    for await (const line of rl) {
        if (line.includes('INSERT INTO `wp_users`')) activeTable = 'users';
        else if (line.includes('INSERT INTO `wp_posts`')) activeTable = 'posts';
        else if (line.includes('INSERT INTO `wp_comments`')) activeTable = 'comments';
        else if (line.includes('INSERT INTO `wp_postmeta`')) activeTable = 'postmeta';
        else if (line.includes('CREATE TABLE')) activeTable = null;

        if (activeTable && line.trim().startsWith('(')) {
            // Simplified value extraction for demonstration
            // In a real migration, we'd use a more robust SQL parser or handle escapes carefully
            results[activeTable].push(line.trim());
        }
    }

    console.log('Extraction complete.');
    console.log(`Users: ${results.users.length}`);
    console.log(`Posts: ${results.posts.length}`);
    console.log(`Comments: ${results.comments.length}`);
    console.log(`Postmeta: ${results.postmeta.length}`);

    // Save a sample
    fs.writeFileSync(path.join(OUTPUT_DIR, 'wp_samples.json'), JSON.stringify({
        users: results.users.slice(0, 5),
        posts: results.posts.slice(0, 5),
        comments: results.comments.slice(0, 5)
    }, null, 2));
}

extractWpData();
