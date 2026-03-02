"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    if (pathname.startsWith("/admin")) return null;

    return (
        <footer className="bg-foreground text-background border-t border-white/5 py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-6">
                            <Zap className="text-primary fill-primary" size={28} />
                            <span className="text-white">MiniSpark</span>
                            <span className="text-primary font-mono">.digital</span>
                        </Link>
                        <p className="mt-4 text-white/50 max-w-sm text-lg leading-relaxed font-medium">
                            We help businesses build stronger branding, better websites, smarter customer systems, and clearer digital growth.
                        </p>
                        <div className="flex gap-6 mt-8">
                            <Link href="https://www.facebook.com/MiniSpark.Digital" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/minispark.digital/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/minisparkdigital" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 underline decoration-primary/20 decoration-2 underline-offset-8">Solutions</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services#brand" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">Brand & Visibility</Link></li>
                            <li><Link href="/services#web" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">Websites & Digital</Link></li>
                            <li><Link href="/services#sales" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">Sales & Systems</Link></li>
                            <li><Link href="/services#strategy" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">Strategic Advisory</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 underline decoration-primary/20 decoration-2 underline-offset-8">Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">About Us</Link></li>
                            <li><Link href="/case-studies" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">Case Studies</Link></li>
                            <li><Link href="/contact" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">Contact</Link></li>
                            <li><Link href="/services" className="text-white/70 hover:text-primary transition-colors font-bold uppercase text-xs tracking-widest">All Services</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
                    <p>© {currentYear} MiniSpark Digital Business Solutions. Built for real business needs.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
