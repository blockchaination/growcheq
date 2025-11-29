import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Scissors, Wrench, ShoppingBag, Heart, Briefcase } from "lucide-react";
import { SEO } from "@/components/SEO";

const Industries = () => {
  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  const industries = [
    {
      icon: Car,
      name: "Automotive & Vehicle Services",
      description: "From MOT reminders to service booking confirmations, keep your auto shop running smoothly.",
      benefits: [
        "Instant service booking confirmations via SMS",
        "Automated service reminders and follow-ups",
        "Quick payment collection for parts and labor",
        "Review requests after service completion",
      ],
    },
    {
      icon: Scissors,
      name: "Salons & Beauty Services",
      description: "Reduce no-shows and keep your appointment book full with automated reminders and easy booking.",
      benefits: [
        "Easy online appointment scheduling",
        "Automated appointment reminder messages",
        "Loyalty rewards and referral program management",
        "Before/after photo sharing and reviews",
      ],
    },
    {
      icon: Wrench,
      name: "Home Services",
      subtitle: "Plumbing, HVAC, Electricians",
      description: "Capture leads from every call and website visit. Get jobs approved and paid faster.",
      benefits: [
        "Lead capture from phone calls and website",
        "Job estimate approvals via SMS",
        "Automated follow-ups for quotes",
        "Review requests after job completion",
      ],
    },
    {
      icon: ShoppingBag,
      name: "Retail Stores",
      description: "Build customer loyalty and drive repeat business with targeted messaging and promotions.",
      benefits: [
        "Customer loyalty programs and rewards",
        "Inventory update and restock notifications",
        "Flash sale and promotion announcements",
        "Abandoned cart recovery for online stores",
      ],
    },
    {
      icon: Heart,
      name: "Healthcare & Wellness",
      description: "Improve patient communication and reduce missed appointments with GDPR-compliant messaging.",
      benefits: [
        "GDPR-compliant appointment reminders",
        "Secure patient intake forms",
        "Telehealth appointment scheduling",
        "Prescription renewal reminders",
      ],
    },
    {
      icon: Briefcase,
      name: "Professional Services",
      subtitle: "Consultants, Agencies, Legal",
      description: "Streamline client communication, automate proposals, and get paid faster for your services.",
      benefits: [
        "Client onboarding automation",
        "Proposal delivery and approval tracking",
        "Meeting scheduling and reminders",
        "Automated invoice generation and payments",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Industries - Customer Engagement for UK Businesses"
        description="Tailored solutions for automotive, salons, home services, retail, healthcare and professional services. See how GrowCheq helps your industry."
        canonical="https://growcheq.com/industries"
      />
      <div className="min-h-screen bg-background">
        <Navigation onCtaClick={handleRedirect} />

        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 lg:px-8">

            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="px-4 py-2">
                🇬🇧 Built for UK Businesses
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Tailored Solutions for <span className="gradient-text">Your Industry</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                No matter what you do, GrowCheq adapts to your specific business needs and workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 cursor-pointer"
                  >
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-heading mb-2">{industry.name}</CardTitle>
                      {industry.subtitle && (
                        <p className="text-sm text-muted-foreground italic">{industry.subtitle}</p>
                      )}
                      <p className="text-base text-muted-foreground pt-2">{industry.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="outline"
                        className="w-full mt-6"
                        onClick={handleRedirect}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold">
                Trusted by UK Businesses <span className="gradient-text">Across Industries</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join hundreds of UK businesses using GrowCheq to grow their customer engagement and revenue.
              </p>
              <Button variant="hero" size="lg" onClick={handleRedirect}>
                Start Your Free Trial
              </Button>
              <p className="text-sm text-muted-foreground">
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground">
                See how GrowCheq can help your specific industry grow faster and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" onClick={handleRedirect}>
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/#demo'}>
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />

      </div>
    </>
  );
};

export default Industries;
