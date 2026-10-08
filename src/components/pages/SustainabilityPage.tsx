import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SustainabilityHero } from "../sustainability/SustainabilityHero";
import { ESGPhilosophy } from "../sustainability/ESGPhilosophy";
import { ESGPillars } from "../sustainability/ESGPillars";
import { ESGPolicyHub } from "../sustainability/ESGPolicies";
import { StakeholderGovernance } from "../sustainability/StakeholderGovernance";
import { SustainabilityClosing } from "../sustainability/SustainabilityClosing";

export const SustainabilityPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-[#FAFCFE] text-[#111361]"
    >
      {/* 01. Sustainability Hero */}
      <SustainabilityHero />

      {/* 02. ESG Philosophy */}
      <ESGPhilosophy />

      {/* 03. Environment / Social / Governance */}
      <ESGPillars />

      {/* 04. Official ESG Policy */}
      <ESGPolicyHub />

      {/* 05. Four-Tier ESG Governance */}
      <StakeholderGovernance />

      {/* 06. Closing */}
      {/* <SustainabilityClosing /> */}
    </div>
  );
};