import Image from "next/image";
import { Reveal } from "../ui/reveal";

const FOCUS_CONTENT = {
  image: "/focus/focus-01.png",
  eyebrow: "Nuestro enfoque",
  title: "Qué hacemos",
};

const VALUES = [
  {
    number: "01",
    title: "Integridad",
    description: "Actuamos con honestidad y transparencia en cada operación",
  },
  {
    number: "02",
    title: "Excelencia",
    description: "Superamos los estándares del mercado en calidad y servicio",
  },
  {
    number: "03",
    title: "Compromiso",
    description: "Cumplimos cada acuerdo con precisión y responsabilidad",
  },
  {
    number: "04",
    title: "Innovación",
    description: "Buscamos soluciones más eficientes para nuestros clientes",
  },
];

export function FocusSection() {
  return (
    <section id="que-hacemos" className="scroll-mt-28 bg-white text-[#101a2e]">
      <div className="grid min-h-[630px] lg:grid-cols-[41.2%_58.8%]">
        <Reveal className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-[7.2%] lg:py-16">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#8b9aae]">
            {FOCUS_CONTENT.eyebrow}
          </p>

          <h2 className="mt-9 text-[clamp(2.75rem,4vw,4rem)] font-light leading-none tracking-[-0.035em]">
            {FOCUS_CONTENT.title}
          </h2>

          <div className="mt-14 max-w-[650px] text-[clamp(1rem,1.35vw,1.25rem)] font-light leading-[2.05] text-[#667184] lg:mt-16">
            <p>
              Agregamos valor en cada eslabón de la cadena de suministro, desde la{" "}
              <strong className="font-semibold text-[#101a2e]">originación</strong> en
              mercados clave hasta la{" "}
              <strong className="font-semibold text-[#101a2e]">entrega final</strong> en
              destinos estratégicos.
            </p>
            <p>
              Nuestro enfoque integral abarca{" "}
              <strong className="font-semibold text-[#101a2e]">
                logística internacional, gestión de riesgos y comercialización
              </strong>{" "}
              de productos agrícolas de alta calidad.
            </p>
            <p>
              Operamos con precisión y compromiso para garantizar el flujo eficiente de
              materias primas a nivel global.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100} className="relative min-h-[440px] overflow-hidden lg:min-h-0">
          <Image
            src={FOCUS_CONTENT.image}
            alt="Trabajador sosteniendo granos entre sus manos"
            fill
            sizes="(max-width: 1023px) 100vw, 59vw"
            className="object-cover object-center"
          />
        </Reveal>
      </div>

      <div className="grid bg-[linear-gradient(105deg,#08689f_0%,#00558f_40%,#00243e_100%)] sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((value, index) => (
          <Reveal
            key={value.number}
            delayMs={index * 70}
            className="min-h-[230px] border-b border-r border-white/10 px-7 py-12 last:border-b-0 sm:px-10 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:min-h-[244px] lg:border-b-0 lg:px-12 lg:py-14"
          >
            <p className="text-xs font-semibold tracking-[0.24em] text-white/30">
              {value.number}
            </p>
            <h3 className="mt-6 text-xl font-medium text-white">{value.title}</h3>
            <p className="mt-3 max-w-[320px] text-sm font-light leading-6 text-white/48 lg:text-base lg:leading-7">
              {value.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
