import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { Play } from "lucide-react";

export const metadata = {
    title: "Video Editing Services for Better Brand Presentation | MiniSpark",
    description: "Turn raw footage into polished video content that helps your brand look stronger and keeps people engaged across digital platforms.",
};

export default function VideoEditingPage() {
    return (
        <ServicePageTemplate slug="video-editing-services"
            title="Create video content that makes your brand look more professional"
            subheading="We edit video content that helps your business present itself clearly, hold attention, and communicate with more impact."
            primaryCTA="Get Better Branded Video"
            secondaryCTA="Request a Consultation"
            iconName="Play"
            topLeft={{
                subtitle: "Watch Longer",
                title: "Looks Sharp"
            }}
            bottomRight={{
                subtitle: "Your Story",
                title: "Hits Better"
            }}
            problems={[
                "Weak presentation that fails to hold viewers' attention",
                "Rough or amateur editing that hurts brand credibility",
                "Inconsistent brand feel across different social videos",
                "Low audience retention and early drop-off rates",
                "Poor pacing that makes content feel too slow or too fast",
                "A less professional impression compared to competitors"
            ]}
            whyItMatters="Video is the highest trust-building medium on the internet. But poor quality leads to poor brand perception. Your footage needs more than just cuts; it needs strategic pacing and a professional finish to be effective."
            whatWeDo={[
                "Strategic Editing & Pacing",
                "Narrative Flow & Storytelling",
                "Social Media Optimized Formatting",
                "Brand-Consistent Motion Graphics",
                "Engagement-Focused Captions",
                "Short-Form & Vertical Video Support"
            ]}
            whatWeImprove={[
                "Visual Clarity & Flow",
                "Audience Retention Timing",
                "Brand Messaging Consistency",
                "Opening 'Hook' Strength",
                "Audio Quality & Sound Balance",
                "Content Repurposing Value"
            ]}
            deliverables={[
                "Pro-Edited Video Assets",
                "Platform-Ready Variants",
                "Branded Graphic Overlays",
                "Caption/Subtitle Files",
                "Thumbnail Design Support",
                "Video Performance Advice"
            ]}
            process={[
                { title: "Footage Review", desc: "We review your raw content and identify the strongest messaging points." },
                { title: "Narrative Edit", desc: "We build the structure and pacing to ensure the story is clear and engaging." },
                { title: "Refinement", desc: "We add the brand assets, graphics, and audio polish." },
                { title: "Delivery", desc: "We provide files in the exact formats needed for your social channels." }
            ]}
            whoThisIsFor={[
                "YouTube & Content Creators",
                "Corporate Marketing Teams",
                "Social Media Influencers",
                "E-learning & Course Creators"
            ]}
            faqs={[
                { q: "Do you provide original filming?", a: "We focus on post-production—taking your existing footage and making it professional. We can provide remote filming direction." },
                { q: "Can you edit for TikTok/Instagram Reels?", a: "Absolutely. We specialize in vertical, high-engagement content for mobile platforms." },
                { q: "How long is the turnaround?", a: "Most standard edits are delivered within 48 to 72 hours of receiving raw footage." }
            ]}
            relatedServices={[
                { title: "Social Media Marketing", href: "/services/social-media-marketing" },
                { title: "Content Strategy", href: "/services/content-strategy-services" }
            ]}
        />
    );
}
