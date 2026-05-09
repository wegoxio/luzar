"use client";

import { useEffect, useRef, useState } from "react";
import { StatCard } from "./stat-card";
import { Reveal } from "../ui/reveal";

const STATS = [
  { value: 4, label: "DESTINOS DE AMERICA" },
  { value: 5, label: "ORIGENES" },
  { value: 20, label: "IMPORTACIONES AL AÑO", prefix: "+" },
  { value: 1, label: "TM", prefix: "+", suffix: "M" },
];

export function StatsSection() {
  const [startCounters, setStartCounters] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionNode = sectionRef.current;

    if (!sectionNode) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          setStartCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(sectionNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="estadisticas"
      ref={sectionRef}
      className="scroll-mt-28 bg-[linear-gradient(45.01deg,#00558F_0.01%,#012C64_99.99%)] py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1501px] px-6 sm:px-8 lg:px-12">
        <Reveal className="border border-white/55 p-3">
          <div className="grid grid-cols-1 overflow-hidden border border-white/30 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <Reveal
                key={stat.label}
                delayMs={80 * index}
                className="border-b border-white/30 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <StatCard
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  startAnimation={startCounters}
                  durationMs={1200 + index * 130}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
