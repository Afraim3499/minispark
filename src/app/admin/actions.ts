"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Initialize an admin client to bypass Row Level Security for secure server-side uploads
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export async function uploadBlogImage(formData: FormData) {
    const file = formData.get("file") as File;
    if (!file) {
        throw new Error("No file provided");
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;

    const { data, error } = await supabaseAdmin.storage
        .from("blog-images")
        .upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
        });

    if (error) {
        throw new Error("Failed to upload image: " + error.message);
    }

    const { data: { publicUrl } } = supabaseAdmin.storage
        .from("blog-images")
        .getPublicUrl(fileName);

    return publicUrl;
}
