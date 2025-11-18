import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        message: formData.message,
        interest_level: "contact",
        status: "new",
        source_page: "/contact",
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer: "You can sign up and start using GrowCheq immediately. Most customers are fully set up within 10-15 minutes.",
    },
    {
      question: "Do you offer training?",
      answer: "Yes! All plans include access to our comprehensive knowledge base and video tutorials. Professional and Enterprise plans include personalized onboarding sessions.",
    },
    {
      question: "Can I import my existing data?",
      answer: "Absolutely. We provide easy import tools for contacts, messages, and customer data from most major platforms.",
    },
    {
      question: "What kind of support do you offer?",
      answer: "Essential plans include email support. Professional plans get priority support with faster response times. Enterprise plans include 24/7 support and a dedicated account manager.",
    },
    {
      question: "Do you have a mobile app?",
      answer: "Yes! Our mobile app is available for iOS and Android, allowing you to manage conversations and business on the go. Enterprise plans include white-labeled mobile apps.",
    },
    {
      question: "How secure is my data?",
      answer: "We use bank-level encryption and are fully GDPR compliant. Your data is stored securely in UK data centers and is never shared with third parties.",
    },
    {
      question: "Are you GDPR compliant?",
      answer: "Yes, we are fully GDPR compliant. We take data protection seriously and adhere to all UK data protection regulations.",
    },
  ];

  return (
    <HelmetProvider>
      <SEO 
        title="Contact Us - Get Help with Customer Engagement"
        description="Have questions? Contact the GrowCheq team. We typically respond within 24 hours. Email: hello@growcheq.com"
        canonical="https://growcheq.com/contact"
      />
      <div className="min-h-screen bg-background">
      <Navigation onCtaClick={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary">Home</a> / <span>Contact</span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2">
              💬 We're Here to Help
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Have questions? We're here to help. Reach out and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell us how we can help..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            <div className="text-center mt-8 space-y-2">
              <p className="text-muted-foreground">
                Email us directly at:{" "}
                <a href="mailto:hello@growcheq.com" className="text-primary hover:underline font-semibold">
                  hello@growcheq.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-2 rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Prefer to Get Started Right Away?
            </h2>
            <p className="text-lg text-muted-foreground">
              No need to wait for a response. Start your free trial and explore GrowCheq now.
            </p>
            <Button variant="hero" size="lg" onClick={() => setIsModalOpen(true)}>
              Start Free Trial
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
    </HelmetProvider>
  );
};

export default Contact;
