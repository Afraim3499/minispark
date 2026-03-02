import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { MessageSquare } from "lucide-react";

export const metadata = {
    title: "Customer Support Systems for Faster Replies | MiniSpark",
    description: "Set up better customer support across WhatsApp, calls, and CRM so your business can respond faster and serve customers more consistently.",
};

export default function CustomerSupportPage() {
    return (
        <ServicePageTemplate slug="customer-support-operations"
            title="Stop Losing Customer Trust to Slow Replies and Weak Communication"
            subheading="We help businesses create smoother customer support systems that improve communication, response time, and customer confidence."
            primaryCTA="Improve My Customer Support"
            secondaryCTA="Discuss My Support Workflow"
            iconName="MessageSquare"
            topLeft={{
                subtitle: "Quick Help",
                title: "Builds Trust"
            }}
            bottomRight={{
                subtitle: "Better Support",
                title: "Feels Reliable"
            }}
            problems={[
                "Slow reply times that frustrate customers",
                "Missed messages across multiple platforms",
                "Weak coordination between team members",
                "Inconsistent service quality and tone",
                "Customers feeling ignored or unheard",
                "Poor follow-up leading to lost repeat business"
            ]}
            whyItMatters="Customer support isn't just a cost—it's your most important retention tool. If a business responds slowly when there is a problem, the trust is broken forever. We build systems that make you look like a top-tier operator."
            whatWeDo={[
                "Support Workflow Architecture",
                "Multi-Channel Coordination",
                "Messaging Response Planning",
                "Team Interaction Framework",
                "Follow-Up Improvement Plans",
                "Communication Style Definition"
            ]}
            whatWeImprove={[
                "WhatsApp Response Timing",
                "Inquiry Centralization",
                "Systematic Review Handling",
                "Customer Self-Service Options",
                "Internal Team Communication",
                "Service Consistency Gaps"
            ]}
            deliverables={[
                "Customer Support Blueprint",
                "Standard Response Library",
                "WhatsApp/CRM Channel Setup",
                "Customer Feedback System",
                "Conflict Resolution Guide",
                "Support Performance Metrics"
            ]}
            process={[
                { title: "Point Audit", desc: "We find everywhere customers are currently reaching out and where messages get lost." },
                { title: "System Setup", desc: "We centralize your communication channels into one manageable view." },
                { title: "Response Plan", desc: "We create a library of clear, professional responses for your team to use." },
                { title: "Quality Check", desc: "We monitor response speeds and customer satisfaction to ensure high standards." }
            ]}
            whoThisIsFor={[
                "Customer-Facing Service Brands",
                "E-commerce Businesses",
                "Hospitality & Tourism Groups",
                "SaaS & Tech Support Teams"
            ]}
            faqs={[
                { q: "Can you help with WhatsApp automation?", a: "Yes, we implement smart automated replies to ensure customers never feel ignored while waiting for a human." },
                { q: "Do you provide the support staff?", a: "We focus on Building the Systems and providing the oversight and strategy for your existing team." },
                { q: "How do we track if it is getting better?", a: "We set up tracking for first-reply-time and customer satisfaction scores so you can see the data." }
            ]}
            relatedServices={[
                { title: "Remote Sales Support", href: "/services/remote-sales-support" },
                { title: "Custom CRM Solutions", href: "/services/custom-crm-development" }
            ]}
        />
    );
}
