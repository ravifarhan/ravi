import { Hero } from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="mx-auto p-4 md:p-12 lg:p-16">
      <Hero />
      <TechStack />
      <Projects />
      <WorkExperience />
      <Education />
    </div>
  );
}
