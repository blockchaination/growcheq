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
        </div >
      </div >
    </div >
    </section >
  );
};
