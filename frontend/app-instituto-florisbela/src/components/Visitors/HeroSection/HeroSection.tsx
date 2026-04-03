import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HeroImage from "./HeroImage";
import BookVisitButton from "@/components/ui/book-visit-button";

function HeroSection() {
  return (
    <div className="flex flex-row items-center justify-center w-full min-h-[85vh] bg-[linear-gradient(135deg,#F1FAEE_0%,#E2F0CB_100%)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-146">
          <Badge variant="secondary" className="w-50 h-9.5 bg-white gap-2.5">
            <span className="relative inline-flex h-3 w-3 shrink-0 items-center justify-center">
              <span
                className="absolute inset-0 z-0 animate-ping rounded-full bg-red-primary/50"
                aria-hidden
              />
              <Circle color="red-primary" fill="#E63946" />
            </span>
            Matrículas Abertas 2026
          </Badge>

          <h1 className="font-poppins text-7xl font-bold leading-tight text-blue-primary mt-8">
            Onde o <span className="text-red-primary">futuro</span> começa com
            alegria.
          </h1>
          <p className="font-nunito text-xl text-gray-500 mt-8">
            Um ambiente seguro, acolhedor e estimulante onde seu filho
            desenvolve habilidades para a vida toda através do brincar e da
            descoberta.
          </p>

          <BookVisitButton
            asChild
            className="mt-12 h-15.75 w-53.25 items-center gap-2 text-lg"
          >
            <Link href="/contact">
              Agendar Visita
              <ArrowRight width={20} height={20} fontWeight={700} />
            </Link>
          </BookVisitButton>
        </div>
        <div>
          <HeroImage />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
