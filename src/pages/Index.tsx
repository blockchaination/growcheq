import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { KeyToEngagementSection } from "@/components/KeyToEngagementSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { AIChatbot } from "@/components/AIChatbot";
import { SEO } from "@/components/SEO";

const Index = () => {
  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HelmetProvider>
      <SEO
        title="Turn Every Interaction Into Revenue"
        description="Save £683/month with GrowCheq. The all-in-one customer engagement platform for UK SMEs. Unified inbox, automated follow-ups, reviews & payments. 14-day free trial."
        canonical="https://growcheq.com"
      />
      <div className="min-h-screen bg-background">
        <Navigation onCtaClick={handleRedirect} />
        <HeroSection onCtaClick={handleRedirect} />
        <StatsBar />
        <KeyToEngagementSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <PricingSection onCtaClick={handleRedirect} />
        <ComparisonSection onCtaClick={handleRedirect} />
        <FinalCTASection onCtaClick={handleRedirect} />
        <Footer />
        <AIChatbot />
        <BackToTopButton />
      </div>
    </HelmetProvider>
  );
};

export default Index;
