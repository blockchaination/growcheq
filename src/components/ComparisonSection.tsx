import { Button } from "@/components/ui/button";
import { Check, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface ComparisonSectionProps {
  onCtaClick: () => void;
}

export const ComparisonSection = ({ onCtaClick }: ComparisonSectionProps) => {
  const [displaySavings, setDisplaySavings] = useState(0);

  const comparisons = [
    { feature: "CRM & Pipeline", competitor: "HubSpot", cost: "£99" },
    { feature: "Email Marketing", competitor: "Mailchimp", cost: "£99" },
    { feature: "Website Builder", competitor: "Wix", cost: "£49" },
    { feature: "Social Media", competitor: "Hootsuite", cost: "£49" },
    { feature: "Analytics", competitor: "Google Analytics Premium", cost: "£150" },
  ];

  const totalCompetitorCost = 446;
  const growCheqCost = 197;
  const savings = totalCompetitorCost - growCheqCost;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = savings / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= savings) {
        setDisplaySavings(savings);
        clearInterval(timer);
      } else {
        setDisplaySavings(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold">
            Stop Paying for Multiple Tools
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how GrowCheq replaces expensive tools you're probably already paying for
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 bg-gradient-to-br from-background to-accent/5 border-2 border-primary/20 shadow-2xl">
            <div className="space-y-6">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-border/50 last:border-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="font-medium">{item.feature}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground block">{item.competitor}</span>
                    <span className="font-semibold text-lg">{item.cost}/mo</span>
                  </div>
                </div>
              ))}
              
              <div className="pt-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Competitor Total:</span>
                  <span className="text-xl font-bold line-through text-muted-foreground">£{totalCompetitorCost}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">GrowCheq:</span>
                  <span className="text-xl font-bold gradient-text">£{growCheqCost}/mo</span>
                </div>
                <div className="border-t-2 border-primary pt-3 flex justify-between items-center">
                  <span className="text-lg font-bold">Total Savings:</span>
                  <span className="text-2xl font-bold text-green-600">£{displaySavings}/mo</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

  <div className="text-center mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "500ms" }}>
    <p className="text-2xl lg:text-3xl font-heading font-bold text-muted-foreground">
      That's{" "}
      <span className="gradient-text text-4xl lg:text-5xl block mt-2">
        £{(displaySavings * 12).toLocaleString()} saved per year
      </span>
    </p>
    <Button
      variant="hero"
      size="lg"
      onClick={onCtaClick}
      className="px-8 py-4 h-auto text-lg font-bold shadow-2xl hover:shadow-[0_20px_50px_rgba(47,25,109,0.4)] hover:scale-105 transition-all duration-300 group"
    >
      Stop Overpaying. Start Your Free Trial
      <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
    <div className="pt-4">
      <a href="/pricing" className="inline-flex items-center gap-2 text-primary hover:underline">
        See Full Comparison →
      </a>
    </div>
  </div>
      </div >
    </section >
  );
};
