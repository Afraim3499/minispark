import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Users } from "lucide-react";

export const metadata = {
    title: "Custom CRM Development for Better Lead Management | MiniSpark",
    description: "Get a CRM system built around your real business process so you can track leads, manage follow-ups, and stay organized more easily.",
};

export default function CRMPage() {
    return (
        <ServicePageTemplate slug="custom-crm-development"
            title="Get a CRM That Fits How Your Business Actually Works"
            subheading="We build custom CRM systems that help your team stay organized, track customer activity, and manage follow-ups with less confusion."
            primaryCTA="Organize My Leads & Follow-ups"
            secondaryCTA="Request a Free Demo"
            iconName="Users"
            topLeft={{
                subtitle: "Leads Organized",
                title: "Nothing Lost"
            }}
            bottomRight={{
                subtitle: "Follow-ups",
                title: "Stay On Time"
            }}
            problems={[
                "Scattered lead data across multiple messages and notes",
                "Manual tracking that leads to missed follow-ups",
                "Team confusion about who is handling which customer",
                "Gaps in the customer journey that lose sales",
                "Lack of visibility into which marketing channels work",
                "Operational friction when handing off leads"
            ]}
            whyItMatters="Most CRM software is too complicated or too generic. We build or configure systems that actually reflect your specific sales steps, so your team spends less time fighting tools and more time closing deals."
            whatWeDo={[
                "Lead Lifecycle Planning",
                "Sales Workflow Mapping",
                "Custom Lead Stage Structures",
                "Follow-up Logic Design",
                "Team-Ready Data Organization",
                "External Tool Integration"
            ]}
            whatWeImprove={[
                "Current Lead Acquisition",
                "Data Entry Speed & Clarity",
                "Team Visibility Gaps",
                "Manual Process Redundancy",
                "Customer History Tracking",
                "Reporting & KPI Visibility"
            ]}
            deliverables={[
                "Configured Custom CRM System",
                "Lead Tracking Dashboard",
                "Automated Follow-up Rules",
                "Team Access & Permissions",
                "Inquiry Source Integration",
                "CRM Usage Guide"
            ]}
            process={[
                { title: "Workflow Audit", desc: "We study how you currently manage leads to build a better system." },
                { title: "Blueprint", desc: "We design the stages and fields that matter for your specific industry." },
                { title: "Integration", desc: "We connect your website forms and messaging to the central CRM." },
                { title: "Going Live", desc: "We train your team to ensures leads are handled consistently from day one." }
            ]}
            whoThisIsFor={[
                "B2B Sales Teams",
                "Service Agencies",
                "Real Estate Professionals",
                "High-Ticket Consultants"
            ]}
            faqs={[
                { q: "Do I need to buy expensive software?", a: "We often use flexible tools like Airtable or Trello as a base to keep costs low while maintaining custom power." },
                { q: "Can my team use it on mobile?", a: "Yes, we ensure the CRM is accessible wherever your team is working." },
                { q: "Will it help me see where my leads come from?", a: "That is a primary goal—connect every lead back to the marketing source." }
            ]}
            relatedServices={[
                { title: "Remote Sales Support", href: "/services/remote-sales-support" },
                { title: "Web App Development", href: "/services/web-app-development-services" }
            ]}
        />
    );
}
