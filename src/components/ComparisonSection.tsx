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
    { feature: "SMS Marketing", competitor: "Twilio", cost: "£99" },
    { feature: "Reputation Management", competitor: "Birdeye", cost: "£159" },
    { feature: "Marketing Automation", competitor: "ActiveCampaign", cost: "£169" },
  ];

  const totalCost = comparisons.reduce((sum, item) => sum + parseInt(item.cost.replace("£", "")), 0);
  const savings = totalCost - 197;

  // Animated counter effect
  useEffect(() => {
    let start = 0;
    const end = savings;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplaySavings(end);
        clearInterval(timer);
      } else {
        setDisplaySavings(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [savings]);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            Why Pay <span className="gradient-text">£800+/Month</span> for Multiple Tools?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            GrowCheq replaces 10+ expensive subscriptions with one affordable platform
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border-2">
          <table className="w-full bg-card">
            <thead className="gradient-hero text-white">
              <tr>
                <th className="px-6 py-4 text-left font-heading">Feature</th>
                <th className="px-6 py-4 text-left font-heading">Separate Tools Cost</th>
                <th className="px-6 py-4 text-left font-heading">With GrowCheq</th>
                <th className="px-6 py-4 text-left font-heading">You Save</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b animate-fade-in ${index % 2 === 0 ? "bg-muted/30" : "bg-card"}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <td className="px-6 py-4 font-medium">{item.feature}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    {item.competitor} - {item.cost}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <Check className="h-5 w-5" />
                      Included
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-green-600">{item.cost}</td>
                </tr>
              ))}
              <tr className="gradient-primary text-white font-bold text-lg">
                <td className="px-6 py-6">TOTAL</td>
                <td className="px-6 py-6">£{totalCost}/month</td>
                <td className="px-6 py-6">£197/month</td>
                <td className="px-6 py-6 text-2xl gradient-text bg-white">£{displaySavings}/month</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden">
          <Accordion type="single" collapsible className="space-y-4">
            {comparisons.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden bg-card">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="text-left">
                      <div className="font-semibold">{item.feature}</div>
                      <div className="text-sm text-muted-foreground">{item.competitor}</div>
                    </div>
                    <div className="text-destructive font-bold">{item.cost}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <Card className="p-4 space-y-3 bg-muted/30">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Separate Tools:</span>
                      <span className="text-lg font-semibold text-destructive">{item.cost}/mo</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">With GrowCheq:</span>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-green-600">Included</span>
                      </div>
                    </div>
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="font-semibold">You Save:</span>
                      <span className="text-lg font-bold text-green-600">{item.cost}/mo</span>
                    </div>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Mobile Total Card */}
          <Card className="mt-6 p-6 bg-primary/10 border-2 border-primary">
            <div className="space-y-3 text-center">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Separate Tools Total:</span>
                <span className="text-xl font-bold text-destructive">£{totalCost}/mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">GrowCheq:</span>
                <span className="text-xl font-bold gradient-text">£197/mo</span>
              </div>
              <div className="border-t-2 border-primary pt-3 flex justify-between items-center">
                <span className="text-lg font-bold">Total Savings:</span>
                <span className="text-2xl font-bold text-green-600">£{displaySavings}/mo</span>
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
      </div>
    </section>
  );
};
