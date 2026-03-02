import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { ShoppingCart } from "lucide-react";

export const metadata = {
    title: "E-commerce Solutions for Better Trust and More Online Sales | MiniSpark",
    description: "Build an online store that feels trustworthy, works smoothly, and makes it easier for customers to buy from you.",
};

export default function EcommercePage() {
    return (
        <ServicePageTemplate slug="ecommerce-website-development"
            title="Build an Online Store That Looks Credible and Feels Easy to Buy From"
            subheading="We create e-commerce experiences that improve trust, reduce friction, and help more visitors become paying customers."
            primaryCTA="Build My Online Store"
            secondaryCTA="Talk About E-commerce Needs"
            iconName="ShoppingCart"
            topLeft={{
                subtitle: "Easier Checkout",
                title: "More Orders"
            }}
            bottomRight={{
                subtitle: "Buyer Trust",
                title: "Feels Easy"
            }}
            problems={[
                "Low buyer trust due to amateur store design",
                "Poor product presentation that fails to sell the value",
                "Confusing store navigation and category structure",
                "Checkout friction leading to high abandoned cart rates",
                "Weak mobile shopping flow on smartphones",
                "Inconsistent brand feel throughout the shop pages"
            ]}
            whyItMatters="Online shopping is primarily an exercise in risk management. If your store feels even slightly untrustworthy, customers will leave before the checkout. We build stores that feel 'safe' and 'pro' from the first click."
            whatWeDo={[
                "Store Architecture Planning",
                "Product Page Conversion Optimization",
                "Trust-Building UI/UX Design",
                "Smooth Checkout Flow Setup",
                "Mobile-First Shopping Experience",
                "Payment & Logistics Integration"
            ]}
            whatWeImprove={[
                "Product Photography Layout",
                "Category & Filter Clarity",
                "Buying Journey Panning",
                "Payment Confidence Signals",
                "Customer Hesitation Points",
                "Post-Purchase Communication"
            ]}
            deliverables={[
                "Full E-commerce Platform Setup",
                "Custom Product Page Design",
                "Optimized Checkout System",
                "Inventory & Order Management",
                "Automated Email Flows",
                "Conversion Analytics Setup"
            ]}
            process={[
                { title: "Store Strategy", desc: "We plan your store structure and product hierarchy for maximum clarity." },
                { title: "Creative Phase", desc: "We design a high-converting shop interface that builds immediate trust." },
                { title: "Implementation", desc: "We build the store with a focus on speed and mobile usability." },
                { title: "Launch & Optimize", desc: "We push the store live and monitor the checkout flow for any friction." }
            ]}
            whoThisIsFor={[
                "Product Brand Founders",
                "Retailers Moving Online",
                "Niche Shop Owners",
                "Direct-to-Consumer Brands"
            ]}
            faqs={[
                { q: "Which platform do you use?", a: "We work with Shopify for ease of use or custom Next.js builds for maximum performance." },
                { q: "Can you help with payment gateway setup?", a: "Yes, we handle the full integration of local and international payment methods." },
                { q: "Do you offer product marketing too?", a: "We provide the strategic foundation and conversion tracking required for successful ad campaigns." }
            ]}
            relatedServices={[
                { title: "Website Speed & SEO", href: "/services/website-speed-seo-optimization" },
                { title: "Conversion Tracking", href: "/services/meta-pixel-conversion-tracking" }
            ]}
        />
    );
}
