"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Edit, Eye, PlusCircle, Search, Trash2, FileText, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function BlogsDashboard({ initialPosts }: { initialPosts: any[] }) {
    const [posts, setPosts] = useState(initialPosts);
    const [searchTerm, setSearchTerm] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const router = useRouter();

    const filteredPosts = posts.filter((post) => {
        const searchString = `${post.title} ${post.slug}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
            return;
        }

        setDeletingId(id);
        const { error } = await supabase.from("posts").delete().eq("id", id);
        setDeletingId(null);

        if (error) {
            console.error("Error deleting post:", error);
            toast.error("Failed to delete post.");
        } else {
            setPosts(posts.filter((p) => p.id !== id));
            toast.success("Post deleted successfully.");
            router.refresh(); // Tell Server Components to refresh
        }
    };

    return (
        <div className="p-8 pb-32">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Blog Manager</h1>
                    <p className="text-muted-foreground font-medium">Create, edit, and manage your platform's content.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search posts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 h-12 bg-background border-border focus-visible:ring-primary"
                        />
                    </div>
                    <Button asChild size="lg" className="h-12 w-full sm:w-auto font-bold shrink-0">
                        <Link href="/admin/blogs/new">
                            <PlusCircle className="w-5 h-5 mr-2" /> New Post
                        </Link>
                    </Button>
                </div>
            </div>

            {filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-card border border-border rounded-3xl">
                    <FileText className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-bold text-foreground">No posts found</h3>
                    <p className="text-muted-foreground mt-2">Create your first blog post to get started.</p>
                </div>
            ) : (
                <div className="bg-card border border-border rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left align-middle border-collapse">
                            <thead>
                                <tr className="border-b border-border bg-muted/50">
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Post Info</th>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Status</th>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest text-[10px] text-muted-foreground">Date</th>
                                    <th className="py-4 px-6 font-bold uppercase tracking-widest text-[10px] text-muted-foreground text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {filteredPosts.map((post) => (
                                    <tr key={post.id} className="hover:bg-muted/20 transition-colors group">
                                        <td className="py-4 px-6 align-top max-w-[300px]">
                                            <div className="truncate mb-1">
                                                <Link href={`/admin/blogs/${post.id}`} className="font-bold text-base text-foreground hover:text-primary transition-colors">
                                                    {post.title}
                                                </Link>
                                            </div>
                                            <div className="text-xs text-muted-foreground truncate opacity-70">
                                                /{post.slug}
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 align-top">
                                            {post.published_at ? (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-yellow-500/10 text-yellow-500">
                                                    Draft
                                                </span>
                                            )}
                                        </td>
                                        <td className="py-4 px-6 text-muted-foreground align-top whitespace-nowrap">
                                            {format(new Date(post.created_at), "MMM d, yyyy")}
                                        </td>
                                        <td className="py-4 px-6 align-top text-right">
                                            <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Button size="icon" variant="ghost" asChild className="h-8 w-8 text-muted-foreground hover:text-primary">
                                                    <Link href={`/blog/${post.slug}`} target="_blank">
                                                        <Eye className="w-4 h-4" />
                                                    </Link>
                                                </Button>
                                                <Button size="icon" variant="ghost" asChild className="h-8 w-8 text-muted-foreground hover:text-white">
                                                    <Link href={`/admin/blogs/${post.id}`}>
                                                        <Edit className="w-4 h-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    size="icon"
                                                    variant="ghost"
                                                    className="h-8 w-8 text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
                                                    onClick={() => handleDelete(post.id, post.title)}
                                                    disabled={deletingId === post.id}
                                                >
                                                    {deletingId === post.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
