import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { FeaturesSection } from "@/components/FeaturesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

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
    <div className="min-h-screen bg-background">
      <Navigation onCtaClick={() => handleCtaClick("trial")} />
      <HeroSection onCtaClick={() => handleCtaClick("trial")} />
      <StatsBar />
      <FeaturesSection />
      <IndustriesSection />
      <HowItWorksSection />
      <PricingSection onCtaClick={handleCtaClick} />
      <ComparisonSection onCtaClick={() => handleCtaClick("trial")} />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection onCtaClick={() => handleCtaClick("trial")} />
      <Footer />
      
      <LeadCaptureModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        interestLevel={modalConfig.interestLevel}
        planName={modalConfig.planName}
      />
    </div>
  );
};

export default Index;
