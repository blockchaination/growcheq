import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { ArrowRight, Car, Scissors, Home, ShoppingBag, Heart, Briefcase } from "lucide-react";

const Industries = () => {
  const handleRedirect = () => {
    // Placeholder linking to GHL funnel as requested
    window.location.href = "https://growcheq.com/get-started";
  };

  const industries = [
    {
      id: "automotive",
      name: "Automotive & Vehicle Services",
      description: "Keep your auto shop running smoothly with automated booking and reminders.",
      bullets: ["Instant booking confirmations", "Automated service reminders", "Quick payment collection", "Review requests"],
      icon: Car,
      imagePlaceholder: "bg-blue-100"
    },
    {
      id: "salons",
      name: "Salons & Beauty Services",
      description: "Reduce no-shows and keep your appointment book full with automated reminders.",
      bullets: ["Online booking 24/7", "SMS Appointment reminders", "Loyalty rewards", "Before/After photos"],
      icon: Scissors,
      imagePlaceholder: "bg-pink-100"
    },
    {
      id: "home-services",
      name: "Home Services",
      description: "Capture leads from every call and website visit. Get jobs approved and paid faster.",
      bullets: ["Lead capture automation", "SMS Job estimates", "Automated follow-ups", "Post-job reviews"],
      icon: Home,
      imagePlaceholder: "bg-amber-100"
    },
    {
      id: "retail",
      name: "Retail Stores",
      description: "Build customer loyalty and drive repeat business with targeted messaging and promotions.",
      bullets: ["Loyalty programs", "Restock notifications", "Flash sales", "Abandoned cart recovery"],
      icon: ShoppingBag,
      imagePlaceholder: "bg-purple-100"
    },
    {
      id: "healthcare",
      name: "Healthcare & Wellness",
      description: "Improve patient communication and reduce missed appointments with GDPR-compliant messaging.",
      bullets: ["Secure reminders", "Intake forms", "Telehealth booking", "Rx renewal reminders"],
      icon: Heart,
      imagePlaceholder: "bg-cyan-100"
    },
    {
      id: "professional",
      name: "Professional Services",
      description: "Streamline client communication, automate proposals, and get paid faster.",
      bullets: ["Onboarding automation", "Proposal tracking", "Meeting reminders", "Invoice payments"],
      icon: Briefcase,
      imagePlaceholder: "bg-slate-100"
    }
  ];

  return (
    <>
      <SEO
        title="Industries - Solutions for Every Industry"
        description="Tailored customer engagement tools for Automotive, Salons, Home Services, Retail, Healthcare, and Professional Services."
        canonical="https://growcheq.com/industries"
      />
      <div className="min-h-screen bg-background font-sans">
        <Navigation onCtaClick={handleRedirect} />

        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#FAF9F7]">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-foreground mb-6">
              Solutions for <span className="text-primary relative inline-block">Every Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tailored customer engagement tools built for your specific business needs and workflows.
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="group bg-white rounded-2xl border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2"
                >
                  {/* Image Area - Placeholder */}
                  <div className={`h-48 w-full ${industry.imagePlaceholder} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    <industry.icon className="w-16 h-16 text-black/10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                      {industry.name}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">{industry.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {industry.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {industry.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={handleRedirect}
                      className="w-full rounded-full h-12 text-base font-bold group-hover:bg-primary group-hover:text-white transition-all shadow-md"
                      variant="secondary"
                    >
                      Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Don't see your industry?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              GrowCheq works for almost any local business. Contact us to see how we can help you too.
            </p>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'} className="h-12 px-8">
              Contact Sales
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Industries;
