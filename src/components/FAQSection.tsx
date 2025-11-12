import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption (256-bit SSL) and are fully GDPR compliant. Your data is stored in UK-based servers, and we never share your information with third parties. We undergo regular security audits to ensure your business and customer data stays protected.",
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! GrowCheq integrates seamlessly with popular tools like Stripe, Xero, Google Calendar, Zapier, and hundreds more through our API. We also offer custom integrations for Enterprise clients.",
    },
    {
      question: "How long does setup take?",
      answer: "Most businesses are up and running in under 10 minutes. Our onboarding wizard guides you through connecting your channels, importing contacts, and setting up automations. Professional and Enterprise plans include dedicated onboarding support.",
    },
    {
      question: "Do you offer training?",
      answer: "Yes! All plans include access to our comprehensive Help Center, video tutorials, and live webinars. Professional and Enterprise clients also get priority support and personalized training sessions with our team.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) and direct debit for UK accounts. All transactions are processed securely through Stripe.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time from your account settings. If you cancel during your free trial, you won't be charged anything.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "You'll have 30 days to export all your data before your account is closed. We provide easy export tools for contacts, messages, and analytics. Your data belongs to you, always.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg border-2 px-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
