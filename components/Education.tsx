import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const educationHistory = [
  {
    school: "AMIK Bukittinggi",
    degree: "Information Management",
    period: "2019 - 2022",
    location: "Bukittinggi, Indonesia",
    highlights: [
      "Graduated with a bachelor's degree in Information Management from AMIK Bukittinggi.",
      "Learned the fundamentals of information management, database administration, and web development.",
    ],
  },
  {
    school: "Dumbways Indonesia",
    degree: "Bootcamp Fullstack Developer",
    period: "April 2024 - July 2024",
    location: "South Tangerang, Indonesia",
    highlights: [
      "Completed a 12 week intensive bootcamp, learning fullstack development using React, Node.js, and Express.js.",
      "Created a fullstack application using React, Express, and Material UI, showcasing proficiency in React component based architecture and Express for api development.",
    ],
  },
];

export default function Education() {
  return (
    <section className="space-y-8 py-12 md:py-16 lg:py-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold font-mono">Education</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
          A combination of formal education and intensive bootcamp to expand my
          skillset.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {educationHistory.map((item) => (
          <Card
            key={`${item.school}-${item.period}`}
            className="border-primary shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-300"
          >
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
        ))}
      </div>
    </section>
  );
}
