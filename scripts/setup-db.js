const { Client } = require('pg');
require('dotenv').config({ path: '.env.local' });

const schema = `
-- Drop existing tables if they exist (CAUTION: This will delete data)
-- DROP TABLE IF EXISTS media_assets CASCADE;
-- DROP TABLE IF EXISTS seo_redirects CASCADE;
-- DROP TABLE IF EXISTS lead_submissions CASCADE;
-- DROP TABLE IF EXISTS lead_forms CASCADE;
-- DROP TABLE IF EXISTS testimonials CASCADE;
-- DROP TABLE IF EXISTS authors CASCADE;
-- DROP TABLE IF EXISTS comments CASCADE;
-- DROP TABLE IF EXISTS posts CASCADE;
-- DROP TABLE IF EXISTS case_studies CASCADE;
-- DROP TABLE IF EXISTS solutions CASCADE;
-- DROP TABLE IF EXISTS services CASCADE;
-- DROP TABLE IF EXISTS pages CASCADE;

-- Pages
CREATE TABLE IF NOT EXISTS pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    page_type TEXT,
    hero_title TEXT,
    hero_subtitle TEXT,
    body_sections_json JSONB,
    seo_title TEXT,
    seo_description TEXT,
    og_image TEXT,
    status TEXT DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    category TEXT,
    short_description TEXT,
    long_description TEXT,
    ideal_for TEXT,
    deliverables_json JSONB,
    outcomes_json JSONB,
    faq_json JSONB,
    featured BOOLEAN DEFAULT FALSE,
    sort_order INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Solutions
CREATE TABLE IF NOT EXISTS solutions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    target_problem TEXT,
    transformation_promise TEXT,
    included_services_json JSONB,
    supporting_case_studies_json JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Case Studies
CREATE TABLE IF NOT EXISTS case_studies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    client_name TEXT,
    industry TEXT,
    challenge TEXT,
    strategy TEXT,
    execution TEXT,
    outcomes_json JSONB,
    testimonial TEXT,
    featured_image_url TEXT,
    gallery_json JSONB,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Authors
CREATE TABLE IF NOT EXISTS authors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    bio TEXT,
    avatar_url TEXT,
    legacy_wp_user_id INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Posts
CREATE TABLE IF NOT EXISTS posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    excerpt TEXT,
    content_html TEXT,
    featured_image_url TEXT,
    author_id UUID REFERENCES authors(id),
    status TEXT DEFAULT 'draft',
    seo_title TEXT,
    seo_description TEXT,
    published_at TIMESTAMPTZ,
    imported_view_count INTEGER DEFAULT 0,
    live_view_count INTEGER DEFAULT 0,
    legacy_wp_post_id INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Comments
CREATE TABLE IF NOT EXISTS comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
    parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
    author_name TEXT,
    author_email TEXT,
    author_website TEXT,
    body TEXT NOT NULL,
    status TEXT DEFAULT 'approved',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    legacy_wp_comment_id INTEGER
);

-- Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    company TEXT,
    quote TEXT NOT NULL,
    rating INTEGER,
    service_id UUID REFERENCES services(id),
    case_study_id UUID REFERENCES case_studies(id),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead Forms
CREATE TABLE IF NOT EXISTS lead_forms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_name TEXT NOT NULL,
    form_type TEXT,
    fields_json JSONB,
    destination TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lead Submissions
CREATE TABLE IF NOT EXISTS lead_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    form_name TEXT,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    website TEXT,
    budget_range TEXT,
    service_interest TEXT,
    challenge_summary TEXT,
    utm_json JSONB,
    source_page TEXT,
    status TEXT DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- SEO Redirects
CREATE TABLE IF NOT EXISTS seo_redirects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    old_path TEXT UNIQUE NOT NULL,
    new_path TEXT NOT NULL,
    redirect_type INTEGER DEFAULT 301,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Media Assets
CREATE TABLE IF NOT EXISTS media_assets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_url TEXT NOT NULL,
    alt_text TEXT,
    type TEXT,
    source TEXT,
    legacy_path TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
`;

async function setupSchema() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        await client.connect();
        console.log('Connected to Supabase');
        // Test connectivity first
        await client.query('SELECT NOW()');
        console.log('Connectivity confirmed');
        await client.query(schema);
        console.log('Schema setup complete');
    } catch (err) {
        console.error('Error setting up schema:', err);
        if (err.severity) console.error('Severity:', err.severity);
        if (err.code) console.error('Code:', err.code);
    } finally {
        await client.end();
    }
}

setupSchema();
