import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Globe, BarChart3, Search, Megaphone, Palette, Zap, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { TickerTape } from "@/components/layout/TickerTape";
import { HollowGraphic3D } from "@/components/ui/HollowGraphic3D";
import { JsonLd, GlobalSchemas } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MiniSpark Digital | Expert Web Design, SEO & Growth Marketing",
  description: "MiniSpark Digital provides premium website development, SEO, Meta Ads tracking, and remote sales systems to help businesses grow faster.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col pb-20">
      <JsonLd schema={GlobalSchemas.LocalBusiness} />
      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] flex flex-col justify-center pt-20 pb-6 overflow-hidden bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-8 w-full">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-[10px] md:text-xs font-bold mb-4 tracking-widest uppercase border border-white/10">
              Clear Strategy. Strong Presentation. Practical Execution.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] text-white">
              Make Your Business Look Stronger, Feel More Trustworthy, and Grow More Clearly Online
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl border-l-4 border-primary/50 pl-4 font-medium mx-auto lg:mx-0">
              We help businesses improve branding, websites, visibility, and customer systems so they can present themselves better, communicate more clearly, and grow with confidence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="px-8 h-12 text-base font-bold rounded-full bg-primary text-white hover:bg-primary/90 transition-colors" asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 h-12 text-base font-bold rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors" asChild>
                <Link href="/services">See Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Creative 3D Hollow Spark Object */}
          <div className="lg:w-[45%] relative h-[400px] md:h-[500px] w-full mt-10 lg:mt-0">
            <HollowGraphic3D
              iconName="Zap"
              topLeft={{
                subtitle: "Brand Presence",
                title: "Sparked",
                footer: "With MiniSpark"
              }}
              bottomRight={{
                subtitle: "Built To",
                title: "Stand Out"
              }}
            />
          </div>
        </div>
      </section>

      <TickerTape />

      {/* Entry Blocks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EntryBlock
            title="A Better Brand Presence"
            desc="For businesses that need stronger presentation, better consistency, and more trust."
            icon={<Palette className="w-10 h-10 text-primary" />}
          />
          <EntryBlock
            title="A Better Website"
            desc="For businesses that need clearer communication, stronger credibility, and a better online customer experience."
            icon={<Globe className="w-10 h-10 text-primary" />}
          />
          <EntryBlock
            title="Better Visibility"
            desc="For businesses that need help getting found through search, social media, and local discovery."
            icon={<Search className="w-10 h-10 text-primary" />}
          />
          <EntryBlock
            title="Better Customer Systems"
            desc="For businesses that need stronger follow-up, smoother support, and better lead organization."
            icon={<BarChart3 className="w-10 h-10 text-primary" />}
          />
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-heading font-bold border-l-8 border-primary pl-6">Digital Solutions Built Around Real Business Needs</h2>
              <p className="mt-8 text-muted-foreground text-xs uppercase tracking-widest font-bold">Complete Service Directory</p>
            </div>
            <Button variant="link" className="text-primary font-bold group" asChild>
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCard
              title="Social Media Marketing"
              description="Build a stronger social presence that improves visibility, trust, and engagement."
              icon={<MessageSquare className="w-8 h-8 text-primary" />}
              href="/services/social-media-marketing"
            />
            <SolutionCard
              title="Business Strategy"
              description="Understand your market, analyze competitors, and plan smarter next steps."
              icon={<Search className="w-8 h-8 text-primary" />}
              href="/services/business-growth-strategy"
            />
            <SolutionCard
              title="Website Development"
              description="Create a professional website that helps people trust and understand your business."
              icon={<Globe className="w-8 h-8 text-primary" />}
              href="/services/website-development-services"
            />
            <SolutionCard
              title="E-commerce Solutions"
              description="Build an online store that feels more credible and sells more smoothly."
              icon={<Zap className="w-8 h-8 text-primary" />}
              href="/services/ecommerce-website-development"
            />
            <SolutionCard
              title="Conversion Tracking"
              description="Understand what your marketing is actually doing with cleaner tracking."
              icon={<BarChart3 className="w-8 h-8 text-primary" />}
              href="/services/meta-pixel-conversion-tracking"
            />
            <SolutionCard
              title="Google Business Profile"
              description="Make your business easier to find in local search."
              icon={<Search className="w-8 h-8 text-primary" />}
              href="/services/google-business-profile-optimization"
            />
            <SolutionCard
              title="Website Speed & SEO"
              description="Improve speed, visibility, and overall user experience."
              icon={<Zap className="w-8 h-8 text-primary" />}
              href="/services/website-speed-seo-optimization"
            />
            <SolutionCard
              title="Web App Development"
              description="Build digital tools that support smoother business operations."
              icon={<Globe className="w-8 h-8 text-primary" />}
              href="/services/web-app-development-services"
            />
            <SolutionCard
              title="Video Editing"
              description="Turn raw video into stronger branded content."
              icon={<Palette className="w-8 h-8 text-primary" />}
              href="/services/video-editing-services"
            />
            <SolutionCard
              title="Remote Sales Support"
              description="Improve lead follow-up and customer communication."
              icon={<MessageSquare className="w-8 h-8 text-primary" />}
              href="/services/remote-sales-support"
            />
            <SolutionCard
              title="Customer Support Systems"
              description="Build a better support experience across channels."
              icon={<CheckCircle2 className="w-8 h-8 text-primary" />}
              href="/services/customer-support-operations"
            />
            <SolutionCard
              title="Custom CRM"
              description="Track leads and manage workflows more clearly."
              icon={<Zap className="w-8 h-8 text-primary" />}
              href="/services/custom-crm-development"
            />
            <SolutionCard
              title="Content Strategy"
              description="Plan content that improves visibility, trust, and consistency."
              icon={<Search className="w-8 h-8 text-primary" />}
              href="/services/content-strategy-services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-background py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Businesses Choose Us</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <WhyItem
              title="Clear Communication"
              desc="We explain complex things simply, so you always understand what is being built and why."
            />
            <WhyItem
              title="Business-Focused Thinking"
              desc="We do not just deliver tasks. We solve brand, visibility, customer, and workflow problems."
            />
            <WhyItem
              title="Professional Brand Sense"
              desc="We help your business look more credible, more consistent, and more trustworthy."
            />
            <WhyItem
              title="Practical Execution"
              desc="Everything is built around what helps your business perform better in real life."
            />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="bg-muted py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold border-b-4 border-primary inline-block pb-2">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StepItem number="1" title="Understand the Business" desc="We learn your offer, customers, goals, and current gaps." />
            <StepItem number="2" title="Research and Review" desc="We assess market reality, competitors, customer flow, and digital weak points." />
            <StepItem number="3" title="Build the Right Solution" desc="We shape the right mix of branding, digital presence, and business systems." />
            <StepItem number="4" title="Launch and Improve" desc="We implement clearly, then refine based on what strengthens trust and performance." />
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-foreground text-white py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">Build a digital presence that <span className="text-primary">fits</span> your business</h2>
          <p className="mt-8 text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            If your brand feels unclear, your website feels weak, or your customer process feels messy, we can help you fix the right things in the right order.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="h-16 px-12 text-lg font-bold rounded-full bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all" asChild>
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-12 text-lg font-bold rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors" asChild>
              <Link href="/contact">Talk About Your Business</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function EntryBlock({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div
      className="p-8 rounded-2xl bg-card border border-border shadow-sm group hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)] transition-all hover:-translate-y-1"
    >
      <div className="mb-6 group-hover:scale-110 group-hover:text-primary transition-all duration-300">{icon}</div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function WhyItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="flex flex-col gap-4"
    >
      <h3 className="text-2xl font-heading font-bold text-foreground border-l-4 border-primary pl-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function StepItem({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div
      className="relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-lg"
    >
      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Step {number}</div>
      <h3 className="text-xl font-heading font-bold mb-2 relative z-10">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{desc}</p>
    </div>
  );
}

function SolutionCard({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href: string }) {
  return (
    <Link href={href}>
      <div
        className="group h-full p-10 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/60 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(249,6,6,0.05)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-start overflow-hidden relative cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />

        <div className="mb-6 opacity-70 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 transform group-hover:scale-110 z-10">
          {icon}
        </div>
        <h3 className="text-2xl font-heading font-bold group-hover:text-primary transition-colors z-10">{title}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed font-medium z-10">
          {description}
        </p>
        <div className="mt-8 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 z-10 mt-auto pt-4">
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </div>

        <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-5 transition-all duration-500 text-primary transform group-hover:scale-150 rotate-12">
          {icon}
        </div>
      </div>
    </Link>
  );
}
