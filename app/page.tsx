import { ContactFooterSection } from "@/components/contact/contact-footer-section";
import { FocusSection } from "@/components/focus/focus-section";
import { HeroSection } from "@/components/hero/hero-section";
import { LogisticsSection } from "@/components/logistics/logistics-section";
import { SiteHeader } from "@/components/navigation/site-header";
import { PresenceSection } from "@/components/presence/presence-section";
import { ProductsSection } from "@/components/products/products-section";
import { ServicesSection } from "@/components/services/services-section";
import { StatsSection } from "@/components/stats/stats-section";
import { SustainabilitySection } from "@/components/sustainability/sustainability-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <FocusSection />
        <ServicesSection />
        <ProductsSection />
        <LogisticsSection />
        <PresenceSection />
        <SustainabilitySection />
        <ContactFooterSection/>
      </main>
    </>
  );
}
