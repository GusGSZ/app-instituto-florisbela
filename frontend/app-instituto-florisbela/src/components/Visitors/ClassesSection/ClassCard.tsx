import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ClassItem } from "./classes-data";

type ClassCardProps = {
  item: ClassItem;
  className?: string;
};

export function ClassCard({ item, className }: ClassCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-[382/192] w-full shrink-0 overflow-hidden rounded-t-2xl bg-gray-100">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
          {item.ageRange}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-poppins text-xl font-bold text-blue-primary">
          {item.title}
        </h3>
        <p className="mt-2 font-nunito text-sm leading-relaxed text-theme-gray-light">
          {item.description}
        </p>
        <ul className="mt-4 space-y-2.5">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-gray-600"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-emerald-500"
                strokeWidth={2.5}
                aria-hidden
              />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="mt-6 w-full rounded-full border-red-primary bg-white font-semibold text-red-primary hover:bg-red-primary/5"
          asChild
        >
          <Link href={`/classes#${item.id}`}>Ver Detalhes</Link>
        </Button>
      </div>
    </article>
  );
}
