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

const DELIVERY_DESTINATIONS = [
  { flag: "🇪🇨", country: "Ecuador" },
  { flag: "🇲🇽", country: "México" },
  { flag: "🇧🇴", country: "Bolivia" },
  { flag: "🇨🇱", country: "Chile" },
  { flag: "🇩🇴", country: "Rep. Dominicana" },
  { flag: "🇳🇴", country: "Noruega" },
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
              className={`group min-h-[240px] px-8 py-11 text-center transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-[#f8fbfd] hover:shadow-[0_18px_45px_rgba(1,44,100,0.09)] ${
                index < OFFICES.length - 1 ? "border-b border-[#E2E5EA] sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <p className="text-[2rem] leading-none transition-transform duration-500 group-hover:scale-110">{office.flag}</p>
              <h3 className="mt-5 text-[clamp(1.7rem,2vw,2rem)] font-normal leading-none text-[#1F2B40] transition-colors duration-300 group-hover:text-[#00558f]">
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

        <Reveal className="mt-14 text-center lg:mt-16">
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-[#9AA5B6]">
            Destinos de entrega
          </h3>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 overflow-hidden border-l border-t border-[#E2E5EA] bg-white sm:grid-cols-3 lg:grid-cols-6">
          {DELIVERY_DESTINATIONS.map((destination, index) => (
            <Reveal
              key={destination.country}
              delayMs={index * 60}
              className="group relative isolate flex min-h-[94px] items-center gap-3 overflow-hidden border-b border-r border-[#E2E5EA] px-5 py-6 transition-shadow duration-700 ease-out before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(45.01deg,#00558F_0.01%,#012C64_99.99%)] before:opacity-0 before:transition-opacity before:duration-700 before:ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_12px_30px_rgba(1,44,100,0.14)] hover:before:opacity-100 sm:px-7"
            >
              <span className="text-xl leading-none transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110" aria-hidden="true">
                {destination.flag}
              </span>
              <p className="text-[clamp(0.88rem,1vw,1rem)] text-[#445066] transition-colors duration-700 ease-out group-hover:text-white">
                {destination.country}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
