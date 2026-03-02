import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { PhoneCall } from "lucide-react";

export const metadata = {
    title: "Remote Sales Support for Better Lead Follow-Up | MiniSpark",
    description: "Improve lead follow-up, customer communication, and sales consistency with remote sales support built around your business.",
};

export default function RemoteSalesPage() {
    return (
        <ServicePageTemplate slug="remote-sales-support"
            title="Follow Up Better, Respond Faster, and Stop Letting Good Leads Go Cold"
            subheading="We support your sales process with clearer follow-up, better communication, and more consistent lead handling."
            primaryCTA="Improve My Lead Follow-Up"
            secondaryCTA="Schedule a Sales Process Review"
            iconName="PhoneCall"
            topLeft={{
                subtitle: "Reply Faster",
                title: "Leads Stay Warm"
            }}
            bottomRight={{
                subtitle: "Real Outreach",
                title: "Closes Better"
            }}
            problems={[
                "Delayed follow-up that loses customer interest",
                "Missed leads because the team is too busy",
                "Weak consistency in handling sales inquiries",
                "Poor lead handling and information tracking",
                "Response gaps over weekends or evenings",
                "Unclear next steps in the sales conversation"
            ]}
            whyItMatters="Speed to lead is everything. Every hour a lead sits without a response, your chance of conversion drops significantly. We help you create a process that keeps potential buyers engaged and moving towards a decision."
            whatWeDo={[
                "Lead Handling Flow Mapping",
                "Response Structure Management",
                "Follow-Up Cadence Support",
                "Cold & Warm Outreach Strategy",
                "Communication Quality Improvement",
                "CRM Sales Step Integration"
            ]}
            whatWeImprove={[
                "Inquiry Response Speed",
                "Lead Qualification Accuracy",
                "Follow-Up Message Consistency",
                "Common Sales Drop-Off Points",
                "Customer Handoff Efficiency",
                "Overall Conversion Velocity"
            ]}
            deliverables={[
                "Sales Communication Framework",
                "Follow-Up Messaging Scripts",
                "Lead Management System",
                "Outreach Performance Tracking",
                "Sales Gap Analysis Report",
                "Lead Status Documentation"
            ]}
            process={[
                { title: "Funnel Audit", desc: "We find exactly where your current sales inquiries are getting stuck." },
                { title: "Process Map", desc: "We design a faster, clearer follow-up structure for your business." },
                { title: "Engagement", desc: "We implement outreach and responses that keep the conversation moving." },
                { title: "Review", desc: "We analyze team performance and conversion rates to refine the process." }
            ]}
            whoThisIsFor={[
                "High-Volume Lead Gen Businesses",
                "Service Agencies",
                "Real Estate & Property Groups",
                "Education & Training Providers"
            ]}
            faqs={[
                { q: "Is this telesales?", a: "We focus on the full spectrum—digital follow-up, WhatsApp communication, and professional outreach that builds trust." },
                { q: "Can we use my current CRM?", a: "Yes. We work within your existing tools or help you set up better ones if yours are holding you back." },
                { q: "Do you handle the actual closing?", a: "We support the journey to the close, ensuring your team only spends time with qualified, warm opportunities." }
            ]}
            relatedServices={[
                { title: "Custom CRM Solutions", href: "/services/custom-crm-development" },
                { title: "Customer Support Systems", href: "/services/customer-support-operations" }
            ]}
        />
    );
}
