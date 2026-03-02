import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

const baseUrl = 'https://minispark.digital';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Core static routes
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ];

    // Static service routes defined recently
    const servicePaths = [
        "/services/business-growth-strategy",
        "/services/content-strategy-services",
        "/services/custom-crm-development",
        "/services/customer-support-operations",
        "/services/ecommerce-website-development",
        "/services/google-business-profile-optimization",
        "/services/meta-pixel-conversion-tracking",
        "/services/remote-sales-support",
        "/services/social-media-marketing",
        "/services/video-editing-services",
        "/services/web-app-development-services",
        "/services/website-development-services",
        "/services/website-speed-seo-optimization"
    ];

    const serviceRoutes: MetadataRoute.Sitemap = servicePaths.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Dynamic blog routes from Supabase
    try {
        const { data: posts } = await supabase
            .from('posts')
            .select('slug, updated_at')
            .eq('status', 'published');

        const blogRoutes: MetadataRoute.Sitemap = (posts || []).map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
            changeFrequency: 'yearly', // usually blog posts rarely change once published
            priority: 0.6,
        }));

        return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
    } catch (e) {
        console.error("Sitemap generation error", e);
        return [...staticRoutes, ...serviceRoutes];
    }
}
