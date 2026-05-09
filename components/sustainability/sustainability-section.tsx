import { Heart, Leaf, ShipWheel, Users } from "lucide-react";
import { Reveal } from "../ui/reveal";

const PILLARS = [
  {
    icon: Heart,
    title: "Compromiso",
    description: "Etica y transparencia en cada operacion",
  },
  {
    icon: ShipWheel,
    title: "Cadena de suministro",
    description: "Practicas responsables y trazabilidad",
  },
  {
    icon: Leaf,
    title: "CO2",
    description: "Reduccion de huella de carbono",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Apoyo al desarrollo local",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sostenibilidad"
      className="scroll-mt-28 bg-[#F2F4F7] py-[4.5rem] sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1501px] px-4 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-[920px] text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#A1AAB9]">
            SOSTENIBILIDAD
          </p>
          <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] font-light leading-[1.08] tracking-[-0.01em] text-[#1A263A]">
            Responsabilidad social
          </h2>
          <p className="mx-auto mt-7 max-w-[860px] text-[clamp(0.98rem,1.03vw,1.12rem)] leading-[1.6] text-[#9099A9]">
            Compromiso con el desarrollo sostenible
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-y-11 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delayMs={index * 90} className="text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center border border-[#E0E4EB] bg-[#F7F8FA]">
                  <Icon className="h-6 w-6 text-[#4C5970]" strokeWidth={1.9} />
                </div>
                <h3 className="mt-6 text-[clamp(1.45rem,1.6vw,1.82rem)] font-normal leading-none text-[#1F2B40]">
                  {pillar.title}
                </h3>
                <p className="mx-auto mt-5 max-w-[250px] text-[clamp(0.92rem,0.95vw,1rem)] leading-[1.55] text-[#99A1B1]">
                  {pillar.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
