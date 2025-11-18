import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap, Heart } from "lucide-react";
import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const values = [
    {
      icon: Target,
      title: "Customer Success First",
      description: "We succeed when our customers succeed. Every feature we build is designed to help UK businesses grow.",
    },
    {
      icon: Users,
      title: "Transparency in Pricing",
      description: "No hidden fees, no surprises. What you see is what you pay. Simple, honest pricing that makes sense.",
    },
    {
      icon: Zap,
      title: "Continuous Innovation",
      description: "We're constantly improving and adding new features based on customer feedback and market needs.",
    },
    {
      icon: Heart,
      title: "Local Business Focus",
      description: "Built specifically for UK SMEs, understanding your unique challenges and opportunities in the market.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCtaClick={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary">Home</a> / <span>About</span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2">
              🇬🇧 Proudly Built for UK Businesses
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              About <span className="gradient-text">GrowCheq</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Helping UK small businesses compete with enterprise-level customer engagement tools—without the enterprise price tag.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                We believe every UK small business deserves access to powerful customer engagement tools—without the enterprise price tag. GrowCheq was founded to level the playing field.
              </p>
              <p>
                Too many small businesses are forced to juggle multiple expensive subscriptions, waste time switching between platforms, and miss opportunities because they can't afford the enterprise solutions that big companies use.
              </p>
              <p>
                That's where GrowCheq comes in. We've built an all-in-one platform that gives you the same powerful features as tools costing £800+/month—for a fraction of the price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-16">
              Meet the <span className="gradient-text">Founder</span>
            </h2>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Photo Placeholder */}
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center p-12 md:p-16">
                    <div className="w-48 h-48 rounded-full gradient-hero flex items-center justify-center text-white">
                      <span className="text-6xl font-bold">AC</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="p-8 md:p-12 space-y-6">
                    <div>
                      <h3 className="text-3xl font-heading font-bold">Ariana Clarke</h3>
                      <p className="text-lg text-muted-foreground">Founder & CEO</p>
                    </div>

                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With over a decade of experience in marketing automation and CRM solutions, Ariana saw firsthand how UK SMEs were struggling with fragmented, expensive tools.
                      </p>
                      <p>
                        After working with hundreds of small businesses and seeing the same challenges repeated—multiple subscriptions, lost leads, missed opportunities—she knew there had to be a better way.
                      </p>
                      <p>
                        In 2025, Ariana founded GrowCheq with a clear mission: provide UK small businesses with affordable, enterprise-level customer engagement tools in one unified platform.
                      </p>
                      <p className="font-semibold text-foreground">
                        "Every local business should have the tools to compete and win—without breaking the bank." — Ariana
                      </p>
                    </div>

                    <div className="pt-4">
                      <p className="text-sm">
                        📧 <a href="mailto:hello@growcheq.com" className="text-primary hover:underline">hello@growcheq.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why UK Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
              🇬🇧 Built for the <span className="gradient-text">UK Market</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3">UK Business Culture</h3>
                <p className="text-muted-foreground">
                  We understand how UK businesses operate and communicate with customers. Our platform is designed around UK business practices.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3">GDPR Compliant</h3>
                <p className="text-muted-foreground">
                  Fully compliant with UK data protection regulations. Your customer data is secure and handled according to UK law.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3">Pricing in GBP</h3>
                <p className="text-muted-foreground">
                  No currency conversion confusion. All prices are in pounds sterling with transparent UK VAT handling.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-3">UK Support Hours</h3>
                <p className="text-muted-foreground">
                  Our support team operates during UK business hours, so you always get help when you need it most.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-16">
              Our <span className="gradient-text">Values</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-heading font-semibold">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Join Hundreds of UK Businesses Already Using GrowCheq
            </h2>
            <p className="text-lg text-muted-foreground">
              See why businesses across the UK trust GrowCheq to manage their customer engagement.
            </p>
            <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
              Get Started Today
            </Button>
            <p className="text-sm text-muted-foreground">
              14-day free trial • No credit card required
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <LeadCaptureModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        interestLevel="trial"
        planName=""
      />
    </div>
  );
};

export default About;
