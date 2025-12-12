import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto text-center space-y-10 animate-fade-up">
          {/* Badge */}
          <div className="flex justify-center animate-fade-up delay-100">
            <Badge variant="secondary" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-secondary border border-border shadow-sm">
              🇬🇧 Built for UK Businesses
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight animate-fade-up delay-200">
            Turn Every <span className="text-gradient">Interaction</span>
            <br />
            Into <span className="text-gradient">Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-up delay-300">
            The all-in-one customer engagement platform that helps UK SMEs capture leads,
            automate follow-ups, manage reviews, and get paid faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-up delay-300">
            <Button
              size="lg"
              onClick={onCtaClick}
              className="group px-8 py-6 h-auto text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onCtaClick}
              className="px-8 py-6 h-auto text-base font-semibold border-2 hover:bg-secondary"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-sm text-muted-foreground pt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 animate-fade-up delay-300">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              Cancel anytime
            </span>
          </div>
        </div>

        {/* Dashboard mockup cards */}
        <div className="mt-20 lg:mt-28 relative max-w-6xl mx-auto hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="bg-card rounded-2xl shadow-xl border p-6 lg:p-8 transform translate-y-12 animate-fade-up delay-100 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl shadow-lg">
                  📧
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">New Lead</p>
                  <p className="text-sm text-muted-foreground">Website Enquiry</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2.5 bg-muted rounded-full w-3/4" />
                <div className="h-2.5 bg-muted rounded-full w-1/2" />
              </div>
              <Badge className="mt-6 bg-green-500 text-white shadow-sm">Just Now</Badge>
            </div>

            {/* Card 2 - Featured */}
            <div className="bg-card rounded-2xl shadow-2xl border-2 border-primary/20 p-6 lg:p-8 transform -translate-y-6 animate-fade-up delay-200 z-20 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl shadow-lg">
                  ⭐
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">5-Star Review</p>
                  <p className="text-sm text-muted-foreground">Google Reviews</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"Amazing service, highly recommended!"</p>
              <div className="flex gap-1 mt-4 text-yellow-400 text-lg">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-card rounded-2xl shadow-xl border p-6 lg:p-8 transform translate-y-16 animate-fade-up delay-300 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-2xl shadow-lg">
                  💰
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Payment</p>
                  <p className="text-sm text-muted-foreground">Invoice #1024</p>
                </div>
              </div>
              <p className="text-3xl font-bold text-foreground">£450.00</p>
              <p className="text-sm text-green-600 font-semibold mt-2">Paid via Link</p>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-20" />
    </section>
  );
};
