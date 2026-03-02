"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    {
        name: "Services",
        href: "/services",
        dropdown: [
            { name: "Social Media Marketing", href: "/services/social-media-marketing" },
            { name: "Business Strategy", href: "/services/business-growth-strategy" },
            { name: "Website Development", href: "/services/website-development-services" },
            { name: "E-commerce Solutions", href: "/services/ecommerce-website-development" },
            { name: "Web App Development", href: "/services/web-app-development-services" },
            { name: "Custom CRM", href: "/services/custom-crm-development" },
            { name: "Conversion Tracking", href: "/services/meta-pixel-conversion-tracking" },
            { name: "Google Business Profile", href: "/services/google-business-profile-optimization" },
            { name: "Speed & SEO Optimization", href: "/services/website-speed-seo-optimization" },
            { name: "Video Editing", href: "/services/video-editing-services" },
            { name: "Remote Sales Support", href: "/services/remote-sales-support" },
            { name: "Customer Support Systems", href: "/services/customer-support-operations" },
            { name: "Content Strategy", href: "/services/content-strategy-services" },
        ]
    },
    { name: "Work", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    if (pathname.startsWith("/admin")) return null;

    return (
        <nav className="fixed top-0 w-full z-50 bg-foreground border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
                            <Zap className="text-primary fill-primary" size={28} />
                            <span className="text-white">MiniSpark</span>
                            <span className="text-primary font-mono tracking-tighter">.digital</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <div key={item.name} className="relative group">
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-all hover:-translate-y-0.5 py-2",
                                            isActive
                                                ? "text-white border-b-2 border-white"
                                                : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                        {item.dropdown && <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {item.dropdown && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                                            <div className="bg-foreground border border-white/10 shadow-2xl rounded-xl py-4 px-2 overflow-hidden relative">
                                                {/* Subtle top highlight */}
                                                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                                <div className="grid grid-cols-2 gap-1">
                                                    {item.dropdown.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <Button asChild className="rounded-full font-bold px-6 bg-primary text-white hover:bg-primary/90 transition-colors">
                            <Link href="/contact">Book a Free Consultation</Link>
                        </Button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-white hover:bg-white/10 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-foreground border-b border-white/10 shadow-xl border-t border-t-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <div key={item.name} className="space-y-1">
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={item.href}
                                            onClick={() => !item.dropdown && setIsOpen(false)}
                                            className={cn(
                                                "block px-3 py-2 text-base font-bold uppercase tracking-widest transition-colors",
                                                isActive ? "text-white" : "text-white/60 hover:text-white"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                    {item.dropdown && (
                                        <div className="pl-6 space-y-1 border-l border-white/10 ml-4 py-2">
                                            {item.dropdown.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block px-3 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <div className="pt-4 pb-2 px-3">
                            <Button className="w-full rounded-full font-bold bg-primary text-white hover:bg-primary/90" asChild>
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Book a Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
