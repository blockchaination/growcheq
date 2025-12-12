import { MessageSquare, Zap, TrendingUp, Star, BarChart, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Manage SMS, WhatsApp, Facebook, calls, and emails from one place. Never miss a lead again.",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Automatically qualify leads, send follow-ups, and request reviews at the perfect moment.",
      gradient: "from-accent to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Instant Payments",
      description: "Send payment links via text. Get paid in seconds with integrated payment processing.",
      gradient: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Everything You Need in{" "}
            <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Stop juggling multiple tools. GrowCheq brings all your customer communications
            and business tools into one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 animate-fade-up bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/features">
            <Button variant="outline" size="lg" className="group px-8 py-6 h-auto text-base font-semibold border-2 hover:bg-secondary">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
