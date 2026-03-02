import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { JsonLd, GlobalSchemas } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://minispark.digital"), // Assuming standard domain, adjust if necessary. Using relative paths mostly below.
  title: {
    default: "MiniSpark Digital | Digital Business Solutions",
    template: "%s | MiniSpark Digital",
  },
  description: "Beyond an agency. We build digital business platforms that attract traffic, build trust, and capture high-intent leads.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minispark.digital",
    title: "MiniSpark Digital | Digital Business Solutions",
    description: "Beyond an agency. We build digital business platforms that attract traffic, build trust, and capture high-intent leads.",
    siteName: "MiniSpark Digital",
    images: [{
      url: "/minispark%20hero.jpg", // The 3D abstract object generated in Phase 2, sitting in public/
      width: 1200,
      height: 630,
      alt: "MiniSpark Digital 3D Strategic Architecture",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniSpark Digital | Digital Business Solutions",
    description: "Beyond an agency. We build digital business platforms that attract traffic, build trust, and capture high-intent leads.",
    images: ["/minispark%20hero.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-sans antialiased")}>
        <JsonLd schema={GlobalSchemas.WebSite} />
        <JsonLd schema={GlobalSchemas.Organization} />
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
