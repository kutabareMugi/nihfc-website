import { motion } from "framer-motion";
import { Globe, Mail, Phone, Shield, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-champagne flex items-center justify-center">
                <span className="text-background font-bold text-lg">N</span>
              </div>
              <div>
                <span className="font-bold text-lg">NIHFC</span>
                <span className="text-xs text-foreground/50 block">Investment & Financial</span>
              </div>
            </div>
            <p className="text-sm text-foreground/60 max-w-sm mb-6">
              Securing Tomorrow Through Smart Investment. Building wealth with 
              diversified portfolios, risk-managed strategies, and data-backed decisions.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://nihfc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                <Globe className="w-4 h-4" />
                NIHFC.COM
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-luxury uppercase text-foreground/70">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Equity Investments",
                "Commodity Trading",
                "Logistics & Tenders",
                "Café Ventures",
                "Tax Planning",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors link-underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-luxury uppercase text-foreground/70">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@nihfc.com"
                  className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@nihfc.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </a>
              </li>
            </ul>

            {/* Trust Signals */}
            <div className="mt-6 p-4 rounded-xl bg-foreground/5 border border-foreground/10">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-emerald" />
                <span className="text-xs font-medium">Trusted Partner</span>
              </div>
              <p className="text-xs text-foreground/50">
                15+ years of excellence with blue-chip assets and transparent policies.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          {/* Risk Disclaimer */}
          <div className="glass-card p-4 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-foreground/40 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-foreground/40 leading-relaxed">
                <span className="font-medium text-foreground/60">Important Disclaimer:</span>{" "}
                Investments in securities market are subject to market risks. Read all the 
                related documents carefully before investing. Past performance is not 
                indicative of future returns. The information provided is for educational 
                purposes only and should not be considered as investment advice.
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-foreground/40">
              © {new Date().getFullYear()} Northern Investment Housing & Finance Corporation. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-foreground/40 hover:text-foreground/70 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
