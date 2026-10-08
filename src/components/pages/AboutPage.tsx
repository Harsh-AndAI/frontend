import { PageHero } from "../PageHero";

import { AboutIntro } from "../about/AboutIntro";
import { EnergyTransition } from "../about/EnergyTransition";
import { InstitutionalFoundation } from "../about/InstitutionalFoundation";
import { AboutApproach } from "../about/AboutApproach";
import { AboutCTA } from "../about/AboutCTA";
import React, { useLayoutEffect } from "react";
export const AboutPage = () => {
    useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="bg-brand-bg min-h-screen">

      {/* 01 — HERO */}
      <PageHero
  label="About AnantGrid"
  title="Building the infrastructure behind India's energy transition"
  
  image="/images/about-hero2.png"
/>

      {/* 02 — WHO WE ARE */}
      <AboutIntro />

      {/* 03 — ENERGY TRANSITION */}
      <EnergyTransition />

      {/* 04 — INSTITUTIONAL FOUNDATION */}
      <InstitutionalFoundation />

      {/* 05 — OUR APPROACH */}
      <AboutApproach />

      {/* 06 — CTA */}
      <AboutCTA />

    </main>
  );
};