import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowLeft, Clock, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommentSection } from "@/components/blog/CommentSection";
import { JsonLd, generateArticleSchema } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const revalidate = 3600;

async function getPost(slug: string) {
    const { data, error } = await supabase
        .from("posts")
        .select("*, authors(*)")
        .eq("slug", slug)
        .single();

    if (error || !data) return null;
    return data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return { title: 'Post Not Found | MiniSpark Digital' };
    }

    const excerpt = post.excerpt || "Read our latest strategic insights on business growth, branding, and digital platforms.";
    const imageUrl = post.featured_image_url || "https://minispark.digital/og-image.jpg";

    return {
        title: `${post.title} | MiniSpark Insights`,
        description: excerpt,
        openGraph: {
            title: `${post.title} | MiniSpark Insights`,
            description: excerpt,
            type: "article",
            publishedTime: post.published_at || new Date().toISOString(),
            authors: [post.authors?.name || "MiniSpark Team"],
            images: [{
                url: imageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
            }],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: excerpt,
            images: [imageUrl],
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Fetch only explicitly approved comments for public display
    const { data: comments } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", post.id)
        .eq("status", "approved")
        .order("created_at", { ascending: true });

    const publishDate = post.published_at ? format(new Date(post.published_at), "MMMM d, yyyy") : "Draft";

    // Extract and unescape the raw CMS HTML payload
    let rawHtml = post.content_html || "";

    // WordPress blocks return exact HTML structure. We need to unescape literal DB serialization 
    // markers without running it through a secondary parser (like wpautop or marked) which breaks Gutenberg blocks.
    const parsedContent = rawHtml
        .replace(/\\r\\n/g, '\n')
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "'");

    const excerpt = post.excerpt || "Read our latest strategic insights on business growth, branding, and digital platforms.";
    const authorName = post.authors?.name || "MiniSpark Team";

    return (
        <article className="max-w-4xl mx-auto px-4 py-20 relative">
            <JsonLd schema={generateArticleSchema(post.title, excerpt, `/blog/${slug}`, post.published_at || new Date().toISOString(), post.featured_image_url, authorName)} />

            <Button variant="ghost" asChild className="mb-12 hover:-translate-x-1 transition-transform">
                <Link href="/blog">
                    <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
                </Link>
            </Button>

            <div className="space-y-6 mb-12">
                <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">{post.title}</h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                        <UserIcon size={16} />
                        <span>{post.authors?.name || "MiniSpark Team"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{publishDate}</span>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        Digital Strategy
                    </div>
                </div>
            </div>

            {post.featured_image_url && (
                <div className="aspect-video w-full rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <img src={post.featured_image_url} alt={post.title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Force strict typography hierarchy for SEO structure (H2, H3, paragraphs) since WordPress outputs raw tags */}
            <div className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-li:text-muted-foreground
                prose-a:text-primary hover:prose-a:underline font-sans">
                <div dangerouslySetInnerHTML={{ __html: parsedContent }} className="blog-content wp-blocks" suppressHydrationWarning />
            </div>

            <CommentSection postId={post.id} initialComments={comments || []} />

            <div className="mt-20 pt-10 border-t">
                <div className="bg-muted p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8">
                    <div className="text-center md:text-left flex-grow">
                        <h3 className="text-2xl font-heading font-bold mb-2">Want a personalized growth plan?</h3>
                        <p className="text-muted-foreground">Book a diagnosed strategy call with our operators today.</p>
                    </div>
                    <Button size="lg" className="px-8 h-12" asChild>
                        <Link href="/contact">Book Strategy Call</Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}
