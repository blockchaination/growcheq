import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🇬🇧 Built for UK Businesses
          </Badge>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight">
            Turn Every <span className="gradient-text">Interaction</span> Into{" "}
            <span className="gradient-text">Revenue</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The all-in-one customer engagement platform that helps UK SMEs capture leads, 
            automate follow-ups, and get paid faster—all from one unified inbox.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={onCtaClick} 
              className="group px-8 py-4 h-auto text-lg font-bold shadow-2xl hover:shadow-[0_20px_50px_rgba(47,25,109,0.4)] hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" onClick={onCtaClick} className="h-auto px-8 py-4 text-lg">
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

          {/* Hero Visual */}
          <div className="pt-12 animate-slide-up">
            <div className="relative max-w-4xl mx-auto">
              <div className="rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-white">
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8">
                  {/* Dashboard mockup cards */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                          📧
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">New Lead Captured</p>
                          <p className="text-sm text-muted-foreground">From website enquiry form</p>
                        </div>
                        <Badge className="bg-green-500 text-white">NEW</Badge>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 ml-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                          ⭐
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">5-Star Review Received</p>
                          <p className="text-sm text-muted-foreground">"Excellent service, highly recommend!"</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 mr-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                          💰
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">£2,450 Revenue Today</p>
                          <p className="text-sm text-muted-foreground">12 payments processed</p>
                        </div>
                        <span className="text-green-500 font-bold text-xl">+67%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-brand-light/20 blur-3xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
