import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { PenTool } from "lucide-react";

export const metadata = {
    title: "Content Strategy for Better Visibility and Brand Trust | MiniSpark",
    description: "Build a clearer content strategy that helps your brand stay visible, communicate better, and become easier to find online.",
};

export default function ContentStrategyPage() {
    return (
        <ServicePageTemplate slug="content-strategy-services"
            title="Create Content That Helps People Find You, Understand You, and Trust You Faster"
            subheading="We help businesses plan content that improves visibility, supports branding, and makes communication more consistent across digital platforms."
            primaryCTA="Build My Content Strategy"
            secondaryCTA="Talk About My Brand Content"
            iconName="PenTool"
            topLeft={{
                subtitle: "Clear Content",
                title: "Earns Trust"
            }}
            bottomRight={{
                subtitle: "Written To",
                title: "Be Found"
            }}
            problems={[
                "Random posting that doesn't build long-term authority",
                "Inconsistent brand message that confuses customers",
                "Weak authority compared to industry competitors",
                "Content that doesn't align with actual business goals",
                "Low discoverability in search and social feeds",
                "High effort for low-traffic results"
            ]}
            whyItMatters="Content isn't just about 'noise'—it's about authority. If your business isn't producing clear, well-structured content, you are letting your competitors own the conversation. We plan content that makes you the obvious choice."
            whatWeDo={[
                "Full Content Direction Planning",
                "Keyword & Topic Research",
                "Messaging Consistency Framework",
                "AI-Ready Indexing Structure",
                "Audience-Focused Theme Mapping",
                "Cross-Platform Content Assets"
            ]}
            whatWeImprove={[
                "Message/Brand Alignment",
                "Search Visibility Potential",
                "Audience Relevance Scores",
                "Content Production Workflow",
                "Content Repurposing Value",
                "Overall Authority Authority"
            ]}
            deliverables={[
                "Comprehensive Content Strategy",
                "Targeted Content Plan",
                "SEO Keyword Focus List",
                "Brand Voice & Style Guide",
                "Content Distribution Roadmap",
                "Content Performance Metrics"
            ]}
            process={[
                { title: "Topic Research", desc: "We find exactly what your customers are searching for and what gaps exist in your current content." },
                { title: "Strategic Map", desc: "We build a plan that balances search visibility with brand authority." },
                { title: "Creation Guide", desc: "We provide the structures and outlines needed to produce high-quality work efficiently." },
                { title: "Optimization", desc: "We refine the content so it is indexed correctly by search engines and AI tools." }
            ]}
            whoThisIsFor={[
                "B2B Service Brands",
                "Educational Platforms",
                "Industry Thought Leaders",
                "E-commerce Content Hubs"
            ]}
            faqs={[
                { q: "Is this just blogging?", a: "No. While articles are part of it, we look at your social content, landing pages, and overall business communication." },
                { q: "How does AI indexing work?", a: "We structure your content so it is easily understood and cited by AI engines like Perplexity or ChatGPT." },
                { q: "Will this help my Google rank?", a: "Yes. Fresh, high-authority content is the primary driver of long-term organic search results." }
            ]}
            relatedServices={[
                { title: "Social Media Marketing", href: "/services/social-media-marketing" },
                { title: "Website Speed & SEO", href: "/services/website-speed-seo-optimization" }
            ]}
        />
    );
}
