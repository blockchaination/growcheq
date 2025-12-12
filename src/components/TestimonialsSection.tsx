import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "GrowCheq has completely transformed how we handle leads. We used to miss calls all the time, now our AI agent books appointments while we sleep.",
      author: "James Miller",
      role: "Owner",
      company: "Miller HVAC Services",
      image: "JM", // Placeholder for initial
      metric: "30% Increase in Revenue",
      logo: "MH"
    },
    {
      quote: "The review automation is a game changer. We went from 20 reviews to over 150 in just three months. Our Google ranking has never been higher.",
      author: "Sarah Jenkins",
      role: "Practice Manager",
      company: "Jenkins Dental",
      image: "SJ",
      metric: "150+ New 5-Star Reviews",
      logo: "JD"
    },
    {
      quote: "Getting paid used to be a hassle. Now we send a text link and the money is in our account instantly. Our cash flow has improved dramatically.",
      author: "David Chen",
      role: "Director",
      company: "Chen Auto Repair",
      image: "DC",
      metric: "2x Faster Payments",
      logo: "CA"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Trusted by UK Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why over 1,000 local businesses trust GrowCheq to manage their customer communications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              {/* Star Rating */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed flex-grow mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Metric Badge */}
              <div className="mb-8 p-3 bg-green-50 border border-green-100 rounded-lg inline-block w-fit">
                <p className="text-sm font-bold text-green-700">{testimonial.metric}</p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
