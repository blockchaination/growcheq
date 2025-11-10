import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "James Mitchell",
      business: "Mitchell Auto Repairs, Manchester",
      image: "👨‍🔧",
      rating: 5,
      text: "GrowCheq increased our booking rate by 45% in just 2 months. The automated follow-ups mean we never miss a service reminder, and customers love the text payment links!",
    },
    {
      name: "Sarah Thompson",
      business: "Luxe Beauty Salon, London",
      image: "👩‍💼",
      rating: 5,
      text: "We were juggling 5 different apps before GrowCheq. Now everything's in one place. Our review score went from 4.2 to 4.9 stars, and we're getting 3x more online bookings.",
    },
    {
      name: "David Roberts",
      business: "Roberts Plumbing Services, Birmingham",
      image: "👨‍🔧",
      rating: 5,
      text: "The AI automation is incredible. It qualifies leads while I'm on job sites, and I've collected payment before I even leave the customer's house. My revenue is up 67% this year!",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold">
            Loved by{" "}
            <span className="gradient-text">UK Business Owners</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses just like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="pt-6 space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <p className="font-heading font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
