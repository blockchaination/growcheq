import { Button } from "@/components/ui/button";
import { Check, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface ComparisonSectionProps {
  onCtaClick: () => void;
}

export const ComparisonSection = ({ onCtaClick }: ComparisonSectionProps) => {
  const [displaySavings, setDisplaySavings] = useState(0);

  const comparisons = [
    { feature: "CRM & Pipeline", competitor: "HubSpot", cost: 99 },
    { feature: "Email Marketing", competitor: "Mailchimp", cost: 99 },
    { feature: "Reputation Management", competitor: "Podium", cost: 250 },
    { feature: "SMS Marketing", competitor: "TextMagic", cost: 49 },
    { feature: "Sales Funnels", competitor: "ClickFunnels", cost: 147 },
    { feature: "Appointment Booking", competitor: "Calendly", cost: 15 },
    { feature: "Automations", competitor: "Zapier", cost: 25 },
    { feature: "Website Chat", competitor: "Intercom", cost: 79 },
    { feature: "Forms & Surveys", competitor: "Typeform", cost: 50 },
    { feature: "Social Media Scheduler", competitor: "Hootsuite", cost: 67 },
  ];

  const totalCompetitorCost = comparisons.reduce((acc, item) => acc + item.cost, 0);
  const growCheqCost = 197;
  const monthlySavings = totalCompetitorCost - growCheqCost;
  const annualSavings = monthlySavings * 12;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = monthlySavings / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= monthlySavings) {
        setDisplaySavings(monthlySavings);
        clearInterval(timer);
      } else {
        setDisplaySavings(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [monthlySavings]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              src="/images/growcheq-key-checkmark.png"
              alt="Unlock Savings"
              className="w-16 h-16 object-contain mb-2 animate-pulse"
            />
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Unlock Massive Savings</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Stop Paying for <span className="gradient-text">Multiple Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Replace your fragmented tech stack with one unified platform and save thousands every year.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Competitor Stack */}
          <Card className="p-8 border-2 border-dashed border-muted-foreground/20 bg-transparent">
            <h3 className="text-2xl font-bold mb-6 text-muted-foreground">The "Franken-Stack"</h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm md:text-base">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <X className="h-4 w-4 text-red-400" />
                    <span>{item.feature} <span className="text-xs opacity-70">({item.competitor})</span></span>
                  </div>
                  <span className="font-medium text-muted-foreground">£{item.cost}</span>
                </div>
              ))}
              <div className="border-t border-border pt-4 mt-4 flex justify-between items-center">
                <span className="font-bold text-lg text-muted-foreground">Total Monthly Cost:</span>
                <span className="font-bold text-2xl text-muted-foreground">£{totalCompetitorCost}</span>
              </div>
            </div>
          </Card>

          {/* GrowCheq Stack */}
          <Card className="p-8 border-2 border-primary bg-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg">
              BEST VALUE
            </div>
            <h3 className="text-2xl font-bold mb-6 text-primary">GrowCheq All-in-One</h3>
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="font-medium">{item.feature}</span>
                  </div>
                  <span className="font-bold text-primary">Included</span>
                </div>
              ))}
              <div className="border-t-2 border-primary/20 pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-lg">GrowCheq Cost:</span>
                  <span className="font-bold text-2xl text-primary">£{growCheqCost}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-100">
                  <span className="font-bold text-green-700">Your Monthly Savings:</span>
                  <span className="font-bold text-2xl text-green-600">£{displaySavings}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12 space-y-6 animate-fade-in">
          <p className="text-2xl lg:text-3xl font-heading font-bold text-muted-foreground">
            That's{" "}
            <span className="gradient-text text-4xl lg:text-5xl block mt-2">
              £{annualSavings.toLocaleString()} saved per year
            </span>
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={onCtaClick}
            className="px-8 py-4 h-auto text-lg font-bold shadow-2xl hover:shadow-[0_20px_50px_rgba(30,58,138,0.4)] hover:scale-105 transition-all duration-300 group"
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
      </div>
    </section>
  );
};
