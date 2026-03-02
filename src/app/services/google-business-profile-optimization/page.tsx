import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { MapPin } from "lucide-react";

export const metadata = {
    title: "Google Business Profile Optimization for Local Visibility | MiniSpark",
    description: "Improve your local visibility and customer trust with a better Google Business Profile that helps people find, contact, and choose your business.",
};

export default function GoogleBusinessPage() {
    return (
        <ServicePageTemplate slug="google-business-profile-optimization"
            title="Get Found More Easily on Google and Build Better Local Trust"
            subheading="We help businesses improve their Google Business Profile so local customers can find them faster and trust them sooner."
            primaryCTA="Improve My Google Profile"
            secondaryCTA="Get Local Visibility Help"
            iconName="MapPin"
            topLeft={{
                subtitle: "Local Search",
                title: "Finds You"
            }}
            bottomRight={{
                subtitle: "First Look",
                title: "Builds Trust"
            }}
            problems={[
                "Listing is incomplete or out-of-date",
                "Weak visibility in local 'map pack' results",
                "Poor first impression for people searching nearby",
                "Missing updates and posts that show activity",
                "Negative or missing reviews hurting conversion",
                "Difficulty for customers attempting to contact you"
            ]}
            whyItMatters="For many businesses, the Google Map listing is their most important digital asset. If your profile is sparse or messy, customers will click on the competitor with more photos and better information. Local visibility is local trust."
            whatWeDo={[
                "Full Profile Setup & Verification",
                "Local Keyword Optimization",
                "Info & Category Accuracy Refinement",
                "High-Impact Visual Content Management",
                "Strategic Google Posting Support",
                "Review & Trust Strategy Guidance"
            ]}
            whatWeImprove={[
                "Search Discoverability Rank",
                "NAP (Name, Address, Phone) Consistency",
                "Customer Interaction Points",
                "Secondary Business Categories",
                "Profile Trust Signals",
                "Localized Product Showcasing"
            ]}
            deliverables={[
                "Optimized Google Business Profile",
                "Local SEO Keyword Strategy",
                "Profile Management Framework",
                "Local Ranking Performance Report",
                "Review Gathering Strategy",
                "Google Maps Action Plan"
            ]}
            process={[
                { title: "Review", desc: "We analyze your current local rank and profile health against competitors." },
                { title: "Optimization", desc: "We refine every field and asset for maximum keyword relevance." },
                { title: "Content Injection", desc: "We upload professional photos and posts that build immediate authority." },
                { title: "Trust Building", desc: "We set up a system to gather more reviews and respond to inquiries faster." }
            ]}
            whoThisIsFor={[
                "Local Service Businesses",
                "Retail Shop Owners",
                "Restaurants & Cafes",
                "Medical & Professional Clinics"
            ]}
            faqs={[
                { q: "How long does it take to see rankings change?", a: "Local search shifts can be seen in as little as 2 weeks after a professional optimization." },
                { q: "Can you help with negative reviews?", a: "We provide strategic communication advice to handle them professionally while drowning them out with positive trust." },
                { q: "Do I need a separate website for this?", a: "While a website helps, a strong Google profile is an independent power-house for local leads." }
            ]}
            relatedServices={[
                { title: "Website Development", href: "/services/website-development-services" },
                { title: "Website Speed & SEO", href: "/services/website-speed-seo-optimization" }
            ]}
        />
    );
}
