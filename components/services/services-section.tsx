import { ArrowUpRight, Globe, ShieldCheck, Truck } from "lucide-react";
import { ServiceCard } from "./service-card";
import { Reveal } from "../ui/reveal";

const SERVICES = [
  {
    icon: Globe,
    title: "Originacion",
    imageSrc: "/services/originacion.png",
    description:
      "Identificacion y negociacion directa con productores en mercados estrategicos.",
  },
  {
    icon: Truck,
    title: "Logistica",
    imageSrc: "/services/logistica.png",
    description: "Gestion integral de transporte maritimo y terrestre con flota propia.",
  },
  {
    icon: ArrowUpRight,
    title: "Comercializacion",
    imageSrc: "/services/comercializacion.png",
    description: "Estrategias de mercado optimizadas para maximizar valor.",
  },
  {
    icon: ShieldCheck,
    title: "Gestion de riesgos",
    imageSrc: "/services/gestion.png",
    description: "Cobertura financiera y operacional para garantizar estabilidad.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="scroll-mt-28 bg-[#F2F4F7] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1501px] px-4 sm:px-7 lg:px-9">
        <div className="bg-[#F2F4F7] px-2 pb-8 pt-12 sm:px-4 lg:px-0 lg:pb-12 lg:pt-16">
          <Reveal className="mx-auto max-w-[820px] text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#97A4BA]">
              SOLUCIONES INTEGRALES
            </p>
            <h2 className="mt-4 text-[clamp(2.2rem,4.1vw,3.75rem)] font-light leading-[1.08] tracking-[-0.01em] text-[#182339]">
              Servicios
            </h2>
            <p className="mx-auto mt-6 max-w-[740px] text-[clamp(1rem,1.02vw,1.14rem)] leading-[1.55] text-[#8A93A3]">
              Soluciones integrales para el comercio global de materias primas
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service, index) => (
              <Reveal key={service.title} delayMs={index * 90}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  imageSrc={service.imageSrc}
                  description={service.description}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
