import { Link } from "@tanstack/react-router";

import { Logo } from "./Logo";

import { navigation, company } from "@/data/content";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0c1033] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 lg:pt-18 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12 lg:mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="inline-flex bg-white rounded-xs px-3 py-2 mb-5"
              aria-label="AnantGrid Home"
            >
              <Logo className="w-[180px] sm:w-[200px]" />
            </Link>

            <p className="text-white/70 text-base leading-relaxed max-w-sm">
              {company.tagline}
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange mb-5">
              Explore
            </h4>

            <ul className="flex flex-col gap-3">
              {navigation.slice(1).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href as any}
                    className="text-white/70 hover:text-white transition-colors text-sm sm:text-base flex items-center group"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange mb-5">
              Business
            </h4>

            <ul className="flex flex-col gap-3">
              {[
                "Power Transmission Project Development",
                "Business Development and Bid Management",
                "Project Management and Execution Oversight",
                "Strategic Partnerships and Joint Development",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={"/business" as any}
                    className="text-white/70 hover:text-white transition-colors text-sm sm:text-base leading-snug block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange mb-5">
              Contact
            </h4>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-3.5 items-start">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />

                <span className="text-white/70 text-sm sm:text-base leading-relaxed">
                  AnantGrid Private Limited
                  <br />
                  3rd Floor, Hindustan Times House,
                  <br />
                  18-20, Kasturba Gandhi Marg,
                  <br />
                  New Delhi – 110001
                </span>
              </li>

              <li className="flex gap-3.5 items-center">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />

                <a
                  href="mailto:info@anantgrid.in"
                  className="text-white/70 hover:text-brand-orange transition-colors text-sm sm:text-base"
                >
                  info@anantgrid.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} AnantGrid Private Limited. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              to={"/privacy" as any}
              className="text-white/50 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to={"/terms" as any}
              className="text-white/50 hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};