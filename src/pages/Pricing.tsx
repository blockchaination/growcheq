import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SEO } from "@/components/SEO";

const Pricing = () => {
  const handleRedirect = () => {
    window.location.href = "https://app.growcheq.com/";
  };

  const plans = [
    {
      name: "Essential",
      price: "£79",
      description: "Perfect for solo operators",
      popular: false,
      features: [
        { name: "Up to 5,000 email contacts", included: true },
        { name: "500 SMS messages/month", included: true },
        { name: "CRM & Pipeline Management", included: true },
        { name: "Unlimited Sales Funnels", included: true },
        { name: "Website Builder", included: true },
        { name: "Email & SMS Marketing", included: true },
        { name: "Booking & Appointments", included: true },
        { name: "Basic Automations", included: true },
        { name: "Document Signing", included: true },
        { name: "Email Support", included: true },
        { name: "Reputation Management", included: false },
        { name: "Call Tracking & Recording", included: false },
        { name: "Advanced Workflows", included: false },
        { name: "Priority Support", included: false },
      ],
    },
    {
      name: "Professional",
      price: "£197",
      description: "Best for growing businesses",
      popular: true,
      features: [
        { name: "Up to 25,000 email contacts", included: true },
        { name: "2,500 SMS messages/month", included: true },
        { name: "Everything in Essential", included: true },
        { name: "Reputation Management", included: true },
        { name: "Call Tracking & Recording", included: true },
        { name: "Advanced Workflow Automations", included: true },
        { name: "Courses & Digital Products", included: true },
        { name: "Communities & Member Areas", included: true },
        { name: "Tracking & Analytics Dashboard", included: true },
        { name: "Priority Support", included: true },
        { name: "White-labeled Mobile App", included: false },
        { name: "24/7 Priority Support", included: false },
        { name: "Dedicated Account Manager", included: false },
      ],
    },
    {
      name: "Enterprise",
      price: "£347",
      description: "For agencies & multi-location",
      popular: false,
      features: [
        { name: "Unlimited contacts & messages", included: true },
        { name: "Everything in Professional", included: true },
        { name: "White-labeled Mobile App", included: true },
        { name: "24/7 Priority Support", included: true },
        { name: "Custom Integrations", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "White-glove Onboarding", included: true },
        { name: "Multi-location Management", included: true },
        { name: "Advanced API Access", included: true },
      ],
    },
  ];

  const fullComparison = [
    { feature: "CRM & Pipeline Management", competitor: "HubSpot", cost: "£99" },
    { feature: "Website Builder", competitor: "Wix Pro", cost: "£29" },
    { feature: "Email Marketing", competitor: "Mailchimp", cost: "£99" },
    { feature: "SMS Marketing", competitor: "Twilio", cost: "£99" },
    { feature: "Booking & Scheduling", competitor: "Calendly", cost: "£29" },
    { feature: "Reputation Management", competitor: "Birdeye", cost: "£159" },
    { feature: "Call Tracking", competitor: "CallRail", cost: "£49" },
    { feature: "Marketing Automation", competitor: "ActiveCampaign", cost: "£169" },
    { feature: "Online Courses Platform", competitor: "Teachable", cost: "£99" },
    { feature: "Forms & Surveys", competitor: "Typeform", cost: "£49" },
  ];

  const totalCost = fullComparison.reduce((sum, item) => sum + parseInt(item.cost.replace("£", "")), 0);
  const savings = totalCost - 197;

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, Amex), debit cards, and direct debit. All payments are processed securely.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied within the first 14 days, we'll refund your payment—no questions asked.",
    },
    {
      question: "What happens after the trial?",
      answer: "After your 14-day free trial, your chosen plan will automatically begin. You can cancel anytime during the trial with no charges.",
    },
    {
      question: "Are there setup fees?",
      answer: "No setup fees, ever. The price you see is the price you pay. We believe in transparent, straightforward pricing.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your account settings.",
    },
    {
      question: "Do you offer discounts for annual plans?",
      answer: "Yes! Save 20% when you pay annually. Contact our sales team to discuss annual billing options.",
    },
    {
      question: "What's included in support?",
      answer: "Essential plans get email support. Professional plans get priority support with faster response times. Enterprise plans get 24/7 support and a dedicated account manager.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "None. What you see is what you pay. No surprises, no hidden charges. SMS and email usage is included in your plan limits.",
    },
    {
      question: "How does billing work?",
      answer: "Billing is monthly or annual, depending on your preference. You'll be charged automatically to your payment method on file. You can view all invoices in your account.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing - Save £683/Month on Customer Engagement"
        description="Transparent pricing from £79/month. Replace HubSpot, Mailchimp, Twilio and more with one affordable platform. 14-day free trial, no credit card required."
        canonical="https://growcheq.com/pricing"
      />
      <Navigation onCtaClick={handleRedirect} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2">
              💰 Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Pricing That <span className="gradient-text">Scales</span> With Your Business
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Save over £600/month compared to using separate tools. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 ${plan.popular
                  ? "border-4 border-primary shadow-2xl lg:scale-105"
                  : "border-2 hover:scale-105"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-primary text-white px-6 py-2 font-semibold shadow-lg">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="space-y-4 pb-8">
                  <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl font-heading font-bold gradient-text">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="pt-8">
                  <Button
                    variant={plan.popular ? "gradient" : "outline"}
                    size="lg"
                    className="w-full"
                    onClick={handleRedirect}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include 14-day free trial • No credit card required
          </p>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section id="comparison" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Replace <span className="gradient-text">10+ Tools</span> With One Platform
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              See exactly how much you'll save by consolidating to GrowCheq
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border-2">
            <table className="w-full bg-card">
              <thead className="gradient-hero text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-heading">Feature</th>
                  <th className="px-6 py-4 text-left font-heading">Other Tools Cost</th>
                  <th className="px-6 py-4 text-left font-heading">With GrowCheq</th>
                  <th className="px-6 py-4 text-left font-heading">You Save</th>
                </tr>
              </thead>
              <tbody>
                {fullComparison.map((item, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? "bg-muted/30" : "bg-card"}`}>
                    <td className="px-6 py-4 font-medium">{item.feature}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {item.competitor} - {item.cost}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <Check className="h-5 w-5" />
                        Included
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">{item.cost}</td>
                  </tr>
                ))}
                <tr className="gradient-primary text-white font-bold text-lg">
                  <td className="px-6 py-6">TOTAL</td>
                  <td className="px-6 py-6">£{totalCost}/month</td>
                  <td className="px-6 py-6">£197/month</td>
                  <td className="px-6 py-6">£{savings}/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {fullComparison.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between items-center w-full pr-4">
                      <span className="font-semibold">{item.feature}</span>
                      <span className="text-green-600 font-bold">{item.cost}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Other Tools:</span>
                      <span className="font-semibold">{item.competitor} - {item.cost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">With GrowCheq:</span>
                      <span className="text-green-600 font-semibold flex items-center gap-2">
                        <Check className="h-4 w-4" />
                        Included
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-semibold">You Save:</span>
                      <span className="text-green-600 font-bold">{item.cost}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="mt-6 gradient-hero text-white">
              <CardContent className="p-6">
                <div className="space-y-3 text-center">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">TOTAL Other Tools:</span>
                    <span className="text-2xl font-bold">£{totalCost}/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">GrowCheq:</span>
                    <span className="text-2xl font-bold">£197/mo</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">YOU SAVE:</span>
                      <span className="text-3xl font-bold">£{savings}/mo</span>
                    </div>
                    <p className="text-sm mt-2 text-white/90">That's £{savings * 12} saved per year!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="hero" size="lg" onClick={handleRedirect}>
              Stop Overpaying. Start Your Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Pricing <span className="gradient-text">FAQs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about our pricing and plans
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
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team is here to help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" onClick={handleRedirect}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />


    </div>
  );
};

export default Pricing;
