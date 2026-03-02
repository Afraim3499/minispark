import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart2, Zap } from "lucide-react";

export const revalidate = 3600;

async function getCaseStudies() {
    const { data, error } = await supabase
        .from("case_studies")
        .select("*")
        .order("published_at", { ascending: false });

    if (error) {
        console.error("Error fetching case studies:", error);
        return [];
    }
    return data;
}

export default async function CaseStudiesPage() {
    const cases = await getCaseStudies();

    return (
        <div className="pb-20">
            <section className="bg-foreground text-background py-24 px-4 overflow-hidden relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight max-w-4xl">
                        Work Built to Make Businesses Look <span className="text-primary italic">Stronger</span> and Perform Better
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-2xl leading-relaxed italic border-l-4 border-primary pl-6 font-medium">
                        Explore selected work that shows how we solve branding, visibility, website, and customer system challenges.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
            </section>

            <section className="max-w-7xl mx-auto px-4 py-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold italic border-l-8 border-primary pl-6">Featured Projects</h2>
                        <p className="mt-4 text-muted-foreground text-lg italic uppercase tracking-widest font-bold opacity-60">Measurable Business Outcomes</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {cases.map((cs) => (
                        <CaseStudyCard key={cs.id} cs={cs} />
                    ))}

                    {/* Fallback sample if no data yet */}
                    {cases.length === 0 && (
                        <>
                            <SampleCase
                                title="Building a Professional Digital Presence for a Service Firm"
                                client="Global Advisory"
                                problem="Weak brand trust and zero online visibility."
                                solution="Full website development, Google Business profile optimization, and content strategy."
                                outcome="140% growth in local search visibility and 3x more qualified inquiries."
                            />
                            <SampleCase
                                title="Optimizing E-commerce Confidence and Checkout Flow"
                                client="Modern Retail"
                                problem="High cart abandonment and low customer trust."
                                solution="E-commerce store redesign, Meta Pixel tracking fix, and conversion path refinement."
                                outcome="6.4x ROAS on marketing spend and 40% reduction in cart abandonment."
                            />
                        </>
                    )}
                </div>
            </section>

            {/* Work CTA */}
            <section className="max-w-5xl mx-auto px-4 py-24">
                <div className="bg-muted p-12 md:p-20 rounded-3xl border border-primary/20 text-center relative overflow-hidden">
                    <Zap className="absolute top-10 right-10 text-primary/10" size={150} />
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 italic">Looking for Something Similar?</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto italic font-medium">
                        We help businesses solve specific branding, visibility, and operational problems. Let’s talk about your project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full group shadow-[0_0_20px_rgba(249,6,6,0.3)]" asChild>
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold rounded-full" asChild>
                            <Link href="/services">View Our Services</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function CaseStudyCard({ cs }: { cs: any }) {
    return (
        <Card className="overflow-hidden hover:shadow-2xl transition-all border-border/50 group bg-card">
            <div className="aspect-video relative overflow-hidden bg-muted">
                {cs.featured_image_url && (
                    <img src={cs.featured_image_url} alt={cs.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                    <Badge className="w-fit mb-4 bg-primary text-primary-foreground font-bold px-4 py-1 uppercase tracking-widest">{cs.industry || "Business Solutions"}</Badge>
                    <h3 className="text-3xl font-heading font-bold text-white leading-tight">{cs.title}</h3>
                </div>
            </div>
            <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-6 border-b border-primary/20 pb-4">
                    <BarChart2 size={18} /> Outcomes: {cs.outcomes_json?.main || "Proven Business Growth"}
                </div>
                <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed italic font-medium">
                        "{cs.challenge || "We focused on solving core brand trust and visibility challenges to drive measurable performance."}"
                    </p>
                </div>
            </CardHeader>
            <CardContent className="p-8 pt-0 mt-4 flex justify-between items-center bg-muted/30">
                <Link href={`/case-studies/${cs.slug}`} className="flex items-center font-bold text-primary hover:translate-x-2 transition-all group">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <span className="text-xs font-bold uppercase tracking-widest opacity-60 text-muted-foreground">{cs.client_name}</span>
            </CardContent>
        </Card>
    );
}

function SampleCase({ title, client, problem, solution, outcome }: any) {
    return (
        <div className="p-10 rounded-3xl bg-muted/30 border border-border group flex flex-col h-full hover:border-primary/40 transition-all">
            <div className="flex justify-between items-start mb-6">
                <Badge variant="outline" className="border-primary/40 text-primary uppercase px-4 py-1 font-bold tracking-widest">{client}</Badge>
                <div className="p-3 bg-card rounded-xl shadow-sm border border-border"><Zap className="text-primary" /></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 group-hover:text-primary transition-colors">{title}</h3>

            <div className="space-y-6 flex-grow">
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-black text-muted-foreground mb-2">Problem</h4>
                    <p className="text-foreground font-medium italic">"{problem}"</p>
                </div>
                <div>
                    <h4 className="text-xs uppercase tracking-widest font-black text-muted-foreground mb-2">Solution</h4>
                    <p className="text-foreground font-medium">{solution}</p>
                </div>
                <div className="pt-6 border-t border-border">
                    <h4 className="text-xs uppercase tracking-widest font-black text-primary mb-2">Business Outcome</h4>
                    <p className="text-xl font-heading font-bold italic">{outcome}</p>
                </div>
            </div>

            <Button variant="link" className="p-0 h-auto self-start font-bold mt-10 group text-primary" asChild>
                <Link href="/contact">
                    Talk About Your Business <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
            </Button>
        </div>
    );
}
