import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react";
import { notFound } from "next/navigation";

const services = {
    "web-design": {
        title: "Website Systems",
        subtitle: "High-Performance Next.js Architectures",
        description: "We don't build generic websites. We build digital business platforms mapped to your customer journey. Our headless systems are designed for sub-second load times and conversion excellence.",
        benefits: [
            "Ultra-fast Next.js Performance",
            "SEO-First Architecture",
            "Conversion-Optimized Layouts",
            "Mobile-First Interaction Design"
        ]
    },
    "seo": {
        title: "SEO & Content Engine",
        subtitle: "Organic Dominance & Topical Authority",
        description: "Owning your niche in search results requires more than keywords. We build content moats that establish your authority and capture high-intent traffic while they are searching for solutions.",
        benefits: [
            "Technical SEO Audits & Fixes",
            "Authority-Building Content Strategy",
            "Competitive Position Tracking",
            "Local Search Domination"
        ]
    },
    "ads": {
        title: "Performance Ads",
        subtitle: "Predictable Lead Flow & ROI",
        description: "Strategic Meta and Google Ads systems that focus on CAC (Cost Per Acquisition) and LTV (Lifetime Value). We manage your budget like it's our own, optimizing for direct business outcomes.",
        benefits: [
            "Hyper-Targeted Meta Campaigns",
            "High-Intent Google Search Systems",
            "Creative Strategy & Ad Copy",
            "Full-Funnel Attribution Tracking"
        ]
    },
    "cro": {
        title: "Conversion Optimization",
        subtitle: "Maximizing Traffic Value",
        description: "Stop wasting traffic. We analyze user behavior and implement landing page systems that multiply your conversion rate, turning more visitors into qualified leads.",
        benefits: [
            "High-Converting Landing Pages",
            "A/B Testing & Analysis",
            "Behavioral Heatmap Insights",
            "Funnel Friction Removal"
        ]
    }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        notFound();
    }

    return (
        <div className="pb-20">
            <section className="bg-muted/30 py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" asChild className="mb-8 hover:-translate-x-1 transition-transform">
                        <Link href="/services">
                            <ArrowLeft className="mr-2 w-4 h-4" /> All Capabilities
                        </Link>
                    </Button>
                    <div className="bg-primary/10 text-primary w-fit px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        {service.subtitle}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">{service.title}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed italic">
                        {service.description}
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-4 py-20">
                <h2 className="text-2xl font-heading font-bold mb-10 border-b pb-4">Key Business Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex gap-4 p-6 bg-card border rounded-2xl hover:border-primary/30 transition-colors">
                            <CheckCircle2 className="text-primary w-6 h-6 flex-shrink-0" />
                            <span className="font-medium">{benefit}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-primary text-primary-foreground rounded-3xl text-center">
                    <Zap className="w-12 h-12 mx-auto mb-6 opacity-80" />
                    <h3 className="text-3xl font-heading font-bold mb-4">Ready to implement this system?</h3>
                    <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
                        Schedule a diagnosed strategy call to see how we can apply this solution to your specific business model.
                    </p>
                    <Button variant="secondary" size="lg" className="h-14 px-10 text-lg font-bold" asChild>
                        <Link href="/contact">Book Strategy Call</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
