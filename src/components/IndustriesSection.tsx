import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Scissors, Wrench, ShoppingBag, Heart, Globe } from "lucide-react";

export const IndustriesSection = () => {
  const industries = [
    {
      icon: Car,
      name: "Auto Repair Shops",
      benefits: [
        "Instant service booking confirmations",
        "Automated repair status updates",
        "Quick payment collection",
      ],
    },
    {
      icon: Scissors,
      name: "Salons & Beauty",
      benefits: [
        "Easy appointment scheduling",
        "Automated reminder messages",
        "Loyalty rewards management",
      ],
    },
    {
      icon: Wrench,
      name: "Home Services",
      benefits: [
        "Lead capture from calls & web",
        "Job estimate approvals via SMS",
        "Review requests after completion",
      ],
    },
    {
      icon: ShoppingBag,
      name: "Retail Stores",
      benefits: [
        "Customer loyalty programs",
        "Inventory update notifications",
        "Flash sale announcements",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare Clinics",
      benefits: [
        "Appointment reminders",
        "Patient intake forms",
        "Secure payment processing",
      ],
    },
    {
      icon: Globe,
      name: "Online Businesses",
      benefits: [
        "E-commerce order updates",
        "Customer support tickets",
        "Cart abandonment recovery",
      ],
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            Trusted by UK Businesses{" "}
            <span className="gradient-text">Across Industries</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            No matter what you do, GrowCheq adapts to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
