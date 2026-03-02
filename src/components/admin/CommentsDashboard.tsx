"use client";

import { useState } from "react";
import { format } from "date-fns";
import { MessageSquare, Check, X, Search, Globe, Mail, Link as LinkIcon, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export function CommentsDashboard({ initialComments }: { initialComments: any[] }) {
    const [comments, setComments] = useState(initialComments);
    const [searchTerm, setSearchTerm] = useState("");
    const [processingId, setProcessingId] = useState<string | null>(null);

    const filteredComments = comments.filter((comment) => {
        const searchString = `${comment.author_name} ${comment.author_email} ${comment.body} ${comment.posts?.title || ""}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });

    const handleUpdateStatus = async (id: string, newStatus: string) => {
        setProcessingId(id);
        const { error } = await supabase.from("comments").update({ status: newStatus }).eq("id", id);

        if (error) {
            console.error("Error updating comment:", error);
            toast.error("Failed to update comment status.");
            setProcessingId(null);
        } else {
            setComments(comments.map(c => c.id === id ? { ...c, status: newStatus } : c));
            toast.success(`Comment ${newStatus === "approved" ? "approved" : "rejected"}.`);
            setProcessingId(null);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to permanently delete this comment?")) return;

        setProcessingId(id);
        const { error } = await supabase.from("comments").delete().eq("id", id);

        if (error) {
            console.error("Error deleting comment:", error);
            toast.error("Failed to delete comment.");
            setProcessingId(null);
        } else {
            setComments(comments.filter(c => c.id !== id));
            toast.success("Comment deleted.");
            setProcessingId(null);
        }
    };

    // Sort: pending first, then by date descending
    const sortedComments = [...filteredComments].sort((a, b) => {
        if (a.status === 'pending' && b.status !== 'pending') return -1;
        if (a.status !== 'pending' && b.status === 'pending') return 1;
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    return (
        <div className="p-8 pb-32">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Comment Moderation</h1>
                    <p className="text-muted-foreground font-medium">Review, approve, and reply to community engagement.</p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search authors, emails, or content..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 h-12 bg-background border-border focus-visible:ring-primary"
                        />
                    </div>
                </div>
            </div>

            {sortedComments.length === 0 ? (
                <div className="text-center py-20 bg-card border border-border rounded-3xl">
                    <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-bold text-foreground">No comments to moderate</h3>
                    <p className="text-muted-foreground mt-2">When readers comment on your blogs, they will appear here.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {sortedComments.map((comment) => (
                        <div key={comment.id} className={`bg-card border rounded-2xl p-6 transition-all ${comment.status === 'pending' ? 'border-primary/50 shadow-md' : 'border-border'}`}>

                            <div className="flex flex-col lg:flex-row justify-between gap-6">
                                {/* Left Side: Meta Info */}
                                <div className="lg:w-1/4 space-y-4">
                                    <div className="flex items-center gap-2">
                                        {comment.status === 'pending' && <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-yellow-500/10 text-yellow-500">Pending Review</span>}
                                        {comment.status === 'approved' && <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500">Approved</span>}
                                        {comment.status === 'rejected' && <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-red-500/10 text-red-500">Rejected</span>}
                                    </div>

                                    <div>
                                        <h4 className="font-heading font-bold text-lg">{comment.author_name}</h4>
                                        <div className="text-xs text-muted-foreground mt-1 flex flex-col gap-1">
                                            <a href={`mailto:${comment.author_email}`} className="flex items-center gap-1 hover:text-primary"><Mail className="w-3 h-3" /> {comment.author_email}</a>
                                            {comment.author_website && <a href={comment.author_website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary"><LinkIcon className="w-3 h-3" /> {comment.author_website}</a>}
                                        </div>
                                    </div>

                                    <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                                        {format(new Date(comment.created_at), "MMM d, yyyy • h:mm a")}
                                    </div>
                                </div>

                                {/* Center: Comment Body & Post Context */}
                                <div className="lg:w-2/4">
                                    <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-2">
                                        <Globe className="w-3 h-3" /> On Post: {comment.posts?.title || "Unknown Post"}
                                    </div>
                                    <div className="p-4 bg-muted/30 rounded-xl border border-border/50 text-sm leading-relaxed whitespace-pre-wrap italic">
                                        "{comment.body}"
                                    </div>
                                </div>

                                {/* Right Side: Actions */}
                                <div className="lg:w-1/4 flex flex-col sm:flex-row lg:flex-col justify-end lg:justify-start gap-2">
                                    {comment.status !== 'approved' && (
                                        <Button
                                            onClick={() => handleUpdateStatus(comment.id, 'approved')}
                                            disabled={processingId === comment.id}
                                            className="w-full bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 font-bold"
                                        >
                                            {processingId === comment.id ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                                            Approve
                                        </Button>
                                    )}
                                    {comment.status !== 'rejected' && (
                                        <Button
                                            variant="outline"
                                            onClick={() => handleUpdateStatus(comment.id, 'rejected')}
                                            disabled={processingId === comment.id}
                                            className="w-full text-muted-foreground hover:text-red-500 hover:bg-red-500/10 border-border"
                                        >
                                            <X className="w-4 h-4 mr-2" />
                                            Reject
                                        </Button>
                                    )}
                                    <Button
                                        variant="ghost"
                                        onClick={() => handleDelete(comment.id)}
                                        disabled={processingId === comment.id}
                                        className="w-full text-muted-foreground hover:bg-red-500/10 hover:text-red-500 mt-auto"
                                    >
                                        Delete Permanently
                                    </Button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
