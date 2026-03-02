import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";

export const metadata = {
    title: "Social Media Marketing for Brand Growth, Reach, and Customer Engagement | MiniSpark",
    description: "Build a stronger social media presence that improves visibility, trust, and engagement through strategy, content, and consistent execution.",
};

export default function SocialMediaPage() {
    return (
        <ServicePageTemplate slug="social-media-marketing"
            title="Build a Social Media Presence That Makes Your Brand Easier to Notice and Trust"
            subheading="We help businesses use social media to improve visibility, present themselves more professionally, and stay more consistent in the eyes of customers."
            primaryCTA="Improve My Social Media Presence"
            secondaryCTA="Book a Free Consultation"
            iconName="Megaphone"
            topLeft={{
                subtitle: "Brand Reach",
                title: "Grows Daily"
            }}
            bottomRight={{
                subtitle: "Stay Visible",
                title: "Stay Relevant"
            }}
            problems={[
                "Inconsistent posting that makes the brand look inactive",
                "Weak branding that fails to stand out in feeds",
                "Low engagement and content that doesn't trigger action",
                "Unclear messaging that confuses potential customers",
                "Content without a clear business direction",
                "A page that exists but does not actively build trust"
            ]}
            whyItMatters="Your social media presence is often the first place a modern customer looks to verify your legitimacy. Most business pages stop growing because they lack a clear positioning and a consistent visual brand that commands attention."
            whatWeDo={[
                "Strategic Content Direction",
                "Brand Page Positioning",
                "Structured Posting Schedules",
                "Visual Brand Consistency",
                "Engagement-Focused Planning",
                "Campaign Creative Support"
            ]}
            whatWeImprove={[
                "Audience Behavior Analysis",
                "Content Theme Development",
                "Competitor Social Benchmarking",
                "Brand Tone & Presentation",
                "Post Performance Patterns",
                "Content Consistency Gaps"
            ]}
            deliverables={[
                "Social Media Strategy Blueprint",
                "Monthly Content Calendar",
                "Custom Branded Templates",
                "Engagement Analytics Report",
                "Optimized Profile Bio & Assets",
                "Paid Campaign Strategy"
            ]}
            process={[
                { title: "Audit & Analysis", desc: "We review your current social presence and identify why it isn't converting." },
                { title: "Strategy Setup", desc: "We define your brand voice, content pillars, and visual style." },
                { title: "Content Creation", desc: "We develop high-quality assets that spark engagement and trust." },
                { title: "Refine & Grow", desc: "We monitor performance and adjust the strategy to maximize reach." }
            ]}
            whoThisIsFor={[
                "Growing Service Businesses",
                "Personal Brands & Founders",
                "E-commerce Brands",
                "Local Business Owners"
            ]}
            faqs={[
                { q: "How often should my business post?", a: "Consistency matters more than frequency. We help you find a sustainable rhythm that keeps you visible without sacrificing quality." },
                { q: "Which platforms should I focus on?", a: "We analyze where your specific target audience spends their time—whether it's Instagram, LinkedIn, or Facebook." },
                { q: "Do you handle the actual posting?", a: "Yes, we can manage the full end-to-end process from creation to scheduled distribution." }
            ]}
            relatedServices={[
                { title: "Content Strategy", href: "/services/content-strategy-services" },
                { title: "Video Editing", href: "/services/video-editing-services" }
            ]}
        />
    );
}
