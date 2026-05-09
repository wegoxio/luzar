import Image from "next/image";
import { Droplet, Leaf, Wheat } from "lucide-react";
import { ProductCard } from "./product-card";
import { Reveal } from "../ui/reveal";

const PRODUCTS = [
  {
    icon: Wheat,
    title: "Maiz",
    description: "Grano amarillo y blanco de alta calidad",
  },
  {
    icon: Leaf,
    title: "Soya",
    description: "Grano entero y harina de soya",
  },
  {
    icon: Wheat,
    title: "Trigo",
    description: "Variedades para panaderia e industria",
  },
  {
    icon: Droplet,
    title: "Aceites",
    description: "Aceites vegetales refinados",
  },
];

const ORIGINS = ["Estados Unidos", "Brasil", "Argentina", "Paraguay", "Uruguay"];

export function ProductsSection() {
  return (
    <section
      id="productos"
      className="relative scroll-mt-28 overflow-hidden bg-[#E8E0CD]"
    >
      <Image
        src="/products/products-bg.webp"
        alt="Campo de cosecha de granos"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#d8cfb7]/40 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1501px] px-4 pb-24 pt-10 sm:px-8 lg:px-12">
        <div className="overflow-hidden border border-white/55 bg-transparent">
          <Reveal className="bg-gradient-to-b from-[#8290a0]/72 via-[#8f9bab]/58 to-[#b4bcc8]/50 px-6 pb-14 pt-20 text-center sm:px-10">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.33em] text-white/92">
              NUESTRO PORTAFOLIO
            </p>
            <h2 className="mt-5 text-[clamp(2.3rem,4vw,3.9rem)] font-light leading-[1.04] tracking-[-0.01em] text-white">
              Productos
            </h2>
            <p className="mx-auto mt-7 max-w-[700px] text-[clamp(0.95rem,1.02vw,1.1rem)] leading-[1.5] text-white/88">
              Materias primas de calidad para alimentacion animal y consumo humano
            </p>
          </Reveal>

          <div className="-mt-4 grid grid-cols-1 sm:grid-cols-2 lg:mt-0 lg:grid-cols-4">
            {PRODUCTS.map((product, index) => (
              <Reveal key={product.title} delayMs={90 * index}>
                <ProductCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal
            delayMs={120}
            className="bg-[linear-gradient(45.01deg,#0C1F43_0.01%,#102F60_99.99%)] px-5 py-12 text-center"
          >
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-white/78">
              ORIGENES
            </p>
            <p className="mt-6 text-[clamp(1.2rem,1.5vw,1.5rem)] font-normal leading-none text-white/90">
              {ORIGINS.map((origin, index) => (
                <span key={origin}>
                  {index > 0 ? " \u2022 " : ""}
                  {origin}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
