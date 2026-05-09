"use client";

import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "QUE HACEMOS", href: "#que-hacemos" },
  { label: "SERVICIOS", href: "#servicios" },
  { label: "PRODUCTOS", href: "#productos" },
  { label: "LOGISTICA", href: "#logistica" },
  { label: "PRESENCIA", href: "#presencia" },
  { label: "CONTACTO", href: "#contacto" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToAnchor = (href: string) => {
    const targetSection = document.querySelector<HTMLElement>(href);

    if (!targetSection) {
      return;
    }

    const stickyHeaderOffset = 104;
    const targetTop =
      targetSection.getBoundingClientRect().top + window.scrollY - stickyHeaderOffset;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", href);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto max-w-[1501px] rounded-xl border transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "border-white/22 bg-[linear-gradient(45.01deg,rgba(0,85,143,0.88)_0.01%,rgba(1,44,100,0.88)_99.99%)] shadow-[0_18px_42px_rgba(1,8,20,0.45)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center gap-4 px-4 sm:h-[72px] sm:px-6">
          <a
            href="#nosotros"
            className="relative h-10 w-[156px] shrink-0"
            onClick={(event) => {
              event.preventDefault();
              scrollToAnchor("#nosotros");
            }}
          >
            <Image
              src="/logo-luzar.png"
              alt="Luzar"
              fill
              priority
              className="object-contain object-left"
            />
          </a>

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex items-center gap-7 xl:gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToAnchor(item.href);
                    }}
                    className="text-[0.84rem] font-medium uppercase tracking-[0.08em] text-white/95 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <label className="ml-auto hidden h-11 w-[248px] items-center gap-3 rounded-full border border-white/32 bg-white/12 px-4 backdrop-blur-md lg:flex">
            <Search className="h-5 w-5 shrink-0 text-white/88" strokeWidth={2} />
            <input
              type="search"
              aria-label="Buscar"
              className="h-full w-full bg-transparent text-sm text-white placeholder:text-white/65 focus:outline-none"
              placeholder="Buscar"
            />
          </label>

          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-white/8 text-white transition-colors hover:bg-white/14 lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobileMenuOpen((prevValue) => !prevValue)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileMenuOpen
              ? "max-h-[calc(100dvh-84px)] border-t border-white/20 bg-[#05234d]/96 backdrop-blur-2xl"
              : "max-h-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-84px)] overflow-y-auto px-4 pb-5 pt-3 sm:px-6">
            <nav>
              <ul className="space-y-1.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToAnchor(item.href);
                      }}
                      className="block rounded-lg px-3 py-2.5 text-[0.9rem] font-medium uppercase tracking-[0.07em] text-white/92 transition-colors hover:bg-white/12 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <label className="mt-4 flex h-11 items-center gap-3 rounded-full border border-white/36 bg-white/14 px-4 backdrop-blur-md">
              <Search className="h-5 w-5 shrink-0 text-white/88" strokeWidth={2} />
              <input
                type="search"
                aria-label="Buscar"
                className="h-full w-full bg-transparent text-sm text-white placeholder:text-white/65 focus:outline-none"
                placeholder="Buscar"
              />
            </label>
          </div>
        </div>
      </div>
      </header>

      {mobileMenuOpen ? (
        <button
          type="button"
          aria-label="Cerrar menu"
          className="fixed inset-0 z-[70] bg-[#020b1d]/45 backdrop-blur-[1px] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
