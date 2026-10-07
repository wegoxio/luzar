"use client";

import Image from "next/image";
import { useState } from "react";

type Product = {
  id: string;
  title: string;
  countries: string[];
  image: string;
  thumbnail: string;
  imagePosition?: string;
};

// Edita este array para cambiar el contenido del carrusel.
// `image` es la fotografía principal y `thumbnail` la miniatura de la tarjeta.
const PRODUCTS: Product[] = [
  {
    id: "harina-soja",
    title: "Harina de soja",
    countries: ["Estados Unidos", "Argentina", "Bolivia", "Paraguay"],
    image: "/products/harina-soja-main.png",
    thumbnail: "/products/harina-soja-thumbnail.png",
  },
  {
    id: "maiz-amarillo",
    title: "Maíz",
    countries: ["Estados Unidos", "Brasil", "Argentina"],
    image: "/products/maiz-main.png",
    thumbnail: "/products/maiz-thumbnail.png",
  },
  {
    id: "azucar",
    title: "Azúcar",
    countries: ["Brasil", "Colombia"],
    image: "/products/azucar-main.png",
    thumbnail: "/products/azucar-thumbnail.png",
    imagePosition: "center 45%",
  },
  {
    id: "trigo",
    title: "Trigo",
    countries: ["Estados Unidos", "Canadá", "Argentina"],
    image: "/products/trigo-main.png",
    thumbnail: "/products/trigo-thumbnail.png",
  },
  {
    id: "aceite-soja",
    title: "Aceite de soja",
    countries: ["Brasil", "Argentina", "Paraguay"],
    image: "/products/aceite-soja-main.png",
    thumbnail: "/products/aceite-soja-thumbnail.png",
  },
  {
    id: "habas-soja",
    title: "Frijol de soja",
    countries: ["Brasil", "Estados Unidos"],
    image: "/products/frijol-soja-main.png",
    thumbnail: "/products/frijol-soja-thumbnail.png",
  },
  {
    id: "cafe",
    title: "Café",
    countries: ["Colombia", "Brasil"],
    image: "/products/cafe-main.png",
    thumbnail: "/products/cafe-thumbnail.png",
    imagePosition: "58% center",
  },
  {
    id: "maiz-blanco",
    title: "Maíz blanco",
    countries: ["Estados Unidos", "México"],
    image: "/products/maiz-blanco-main.png",
    thumbnail: "/products/maiz-blanco-thumbnail.png",
  },
];

export function ProductsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = PRODUCTS[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % PRODUCTS.length);
  };

  return (
    <section id="productos" className="scroll-mt-28 bg-[#f2f2f2] py-4 text-[#131d31] sm:py-6 lg:py-8">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1500px] overflow-hidden bg-white lg:aspect-[1.91/1] lg:grid-cols-[58.3%_41.7%]">
        <div className="relative min-h-[430px] overflow-hidden lg:h-full lg:min-h-0">
          <Image
            key={activeProduct.id}
            src={activeProduct.image}
            alt={activeProduct.title}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            style={{ objectPosition: activeProduct.imagePosition ?? "center" }}
            className="object-cover transition-opacity duration-300"
          />

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Ver producto anterior"
            className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-8"
          >
            <span aria-hidden="true" className="text-[3.5rem] font-extralight leading-none">‹</span>
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Ver producto siguiente"
            className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8"
          >
            <span aria-hidden="true" className="text-[3.5rem] font-extralight leading-none">›</span>
          </button>

          <div className="absolute inset-x-5 bottom-5 sm:inset-x-8">
            <div className="inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-[1.65rem] border border-white/20 bg-[linear-gradient(115deg,rgba(104,104,99,0.72),rgba(125,124,118,0.58))] p-2 pl-4 text-white shadow-[0_10px_35px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl backdrop-saturate-150 sm:gap-2 sm:pl-5">
              <span className="mr-1 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.02em] text-white/90 sm:text-base">
                {activeProduct.title}
              </span>
              {activeProduct.countries.map((country) => (
                <span
                  key={country}
                  className="whitespace-nowrap rounded-full border border-white/25 bg-white/[0.16] px-3 py-1.5 text-[0.68rem] text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] sm:px-4 sm:text-xs"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-[9%] lg:py-16">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#98a3b6]">
            Productos agro y origen
          </p>
          <h2 className="mt-6 text-[clamp(2.35rem,3.3vw,3.7rem)] font-light leading-[1.05] tracking-[-0.035em]">
            {activeProduct.title}
          </h2>

          <div className="mt-5 flex flex-wrap gap-2">
            {activeProduct.countries.map((country) => (
              <span key={country} className="rounded-full bg-[#e2e3e5] px-4 py-2 text-xs leading-none text-[#283246]">
                {country}
              </span>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {PRODUCTS.map((product, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className={`group min-w-0 rounded-lg border p-2 text-left transition ${
                    isActive
                      ? "border-[#075d91] bg-[#075d91] text-white shadow-sm"
                      : "border-[#d7dbe0] bg-white text-[#263149] hover:border-[#8da9bd]"
                  }`}
                >
                  <span className="relative block aspect-[1.18/1] overflow-hidden rounded-md bg-[#f5f1e8]">
                    <Image
                      src={product.thumbnail}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 10vw, 25vw"
                      className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </span>
                  <span className="mt-2 block truncate text-[0.57rem] font-medium uppercase tracking-[-0.01em]">
                    {product.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
