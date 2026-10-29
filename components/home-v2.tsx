"use client"
// The homepage in Cal.com's manner: a grey ground with guide lines, a floating nav, white cards that hold
// the real thing (a booking calendar, the work, the plans) and solid icons throughout.
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import type { CaseStudy } from "@/lib/case-studies"
import { Reveal } from "@/components/reveal"
import {
  PiArrowRightBold, PiArrowUpRightBold, PiCaretLeftBold, PiCaretRightBold, PiCheckCircleFill, PiClockFill, PiCodeFill,
  PiDeviceMobileFill, PiFilmStripFill, PiGlobeFill, PiLightningFill, PiMagnifyingGlassFill, PiPaletteFill, PiPauseCircleFill,
  PiPenNibFill, PiPlusBold, PiRocketLaunchFill, PiSquaresFourFill, PiVideoCameraFill, PiChatsCircleFill,
} from "react-icons/pi"

const book = "https://cal.com/vuk-m/15min"
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

const PLANS = [
  { name: "Audit", price: "€2,500", unit: "one-off", line: "A clear view of your product, site and brand, and what to fix first. Credited to your first month or project.", items: ["One week", "Product, site and brand reviewed", "Prioritised fix list", "Walkthrough call"], cta: "Book an audit" },
  { name: "Launch", price: "€14,900", unit: "from", line: "Brand, app and landing page shipped as one system, planned back from your date.", items: ["4–6 weeks", "Brand identity and brand book", "App core flows, web or iOS", "Landing page with the live product", "Case study and launch posts"], cta: "Book a launch call", hot: true },
  { name: "Design Partner", price: "€5,900", unit: "/month", line: "A senior team for teams that ship every week.", items: ["Unlimited requests", "2–3 updates a week", "Next.js development", "Slack or WhatsApp", "Pause or cancel anytime"], cta: "Start a partnership" },
]

const FEATURES = [
  { icon: PiPenNibFill, t: "Brand identity", d: "Mark, wordmark, colour, type and texture.", href: "/services/brand-identity" },
  { icon: PiSquaresFourFill, t: "Brand book", d: "Every rule on one set of boards your team can use." },
  { icon: PiDeviceMobileFill, t: "Product design", d: "Core flows and dashboards for web and iOS.", href: "/services/product-design" },
  { icon: PiPaletteFill, t: "Design systems", d: "Components and tokens, light and dark." },
  { icon: PiGlobeFill, t: "Landing pages", d: "The live product inside, not a mock-up.", href: "/services/website-design" },
  { icon: PiCodeFill, t: "Built in Next.js", d: "Or Framer and Webflow when your team edits." },
  { icon: PiMagnifyingGlassFill, t: "SEO and AI search", d: "Pages Google and assistants can read and cite." },
  { icon: PiFilmStripFill, t: "Motion and films", d: "Logo animation, loaders and product films." },
  { icon: PiRocketLaunchFill, t: "Launch posts", d: "X packs and a case study, ready on the day." },
]

