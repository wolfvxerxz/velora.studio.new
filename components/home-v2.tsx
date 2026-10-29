"use client"
// The homepage: light and calm, Hex's order (promise, proof, problem, work, process, pricing, questions)
// in Acctual's manner (paper ground, black pills, soft cards, real deliverables on the desk around the hero).
import Link from "next/link"
import Image from "next/image"
import type { CaseStudy } from "@/lib/case-studies"
import { Reveal } from "@/components/reveal"

const book = "https://cal.com/vuk-m/15min"
const pad = (n: number) => String(n).padStart(2, "0")

const PLANS = [
  { name: "Audit", price: "€2,500", unit: "one-off", line: "A clear view of your product, site and brand, and what to fix first. Credited to your first month or project.", items: ["One week", "Product, site and brand reviewed", "Prioritised fix list", "Walkthrough call"], cta: "Book an audit" },
  { name: "Launch", price: "€14,900", unit: "from", line: "Brand, app and landing page shipped as one system, planned back from your date.", items: ["4–6 weeks", "Brand identity and brand book", "App core flows, web or iOS", "Landing page with the live product", "Case study and launch posts"], cta: "Book a launch call", hot: true },
  { name: "Design Partner", price: "€5,900", unit: "/month", line: "A senior team for teams that ship every week.", items: ["Unlimited requests", "2–3 updates a week", "Next.js development", "Slack or WhatsApp", "Pause or cancel anytime"], cta: "Start a partnership" },
]

const PROBLEMS = [
  { tag: "Scattered", color: "#3B6BFF", title: "Three people, three looks.", body: "The brand, the app and the site come from different hands at different times, and investors can tell." },
  { tag: "Template", color: "#DD3507", title: "It looks like everyone else.", body: "AI made the template free. A site that could belong to any startup tells buyers nothing about yours." },
  { tag: "Late", color: "#0E9F6E", title: "Design ships after the date.", body: "The raise, demo day or launch comes first, and the product shows up looking unfinished." },
]

const STEPS = [
  { n: "01", title: "A 15-minute call", body: "You tell us the date. We tell you what fits before it and what it costs." },
  { n: "02", title: "Brand on real screens", body: "Every direction is shown on your app and your landing hero, so you judge it where it will live." },
  { n: "03", title: "Product and site together", body: "Core flows and the landing page are designed as one system and built in Next.js." },
  { n: "04", title: "Launch and tell people", body: "A case study and launch posts go out with it, so the work brings in the next round of attention." },
]

const FOR = [
  ["AI and agents", "/industries/ai-startups", "Interfaces that show what the AI did and what still needs a person."],
  ["Fintech", "/industries/fintech", "Trading, investing and payments that feel simple and safe."],
  ["Developer tools", "/industries/developer-tools", "Consoles and launch pages developers actually like."],
  ["Web3 and crypto", "/industries/web3", "Products that feel as solid as a bank."],
  ["SaaS", "/industries/saas", "From the first visit to the dashboard teams open every day."],
  ["Consumer apps", "/industries/consumer-apps", "Playful, accessible apps people open because they want to."],
]

const FAQ: [string, string][] = [
  ["How fast can you start?", "Usually within a week. Launch work is planned back from your date on the first call."],
  ["What does a Launch include?", "Brand identity and brand book, the app's core flows on web or iOS, a landing page with the live product, a case study and launch posts."],
  ["Do you also build?", "Yes. We build in Next.js, or in Framer and Webflow when your team wants to edit pages without code."],
  ["Who will I work with?", "Senior designers who design and build. No account managers and no hand-offs."],
  ["Can I pause the partnership?", "Yes, anytime, and you can come back for a single month later."],
]

const featured = ["moss", "atlas", "junction", "nightshift"]

