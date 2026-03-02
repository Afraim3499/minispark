"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            full_name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            website: formData.get("website"),
            budget_range: formData.get("budget"),
            service_interest: formData.get("service"),
            challenge_summary: formData.get("message"),
            form_name: "strategy_call_request",
        };

        const { error } = await supabase.from("lead_submissions").insert([data]);

        setLoading(false);
        if (error) {
            console.error("Error submitting lead:", error);
            toast.error("Something went wrong. Please try again.");
        } else {
            setSubmitted(true);
            toast.success("Strategy call request submitted!");
        }
    };

    if (submitted) {
        return (
            <div className="bg-primary/5 border border-primary/20 p-12 rounded-3xl text-center space-y-6">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
                <h3 className="text-3xl font-heading font-bold">Request Received</h3>
                <p className="text-muted-foreground text-lg">
                    Our team will review your details and reach out within 24 hours to schedule your consultation.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-10 rounded-3xl border shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name" className="font-bold">Full Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="h-14 bg-muted/50 border-border focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required className="h-14 bg-muted/50 border-border focus-visible:ring-primary/50" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="company" className="font-bold">Company / Brand</Label>
                    <Input id="company" name="company" placeholder="Business Name" required className="h-14 bg-muted/50 border-border focus-visible:ring-primary/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="website" className="font-bold">Website URL</Label>
                    <Input id="website" name="website" placeholder="https://..." className="h-14 bg-muted/50 border-border focus-visible:ring-primary/50" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="service" className="font-bold">Service Interest</Label>
                    <select
                        id="service"
                        name="service"
                        className="w-full h-14 rounded-md border border-border bg-muted/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="web">Website Systems</option>
                        <option value="seo">SEO & Content</option>
                        <option value="ads">Performance Ads</option>
                        <option value="cro">Conversion Optimization</option>
                        <option value="full">Digital Business Platform (All-in)</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="budget" className="font-bold">Monthly Marketing Budget</Label>
                    <select
                        id="budget"
                        name="budget"
                        className="w-full h-14 rounded-md border border-border bg-muted/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        required
                    >
                        <option value="">Select a range</option>
                        <option value="1k-3k">$1,000 - $3,000</option>
                        <option value="3k-10k">$3,000 - $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message" className="font-bold">Current Challenge / Objective</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your business goals..."
                    required
                    className="min-h-[140px] pt-4 bg-muted/50 border-border focus-visible:ring-primary/50"
                />
            </div>

            <Button type="submit" size="lg" className="w-full h-16 text-lg font-bold shadow-[0_0_20px_rgba(249,6,6,0.3)]" disabled={loading}>
                {loading ? <Loader2 className="animate-spin mr-2" /> : "Request Consultation"}
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
                *By clicking, you agree to our terms and privacy policy. We never spam.
            </p>
        </form>
    );
}
