import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MessageSquare, Phone, MapPin, Zap, CheckCircle2, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | MiniSpark Digital",
    description: "Ready to improve your digital presence? Contact MiniSpark Digital for a free consultation to discuss your website, branding, or growth strategy needs.",
};

export default function ContactPage() {
    return (
        <div className="pb-20">
            <section className="bg-foreground text-background h-[100vh] min-h-[600px] flex flex-col justify-center pt-20 px-4 overflow-hidden relative border-b border-primary/20">
                <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
                    <div className="flex flex-col gap-6 mb-8 items-center md:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase border border-white/20 w-fit">
                            Start a Conversation
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] max-w-4xl text-center md:text-left text-white">
                            Let’s Talk About What Your Business <span className="text-primary">Needs Next</span>
                        </h1>
                    </div>
                    <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl border-l-4 border-primary/50 pl-4 font-medium mx-auto md:mx-0 text-center md:text-left">
                        Whether you need stronger branding, a better website, more visibility, or smoother customer systems, we can help you plan the right next move.
                    </p>
                </div>
                {/* Abstract geometric background element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 blur-2xl" />
            </section>

            <section className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1 space-y-12">
                    <div className="bg-muted p-8 rounded-3xl border border-border">
                        <h2 className="text-2xl font-heading font-bold mb-8 border-b-2 border-primary/30 pb-2 inline-block">Our Process</h2>
                        <div className="space-y-8">
                            <Expectation number="1" title="Initial Review" desc="We review your business goals and current setup to understand your needs." />
                            <Expectation number="2" title="Consultation Call" desc="We discuss the right direction and priority for your digital presence." />
                            <Expectation number="3" title="Clear Roadmap" desc="We suggest a practical starting point mapped to your business objectives." />
                        </div>
                    </div>

                    <div className="space-y-6 pt-10 border-t border-border">
                        <h3 className="text-xs uppercase tracking-widest font-black text-muted-foreground mb-6">Direct Channels</h3>
                        <ContactInfo icon={<Mail className="text-primary/70" />} label="Email" value="minisparkbd@gmail.com" />
                        <ContactInfo icon={<MapPin className="text-primary/70" />} label="Office" value="Dhaka, Bangladesh | Global Digital Platforms" />

                        <div className="flex gap-4 pt-6 border-t border-border mt-6">
                            <Link href="https://www.facebook.com/MiniSpark.Digital" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-xl border border-transparent hover:border-primary/20 hover:text-primary transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/minispark.digital/" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-xl border border-transparent hover:border-primary/20 hover:text-primary transition-all">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/minisparkdigital" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-xl border border-transparent hover:border-primary/20 hover:text-primary transition-all">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-background border border-border shadow-sm">
                        <p className="text-muted-foreground font-medium leading-relaxed">
                            "We focus on understanding your business deeply before recommending solutions. Let’s discuss your goals and map out a practical path forward."
                        </p>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="mb-12">
                        <h2 className="text-3xl font-heading font-bold mb-4">Request a Consultation</h2>
                        <p className="text-muted-foreground text-lg font-medium">Tell us about your business and what you need help with.</p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}

function Expectation({ title, desc, number }: any) {
    return (
        <div className="flex gap-6 items-start">
            <div className="text-3xl font-black text-primary/30 shrink-0 select-none">0{number}</div>
            <div>
                <h4 className="font-heading font-bold text-foreground text-lg mb-1">{title}</h4>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function ContactInfo({ icon, label, value }: any) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="p-3 bg-muted rounded-xl border border-transparent group-hover:border-primary/20 transition-all">
                {icon}
            </div>
            <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-muted-foreground">{label}</p>
                <p className="font-bold text-foreground">{value}</p>
            </div>
        </div>
    );
}
