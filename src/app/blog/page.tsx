import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { format } from "date-fns";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HollowGraphic3D } from "@/components/ui/HollowGraphic3D";
import { Zap, BookOpen, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
    title: "Insights & Strategies | MiniSpark Digital Blog",
    description: "Deep dives into SEO, performance marketing, and digital business systems for modern operators who want predictable growth.",
};

async function getPosts() {
    const { data, error } = await supabase
        .from("posts")
        .select("*, authors(name)")
        .eq("status", "published")
        .order("published_at", { ascending: false });

    if (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
    return data;
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="pb-20">
            {/* Blog Hero */}
            <section className="bg-foreground text-background min-h-[100vh] flex flex-col justify-center pt-32 pb-12 px-4 overflow-hidden relative border-b border-border/10">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase border border-primary/20 w-fit">
                                <Zap size={14} className="fill-primary" /> The Thinking Behind the Work
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] text-white">
                                Insights & <br /><span className="text-primary italic">Strategies</span>
                            </h1>
                            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl border-l-4 border-primary/50 pl-4 font-medium italic">
                                Deep dives into SEO, performance marketing, and digital business systems for operators who want growth.
                            </p>
                        </div>
                        <div className="hidden lg:block relative h-[400px]">
                            <HollowGraphic3D
                                iconName="BookOpen"
                                topLeft={{
                                    subtitle: "Insights & Strategy",
                                    title: "For Growth"
                                }}
                                bottomRight={{
                                    subtitle: "New Posts",
                                    title: "Every Week"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-32 bg-muted/30 rounded-[40px] border border-dashed border-border">
                        <p className="text-2xl text-muted-foreground font-heading italic">No insights published yet. Check back soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

function PostCard({ post }: { post: any }) {
    const publishDate = post.published_at ? format(new Date(post.published_at), "MMM d, yyyy") : "Draft";

    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 border-border/50 rounded-[2rem] group hover:-translate-y-2">
            {post.featured_image_url && (
                <div className="aspect-video w-full overflow-hidden relative">
                    <img
                        src={post.featured_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all" />
                </div>
            )}
            <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase tracking-widest text-[10px] px-3 py-1">Strategy</Badge>
                    <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{publishDate}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    <h2 className="text-2xl font-heading font-bold line-clamp-2 leading-tight tracking-tight">{post.title}</h2>
                </Link>
            </CardHeader>
            <CardContent className="px-8 pb-8 pt-0 flex-grow">
                <p className="text-muted-foreground line-clamp-3 text-base italic font-medium leading-relaxed">
                    {post.excerpt || "Click to read the full insight and strategy breakdown for your business growth..."}
                </p>
            </CardContent>
            <CardFooter className="px-8 pb-8 pt-0 flex justify-between items-center mt-auto border-t border-border/10 pt-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">MS</div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{post.authors?.name || "MiniSpark Team"}</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-primary font-bold text-sm flex items-center gap-2 group/link">
                    Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </CardFooter>
        </Card>
    );
}
