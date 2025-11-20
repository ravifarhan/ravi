"use client";

import { Button } from "@/components/ui/button";
import RotatingText from "./RotatingText";
import Link from "next/link";
import { motion, Variants } from "motion/react";

const heroVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Hero = () => {
  return (
    <motion.section
      className="flex py-8 md:py-16 lg:py-20"
      initial="hidden"
      animate="show"
      variants={heroVariants}
    >
      <motion.div
        className="w-full flex flex-col gap-4 md:gap-6 "
        variants={heroItem}
      >
        <h1 className="font-mono font-semibold text-2xl md:text-5xl lg:text-6xl">
          Hello, I&apos;m
          <span className="text-primary"> Ravi Farhan.</span>
        </h1>

        <motion.div className="flex flex-col gap-1 md:gap-2" variants={heroItem}>
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
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:flex gap-4 pt-4"
          variants={heroItem}
        >
          <Button asChild size="lg">
            <Link href="mailto:mhdravifarhan@gmail.com">Get in touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View projects</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
