import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageHero } from "../PageHero";
import {
  boardOfDirectors,
  executiveLeaders,
  domainLeaders,
  LeaderProfile,
} from "@/data/leadershipData";
import { LeaderBioModal } from "../leadership/LeaderBioModal";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const LeadershipPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedLeader, setSelectedLeader] =
    useState<LeaderProfile | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".leadership-intro-group > *",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".leadership-intro-group",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".board-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".board-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".exec-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".exec-grid",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".domain-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".domain-grid",
            start: "top 85%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="bg-brand-bg min-h-screen text-brand-navy"
    >
      {/* ============================================================
          01. PAGE HERO
      ============================================================ */}
      <PageHero
        label="Leadership"
        title="Leadership at AnantGrid"
        image="/images/leadership hero1.png"
      />

      {/* ============================================================
          02. INTRO
      ============================================================ */}
      <section className="pt-16 pb-6 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="leadership-intro-group max-w-3xl">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="h-[2px] w-8 bg-brand-orange" />
            <span className="text-sm sm:text-base uppercase tracking-[0.2em] font-bold text-brand-orange">
              Leadership
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-navy leading-tight mb-4">
            Our Leadership
          </h2>

          <p className="text-base sm:text-lg text-brand-text-secondary font-light leading-relaxed">
            Seasoned energy executives and institutional fiduciaries guiding
            AnantGrid&apos;s transmission concession growth, bidding strategy,
            and high-voltage grid execution.
          </p>
        </div>
      </section>

      {/* ============================================================
          03. BOARD OF DIRECTORS (2 CARDS - 4:5 CROPPED)
      ============================================================ */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-5 border-b border-brand-border pb-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <h3 className="text-sm sm:text-base uppercase tracking-[0.18em] font-bold text-brand-navy">
            Board of Directors
          </h3>
        </div>

        <div className="board-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {boardOfDirectors.map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="board-card group cursor-pointer flex flex-col justify-between rounded-sm border border-brand-border bg-white shadow-xs hover:shadow-lg hover:border-brand-orange/60 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* 4:5 Standard Portrait Frame */}
                <div className="relative h-[280px] w-full overflow-hidden bg-neutral-100 border-b border-brand-border sm:h-[300px]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_18%] transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-xs sm:text-sm uppercase tracking-wide text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10">
                      {leader.experience}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-brand-orange text-white text-xs sm:text-sm uppercase tracking-wide px-2.5 py-1 rounded-xs transition-all duration-200 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <span>Bio</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <span className="text-sm sm:text-base uppercase tracking-[0.16em] font-bold text-brand-orange block mb-1.5">
                    {leader.role}
                  </span>

                  <h4 className="text-2xl sm:text-3xl font-light text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors">
                    {leader.name}
                  </h4>

                  <p className="mt-2 text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed line-clamp-2">
                    {leader.summary}
                  </p>
                </div>
              </div>

              <div className="px-4 sm:px-5 py-2.5 bg-slate-50/50 border-t border-brand-border flex items-center justify-between text-sm sm:text-base text-brand-text-secondary">
                <span>Board Governance</span>
                <span className="text-brand-navy font-medium group-hover:text-brand-orange transition-colors flex items-center gap-1">
                  Full Bio
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          04. EXECUTIVE LEADERSHIP (2 CARDS - 4:5 CROPPED)
      ============================================================ */}
      <section className="py-6 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-5 border-b border-brand-border pb-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          <h3 className="text-sm sm:text-base uppercase tracking-[0.18em] font-bold text-brand-navy">
            Executive Leadership
          </h3>
        </div>

        <div className="exec-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {executiveLeaders.map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="exec-card group cursor-pointer flex flex-col justify-between rounded-sm border border-brand-border bg-white shadow-xs hover:shadow-lg hover:border-brand-orange/60 transition-all duration-300 overflow-hidden"
            >
              <div>
                {/* 4:5 Standard Portrait Frame */}
                <div className="relative h-[280px] w-full overflow-hidden bg-neutral-100 border-b border-brand-border sm:h-[300px]">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_18%] transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-xs sm:text-sm uppercase tracking-wide text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10">
                      {leader.experience}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-brand-orange text-white text-xs sm:text-sm uppercase tracking-wide px-2.5 py-1 rounded-xs transition-all duration-200 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                    <span>Bio</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <span className="text-sm sm:text-base uppercase tracking-[0.16em] font-bold text-brand-orange block mb-1.5">
                    {leader.role}
                  </span>

                  <h4 className="text-2xl sm:text-3xl font-light text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors">
                    {leader.name}
                  </h4>

                  <p className="mt-2 text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed line-clamp-2">
                    {leader.summary}
                  </p>
                </div>
              </div>

              <div className="px-4 sm:px-5 py-3 bg-slate-50/50 border-t border-brand-border flex items-center justify-between text-sm sm:text-base text-brand-text-secondary">
                <span>Executive Management</span>
                <span className="text-brand-navy font-medium group-hover:text-brand-orange transition-colors flex items-center gap-1">
                  Full Bio
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          05. DOMAIN LEADERSHIP
          
          COMMENTED OUT FOR NOW
      ============================================================ */}
      {false && (
        <section className="pt-6 pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-5 border-b border-brand-border pb-2.5">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <h3 className="text-sm sm:text-base uppercase tracking-[0.18em] font-bold text-brand-navy">
              Domain Leadership
            </h3>
          </div>

          <div className="domain-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            {domainLeaders.map((leader) => (
              <div
                key={leader.id}
                onClick={() => setSelectedLeader(leader)}
                className="domain-card group cursor-pointer flex flex-col justify-between rounded-sm border border-brand-border bg-white shadow-xs hover:shadow-lg hover:border-brand-orange/60 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* 4:5 Standard Portrait Frame */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100 border-b border-brand-border">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-[center_18%] transition-transform duration-500 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-xs sm:text-sm uppercase tracking-wide text-white bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10">
                        {leader.experience}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-brand-orange text-white text-xs sm:text-sm uppercase tracking-wide px-2.5 py-1 rounded-xs transition-all duration-200 translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <span>Bio</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-sm sm:text-base uppercase tracking-[0.16em] font-bold text-brand-orange block mb-1.5">
                      {leader.role}
                    </span>

                    <h4 className="text-xl sm:text-2xl font-light text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors">
                      {leader.name}
                    </h4>

                    <p className="mt-2 text-sm sm:text-base text-brand-text-secondary font-light leading-relaxed line-clamp-2">
                      {leader.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-slate-50/50 border-t border-brand-border flex items-center justify-between text-sm sm:text-base text-brand-text-secondary">
                  <span>Domain Head</span>
                  <span className="text-brand-navy font-medium group-hover:text-brand-orange transition-colors flex items-center gap-0.5">
                    Bio
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============================================================
          06. BIO MODAL
      ============================================================ */}
      <LeaderBioModal
        leader={selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />
    </div>
  );
};