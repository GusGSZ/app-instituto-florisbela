"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ClassCard } from "./ClassCard";
import { CLASSES } from "./classes-data";

export function ClassesCarousel() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:mb-10 sm:flex-row sm:items-end">
          <div className="text-left">
            <h2 className="text-sm font-bold uppercase tracking-wider text-red-primary">
              Nossas Turmas
            </h2>
            <h1 className="mt-2 font-poppins text-3xl font-bold text-blue-primary md:text-4xl">
              Um Espaço Para Cada Fase
            </h1>
          </div>
          <div className="flex shrink-0 gap-2 self-end sm:self-auto">
            <CarouselPrevious
              variant="outline"
              className="static top-auto left-auto right-auto translate-x-0 translate-y-0 rounded-full border-gray-300 bg-white shadow-none"
            />
            <CarouselNext
              variant="outline"
              className="static top-auto left-auto right-auto translate-x-0 translate-y-0 rounded-full border-gray-300 bg-white shadow-none"
            />
          </div>
        </div>

        {/* Faixa do Embla: viewport + trilha (padrão shadcn) */}
        <CarouselContent className="pb-8 pt-1">
          {CLASSES.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-full pl-4 sm:basis-1/2 md:pl-6 lg:basis-1/3"
            >
              <ClassCard item={item} className="h-full" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
