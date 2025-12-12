import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerLinks = {
    company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Industries", href: "/industries" },
    ],
    support: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/pricing#faqs" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "GDPR Compliance", href: "/gdpr-compliance" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/growcheq/", label: "Facebook" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/growcheq/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/growcheq/", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img
              src="/logo.png"
              alt="GrowCheq Logo"
              className="h-10 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-background/60 text-sm leading-relaxed mb-8 max-w-xs">
              The all-in-one customer engagement platform for UK businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    <Icon className="h-4 w-4 text-background" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {link.href.includes('#') ? (
                    <a
                      href={link.href}
                      className="text-background/60 hover:text-background text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-background text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/50 text-xs">
            © 2025 GrowCheq. All rights reserved. (v1.0.1)
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {footerLinks.legal.map((link, index) => (
              <li key={index} className="list-none">
                {link.href.includes('#') ? (
                  <a
                    href={link.href}
                    className="text-background/50 hover:text-background text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-background/50 hover:text-background text-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </div>
          <div className="flex items-center gap-2 text-background/50 text-xs">
            <span>🇬🇧</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
