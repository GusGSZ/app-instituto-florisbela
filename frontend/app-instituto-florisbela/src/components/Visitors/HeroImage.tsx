import React from "react";
import Image from "next/image";

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
    </section>
  );
}

export default HeroImage;
