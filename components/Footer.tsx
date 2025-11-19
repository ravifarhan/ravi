import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mravifarhan",
    icon: <SiLinkedin className="size-5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/ravifarhan",
    icon: <SiGithub className="size-5" />,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-mono uppercase tracking-widest text-primary">
            Let&apos;s build together
          </p>
          <p className="text-sm text-muted-foreground">
            © {year} Ravi Farhan. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex size-11 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              <span className="sr-only">{social.label}</span>
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
