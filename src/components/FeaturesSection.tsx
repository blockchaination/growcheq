import { MessageSquare, Zap, TrendingUp, Star, BarChart, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Manage SMS, WhatsApp, Facebook, calls, and emails from one place. Never miss a lead again.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Automatically qualify leads, send follow-ups, and request reviews at the perfect moment.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Instant Payments",
      description: "Send payment links via text. Get paid in seconds with integrated payment processing.",
      gradient: "from-accent to-brand-light",
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Automatically request and showcase 5-star reviews to boost your online reputation.",
      gradient: "from-primary to-accent",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track every interaction, conversion, and revenue source with beautiful real-time dashboards.",
      gradient: "from-secondary to-brand-light",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign conversations, leave internal notes, and never let a customer slip through the cracks.",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            Everything You Need in{" "}
            <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop juggling multiple tools. GrowCheq brings all your customer communications 
            and business tools into one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
