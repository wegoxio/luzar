import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ProductCard({ icon: Icon, title, description }: ProductCardProps) {
  return (
    <article className="min-h-[154px] border border-[#DDDFE4] bg-white px-7 py-7">
      <div className="inline-flex h-10 w-10 items-center justify-center bg-[#F1F3F7]">
        <Icon className="h-5 w-5 text-[#4D5A70]" strokeWidth={1.8} />
      </div>

      <h3 className="mt-7 text-[clamp(1.55rem,1.8vw,1.9rem)] font-normal leading-[1.05] tracking-[-0.01em] text-[#1E2B42]">
        {title}
      </h3>

      <p className="mt-4 text-[clamp(0.9rem,0.92vw,1rem)] leading-[1.5] text-[#9098A8]">
        {description}
      </p>
    </article>
  );
}
