import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Calendar, Zap, CreditCard, Star, BarChart, Users, Share2 } from "lucide-react";
import { SEO } from "@/components/SEO";

// Placeholder component for missing screenshots
const FeatureScreenshot = ({ type, title, imagePath }: { type: string, title: string, imagePath?: string }) => (
  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-secondary/20 relative group">
    {imagePath ? (
      <img
        src={imagePath}
        alt={`${title} Interface`}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
      />
    ) : (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-muted/30">
        <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
          {type === 'campaigns' && <Zap className="w-8 h-8 text-primary" />}
          {type === 'payments' && <CreditCard className="w-8 h-8 text-primary" />}
          {type === 'reviews' && <Star className="w-8 h-8 text-primary" />}
          {type === 'analytics' && <BarChart className="w-8 h-8 text-primary" />}
          {type === 'team' && <Users className="w-8 h-8 text-primary" />}
          {type === 'social' && <Share2 className="w-8 h-8 text-primary" />}
        </div>
        <p className="font-medium text-sm uppercase tracking-wider">Product Screenshot</p>
        <p className="text-xl font-bold text-foreground mt-1">{title}</p>
      </div>
    )}
    {/* Browser/Device Frame Top Bar */}
    <div className="absolute top-0 left-0 right-0 h-8 bg-white/90 backdrop-blur-sm border-b border-border/50 flex items-center px-4 gap-2">
      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
    </div>
  </div>
);

const Features = () => {
  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  const features = [
    {
      id: "inbox",
      title: "Unified Inbox",
      description: "Manage all your customer conversations in one place. Whether it's SMS, Email, Facebook Messenger, or Instagram DMs, reply to everyone from a single dashboard.",
      bullets: [
        "Consolidate messages from all channels",
        "Never miss a lead with instant notifications",
        "Assign conversations to team members",
        "Filter by channel, status, or assignee"
      ],
      image: "unified_inbox_screenshot_1765628150082.png", // Using the 2nd generated image
      icon: MessageSquare
    },
    {
      id: "calendar",
      title: "Appointment Scheduling",
      description: "Eliminate the back-and-forth efficiently. Let customers book appointments directly from your website or via a link sent in a text message.",
      bullets: [
        "Sync with Google & Outlook calendars",
        "Customizable availability and buffer times",
        "Automated booking confirmations",
        "Round-robin scheduling for teams"
      ],
      image: "calendar_booking_screenshot_1765628104976.png", // Using the generated image
      icon: Calendar
    },
    {
      id: "campaigns",
      title: "Automated Campaigns",
      description: "Nurture leads and retain customers on autopilot. Build visual workflows to send the right message at the right time based on customer actions.",
      bullets: [
        "Visual drag-and-drop automation builder",
        "Pre-built templates for common scenarios",
        "SMS and Email sequences",
        "Trigger actions based on tags or behavior"
      ],
      type: "campaigns",
      icon: Zap
    },
    {
      id: "payments",
      title: "Payment Collection",
      description: "Get paid faster with Text-to-Pay. Send secure payment links directly to your customers' phones and watch the money hit your bank account.",
      bullets: [
        "Create and send professional invoices",
        "Accept credit cards, Apple Pay, and Google Pay",
        "Automated payment reminders",
        "Real-time transaction tracking"
      ],
      type: "payments",
      icon: CreditCard
    },
    {
      id: "reviews",
      title: "Review Management",
      description: "Turn happy customers into your best marketing asset. Automatically request reviews and manage your online reputation from one dashboard.",
      bullets: [
        "Automated review requests via SMS/Email",
        "Monitor Google and Facebook reviews",
        "Reply to reviews directly from the app",
        "Display best reviews on your website"
      ],
      type: "reviews",
      icon: Star
    },
    {
      id: "analytics",
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive reporting. Track your team's performance, lead conversion rates, and revenue growth.",
      bullets: [
        "Visual dashboards for key metrics",
        "Track ROI on marketing campaigns",
        "Monitor team response times",
        "Export reports for stakeholders"
      ],
      type: "analytics",
      icon: BarChart
    },
    {
      id: "team",
      title: "Team Collaboration",
      description: "Keep your team aligned and efficient. Assign tasks, share internal notes, and manage user permissions to scale your operations.",
      bullets: [
        "Internal notes within conversations",
        "Task assignment and tracking",
        "Granular user roles and permissions",
        "Activity logs and audit trails"
      ],
      type: "team",
      icon: Users
    },
    {
      id: "social",
      title: "Social Media Management",
      description: "Manage your brand's presence across all platforms. Schedule posts, reply to comments, and track engagement without switching tabs.",
      bullets: [
        "Unified social media planner",
        "Post to Facebook, Instagram, LinkedIn, GMB",
        "Reply to comments and DMs centrally",
        "Social engagement analytics"
      ],
      type: "social",
      icon: Share2
    }
  ];

  return (
    <>
      <SEO
        title="Features - All-in-One Customer Engagement Platform"
        description="Explore the powerful features of GrowCheq: Unified Inbox, Scheduling, Automation, Payments, Reviews, and more."
        canonical="https://growcheq.com/features"
      />
      <div className="min-h-screen bg-background font-sans">
        <Navigation onCtaClick={handleRedirect} />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-tight text-foreground mb-6">
              All-in-One Customer <br className="hidden md:block" />
              <span className="gradient-text">Engagement Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Everything you need to capture, convert, and retain customers — in one powerful CRM designed for growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" onClick={handleRedirect} className="h-14 px-8 text-lg shadow-xl shadow-primary/20">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Sections - Alternating */}
        <div className="flex flex-col">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={feature.id}
                className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-[#FAF9F7]'}`}
              >
                <div className="container mx-auto px-6 lg:px-12">
                  <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 animate-fade-up">
                      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-primary" />
                      </div>

                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                          {feature.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      <ul className="space-y-4">
                        {feature.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3.5 h-3.5 text-green-600 font-bold" />
                            </div>
                            <span className="text-base font-medium text-foreground/80">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2">
                        <a href="#" className="text-primary font-bold text-lg hover:underline inline-flex items-center gap-2 group">
                          Learn more about {feature.title}
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      </div>
                    </div>

                    {/* Image/Screenshot */}
                    <div className="flex-1 w-full animate-fade-up" style={{ animationDelay: '0.2s' }}>
                      <FeatureScreenshot
                        type={feature.type || feature.id}
                        title={feature.title}
                        imagePath={feature.image ? `/${feature.image}` : undefined}
                      />
                    </div>

                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Final CTA */}
        <section className="py-24 bg-foreground text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to scale your business?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join over 2,000 businesses growing with GrowCheq. Start your 14-day free trial today.
            </p>
            <Button variant="hero" size="lg" onClick={handleRedirect} className="h-14 px-10 text-lg">
              Get Started Free
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Features;
