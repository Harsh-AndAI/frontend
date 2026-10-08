import { ProjectHero } from "../projects/ProjectHero";
import { ProjectStory } from "../projects/ProjectStory";
import { ProjectSnapshot } from "../projects/ProjectSnapshot";
import { ProjectCorridorMap } from "../projects/ProjectCorridorMap";
import { ProjectTechnicalScope } from "../projects/ProjectTechnicalScope";
import { ProjectImpact } from "../projects/ProjectImpact";
import { ProjectKeyFigures } from "../projects/ProjectKeyFigures";
import { ProjectClosing } from "../projects/ProjectClosing";

export const ProjectDetailPage = () => {
  return (
    <main className="bg-white text-[#111361] overflow-x-hidden">
      <ProjectHero />
      <ProjectStory />
      <ProjectSnapshot />
      <ProjectCorridorMap />
      <ProjectTechnicalScope />
      <ProjectImpact />
      <ProjectKeyFigures />
      <ProjectClosing />
    </main>
  );
};