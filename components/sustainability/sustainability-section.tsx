import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../ui/reveal";

const PILLARS = [
  {
    image: "/responsabilty/responsabilty-01.png",
    title: "Compromiso",
    description: "Ética y transparencia en cada operación",
  },
  {
    image: "/responsabilty/responsabilty-02.png",
    title: "Cadena de suministro",
    description: "Prácticas responsables y trazabilidad",
  },
  {
    image: "/responsabilty/responsabilty-03.png",
    title: "CO₂",
    description: "Reducción de huella de carbono",
  },
  {
    image: "/responsabilty/responsabilty-04.png",
    title: "Comunidad",
    description: "Apoyo al desarrollo local",
  },
];

export function SustainabilitySection() {
  return (
    <section id="sostenibilidad" className="scroll-mt-28 bg-white text-[#111b30]">
      <div className="grid min-h-[780px] lg:grid-cols-[56%_44%]">
        <Reveal className="flex items-center px-7 py-16 sm:px-14 lg:px-[12%] lg:py-20">
          <div className="max-w-[590px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.27em] text-[#929daf]">
              RSE
            </p>

            <h2 className="mt-10 text-[clamp(3rem,4.2vw,4.25rem)] font-light leading-none tracking-[-0.04em]">
              Sostenibilidad
            </h2>

            <div className="mt-14 text-[clamp(1rem,1.22vw,1.22rem)] font-light leading-[1.95] text-[#657084]">
              <p>
                Empezando nuestro camino hacia la sostenibilidad, nuestra estrategia se
                basó en un proceso acotado de materialidad financiera realizado en 2024.
                Ejercicio que nos ayudó a priorizar los temas relevantes para nuestra
                empresa, sus accionistas y grupos de interés, guiándonos por dos
                criterios: el impacto para la sociedad y el medio ambiente; y la visión de
                largo plazo de los líderes para mantener su negocio en el tiempo.
              </p>

              <p className="mt-7 font-normal text-[#172238]">
                Hoy en día seguimos <strong className="font-bold">4 ejes claves...</strong>
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={index * 80} className="h-full">
              <article className="group relative isolate min-h-[390px] h-full overflow-hidden bg-[#0a1520]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 22vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/28 to-black/14 transition-colors duration-500 group-hover:from-[#012c64]/88 group-hover:via-black/28" />

                <div className="relative z-10 flex h-full min-h-[390px] flex-col justify-end p-5 text-white sm:p-4 xl:p-6">
                  <div className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <h3 className="text-[clamp(1.1rem,1.45vw,1.35rem)] font-semibold leading-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 max-w-[240px] text-[clamp(0.88rem,1vw,1rem)] font-light leading-[1.35] text-white/86">
                      {pillar.description}
                    </p>
                  </div>

                  <span className="mt-5 inline-flex size-10 items-center justify-center rounded-full border border-white/55 bg-white/10 transition-all duration-500 group-hover:translate-x-1 group-hover:border-white group-hover:bg-white group-hover:text-[#012c64]">
                    <ArrowRight size={23} strokeWidth={1.7} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
