import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface NavigationProps {
  onCtaClick?: () => void;
}

export const Navigation = ({ onCtaClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Features", href: "/features" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
  ];

  /* Mobile menu logic... */
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="GrowCheq Logo"
              className="h-9 lg:h-11 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 rounded-lg hover:bg-secondary/50"
              >
                {item.label}
              </a>
            ))}

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 rounded-lg hover:bg-secondary/50">
                Company
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isCompanyOpen ? "rotate-180" : "")} />
              </button>

              <div className={cn(
                "absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.12)] p-2 transition-all duration-200 origin-top-left border border-border/50",
                isCompanyOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
              )}>
                <Link to="/about" className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">
                  About
                </Link>
                <Link to="/careers" className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">
                  Careers
                </Link>
                <Link to="/newsroom" className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">
                  Newsroom
                </Link>
              </div>
            </div>

            <a
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-200 rounded-lg hover:bg-secondary/50"
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* ... */}
            <a
              href="https://app.growcheq.com"
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Login
            </a>
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = "https://app.growcheq.com"}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden h-11 px-4 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors text-sm font-bold tracking-wide"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            MENU
          </button>
        </div>

        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile menu drawer */}
        <div
          className={cn(
            "lg:hidden fixed top-0 right-0 h-full w-[300px] bg-background border-l shadow-2xl z-50 transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b">
              <span className="font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-base font-medium rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://app.growcheq.com"
                className="block py-3 px-4 text-base font-medium rounded-lg hover:bg-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
            </nav>

            <div className="p-6 border-t">
              <Button
                onClick={() => {
                  window.location.href = "https://app.growcheq.com";
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
