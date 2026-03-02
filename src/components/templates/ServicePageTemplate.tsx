import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap, MessageSquare, Search, Globe, Palette } from "lucide-react";
import { TickerTape } from "@/components/layout/TickerTape";
import { JsonLd, generateServiceSchema, generateFaqSchema, generateBreadcrumbSchema } from "@/components/seo/JsonLd";
import { HollowGraphic3D } from "@/components/ui/HollowGraphic3D";
import { type LucideIcon } from "lucide-react";

interface ServicePageProps {
    title: string;
    subheading: string;
    primaryCTA: string;
    secondaryCTA: string;
    iconName: string;
    topLeft: { subtitle: string; title: string; footer?: string };
    bottomRight: { subtitle: string; title: string };
    problems: string[];
    whyItMatters: string;
    whatWeDo: string[];
    whatWeImprove: string[];
    deliverables: string[];
    process: { title: string; desc: string }[];
    whoThisIsFor: string[];
    faqs: { q: string; a: string }[];
    relatedServices: { title: string; href: string }[];
    slug: string;
}

export function ServicePageTemplate({
    title,
    subheading,
    primaryCTA,
    secondaryCTA,
    iconName,
    topLeft,
    bottomRight,
    problems,
    whyItMatters,
    whatWeDo,
    whatWeImprove,
    deliverables,
    process,
    whoThisIsFor,
    faqs,
    relatedServices,
    slug,
}: ServicePageProps) {
    return (
        <div className="flex flex-col pb-20">
            <JsonLd schema={generateServiceSchema(title, subheading, `/services/${slug}`)} />
            <JsonLd schema={generateBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Services", url: "/services" },
                { name: title }
            ])} />
            {faqs && faqs.length > 0 && (
                <JsonLd schema={generateFaqSchema(faqs)} />
            )}

            {/* Hero Section */}
            <section className="relative h-[100vh] min-h-[600px] flex flex-col justify-center pt-20 overflow-hidden border-b border-border/10 bg-foreground text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase border border-white/10">
                                Service Blueprint
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] text-white">
                                {title}
                            </h1>
                            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl border-l-4 border-primary/50 pl-4 font-medium mx-auto lg:mx-0">
                                {subheading}
                            </p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="text-lg px-12 h-16 font-bold rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105" asChild>
                                    <Link href="/contact">{primaryCTA}</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-lg px-12 h-16 font-bold rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors" asChild>
                                    <Link href="/contact">{secondaryCTA}</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="hidden lg:block relative h-[450px]">
                            <HollowGraphic3D
                                iconName={iconName}
                                topLeft={topLeft}
                                bottomRight={bottomRight}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <TickerTape />

            {/* Problem Section */}
            <section className="bg-background py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">What’s Making This Hard Right Now</h2>
                            <div className="space-y-4">
                                {problems.map((problem, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                                        <div className="mt-1 text-primary"><Zap size={18} /></div>
                                        <p className="text-lg text-muted-foreground font-medium">{problem}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 md:p-12 rounded-3xl bg-card border border-border relative overflow-hidden shadow-lg">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl" />
                            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground border-l-4 border-primary pl-4">Why This Matters for Your Business</h2>
                            <p className="text-xl leading-relaxed text-muted-foreground font-medium">
                                "{whyItMatters}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do & Improve */}
            <section className="bg-muted py-24 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-heading font-bold mb-8 border-b-2 border-primary inline-block pb-2 uppercase tracking-wide">What We Do</h2>
                            <ul className="space-y-4">
                                {whatWeDo.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold">
                                        <CheckCircle2 className="text-primary shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-heading font-bold mb-8 border-b-2 border-primary/40 inline-block pb-2 uppercase tracking-wide opacity-80">What We Review or Improve</h2>
                            <ul className="space-y-4">
                                {whatWeImprove.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-muted-foreground">
                                        <Search className="text-primary/50 shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="bg-background py-24 border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-heading font-bold mb-12 text-center">Who This Is For</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {whoThisIsFor.map((target, i) => (
                            <div key={i} className="px-8 py-4 rounded-full bg-primary/5 border border-primary/20 text-foreground font-bold text-lg shadow-sm">
                                {target}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="bg-background py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What You Get</h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deliverables.map((item, i) => (
                            <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all flex flex-col gap-4 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <CheckCircle2 size={24} />
                                </div>
                                <p className="text-xl font-bold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-muted py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-heading font-bold mb-16 text-center border-b-4 border-primary inline-block mx-auto pb-2">How We Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, i) => (
                            <div key={i} className="relative p-8 rounded-2xl bg-background border border-border">
                                <div className="text-5xl font-black text-primary/10 absolute top-4 right-4">{i + 1}</div>
                                <h3 className="text-xl font-heading font-bold mb-4">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed font-medium">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-background py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-sm">
                                <h3 className="text-lg font-bold mb-2 flex gap-3 text-foreground">
                                    <span className="text-primary font-bold">Q:</span> {faq.q}
                                </h3>
                                <p className="text-muted-foreground font-medium pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="max-w-7xl mx-auto px-4 py-24 border-t border-border">
                <h2 className="text-2xl font-heading font-bold mb-8 uppercase tracking-widest opacity-60">Related Business Solutions</h2>
                <div className="flex flex-wrap gap-4">
                    {relatedServices.map((service, i) => (
                        <Button key={i} variant="outline" asChild className="rounded-full px-8 h-12 font-bold hover:border-primary transition-all">
                            <Link href={service.href}>{service.title} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-background py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <div className="bg-foreground text-background p-16 md:p-24 rounded-3xl border border-primary/20 relative overflow-hidden group shadow-2xl">
                        <Zap className="absolute -bottom-10 -left-10 text-primary/10 group-hover:scale-110 transition-transform duration-700" size={300} />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Let’s Talk About the Right Next Step</h2>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(249,6,6,0.3)] hover:scale-105 transition-transform" asChild>
                                    <Link href="/contact">Book a Free Consultation</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold rounded-full border-background/20 text-background hover:bg-background/10 transition-colors" asChild>
                                    <Link href="/contact">Request a Callback</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