export default function HomeV2({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const feat = featured.map((s) => withPages.find((c) => c.slug === s)).filter(Boolean) as CaseStudy[]
  const rest = withPages.filter((c) => !featured.includes(c.slug))
  const quotes = caseStudies.filter((c) => c.testimonial)
  const lead = caseStudies.find((c) => c.slug === "extsy")?.testimonial
  const byLogo = withPages.filter((c) => c.logo)

  return (
    <div className="vh">
      <a href={book} target="_blank" rel="noopener noreferrer" className="vh-ann">2 Launch spots open in November <span aria-hidden>→</span></a>

      <header className="vh-nav">
        <div className="vh-in vh-nav-in">
          <Link href="/" className="vh-logo" aria-label="Velora Studio home">
            <Image src="/logo/logo-v.svg" alt="" width={24} height={24} className="vh-logo-mark" priority />
            <span>velora</span>
          </Link>
          <nav className="vh-links">
            <a href="#work">Work</a><Link href="/services">Services</Link><a href="#pricing">Pricing</a><Link href="/blog">Blog</Link>
          </nav>
          <div className="vh-nav-r">
            <a href="#pricing" className="vh-text-btn">See pricing</a>
            <a href={book} target="_blank" rel="noopener noreferrer" className="vh-btn">Book a call</a>
          </div>
        </div>
      </header>

      {/* Hero: the promise, with real deliverables on the desk around it */}
      <section className="vh-hero">
        <div className="vh-prop vh-prop-l" aria-hidden>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/case/Moss/brand-mark.webp" alt="" /></div>
        <div className="vh-prop vh-prop-r" aria-hidden>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/case/YouSpot/mark.webp" alt="" /></div>
        <div className="vh-prop vh-prop-r2" aria-hidden>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/case/Moss/brand-headline.webp" alt="" /></div>
        <div className="vh-in vh-hero-in">
          <span className="vh-chip">Brand, product and launch studio</span>
          <h1 className="vh-h1">Launch like you&apos;ve<br />already raised</h1>
          <p className="vh-lead">Brand, app and landing page for funded AI and fintech startups, designed as one system and shipped before your raise or launch date.</p>
          <div className="vh-cta">
            <a href={book} target="_blank" rel="noopener noreferrer" className="vh-btn vh-btn-lg">Book a 15-minute call</a>
            <a href="#work" className="vh-btn vh-btn-lg vh-btn-ghost">See the work</a>
          </div>
          <ul className="vh-checks">
            <li><Tick />Audit €2,500</li><li><Tick />Launch in 4–6 weeks</li><li><Tick />Partner €5,900/mo</li>
          </ul>
        </div>

        {/* The deliverable sheet, like a project invoice */}
        <div className="vh-in vh-sheet-wrap">
          <div className="vh-sheet vh-sheet-back" aria-hidden />
          <div className="vh-sheet">
            <div className="vh-sheet-top">
              <div><span className="vh-k">Project</span><b>Moss · Launch</b></div>
              <div><span className="vh-k">Timeline</span><b>5 weeks</b></div>
              <div><span className="vh-k">Shipped</span><b>Oct 2026</b></div>
            </div>
            <div className="vh-sheet-parties">
              <div><span className="vh-k">From</span><p><Image src="/logo/logo-v.svg" alt="" width={18} height={18} className="vh-logo-mark" /> Velora Studio</p></div>
              <div><span className="vh-k">To</span><p>{/* eslint-disable-next-line @next/next/no-img-element */}<img src="/icons/client-logos/Moss.svg" alt="" width={18} height={18} /> Moss</p></div>
            </div>
            <table className="vh-sheet-t">
              <thead><tr><th>Deliverable</th><th>Detail</th><th>Status</th></tr></thead>
              <tbody>
                {[["Brand identity", "Pixel sprout mark, colour, type, 16-board brand book"], ["Dashboard", "Branches, Rewind, Ask, Usage, light and dark"], ["Landing page", "Live product inside, channel-change loader"], ["Pricing and changelog", "Two more pages in the same system"], ["Case study and posts", "4-image X packs and a 33-second film"]].map(([a, b]) => (
                  <tr key={a}><td>{a}</td><td>{b}</td><td><span className="vh-done">Shipped</span></td></tr>
                ))}
              </tbody>
            </table>
            <a href="/work/moss" className="vh-sheet-link">Open the full case <span aria-hidden>→</span></a>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="vh-logos">
        <p>Shipped with {withPages.length} startups across AI, fintech and developer tools</p>
        <div className="vh-logo-row">
          {byLogo.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="vh-logo-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} alt="" width={22} height={22} />{c.title}
            </Link>
          ))}
        </div>
      </section>

      {lead && (
        <Reveal as="section" className="vh-in vh-quote">
          <div className="vh-stars" aria-label="5 stars">★★★★★</div>
          <blockquote>“{lead.quote}”</blockquote>
          <p>{lead.name}, {lead.role}</p>
        </Reveal>
      )}

      {/* Who it's for */}
      <Reveal as="section" className="vh-in vh-sec">
        <h2 className="vh-h2">Built for teams with a date<br />they can&apos;t move</h2>
        <div className="vh-grid3">
          {FOR.map(([t, href, b]) => (
            <Link key={t} href={href} className="vh-card vh-card-link">
              <b>{t}</b><span>{b}</span>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* The problem */}
      <Reveal as="section" className="vh-in vh-sec">
        <h2 className="vh-h2">Most startups launch looking<br />like three different companies</h2>
        <div className="vh-grid3">
          {PROBLEMS.map((p) => (
            <div key={p.tag} className="vh-prob">
              <span style={{ color: p.color }}>{p.tag}</span>
              <b>{p.title}</b>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Work, Hex-style rows */}
      <section id="work" className="vh-in vh-sec">
        <Reveal><h2 className="vh-h2">One system, from the mark<br />to the launch post</h2></Reveal>
        <div className="vh-work">
          {feat.map((c, i) => (
            <Reveal key={c.slug} className={`vh-row ${i % 2 ? "flip" : ""}`}>
              <div className="vh-row-t">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt="" width={32} height={32} className="vh-row-logo" />
                <h3>{c.title}</h3>
                <p className="vh-row-tag">{c.tagline}</p>
                <p className="vh-row-p">{c.description}</p>
                <div className="vh-row-chips">{c.services?.map((s) => <span key={s}>{s}</span>)}</div>
                <Link href={`/work/${c.slug}`} className="vh-btn vh-btn-ghost">Read the case</Link>
              </div>
              <Link href={`/work/${c.slug}`} className="vh-row-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.cover} alt={`${c.title} case study`} loading="lazy" />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="vh-more">
          {rest.map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="vh-more-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.cover} alt={`${c.title} case study`} loading="lazy" />
              <b>{c.title}</b><span>{c.tagline}</span>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* How it works */}
      <Reveal as="section" className="vh-in vh-sec">
        <h2 className="vh-h2">How a launch runs</h2>
        <div className="vh-steps">
          {STEPS.map((s) => (
            <div key={s.n} className="vh-card"><span className="vh-n">{s.n}</span><b>{s.title}</b><span>{s.body}</span></div>
          ))}
        </div>
      </Reveal>

      {/* Pricing */}
      <section id="pricing" className="vh-in vh-sec">
        <Reveal><h2 className="vh-h2">Three ways to start</h2><p className="vh-sub">Start small with an audit, ship everything at once with a Launch, or keep a senior team on hand every week.</p></Reveal>
        <Reveal className="vh-plans">
          {PLANS.map((p) => (
            <div key={p.name} className={`vh-plan ${p.hot ? "hot" : ""}`}>
              <div className="vh-plan-h"><b>{p.name}</b>{p.hot && <span className="vh-chip vh-chip-hot">2 spots in Nov</span>}</div>
              <p className="vh-price">{p.unit === "from" && <small>from </small>}{p.price}{p.unit !== "from" && <small> {p.unit}</small>}</p>
              <p className="vh-plan-line">{p.line}</p>
              <ul>{p.items.map((x) => <li key={x}><Tick />{x}</li>)}</ul>
              <a href={book} target="_blank" rel="noopener noreferrer" className={`vh-btn ${p.hot ? "" : "vh-btn-ghost"}`}>{p.cta}</a>
            </div>
          ))}
        </Reveal>
        <p className="vh-fine">Referrals get 10% off a month for both sides. YC, Antler and a16z speedrun companies get 10% off. <Link href="/pricing">Full pricing</Link></p>
      </section>

      {/* More voices */}
      <Reveal as="section" className="vh-in vh-sec">
        <h2 className="vh-h2">What founders say</h2>
        <div className="vh-voices">
          {quotes.slice(0, 6).map((c) => (
            <figure key={c.slug} className="vh-card">
              <blockquote>“{c.testimonial!.quote}”</blockquote>
              <figcaption><b>{c.testimonial!.name}</b> {c.testimonial!.role}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      {/* FAQ */}
      <Reveal as="section" className="vh-in vh-sec vh-faq-wrap">
        <h2 className="vh-h2">Questions</h2>
        <div className="vh-faq">
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>
          ))}
        </div>
      </Reveal>

      {/* Closing */}
      <section className="vh-in vh-end">
        <h2 className="vh-h1 vh-end-h">Got a launch coming up?</h2>
        <p className="vh-lead">Tell us the date. We&apos;ll plan back from it on a 15-minute call.</p>
        <a href={book} target="_blank" rel="noopener noreferrer" className="vh-btn vh-btn-lg">Book a 15-minute call</a>
      </section>

      <footer className="vh-foot">
        <div className="vh-in vh-foot-in">
          <div className="vh-foot-brand">
            <Link href="/" className="vh-logo"><Image src="/logo/logo-v.svg" alt="" width={22} height={22} className="vh-logo-mark" /><span>velora</span></Link>
            <p>Brand, product and launch for funded AI and fintech startups.</p>
          </div>
          {[
            ["Studio", [["Work", "#work"], ["Pricing", "/pricing"], ["Blog", "/blog"], ["Book a call", book]]],
            ["Services", [["Brand identity", "/services/brand-identity"], ["Product design", "/services/product-design"], ["Websites", "/services/website-design"], ["Design partner", "/services/design-subscription"], ["All services", "/services"]]],
            ["For", [["AI startups", "/industries/ai-startups"], ["Fintech", "/industries/fintech"], ["Developer tools", "/industries/developer-tools"], ["Web3", "/industries/web3"], ["Glossary", "/glossary"]]],
            ["Elsewhere", [["X", "https://x.com/veloraxstudio"], ["LinkedIn", "https://www.linkedin.com/company/velorastudio/"], ["Instagram", "https://www.instagram.com/studio.velora/"]]],
          ].map(([h, ls]) => (
            <div key={h as string} className="vh-foot-c"><b>{h as string}</b>{(ls as string[][]).map(([t, href]) => <a key={t} href={href}>{t}</a>)}</div>
          ))}
        </div>
        <p className="vh-in vh-copy">velora.studio · © 2026 · {pad(withPages.length)} case studies</p>
      </footer>
    </div>
  )
}

function Tick() {
  return <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="vh-tick"><circle cx="8" cy="8" r="8" /><path d="M4.5 8.2l2.2 2.2 4.8-4.8" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
