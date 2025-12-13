import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { StatsBar } from "@/components/StatsBar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ChatWidget } from "@/components/ChatWidget";
import { SEO } from "@/components/SEO";

const Index = () => {
  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  return (
    <HelmetProvider>
      <SEO
        title="Turn Every Interaction Into Revenue"
        description="Save £683/month with GrowCheq. The all-in-one customer engagement platform for UK SMEs. Unified inbox, automated follow-ups, reviews & payments. 14-day free trial."
        canonical="https://growcheq.com"
      />
      <div className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Navigation onCtaClick={handleRedirect} />

        <main>
          <HeroSection onCtaClick={handleRedirect} />
          <TrustBar />
          <ProductShowcase />
          <StatsBar />
          <FeaturesSection />
          <TestimonialsSection />
          <PricingSection onCtaClick={handleRedirect} />
          <FinalCTASection onCtaClick={handleRedirect} />
        </main>

        <Footer />
        <ChatWidget />
        <BackToTopButton />
      </div>
    </HelmetProvider>
  );
};

export default Index;
