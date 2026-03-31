import Image from "next/image";
import { Leaf, Shapes } from "lucide-react";
import DisplayIcon from "../DisplayIcon";
import { BounceCard } from "./BounceCard";

function HeroImage() {
  return (
    <section className="relative isolate flex items-center justify-center min-h-[60vh] w-full">
      <div
        className="pointer-events-none absolute inset-0 bg-[#457b9d1a] blob-shape rotate-12 scale-105 z-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#457b9d1a] blob-shape -rotate-6 scale-95 z-0"
        style={{ animationDelay: "1s" }}
        aria-hidden
      />
      <div className="w-146 h-150 bg-white rounded-3xl flex items-center justify-center z-10">
        <div className="w-142 h-146 rounded-2xl overflow-hidden">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            width={568}
            height={584}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <BounceCard
        title="Espaço"
        description="Natureza"
        icon={
          <DisplayIcon
            color="emerald"
            icon={
              <Leaf
                className="text-green-500"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={1.25}
                size={24}
                aria-hidden
              />
            }
          />
        }
        position="top-10 -left-10"
      />
      <BounceCard
        title="Aprender"
        description="Brincando"
        icon={
          <DisplayIcon
            color="slate-300"
            icon={
              <Shapes
                className="text-slate-500"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={2}
              />
            }
          />
        }
        position="bottom-20 -right-8"
      />
    </section>
  );
}

export default HeroImage;
