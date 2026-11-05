"use client"
// The homepage, short as a note: one sentence on who we help, two ways to start, what founders say,
// the work, the price. Apple's type and blue, one narrow column.
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import type { CaseStudy } from "@/lib/case-studies"
import Image from "next/image"
import { Calendar, Category, Sparkles, TrendUp, Code, Mobile, ArrowLeft, ArrowRight, DocumentText, Rocket, User } from "reicon-react"

type IconType = typeof Calendar
const Icon = ({ i: I, size = 16 }: { i: IconType; size?: number }) => <I size={size} weight="Filled" aria-hidden />

const book = "https://cal.com/vuk-m/15min"
// Telegram's own mark: the white plane on its blue disc
const Telegram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><circle cx="12" cy="12" r="12" fill="#2AABEE" /><path fill="#fff" d="M5.4 11.8l10.9-4.2c.5-.2 1 .1.8.9l-1.9 8.8c-.1.6-.5.8-1 .5l-2.9-2.1-1.4 1.3c-.2.2-.3.3-.6.3l.2-2.9 5.3-4.8c.2-.2 0-.3-.3-.1l-6.6 4.1-2.8-.9c-.6-.2-.6-.6.1-.9Z" /></svg>
)
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

const PLANS = [
  { icon: DocumentText, name: "Landing Page", price: "€1,200", line: "One page that sells the product, in 1–2 weeks." },
  { icon: Rocket, name: "Launch", price: "from €14,900", line: "Brand, product and site as one system, in 4–6 weeks." },
  { icon: User, name: "Design Partner", price: "€5,900 / month", line: "A senior team every week, build included." },
]

const FILTERS: [string, string[]][] = [["All", []], ["AI", ["AI", "Agents"]], ["Fintech", ["Fintech", "Payments", "Trading", "Investing", "Crypto"]], ["Dev tools", ["Developer Tools", "Infrastructure", "DevOps", "Database", "Backend"]], ["Consumer", ["Consumer", "Mobile"]]]
const FILTER_ICONS: Record<string, IconType> = { All: Category, AI: Sparkles, Fintech: TrendUp, "Dev tools": Code, Consumer: Mobile }
const ORDER = ["streak", "kept", "moss", "atlas", "junction", "nightshift", "youspot"]
// Each recent case shows its live site's hero, recorded as it runs, so the work is visible without opening the case.
// They loop the whole time they're on screen.
const ALWAYS = new Set(["streak", "kept", "moss", "atlas", "junction", "nightshift", "youspot"])
const FILMS: Record<string, string> = { streak: "Streak", kept: "Kept", moss: "Moss", atlas: "Atlas", junction: "Junction", nightshift: "Nightshift", youspot: "YouSpot" }

