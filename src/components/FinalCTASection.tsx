import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onCtaClick: () => void;
}

export const FinalCTASection = ({ onCtaClick }: FinalCTASectionProps) => {
  return (
    <section className="py-20 lg:py-32 gradient-hero relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg lg:text-2xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of UK businesses already using GrowCheq to capture more leads, 
            automate follow-ups, and boost revenue.
          </p>

          <div className="pt-6">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white hover:text-primary hover:scale-110 shadow-2xl border-0 text-lg h-16 px-12 font-semibold"
              onClick={onCtaClick}
            >
              Start Your Free Trial
            </Button>
          </div>

          <p className="text-white/80 text-sm pt-4">
            Set up in under 10 minutes. No credit card required. Cancel anytime.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12 pt-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>UK-Based Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No Setup Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
