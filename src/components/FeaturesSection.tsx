import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeaturesSectionProps {
  features: { title: string; description: string }[];
}

export const FeaturesSection = ({ features }: FeaturesSectionProps) => {


  return (
    <section id="features" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Everything You Need. <br /> <span className="text-primary">Nothing You Don't.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Replace your fragmented tech stack with one powerful, easy-to-use platform designed for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border border-border/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-2xl overflow-hidden"
            >
              <CardHeader className="space-y-4 pt-10 px-8">
                <CardTitle className="text-2xl font-bold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/features">
            <Button size="lg" className="rounded-full px-10 py-6 h-auto text-base font-bold bg-secondary hover:bg-secondary/80 text-foreground transition-colors">
              Explore All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
