import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ProductCard({ icon: Icon, title, description }: ProductCardProps) {
  return (
    <article className="min-h-[182px] bg-white px-9 py-8">
      <div className="inline-flex h-10 w-10 items-center justify-center bg-[#F1F3F7]">
        <Icon className="h-5 w-5 text-[#4D5A70]" strokeWidth={1.8} />
      </div>

      <h3 className="mt-6 text-[clamp(1.95rem,2.35vw,2.2rem)] font-normal leading-[1.05] tracking-[-0.01em] text-[#1E2B42]">
        {title}
      </h3>

      <p className="mt-4 text-[clamp(0.95rem,1vw,1.06rem)] leading-[1.5] text-[#9098A8]">
        {description}
      </p>
    </article>
  );
}
