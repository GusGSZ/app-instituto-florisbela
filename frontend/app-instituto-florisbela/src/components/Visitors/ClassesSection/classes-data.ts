export type ClassItem = {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

export const CLASSES: ClassItem[] = [
  {
    id: "bercario",
    title: "Berçário",
    ageRange: "4 a 18 meses",
    description:
      "Ambiente tranquilo e estimulante, focado nos primeiros passos, introdução alimentar e afeto.",
    features: [
      "Estimulação sensorial",
      "Rotina de sono personalizada",
      "Câmeras online para os pais",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bebê em ambiente acolhedor na escola",
  },
  {
    id: "maternal",
    title: "Maternal",
    ageRange: "1,5 a 3 anos",
    description:
      "Fase de descobertas, desenvolvimento da fala, socialização e desfralde com muito respeito.",
    features: [
      "Atividades lúdicas",
      "Musicalização e artes",
      "Psicomotricidade",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Crianças brincando em sala de aula",
  },
  {
    id: "pre-escola",
    title: "Pré-Escola",
    ageRange: "4 a 5 anos",
    description:
      "Preparação para o ensino fundamental, introdução à letramento, raciocínio lógico e autonomia.",
    features: [
      "Letramento e numeramento",
      "Inglês diário (bilinguismo)",
      "Projetos investigativos",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Crianças em atividade de pré-escola",
  },
  {
    id: "jardim",
    title: "Jardim",
    ageRange: "6 a 7 anos",
    description:
      "Consolidação de habilidades de leitura e escrita, matemática lúdica e transição suave para o ensino fundamental.",
    features: [
      "Rotina próxima ao ensino fundamental",
      "Projetos interdisciplinares",
      "Acompanhamento socioemocional",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1588072432836-e887327b5592?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Crianças estudando em sala",
  },
  {
    id: "contraturno",
    title: "Contraturno",
    ageRange: "4 a 10 anos",
    description:
      "Período estendido com alimentação, tarefa guiada, recreação e oficinas para famílias que precisam de flexibilidade.",
    features: [
      "Merenda e lanche supervisionados",
      "Apoio à lição de casa",
      "Esportes e jogos cooperativos",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1544776193-3527e204e5b0?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Crianças em atividade em grupo ao ar livre",
  },
];
