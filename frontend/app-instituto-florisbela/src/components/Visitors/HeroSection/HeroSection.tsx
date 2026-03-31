import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeroImage from "./HeroImage";

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

          <Button
            variant="default"
            className={cn(
              "rounded-full py-2.5 px-6 w-53.25 h-15.75 bg-red-primary text-lg font-bold",
              "mt-12 shadow-lg shadow-red-primary/30 transition-all transform hover:-translate-y-1",
            )}
          >
            <Link href="/contact">Agendar Visita</Link>
            <ArrowRight width={20} height={20} fontWeight={700} />
          </Button>
        </div>
        <div>
          <HeroImage />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
