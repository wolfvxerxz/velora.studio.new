"use client"
// The homepage, short as a note: one sentence on who we help, two ways to start, what founders say,
// the work, the price. Apple's type and blue, one narrow column.
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import type { CaseStudy } from "@/lib/case-studies"
import Image from "next/image"
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react"
import { Calendar03Icon, GridViewIcon, SparklesIcon, ChartUpIcon, SourceCodeIcon, SmartPhone01Icon, ArrowLeft02Icon, ArrowRight02Icon, File01Icon, Rocket01Icon, RepeatIcon, BubbleChatIcon } from "@hugeicons-pro/core-solid-rounded"

const Icon = ({ i, size = 16 }: { i: IconSvgElement; size?: number }) => <HugeiconsIcon icon={i} size={size} aria-hidden />

const book = "https://cal.com/vuk-m/15min"
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

const PLANS = [
  { icon: File01Icon, name: "Landing Page", price: "€1,200", line: "One page that sells the product, in 1–2 weeks." },
  { icon: Rocket01Icon, name: "Launch", price: "from €14,900", line: "Brand, product and site as one system, in 4–6 weeks." },
  { icon: RepeatIcon, name: "Design Partner", price: "€5,900 / month", line: "A senior team every week, build included." },
]

const FILTERS: [string, string[]][] = [["All", []], ["AI", ["AI", "Agents"]], ["Fintech", ["Fintech", "Payments", "Trading", "Investing", "Crypto"]], ["Dev tools", ["Developer Tools", "Infrastructure", "DevOps", "Database", "Backend"]], ["Consumer", ["Consumer", "Mobile"]]]
const FILTER_ICONS: Record<string, IconSvgElement> = { All: GridViewIcon, AI: SparklesIcon, Fintech: ChartUpIcon, "Dev tools": SourceCodeIcon, Consumer: SmartPhone01Icon }
const ORDER = ["moss", "atlas", "junction", "nightshift", "youspot"]
// Each recent case has its own looping film, made from its brand
const FILMS: Record<string, string> = { moss: "Moss", atlas: "Atlas", junction: "Junction", nightshift: "Nightshift", youspot: "YouSpot" }

export default function HomeV2({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const all = [...ORDER.map((s) => withPages.find((c) => c.slug === s)).filter(Boolean) as CaseStudy[], ...withPages.filter((c) => !ORDER.includes(c.slug))]
  const quotes = ["extsy", "wayfind", "nordeus", "insforge", "subpay", "aether"].map((s) => caseStudies.find((c) => c.slug === s && c.testimonial)).filter(Boolean) as CaseStudy[]
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
            <a href={book} {...ext} className="va-pill"><Icon i={Calendar03Icon} />Book a call</a>
            <Link href="/start" className="va-pill ghost"><Icon i={BubbleChatIcon} />Start a project</Link>
          </div>
        </section>

        <div className="vn-side-end">
          <Voices quotes={quotes} />
          <section id="pricing" aria-labelledby="pricing-h">
            <div className="vn-head"><h2 id="pricing-h">Pricing.</h2><Link href="/pricing" className="vn-more">All details</Link></div>
            <div className="vn-plans">
              {PLANS.map((p) => (
                <Link key={p.name} href="/start" className="vn-plan">
                  <i aria-hidden><Icon i={p.icon} /></i><b>{p.name}</b><span>{p.line}</span><em>{p.price}</em>
                </Link>
              ))}
            </div>
          </section>
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
                  ? <Film dir={FILMS[c.slug]} label={`${c.title} case study`} />
                  // eslint-disable-next-line @next/next/no-img-element
                  : <img src={c.cover} alt={`${c.title} case study`} loading={i < 4 ? "eager" : "lazy"} decoding="async" />}
              </div>
              <p><b>{c.title}</b><span>{c.date}</span></p>
            </Link>
          ))}
        </div>
        <footer className="vn-foot">
          <span>velora.studio · 2026 · Referrals and YC, Antler and a16z speedrun companies get 10% off.</span>
          <nav>
            <Link href="/services">Services</Link><Link href="/blog">Blog</Link>
            <a href="https://x.com/veloraxstudio" {...ext}>X</a><a href="https://www.linkedin.com/company/velorastudio/" {...ext}>LinkedIn</a>
          </nav>
        </footer>
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
          <button aria-label="Previous" onClick={() => setI((i - 1 + quotes.length) % quotes.length)}><Icon i={ArrowLeft02Icon} /></button>
          <button aria-label="Next" onClick={() => setI((i + 1) % quotes.length)}><Icon i={ArrowRight02Icon} /></button>
        </div>
      </div>
      <figure className="vn-quote" key={q.slug}>
        <blockquote>{q.testimonial!.quote}</blockquote>
        <figcaption>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {q.testimonial!.avatar && <img src={q.testimonial!.avatar} alt="" width={28} height={28} />}
          <span><b>{q.testimonial!.name}</b> {q.testimonial!.role}</span>
          <Link href={`/work/${q.slug}`}>{q.title}</Link>
        </figcaption>
      </figure>
    </section>
  )
}

// A case film rests on its poster and plays while the tile is hovered. Without hover (phones), it plays while in view.
function Film({ dir, label }: { dir: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const v = ref.current!, tile = v.closest("a")!
    const play = () => { v.play().catch(() => {}) }
    const stop = () => { v.pause(); v.load() } // load() puts the poster back instead of a paused frame
    if (matchMedia("(hover: hover)").matches) {
      tile.addEventListener("mouseenter", play); tile.addEventListener("mouseleave", stop)
      tile.addEventListener("focus", play); tile.addEventListener("blur", stop)
      return () => { tile.removeEventListener("mouseenter", play); tile.removeEventListener("mouseleave", stop); tile.removeEventListener("focus", play); tile.removeEventListener("blur", stop) }
    }
    const io = new IntersectionObserver(([e]) => (e.intersectionRatio > 0.6 ? play() : stop()), { threshold: [0, 0.6] })
    io.observe(v)
    return () => io.disconnect()
  }, [])
  return <video ref={ref} src={`/case/${dir}/thumb.mp4`} poster={`/case/${dir}/thumb.webp`} loop muted playsInline preload="metadata" aria-label={label} />
}

