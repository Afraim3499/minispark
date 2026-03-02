import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Gauge } from "lucide-react";

export const metadata = {
    title: "Website Speed and SEO Services for Better Visibility | MiniSpark",
    description: "Improve your website speed, search visibility, and customer experience so your business becomes easier to find and easier to trust.",
};

export default function SpeedSEOPage() {
    return (
        <ServicePageTemplate slug="website-speed-seo-optimization"
            title="Fix Slow Pages and Improve Search Visibility Without the Jargon"
            subheading="We improve your website's speed, structure, and search readiness so it performs better for both users and search engines."
            primaryCTA="Improve My Website Performance"
            secondaryCTA="Book a Website Audit"
            iconName="Gauge"
            topLeft={{
                subtitle: "Loads Fast",
                title: "Feels Better"
            }}
            bottomRight={{
                subtitle: "Search Ready",
                title: "Gets Found"
            }}
            problems={[
                "Slow load times that frustrate mobile users",
                "Weak search presence for profitable keywords",
                "Poor Core Web Vitals affecting your Google rank",
                "Confusing structure that search engines can't read",
                "High bounce rates because the site is too laggy",
                "Missed opportunities for high-intent traffic"
            ]}
            whyItMatters="A slow website is a broken promise. Even the most beautiful design won't convert if people leave before it loads. Speed is the foundation of user experience and the first thing Google looks for when ranking your site."
            whatWeDo={[
                "Full Performance/Speed Review",
                "Code & Asset Technical Cleanup",
                "Strategic On-Page SEO Overhaul",
                "Semantic Search Structural Improvement",
                "User Experience (UX) Refinement",
                "Mobile Core Web Vital Optimization"
            ]}
            whatWeImprove={[
                "Largest Contentful Paint (LCP)",
                "Mobile Layout Stability",
                "Heading & Keyword Hierarchy",
                "Metadata & OpenGraph Readiness",
                "Server Response & Caching Layers",
                "Internal Linking Integrity"
            ]}
            deliverables={[
                "Performance-Optimized Website",
                "SEO Keyword Tracking Setup",
                "Speed Audit Before/After Report",
                "Search Visibility Roadmap",
                "Mobile Usability Certification",
                "Technical SEO Fix List"
            ]}
            process={[
                { title: "Technical Audit", desc: "We run deep diagnostics to find exactly what is slowing you down." },
                { title: "Optimization", desc: "We compress images, clean code, and fix server-level bottlenecks." },
                { title: "Content SEO", desc: "We restructure your pages so search engines find them easier for the right keywords." },
                { title: "Performance Monitiring", desc: "We ensure the gains stay stable over time as you add new content." }
            ]}
            whoThisIsFor={[
                "High-Traffic Platforms",
                "E-commerce Brands",
                "Content Heavy Websites",
                "Businesses Competitive in SEO"
            ]}
            faqs={[
                { q: "Will I need to rebuild my whole site?", a: "Not usually. We can often make massive speed gains by optimizing your existing platform." },
                { q: "How fast should my site be?", a: "We aim for under 2 seconds on mobile. Anything slower leads to lost customers." },
                { q: "Does speed really improve SEO?", a: "Yes. Google uses site speed as a direct ranking signal, especially for mobile searches." }
            ]}
            relatedServices={[
                { title: "Website Development", href: "/services/website-development-services" },
                { title: "Content Strategy", href: "/services/content-strategy-services" }
            ]}
        />
    );
}
