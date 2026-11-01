import type { Metadata } from "next"
import Link from "next/link"
import { DocumentText, Rocket, User, Gift, Star, Calendar } from "reicon-react"
import { STUDIO } from "@/lib/seo"
import { caseStudies } from "@/lib/case-studies"
import { ApplePage } from "@/components/apple"
import { JsonLd, breadcrumbLd, faqLd } from "@/components/seo-shell"

export const metadata: Metadata = {
  title: "Pricing — Landing Page €1,200, Launch from €14,900, Design Partner €5,900/mo",
  description: "Velora Studio pricing: a landing page for €1,200 in 1–2 weeks, a 4–6 week launch (brand, app, landing page) from €14,900, or a €5,900 a month design partner.",
  alternates: { canonical: `${STUDIO.url}/pricing` },
}

// Pricing in the homepage's language: a case-style head, the three plans side by side with what each one
// includes, the perks, work that shows it, questions, and the call.
const PLANS = [
  { icon: DocumentText, name: "Landing Page", price: "€1,200", when: "1–2 weeks", line: "One page that sells the product.", items: ["Copy, layout and motion", "Built in Next.js or Framer", "SEO and AI search basics", "Two rounds of revisions"] },
  { icon: Rocket, name: "Launch", price: "€14,900", from: true, when: "4–6 weeks", line: "Brand, product and site as one system.", items: ["Brand identity and brand book", "The app's core flows, web or iOS", "Landing page with the live product", "Case study and launch posts"], note: "Two spots a month" },
  { icon: User, name: "Design Partner", price: "€5,900", per: "/ month", when: "Every week", line: "A senior team on hand, build included.", items: ["Unlimited design requests", "2–3 updates a week", "Next.js development", "Slack or WhatsApp, pause anytime"] },
]

const FAQ: [string, string][] = [
  ["Which plan should I start with?", "If you need to look ready fast, start with a Landing Page. If you're launching or raising in the next couple of months, a Launch ships brand, product and site together. If design is a weekly need, the Design Partner plan keeps a senior team on hand."],
  ["Do you offer discounts?", "Referrals get 10% off a month for both sides, and YC, Antler, a16z speedrun and similar accelerator companies get 10% off."],
  ["Can I pause or cancel the Design Partner plan?", "Yes, anytime. Unused time carries over when you pause."],
  ["What does a custom project include?", "Any mix of brand identity, product design, website design and a Framer, Webflow or Next.js build, with unlimited revisions."],
  ["Do you work with startups outside Europe?", "Yes. We work remotely with teams in the US, UK, Europe and beyond."],
]

const Check = () => <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
const Telegram = () => <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="12" fill="#2AABEE" /><path fill="#fff" d="M5.4 11.8l10.9-4.2c.5-.2 1 .1.8.9l-1.9 8.8c-.1.6-.5.8-1 .5l-2.9-2.1-1.4 1.3c-.2.2-.3.3-.6.3l.2-2.9 5.3-4.8c.2-.2 0-.3-.3-.1l-6.6 4.1-2.8-.9c-.6-.2-.6-.6.1-.9Z" /></svg>
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

export default function Pricing() {
  const work = ["streak", "kept", "moss", "atlas"].map((s) => caseStudies.find((c) => c.slug === s)).filter((c): c is (typeof caseStudies)[number] => !!c)
  return (
    <ApplePage className="vpr">
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Pricing", "/pricing"]])} />
      <JsonLd data={faqLd(FAQ)} />
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Service", name: "Velora Studio", description: STUDIO.promise, provider: { "@type": "Organization", name: STUDIO.name, url: STUDIO.url },
        offers: [
          { "@type": "Offer", name: "Landing Page", price: "1200", priceCurrency: "EUR", url: `${STUDIO.url}/pricing` },
          { "@type": "Offer", name: "Launch", priceSpecification: { "@type": "PriceSpecification", minPrice: "14900", priceCurrency: "EUR" }, url: `${STUDIO.url}/pricing` },
          { "@type": "Offer", name: "Design Partner", price: "5900", priceCurrency: "EUR", url: `${STUDIO.url}/pricing` },
        ],
      }} />

      <header className="vc-head">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <span className="vc-mark"><img src="/logo/logo-v.svg" alt="" className="inv" /></span>
        <h1><b>Pricing.</b> Three ways to start, from one page this week to a team on hand every week.</h1>
        <p>Every plan is designed and built by the person you talk to. Prices are fixed before we start, and the work ships on the date we plan back from.</p>
      </header>

      <div className="vpr-wrap">
        <section className="vpr-plans">
          {PLANS.map((p) => (
            <article key={p.name} className={p.name === "Launch" ? "lead" : ""}>
              <i aria-hidden><p.icon size={18} weight="Filled" /></i>
              <h2>{p.name}</h2>
              <p className="vpr-line">{p.line}</p>
              <p className="vpr-price">{p.from && <small>from </small>}{p.price}{p.per && <small> {p.per}</small>}</p>
              <p className="vpr-when">{p.when}{p.note && <> · {p.note}</>}</p>
              <ul>{p.items.map((t) => <li key={t}><Check />{t}</li>)}</ul>
              <a href={STUDIO.book} {...ext} className={`va-pill ${p.name === "Launch" ? "" : "ghost"}`}>Book an intro call</a>
            </article>
          ))}
        </section>

        <section className="vpr-perks">
          <div><i aria-hidden><Gift size={16} weight="Filled" /></i><p><b>Referrals</b> get 10% off a month, for both sides.</p></div>
          <div><i aria-hidden><Star size={16} weight="Filled" /></i><p><b>YC, Antler and a16z speedrun</b> companies get 10% off.</p></div>
        </section>

        <section className="vpr-sec">
          <div className="vpr-head"><h2>Work that shows it.</h2><Link href="/#work">All work</Link></div>
          <div className="vpr-work">
            {work.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="vpr-cover"><img src={c.cover} alt={`${c.title} case study`} loading="lazy" decoding="async" /></span>
                <b>{c.title}</b><span>{c.date}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="vpr-sec">
          <div className="vpr-head"><h2>Questions.</h2></div>
          <div className="vpr-faq">
            {FAQ.map(([q, a]) => <details key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>)}
          </div>
        </section>

        <section className="vpr-end" data-own-cta>
          <h2>Got a launch coming up?</h2>
          <p>Tell us what you&apos;re building and when it needs to ship. We set the plan together on a short call.</p>
          <div className="vpr-ctas">
            <a href={STUDIO.book} {...ext} className="va-pill"><Calendar size={16} weight="Filled" />Book an intro call</a>
            <a href="https://t.me/vukmz" {...ext} className="va-pill ghost vn-chat"><Telegram />Chat</a>
          </div>
        </section>
      </div>
    </ApplePage>
  )
}
