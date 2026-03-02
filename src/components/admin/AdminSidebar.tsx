"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CopyPlus, FileText, Inbox, LayoutDashboard, LogOut, MessageSquare, PlusCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Dashboard Overview", href: "/admin", icon: LayoutDashboard, exact: true },
    { name: "Lead Inbox", href: "/admin/leads", icon: Inbox },
    { name: "Blog Manager", href: "/admin/blogs", icon: FileText },
    { name: "Comment Moderation", href: "/admin/comments", icon: MessageSquare },
];

export function AdminSidebar({ onClose }: { onClose?: () => void }) {
    const pathname = usePathname();

    const handleLogout = () => {
        localStorage.removeItem("minispark_admin_auth");
        window.location.href = "/admin"; // Force reload to trigger AuthGate
    };

    return (
        <div className="flex flex-col w-64 h-full bg-card border-r border-border sticky top-0 left-0">
            <div className="h-20 flex items-center px-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl group opacity-80 hover:opacity-100 transition-opacity">
                    <Zap className="text-primary fill-primary group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-foreground">MiniSpark</span>
                </Link>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                <div className="mb-6 px-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">Platform Management</p>
                </div>

                {navigation.map((item) => {
                    const isActive = item.exact ? pathname === item.href : pathname.startsWith(item.href);
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold transition-all group",
                                isActive
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-muted-foreground group-hover:text-primary transition-colors")} />
                            {item.name}
                        </Link>
                    );
                })}

                <div className="mt-8 mb-4 px-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">Quick Actions</p>
                </div>
                <Link
                    href="/admin/blogs/new"
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-bold text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                >
                    <PlusCircle className="w-5 h-5" />
                    New Blog Post
                </Link>
            </nav>

            <div className="p-4 border-t border-border">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-sm font-bold text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-all group"
                >
                    <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Secure Logout
                </button>
            </div>
        </div>
    );
}
