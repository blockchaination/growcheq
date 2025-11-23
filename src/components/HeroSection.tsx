import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative pt-20 pb-12 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="flex justify-center">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full bg-secondary/10 text-secondary-foreground border border-secondary/20">
              🇬🇧 Built for UK Businesses
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight tracking-tight">
            Turn Every <span className="gradient-text">Interaction</span> Into{" "}
            <span className="gradient-text">Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The all-in-one customer engagement platform that helps UK SMEs capture leads,
            automate follow-ups, manage reviews, and get paid faster.
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 w-full md:w-auto">
            <Button
              variant="hero"
              size="lg"
              onClick={onCtaClick}
              className="group px-8 py-4 h-auto text-lg font-bold shadow-2xl hover:shadow-[0_20px_50px_rgba(30,58,138,0.4)] hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={onCtaClick} className="h-auto px-8 py-4 text-lg w-full md:w-auto">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-sm text-muted-foreground pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-600" />
              No credit card required
            </span>
            <span className="flex items-center gap-1">
              <Check className="h-4 w-4 text-green-600" />
              14-day free trial
            </span>
          </div>
        </div>

        {/* Dashboard mockup cards */}
        <div className="mt-16 relative max-w-5xl mx-auto hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />

          <div className="grid grid-cols-3 gap-6 opacity-90">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform translate-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl">
                  📧
                </div>
                <div>
                  <p className="font-bold text-foreground">New Lead</p>
                  <p className="text-xs text-muted-foreground">Website Enquiry</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-muted rounded w-3/4" />
                <div className="h-2 bg-muted rounded w-1/2" />
              </div>
              <Badge className="mt-4 bg-green-500 text-white">Just Now</Badge>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-xl p-6 transform -translate-y-4 animate-slide-up z-20" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl">
                  ⭐
                </div>
                <div>
                  <p className="font-bold text-foreground">5-Star Review</p>
                  <p className="text-xs text-muted-foreground">Google Reviews</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">"Amazing service, highly recommended!"</p>
              <div className="flex gap-1 mt-3 text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <span key={i}>★</span>)}
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 transform translate-y-12 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white text-xl">
                  💰
                </div>
                <div>
                  <p className="font-bold text-foreground">Payment</p>
                  <p className="text-xs text-muted-foreground">Invoice #1024</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground">£450.00</p>
              <p className="text-xs text-green-600 font-medium mt-1">Paid via Link</p>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-20" />
    </section>
  );
};
