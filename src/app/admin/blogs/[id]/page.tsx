import { supabase } from "@/lib/supabase";
import { BlogEditor } from "@/components/admin/BlogEditor";
import { notFound } from "next/navigation";

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data: post } = await supabase.from("posts").select("title").eq("id", id).single();
    return {
        title: post ? `Edit: ${post.title} | Admin` : "Edit Post | Admin",
    };
}

export default async function AdminEditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !post) {
        notFound();
    }

    return <BlogEditor initialPost={post} />;
}
