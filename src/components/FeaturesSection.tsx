import { MessageSquare, Zap, TrendingUp, ShieldCheck, Smartphone, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Manage SMS, WhatsApp, Facebook, and emails from one single dashboard.",
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Qualify leads and book appointments automatically, 24/7.",
    },
    {
      icon: TrendingUp,
      title: "Google Reviews",
      description: "Automatically request and manage reviews to boost your local ranking.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "Send text-to-pay links and get paid in seconds, not days.",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Run your business from anywhere with our top-rated mobile app.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign conversations and track team performance in real-time.",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Everything You Need to <br /> <span className="text-primary">Grow Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Replace your fragmented tech stack with one powerful, easy-to-use platform designed for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardHeader className="space-y-4 pt-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/features">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 h-auto text-base font-semibold">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
