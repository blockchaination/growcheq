import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface IndustrySelectionModalProps {
    isOpen: boolean;
    onSelect: (industry: string) => void;
}

const industries = [
    { label: "Automotive & Vehicle Services", key: "AUTOMOTIVE & VEHICLE SERVICES" },
    { label: "Salons & Beauty Services", key: "SALONS & BEAUTY SERVICES" },
    { label: "Home Services", key: "HOME SERVICES" },
    { label: "Retail Stores", key: "RETAIL & E-COMMERCE" },
    { label: "Healthcare & Wellness", key: "HEALTH & WELLNESS" },
    { label: "Professional Services", key: "FINANCIAL SERVICES" } // Mapping 'Professional' general to 'FINANCIAL SERVICES' key for now or just generic
];

export const IndustrySelectionModal = ({ isOpen, onSelect }: IndustrySelectionModalProps) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Small delay for smooth entrance
            const timer = setTimeout(() => setShowModal(true), 100);
            return () => clearTimeout(timer);
        } else {
            setShowModal(false);
        }
    }, [isOpen]);

    if (!isOpen && !showModal) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500",
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

            {/* Modal Content */}
            <div className={cn(
                "relative bg-white lg:bg-[#FAF9F7] w-full max-w-[900px] mx-4 p-8 lg:p-12 rounded-2xl shadow-2xl transform transition-transform duration-500",
                showModal ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            )}>
                <div className="text-center mb-10 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                        Welcome to GrowCheq
                    </h2>
                    <p className="text-base lg:text-lg text-muted-foreground">
                        Select your industry to get started
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {industries.map((industry) => (
                        <button
                            key={industry.key}
                            onClick={() => onSelect(industry.key)}
                            className="group bg-white border-[1.5px] border-border hover:border-primary/50 hover:bg-[#FFF5F5] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center flex items-center justify-center min-h-[100px]"
                        >
                            <span className="text-base lg:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                {industry.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
