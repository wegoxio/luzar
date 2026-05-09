import { Reveal } from "../ui/reveal";

const OFFICES = [
  {
    flag: "\ud83c\uddfb\ud83c\uddea",
    country: "Venezuela",
    lines: [
      "Caracas, Venezuela",
      "Torre Credicard, Piso 15",
      "Av. Directora El Bosque",
    ],
  },
  {
    flag: "\ud83c\uddf5\ud83c\udde6",
    country: "Panama",
    lines: [
      "Ciudad de Panama, Panama",
      "Banco PH Plaza Credicorp",
      "Oficina 801-4 piso 8 Centro Ciudad",
    ],
  },
  {
    flag: "\ud83c\udde8\ud83c\uddf4",
    country: "Colombia",
    lines: ["Bogota, Colombia", "Carrera 16 # 93-78", "Torre Seki", "Of 504"],
  },
];

export function PresenceSection() {
  return (
    <section
      id="presencia"
      className="scroll-mt-28 bg-[#F2F4F7] py-16 sm:py-[4.5rem] lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1501px] px-4 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-[920px] text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#A1AAB9]">
            ALCANCE REGIONAL
          </p>
          <h2 className="mt-5 text-[clamp(2.4rem,4vw,4rem)] font-light leading-[1.08] tracking-[-0.01em] text-[#1A263A]">
            Presencia global
          </h2>
          <p className="mx-auto mt-7 max-w-[860px] text-[clamp(0.98rem,1.03vw,1.12rem)] leading-[1.6] text-[#9099A9]">
            Actualmente nuestros destinos principales son Venezuela, Colombia,
            Ecuador y Panama
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 overflow-hidden border border-[#E2E5EA] bg-white sm:grid-cols-3">
          {OFFICES.map((office, index) => (
            <Reveal
              key={office.country}
              delayMs={index * 100}
              className={`min-h-[240px] px-8 py-11 text-center ${
                index < OFFICES.length - 1 ? "border-b border-[#E2E5EA] sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <p className="text-[2rem] leading-none">{office.flag}</p>
              <h3 className="mt-5 text-[clamp(1.7rem,2vw,2rem)] font-normal leading-none text-[#1F2B40]">
                {office.country}
              </h3>
              <div className="mt-6 space-y-2">
                {office.lines.map((line) => (
                  <p
                    key={line}
                    className="text-[clamp(0.92rem,0.96vw,1.02rem)] leading-[1.5] text-[#99A1B1]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
