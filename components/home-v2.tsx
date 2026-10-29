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

const CAPS = [
  { n: "01", t: "Brand", href: "/services/brand-identity", items: ["Logo and wordmark", "Colour, type and texture", "Brand book", "Launch visuals"] },
  { n: "02", t: "Product", href: "/services/product-design", items: ["Core flows", "Dashboards", "iOS and web apps", "Design systems"] },
  { n: "03", t: "Web", href: "/services/website-design", items: ["Landing pages", "Pricing and changelog", "SEO and AI search", "Next.js, Framer, Webflow"] },
  { n: "04", t: "Motion", href: "/services/mvp-design", items: ["Logo animation", "Product films", "Loaders and transitions", "Launch posts"] },
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

      {/* Hero: who we are in one line, then the work itself, moving */}
      <section className="vh-hero">
        <div className="vh-in vh-hero-in">
          <span className="vh-avail"><i aria-hidden />Booking November · 2 launch spots</span>
          <h1 className="vh-h1">An independent design studio for startups that want to look like the category leader.</h1>
          <div className="vh-hero-row">
            <p className="vh-lead">We design the brand, the product and the launch as one system, build it in Next.js, and plan it back from your raise or launch date. Atlas, Junction, Nightshift and Moss are a few of the things we made this year.</p>
            <div className="vh-cta">
              <a href={book} target="_blank" rel="noopener noreferrer" className="vh-btn vh-btn-lg">Book a 15-minute call</a>
              <a href="#work" className="vh-link">See the work <span aria-hidden>↓</span></a>
            </div>
          </div>
        </div>
        <WorkWall />
      </section>

      {/* Proof */}
      <section className="vh-logos">
        <p>Selected clients</p>
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

      {/* What we make */}
      <Reveal as="section" className="vh-in vh-sec">
        <div className="vh-sec-h"><h2 className="vh-h2">What we make</h2><Link href="/services" className="vh-link">All services <span aria-hidden>→</span></Link></div>
        <div className="vh-caps">
          {CAPS.map((c) => (
            <Link key={c.t} href={c.href} className="vh-cap">
              <span className="vh-n">{c.n}</span>
              <b>{c.t}</b>
              <ul>{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </Link>
          ))}
        </div>
        <p className="vh-for">For founders in {FOR.map(([t, href], i) => <span key={t}><Link href={href}>{t}</Link>{i < FOR.length - 2 ? ", " : i === FOR.length - 2 ? " and " : "."}</span>)}</p>
      </Reveal>

      {/* Work: big tiles, the way a studio shows it */}
      <section id="work" className="vh-in vh-sec">
        <Reveal className="vh-sec-h"><h2 className="vh-h2">Selected work</h2><span className="vh-count">{pad(withPages.length)} projects</span></Reveal>
        <div className="vh-tiles">
          {[...feat, ...rest].map((c, i) => (
            <Reveal key={c.slug} className={`vh-tile ${i < 2 ? "big" : ""}`}>
              <Link href={`/work/${c.slug}`} className="vh-tile-a">
                <div className="vh-tile-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.cover} alt={`${c.title} case study`} loading="lazy" />
                </div>
                <div className="vh-tile-t">
                  <b>{c.title}</b>
                  <span>{c.tagline}</span>
                  <em>{c.services?.join(" · ")}</em>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* A launch, itemised */}
      <section className="vh-in vh-sec vh-launch">
        <Reveal className="vh-launch-t">
          <h2 className="vh-h2">What a launch looks like</h2>
          <p className="vh-sub">Moss went from a name to a brand, a dashboard, a landing page and a case study in five weeks. Every launch is planned the same way, back from your date.</p>
          <ol className="vh-steps-l">{STEPS.map((s) => <li key={s.n}><span className="vh-n">{s.n}</span><b>{s.title}</b><span>{s.body}</span></li>)}</ol>
        </Reveal>
        <Reveal className="vh-sheet-wrap">
          <div className="vh-sheet vh-sheet-back" aria-hidden />
          <div className="vh-sheet">
            <div className="vh-sheet-top">
              <div><span className="vh-k">Project</span><b>Moss · Launch</b></div>
              <div><span className="vh-k">Timeline</span><b>5 weeks</b></div>
            </div>
            <table className="vh-sheet-t">
              <tbody>
                {[["Brand identity", "Mark, colour, type, 16-board brand book"], ["Dashboard", "Branches, Rewind, Ask, Usage, light and dark"], ["Landing page", "Live product inside, channel-change loader"], ["Pricing and changelog", "Two more pages, same system"], ["Case study and posts", "X packs and a 33-second film"]].map(([a, b]) => (
                  <tr key={a}><td>{a}<span>{b}</span></td><td><span className="vh-done">Shipped</span></td></tr>
                ))}
              </tbody>
            </table>
            <a href="/work/moss" className="vh-sheet-link">Open the Moss case <span aria-hidden>→</span></a>
          </div>
        </Reveal>
      </section>

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

// A slow, endless wall of real work: films and posters straight from the case studies.
const WALL: [string, "v" | "i", "w" | "t"][][] = [
  [["/case/Moss/brand-cover.webp", "i", "t"], ["/case/Atlas/hero.mp4", "v", "w"], ["/case/YouSpot/network.mp4", "v", "t"], ["/case/Junction/2.webp", "i", "w"], ["/case/Moss/brand-osd.webp", "i", "t"], ["/case/Nightshift/token.mp4", "v", "w"], ["/case/YouSpot/mark.webp", "i", "t"], ["/case/Moss/3.webp", "i", "w"]],
  [["/case/Junction/patterns.mp4", "v", "w"], ["/case/Moss/brand-mark.webp", "i", "t"], ["/case/Nightshift/2.webp", "i", "w"], ["/case/YouSpot/radar.mp4", "v", "t"], ["/case/Atlas/funding.mp4", "v", "w"], ["/case/Moss/brand-headline.webp", "i", "t"], ["/case/Atlas/5.webp", "i", "w"], ["/case/YouSpot/card.mp4", "v", "t"]],
]
function WorkWall() {
  return (
    <div className="vh-wall" aria-label="Recent work">
      {WALL.map((row, r) => (
        <div key={r} className={`vh-wall-row ${r ? "rev" : ""}`}>
          {[...row, ...row].map(([src, kind, shape], i) => (
            <div key={i} className={`vh-wall-tile ${shape}`} aria-hidden={i >= row.length}>
              {kind === "v"
                ? <video src={src} autoPlay loop muted playsInline preload="metadata" />
                // eslint-disable-next-line @next/next/no-img-element
                : <img src={src} alt="" loading={i < 3 ? "eager" : "lazy"} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function Tick() {
  return <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden className="vh-tick"><circle cx="8" cy="8" r="8" /><path d="M4.5 8.2l2.2 2.2 4.8-4.8" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
}
