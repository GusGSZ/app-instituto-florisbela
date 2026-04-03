"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BookVisitButton from "@/components/ui/book-visit-button";

function ContactUs() {
  return (
    <div className="relative py-20">
      <div className="absolute inset-0 bg-blue-primary"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
      <div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-white text-5xl font-bold font-poppins mb-6">
            Venha conhecer o segundo lar do seu filho.
          </h1>
          <p className="max-w-2xl text-xl font-nunito text-blue-100 mx-auto mb-10">
            Agende uma visita guiada, conheça nossa estrutura, converse com a
            coordenação e sinta a energia do nosso espaço.
          </p>

          <div className="flex flex-row gap-4 justify-center">
            <BookVisitButton asChild className="h-15.75 w-61.5 text-lg">
              <Link href="/contact">Agendar Visita Agora</Link>
            </BookVisitButton>

            <Button
              variant="outline"
              className={cn(
                "rounded-full py-2.5 px-6 w-61.5 h-15.75 cursor-pointer",
                "bg-transparent text-lg font-nunito hover:bg-white/10 text-white hover:text-white",
              )}
              asChild
            >
              <Link
                href="https://wa.me/5531997039871?text=Olá, gostaria de saber mais sobre o Instituto Florisbela."
                target="_blank"
              >
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
