import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, Zap, TrendingUp, Star, BarChart, Users, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DemoBookingSection } from "@/components/DemoBookingSection";
import { SEO } from "@/components/SEO";

const Features = () => {
  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      description: "Manage SMS, WhatsApp, Facebook Messenger, Instagram DMs, calls, and emails all from one unified dashboard. Never miss a lead again with our intelligent message routing.",
      benefits: [
        "All channels in one place",
        "Smart lead assignment",
        "Real-time notifications",
        "Message templates library",
      ],
      gradient: "from-primary to-secondary",
    },
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Automate repetitive tasks and let AI handle lead qualification, follow-ups, and review requests. Our smart automation learns from your business patterns.",
      benefits: [
        "Auto-qualify leads",
        "Smart follow-up sequences",
        "Behavioral triggers",
        "Time-based automations",
      ],
      gradient: "from-secondary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Instant Payments",
      description: "Send payment links via SMS or email and get paid in seconds. Integrated payment processing with automated invoicing and receipt generation.",
      benefits: [
        "One-click payment links",
        "Multiple payment methods",
        "Auto-generated invoices",
        "Payment tracking",
      ],
      gradient: "from-accent to-brand-light",
    },
    {
      icon: Star,
      title: "Review Management",
      description: "Automatically request reviews at the perfect moment and showcase 5-star feedback. Respond to reviews from one dashboard and improve your online reputation.",
      benefits: [
        "Automated review requests",
        "Multi-platform monitoring",
        "Quick response templates",
        "Review analytics",
      ],
      gradient: "from-primary to-accent",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track every interaction, conversion, and revenue source with beautiful real-time dashboards. Make data-driven decisions with comprehensive reporting.",
      benefits: [
        "Real-time metrics",
        "Custom reports",
        "Revenue tracking",
        "Lead source analytics",
      ],
      gradient: "from-secondary to-brand-light",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Assign conversations, leave internal notes, and ensure no customer slips through the cracks. Perfect for teams of any size.",
      benefits: [
        "Conversation assignment",
        "Internal notes & tags",
        "Team performance tracking",
        "Role-based permissions",
      ],
      gradient: "from-accent to-primary",
    },
    {
      icon: Phone,
      title: "Call Tracking & Recording",
      description: "Track which marketing campaigns drive phone calls and record conversations for quality assurance and training purposes.",
      benefits: [
        "Call tracking numbers",
        "Call recording",
        "Call analytics",
        "Voicemail transcription",
      ],
      gradient: "from-primary to-brand-light",
    },
    {
      icon: Mail,
      title: "Email & SMS Marketing",
      description: "Build and send targeted email and SMS campaigns that drive engagement and revenue. Segment your audience and track performance.",
      benefits: [
        "Drag-and-drop builder",
        "Audience segmentation",
        "A/B testing",
        "Campaign analytics",
      ],
      gradient: "from-secondary to-accent",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Connect Your Channels",
      description: "Link your phone number, email, social media accounts, and website forms to GrowCheq in minutes.",
    },
    {
      step: "2",
      title: "Capture Every Lead",
      description: "All inquiries from phone, text, email, social, and web flow into your unified inbox automatically.",
    },
    {
      step: "3",
      title: "Automate Follow-Ups",
      description: "Set up smart automation to qualify leads, send follow-ups, and request reviews at the perfect time.",
    },
    {
      step: "4",
      title: "Get Paid Faster",
      description: "Send payment links instantly and collect payments through text or email. Track revenue in real-time.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Features - All-in-One Customer Engagement Platform"
        description="Discover GrowCheq's powerful features: unified inbox, AI automation, instant payments, review management, and more. See how we replace 10+ tools."
        canonical="https://growcheq.com/features"
      />
      <Navigation onCtaClick={handleRedirect} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2">
              🇬🇧 Powerful Features for UK Businesses
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Everything You Need to <span className="gradient-text">Grow Your Business</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Manage customer engagement, automate workflows, and drive revenue—all from one powerful platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 relative overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`} />
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-heading">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-green-600 text-lg">✓</span>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
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

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              How <span className="gradient-text">GrowCheq</span> Works
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get up and running in minutes with our simple 4-step process
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-hero flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Booking Section */}
      <DemoBookingSection />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Ready to See It in Action?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" onClick={handleRedirect}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/#demo'}>
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              14-day free trial • No credit card required
            </p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Features;
