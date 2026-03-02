import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Globe } from "lucide-react";

export const metadata = {
    title: "Website Development for Trust, Visibility, and Business Growth | MiniSpark",
    description: "Get a professional website that helps your business look more credible, communicate clearly, and turn visitors into inquiries.",
};

export default function WebDevPage() {
    return (
        <ServicePageTemplate slug="website-development-services"
            title="Get a Website That Makes Your Business Look Professional and Easy to Trust"
            subheading="We build websites that improve presentation, support your brand, and help customers understand your business faster."
            primaryCTA="Build a More Professional Website"
            secondaryCTA="View Our Best Work"
            iconName="Globe"
            topLeft={{
                subtitle: "First Impression",
                title: "Built Right"
            }}
            bottomRight={{
                subtitle: "Your Website",
                title: "Earns Trust"
            }}
            problems={[
                "Outdated design that drives potential leads away",
                "A weak first impression that lacks professional authority",
                "Unclear service presentation that confuses visitors",
                "Poor mobile experience making it hard to browse on phones",
                "Confusing navigation structure that hides important info",
                "Lack of trust signals that prevent people from reaching out"
            ]}
            whyItMatters="In the digital age, your website is your head office. If it feels amateur or disconnected from your brand, you are losing opportunities before they even speak to you. A well-built site earns trust on autopilot."
            whatWeDo={[
                "Full Website Strategic Planning",
                "Conversion-Focused Page Structure",
                "Next.js & React Performance",
                "Brand-Aligned Visual Design",
                "Content Clarity & Flow Support",
                "Mobile-First Experience Design"
            ]}
            whatWeImprove={[
                "User Decision Journey",
                "Navigation Hierarchy",
                "Service/Product Clarity",
                "Trust Signal Integration",
                "Strategic Calls to Action",
                "Overall Brand Perception"
            ]}
            deliverables={[
                "Custom High-Performance Website",
                "CMS (Content Management System)",
                "Fully Responsive Layouts",
                "On-Page SEO Optimization",
                "Analytics & Pixel Integration",
                "Post-Launch Technical Support"
            ]}
            process={[
                { title: "Planning", desc: "We map out your content and customer journey to ensure every page has a purpose." },
                { title: "Design", desc: "We create a high-end visual aesthetic that aligns perfectly with your brand." },
                { title: "Development", desc: "We build using modern tech for extreme speed and reliability." },
                { title: "Launch", desc: "We deploy the site and ensure all systems (forms, pixels) are working perfectly." }
            ]}
            whoThisIsFor={[
                "Professional Service Providers",
                "Corporate Brands",
                "Local Businesses",
                "Educational Platforms"
            ]}
            faqs={[
                { q: "How long does it take to build a site?", a: "Most professional business sites take between 3 and 6 weeks from initial planning to launch." },
                { q: "Will I be able to update it myself?", a: "Yes. Every site we build includes an easy-to-use editor so you can manage text and images effortlessly." },
                { q: "Will the site be fast on mobile?", a: "Absolutely. We prioritize mobile performance as a core part of our development process." }
            ]}
            relatedServices={[
                { title: "Speed & SEO Optimization", href: "/services/website-speed-seo-optimization" },
                { title: "Google Business Profile", href: "/services/google-business-profile-optimization" }
            ]}
        />
    );
}
