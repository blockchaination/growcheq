export const StatsBar = () => {
  const stats = [
    { value: "3.2x", label: "Faster Response Time" },
    { value: "45%", label: "Increase in Reviews" },
    { value: "67%", label: "Higher Conversion Rate" },
    { value: "£12k", label: "Added Monthly Revenue" },
  ];

  return (
    <section className="bg-foreground text-white py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-left space-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                {stat.value}
              </p>
              <div className="h-1 w-12 bg-primary mb-4" />
              <p className="text-base lg:text-lg text-white/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
