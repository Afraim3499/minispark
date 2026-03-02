"use client";

import { useState } from "react";
import { format } from "date-fns";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, MessageSquare, UserCircle2 } from "lucide-react";

interface Comment {
    id: string;
    author_name: string;
    body: string;
    created_at: string;
    status: string;
}

export function CommentSection({ postId, initialComments }: { postId: string, initialComments: Comment[] }) {
    const [loading, setLoading] = useState(false);
    const [authorName, setAuthorName] = useState("");
    const [authorEmail, setAuthorEmail] = useState("");
    const [authorWebsite, setAuthorWebsite] = useState("");
    const [body, setBody] = useState("");

    // Only display approved comments publicly
    const displayComments = initialComments.filter(c => c.status === 'approved');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!authorName || !authorEmail || !body) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);

        const newComment = {
            post_id: postId,
            author_name: authorName,
            author_email: authorEmail,
            author_website: authorWebsite || null,
            body: body,
            status: 'pending' // Default to pending review
        };

        const { error } = await supabase.from("comments").insert([newComment]);

        setLoading(false);

        if (error) {
            console.error("Error submitting comment:", error);
            toast.error("Failed to post comment. Please try again.");
        } else {
            toast.success("Comment submitted! It will appear once approved by a moderator.");
            setAuthorName("");
            setAuthorEmail("");
            setAuthorWebsite("");
            setBody("");
        }
    };

    return (
        <div className="mt-20 pt-16 border-t border-border">
            <h3 className="text-3xl font-heading font-bold mb-10 text-foreground flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-primary" />
                Comments ({displayComments.length})
            </h3>

            {/* Existing Comments */}
            <div className="space-y-8 mb-16">
                {displayComments.length === 0 ? (
                    <div className="p-8 bg-muted/30 border border-border/50 rounded-2xl text-center">
                        <p className="text-muted-foreground italic font-medium">No comments yet. Be the first to share your thoughts!</p>
                    </div>
                ) : (
                    displayComments.map((comment) => (
                        <div key={comment.id} className="flex gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                            <div className="shrink-0">
                                <UserCircle2 className="w-10 h-10 text-muted-foreground/30" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h4 className="font-heading font-bold text-foreground text-lg">{comment.author_name}</h4>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">
                                        {format(new Date(comment.created_at), "MMM d, yyyy")}
                                    </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed font-medium">
                                    {comment.body}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Comment Form */}
            <div className="bg-muted p-8 lg:p-10 rounded-3xl border border-border shadow-sm">
                <h4 className="text-2xl font-heading font-bold mb-2">Leave a Reply</h4>
                <p className="text-muted-foreground mb-8 font-medium">Your email address will not be published. Required fields are marked *</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="body" className="font-bold">Comment *</Label>
                        <Textarea
                            id="body"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            placeholder="Share your perspective..."
                            required
                            className="min-h-[140px] pt-4 bg-background border-border focus-visible:ring-primary/50"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="authorName" className="font-bold">Name *</Label>
                            <Input
                                id="authorName"
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                                placeholder="Your full name"
                                required
                                className="h-14 bg-background border-border focus-visible:ring-primary/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="authorEmail" className="font-bold">Email *</Label>
                            <Input
                                id="authorEmail"
                                type="email"
                                value={authorEmail}
                                onChange={(e) => setAuthorEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="h-14 bg-background border-border focus-visible:ring-primary/50"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="authorWebsite" className="font-bold">Website (Optional)</Label>
                        <Input
                            id="authorWebsite"
                            type="url"
                            value={authorWebsite}
                            onChange={(e) => setAuthorWebsite(e.target.value)}
                            placeholder="https://"
                            className="h-14 bg-background border-border focus-visible:ring-primary/50"
                        />
                    </div>

                    <Button type="submit" size="lg" className="h-14 px-8 font-bold shadow-[0_0_20px_rgba(249,6,6,0.3)] mt-4" disabled={loading}>
                        {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
                        {loading ? "Submitting..." : "Post Comment"}
                    </Button>
                </form>
            </div>
        </div>
    );
}
