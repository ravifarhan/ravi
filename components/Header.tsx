import { ModeToggle } from "@/components/ModeToggle";
import NavbarMenu from "@/components/NavbarMenu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="flex bg-transparent backdrop-blur border-b justify-between items-center h-16  px-4 md:px-12 lg:px-16">
        <Link href="/" className="flex items-center">
          <h1 className="text-lg uppercase font-mono font-semibold">Ravi.</h1>
        </Link>

        <div className="ml-auto md:absolute md:left-1/2 md:-translate-x-1/2">
          <NavbarMenu />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
