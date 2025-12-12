export const StatsBar = () => {
  const stats = [
    { value: "3.2x", label: "Faster Response Time" },
    { value: "45%", label: "More Reviews" },
    { value: "67%", label: "Higher Conversion" },
    { value: "£12K", label: "Avg. Monthly Revenue Increase" },
  ];

  return (
    <section className="bg-gradient-to-r from-primary via-primary/95 to-accent py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm lg:text-base text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
