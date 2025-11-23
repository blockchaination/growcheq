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
              <div className="flex justify-between items-center">
                <span className="font-semibold">GrowCheq:</span>
                <span className="text-xl font-bold gradient-text">£197/mo</span>
              </div>
              <div className="border-t-2 border-primary pt-3 flex justify-between items-center">
                <span className="text-lg font-bold">Total Savings:</span>
                <span className="text-2xl font-bold text-green-600">£{displaySavings}/mo</span>
              </div>
            </div >
          </Card >
        </div >

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
