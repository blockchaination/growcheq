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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`} />

                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-8 w-8 text-white" />
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

        <div className="text-center mt-12">
          <Link to="/features">
            <Button variant="outline" size="lg" className="group">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
