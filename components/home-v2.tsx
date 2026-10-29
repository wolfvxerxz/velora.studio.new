"use client"
// The homepage, written like a document: a white page, one column, plain type.
// Only what a founder needs to decide: the work, what clients say, and the price.
import Link from "next/link"
import Image from "next/image"
import type { CaseStudy } from "@/lib/case-studies"

const book = "https://cal.com/vuk-m/15min"
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

const PLANS = [
  { name: "Audit", price: "€2,500", unit: "one-off", line: "One week. Product, site and brand reviewed, with a prioritised fix list. Credited to your first project." },
  { name: "Launch", price: "from €14,900", unit: "4–6 weeks", line: "Brand and brand book, app core flows, landing page with the live product, case study and launch posts." },
  { name: "Design Partner", price: "€5,900", unit: "per month", line: "Unlimited requests, 2–3 updates a week, Next.js development. Pause or cancel anytime." },
]

const featured = ["moss", "atlas", "junction", "nightshift", "youspot"]

export default function HomeV2({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const work = [...featured.map((s) => withPages.find((c) => c.slug === s)).filter(Boolean) as CaseStudy[], ...withPages.filter((c) => !featured.includes(c.slug))]
  const quotes = ["extsy", "wayfind", "nordeus", "insforge", "subpay", "aether"].map((s) => caseStudies.find((c) => c.slug === s && c.testimonial)).filter(Boolean) as CaseStudy[]

  return (
    <div className="vd">
      <header className="vd-nav">
        <Link href="/" className="vd-logo" aria-label="Velora Studio home">
          <Image src="/logo/logo-v.svg" alt="" width={20} height={20} priority />velora
        </Link>
        <nav><a href="#work">Work</a><a href="#pricing">Pricing</a><a href={book} {...ext} className="vd-btn">Book a call</a></nav>
      </header>

      <main className="vd-col">
        <h1>A design studio for startups that want to look like the category leader</h1>
        <p className="vd-lead">We design the brand, the product and the launch as one system, build it in Next.js, and plan it back from your raise or launch date.</p>
        <p className="vd-cta"><a href={book} {...ext} className="vd-btn">Book a 15-minute call</a><a href="#pricing">See pricing</a></p>

        <section id="work">
          <h2>Work</h2>
          {work.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="vd-case">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.cover} alt={`${c.title} case study`} loading="lazy" />
              <p><b>{c.title}</b> {c.tagline}</p>
            </Link>
          ))}
        </section>

        <section>
          <h2>What founders say</h2>
          {quotes.map((c) => (
            <figure key={c.slug} className="vd-quote">
              <blockquote>{c.testimonial!.quote}</blockquote>
              <figcaption>{c.testimonial!.name}, {c.testimonial!.role}</figcaption>
            </figure>
          ))}
        </section>

        <section id="pricing">
          <h2>Pricing</h2>
          <table className="vd-table">
            <thead><tr><th>Plan</th><th>Price</th><th>What you get</th></tr></thead>
            <tbody>
              {PLANS.map((p) => (
                <tr key={p.name}><td><b>{p.name}</b></td><td>{p.price}<span>{p.unit}</span></td><td>{p.line}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="vd-note">Referrals get 10% off a month for both sides. YC, Antler and a16z speedrun companies get 10% off.</p>
          <p className="vd-cta"><a href={book} {...ext} className="vd-btn">Book a 15-minute call</a><Link href="/pricing">Full pricing</Link></p>
        </section>
      </main>

      <footer className="vd-foot">
        <span>velora.studio · © 2026</span>
        <nav>
          <Link href="/services">Services</Link><Link href="/blog">Blog</Link>
          <a href="https://x.com/veloraxstudio">X</a><a href="https://www.linkedin.com/company/velorastudio/">LinkedIn</a>
        </nav>
      </footer>
    </div>
  )
}
