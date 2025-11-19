import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { SiGithub } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

export type TProject = {
  title: string;
  summary: string;
  stack: string[];
  timeline: string;
  impact: string;
  repo: string;
  deploy: string;
};

export function ProjectCard({
  title,
  summary,
  stack,
  timeline,
  impact,
  repo,
  deploy,
}: TProject) {
  return (
    <Card className="border-primary shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader>
        <p className="text-xs uppercase tracking-widest text-primary">
          {timeline}
        </p>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">
          {summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground/90">{impact}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="outline">
          <Link href={repo} target="_blank">
            View Repository <SiGithub />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={deploy} target="_blank">
            Demo <ArrowUpRight  />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
