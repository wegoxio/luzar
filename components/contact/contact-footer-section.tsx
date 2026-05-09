import Image from "next/image";
import { Mail } from "lucide-react";
import { Reveal } from "../ui/reveal";

const COMPANY_LINKS = ["Nosotros", "Que hacemos", "Servicios"];
const PRODUCT_LINKS = ["Maiz", "Soya", "Trigo", "Aceites"];

export function ContactFooterSection() {
  return (
    <section id="contacto" className="scroll-mt-28 bg-black">
      <div className="bg-[radial-gradient(80%_120%_at_50%_20%,#0f2b56_0%,#071129_58%,#020915_100%)]">
        <Reveal className="mx-auto w-full max-w-[1501px] px-4 py-20 text-center sm:px-8 lg:px-12 lg:py-24">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-white/62">
            CONTACTANOS
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,4.1vw,4.2rem)] font-light leading-[1.04] tracking-[-0.01em] text-white">
            Hablemos
          </h2>
          <p className="mx-auto mt-8 max-w-[900px] text-[clamp(1rem,1.08vw,1.2rem)] leading-[1.6] text-white/66">
            Estamos listos para ayudarte a optimizar tu cadena de suministro de
            materias primas
          </p>

          <a
            href="mailto:comercial@luzartrading.com"
            className="mx-auto mt-12 inline-flex h-[62px] w-full max-w-[340px] items-center justify-center gap-3 bg-white px-6 text-[0.94rem] font-medium text-[#2D3645] transition-opacity hover:opacity-90 sm:px-8 sm:text-[1rem]"
          >
            <Mail className="h-5 w-5 text-[#334155]" strokeWidth={1.85} />
            comercial@luzartrading.com
          </a>
        </Reveal>
      </div>

      <footer className="border-t border-white/8 bg-[#020202]">
        <div className="mx-auto w-full max-w-[1501px] px-4 pb-8 pt-10 sm:px-8 lg:px-12 lg:pb-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <Reveal>
              <a href="#" className="inline-block">
                <Image
                  src="/logo-luzar.png"
                  alt="Luzar"
                  width={164}
                  height={42}
                  className="h-10 w-auto object-contain object-left"
                />
              </a>
              <p className="mt-5 max-w-[290px] text-[0.97rem] leading-[1.55] text-white/42">
                Comercio global de materias primas con compromiso y excelencia.
              </p>
            </Reveal>

            <Reveal delayMs={70}>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/82">
                EMPRESA
              </p>
              <ul className="mt-5 space-y-3">
                {COMPANY_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[0.98rem] leading-none text-white/52 transition-colors hover:text-white/80"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={120}>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/82">
                PRODUCTOS
              </p>
              <ul className="mt-5 space-y-3">
                {PRODUCT_LINKS.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[0.98rem] leading-none text-white/52 transition-colors hover:text-white/80"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delayMs={160}>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-white/82">
                CONTACTO
              </p>
              <a
                href="mailto:comercial@luzartrading.com"
                className="mt-5 block text-[0.98rem] text-white/52 transition-colors hover:text-white/80"
              >
                comercial@luzartrading.com
              </a>
            </Reveal>
          </div>

          <div className="mt-11 border-t border-white/9 pt-8">
            <div className="flex flex-col gap-4 text-[0.86rem] text-white/35 sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; 2026 Luzar Trading. Todos los derechos reservados.</p>
              <div className="flex items-center gap-7">
                <a href="#" className="transition-colors hover:text-white/60">
                  Privacidad
                </a>
                <a href="#" className="transition-colors hover:text-white/60">
                  Terminos
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
