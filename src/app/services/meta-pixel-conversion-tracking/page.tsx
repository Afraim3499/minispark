import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Target } from "lucide-react";

export const metadata = {
    title: "Meta Pixel and Conversion Tracking Setup | MiniSpark",
    description: "Track customer actions more clearly with proper Meta Pixel, Conversion API, and event setup so your marketing becomes more reliable.",
};

export default function ConversionTrackingPage() {
    return (
        <ServicePageTemplate slug="meta-pixel-conversion-tracking"
            title="Stop Losing Important Data and Understand What Your Marketing Is Really Doing"
            subheading="We set up tracking properly so you can make better decisions based on real customer behavior, not guesswork."
            primaryCTA="Fix My Tracking Setup"
            secondaryCTA="Book a Free Consultation"
            iconName="Target"
            topLeft={{
                subtitle: "Real Data",
                title: "Guides Better"
            }}
            bottomRight={{
                subtitle: "Every Click",
                title: "Counts More"
            }}
            problems={[
                "Missing data from iOS users and privacy blockers",
                "Broken events that report incorrect sale amounts",
                "Inaccurate reporting making ads look like they failed",
                "Ad platforms not learning which customers are best",
                "Unclear understanding of the customer path to purchase",
                "Wasted budget on ads that aren't actually converting"
            ]}
            whyItMatters="You can't scale what you can't measure. In a world of increasing privacy, basic tracking isn't enough. We implement advanced server-side tracking so you can see the truth behind your marketing spend."
            whatWeDo={[
                "Meta Pixel Event Integration",
                "Server-Side Conversion API (CAPI)",
                "Full Marketing Funnel Mapping",
                "Custom Event Action Tracking",
                "Data Deduplication Setup",
                "Attribution Clarity Reporting"
            ]}
            whatWeImprove={[
                "Primary Conversion Signals",
                "Micro-Conversion Points",
                "Event Match Quality",
                "Tracking Attribution Gaps",
                "Reporting Bias & Errors",
                "Ad Platform Optimization"
            ]}
            deliverables={[
                "Verified Meta Pixel Setup",
                "Operational Conversion API",
                "GTM (Google Tag Manager) Container",
                "Custom Event Tracking Suite",
                "Tracking Audit Documentation",
                "Performance Data Dashboard"
            ]}
            process={[
                { title: "Audit", desc: "We review your current tracking quality and identifying data loss points." },
                { title: "Technical Build", desc: "We implement the code and server tags needed for accurate data flow." },
                { title: "Verification", desc: "We test every button and purchase to ensure the math adds up in your dashboard." },
                { title: "Reporting", desc: "We build a view that allows you to see the real ROAS of your campaigns." }
            ]}
            whoThisIsFor={[
                "Performance Advertisers",
                "E-commerce Store Owners",
                "Marketing Agencies",
                "Data-Driven Founders"
            ]}
            faqs={[
                { q: "Why is my Pixel showing different numbers than my sales?", a: "This is often due to browser blockers or deduplication errors. We fix this with server-side CAPI." },
                { q: "Is this only for Facebook Ads?", a: "While we focus on Meta, these systems also support Google Ads and TikTok tracking for a unified view." },
                { q: "Do I need a developer for this?", a: "We handle the full technical implementation so you don't have to." }
            ]}
            relatedServices={[
                { title: "E-commerce Solutions", href: "/services/ecommerce-website-development" },
                { title: "Remote Sales Support", href: "/services/remote-sales-support" }
            ]}
        />
    );
}
