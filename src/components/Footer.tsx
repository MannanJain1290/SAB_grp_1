"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const InstagramIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>);
const LinkedinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const FacebookIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>);
const TwitterIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>);

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#verticals" },
  { label: "Properties", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const ourServices = [
  "Property Consultancy",
  "Portfolio Management",
  "Legal Assistance",
  "Market Insights"
];

export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#e2e8f0" }}>
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Brand & Info */}
          <div className="flex flex-col pr-4">
            <div className="mb-6">
              <img 
                src="/images/white_logo.png" 
                alt="SAB Group Logo" 
                className="h-16 w-auto object-contain" 
              />
            </div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#a1a1aa" }}>
              A trusted and reputable name in the real estate sector, delivering exceptional services since establishment.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579467053882" },
                { Icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/sabprop/" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200"
                  style={{ borderColor: "#27272a", color: "#a1a1aa" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#ea580c";
                    (e.currentTarget as HTMLElement).style.color = "#ea580c";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#27272a";
                    (e.currentTarget as HTMLElement).style.color = "#a1a1aa";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors duration-200"
                    style={{ fontSize: "14px", color: "#a1a1aa" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#a1a1aa"; }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Our Services
            </h4>
            <ul className="space-y-4">
              {ourServices.map((item) => (
                <li key={item}>
                  <a
                    href="#verticals"
                    className="transition-colors duration-200"
                    style={{ fontSize: "14px", color: "#a1a1aa" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#a1a1aa"; }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4
              className="font-bold mb-6"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "16px", color: "white", letterSpacing: "0.05em" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ea580c" }} />
                <div style={{ fontSize: "14px", color: "#a1a1aa", lineHeight: "1.6" }}>
                  1/22, Asaf Ali Road, Delhi - 110002
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: "#ea580c" }} />
                <a
                  href="tel:+918700513200"
                  style={{ fontSize: "14px", color: "#a1a1aa" }}
                  className="hover:text-white transition-colors"
                >
                  8700513200
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: "#ea580c" }} />
                <a
                  href="mailto:info@sabproperties.in"
                  style={{ fontSize: "14px", color: "#a1a1aa" }}
                  className="hover:text-white transition-colors"
                >
                  info@sabproperties.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{ borderTop: "1px solid #1e293b" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex justify-center items-center text-center">
          <span style={{ fontSize: "13px", color: "#71717a" }}>
            © {new Date().getFullYear()} SAB Properties Private Limited. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
