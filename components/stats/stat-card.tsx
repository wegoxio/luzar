"use client";

import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  startAnimation: boolean;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  durationMs = 1400,
  startAnimation,
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimatedRef.current) {
      return;
    }

    hasAnimatedRef.current = true;

    const animationStart = performance.now();
    let rafId = 0;

    const animate = (now: number) => {
      const elapsed = now - animationStart;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutCubic(progress);
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [durationMs, startAnimation, value]);

  return (
    <article className="flex min-h-[160px] flex-col items-center justify-center bg-[linear-gradient(111deg,rgba(255,255,255,0.13),rgba(255,255,255,0.06))] px-6 py-7">
      <p className="text-[clamp(3rem,4.2vw,3.6rem)] font-light leading-none tracking-[-0.01em] text-white">
        {prefix}
        {displayValue}
        {suffix}
      </p>
      <p className="mt-4 text-center text-[0.69rem] font-medium uppercase tracking-[0.24em] text-white/95">
        {label}
      </p>
    </article>
  );
}
