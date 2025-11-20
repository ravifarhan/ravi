"use client";

import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiShadcnui,
  SiGit,
  SiHtml5,
  SiCss3,
  SiSupabase,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";
import { motion, Variants } from "motion/react";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiCss3 />, title: "CSS" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiShadcnui />, title: "Shadcn UI" },
  { node: <SiSupabase />, title: "Supabase" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <SiGit />, title: "Git" },
  { node: <SiGithub />, title: "Github" },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TechStack() {
  return (
    <motion.section
      className="space-y-8 py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div variants={blockVariants}>
        <h2 className="text-2xl md:text-4xl font-bold font-mono">Tech Stack</h2>

        <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
          My core stack for building modern web experiences.
        </p>
      </motion.div>

      <motion.div
        className="relative overflow-hidden h-16 mt-4"
        variants={blockVariants}
      >
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Technology stack logos"
        />
      </motion.div>
    </motion.section>
  );
}
