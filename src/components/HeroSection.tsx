
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="flex-1 space-y-8 animate-fade-up text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
              Turn Every Interaction <br /> Into Revenue
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              The all-in-one platform that helps UK businesses capture leads, automate follow-ups, and get paid faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold px-8 py-6 h-auto shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onCtaClick}
                className="text-base font-medium px-8 py-6 h-auto border-2 hover:bg-secondary/50"
              >
                <Play className="mr-2 h-4 w-4 fill-current" />
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-2">
              No credit card required. 14-day free trial.
            </p>
          </div>

          {/* Right Content - Product Image */}
          <div className="flex-1 w-full relative animate-fade-up delay-100">
            {/* Main Dashboard Screenshot Placeholder */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 bg-white aspect-[16/10] group">
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                {/* This will be replaced by the actual dashboard screenshot */}
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto flex items-center justify-center text-primary">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Dashboard Interface</p>
                </div>
              </div>

              {/* Interaction Overlay Hint */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Elements (Podium style) */}
            <div className="absolute -left-8 -bottom-8 bg-white p-4 rounded-lg shadow-xl border border-gray-100 max-w-xs animate-fade-up delay-200 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <ArrowRight className="w-5 h-5 -rotate-45" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">New Review</p>
                  <p className="text-xs text-gray-500">Just received via SMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

