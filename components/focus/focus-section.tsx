import Image from "next/image";
import { Reveal } from "../ui/reveal";

const FOCUS_CONTENT = {
  image: "/about/about-1.webp",
  eyebrow: "NUESTRO ENFOQUE",
  title: "Que hacemos",
  text: "Agregamos valor en cada eslabon de la cadena de suministro, desde la originacion en mercados clave hasta la entrega final en destinos estrategicos. Nuestro enfoque integral abarca logistica internacional, gestion de riesgos y comercializacion de productos agricolas de alta calidad. Operamos con precision y compromiso para garantizar el flujo eficiente de materias primas a nivel global.",
};

export function FocusSection() {
  return (
    <section
      id="que-hacemos"
      className="scroll-mt-28 bg-[#0b4f8c] py-0"
    >
      <div className="w-full px-0">
        <div className="relative h-[692px] overflow-hidden">
          <Image
            src={FOCUS_CONTENT.image}
            alt="Operacion logistica internacional"
            fill
            className="object-cover object-center brightness-[0.95]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/74 via-black/34 to-black/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/6" />

          <Reveal className="relative z-10 flex h-full max-w-[760px] flex-col justify-center px-14 py-10 sm:px-16 lg:px-14">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.25em] text-white/90">
              {FOCUS_CONTENT.eyebrow}
            </p>

            <h2 className="mt-4 text-[clamp(2.15rem,3.1vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-white">
              {FOCUS_CONTENT.title}
            </h2>

            <p className="mt-7 max-w-[610px] text-[clamp(1rem,1.05vw,1.18rem)] leading-[1.5] text-white/92">
              {FOCUS_CONTENT.text}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
