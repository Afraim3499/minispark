import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, Megaphone, BarChart3, Palette, Search, MessageSquare, CheckCircle2, ShoppingCart, Target, MapPin, Gauge, Layers, Play, PhoneCall, Users, PenTool, Compass } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Business Services | MiniSpark",
    description: "Explore our comprehensive directory of digital solutions: SEO, Meta Ads, Custom Web Apps, Remote Sales, and high-performance Headless E-commerce.",
};

export default function ServicesPage() {
    return (
        <div className="pb-20">
            <section className="bg-foreground text-background min-h-[100vh] flex flex-col justify-center pt-32 pb-12 px-4 overflow-hidden relative border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col gap-6 mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase border border-primary/20 w-fit">
                            <Zap size={14} className="fill-primary" /> Comprehensive Solutions
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] max-w-5xl text-white">
                            Digital Services Built Around <span className="text-primary italic">Real Business Needs</span>
                        </h1>
                    </div>
                    <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl border-l-4 border-primary/50 pl-4 font-medium italic">
                        Choose the right solution for branding, visibility, customer communication, sales follow-up, and long-term digital growth.
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="px-8 h-12 text-base font-bold rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(249,6,6,0.3)]" asChild>
                            <Link href="/contact">Book a Free Consultation</Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
            </section>

            <div className="max-w-7xl mx-auto px-4 py-24">
                {/* Brand & Visibility */}
                <ServiceSection
                    id="brand"
                    title="Brand Presence and Visibility"
                    subtitle="Make your business easier to notice and trust."
                >
                    <ServiceCard
                        title="Social Media Marketing"
                        desc="Build a stronger social presence that improves visibility, trust, and engagement."
                        icon={<Megaphone className="w-10 h-10 text-primary" />}
                        href="/services/social-media-marketing"
                    />
                    <ServiceCard
                        title="Content Strategy"
                        desc="Plan content that improves visibility, trust, and consistency."
                        icon={<PenTool className="w-10 h-10 text-primary" />}
                        href="/services/content-strategy-services"
                    />
                    <ServiceCard
                        title="Video Editing"
                        desc="Turn raw video into stronger branded content."
                        icon={<Play className="w-10 h-10 text-primary" />}
                        href="/services/video-editing-services"
                    />
                    <ServiceCard
                        title="Google Business Profile"
                        desc="Make your business easier to find in local search."
                        icon={<MapPin className="w-10 h-10 text-primary" />}
                        href="/services/google-business-profile-optimization"
                    />
                </ServiceSection>

                {/* Websites & Digital Presence */}
                <ServiceSection
                    id="web"
                    title="Websites and Digital Experience"
                    subtitle="Get a high-performance digital presence that works."
                    className="mt-32"
                >
                    <ServiceCard
                        title="Website Development"
                        desc="Create a professional website that helps people trust and understand your business."
                        icon={<Globe className="w-10 h-10 text-primary" />}
                        href="/services/website-development-services"
                    />
                    <ServiceCard
                        title="Website Speed & SEO"
                        desc="Improve speed, visibility, and overall user experience."
                        icon={<Gauge className="w-10 h-10 text-primary" />}
                        href="/services/website-speed-seo-optimization"
                    />
                    <ServiceCard
                        title="E-commerce Solutions"
                        desc="Build an online store that feels more credible and sells more smoothly."
                        icon={<ShoppingCart className="w-10 h-10 text-primary" />}
                        href="/services/ecommerce-website-development"
                    />
                    <ServiceCard
                        title="Web App Development"
                        desc="Build digital tools that support smoother business operations."
                        icon={<Layers className="w-10 h-10 text-primary" />}
                        href="/services/web-app-development-services"
                    />
                </ServiceSection>

                {/* Sales & Customer Systems */}
                <ServiceSection
                    id="sales"
                    title="Customer Flow and Business Operations"
                    subtitle="Optimize how you handle leads and support customers."
                    className="mt-32"
                >
                    <ServiceCard
                        title="Conversion Tracking"
                        desc="Understand what your marketing is actually doing with cleaner tracking."
                        icon={<Target className="w-10 h-10 text-primary" />}
                        href="/services/meta-pixel-conversion-tracking"
                    />
                    <ServiceCard
                        title="Remote Sales Support"
                        desc="Improve lead follow-up and customer communication."
                        icon={<PhoneCall className="w-10 h-10 text-primary" />}
                        href="/services/remote-sales-support"
                    />
                    <ServiceCard
                        title="Customer Support Systems"
                        desc="Build a better support experience across channels."
                        icon={<MessageSquare className="w-10 h-10 text-primary" />}
                        href="/services/customer-support-operations"
                    />
                    <ServiceCard
                        title="Custom CRM"
                        desc="Track leads and manage workflows more clearly."
                        icon={<Users className="w-10 h-10 text-primary" />}
                        href="/services/custom-crm-development"
                    />
                </ServiceSection>

                {/* Strategic Advisory */}
                <ServiceSection
                    id="strategy"
                    title="Strategic Direction"
                    subtitle="Plan your next steps with market insight."
                    className="mt-32"
                >
                    <ServiceCard
                        title="Business Strategy"
                        desc="Understand your market, analyze competitors, and plan smarter next steps."
                        icon={<Compass className="w-10 h-10 text-primary" />}
                        href="/services/business-growth-strategy"
                        className="lg:col-span-2"
                    />
                </ServiceSection>
            </div>

            {/* Custom Support Section */}
            <section className="bg-muted/30 py-24 mt-20 border-y border-border">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic">Not Sure What You Need Yet?</h2>
                    <p className="text-xl text-muted-foreground mb-12 italic font-medium leading-relaxed">
                        If you know something feels weak but you are not sure what to fix first, we can help you identify the right priority.
                    </p>
                    <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full group" asChild>
                        <Link href="/contact">Talk About Your Business <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

function ServiceSection({ id, title, subtitle, children, className }: any) {
    return (
        <div id={id} className={className}>
            <div className="mb-12 border-l-8 border-primary pl-6 pt-16 -mt-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold italic">{title}</h2>
                <p className="text-muted-foreground text-lg italic mt-2 font-medium">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {children}
            </div>
        </div>
    );
}

function ServiceCard({ title, desc, icon, href, className }: any) {
    return (
        <Link href={href} className={`group flex flex-col p-10 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden relative ${className}`}>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-all text-primary">{icon}</div>
            <div className="mb-8 group-hover:scale-110 transition-transform origin-left">{icon}</div>
            <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground leading-relaxed italic font-medium mb-8 flex-grow">{desc}</p>
            <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </div>
            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
        </Link>
    );
}
