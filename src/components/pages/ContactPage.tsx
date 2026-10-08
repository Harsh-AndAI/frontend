import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ContactForm } from "../contact/ContactForm";
import {
  Building2,
  Mail,
  MapPin,
  FileBadge,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact intro animation
      gsap.fromTo(
        ".contact-intro-anim > *",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      // Contact form animation
      gsap.fromTo(
        ".contact-form-container",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power2.out",
        }
      );

      // Office section animation
      gsap.fromTo(
        ".contact-office-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-offices-frame",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, pageRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={pageRef} className="bg-[#FAFCFE] min-h-screen text-[#111361]">
      {/* ============================================================
          01. CONTACT US HERO & INQUIRY FORM
      ============================================================ */}
      <section
        ref={contactSectionRef}
        onMouseMove={(e) => {
          const section = contactSectionRef.current;
          const spotlight = spotlightRef.current;

          if (!section || !spotlight) return;

          const rect = section.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to(spotlight, {
            x: x - 175,
            y: y - 175,
            duration: 0.25,
            ease: "power1.out",
            overwrite: true,
          });
        }}
        className="relative overflow-hidden bg-[#0E182A] text-white pt-28 sm:pt-36 pb-20 sm:pb-28"
      >
        {/* Mouse Follow Spotlight */}
        <div
          ref={spotlightRef}
          className="absolute w-[350px] h-[350px] bg-radial from-[#F37043]/25 via-[#F37043]/5 to-transparent rounded-full pointer-events-none blur-2xl top-0 left-0 z-0"
        />

        {/* Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Ambient Spots */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F37043]/15 blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-[#0E7490]/15 blur-[120px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Contact Channels */}
            <div className="contact-intro-anim lg:col-span-5 flex flex-col justify-between text-white">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="h-[2px] w-8 bg-[#F37043]" />
                  <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-semibold text-[#F37043]">
                    Contact Us
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-light tracking-tight leading-[1.12] text-white mb-4">
                  Connect with our leadership team.
                </h1>

                <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8">
                  Explore high-voltage transmission concession partnerships,
                  vendor onboarding, or project execution inquiries with
                  AnantGrid.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-4 p-3.5 rounded-sm bg-white/[0.04] border border-white/10 backdrop-blur-xs">
                    <div className="w-10 h-10 rounded-sm bg-[#F37043]/15 border border-[#F37043]/30 flex items-center justify-center text-[#F37043] shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm sm:text-base uppercase tracking-wider font-semibold text-slate-200 block mb-0.5">
                        Institutional Inquiries
                      </span>
                      <a
                        href="mailto:info@anantgrid.in"
                        className="text-sm sm:text-base text-slate-300 hover:text-[#F37043] transition-colors block"
                      >
                        info@anantgrid.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CIN & Entity Badge */}
              <div className="mt-8 p-3.5 rounded-sm bg-white/[0.05] border border-white/10 flex items-center justify-between text-sm sm:text-base text-slate-300 backdrop-blur-xs">
                <div className="flex items-center gap-2">
                  <FileBadge className="w-4 h-4 text-[#F37043]" />
                  <span>CIN: U35107DL2025PTC455806</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>AGPL Verified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-container lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-sm p-7 sm:p-10 lg:p-12 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <h2 className="text-xl sm:text-2xl font-light text-[#111361] tracking-tight">
                    Submit an Inquiry
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          02. CORPORATE PRESENCE (SIDE-BY-SIDE CARDS)
      ============================================================ */}
      <section className="contact-offices-frame relative bg-brand-bg py-16 sm:py-20 lg:py-24 border-b border-brand-border">
        {/* Architectural Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#111361 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="h-[1.5px] w-8 bg-[#d97736]" />
              <span className="text-sm sm:text-base uppercase tracking-[0.3em] font-bold text-[#d97736]">
                Presence
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#08111d] leading-tight tracking-tight">
              Corporate &amp; Registered Offices.
            </h2>
          </div>

          {/* Unified Entity Credentials Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 mb-8 bg-white/70 backdrop-blur-xs border border-brand-border rounded-sm">
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#d97736]" />
              <span className="text-base sm:text-lg font-medium text-[#08111d]">
                AnantGrid Private Limited
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-slate-500">
              <div className="inline-flex items-center gap-1.5">
                <FileBadge className="w-4 h-4 text-[#d97736]" />
                <span>CIN: U35107DL2025PTC455806</span>
              </div>
              
            </div>
          </div>

          {/* Side-by-Side Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Corporate Office */}
            <div className="contact-office-card group relative flex flex-col justify-between bg-white border border-brand-border rounded-sm p-7 sm:p-9 hover:border-[#d97736]/50 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60">
                  <span className="text-sm uppercase tracking-widest text-[#d97736] font-bold">
                    Corporate Office
                  </span>
                  <Building2 className="w-5 h-5 text-slate-400 group-hover:text-[#d97736] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#08111d] mb-4">
                  Delhi Aerocity Hub
                </h3>

                {/* Details */}
                <div className="space-y-4 text-sm sm:text-base text-slate-600 font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#d97736] shrink-0 mt-1" />
                    <span className="leading-relaxed">
                      1ˢᵗ Floor, Pride Plaza, Asset 5A, Delhi Aerocity, New Delhi, 110037
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#d97736] shrink-0" />
                    <a
                      href="mailto:info@anantgrid.in"
                      className="hover:text-[#d97736] font-mono text-xs sm:text-sm transition-colors"
                    >
                      info@anantgrid.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400">
                <span>AnantGrid Operations</span>
                <span>Aerocity, India</span>
              </div>
            </div>

            {/* Card 2: Registered Office */}
            <div className="contact-office-card group relative flex flex-col justify-between bg-white border border-brand-border rounded-sm p-7 sm:p-9 hover:border-[#d97736]/50 hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#d97736] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60">
                  <span className="text-sm uppercase tracking-widest text-[#d97736] font-bold">
                    Registered Office
                  </span>
                  <Building2 className="w-5 h-5 text-slate-400 group-hover:text-[#d97736] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-[#08111d] mb-4">
                  Hindustan Times House
                </h3>

                {/* Details */}
                <div className="space-y-4 text-sm sm:text-base text-slate-600 font-light">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#d97736] shrink-0 mt-1" />
                    <span className="leading-relaxed">
                      3rd Floor, Hindustan Times House, 18-20, Kasturba Gandhi Marg, New Delhi – 110001
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#d97736] shrink-0" />
                    <a
                      href="mailto:info@anantgrid.in"
                      className="hover:text-[#d97736] font-mono text-xs sm:text-sm transition-colors"
                    >
                      info@anantgrid.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400">
                <span>AnantGrid </span>
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};