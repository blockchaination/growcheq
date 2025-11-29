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
      description: "Perfect for solo operators",
      popular: false,
      features: [
        "Up to 5,000 email contacts",
        "500 SMS messages/month",
        "CRM & Pipeline Management",
        "Email & SMS Marketing",
      ],
      cta: "Start Free Trial",
      variant: "outline" as const,
    },
    {
      name: "Professional",
      price: "£197",
      priceValue: 197,
      description: "Best for growing businesses",
      popular: true,
      features: [
        "Up to 25,000 email contacts",
        "2,500 SMS messages/month",
        "Everything in Essential, PLUS:",
        "Reputation Management",
        "Advanced Automations",
      ],
      cta: "Start Free Trial",
      variant: "gradient" as const,
    },
    {
      name: "Enterprise",
      price: "£347",
      priceValue: 347,
      description: "For agencies & multi-location",
      popular: false,
      features: [
        "Unlimited contacts & messages",
        "Everything in Professional, PLUS:",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
      cta: "Contact Sales",
      variant: "outline" as const,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            Simple, Transparent{" "}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Save over £683/month compared to using separate tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto space-y-6 lg:space-y-0">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-2xl transition-all duration-300 animate-scale-in ${plan.popular
                ? "border-4 border-primary shadow-2xl lg:scale-105"
                : "border-2 hover:scale-105"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-primary text-white px-6 py-2 text-sm font-semibold shadow-lg">
                    MOST POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className="space-y-4 pb-8">
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-5xl font-heading font-bold gradient-text">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">/month</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className={feature.includes("PLUS:") ? "font-semibold" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-8">
                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                  onClick={() => handleStartTrial(plan.name as "Essential" | "Professional" | "Enterprise", plan.priceValue)}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            14-day free trial • No credit card required • Cancel anytime
          </p>
          <a href="/pricing" className="inline-flex items-center gap-2 text-primary hover:underline">
            Compare Plans in Detail →
          </a>
        </div>
      </div>
    </section>
  );
};
