import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";


interface PricingSectionProps {
  onCtaClick: (plan: string) => void;
}

export const PricingSection = ({ onCtaClick }: PricingSectionProps) => {
  const handleStartTrial = (planName: "Essential" | "Professional" | "Enterprise", price: number) => {
    onCtaClick(planName);
  };

  const plans = [
    {
      name: "Essential",
      price: "£79",
      priceValue: 79,
      description: "Everything you need to get started and grow.",
      popular: false,
      features: [
        "Up to 5,000 email contacts",
        "500 SMS messages/month",
        "Unified Team Inbox",
        "Basic CRM Pipeline",
      ],
      cta: "Start Free Trial",
      variant: "outline" as const,
    },
    {
      name: "Professional",
      price: "£197",
      priceValue: 197,
      description: "For growing businesses boosting revenue.",
      popular: true,
      features: [
        "Up to 25,000 email contacts",
        "2,500 SMS messages/month",
        "Everything in Essential, PLUS:",
        "Review Automation & Management",
        "Advanced AI Workflows",
      ],
      cta: "Start Free Trial",
      variant: "default" as const,
    },
    {
      name: "Enterprise",
      price: "£347",
      priceValue: 347,
      description: "For multi-location businesses & agencies.",
      popular: false,
      features: [
        "Unlimited contacts & messages",
        "Everything in Professional, PLUS:",
        "Dedicated Success Manager",
        "Priority 24/7 Support",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your business. No hidden fees. 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col h-full hover:shadow-2xl transition-all duration-300 ${plan.popular
                ? "border-2 border-primary shadow-xl scale-100 lg:scale-105 z-10 bg-white"
                : "border border-border/50 bg-white/50 hover:bg-white"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary hover:bg-primary text-white px-4 py-1.5 text-sm font-semibold shadow-lg uppercase tracking-wide">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="space-y-2 pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
                <div className="pt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground font-medium">/month</span>
                </div>
              </CardHeader>

              <CardContent className="flex-grow space-y-6 border-t border-border/50 pt-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <span className="text-primary font-bold text-lg leading-none">✓</span>
                      </div>
                      <span className={`text-sm leading-relaxed ${feature.includes("PLUS:") ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-8 pb-8">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  className={`w-full h-auto py-4 text-base font-semibold ${plan.popular
                    ? "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl"
                    : "border-2 hover:bg-secondary"
                    }`}
                  onClick={() => handleStartTrial(plan.name as "Essential" | "Professional" | "Enterprise", plan.priceValue)}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-sm text-muted-foreground font-medium">
            Trusted by 1,000+ UK Businesses
          </p>
        </div>
      </div>
    </section>
  );
};
