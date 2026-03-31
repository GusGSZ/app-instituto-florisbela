import { ArrowRight, Heart, Leaf, Puzzle, Sprout } from "lucide-react";
import DisplayIconWithText from "./DisplayIconWithText";
import { Button } from "@/components/ui/button";

function MethodologySection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center text-center bg-light-green py-24">
      <div></div>
      <div className="flex flex-col items-start justify-start max-w-3xl mx-auto mb-16 text-left">
        <h2 className="text-red-primary text-sm font-bold uppercase max-w-2xl">
          Nossa Metodologia
        </h2>
        <h1 className="text-blue-primary text-3xl font-poppins font-bold mt-2 mb-4 max-w-2xl">
          Aprender Através da Experiência e do Afeto
        </h1>
        <p className="text-theme-gray-light text-lg font-nunito">
          Acreditamos que a criança é protagonista de seu próprio aprendizado.
          Nossa abordagem sociointeracionista valoriza as vivências, a interação
          com o outro e com o meio.
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
        <Button
          variant="link"
          className="mt-8 text-red-primary font-nunito text-base font-bold"
        >
          Conheça nosso projeto político pedagógico
          <ArrowRight width={20} height={20} fontWeight={700} />
        </Button>
      </div>
    </div>
  );
}

export default MethodologySection;
