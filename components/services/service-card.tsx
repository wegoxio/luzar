import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <article className="min-h-[312px] border border-[#E3E8F0] bg-white/72 px-8 py-8">
      <div className="inline-flex h-12 w-12 items-center justify-center bg-[linear-gradient(45.01deg,#00558F_0.01%,#012C64_99.99%)]">
        <Icon className="h-5.5 w-5.5 text-white" strokeWidth={1.85} />
      </div>

      <h3 className="mt-7 text-[clamp(1.45rem,1.62vw,1.95rem)] font-normal leading-[1.18] tracking-[-0.01em] text-[#101a2c]">
        {title}
      </h3>

      <p className="mt-4 max-w-[300px] text-[clamp(0.95rem,0.92vw,1.02rem)] leading-[1.7] text-[#687387]">
        {description}
      </p>
    </article>
  );
}
