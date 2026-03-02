"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { ArrowLeft, Save, Loader2, Image as ImageIcon, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { uploadBlogImage } from "@/app/admin/actions";

export function BlogEditor({ initialPost }: { initialPost?: any }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: initialPost?.title || "",
        slug: initialPost?.slug || "",
        featured_image_url: initialPost?.featured_image_url || "",
        content_html: initialPost?.content_html || "",
        isPublished: initialPost?.published_at ? true : false,
    });
    const [uploadingImage, setUploadingImage] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleGenerateSlug = () => {
        if (!formData.title) return;
        const generatedSlug = formData.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    };

    const handleSave = async () => {
        if (!formData.title || !formData.slug) {
            toast.error("Title and Slug are required.");
            return;
        }

        setLoading(true);

        const postData = {
            title: formData.title,
            slug: formData.slug,
            featured_image_url: formData.featured_image_url,
            content_html: formData.content_html,
            published_at: formData.isPublished ? (initialPost?.published_at || new Date().toISOString()) : null,
            updated_at: new Date().toISOString(),
        };

        let response;
        if (initialPost?.id) {
            response = await supabase.from("posts").update(postData).eq("id", initialPost.id);
        } else {
            response = await supabase.from("posts").insert([{ ...postData, author_id: "6f89028d-19cd-4cb1-807d-5e26ecf13ea3" }]); // Use generic admin ID if none
        }

        setLoading(false);

        if (response.error) {
            console.error("Save error:", response.error);
            toast.error(response.error.message || "Failed to save post.");
        } else {
            toast.success("Post saved successfully!");
            router.push("/admin/blogs");
            router.refresh();
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploadingImage(true);
        const uploadData = new FormData();
        uploadData.append("file", file);

        try {
            const url = await uploadBlogImage(uploadData);
            setFormData(prev => ({ ...prev, featured_image_url: url }));
            toast.success("Image uploaded successfully");
        } catch (error: any) {
            toast.error(error.message || "Failed to upload image");
        } finally {
            setUploadingImage(false);
        }
    };

    return (
        <div className="p-8 max-w-5xl mx-auto pb-32">
            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                        <Link href="/admin/blogs"><ArrowLeft className="w-5 h-5" /></Link>
                    </Button>
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-foreground">{initialPost ? "Edit Post" : "New Post"}</h1>
                        <p className="text-sm text-muted-foreground mt-1">Make sure your slug is unique.</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="publish-toggle" className="text-sm font-bold cursor-pointer">
                            {formData.isPublished ? <span className="text-emerald-500">Published</span> : <span className="text-yellow-500">Draft</span>}
                        </Label>
                        <div className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="publish-toggle"
                                className="sr-only peer"
                                checked={formData.isPublished}
                                onChange={(e) => setFormData((prev) => ({ ...prev, isPublished: e.target.checked }))}
                            />
                            <div className="w-11 h-6 bg-muted-foreground/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </div>
                    </div>
                    <Button onClick={handleSave} disabled={loading} size="lg" className="h-12 px-6 font-bold shadow-md">
                        {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Save className="w-5 h-5 mr-2" />}
                        Save Post
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-card p-8 rounded-3xl border border-border shadow-sm space-y-6">
                        <div className="space-y-2">
                            <Label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Post Title</Label>
                            <Input
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="E.g., How to Scale Your Digital Visibility"
                                className="h-14 text-xl font-bold bg-muted/50 focus-visible:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">URL Slug</Label>
                                <button type="button" onClick={handleGenerateSlug} className="text-xs text-primary hover:underline font-bold">Auto-generate</button>
                            </div>
                            <div className="flex items-center relative">
                                <span className="absolute left-4 text-muted-foreground font-mono text-sm">/blog/</span>
                                <Input
                                    name="slug"
                                    value={formData.slug}
                                    onChange={handleChange}
                                    placeholder="how-to-scale"
                                    className="h-12 pl-[60px] font-mono bg-muted/50 focus-visible:ring-primary lowercase"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 pt-4">
                            <Label className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Content (HTML/Rich Text Markup)</Label>
                            <p className="text-xs text-muted-foreground mb-4">Paste raw HTML here to maintain perfect Gutenberg/SEO structure.</p>
                            <Textarea
                                name="content_html"
                                value={formData.content_html}
                                onChange={handleChange}
                                placeholder="<h2>Your subheading here</h2><p>Your paragraph text...</p>"
                                className="min-h-[500px] font-mono text-sm leading-relaxed p-6 bg-muted/50 focus-visible:ring-primary resize-y"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Settings Area */}
                <div className="space-y-6">
                    <div className="bg-card p-6 rounded-3xl border border-border shadow-sm space-y-6">
                        <h3 className="font-heading font-bold border-b border-border pb-4">Media Settings</h3>

                        <div className="space-y-4">
                            {formData.featured_image_url ? (
                                <div className="aspect-video w-full rounded-xl overflow-hidden border border-border bg-muted relative group">
                                    <img src={formData.featured_image_url} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button
                                            onClick={() => setFormData(prev => ({ ...prev, featured_image_url: "" }))}
                                            className="text-xs bg-red-500 text-white px-3 py-1.5 rounded-full font-bold"
                                        >
                                            Remove Image
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="aspect-video w-full rounded-xl border-2 border-dashed border-border bg-muted/20 flex flex-col items-center justify-center text-muted-foreground gap-2">
                                    <ImageIcon className="w-8 h-8 opacity-50" />
                                    <span className="text-xs font-medium">No image provided</span>
                                </div>
                            )}
                            <Label htmlFor="featured_image_url" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Featured Image URL (Optional)</Label>
                            <div className="flex flex-col sm:flex-row items-center gap-4">
                                <Input
                                    id="featured_image_url"
                                    value={formData.featured_image_url}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, featured_image_url: e.target.value }))}
                                    placeholder="https://"
                                    className="bg-background border-border"
                                />
                                <div className="relative w-full sm:w-auto shrink-0">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
                                        disabled={uploadingImage}
                                    />
                                    <Button type="button" variant="secondary" disabled={uploadingImage} className="w-full pointer-events-none">
                                        {uploadingImage ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Upload className="w-4 h-4 mr-2" />}
                                        {uploadingImage ? "Uploading..." : "Upload File"}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
