import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Layers } from "lucide-react";

export const metadata = {
    title: "Web App Development for Better Business Operations | MiniSpark",
    description: "Build practical web apps and mobile-friendly digital tools that help your business work more smoothly and serve customers more clearly.",
};

export default function WebAppPage() {
    return (
        <ServicePageTemplate slug="web-app-development-services"
            title="Build Practical Digital Tools That Help Your Business Work Better"
            subheading="We create web apps and mobile-friendly solutions that make services, processes, and customer interactions easier to manage."
            primaryCTA="Build a Smarter Business Tool"
            secondaryCTA="Schedule a Technical Audit"
            iconName="Layers"
            topLeft={{
                subtitle: "Workflows",
                title: "Run Smoother"
            }}
            bottomRight={{
                subtitle: "Built For",
                title: "Daily Use"
            }}
            problems={[
                "Repetitive manual work that wastes team time",
                "Fragmented workflows across too many spreadsheets",
                "Processes that are difficult to track or scale",
                "Poor usability in off-the-shelf software tools",
                "Weak customer access to services or data",
                "Delays caused by lack of real-time visibility"
            ]}
            whyItMatters="A website tells people who you are; a web app helps you execute what you do. For businesses reaching the next level, custom tools allow you to provide a more professional service with less manual effort."
            whatWeDo={[
                "Product & Technical Planning",
                "Business Workflow Mapping",
                "Intuitive Interface Design (UI/UX)",
                "Role-Based Permission Systems",
                "Mobile-Friendly PWA Development",
                "Core Feature Implementation"
            ]}
            whatWeImprove={[
                "Operational Pain Points",
                "Workflow Data Continuity",
                "Customer Self-Service Access",
                "Team Interaction Usability",
                "Process Bottlenecks",
                "Critical Feature Prioritization"
            ]}
            deliverables={[
                "Custom Functional Web App",
                "User Management System",
                "Database Architecture",
                "Third-Party API Integrations",
                "Admin Dashboard",
                "Cloud Deployment & Hosting"
            ]}
            process={[
                { title: "Flow Mapping", desc: "We map out your current business processes to find where automation helps most." },
                { title: "Wireframing", desc: "We design the user journey and interface before a single line of code is written." },
                { title: "Development", desc: "We build a robust, scalable app using modern technologies." },
                { title: "Deployment", desc: "We launch the tool and train your team on how to use it effectively." }
            ]}
            whoThisIsFor={[
                "Operationally Complex Businesses",
                "SaaS Founders",
                "Internal Team Managers",
                "Scalable Service Brands"
            ]}
            faqs={[
                { q: "What is the difference between a website and a web app?", a: "A website is mostly for information; an app is for action—managing data, users, and specific workflows." },
                { q: "Can I start with a simple version?", a: "Yes. We highly recommend building a Minimum Viable Product (MVP) first to test with real users." },
                { q: "Do you provide hosting?", a: "We set up and manage the professional cloud infrastructure required to run your app securely." }
            ]}
            relatedServices={[
                { title: "Custom CRM Solutions", href: "/services/custom-crm-development" },
                { title: "Customer Support Systems", href: "/services/customer-support-operations" }
            ]}
        />
    );
}
