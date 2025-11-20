"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";

import raviImg from "@/assets/img/ravi.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <div className="container mx-auto space-y-12 px-4 py-16 md:px-8 lg:py-24">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <motion.div
          className="relative mx-auto flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-square w-48 md:w-72 rounded-full overflow-hidden shadow-primary/70 shadow-lg">
            <Image
              src={raviImg}
              alt="Ravi Farhan"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
        >
          <Badge className="w-fit rounded-full px-4 py-1 text-xs uppercase tracking-wide">
            Get to know me
          </Badge>
          <motion.h1
            className="text-3xl font-semibold font-mono tracking-tight text-foreground md:text-5xl"
            variants={fadeUp}
            custom={0.15}
          >
            I&apos;m Ravi Farhan
          </motion.h1>
          <motion.p
            className="text-base leading-relaxed text-muted-foreground md:text-lg"
            variants={fadeUp}
            custom={0.3}
          >
            Frontend Web Developer with one year of experience building modern
            web applications using React, Next.js, and TypeScript. Focused on
            creating fast, maintainable, and user friendly interfaces through
            clean architecture and collaborative workflows.
          </motion.p>
          <motion.button
            className="flex items-center gap-2 text-sm font-medium text-foreground"
            variants={fadeUp}
            custom={0.45}
          >
            <Button asChild>
              <Link href="mailto:mhdravifarhan@gmail.com">Contact me</Link>
            </Button>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
