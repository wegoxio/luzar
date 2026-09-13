"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const MAP_GEOGRAPHY = "/maps/countries-110m.json";

type Country = { id: string; name: string; coordinates: [number, number] };
type Product = {
  id: string;
  name: string;
  detail?: string;
  countries: string[];
  imageSrc?: string;
  swatch: string;
  symbol: string;
};

const COUNTRIES: Record<string, Country> = {
  "032": { id: "032", name: "Argentina", coordinates: [-64, -35] },
  "076": { id: "076", name: "Brasil", coordinates: [-52, -10] },
  "124": { id: "124", name: "Canadá", coordinates: [-106, 56] },
  "170": { id: "170", name: "Colombia", coordinates: [-74, 4] },
  "218": { id: "218", name: "Ecuador", coordinates: [-78, -1.4] },
  "484": { id: "484", name: "México", coordinates: [-102, 23] },
  "600": { id: "600", name: "Paraguay", coordinates: [-58.4, -23.4] },
  "840": { id: "840", name: "Estados Unidos", coordinates: [-101, 39] },
  "858": { id: "858", name: "Uruguay", coordinates: [-56, -33] },
};

const PRODUCTS: Product[] = [
  { id: "maiz-amarillo", name: "Maíz Amarillo", countries: ["840", "076", "032"], imageSrc: "/products/maiz-amarillo.svg", symbol: "MA", swatch: "from-[#d5a42e] to-[#8b5c09]" },
  { id: "maiz-blanco", name: "Maíz Blanco", countries: ["840", "484"], imageSrc: "/products/maiz-blanco.svg", symbol: "MB", swatch: "from-[#eee2bf] to-[#b9914c]" },
  { id: "harina-soja", name: "Harina de Soja", countries: ["076", "032", "600", "840"], imageSrc: "/products/harina-soja.svg", symbol: "HS", swatch: "from-[#cbb177] to-[#796033]" },
  { id: "gluten-maiz", name: "Harina de Gluten de Maíz", countries: ["840"], detail: "Estados Unidos", imageSrc: "/products/harina-gluten-maiz.svg", symbol: "HG", swatch: "from-[#a57837] to-[#4c361c]" },
  { id: "trigo", name: "Trigo", countries: ["840", "124", "032"], imageSrc: "/products/trigo.svg", symbol: "TR", swatch: "from-[#d6c292] to-[#877049]" },
  { id: "aceite-soja", name: "Aceite de Soja", countries: ["076", "032", "600"], imageSrc: "/products/aceites-soja.svg", symbol: "AS", swatch: "from-[#d5b943] to-[#6d852f]" },
  { id: "aceite-palma", name: "Aceite de Palma", countries: ["170", "218"], imageSrc: "/products/aceites-palma.svg", symbol: "AP", swatch: "from-[#e0bc3e] to-[#a24520]" },
  { id: "habas-soja", name: "Habas de Soja", countries: ["076", "840"], imageSrc: "/products/habas-soja.svg", symbol: "HB", swatch: "from-[#b9a45e] to-[#635b29]" },
  { id: "arroz", name: "Arroz", countries: ["076", "840"], imageSrc: "/products/arroz.svg", symbol: "AR", swatch: "from-[#eee7cb] to-[#b7a272]" },
  { id: "avena", name: "Avena", countries: ["124", "032"], imageSrc: "/products/avena.jpg", symbol: "AV", swatch: "from-[#d3c5a2] to-[#8a7653]" },
];

const normalizeCountryId = (id: string | number | undefined) =>
  String(id ?? "").padStart(3, "0");

