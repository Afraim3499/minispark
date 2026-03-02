"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import { HollowGraphic3D } from "./HollowGraphic3D";

export function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-foreground flex flex-col items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-lg animate-in fade-in zoom-in duration-1000">
                <HollowGraphic3D
                    iconName="Zap"
                    topLeft={{
                        subtitle: "Sparking",
                        title: "Growth",
                    }}
                    bottomRight={{
                        subtitle: "Built",
                        title: "Clearly"
                    }}
                    className="scale-75 md:scale-100"
                />

                {/* Simplified Loading Bar */}
                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-64">
                    <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary animate-loading-bar" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes loading-bar {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-loading-bar {
                    animation: loading-bar 2s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
