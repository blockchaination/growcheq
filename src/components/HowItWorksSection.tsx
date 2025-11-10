import { Link, MessageCircle, Repeat, Zap } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      title: "Connect Your Channels",
      description: "Integrate SMS, email, WhatsApp, and social media in minutes. No technical skills required.",
    },
    {
      icon: MessageCircle,
      title: "Capture Every Lead",
      description: "AI automatically qualifies inquiries and routes them to the right team member instantly.",
    },
    {
      icon: Repeat,
      title: "Automate Follow-Ups",
      description: "Smart sequences keep customers engaged with personalized messages at the perfect time.",
    },
    {
      icon: Zap,
      title: "Get Paid Faster",
      description: "Send payment links via text, track revenue in real-time, and boost cash flow by 67%.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get up and running in under 10 minutes. It's that simple.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-6 animate-slide-up`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${isEven ? "lg:text-right lg:pr-12" : "lg:text-left lg:pl-12 lg:order-2"}`}
                    >
                      <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow border-2">
                        <h3 className="text-2xl font-heading font-bold mb-3">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 w-16 h-16 lg:w-20 lg:h-20 rounded-full gradient-primary flex items-center justify-center shadow-xl flex-shrink-0">
                      <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    </div>

                    {/* Spacer for even items on desktop */}
                    {isEven && <div className="hidden lg:block flex-1" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
