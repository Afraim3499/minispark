import React from 'react';

// Using exact schema.org definitions stringified for Google/LLM ingestion
export function JsonLd({ schema }: { schema: Record<string, any> }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

const baseOrganization = {
    "@type": "Organization",
    "name": "MiniSpark Digital",
    "url": "https://minisparkbd.com",
    "logo": "https://minisparkbd.com/android-chrome-512x512.png",
    "email": "minisparkbd@gmail.com",
    "sameAs": [
        "https://www.facebook.com/MiniSpark.Digital",
        "https://www.instagram.com/minispark.digital/",
        "https://www.linkedin.com/company/minisparkdigital"
    ]
};

export const GlobalSchemas = {
    WebSite: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "MiniSpark Digital",
        "url": "https://minisparkbd.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://minisparkbd.com/blog?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    },
    Organization: {
        "@context": "https://schema.org",
        ...baseOrganization
    },
    LocalBusiness: {
        "@context": "https://schema.org",
        ...baseOrganization,
        "@type": "LocalBusiness",
        "image": "https://minisparkbd.com/minispark%20hero.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "BD"
        },
        "priceRange": "$$$"
    }
};

export function generateServiceSchema(serviceName: string, description: string, urlPath: string) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": "MiniSpark Digital",
            "url": "https://minisparkbd.com"
        },
        "url": `https://minisparkbd.com${urlPath}`
    };
}

export function generateArticleSchema(title: string, description: string, urlPath: string, publishedDate: string, imageUrl: string, authorName: string = "MiniSpark Team") {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": imageUrl || "https://minisparkbd.com/minispark%20hero.jpg",
        "datePublished": publishedDate,
        "author": {
            "@type": "Person",
            "name": authorName
        },
        "publisher": {
            "@type": "Organization",
            "name": "MiniSpark Digital",
            "logo": {
                "@type": "ImageObject",
                "url": "https://minisparkbd.com/android-chrome-512x512.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://minisparkbd.com${urlPath}`
        }
    }
}

export function generateFaqSchema(faqs: { q: string; a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
}

export function generateBreadcrumbSchema(items: { name: string; url?: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            ...(item.url ? { "item": `https://minisparkbd.com${item.url}` } : {})
        }))
    };
}
