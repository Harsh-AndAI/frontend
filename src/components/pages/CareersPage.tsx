import { CareersIntro } from "../careers/Opening/CareersIntro";
import { CareersCulture } from "../careers/Opening/CareersCulture";
import { CareersJourney } from "../careers/Opening/CareersJourney";
import { WhatWeLookFor } from "../careers/Opening/WhatWeLookFor";
import { CurrentOpeningsCTA } from "../careers/Opening/CurrentOpeningsCTA";

export const CareersPage = () => {
  return (
    <main className="bg-brand-bg min-h-screen">
      <CareersIntro />

      <CareersCulture />

      <CareersJourney />

      <WhatWeLookFor />

      <CurrentOpeningsCTA />
    </main>
  );
};