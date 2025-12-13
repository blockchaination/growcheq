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
    </li >
                      ))}
                    </ul >
                  </CardContent >
                </Card >
              );
            })}
          </div >
        </div >
      </section >

  {/* How It Works */ }
  < section className = "py-16 lg:py-24 bg-muted/30" >
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
      </section >

  {/* Demo Booking Section */ }
  < DemoBookingSection />

  {/* CTA Section */ }
  < section className = "py-16 lg:py-24 bg-background" >
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
      </section >

  <Footer />

    </div >
  );
};

export default Features;
