import { supabase } from "@/lib/supabase";
import { BlogsDashboard } from "@/components/admin/BlogsDashboard";

export const revalidate = 0; // Ensure fresh data on every load for admin

export default async function AdminBlogsPage() {
    // Fetch posts ordered by most recent first
    const { data: posts, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching admin posts:", error);
    }

    return (
        <BlogsDashboard initialPosts={posts || []} />
    );
}
