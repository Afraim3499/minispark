"use client";

import { useState } from "react";
import { format } from "date-fns";
import { MessageSquare, ExternalLink, Calendar, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export function LeadsDashboard({ initialLeads }: { initialLeads: any[] }) {
    const [leads, setLeads] = useState(initialLeads);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLeads = leads.filter((lead) => {
        const searchString = `${lead.full_name} ${lead.company} ${lead.email} ${lead.service_interest}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });

    return (
        <div className="p-8 pb-32">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Lead Inbox</h1>
                    <p className="text-muted-foreground font-medium">Review and manage incoming strategy requests.</p>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            placeholder="Search names, companies, emails..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 h-12 bg-background border-border focus-visible:ring-primary"
                        />
                    </div>
                </div>
            </div>

            {filteredLeads.length === 0 ? (
                <div className="text-center py-20 bg-card border border-border rounded-3xl">
                    <MessageSquare className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-bold text-foreground">No leads found</h3>
                    <p className="text-muted-foreground mt-2">Try adjusting your search or wait for new submissions.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {filteredLeads.map((lead) => (
                        <div key={lead.id} className="bg-card border border-border rounded-2xl p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col lg:flex-row gap-8">

                            {/* Lead Core Info */}
                            <div className="lg:w-1/3 flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                                    <Calendar className="w-4 h-4" />
                                    {format(new Date(lead.created_at), "MMM d, yyyy • h:mm a")}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{lead.full_name}</h3>
                                    <p className="text-primary font-bold">{lead.company}</p>
                                </div>
                                <div className="space-y-2 mt-2">
                                    <p className="text-sm text-foreground">
                                        <span className="text-muted-foreground block text-xs uppercase tracking-widest font-bold mb-1">Email</span>
                                        <a href={`mailto:${lead.email}`} className="hover:underline hover:text-primary transition-colors">{lead.email}</a>
                                    </p>
                                    {lead.website && (
                                        <p className="text-sm text-foreground">
                                            <span className="text-muted-foreground block text-xs uppercase tracking-widest font-bold mb-1">Website</span>
                                            <a href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline hover:text-primary transition-colors">
                                                {lead.website} <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Lead Details */}
                            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 bg-muted/30 p-6 rounded-xl border border-border/50">
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">Service Interest</p>
                                        <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold capitalize">
                                            {lead.service_interest.replace('-', ' ')}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">Marketing Budget</p>
                                        <div className="text-foreground font-bold text-lg">
                                            {lead.budget_range} / mo
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-2">Business Challenge</p>
                                    <div className="text-sm text-foreground leading-relaxed p-4 bg-background border border-border rounded-lg italic">
                                        "{lead.challenge_summary}"
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
