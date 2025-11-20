"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const navigationMenuItems = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
];

export default function NavbarMenu() {
  const pathname = usePathname();
  return (
    <>
      <DesktopMenu pathname={pathname} />
      <MobileMenu pathname={pathname} />
    </>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          {navigationMenuItems.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                className={cn(
                  "relative group inline-flex h-6 w-max items-center justify-center px-0.5 py-2 text-md font-medium",
                  "before:absolute before:bottom-0 before:inset-x-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform",
                  "hover:before:scale-x-100 hover:text-accent-foreground",
                  "focus:before:scale-x-100 focus:text-accent-foreground focus:outline-hidden",
                  "disabled:pointer-events-none disabled:opacity-50",
                  "data-active:before:scale-x-100 data-[state=open]:before:scale-x-100",
                  "hover:bg-transparent active:bg-transparent focus:bg-transparent"
                )}
                asChild
                active={item.href === pathname ? true : false}
              >
                <Link href={item.href} className="flex-row items-center gap-2.5">
                  {item.title}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function MobileMenu({ pathname }: { pathname: string }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            aria-label="Menu"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="flex flex-col gap-2 mt-4">
            {navigationMenuItems.map((item) => (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "px-6 py-3 text-lg",
                    pathname === item.href && "border-l-4 border-primary"
                  )}
                >
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
