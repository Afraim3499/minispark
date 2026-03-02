"use client";

import React from "react";
import { type LucideIcon, Megaphone, Compass, Globe, ShoppingCart, Layers, Users, Target, MapPin, Gauge, Play, PhoneCall, MessageSquare, Zap, BookOpen, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const IconMap: Record<string, LucideIcon> = {
    Megaphone,
    Compass,
    Globe,
    ShoppingCart,
    Layers,
    Users,
    Target,
    MapPin,
    Gauge,
    Play,
    PhoneCall,
    MessageSquare,
    Zap,
    BookOpen,
    PenTool,
};

interface HollowGraphic3DProps {
    iconName: string;
    topLeft: {
        subtitle: string;
        title: string;
        footer?: string;
    };
    bottomRight: {
        subtitle: string;
        title: string;
    };
    className?: string;
}

export function HollowGraphic3D({ iconName, topLeft, bottomRight, className }: HollowGraphic3DProps) {
    const Icon = IconMap[iconName] || Zap;

    return (
        <div className={cn("relative flex items-center justify-center min-h-[400px] w-full group", className)}>
            {/* Ambient Deep Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square flex items-center justify-center preserve-3d perspective-1000">

                {/* Layer 1: The Deep Shadow/Glow (Back) */}
                <Icon
                    className="absolute text-primary/30 w-full h-full scale-[0.82] blur-[8px] translate-x-8 translate-y-8 transition-transform duration-700 ease-out group-hover:translate-x-12 group-hover:translate-y-12"
                    strokeWidth={1.5}
                />

                {/* Layer 2: 3D Extrusion Base (Dark Red) */}
                <Icon
                    className="absolute text-primary/60 w-full h-full scale-[0.82] translate-x-4 translate-y-4 transition-transform duration-700 ease-out group-hover:translate-x-6 group-hover:translate-y-6"
                    strokeWidth={1}
                />
                <Icon
                    className="absolute text-primary/80 w-full h-full scale-[0.82] translate-x-2 translate-y-2 transition-transform duration-700 ease-out group-hover:translate-x-3 group-hover:translate-y-3"
                    strokeWidth={1}
                />

                {/* Layer 3: Front Hollow Face (Crisp Red + Champagne Highlight) */}
                <Icon
                    className="relative text-primary w-full h-full scale-[0.82] drop-shadow-[0_0_15px_rgba(249,6,6,0.3)] z-10 transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                    strokeWidth={0.75}
                />

                {/* Inner Metallic Highlight on the Front Face */}
                <Icon
                    className="absolute text-white w-full h-full scale-[0.82] opacity-40 z-20 pointer-events-none transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                    strokeWidth={0.25}
                />

                {/* Floating 3D Typography Panels (No Backgrounds) */}
                <div className="absolute top-2 md:top-0 -left-4 md:-left-24 lg:-left-28 z-30 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-1 pl-1">{topLeft.subtitle}</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-none tracking-tighter drop-shadow-[0_2px_1px_rgba(0,0,0,1)]">{topLeft.title}</div>
                    {topLeft.footer && (
                        <div className="text-base md:text-lg font-bold text-primary mt-2 pl-1 italic">{topLeft.footer}</div>
                    )}
                </div>

                <div className="absolute bottom-2 md:bottom-0 -right-4 md:-right-24 lg:-right-28 z-30 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] text-right">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/70 mb-1 pr-1">{bottomRight.subtitle}</div>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary leading-none tracking-tighter drop-shadow-[0_2px_1px_rgba(0,0,0,1)] opacity-90">{bottomRight.title}</div>
                </div>
            </div>
        </div>
    );
}
