import type { Metadata } from "next"
import Link from "next/link"
import { SERVICES, INDUSTRIES, COMPARE, STUDIO } from "@/lib/seo"
import { Shell, Subheading, CapLine, RelatedWork, BookCta, JsonLd, block, body } from "@/components/seo-shell"

export const metadata: Metadata = {
  title: "Services — Brand, Product Design, Websites and Next.js",
  description: "Velora Studio designs brands, products and websites for AI, fintech, Web3 and developer-tool startups, and builds them in Next.js. An audit, a 4–6 week launch, or a monthly design partner.",
  alternates: { canonical: `${STUDIO.url}/services` },
}

const List = ({ items, base }: { items: typeof SERVICES; base: string }) => (
  <ul className="border-t border-[var(--t-line)]">
    {items.map((s) => (
      <li key={s.slug} className="border-b border-[var(--t-line)]">
        <Link href={`/${base}/${s.slug}`} className="group flex flex-col gap-1 py-4">
          <span className="text-[16px] leading-6 text-[var(--t-ink)]">{s.name} <span className="text-[var(--t-faint)] transition-colors group-hover:text-[var(--t-ink)]">↗</span></span>
          <span className="text-[14px] leading-5 text-[var(--t-muted)]">{s.description}</span>
        </Link>
      </li>
    ))}
  </ul>
)

export default function ServicesPage() {
  return (
    <Shell crumbs={[["Home", "/"], ["Services", "/services"]]}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "ProfessionalService", name: STUDIO.name, url: STUDIO.url, description: STUDIO.oneLine, areaServed: "Worldwide", priceRange: "€€€",
        hasOfferCatalog: { "@type": "OfferCatalog", name: "Design and development services", itemListElement: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.description, url: `${STUDIO.url}/services/${s.slug}` } })) },
      }} />
      <section className={block}>
        <h1 className="!text-[28px] !leading-[34px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Brand, product and web for startups that ship</h1>
        <p className={`mt-4 ${body}`}>{STUDIO.promise} Start with a one-week audit, a 4–6 week launch, or a monthly design partner.</p>
      </section>
      <CapLine />
      <section className={block}><Subheading title="Services" meta={String(SERVICES.length).padStart(2, "0")} /><List items={SERVICES} base="services" /></section>
      <CapLine />
      <section id="industries" className={`${block} scroll-mt-16`}><Subheading title="Industries" meta={String(INDUSTRIES.length).padStart(2, "0")} /><List items={INDUSTRIES} base="industries" /></section>
      <CapLine />
      <section id="guides" className={`${block} scroll-mt-16`}><Subheading title="Guides" /><List items={COMPARE} base="compare" /></section>
      <CapLine />
      <RelatedWork slugs={["moss", "youspot", "nightshift", "junction", "atlas", "insforge"]} title="Recent work" />
      <BookCta />
    </Shell>
  )
}
