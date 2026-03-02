import { supabase } from "@/lib/supabase";
import { CommentsDashboard } from "@/components/admin/CommentsDashboard";

export const revalidate = 0; // Ensure fresh data on every load for admin

export default async function AdminCommentsPage() {
    // Fetch comments requested newest first
    const { data: comments, error } = await supabase
        .from("comments")
        .select("*, posts(title)")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching admin comments:", error);
    }

    return (
        <CommentsDashboard initialComments={comments || []} />
    );
}
