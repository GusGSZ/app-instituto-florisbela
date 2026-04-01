import { ClassesCarousel } from "./ClassesCarousel";

function ClassesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h2 className="text-red-primary font-bold tracking-wider uppercase text-sm">
        Nossas Turmas
      </h2>
      <h1 className="text-blue-primary text-3xl md:text-4xl font-poppins font-bold mt-2 mb-12">
        Um Espaço Para Cada Fase
      </h1>
      <ClassesCarousel />
    </div>
  );
}

export default ClassesSection;
