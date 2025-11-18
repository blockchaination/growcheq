import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { BackToTopButton } from "@/components/BackToTopButton";
import { ChatWidget } from "@/components/ChatWidget";

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
      <ProblemSolutionSection />
      <FeaturesSection />
      <PricingSection onCtaClick={handleCtaClick} />
      <ComparisonSection onCtaClick={() => handleCtaClick("trial")} />
      <FinalCTASection onCtaClick={() => handleCtaClick("trial")} />
      <Footer />
      <ChatWidget />
      <BackToTopButton />
      
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
