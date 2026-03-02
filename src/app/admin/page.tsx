import { supabase } from "@/lib/supabase";
import { Users, FileText, MessageSquareQuote } from "lucide-react";
import Link from "next/link";

export const revalidate = 0; // Ensure fresh data on every load for admin dashboard

export default async function AdminDashboardPage() {
    const { count: leadsCount } = await supabase.from('lead_submissions').select('*', { count: 'exact', head: true });
    const { count: blogsCount } = await supabase.from('posts').select('*', { count: 'exact', head: true });
    const { count: pendingCommentsCount } = await supabase.from('comments').select('*', { count: 'exact', head: true }).eq('status', 'pending');

    return (
        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-foreground">Dashboard Overview</h1>
                <p className="text-muted-foreground text-sm md:text-lg mt-2 mb-8">Welcome to your operator panel. Here is a quick snapshot of your digital performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/admin/leads" className="block hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 h-full flex flex-col justify-between relative group hover:shadow-primary/10 hover:shadow-xl transition-all">
                        <div className="flex flex-row items-center justify-between pb-2 mb-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Total Leads</h3>
                            <Users className="h-6 w-6 text-primary opacity-80" />
                        </div>
                        <div className="text-5xl font-black font-heading text-foreground">{leadsCount || 0}</div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
                    </div>
                </Link>

                <Link href="/admin/blogs" className="block hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 h-full flex flex-col justify-between relative group hover:shadow-primary/10 hover:shadow-xl transition-all">
                        <div className="flex flex-row items-center justify-between pb-2 mb-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Total Blogs</h3>
                            <FileText className="h-6 w-6 text-primary opacity-80" />
                        </div>
                        <div className="text-5xl font-black font-heading text-foreground">{blogsCount || 0}</div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
                    </div>
                </Link>

                <Link href="/admin/comments" className="block hover:-translate-y-1 transition-transform duration-300 relative group">
                    <div className={`bg-card border shadow-sm rounded-2xl p-6 h-full flex flex-col justify-between overflow-hidden transition-all hover:shadow-primary/10 hover:shadow-xl ${(pendingCommentsCount || 0) > 0 ? 'border-primary/50' : 'border-border'}`}>
                        {(pendingCommentsCount || 0) > 0 && (
                            <div className="absolute top-0 right-0 w-2 h-full bg-primary animate-pulse"></div>
                        )}
                        <div className="flex flex-row items-center justify-between pb-2 mb-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">Pending Comments</h3>
                            <MessageSquareQuote className="h-6 w-6 text-primary opacity-80" />
                        </div>
                        <div>
                            <div className="text-5xl font-black font-heading text-foreground">{pendingCommentsCount || 0}</div>
                            {(pendingCommentsCount || 0) > 0 && (
                                <p className="text-xs text-primary font-bold mt-2 tracking-widest uppercase">Requires Review</p>
                            )}
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl"></div>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-8">
                <div className="bg-card border border-border shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center min-h-[200px] text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-bold font-heading mb-2">System Status: Optimal</h3>
                    <p className="text-muted-foreground text-sm max-w-md">Your site is rendering cleanly. The comment engine is securely capturing inbound engagement, and the lead flow is structurally sound.</p>
                </div>
            </div>
        </div>
    );
}
