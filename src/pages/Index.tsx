import { useState, useEffect } from "react";
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
import { IndustrySelector } from "@/components/IndustrySelector";
import { IndustrySelectionModal } from "@/components/IndustrySelectionModal";
import { SEO } from "@/components/SEO";
import { industryContent } from "@/data/industries";

const Index = () => {
  // State for selected industry
  const [selectedIndustry, setSelectedIndustry] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load selection from local storage on mount
  useEffect(() => {
    const savedIndustry = localStorage.getItem("selectedIndustry");
    if (savedIndustry && industryContent[savedIndustry]) {
      setSelectedIndustry(savedIndustry);
    } else {
      // If no selection, show modal after 0.8s
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    localStorage.setItem("selectedIndustry", industry);
    setIsModalOpen(false);

    // Smooth scroll to top when industry changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  // Get current content based on selection, fallback to ALL
  const content = industryContent[selectedIndustry] || industryContent["ALL"];

  return (
    <HelmetProvider>
      <SEO
        title={content.heroHeadline}
        description={content.heroSubheadline}
        canonical="https://growcheq.com"
      />

      <IndustrySelectionModal
        isOpen={isModalOpen}
        onSelect={handleIndustrySelect}
      />

      <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/20">
        <Navigation onCtaClick={handleRedirect} />

        <main>
          <IndustrySelector
            selectedIndustry={selectedIndustry}
            onSelect={handleIndustrySelect}
          />

          <HeroSection
            onCtaClick={handleRedirect}
            headline={content.heroHeadline}
            subheadline={content.heroSubheadline}
            ctaText={content.heroCTA}
          />

          <TrustBar />
          <ProductShowcase />
          <StatsBar />

          <FeaturesSection
            features={content.features}
          />

          <TestimonialsSection
            testimonial={content.testimonial}
          />

          <PricingSection onCtaClick={handleRedirect} />

          <FinalCTASection
            onCtaClick={handleRedirect}
            headline={content.finalCTA}
            buttonText={content.finalCTAButton}
          />
        </main>

        <Footer />
        <ChatWidget />
        <BackToTopButton />
      </div>
    </HelmetProvider>
  );
};

export default Index;