export default function HomeV2({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const all = [...ORDER.map((s) => withPages.find((c) => c.slug === s)).filter(Boolean) as CaseStudy[], ...withPages.filter((c) => !ORDER.includes(c.slug))]
  const quotes = ["extsy", "wayfind", "nordeus", "subpay", "aether"].map((s) => caseStudies.find((c) => c.slug === s && c.testimonial)).filter(Boolean) as CaseStudy[]
  const [filter, setFilter] = useState("All")
  const tags = FILTERS.find(([f]) => f === filter)![1]
  const work = tags.length ? all.filter((c) => c.areas?.some((a) => tags.includes(a))) : all

  return (
    <div className="va vn-split">
      {/* left: who we are, then what founders say and what it costs, all in one screen */}
      <aside className="vn-side">
        <section className="vn-intro">
          <Link href="/" className="vn-mark" aria-label="Velora Studio"><Image src="/logo/logo-v.svg" alt="" width={18} height={18} priority /></Link>
          <h1>Velora Studio helps AI and fintech founders launch and raise with a brand, product and website that look as good as the idea.</h1>
          <p>We design and build all three as one system, so nothing feels stitched together. You work directly with the designer doing the work, and most launches ship in 4–6 weeks.</p>
          <div className="vn-ctas">
            <a href={book} {...ext} className="va-pill"><Icon i={Calendar} />Book an intro call</a>
            <a href="https://t.me/vukmz" {...ext} className="va-pill ghost vn-chat"><Telegram />Chat</a>
          </div>
        </section>

        <div className="vn-side-end">
          <Voices quotes={quotes} />
          <section id="pricing" aria-labelledby="pricing-h">
            <div className="vn-head"><h2 id="pricing-h">Pricing.</h2><Link href="/pricing" className="vn-more">All details</Link></div>
            <div className="vn-plans">
              {PLANS.map((p) => (
                <Link key={p.name} href="/pricing" className="vn-plan">
                  <i aria-hidden><Icon i={p.icon} /></i><b>{p.name}</b><span>{p.line}</span><em>{p.price}</em>
                </Link>
              ))}
            </div>
          </section>
          <nav className="vn-socials" aria-label="Velora elsewhere">
            <a href="https://x.com/veloraxstudio" {...ext}><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>X</a>
            <a href="https://www.linkedin.com/company/velorastudio/" {...ext}><svg width="15" height="15" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>LinkedIn</a>
            <a href="https://t.me/vukmz" {...ext}><svg width="15" height="15" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>Telegram</a>
          </nav>
        </div>
      </aside>

      {/* right: the work, scrolling past the fixed left side */}
      <main className="vn-main" id="work">
        <div className="vn-head">
          <h2>Work.</h2>
          <div className="va-seg" role="tablist" aria-label="Filter the work">
            {FILTERS.map(([f]) => <button key={f} role="tab" aria-selected={filter === f} className={filter === f ? "on" : ""} onClick={() => setFilter(f)}><Icon i={FILTER_ICONS[f]} />{f}</button>)}
          </div>
        </div>
        <div className="vn-grid" key={filter}>
          {work.map((c, i) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="vn-case">
              <div className="vn-media">
                {FILMS[c.slug]
                  ? <Film dir={FILMS[c.slug]} label={`${c.title} case study`} always={ALWAYS.has(c.slug)} />
                  // eslint-disable-next-line @next/next/no-img-element
                  : <img src={c.cover} alt={`${c.title} case study`} loading={i < 4 ? "eager" : "lazy"} decoding="async" />}
              </div>
              <p><b>{c.title}</b>{c.live ? <span className="vn-live">Live site</span> : <span>{c.date}</span>}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

// One founder at a time, stepped through with the arrows.
function Voices({ quotes }: { quotes: CaseStudy[] }) {
  const [i, setI] = useState(0)
  const q = quotes[i]
  return (
    <section id="voices">
      <div className="vn-head">
        <h2>Founders.</h2>
        <div className="vn-arrows">
          <button aria-label="Previous" onClick={() => setI((i - 1 + quotes.length) % quotes.length)}><Icon i={ArrowLeft} /></button>
          <button aria-label="Next" onClick={() => setI((i + 1) % quotes.length)}><Icon i={ArrowRight} /></button>
        </div>
      </div>
      <figure className="vn-quote" key={q.slug}>
        <blockquote>{q.testimonial!.quote}</blockquote>
        <figcaption>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {q.testimonial!.avatar && <img src={q.testimonial!.avatar} alt="" width={28} height={28} />}
          <span><b>{q.testimonial!.name}</b> {q.testimonial!.role}</span>
        </figcaption>
      </figure>
    </section>
  )
}

// A case film rests on its poster and plays while the tile is hovered. Without hover (phones), or when it always loops, it plays while in view.
function Film({ dir, label, always = false }: { dir: string; label: string; always?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current!, tile = v.closest("a")!
    const play = () => { v.play().catch(() => {}) }
    const stop = () => { v.pause(); v.load() } // load() puts the poster back instead of a paused frame
    if (!always && matchMedia("(hover: hover)").matches) {
      tile.addEventListener("mouseenter", play); tile.addEventListener("mouseleave", stop)
      tile.addEventListener("focus", play); tile.addEventListener("blur", stop)
      return () => { tile.removeEventListener("mouseenter", play); tile.removeEventListener("mouseleave", stop); tile.removeEventListener("focus", play); tile.removeEventListener("blur", stop) }
    }
    const io = new IntersectionObserver(([e]) => (e.intersectionRatio > (always ? 0 : 0.6) ? play() : stop()), { threshold: [0, 0.6] })
    io.observe(v)
    return () => io.disconnect()
  }, [always])
  return <video ref={ref} src={`/case/${dir}/thumb.mp4`} poster={`/case/${dir}/thumb.webp`} loop muted playsInline preload="metadata" aria-label={label} />
}

