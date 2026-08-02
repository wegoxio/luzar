"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TIMELINE_ITEMS } from "./timeline-data";
import styles from "./timeline-section.module.css";

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lastIndex = TIMELINE_ITEMS.length - 1;
  const progress = lastIndex > 0 ? (activeIndex / lastIndex) * 100 : 100;

  const selectItem = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(index, lastIndex)));
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    const activeItem = itemRefs.current[activeIndex];
    const firstItem = itemRefs.current[0];

    if (!viewport || !activeItem || !firstItem) return;

    viewport.scrollTo({
      left: activeItem.offsetLeft - firstItem.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [activeIndex]);

  return (
    <section
      id="historia"
      aria-labelledby="timeline-title"
      className="relative scroll-mt-28 overflow-hidden bg-[#f3f3f3] py-12 text-[#052d52] sm:py-16 lg:py-20"
    >
      <h2 id="timeline-title" className="sr-only">
        Luzar a través de los años
      </h2>

      <p className="absolute left-4 top-1/2 hidden -translate-y-1/2 -rotate-180 text-[0.64rem] font-semibold uppercase tracking-[0.36em] text-[#00558f] [writing-mode:vertical-rl] sm:block lg:left-6">
        Luzar a través de los años
      </p>

      <div className="ml-6 sm:ml-20 lg:ml-[9%]">
        <div ref={viewportRef} className={styles.viewport}>
          <div className={styles.track}>
            {TIMELINE_ITEMS.map((item, index) => (
              <div
                key={item.year}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={styles.item}
              >
                <div
                  className={`${styles.card} relative aspect-[412/495] overflow-hidden rounded-[4px] bg-[#d8dde1]`}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 48px), 31vw"
                    className="object-cover grayscale"
                  />
                </div>

                <article
                  className={`${styles.card} flex aspect-[412/495] flex-col rounded-[4px] bg-[linear-gradient(145deg,#08639a_0%,#00558f_48%,#002c50_100%)] px-8 py-9 text-white max-sm:aspect-auto max-sm:min-h-[460px] sm:px-10 sm:py-11 lg:px-12 lg:py-12`}
                  aria-current={index === activeIndex ? "step" : undefined}
                >
                  <p className="text-[clamp(4rem,7vw,6.2rem)] font-light leading-none tracking-[-0.05em]">
                    {item.year}
                  </p>
                  <h3 className="mt-8 text-[clamp(1.35rem,2vw,2rem)] font-light leading-tight">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="mt-6 max-w-[390px] text-sm font-light leading-7 text-white/65 lg:text-base">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-6 mt-8 sm:mx-20 sm:mt-10 lg:mx-[6%] lg:mt-12">
        <div className="relative flex justify-between pb-4">
          {TIMELINE_ITEMS.map((item, index) => (
            <button
              key={item.year}
              type="button"
              onClick={() => selectItem(index)}
              className={`relative z-10 cursor-pointer px-1 py-1 text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] ${
                index <= activeIndex ? "text-[#153a59]" : "text-[#153a59]/55"
              }`}
              aria-label={`Ir al año ${item.year}`}
              aria-pressed={index === activeIndex}
            >
              {item.year}
            </button>
          ))}
        </div>

        <div className="relative h-px bg-[#a9c2d3]">
          <div
            className="absolute inset-y-0 left-0 bg-[#0068a5] transition-[width] duration-700 ease-out motion-reduce:transition-none"
            style={{ width: `${progress}%` }}
          />
          {TIMELINE_ITEMS.map((item, index) => (
            <button
              key={item.year}
              type="button"
              onClick={() => selectItem(index)}
              aria-label={`Seleccionar ${item.year}`}
              className={`absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] ${
                index <= activeIndex
                  ? "border-[#0068a5] bg-[#0068a5]"
                  : "border-[#a9c2d3] bg-[#f3f3f3]"
              }`}
              style={{ left: `${lastIndex > 0 ? (index / lastIndex) * 100 : 0}%` }}
            />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => selectItem(activeIndex - 1)}
        disabled={activeIndex === 0}
        aria-label="Hito anterior"
        className="absolute left-2 top-[24%] z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-[#7ca2bc] bg-white/75 text-[#0068a5] backdrop-blur-sm transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-35 sm:left-10 sm:top-[46%] sm:size-12"
      >
        <ChevronLeft size={22} strokeWidth={1.4} />
      </button>

      <button
        type="button"
        onClick={() => selectItem(activeIndex + 1)}
        disabled={activeIndex === lastIndex}
        aria-label="Siguiente hito"
        className="absolute right-3 top-[24%] z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/45 bg-[#00558f]/90 text-white transition-colors hover:bg-[#006aa7] disabled:cursor-not-allowed disabled:opacity-35 sm:right-8 sm:top-[46%] sm:size-12"
      >
        <ChevronRight size={22} strokeWidth={1.4} />
      </button>
    </section>
  );
}
