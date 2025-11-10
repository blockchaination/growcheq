export const StatsBar = () => {
  const stats = [
    { value: "3.2x", label: "Faster Response Time" },
    { value: "45%", label: "More Reviews" },
    { value: "67%", label: "Higher Conversion" },
    { value: "£12K", label: "Avg. Monthly Revenue Increase" },
  ];

  return (
    <section className="gradient-hero py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-3xl lg:text-5xl font-heading font-bold text-white">
                {stat.value}
              </p>
              <p className="text-sm lg:text-base text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
