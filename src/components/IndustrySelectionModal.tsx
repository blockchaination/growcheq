import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface IndustrySelectionModalProps {
    isOpen: boolean;
    onSelect: (industry: string) => void;
}

const industries = [
    { label: "AUTOMOTIVE & VEHICLE SERVICES", key: "automotive" },
    { label: "SALONS & BEAUTY SERVICES", key: "salons" },
    { label: "HOME SERVICES", key: "home-services" },
    { label: "RETAIL STORES", key: "retail" },
    { label: "HEALTHCARE & WELLNESS", key: "healthcare" },
    { label: "PROFESSIONAL SERVICES", key: "professional" }
];

export const IndustrySelectionModal = ({ isOpen, onSelect }: IndustrySelectionModalProps) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setShowModal(true), 100);
            return () => clearTimeout(timer);
        } else {
            setShowModal(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setShowModal(false);
        // User can dismiss, default to General/All? Or just close.
        // Prompt says "Clicking X or backdrop = select 'General' by default" or just dismiss.
        setTimeout(() => {
            onSelect("general");
        }, 300);
    };

    if (!isOpen && !showModal) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500",
            showModal ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
            {/* Backdrop - See through to website */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500"
                onClick={handleClose}
            />

            {/* Modal Content - Podium Style (Compact 500px) */}
            <div className={cn(
                "relative bg-white w-full max-w-[500px] mx-4 p-10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] transform transition-all duration-500",
                showModal ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
            )}>
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-lg font-medium text-foreground">
                        Select your industry:
                    </h2>
                </div>

                <div className="flex flex-col space-y-3">
                    {industries.map((industry) => (
                        <button
                            key={industry.key}
                            onClick={() => onSelect(industry.key)}
                            className="w-full bg-[#5A8C8C] hover:bg-[#4a7272] text-white font-bold text-sm uppercase tracking-wide py-3.5 px-6 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-sm"
                        >
                            {industry.label}
                        </button>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-[13px] text-gray-500">
                        Already a GrowCheq customer? <a href="#" className="text-[#FF6B6B] hover:underline">Sign in.</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
