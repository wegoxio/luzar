import Image from "next/image";
import { Ship } from "lucide-react";
import { Reveal } from "../ui/reveal";

export function LogisticsSection() {
  return (
    <section
      id="logistica"
      className="relative scroll-mt-28 overflow-hidden bg-[#0B4F8C]"
    >
      <Image
        src="/hero/hero-3.webp"
        alt="Infraestructura logistica portuaria"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(45.01deg,rgba(0,85,143,0.88)_0.01%,rgba(1,44,100,0.88)_99.99%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1501px] px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
        <Reveal className="mx-auto max-w-[980px] text-center text-white">
          <div className="mx-auto inline-flex h-[46px] w-[46px] items-center justify-center border border-white/45">
            <Ship className="h-5 w-5 text-white/95" strokeWidth={1.9} />
          </div>

          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/82">
            VENTAJA COMPETITIVA
          </p>

          <h2 className="mt-5 text-[clamp(2.3rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.01em]">
            Ventaja logistica
          </h2>

          <p className="mx-auto mt-9 max-w-[850px] text-[clamp(1.25rem,2.05vw,2.05rem)] font-light italic leading-[1.45] text-white/90">
            Operamos con precision, agilidad y compromiso para garantizar entregas a
            tiempo en cualquier parte del mundo
          </p>

          <p className="mx-auto mt-[4.5rem] max-w-[1100px] text-[clamp(0.98rem,1.03vw,1.15rem)] leading-[1.7] text-white/80">
            Con nuestra empresa hermana Sagitta Marine, garantizamos control total
            sobre la cadena de suministro maritimo, reduciendo tiempos y optimizando
            costos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
