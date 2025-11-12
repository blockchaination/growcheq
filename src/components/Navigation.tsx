import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  onCtaClick: () => void;
}

export const Navigation = ({ onCtaClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Features", href: "#features" },
    { label: "Industries", href: "#industries" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-md backdrop-blur-sm bg-white/95" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/branding/main_logo.png" 
              alt="GrowCheq Logo" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-[#2f196d] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={onCtaClick}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#2f196d] to-[#4865b7] text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-slide-up">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-muted rounded-lg transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4">
              <Button 
                className="w-full px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#2f196d] to-[#4865b7] text-white font-semibold text-sm hover:shadow-lg transition-all duration-200" 
                onClick={onCtaClick}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
