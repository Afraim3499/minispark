"use client";

import { useState, useEffect } from "react";
import { Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminAuthGate({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [pin, setPin] = useState("");
    const [error, setError] = useState(false);

    // Hardcoded demo pin for the current MVP phase
    const CORRECT_PIN = "MS_2024!!nEw";

    useEffect(() => {
        const auth = localStorage.getItem("minispark_admin_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === CORRECT_PIN) {
            localStorage.setItem("minispark_admin_auth", "true");
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPin("");
        }
    };

    if (isLoading) return null;

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-foreground text-background flex items-center justify-center p-4">
                <div className="w-full max-w-sm bg-card p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-2xl font-heading font-bold text-white">Operator Access</h1>
                        <p className="text-muted-foreground text-sm mt-2 text-center">Enter your secure PIN to access the MiniSpark management console.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                type="password"
                                placeholder="Enter secure PIN"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className={`h-14 text-center text-2xl tracking-widest bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary ${error ? "border-red-500 ring-1 ring-red-500" : ""}`}
                                autoFocus
                            />
                            {error && <p className="text-red-500 text-xs text-center font-bold">INCORRECT PIN</p>}
                        </div>
                        <Button type="submit" className="w-full h-14 text-lg font-bold bg-primary text-white hover:bg-primary/90">
                            Unlock System
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
