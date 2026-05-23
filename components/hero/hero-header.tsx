import Image from "next/image";

type HeroHeaderProps = {
  menuItems: string[];
};

export function HeroHeader({ menuItems }: HeroHeaderProps) {
  return (
    <header className="flex items-center gap-8">
      <a
        href="#"
        className="relative h-12 w-[178px] shrink-0 transition-opacity hover:opacity-90"
      >
        <Image
          src="/logo-luzar.png"
          alt="Luzar"
          width={124}
          height={42}
          priority
          className="object-contain object-left"
        />
      </a>

      <nav className="hidden flex-1 items-center justify-center md:flex">
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-medium uppercase tracking-[0.08em] text-white/95 transition-colors hover:text-white"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <label className="ml-auto hidden h-12 w-[255px] items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 backdrop-blur-md md:flex">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-white/85"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          aria-label="Buscar"
          className="h-full w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
          placeholder=""
        />
      </label>
    </header>
  );
}
