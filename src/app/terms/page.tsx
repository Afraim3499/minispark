export const metadata = {
    title: "Terms of Service | MiniSpark",
    description: "Terms of service and usage agreements for MiniSpark Digital.",
};

export default function TermsPage() {
    return (
        <div className="pt-40 pb-20 max-w-4xl mx-auto px-4 min-h-[70vh]">
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8">Terms of Service</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p className="font-bold">Last Updated: March 2026</p>
                <p>By accessing or using MiniSpark.digital, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our website.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Services and Deliverables</h2>
                <p>MiniSpark provides digital business services including branding, web development, marketing strategy, and system integrations. The specific scope, deliverables, and timelines are governed by individual client agreements.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. Intellectual Property</h2>
                <p>All content on this website, including text, graphics, logos, and images, is the property of MiniSpark and protected by intellectual property laws. Client deliverables remain the property of MiniSpark until final payment is received, after which ownership is transferred as outlined in the client agreement.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">3. Limitation of Liability</h2>
                <p>MiniSpark shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our services or website.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">4. Governing Law</h2>
                <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MiniSpark operates.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">5. Contact Information</h2>
                <p>For any questions regarding these Terms, please contact us at <a href="mailto:minisparkbd@gmail.com" className="text-primary hover:underline">minisparkbd@gmail.com</a>.</p>
            </div>
        </div>
    );
}
