import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  onCtaClick: () => void;
}

export const FinalCTASection = ({ onCtaClick }: FinalCTASectionProps) => {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-primary bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-tight">
          Ready to turn every interaction <br /> into revenue?
        </h2>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">
          Join 100,000+ local businesses using GrowCheq to get more leads, reviews, and sales.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onCtaClick}
            className="bg-white text-primary hover:bg-white/90 px-10 py-7 h-auto text-lg font-bold shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Free 14-Day Trial
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="text-sm text-primary-foreground/80 mt-4 sm:mt-0 sm:hidden">
            No credit card required
          </p>
        </div>
        <p className="text-sm text-primary-foreground/70 mt-6 hidden sm:block">
          No credit card required • Cancel anytime • 14-day free trial
        </p>
      </div>
    </section>
  );
};
