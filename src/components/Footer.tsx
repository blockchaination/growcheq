import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
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
      { label: "GDPR Compliance", href: "/privacy" },
      { label: "Cookie Policy", href: "/privacy#cookies" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img
              src="/logo.png"
              alt="GrowCheq Logo"
              className="h-48 lg:h-56 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              The all-in-one customer engagement platform for UK businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  >
                    <Icon className="h-5 w-5 text-background" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {link.href.includes('#') ? (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-background text-sm transition-colors"
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
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 GrowCheq. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <li key={index} className="list-none">
                {link.href.includes('#') ? (
                  <a
                    href={link.href}
                    className="text-background/50 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-background/50 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </div>
          <div className="flex items-center gap-2 text-background/50 text-sm">
            <span>🇬🇧</span>
            <span>United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
