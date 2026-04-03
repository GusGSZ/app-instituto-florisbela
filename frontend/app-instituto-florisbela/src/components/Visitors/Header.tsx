import Image from "next/image";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import BookVisitButton from "@/components/ui/book-visit-button";

function Header() {
  const linkBase = "text-theme-gray-light hover:text-red-primary";
  const linkActive = "text-blue-primary hover:text-red-primary";

  return (
    <div className="bg-white font-sans">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex flex-row items-center">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          <span className="text-xl text-blue-primary font-poppins ml-2 font-bold">
            Instituto
          </span>
          <span className="text-xl text-red-primary font-poppins font-bold">
            Florisbela
          </span>
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
              className="hover:text-red-primary text-theme-gray-light cursor-pointer"
            >
              <Link href="/login">
                <LogIn /> Login
              </Link>
            </Button>
            <BookVisitButton asChild className="h-11 w-39.25">
              <Link href="/contact">Agendar Visita</Link>
            </BookVisitButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
