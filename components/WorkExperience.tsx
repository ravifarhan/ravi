import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const workHistory = [
  {
    company: "PT Rakhasa Artha Wisesa",
    title: "Frontend Web Developer",
    period: "2024 - 2025",
    location: "West Jakarta, Indonesia",
    achievements: [
      "Built a backoffice and maintened a complex web application using React.js, Next.js, TypeScript, and Mantine UI, ensuring a responsive and user friendly interface.",
      "Integrated restful APIs to enable smooth data exchange between front-end and back-end, resulting in improved functionality and efficiency.",
      "Worked closely with dev team in an agile environment, contributing to the development of new features and fixing existing issues.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="space-y-8 py-12 md:py-16 lg:py-20">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold font-mono">
          Work Experience
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
          Highlight of my professional journey as a web developer.
        </p>
      </div>
      <div className="space-y-4 border-l border-primary pl-6 md:pl-10">
        {workHistory.map((role) => (
          <Card
            key={`${role.company}-${role.period}`}
            className="border-primary shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-shadow duration-300"
          >
            <CardHeader>
              <p className="text-sm uppercase tracking-wide text-primary">
                {role.period}
              </p>
              <CardTitle className="text-xl font-semibold">
                {role.title}
              </CardTitle>
              <CardDescription>
                {role.company} • {role.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="px-4 list-disc text-sm md:text-base  space-y-2">
                {role.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