const FOR = [
  ["AI and agents", "/industries/ai-startups"], ["Fintech", "/industries/fintech"], ["Developer tools", "/industries/developer-tools"],
  ["Web3 and crypto", "/industries/web3"], ["SaaS", "/industries/saas"], ["Consumer apps", "/industries/consumer-apps"],
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
  const byLogo = withPages.filter((c) => c.logo)
  const rail = useRef<HTMLDivElement>(null)
  const slide = (d: number) => rail.current?.scrollBy({ left: d * 420, behavior: "smooth" })

  return (
    <div className="vc">
      <header className="vc-nav">
        <div className="vc-nav-in">
          <Link href="/" className="vc-logo" aria-label="Velora Studio home">
            <Image src="/logo/logo-v.svg" alt="" width={22} height={22} className="vc-logo-mark" priority />
            <span>velora</span>
          </Link>
          <nav className="vc-links">
            <a href="#work">Work</a><Link href="/services">Services</Link><a href="#pricing">Pricing</a><Link href="/blog">Blog</Link>
          </nav>
          <a href={book} {...ext} className="vc-btn vc-btn-sm">Book a call <PiCaretRightBold /></a>
        </div>
      </header>

      {/* Hero: the promise on the left, the real booking calendar on the right */}
      <section className="vc-in">
        <div className="vc-hero">
          <div className="vc-hero-t">
            <a href={book} {...ext} className="vc-pill"><i aria-hidden />2 launch spots open in November <PiArrowRightBold /></a>
            <h1 className="vc-h1">The design studio behind category leaders</h1>
            <p className="vc-lead">Brand, product and launch for funded AI and fintech startups, designed as one system, built in Next.js and planned back from your date.</p>
            <div className="vc-cta">
              <a href={book} {...ext} className="vc-btn vc-btn-lg"><PiVideoCameraFill /> Book a 15-minute call</a>
              <a href="#work" className="vc-btn vc-btn-lg vc-btn-ghost">See the work</a>
            </div>
            <p className="vc-note">From €2,500 · Credited to your first project</p>
          </div>
          <Booking />
        </div>
        <div className="vc-trust">
          <p>Trusted by founders building</p>
          <div className="vc-trust-row">
            {byLogo.map((c) => (
              <Link key={c.slug} href={`/work/${c.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt="" width={22} height={22} />{c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="vc-in vc-sec">
        <Head title="Work that ships before the date" sub="Brands, products and launch pages for startups raising, launching or standing out in a crowded category." />
        <div className="vc-work">
          {[...feat, ...rest].map((c, i) => (
            <Reveal key={c.slug} className={`vc-card vc-tile ${i < 2 ? "big" : ""}`}>
              <Link href={`/work/${c.slug}`}>
                <div className="vc-tile-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.cover} alt={`${c.title} case study`} loading="lazy" />
                </div>
                <div className="vc-tile-t">
                  <div><b>{c.title}</b><span>{c.tagline}</span></div>
                  <span className="vc-round" aria-hidden><PiArrowUpRightBold /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="vc-in vc-sec">
        <Head title="With us, a launch is simple" sub="One team, one system and one date to plan back from." cta />
        <div className="vc-steps">
          <Reveal className="vc-card vc-step">
            <h3>Book a 15-minute call</h3>
            <p>Tell us the date. We tell you what fits before it and what it costs.</p>
            <div className="vc-step-v vc-slots">
              {["9:00", "10:30", "13:00", "15:30"].map((t, i) => <span key={t} className={i === 1 ? "on" : ""}><PiClockFill />{t}</span>)}
            </div>
          </Reveal>
          <Reveal className="vc-card vc-step">
            <h3>See the brand on real screens</h3>
            <p>Every direction is shown on your app and landing hero, where it will live.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="vc-step-v"><img src="/case/Moss/brand-product-light.webp" alt="Moss brand shown on its dashboard" loading="lazy" /></div>
          </Reveal>
          <Reveal className="vc-card vc-step">
            <h3>Launch and tell people</h3>
            <p>Product, site, case study and launch posts go out together on your date.</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="vc-step-v"><img src="/case/Moss/brand-cover.webp" alt="Moss launch visual" loading="lazy" /></div>
          </Reveal>
        </div>
      </section>

      {/* Everything a launch needs */}
      <section className="vc-in vc-sec">
        <Head title="Everything a launch needs" sub="Brand, product, web and motion from one senior team, so nothing looks like it came from someone else." />
        <div className="vc-feats">
          {FEATURES.map(({ icon: Icon, t, d, href }) => {
            const inner = <><span className="vc-ico"><Icon /></span><b>{t}</b><span>{d}</span></>
            return href
              ? <Link key={t} href={href} className="vc-card vc-feat link">{inner}</Link>
              : <div key={t} className="vc-card vc-feat">{inner}</div>
          })}
        </div>
        <div className="vc-for">
          {FOR.map(([t, href]) => <Link key={t} href={href}>{t}</Link>)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="vc-sec">
        <div className="vc-in"><Head title="Don't just take our word for it" sub="Founders on what it was like to ship with us." /></div>
        <div className="vc-rail" ref={rail}>
          {quotes.map((c) => (
            <figure key={c.slug} className="vc-card vc-quote">
              <blockquote>“{c.testimonial!.quote}”</blockquote>
              <figcaption>
                {c.logo
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={c.logo} alt="" width={36} height={36} />
                  : <span className="vc-ava">{c.testimonial!.name[0]}</span>}
                <span><b>{c.testimonial!.name}</b>{c.testimonial!.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="vc-rail-nav">
          <button onClick={() => slide(-1)} aria-label="Previous"><PiCaretLeftBold /></button>
          <button onClick={() => slide(1)} aria-label="Next"><PiCaretRightBold /></button>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="vc-in vc-sec">
        <Head title="Three ways to start" sub="Start with an audit, ship everything at once, or keep a senior team on hand every week." />
        <div className="vc-plans">
          {PLANS.map((p) => (
            <div key={p.name} className={`vc-card vc-plan ${p.hot ? "hot" : ""}`}>
              <div className="vc-plan-h"><b>{p.name}</b>{p.hot && <span className="vc-tag"><PiLightningFill />2 spots in Nov</span>}</div>
              <p className="vc-price">{p.unit === "from" && <small>from </small>}{p.price}{p.unit !== "from" && <small> {p.unit}</small>}</p>
              <p className="vc-plan-line">{p.line}</p>
              <a href={book} {...ext} className={`vc-btn vc-btn-lg ${p.hot ? "" : "vc-btn-ghost"}`}>{p.cta}</a>
              <ul>{p.items.map((x) => <li key={x}><PiCheckCircleFill />{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="vc-perks">
          <span><PiChatsCircleFill />Referrals get 10% off a month for both sides</span>
          <span><PiRocketLaunchFill />YC, Antler and a16z speedrun companies get 10% off</span>
          <span><PiPauseCircleFill />Pause or cancel the partnership anytime</span>
        </div>
      </section>

      {/* FAQ */}
      <section className="vc-in vc-sec">
        <Head title="Questions" />
        <div className="vc-card vc-faq">
          {FAQ.map(([q, a]) => (
            <details key={q}><summary>{q}<span aria-hidden><PiPlusBold /></span></summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="vc-in vc-sec">
        <div className="vc-card vc-end">
          <h2 className="vc-h2">Got a launch coming up?</h2>
          <p className="vc-sub">Tell us the date. We&apos;ll plan back from it on a 15-minute call.</p>
          <div className="vc-cta">
            <a href={book} {...ext} className="vc-btn vc-btn-lg"><PiVideoCameraFill /> Book a 15-minute call</a>
            <Link href="/pricing" className="vc-btn vc-btn-lg vc-btn-ghost">Full pricing</Link>
          </div>
        </div>
      </section>

      <footer className="vc-in vc-foot">
        <div className="vc-foot-brand">
          <Link href="/" className="vc-logo"><Image src="/logo/logo-v.svg" alt="" width={22} height={22} className="vc-logo-mark" /><span>velora</span></Link>
          <p>Brand, product and launch for funded AI and fintech startups.</p>
        </div>
        {[
          ["Studio", [["Work", "#work"], ["Pricing", "/pricing"], ["Blog", "/blog"], ["Book a call", book]]],
          ["Services", [["Brand identity", "/services/brand-identity"], ["Product design", "/services/product-design"], ["Websites", "/services/website-design"], ["Design partner", "/services/design-subscription"], ["All services", "/services"]]],
          ["For", [["AI startups", "/industries/ai-startups"], ["Fintech", "/industries/fintech"], ["Developer tools", "/industries/developer-tools"], ["Web3", "/industries/web3"], ["Glossary", "/glossary"]]],
          ["Elsewhere", [["X", "https://x.com/veloraxstudio"], ["LinkedIn", "https://www.linkedin.com/company/velorastudio/"], ["Instagram", "https://www.instagram.com/studio.velora/"]]],
        ].map(([h, ls]) => (
          <div key={h as string} className="vc-foot-c"><b>{h as string}</b>{(ls as string[][]).map(([t, href]) => <a key={t} href={href}>{t}</a>)}</div>
        ))}
        <p className="vc-copy">velora.studio · © 2026</p>
      </footer>
    </div>
  )
}

function Head({ title, sub, cta }: { title: string; sub?: string; cta?: boolean }) {
  return (
    <Reveal className="vc-head">
      <h2 className="vc-h2">{title}</h2>
      {sub && <p className="vc-sub">{sub}</p>}
      {cta && (
        <div className="vc-cta">
          <a href={book} {...ext} className="vc-btn">Book a call <PiCaretRightBold /></a>
          <Link href="/services" className="vc-btn vc-btn-ghost">All services <PiCaretRightBold /></Link>
        </div>
      )}
    </Reveal>
  )
}

// The booking page itself, in miniature: November 2026 starts on a Sunday, weekdays from the 2nd are open.
function Booking() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  const isOpen = (d: number) => { const w = (d - 1) % 7; return d >= 2 && w !== 0 && w !== 6 }
  return (
    <a href={book} {...ext} className="vc-book" aria-label="Book a 15-minute call with Vuk">
      <div className="vc-book-l">
        <Image src="/images/pfp.jpg" alt="" width={28} height={28} className="vc-book-pfp" />
        <span className="vc-book-who">Vuk · Velora Studio</span>
        <b>Launch call</b>
        <p>Tell us what you&apos;re building and when it needs to ship.</p>
        <div className="vc-book-dur"><PiClockFill /><span className="on">15m</span><span>30m</span></div>
        <span className="vc-book-i"><PiVideoCameraFill />Google Meet</span>
        <span className="vc-book-i"><PiGlobeFill />Europe/Belgrade</span>
      </div>
      <div className="vc-book-r">
        <div className="vc-book-m"><b>November <span>2026</span></b><i><PiCaretLeftBold /><PiCaretRightBold /></i></div>
        <div className="vc-cal">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => <span key={d} className="wd">{d}</span>)}
          {days.map((d) => <span key={d} className={`${isOpen(d) ? "op" : ""} ${d === 4 ? "sel" : ""}`}>{d}</span>)}
        </div>
      </div>
    </a>
  )
}
