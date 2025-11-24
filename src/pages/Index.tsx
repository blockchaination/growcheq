import { useState } from "react";
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
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { BackToTopButton } from "@/components/BackToTopButton";
import { AIChatbot } from "@/components/AIChatbot";
import { SEO } from "@/components/SEO";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    interestLevel: "trial",
    planName: "",
  });

  const handleCtaClick = (interestLevel: string = "trial", planName?: string) => {
    setModalConfig({
      interestLevel,
      planName: planName || "",
    });
    setIsModalOpen(true);
  };

  return (
    <HelmetProvider>
      <SEO
        title="Turn Every Interaction Into Revenue"
        description="Save £683/month with GrowCheq. The all-in-one customer engagement platform for UK SMEs. Unified inbox, automated follow-ups, reviews & payments. 14-day free trial."
        canonical="https://growcheq.com"
      />
      <div className="min-h-screen bg-background">
        <Navigation onCtaClick={() => handleCtaClick("trial")} />
        <HeroSection onCtaClick={() => handleCtaClick("trial")} />
        <StatsBar />
        <KeyToEngagementSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <PricingSection onCtaClick={handleCtaClick} />
        <ComparisonSection onCtaClick={() => handleCtaClick("trial")} />
        <FinalCTASection onCtaClick={() => handleCtaClick("trial")} />
        <Footer />
        <AIChatbot />
        <BackToTopButton />

        <LeadCaptureModal
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
          interestLevel={modalConfig.interestLevel}
          planName={modalConfig.planName}
        />
      </div>
    </HelmetProvider>
  );
};

export default Index;
