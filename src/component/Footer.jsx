import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const SOCIAL_ICONS = [
  {
    label: "Facebook",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.21 2.4.46.7.27 1.2.62 1.7 1.13.5.5.86 1 1.13 1.7.25.6.41 1.3.46 2.4C21.94 8.9 22 9.3 22 12s0 3.1-.06 4.1c-.05 1.1-.21 1.8-.46 2.4a4.6 4.6 0 0 1-1.13 1.7 4.6 4.6 0 0 1-1.7 1.13c-.6.25-1.3.41-2.4.46-1 .06-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.21-2.4-.46a4.6 4.6 0 0 1-1.7-1.13 4.6 4.6 0 0 1-1.13-1.7c-.25-.6-.41-1.3-.46-2.4C2.06 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.21-1.8.46-2.4.27-.7.62-1.2 1.13-1.7.5-.5 1-.86 1.7-1.13.6-.25 1.3-.41 2.4-.46C8.9 2.06 9.3 2 12 2zm0 1.8c-2.65 0-2.97 0-4.02.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65C4.28 9.03 4.28 9.35 4.28 12s0 2.97.06 4.02c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.05.06 1.37.06 4.02.06s2.97 0 4.02-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.06-1.05.06-1.37.06-4.02s0-2.97-.06-4.02c-.04-.87-.18-1.34-.3-1.65a2.8 2.8 0 0 0-.67-1.02 2.8 2.8 0 0 0-1.02-.67c-.31-.12-.78-.26-1.65-.3C14.97 3.8 14.65 3.8 12 3.8zm0 3.3a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2zm5.1-2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.24 2H21l-6.5 7.43L22.2 22h-6.3l-4.94-6.46L5.24 22H2.46l6.96-7.95L1.8 2h6.46l4.47 5.9L18.24 2zm-1.1 18.17h1.75L7 3.75H5.12l12.02 16.42z" />
      </svg>
    ),
  },
];

const COMPANY_LINKS = ["About Us", "Careers", "Blog", "Contact Us"];
const QUICK_LINKS = ["Local Rental", "Expensive Cars", "Locations", "Offers"];
const SUPPORT_LINKS = ["Help Center", "Privacy Policy", "FAQs", "Cancellation Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white/70">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr_1.1fr]">
        {/* Brand */}
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            Drive<span className="text-amber-400">Go</span>
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Your trusted partner for car rentals. Local to luxury, we make
            every journey memorable.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-[#0d1b2a] transition-colors"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">
            Customer Support
          </h4>
          <ul className="space-y-2 text-sm">
            {SUPPORT_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get in touch + newsletter */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-sm mb-6">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              +1 234 567 8900
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              info@drivego.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              123 Drive Street, New York, USA
            </li>
          </ul>

          <h4 className="text-white font-semibold text-sm mb-3">
            Newsletter
          </h4>
          <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2.5 text-sm text-white placeholder-white/40 flex-1 outline-none"
            />
            <button className="bg-amber-400 hover:bg-amber-500 text-[#0d1b2a] px-3 py-2.5 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} DriveGo. All rights reserved.
      </div>
    </footer>
  );
}