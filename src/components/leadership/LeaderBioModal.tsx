import { useEffect, useRef } from "react";
import gsap from "gsap";
import { X, Award, GraduationCap, Building2, Briefcase } from "lucide-react";
import { LeaderProfile } from "@/data/leadershipData";

interface ModalProps {
  leader: LeaderProfile | null;
  onClose: () => void;
}

export const LeaderBioModal = ({ leader, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leader) return;

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );

      gsap.fromTo(
        panelRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.45, ease: "power3.out" }
      );
    });

    return () => {
      document.body.style.overflow = "auto";
      ctx.revert();
    };
  }, [leader]);

  if (!leader) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white text-brand-navy h-full overflow-y-auto p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col justify-between"
      >
        {/* Top Bar / Close Button */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-brand-border">
            <span className="text-sm sm:text-base uppercase tracking-[0.25em] text-brand-orange font-semibold">
              Executive Dossier
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-brand-navy transition-colors"
              aria-label="Close Profile"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Header */}
          <div className="mt-8">
            <span className="inline-block text-sm sm:text-base text-brand-orange font-semibold uppercase tracking-wider mb-2">
              {leader.category}
            </span>

            <h3 className="text-3xl sm:text-4xl font-light text-brand-navy tracking-tight">
              {leader.name}
            </h3>

            <p className="text-base sm:text-lg font-medium text-slate-600 mt-1">
              {leader.role}
            </p>

            <div className="flex items-center gap-2 mt-4 text-sm text-slate-500 bg-slate-50 border border-brand-border w-fit px-3 py-1.5 rounded-xs">
              <Award className="w-3.5 h-3.5 text-brand-orange" />
              <span>{leader.experience} Leadership Experience</span>
            </div>
          </div>

          {/* Summary */}
          <p className="mt-6 text-base sm:text-lg text-slate-700 font-light leading-relaxed">
            {leader.summary}
          </p>

          {/* Career Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="text-sm sm:text-base uppercase tracking-widest text-brand-navy font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-brand-orange" />
              Career &amp; Strategic Accomplishments
            </h4>

            <ul className="space-y-3 text-sm sm:text-base text-slate-600 font-light">
              {leader.careerHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="text-sm sm:text-base uppercase tracking-widest text-brand-navy font-semibold mb-3 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-brand-orange" />
              Academic Background
            </h4>

            <div className="flex flex-wrap gap-2">
              {leader.education.map((edu, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xs"
                >
                  {edu}
                </span>
              ))}
            </div>
          </div>

          {/* Previous Organizations */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <h4 className="text-sm sm:text-base uppercase tracking-widest text-brand-navy font-semibold mb-3 flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-brand-orange" />
              Institutional Heritage
            </h4>

            <div className="flex flex-wrap gap-2">
              {leader.previousOrganizations.map((org, idx) => (
                <span
                  key={idx}
                  className="text-sm bg-brand-navy/5 text-brand-navy border border-brand-navy/10 px-2.5 py-1 rounded-xs"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-brand-border text-sm text-slate-400">
          AnantGrid Institutional Leadership Team
        </div>
      </div>
    </div>
  );
};