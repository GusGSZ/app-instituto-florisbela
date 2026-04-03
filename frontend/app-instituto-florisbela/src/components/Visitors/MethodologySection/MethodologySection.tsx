import Image from "next/image";
import { ArrowRight, Heart, Puzzle, Sprout } from "lucide-react";
import DisplayIconWithText from "./DisplayIconWithText";
import { Button } from "@/components/ui/button";

function MethodologySection() {
  return (
    <div className="flex items-center justify-center text-center bg-light-green py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-304">
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-8 space-y-4">
            <Image
              src="/painted-hands.png"
              alt="Painted Hands Image"
              width={280}
              height={192}
              className="rounded-2xl w-70 h-48"
            />

            <Image
              src="/teacher-reading-for-kids.png"
              alt="Teacher Reading for Kids Image"
              width={280}
              height={256}
              className="rounded-2xl w-70 h-64"
            />
          </div>
          <div className="space-y-4">
            <Image
              className="rounded-2xl w-70 h-64"
              src="/boy-playing.png"
              alt="Boy Playing Image"
              width={280}
              height={256}
            />

            <div className="flex flex-col justify-center text-center bg-red-primary text-white p-6 rounded-2xl w-70 h-48">
              <h3 className="text-4xl font-bold font-poppins">+15</h3>
              <p className="font-nunito text-base">
                Anos de experiência em educação
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-3xl mx-auto text-left">
          <h2 className="text-red-primary text-sm font-bold uppercase max-w-2xl">
            Nossa Metodologia
          </h2>
          <h1 className="text-blue-primary text-3xl font-poppins font-bold mt-2 mb-4 max-w-2xl">
            Aprender Através da Experiência e do Afeto
          </h1>
          <p className="text-theme-gray-light text-lg font-nunito">
            Acreditamos que a criança é protagonista de seu próprio aprendizado.
            Nossa abordagem sociointeracionista valoriza as vivências, a
            interação com o outro e com o meio.
          </p>

          <ul className="mt-6 space-y-6">
            <li>
              <DisplayIconWithText
                icon={
                  <Puzzle
                    color="currentColor"
                    className="text-sky-800"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                }
                color="slate-300"
                title="Desenvolvimento Integral"
                description="Trabalhamos os aspectos cognitivo, motor, social e emocional de forma integrada."
              />
            </li>
            <li>
              <DisplayIconWithText
                icon={
                  <Heart
                    color="currentColor"
                    strokeWidth={2}
                    className="text-red-500"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                }
                color="red-200"
                title="Educação Socioemocional"
                description="Foco no reconhecimento de emoções, empatia e resolução pacífica de conflitos."
              />
            </li>
            <li>
              <DisplayIconWithText
                icon={
                  <Sprout
                    color="currentColor"
                    strokeWidth={2}
                    className="text-green-600"
                    fill="currentColor"
                    stroke="currentColor"
                  />
                }
                color="emerald"
                title="Contato com a Natureza"
                description="Atividades diárias ao ar livre, horta pedagógica e valorização do meio ambiente."
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MethodologySection;
