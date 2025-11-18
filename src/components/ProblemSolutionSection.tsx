import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProblemSolutionSection = () => {
  const problems = [
    "£800+/month on fragmented software",
    "Hours wasted switching between platforms",
    "Missed leads from slow response times",
    "Losing reviews to competitors",
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-center mb-12">
            Running Your UK Business with{" "}
            <span className="gradient-text">10 Different Tools?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg border-2 border-destructive/30 bg-destructive/5"
              >
                <X className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                <p className="text-lg font-medium">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-8">
            <p className="text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground">
              There's a <span className="text-foreground gradient-text">better way...</span>
            </p>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-lg text-muted-foreground">
                GrowCheq consolidates everything you need into one powerful platform. 
                Manage all customer communications, automate follow-ups, collect reviews, 
                and get paid faster—without juggling multiple expensive subscriptions.
              </p>
            </div>

            <Link to="/features">
              <Button variant="outline" size="lg" className="group">
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
