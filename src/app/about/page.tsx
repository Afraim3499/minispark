import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Palette, Search, Zap, Facebook, Instagram, Linkedin, TrendingUp, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | MiniSpark Digital",
    description: "Learn how MiniSpark Digital helps businesses look better, communicate clearly, and grow through practical digital execution and business-focused thinking.",
};

export default function AboutPage() {
    return (
        <div className="pb-20">
            <section className="bg-foreground text-background h-[100vh] min-h-[600px] flex flex-col justify-center pt-20 px-4 overflow-hidden relative border-b border-white/5">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col gap-6 mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase border border-primary/20 w-fit">
                            <Zap size={14} className="fill-primary" /> Clarity. Trust. Growth.
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] max-w-4xl text-white">
                            We Help Businesses Look Better, Communicate Better, and <span className="text-primary italic">Grow</span> More Clearly
                        </h1>
                    </div>
                    <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl border-l-4 border-primary/50 pl-4 font-medium italic">
                        Our approach combines business thinking, practical execution, and clear communication to help brands feel more professional and perform more effectively.
                    </p>
                    <div className="flex gap-6 mt-12 mb-4">
                        <Link href="https://www.facebook.com/MiniSpark.Digital" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                            <Facebook size={24} />
                        </Link>
                        <Link href="https://www.instagram.com/minispark.digital/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                            <Instagram size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/company/minisparkdigital" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
            </section>

            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic">What We Believe Good Digital Work Should Do</h2>
                        <div className="space-y-8 text-lg text-muted-foreground font-medium leading-relaxed">
                            <p className="italic border-b border-border pb-6">
                                "Good digital work should improve clarity, trust, customer experience, and business confidence. It isn't just about how a site looks—it's about how it makes a customer feel and how it makes a business run."
                            </p>
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">How We Think</h3>
                            <p>
                                We look at the full picture—brand perception, customer journey, digital visibility, and operational flow. We don't just deliver tasks; we solve brand, visibility, customer, and workflow problems.
                            </p>
                        </div>
                    </div>

                    <div className="p-10 md:p-16 rounded-3xl bg-muted/30 border border-border relative overflow-hidden">
                        <h2 className="text-3xl font-heading font-bold mb-10">Why Clients Work With Us</h2>
                        <div className="grid grid-cols-1 gap-8">
                            <AboutPoint title="Simple Communication" desc="We explain complex things simply, so you always understand what is being built and why." />
                            <AboutPoint title="Practical Recommendations" desc="Everything is built around what helps your business perform better in real life." />
                            <AboutPoint title="Business-Focused Solutions" desc="We resolve technical blocks while keeping your long-term business goals in mind." />
                            <AboutPoint title="Flexible Support" desc="We act as your digital business department, managing everything from branding to systems." />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-foreground text-background py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-heading font-bold mb-16 text-center italic">Who We Work With</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ClientType icon={<TrendingUp className="text-primary" />} title="Growing Businesses" desc="Companies ready to scale their digital presence and reach a wider audience." />
                        <ClientType icon={<Globe className="text-primary" />} title="Service Brands" desc="Professional firms needing stronger authority, trust, and lead handling." />
                        <ClientType icon={<Search className="text-primary" />} title="Local Businesses" desc="Local clinics, shops, and firms needing better visibility and discovery." />
                        <ClientType icon={<Zap className="text-primary" />} title="E-commerce Brands" desc="Online shops looking to reduce friction and build buyer confidence." />
                        <ClientType icon={<Palette className="text-primary" />} title="Founders from Scratch" desc="New ventures needing a professional foundation from day one." />
                        <ClientType icon={<Users className="text-primary" />} title="Scaling Teams" desc="Businesses needing better internal tools and customer support systems." />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-5xl mx-auto px-4 text-center py-24">
                <div className="bg-muted p-16 md:p-24 rounded-3xl border border-primary/20 relative overflow-hidden group">
                    <Zap className="absolute -top-10 -right-10 text-primary/5 group-hover:scale-110 transition-transform duration-500" size={300} />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Let’s build something that <span className="text-primary italic">fits</span> your business</h2>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                            <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full group shadow-[0_0_20px_rgba(249,6,6,0.3)]" asChild>
                                <Link href="/contact">Talk About Your Business</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold rounded-full" asChild>
                                <Link href="/services">See Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function AboutPoint({ title, desc }: any) {
    return (
        <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
                <h4 className="text-xl font-heading font-bold text-foreground mb-1">{title}</h4>
                <p className="text-muted-foreground font-medium">{desc}</p>
            </div>
        </div>
    );
}

function ClientType({ icon, title, desc }: any) {
    return (
        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col items-center text-center">
            <div className="mb-6 p-4 rounded-full bg-white/5 text-primary">{icon}</div>
            <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
            <p className="text-sm opacity-70 leading-relaxed font-medium">{desc}</p>
        </div>
    );
}

