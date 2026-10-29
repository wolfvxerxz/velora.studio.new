import type { Metadata } from "next"
import { STUDIO } from "@/lib/seo"
import { Shell, Subheading, CapLine, RelatedWork, Faq, BookCta, JsonLd, block, body } from "@/components/seo-shell"

export const metadata: Metadata = {
  title: "Pricing — Design Partner €3,999/mo or a Custom Project",
  description: "Velora Studio pricing: a €3,999 a month design partner with unlimited requests and Next.js development, or a custom quote for brand, product and website projects.",
  alternates: { canonical: `${STUDIO.url}/pricing` },
}

const FAQ: [string, string][] = [
  ["How much does Velora Studio cost?", "The Design Partner plan is €3,999 per month with unlimited requests. Fixed projects, like a brand identity or launch site, are quoted after a short call."],
  ["Can I pause or cancel the subscription?", "Yes, anytime. Unused time carries over when you pause."],
  ["What does a custom project include?", "Any mix of brand identity, product design, website design and a Framer, Webflow or Next.js build, with unlimited revisions."],
  ["Do you work with startups outside Europe?", "Yes. We work remotely with teams in the US, UK, Europe and beyond."],
]

export default function Pricing() {
  return (
    <Shell crumbs={[["Home", "/"], ["Pricing", "/pricing"]]}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Product", name: "Velora Studio Design Partner", description: STUDIO.plans[0].detail, brand: { "@type": "Brand", name: STUDIO.name },
        offers: { "@type": "Offer", price: "3999", priceCurrency: "EUR", url: `${STUDIO.url}/pricing`, availability: "https://schema.org/InStock" },
      }} />
      <section className={block}>
        <h1 className="!text-[28px] !leading-[34px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Two ways to work with us</h1>
        <p className={`mt-4 ${body}`}>A monthly design partner for teams that ship every week, or a custom quote for one project with a clear scope and date.</p>
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
