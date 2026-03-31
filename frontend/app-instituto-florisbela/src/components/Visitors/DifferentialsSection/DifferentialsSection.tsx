import { Shield } from "lucide-react";
import DifferentialCard from "./DifferentialCard";

function DifferentialsSection() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white py-24">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-16">
        <h2 className="text-red-primary text-sm font-bold uppercase max-w-2xl">
          Por que nos escolher
        </h2>
        <h1 className="text-blue-primary text-3xl font-poppins font-bold mt-2 mb-4 max-w-2xl">
          O Melhor Ambiente Para o Desenvolvimento
        </h1>
        <p className="text-theme-gray-light text-lg font-nunito">
          Nossa estrutura e equipe são preparadas para oferecer segurança,
          carinho e os melhores estímulos para cada fase.
        </p>
      </div>
      <div>
        <DifferentialCard
          title="Segurança"
          description="Nossa equipe está comprometida em criar um ambiente seguro e acolhedor para o seu filho."
          icon={<Shield stroke="currentColor" strokeWidth={2} />}
          color="text-red-primary"
          bgColor="bg-white"
          iconHoverBgColor="group-hover:bg-red-primary"
          iconHoverColor="group-hover:text-white"
        />
      </div>
    </div>
  );
}

export default DifferentialsSection;
