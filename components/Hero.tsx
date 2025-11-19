"use client";

import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex py-8 md:py-16 lg:py-20">
      <div className="w-full flex flex-col gap-4 md:gap-6 ">
        <h1 className="font-mono font-semibold text-3xl md:text-5xl lg:text-6xl">
          Hello, I&apos;m
          <span className="text-primary"> Ravi Farhan.</span>
        </h1>

        <div className="flex flex-col gap-1 md:gap-2">
          <h2 className="font-mono text-2xl md:text-4xl lg:text-5xl leading-tight">
            Let&apos;s build something
          </h2>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <RotatingText
              texts={[
                "Fun",
                "Cool",
                "Fast",
                "Amazing",
                "Creative",
                "Impactful",
                "Innovative",
              ]}
              mainClassName="px-2 md:px-3 bg-primary font-mono text-2xl md:text-4xl lg:text-5xl rounded-md overflow-hidden py-1 md:py-2"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />

            <h2 className="font-mono text-2xl md:text-4xl lg:text-5xl leading-tight">
              together
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:flex gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="mailto:mhdravifarhan@gmail.com">Get in touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
