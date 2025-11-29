import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavigationProps {
  onCtaClick?: () => void;
}

export const Navigation = ({ onCtaClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Features", href: "/features" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="GrowCheq Logo"
              className="h-10 lg:h-12 w-auto max-w-[180px] object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt={user.email || ''} />
                      <AvatarFallback>
                        {user.email?.[0].toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{user.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem onClick={() => navigate('/admin')}>
                      <User className="mr-2 h-4 w-4" />
                      Admin Dashboard
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <a
                  href="https://app.growcheq.com"
                  className="text-foreground hover:text-primary transition-colors font-medium mr-4"
                >
                  Login
                </a>
                <Button variant="gradient" onClick={() => window.location.href = "https://app.growcheq.com"}>
                  Start Free Trial
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-12 h-12 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile menu drawer */}
        <div
          className={cn(
            "md:hidden fixed top-0 right-0 h-full w-[280px] bg-background border-l shadow-2xl z-50 transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-semibold text-lg">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-4 px-4 text-base font-medium rounded-lg hover:bg-accent transition-colors min-h-[44px] flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="p-6 border-t">
              <Button
                onClick={() => {
                  window.location.href = "https://app.growcheq.com";
                  setIsMobileMenuOpen(false);
                }}
                variant="hero"
                className="w-full h-12"
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
