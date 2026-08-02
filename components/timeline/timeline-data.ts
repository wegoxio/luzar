export type TimelineItem = {
  year: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
};

/**
 * Para agregar un hito, duplica uno de estos objetos y cambia sus datos.
 * Las imágenes viven en /public/timeline y se referencian desde /timeline/...
 */
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2005",
    image: "/timeline/timeline-01.png",
    imageAlt: "Edificios corporativos vistos desde abajo",
    title: "Fundación de la empresa",
    description:
      "Luzar Trading nace en Venezuela con una visión clara: conectar mercados productores con destinos estratégicos en América Latina, especializándose en granos y materias primas agrícolas.",
  },
  {
    year: "2010",
    image: "/timeline/timeline-02.png",
    imageAlt: "Tarjetas dentro de una cartera",
    title: "Fundación de la empresa",
    description:
      "Luzar Trading nace en Venezuela con una visión clara: conectar mercados productores con destinos estratégicos en América Latina, especializándose en granos y materias primas agrícolas.",
  },
  {
    year: "2015",
    image: "/timeline/timeline-01.png",
    imageAlt: "Edificios corporativos vistos desde abajo",
    title: "Fundación de la empresa",
    description:
      "Luzar Trading nace en Venezuela con una visión clara: conectar mercados productores con destinos estratégicos en América Latina, especializándose en granos y materias primas agrícolas.",
  },
  {
    year: "2019",
    image: "/timeline/timeline-02.png",
    imageAlt: "Tarjetas dentro de una cartera",
    title: "Fundación de la empresa",
    description:
      "Luzar Trading nace en Venezuela con una visión clara: conectar mercados productores con destinos estratégicos en América Latina, especializándose en granos y materias primas agrícolas.",
  },
  {
    year: "2024",
    image: "/timeline/timeline-01.png",
    imageAlt: "Edificios corporativos vistos desde abajo",
    title: "Fundación de la empresa",
    description:
      "Luzar Trading nace en Venezuela con una visión clara: conectar mercados productores con destinos estratégicos en América Latina, especializándose en granos y materias primas agrícolas.",
  },
];
