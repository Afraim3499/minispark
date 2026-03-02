import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Compass } from "lucide-react";

export const metadata = {
    title: "Business Strategy Services for Market Research, Positioning, and Growth | MiniSpark",
    description: "Get practical business strategy support through market research, competitor analysis, product analysis, positioning, and growth planning.",
};

export default function BusinessStrategyPage() {
    return (
        <ServicePageTemplate slug="business-growth-strategy"
            title="Make Better Business Decisions With Clear Research and Smarter Positioning"
            subheading="We help businesses understand their market, analyze competitors, improve offers, and build a clearer strategy for branding and growth."
            primaryCTA="Get a Business Strategy Plan"
            secondaryCTA="Talk About Your Business"
            iconName="Compass"
            topLeft={{
                subtitle: "Clear Direction",
                title: "Move Smarter"
            }}
            bottomRight={{
                subtitle: "Next Steps",
                title: "Get Clear"
            }}
            problems={[
                "Scaling without a clear understanding of market demand",
                "Product offerings that don't clearly differentiate from competitors",
                "Marketing spend directed at the wrong audience segments",
                "Confusion about where to invest for the next phase of growth",
                "Struggling to articulate the unique value proposition",
                "Reactive decision-making rather than proactive planning"
            ]}
            whyItMatters="Strategy is the difference between movement and progress. Without a clear positioning in the market, even the best products remain invisible. We provide the data and clarity needed to choose the right path."
            whatWeDo={[
                "Comprehensive Market Research",
                "In-depth Competitor Analysis",
                "Service/Product Offer Refinement",
                "Ideal Audience Profiling",
                "Brand Positioning Strategy",
                "Growth Roadmap Development"
            ]}
            whatWeImprove={[
                "Market Entry Opportunities",
                "Competitor Gaps & Weaknesses",
                "Customer Buying Triggers",
                "Price vs Value Perception",
                "Messaging Clarity & Impact",
                "Business Goal Prioritization"
            ]}
            deliverables={[
                "Strategic Positioning Report",
                "Competitor Intelligence Matrix",
                "Customer Persona Breakdown",
                "Adjusted Offer Framework",
                "12-Month Growth Roadmap",
                "Actionable Execution Plan"
            ]}
            process={[
                { title: "Discovery", desc: "We deep-dive into your current business model, goals, and pain points." },
                { title: "External Research", desc: "We analyze the market and your competitors to find untapped advantages." },
                { title: "Strategy Phase", desc: "We build your unique positioning and refine your core offerings." },
                { title: "The Roadmap", desc: "We deliver a practical, step-by-step plan for your next year of growth." }
            ]}
            whoThisIsFor={[
                "Established Mid-Market Brands",
                "Startups Ready to Scale",
                "Businesses Hitting a Plateau",
                "Founders Seeking Market Clarity"
            ]}
            faqs={[
                { q: "Is this only for new businesses?", a: "No, established businesses often need strategy to pivot, scale, or regain market share after hitting a plateau." },
                { q: "How long does a strategy project take?", a: "Typically 2-4 weeks depending on the depth of the research required." },
                { q: "Will you help me execute the plan?", a: "Absolutely. Our other services are designed to bring your new strategy to life across all digital touchpoints." }
            ]}
            relatedServices={[
                { title: "Website Development", href: "/services/website-development-services" },
                { title: "Content Strategy", href: "/services/content-strategy-services" }
            ]}
        />
    );
}
