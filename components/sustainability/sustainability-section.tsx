import Image from "next/image";
import { ArrowRight, Heart, Leaf, ShipWheel, Users } from "lucide-react";
import { Reveal } from "../ui/reveal";

const PILLARS = [
  {
    icon: Heart,
    image: "/responsabilty/responsabilty-01.png",
    title: "Compromiso",
    description: "Etica y transparencia en cada operacion",
  },
  {
    icon: ShipWheel,
    image: "/responsabilty/responsabilty-02.png",
    title: "Cadena de suministro",
    description: "Practicas responsables y trazabilidad",
  },
  {
    icon: Leaf,
    image: "/responsabilty/responsabilty-03.png",
    title: "CO2",
    description: "Reduccion de huella de carbono",
  },
  {
    icon: Users,
    image: "/responsabilty/responsabilty-04.png",
    title: "Comunidad",
    description: "Apoyo al desarrollo local",
  },
];

export function SustainabilitySection() {
  return (
    <section
      id="sostenibilidad"
      className="scroll-mt-28 bg-[#ECEDEF]"
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 overflow-hidden bg-[#0A121C] sm:grid-cols-2 xl:grid-cols-4 xl:border-t xl:border-[#1E2939]">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delayMs={index * 90}>
                <article className="group relative isolate h-[430px] overflow-hidden border-b border-[#1E2939] sm:h-[520px] sm:border-r sm:last:border-r-0 xl:h-[656px]">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-[0.4deg]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/38 to-black/18 transition-colors duration-700 group-hover:from-black/70 group-hover:via-black/26 group-hover:to-black/10" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(2,8,20,0.04)_48%,rgba(2,8,20,0.26)_100%)]" />

                  <div className="relative z-10 flex h-full flex-col justify-end p-7 text-white sm:p-8">
                    <div className="inline-flex h-10 w-10 items-center justify-center border border-white/40 bg-white/10 backdrop-blur-sm transition-colors duration-500 group-hover:border-white/55 group-hover:bg-white/16">
                      <Icon className="h-5 w-5 text-white" strokeWidth={1.9} />
                    </div>

                    <div className="mt-5 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                      <h3 className="text-[clamp(2rem,2.1vw,2.15rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 max-w-[250px] text-[clamp(1.03rem,1.02vw,1.14rem)] leading-[1.45] text-white/90">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-7">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/52 bg-white/12 text-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 group-hover:bg-white/22 group-hover:shadow-[0_10px_30px_rgba(6,15,30,0.42)]">
                        <ArrowRight className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
