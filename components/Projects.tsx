import Link from "next/link";

import { ProjectCard, TProject } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects: TProject[] = [
  {
    title: "FKN E-Commerce",
    summary:
      "A fullstack application for an online fashion store, with a custom admin dashboard, and a user account management system.",
    stack: ["Next.js", "TypeScript", "Supabase", "Shadcn UI"],
    timeline: "2025 • Fullstack",
    impact:
      "Built a scalable e-commerce platform with a custom admin dashboard that simplified store management and improved user experience from start to checkout.",
    repo: "https://github.com/ravifarhan/fkn",
    deploy: "https://fkn.vercel.app",
  },
  {
    title: "Online Invitation",
    summary:
      "Responsive online invitation platform built a smooth user experience and customizable sections for events, galleries, and RSVP.",
    stack: ["Next.js", "TypeScript", "React Bits", "Tailwind CSS"],
    timeline: "2025 • Freelance ",
    impact:
      "Improved event engagement with a digital flow. Allowed clients to share invitations instantly and track guest responses in real time.",
    repo: "https://github.com/ravifarhan/invitation-nextjs",
    deploy: "https://undangan-baralek.vercel.app",
  },
  {
    title: "Circle App",
    summary:
      "A fullstack social media app inspired by Twitter, featuring core interactions like posting, liking, commenting, and following.",
    stack: ["React.js", "Express.js", "PostgreSQL", "Material UI"],
    timeline: "2024 • Bootcamp Project",
    impact:
      "Built to understand how to implement core features like authentication, like and comment functions, and how to design a database schema.",
    repo: "https://github.com/ravifarhan/circle-app",
    deploy: "https://github.com/ravifarhan/circle-app",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8 py-12 md:py-16 lg:py-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold font-mono">
          Featured Projects
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
          Some of the projects I&apos;ve created
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            summary={item.summary}
            stack={item.stack}
            timeline={item.timeline}
            impact={item.impact}
            repo={item.repo}
            deploy={item.deploy}
          />
        ))}
      </div>
      <div>
        <Button asChild size="lg" variant="outline">
          <Link href="/project">
            View all projects <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
