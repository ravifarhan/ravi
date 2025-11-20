"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { motion, Variants } from "motion/react";

const educationHistory = [
  {
    school: "AMIK Bukittinggi",
    degree: "Information Management",
    period: "2019 - 2022",
    location: "Bukittinggi, Indonesia",
    highlights: [
      "Studied information technology with a focus on systems management and practical software development.",
      "Learned the fundamentals of information management, database administration, and web development.",
      "Participated in campus activities and student organizations, developing collaboration and problem solving skills.",
    ],
  },
  {
    school: "Dumbways Indonesia",
    degree: "Bootcamp Fullstack Developer",
    period: "April 2024 - July 2024",
    location: "South Tangerang, Indonesia",
    highlights: [
      "Completed a 12 week intensive bootcamp, learning fullstack development using React, Node.js, and Express.js.",
      "Created a fullstack application using React, Express, and Material UI for frontend development, and Express for backend development.",
      "Experience deep understanding software development lifecycle and problem solving through a real-world project.",
    ],
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const blockVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.15 },
  },
};

export default function Education() {
  return (
    <motion.section
      className="space-y-8 py-12 md:py-16 lg:py-20"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div variants={blockVariants}>
        <h2 className="text-2xl md:text-4xl font-bold font-mono">Education</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          A combination of formal education and intensive bootcamp to expand my
          skillset.
        </p>
      </motion.div>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={listVariants}>
        {educationHistory.map((item) => (
          <motion.div
            key={`${item.school}-${item.period}`}
            variants={blockVariants}
          >
            <Card className="border-primary shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <p className="text-sm uppercase tracking-wide text-primary">
                  {item.period}
                </p>
                <CardTitle className="text-xl font-semibold">
                  {item.school}
                </CardTitle>
                <CardDescription>
                  {item.degree} • {item.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="px-4 list-disc text-sm md:text-base space-y-2">
                  {item.highlights?.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
