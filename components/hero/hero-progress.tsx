type HeroProgressProps = {
  activeIndex: number;
  activeProgress: number;
  total: number;
  onSelect: (index: number) => void;
};

export function HeroProgress({
  activeIndex,
  activeProgress,
  total,
  onSelect,
}: HeroProgressProps) {
  return (
    <div className="mt-auto flex items-end gap-4">
      {Array.from({ length: total }).map((_, index) => {
        const fillPercentage =
          index < activeIndex ? 100 : index === activeIndex ? activeProgress : 0;

        return (
          <button
            key={`hero-progress-${index}`}
            type="button"
            onClick={() => onSelect(index)}
            className="group relative h-10 flex-1"
            aria-label={`Ir al slide ${index + 1}`}
          >
            <span className="absolute top-4 block h-[2px] w-full rounded-full bg-white/35" />
            <span
              className="absolute top-4 block h-[2px] rounded-full bg-white transition-[width] duration-150 ease-linear"
              style={{ width: `${fillPercentage}%` }}
            />
          </button>
        );
      })}
    </div>
  );
}
