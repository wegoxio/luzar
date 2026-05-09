"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroProgress } from "./hero-progress";
import { Reveal } from "../ui/reveal";

const SLIDE_DURATION_MS = 6000;

const HERO_SLIDES = [
  {
    image: "/hero/hero-1.webp",
    title: ["Donde nacen las", "conexiones que", "mueven mercados"],
    description:
      "Somos un comerciante global de materias primas, enfocados en productos para alimentacion animal y consumo humano.",
  },
  {
    image: "/hero/hero-1.webp",
    title: ["Donde nacen las", "conexiones que", "mueven mercados"],
    description:
      "Somos un comerciante global de materias primas, enfocados en productos para alimentacion animal y consumo humano.",
  },
  {
    image: "/hero/hero-1.webp",
    title: ["Donde nacen las", "conexiones que", "mueven mercados"],
    description:
      "Somos un comerciante global de materias primas, enfocados en productos para alimentacion animal y consumo humano.",
  },
  {
    image: "/hero/hero-1.webp",
    title: ["Donde nacen las", "conexiones que", "mueven mercados"],
    description:
      "Somos un comerciante global de materias primas, enfocados en productos para alimentacion animal y consumo humano.",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const animationStart = performance.now();
    let rafId = 0;

    const animateProgress = (now: number) => {
      const elapsed = now - animationStart;
      const normalizedProgress = Math.min((elapsed / SLIDE_DURATION_MS) * 100, 100);
      setProgress(normalizedProgress);

      if (elapsed >= SLIDE_DURATION_MS) {
        setProgress(0);
        setActiveSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDES.length);
        return;
      }

      rafId = window.requestAnimationFrame(animateProgress);
    };

    rafId = window.requestAnimationFrame(animateProgress);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [activeSlide]);

  const handleSelectSlide = (nextSlide: number) => {
    setProgress(0);
    setActiveSlide(nextSlide);
  };

  const currentSlide = HERO_SLIDES[activeSlide];

  return (
    <section
      id="nosotros"
      className="relative h-[808px] scroll-mt-28 overflow-hidden border border-[#1f98df] bg-slate-900"
    >
      <Image
        src={currentSlide.image}
        alt="Vista logistica de contenedores en puerto"
        fill
        priority
        className="object-cover object-center brightness-[1.03] contrast-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#06142f]/58 via-[#0d1e3d]/22 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#031026]/32 via-transparent to-[#0d2446]/14" />

      <div className="relative z-10 flex h-full flex-col px-7 pb-6 pt-24 sm:px-10 sm:pt-28 lg:px-12 lg:pt-32">
        <Reveal className="my-auto max-w-[808px] pb-16 lg:pb-20" delayMs={80}>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[clamp(3.1rem,6.25vw,5.625rem)] tracking-[-0.01em] text-white">
            {currentSlide.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[808px] text-[clamp(1.1rem,1.45vw,1.5rem)] leading-[1.35] text-white/90">
            {currentSlide.description}
          </p>
        </Reveal>

        <Reveal delayMs={180}>
          <HeroProgress
            activeIndex={activeSlide}
            activeProgress={progress}
            total={HERO_SLIDES.length}
            onSelect={handleSelectSlide}
          />
        </Reveal>
      </div>
    </section>
  );
}
