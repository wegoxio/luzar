import Image from "next/image";
import { Ship } from "lucide-react";
import { Reveal } from "../ui/reveal";

export function LogisticsSection() {
  return (
    <section
      id="logistica"
      className="relative min-h-[760px] scroll-mt-28 overflow-hidden bg-[#172538] sm:min-h-[820px]"
    >
      <Image
        src="/logistic/logistic-01.png"
        alt="Terminal marítima y puerto de contenedores"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,38,56,0.96)_0%,rgba(21,32,47,0.89)_45%,rgba(7,16,28,0.87)_100%)]" />
      <div className="absolute inset-0 bg-[#06172a]/22" />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1501px] items-center px-6 py-20 sm:min-h-[820px] sm:px-10 lg:px-14 lg:py-24">
        <Reveal className="mx-auto w-full max-w-[1080px] text-center text-white">
          <div className="mx-auto inline-flex size-[60px] items-center justify-center border border-white/20">
            <Ship className="size-7 text-white/95" strokeWidth={1.7} />
          </div>

          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.31em] text-white/58">
            VENTAJA COMPETITIVA
          </p>

          <h2 className="mt-8 text-[clamp(2.7rem,4vw,4rem)] font-light leading-none tracking-[-0.02em]">
            Ventaja logística
          </h2>

          <div className="mx-auto mt-14 max-w-[790px] border-l-2 border-white/30 py-1 pl-7 text-left sm:pl-8">
            <p className="text-[clamp(1.2rem,1.8vw,1.65rem)] font-light italic leading-[1.65] text-white/88">
              Operamos con precisión, agilidad y compromiso para garantizar entregas a
              tiempo en cualquier parte del mundo
            </p>
          </div>

          <div className="mt-14 border-t border-white/20 pt-12 sm:mt-16 sm:pt-12">
            <p className="mx-auto max-w-[1000px] text-[clamp(0.95rem,1.08vw,1.1rem)] font-light leading-[1.75] text-white/72">
              Con nuestra empresa hermana{" "}
              <strong className="font-medium text-white">Sagitta Marine</strong>,
              garantizamos control total sobre la cadena de suministro marítimo,
              reduciendo tiempos y optimizando costos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
