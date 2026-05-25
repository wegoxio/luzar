import Image from "next/image";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  imageSrc: string;
  description: string;
};

const faceStyle: CSSProperties = {
  backfaceVisibility: "hidden",
  WebkitBackfaceVisibility: "hidden",
};

const backFaceStyle: CSSProperties = {
  ...faceStyle,
  transform: "rotateY(180deg)",
};

export function ServiceCard({ icon: Icon, title, imageSrc, description }: ServiceCardProps) {
  return (
    <article
      tabIndex={0}
      className="group relative h-full min-h-[312px] outline-none [perspective:1400px]"
    >
      <div className="relative min-h-[312px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:group-hover:[transform:none] motion-reduce:group-focus-visible:[transform:none]">
        <div
          style={faceStyle}
          className="absolute inset-0 border border-[#E3E8F0] bg-white/72 px-8 py-8 text-center sm:text-left"
        >
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center bg-[linear-gradient(45.01deg,#00558F_0.01%,#012C64_99.99%)] sm:mx-0">
            <Icon className="h-5.5 w-5.5 text-white" strokeWidth={1.85} />
          </div>

          <h3 className="mt-7 text-[clamp(1.45rem,1.62vw,1.95rem)] font-normal leading-[1.18] tracking-[-0.01em] text-[#101a2c]">
            {title}
          </h3>

          <p className="mx-auto mt-4 max-w-[300px] text-[clamp(0.95rem,0.92vw,1.02rem)] leading-[1.7] text-[#687387] sm:mx-0">
            {description}
          </p>
        </div>

        <div
          style={backFaceStyle}
          className="absolute inset-0 overflow-hidden border border-[#E3E8F0]"
        >
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/26 to-black/20" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,20,46,0.62)_0%,rgba(5,20,46,0.22)_42%,rgba(5,20,46,0.56)_100%)]" />

          <div className="relative z-10 px-8 py-8 text-center text-white sm:text-left">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center border border-white/55 bg-white/10 backdrop-blur-[2px] sm:mx-0">
              <Icon className="h-5.5 w-5.5 text-white" strokeWidth={1.85} />
            </div>

            <h3 className="mt-7 text-[clamp(1.45rem,1.62vw,1.95rem)] font-normal leading-[1.18] tracking-[-0.01em] text-white">
              {title}
            </h3>

            <p className="mx-auto mt-4 max-w-[300px] text-[clamp(0.95rem,0.92vw,1.02rem)] leading-[1.7] text-white/86 sm:mx-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
