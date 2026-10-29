import type { Metadata } from "next"
import { STUDIO } from "@/lib/seo"
import { Shell, Subheading, CapLine, RelatedWork, Faq, BookCta, JsonLd, block, body } from "@/components/seo-shell"

export const metadata: Metadata = {
  title: "Pricing — Audit €2,500, Launch from €14,900, Design Partner €5,900/mo",
  description: "Velora Studio pricing: a one-week audit for €2,500, a 4–6 week launch (brand, app, landing page) from €14,900, or a €5,900 a month design partner.",
  alternates: { canonical: `${STUDIO.url}/pricing` },
}

const FAQ: [string, string][] = [
  ["How much does Velora Studio cost?", "An audit is €2,500 and is credited to your first month or project. A Launch (brand, app, landing page, case study) starts at €14,900. The Design Partner plan is €5,900 per month with unlimited requests."],
  ["Do you offer discounts?", "Referrals get 10% off a month for both sides, and YC, Antler, a16z speedrun and similar accelerator companies get 10% off."],
  ["Can I pause or cancel the subscription?", "Yes, anytime. Unused time carries over when you pause."],
  ["What does a custom project include?", "Any mix of brand identity, product design, website design and a Framer, Webflow or Next.js build, with unlimited revisions."],
  ["Do you work with startups outside Europe?", "Yes. We work remotely with teams in the US, UK, Europe and beyond."],
]

export default function Pricing() {
  return (
    <Shell crumbs={[["Home", "/"], ["Pricing", "/pricing"]]}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Service", name: "Velora Studio", description: STUDIO.promise, provider: { "@type": "Organization", name: STUDIO.name, url: STUDIO.url },
        offers: [
          { "@type": "Offer", name: "Audit", price: "2500", priceCurrency: "EUR", url: `${STUDIO.url}/pricing` },
          { "@type": "Offer", name: "Launch", priceSpecification: { "@type": "PriceSpecification", minPrice: "14900", priceCurrency: "EUR" }, url: `${STUDIO.url}/pricing` },
          { "@type": "Offer", name: "Design Partner", price: "5900", priceCurrency: "EUR", url: `${STUDIO.url}/pricing` },
        ],
      }} />
      <section className={block}>
        <h1 className="!text-[28px] !leading-[34px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Three ways to start</h1>
        <p className={`mt-4 ${body}`}>Start small with an audit, ship everything at once with a Launch, or keep a senior team on hand every week. {STUDIO.perks}</p>
      </section>
      <CapLine />
      {STUDIO.plans.map((p) => (
        <section key={p.name} className={block}>
          <Subheading title={p.name} />
          <p className="funnel !text-[28px] !leading-[36px] !font-[500] text-[var(--t-ink)]">{p.price}</p>
          <p className={`mt-3 ${body}`}>{p.detail}</p>
        </section>
      ))}
      <CapLine />
      <RelatedWork slugs={["moss", "atlas", "nightshift", "junction"]} />
      <CapLine />
      <Faq faq={FAQ} />
      <BookCta />
    </Shell>
  )
}
