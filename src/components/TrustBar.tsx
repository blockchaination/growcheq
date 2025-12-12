export const TrustBar = () => {
    // Placeholder logic for infinite scroll would typically use a library or CSS animation
    // For now, we'll create a clean static row that represents the structure

    return (
        <section className="bg-white border-b border-gray-100 py-8">
            <div className="container mx-auto px-6 lg:px-12">
                <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
                    Trusted by 1,000+ UK Businesses
                </p>

                {/* Logo Rows - Grayscale & Minimal */}
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Replace with actual SVG logos */}
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
            </div>
        </section>
    );
};
