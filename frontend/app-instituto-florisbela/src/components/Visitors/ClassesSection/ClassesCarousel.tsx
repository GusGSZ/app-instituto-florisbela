import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ClassesCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="min-w-7xl max-w-7xl sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-95.5 h-48">
                <Image
                  src="/baby.png"
                  alt="Maternal"
                  width={382}
                  height={192}
                  className="w-95.5 h-48"
                />
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
