"use client";

import { useState } from "react";
import { AdminAuthGate } from "@/components/admin/AdminAuthGate";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Menu, X } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AdminAuthGate>
            <div className="flex flex-col md:flex-row h-screen w-full bg-background overflow-hidden relative font-sans">

                {/* Mobile Header for Sidebar Toggle */}
                <div className="md:hidden flex items-center justify-between p-4 bg-card border-b border-border z-30">
                    <span className="font-bold text-lg font-heading">Admin Panel</span>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-foreground">
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Fixed/Mobile Sidebar */}
                <aside className={`absolute md:relative w-64 h-full flex-shrink-0 z-20 bg-card transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:block`}>
                    <AdminSidebar onClose={() => setSidebarOpen(false)} />
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 h-[calc(100vh-60px)] md:h-full overflow-y-auto bg-muted/30 relative z-10">
                    {/* Overlay for mobile when sidebar is open */}
                    {sidebarOpen && (
                        <div
                            className="absolute inset-0 bg-black/50 z-10 md:hidden backdrop-blur-sm"
                            onClick={() => setSidebarOpen(false)}
                        />
                    )}
                    {children}
                </main>
            </div>
        </AdminAuthGate>
    );
}
