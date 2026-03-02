export const metadata = {
    title: "Privacy Policy | MiniSpark",
    description: "Privacy policy and data handling procedures for MiniSpark Digital.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-40 pb-20 max-w-4xl mx-auto px-4 min-h-[70vh]">
            <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8">Privacy Policy</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p className="font-bold">Last Updated: March 2026</p>
                <p>At MiniSpark, we are committed to protecting your privacy. This Privacy Policy details how we collect, use, and protect your personal information when you use our website and services.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">1. Information We Collect</h2>
                <p>We may collect personal information such as your name, email address, phone number, and business details when you fill out contact forms, subscribe to our newsletter, or engage our services. We also collect non-personal data such as browser type and usage patterns through cookies and analytics tools.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">2. How We Use Your Information</h2>
                <p>Your information is used to communicate with you, provide requested services, improve our platform, and send marketing communications if you have opted in. We do not sell your personal data to third parties.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">3. Data Security and Tracking</h2>
                <p>We implement industry-standard security measures to protect your data. We utilize analytics and conversion tracking tools to optimize our marketing efforts, which may involve third-party cookies.</p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">4. Contact Us</h2>
                <p>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href="mailto:minisparkbd@gmail.com" className="text-primary hover:underline">minisparkbd@gmail.com</a>.</p>
            </div>
        </div>
    );
}
