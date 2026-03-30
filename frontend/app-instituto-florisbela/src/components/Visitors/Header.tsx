import Image from "next/image";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function Header() {
  const linkBase = "text-theme-gray-light hover:text-red-primary";
  const linkActive = "text-blue-primary hover:text-red-primary";

  return (
    <div className="bg-white font-sans">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <div>
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center gap-8">
            <NavLink href="/" className={linkBase} activeClassName={linkActive}>
              Home
            </NavLink>
            <NavLink
              href="/differentials"
              className={linkBase}
              activeClassName={linkActive}
            >
              Diferenciais
            </NavLink>
            <NavLink
              href="/classes"
              className={linkBase}
              activeClassName={linkActive}
            >
              Turmas
            </NavLink>
            <NavLink
              href="/contact"
              className={linkBase}
              activeClassName={linkActive}
            >
              Contato
            </NavLink>
          </div>
          <div className="flex flex-row ml-8 gap-4 items-center">
            <Separator orientation="vertical" className="h-11" />
            <Button
              variant="link"
              asChild
              className="hover:text-red-primary text-theme-gray-light"
            >
              <Link href="/login">
                <LogIn /> Login
              </Link>
            </Button>
            <Button
              variant="default"
              className={cn(
                "rounded-full py-2.5 px-6 w-39.25 h-11",
                "bg-red-primary font-bold shadow-lg shadow-red-primary/30",
                "transition-all transform hover:-translate-y-1",
              )}
            >
              <Link href="/contact">Agendar Visita</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
