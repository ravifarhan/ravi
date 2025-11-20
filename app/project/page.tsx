import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { SiGithub } from "react-icons/si";

type ProjectShowcase = {
  title: string;
  role: string;
  description: string;
  preview: string;
  alt: string;
  highlights: string[];
  stack: string[];
  repo: string;
  demo: string;
};

const projectShowcase: ProjectShowcase[] = [
  {
    title: "FKN E-Commerce",
    role: "Fullstack - 2025",
    description:
      "An end-to-end fashion storefront with a custom admin console, secure authentication, and a frictionless shopping flow from product discovery through checkout.",
    preview:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    alt: "E-commerce storefront on laptop and phone screens",
    highlights: [
      "Role-based dashboards for merchandising and order fulfillment",
      "Optimistic UI updates keep catalog edits snappy",
      "Performance budgets enforced to keep LCP under 2s",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Shadcn UI"],
    repo: "https://github.com/ravifarhan/fkn",
    demo: "https://fkn.vercel.app",
  },
  {
    title: "Online Invitation",
    role: "Freelance - 2025",
    description:
      "Responsive invitation builder with modular sections for hero, gallery, schedule, and RSVP so clients can publish polished event pages in minutes.",
    preview:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalistic invitation layout with pictures and text blocks",
    highlights: [
      "Drag-and-drop section ordering with instant preview",
      "Form validations keep RSVPs clean for hosts",
      "Global theming for light and dark invites",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Bits"],
    repo: "https://github.com/ravifarhan/invitation-nextjs",
    demo: "https://undangan-baralek.vercel.app",
  },
  {
    title: "Circle App",
    role: "Bootcamp Project - 2024",
    description:
      "A social app inspired by Twitter with posting, threading, likes, comments, and follows to practice building community-first features at scale.",
    preview:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Social media app screens with conversations and charts",
    highlights: [
      "Realtime feed updates powered by websocket events",
      "Rich text composer with inline media attachments",
      "Database schema tuned for thread queries and fan-out",
    ],
    stack: ["React", "Express", "PostgreSQL", "Material UI"],
    repo: "https://github.com/ravifarhan/circle-app",
    demo: "https://github.com/ravifarhan/circle-app",
  },
];

export default function ProjectPage() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-12 md:space-y-16 md:px-8 lg:py-20">
      <section className="grid gap-6 rounded-2xl border bg-linear-to-br from-primary/10 via-background to-primary/5 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12 lg:p-16">
        <div className="space-y-4">
          <Badge className="w-fit rounded-full px-4 py-1 text-xs uppercase tracking-[0.2em]">
            Project Lab
          </Badge>
          <h1 className="font-mono text-3xl font-semibold tracking-tight md:text-5xl">
            Building thoughtful products, from idea to launch.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            A deeper look at the projects I ship: the problems they solve, the
            technical decisions behind them, and visual previews that show how
            they come together. Each build balances clean UI, reliable
            engineering, and measurable impact.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary">Product thinking</Badge>
            <Badge variant="secondary">Performance minded</Badge>
            <Badge variant="secondary">UX first</Badge>
          </div>
        </div>
        <div className="grid gap-4 rounded-xl bg-card/60 p-6 shadow-lg shadow-primary/10">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-primary">
                What to expect
              </p>
              <p className="text-lg font-semibold">Process in three beats</p>
            </div>
            <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Hands-on
            </span>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              01 - Discover the core constraints and write a small spec before
              touching UI.
            </p>
            <p>
              02 - Prototype quickly, then harden the codebase with types,
              accessibility checks, and docs.
            </p>
            <p>
              03 - Measure. Ship instruments to watch performance and user
              journeys after release.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-mono font-semibold md:text-4xl">
            Project previews
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Snapshots, context, and live links for the builds I am most proud
            of.
          </p>
        </div>

        <div className="space-y-10">
          {projectShowcase.map((project) => (
            <article
              key={project.title}
              className="grid gap-6 overflow-hidden rounded-2xl border bg-card shadow-lg shadow-primary/5 md:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="relative min-h-[260px] overflow-hidden bg-linear-to-tr from-primary/15 via-secondary/10 to-primary/20">
                <Image
                  src={project.preview}
                  alt={project.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(min-width: 1024px) 640px, 100vw"
                  priority={project.title === "FKN E-Commerce"}
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/70 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-background/80 text-xs font-medium backdrop-blur"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6 md:p-8">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">
                    {project.role}
                  </p>
                  <h3 className="text-2xl font-semibold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 text-sm leading-relaxed text-foreground/90">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-lg bg-secondary/40 p-3"
                    >
                      <span className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button asChild variant="outline" size="lg">
                    <Link href={project.repo} target="_blank" rel="noreferrer">
                      <SiGithub />
                      View repo
                    </Link>
                  </Button>
                  <Button asChild size="lg">
                    <Link href={project.demo} target="_blank" rel="noreferrer">
                      Live preview <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
