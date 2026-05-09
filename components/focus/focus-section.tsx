"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Reveal } from "../ui/reveal";

const SLIDE_DURATION_MS = 6000;

const FOCUS_SLIDES = [
  {
    image: "/about/about-1.webp",
    eyebrow: "NUESTRO ENFOQUE",
    title: "Que hacemos",
    paragraphs: [
      "Agregamos valor en cada eslabon de la cadena de suministro, desde la originacion en mercados clave hasta la entrega final en destinos estrategicos.",
      "Nuestro enfoque integral abarca logistica internacional, gestion de riesgos y comercializacion de productos agricolas de alta calidad.",
      "Operamos con precision y compromiso para garantizar el flujo eficiente de materias primas a nivel global.",
    ],
  },
  {
    image: "/about/about-1.webp",
    eyebrow: "NUESTRO ENFOQUE",
    title: "Que hacemos",
    paragraphs: [
      "Agregamos valor en cada eslabon de la cadena de suministro, desde la originacion en mercados clave hasta la entrega final en destinos estrategicos.",
      "Nuestro enfoque integral abarca logistica internacional, gestion de riesgos y comercializacion de productos agricolas de alta calidad.",
      "Operamos con precision y compromiso para garantizar el flujo eficiente de materias primas a nivel global.",
    ],
  },
  {
    image: "/about/about-1.webp",
    eyebrow: "NUESTRO ENFOQUE",
    title: "Que hacemos",
    paragraphs: [
      "Agregamos valor en cada eslabon de la cadena de suministro, desde la originacion en mercados clave hasta la entrega final en destinos estrategicos.",
      "Nuestro enfoque integral abarca logistica internacional, gestion de riesgos y comercializacion de productos agricolas de alta calidad.",
      "Operamos con precision y compromiso para garantizar el flujo eficiente de materias primas a nivel global.",
    ],
  },
  {
    image: "/about/about-1.webp",
    eyebrow: "NUESTRO ENFOQUE",
    title: "Que hacemos",
    paragraphs: [
      "Agregamos valor en cada eslabon de la cadena de suministro, desde la originacion en mercados clave hasta la entrega final en destinos estrategicos.",
      "Nuestro enfoque integral abarca logistica internacional, gestion de riesgos y comercializacion de productos agricolas de alta calidad.",
      "Operamos con precision y compromiso para garantizar el flujo eficiente de materias primas a nivel global.",
    ],
  },
];

export function FocusSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let fadeTimeoutId = 0;

    const intervalId = window.setInterval(() => {
      setIsVisible(false);

      fadeTimeoutId = window.setTimeout(() => {
        setActiveSlide((currentSlide) => (currentSlide + 1) % FOCUS_SLIDES.length);
        setIsVisible(true);
      }, 260);
    }, SLIDE_DURATION_MS);

    return () => {
      window.clearInterval(intervalId);
      if (fadeTimeoutId) {
        window.clearTimeout(fadeTimeoutId);
      }
    };
  }, []);

  const currentSlide = FOCUS_SLIDES[activeSlide];

  return (
    <section
      id="que-hacemos"
      className="scroll-mt-28 bg-[#0b4f8c] py-0"
    >
      <div className="w-full px-0">
        <div className="relative h-[492px] overflow-hidden">
          <Image
            src={currentSlide.image}
            alt="Operacion logistica internacional"
            fill
            className={`object-cover object-center brightness-[0.95] transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/74 via-black/34 to-black/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-black/6" />

          <Reveal className="relative z-10 flex h-full max-w-[760px] flex-col justify-center px-14 py-10 sm:px-16 lg:px-14">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.25em] text-white/90">
              {currentSlide.eyebrow}
            </p>

            <h2 className="mt-4 text-[clamp(2.15rem,3.1vw,3.4rem)] font-light leading-[1.08] tracking-[-0.01em] text-white">
              {currentSlide.title}
            </h2>

            <div className="mt-7 space-y-5">
              {currentSlide.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[610px] text-[clamp(1rem,1.05vw,1.18rem)] leading-[1.5] text-white/92"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
