import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const industries = [
    "ALL",
    "REAL ESTATE",
    "LEGAL SERVICES",
    "HEALTH & WELLNESS",
    "HOME SERVICES",
    "RETAIL & E-COMMERCE",
    "FINANCIAL SERVICES"
];

export const IndustrySelector = () => {
    const [selected, setSelected] = useState("ALL");

    useEffect(() => {
        // Load from local storage
        const saved = localStorage.getItem("selectedIndustry");
        if (saved && industries.includes(saved)) {
            setSelected(saved);
        }
    }, []);

    const handleSelect = (industry: string) => {
        setSelected(industry);
        localStorage.setItem("selectedIndustry", industry);
    };

    return (
        <div className="w-full py-6 mt-20 relative z-20">
            <div className="container mx-auto px-4 flex flex-col items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Select your industry:</span>

                <div className="flex items-center gap-3 overflow-x-auto max-w-full pb-2 hide-scrollbar px-2 sm:px-0">
                    {industries.map((industry) => (
                        <button
                            key={industry}
                            onClick={() => handleSelect(industry)}
                            className={cn(
                                "whitespace-nowrap rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border",
                                selected === industry
                                    ? "bg-secondary border-secondary text-foreground"
                                    : "bg-transparent border-transparent text-muted-foreground hover:bg-secondary/50 hover:text-foreground border-border/0 hover:border-border/50"
                            )}
                        >
                            {industry}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