export function ProductsSection() {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [activeCountryId, setActiveCountryId] = useState<string | null>(null);
  const [countryFilter, setCountryFilter] = useState<string | null>(null);

  const activeProduct = PRODUCTS.find((product) => product.id === activeProductId);
  const highlightedIds = new Set(activeProduct?.countries ?? Object.keys(COUNTRIES));
  const visibleProducts = useMemo(
    () => PRODUCTS.filter((product) => !countryFilter || product.countries.includes(countryFilter)),
    [countryFilter],
  );

  const activateProduct = (product: Product) => {
    setActiveProductId(product.id);
    setActiveCountryId(product.countries[0]);
  };

  const clearProduct = () => {
    setActiveProductId(null);
    setActiveCountryId(null);
  };

  const selectCountry = (countryId: string) => {
    setCountryFilter((current) => (current === countryId ? null : countryId));
    setActiveCountryId(countryId);
  };

  return (
    <section id="productos" className="scroll-mt-28 bg-white py-20 text-[#1c2940] sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1501px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#98a5b8]">Nuestro portafolio</p>
            <h2 className="mt-5 text-[clamp(2.45rem,4.4vw,4rem)] font-light leading-none tracking-[-0.035em]">Productos Agro y Origen</h2>
          </div>
          <p className="max-w-[360px] text-sm leading-6 text-[#9ba5b4] lg:text-right">Pasa el cursor sobre un producto para ver sus países de origen en el mapa.</p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-[minmax(250px,0.33fr)_minmax(0,1fr)] xl:gap-10">
          <div className="max-h-[620px] space-y-2 overflow-y-auto pr-2 [scrollbar-color:#a8c1d4_transparent] [scrollbar-width:thin]">
            {countryFilter && (
              <button type="button" onClick={() => setCountryFilter(null)} className="mb-2 w-full rounded-xl bg-[#eaf3f9] px-4 py-3 text-left text-xs font-medium text-[#07699d] transition hover:bg-[#dcecf6]">
                Mostrando productos de {COUNTRIES[countryFilter].name} · Quitar filtro
              </button>
            )}
            <div key={countryFilter ?? "all"} className="space-y-2">
              {visibleProducts.map((product, index) => {
                const isActive = product.id === activeProductId;
                return (
                  <button
                  key={product.id}
                  type="button"
                  onMouseEnter={() => activateProduct(product)}
                  onMouseLeave={clearProduct}
                  onFocus={() => activateProduct(product)}
                  onBlur={clearProduct}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className={`product-filter-enter group flex min-h-[66px] w-full items-center gap-3 rounded-xl border px-3 py-2 text-left transition-all duration-200 ${isActive ? "border-[#76acd0] bg-[#f4f9fc] shadow-[0_8px_24px_rgba(38,94,126,0.10)]" : "border-[#dce2e8] bg-white hover:border-[#9abed4]"}`}
                  aria-label={`${product.name}, ${product.countries.length} países de origen`}
                >
                  {product.imageSrc ? (
                    <Image
                      src={product.imageSrc}
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-lg object-cover"
                    />
                  ) : (
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.swatch} text-[0.62rem] font-bold tracking-wide text-white shadow-inner`}>{product.symbol}</span>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[0.95rem] font-medium text-[#26344b]">{product.name}</span>
                    <span className="mt-0.5 block text-xs text-[#9ba6b5]">{product.detail ?? `${product.countries.length} ${product.countries.length === 1 ? "país" : "países"}`}</span>
                  </span>
                  <span className="flex gap-0.5" aria-hidden="true">
                    {product.countries.slice(0, 4).map((countryId) => <span key={countryId} className="h-1 w-1 rounded-full bg-[#78aaca]" />)}
                  </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[22px] border border-[#c5d8e7] bg-[#dceaf6]">
              <ComposableMap width={800} height={460} projection="geoEqualEarth" projectionConfig={{ scale: 158, center: [0, 5] }} className="aspect-[1.42/1] h-auto w-full sm:aspect-[1.74/1]" aria-label="Mapa mundial de países de origen">
                <Geographies geography={MAP_GEOGRAPHY}>
                  {({ geographies }) => geographies.map((geography) => {
                    const countryId = normalizeCountryId(geography.id);
                    const isOrigin = highlightedIds.has(countryId);
                    const isSelected = countryFilter === countryId;
                    return (
                      <Geography
                        key={geography.rsmKey}
                        geography={geography}
                        onClick={() => COUNTRIES[countryId] && selectCountry(countryId)}
                        onMouseEnter={() => isOrigin && setActiveCountryId(countryId)}
                        onMouseLeave={() => setActiveCountryId(activeProduct?.countries[0] ?? null)}
                        fill={isSelected ? "#d09518" : isOrigin ? (activeProduct ? "#68a6c8" : "#aac9dd") : "#c5d7e6"}
                        stroke="#aec5d7"
                        strokeWidth={0.65}
                        className={`${COUNTRIES[countryId] ? "cursor-pointer" : ""} ${isOrigin ? "hover:fill-[#1676a8] active:fill-[#086397]" : "hover:fill-[#c5d7e6]"} outline-none transition-colors duration-200`}
                      />
                    );
                  })}
                </Geographies>

                {[...highlightedIds].map((countryId) => {
                  const country = COUNTRIES[countryId];
                  if (!country) return null;
                  const isCurrent = activeCountryId === countryId || countryFilter === countryId;
                  return (
                    <Marker key={countryId} coordinates={country.coordinates} onMouseEnter={() => setActiveCountryId(countryId)} onMouseLeave={() => setActiveCountryId(activeProduct?.countries[0] ?? null)} onClick={() => selectCountry(countryId)} className="cursor-pointer outline-none">
                      <circle r={isCurrent ? 6 : 4.5} fill={isCurrent ? "#d09518" : "#0870a8"} stroke="#fff" strokeWidth={2} className="transition-all" />
                    </Marker>
                  );
                })}
              </ComposableMap>

              {activeCountryId && COUNTRIES[activeCountryId] && (
                <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_12px_30px_rgba(32,71,98,0.18)] backdrop-blur sm:left-auto sm:right-5 sm:top-5">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#8b9aae]">País de origen</span>
                  <span className="mt-1 block text-base font-medium text-[#20304a]">{COUNTRIES[activeCountryId].name}</span>
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 px-1 text-[0.7rem] text-[#8995a5]">
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-[#68a6c8]" /> País de origen</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-[#0870a8]" /> Origen activo</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-[#d09518]" /> País seleccionado</span>
              <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 rounded-full bg-[#c5d7e6]" /> Resto del mundo</span>
              <span className="ml-auto hidden italic text-[#a8b0bc] xl:inline">Clic en un país para filtrar productos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
