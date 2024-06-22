import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ToolsFramework from "@/components/ToolsFramwork"
import PlatformsTools from "@/components/PlatformsTools"
import DatabaseSkills from "@/components/DatabaseSkills";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ToolsFramework />
      <PlatformsTools />
      <DatabaseSkills />
    </div>
  );
}
