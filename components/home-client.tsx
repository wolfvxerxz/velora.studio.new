"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { CaseStudy } from "@/lib/case-studies"
import { WorkGrid } from "@/components/work-views"
import { LogoMarquee } from "@/components/logo-marquee"
import { BlurText } from "@/components/ui/blur-text"
import { NumberTicker } from "@/components/ui/number-ticker"
import { BorderBeam } from "@/components/ui/border-beam"
import { WallOfLove } from "@/components/wall-of-love"
import { Reveal } from "@/components/reveal"
import { logoClass, parseYearSpan } from "@/lib/case-studies"

interface HomeClientProps {
  caseStudies: CaseStudy[]
}

const scheduleUrl = "https://cal.com/vuk-m/15min"
const subscribeUrl = "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"

function CapLine() {
  return (
    <div className="cap-line" aria-hidden>
      <span />
    </div>
  )
}

const WHY = [
  { title: "An idea that needs a product.", body: "Wayfind had a plain-language AI guide in mind. We shaped it into a clean, map-first product people get at a glance.", client: "Wayfind", slug: "wayfind" },
  { title: "A brand that has to look funded.", body: "Investors meet the brand before they meet you. Armature got a sharp identity and a digital presence to match.", client: "Armature", slug: "armature" },
  { title: "A product people don't get.", body: "Good infrastructure, confusing screens. InsForge got clarity built into every step, from onboarding to the core workflow.", client: "InsForge", slug: "insforge" },
  { title: "A flow that loses money.", body: "Billing is where trust breaks. SubPay's subscription flow was redesigned for clarity at every step.", client: "SubPay", slug: "subpay" },
]

const PRINCIPLES = [
  { title: "Senior hands only", body: "You work directly with the people designing and building. No account managers, no hand-offs." },
  { title: "Purpose over decoration", body: "If a screen, section or animation doesn't move the product forward, it doesn't ship." },
  { title: "Fast, not rushed", body: "Weekly drops you can react to. Speed comes from focus, not from cutting corners." },
  { title: "Sweat the details", body: "Spacing, type and motion get the same care as the big ideas. That's where quality shows." },
  { title: "Design that ships", body: "Everything is built to be developed, with real components and real content, not just pretty frames." },
]

function Subheading({ title, meta, sub }: { title: string; meta?: string; sub?: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <span className="h-[7px] w-3 bg-[var(--t-mint)]" aria-hidden />
        <h2 className="mono !text-[16px] !leading-[20px] !tracking-[-0.02em] text-[var(--t-ink)]">{title}</h2>
        <span className="h-px flex-1 bg-[var(--t-line)]" aria-hidden />
        {meta && <span className="mono text-[14px] leading-5 text-[var(--t-faint)] tabular-nums">{meta}</span>}
      </div>
      {sub && <p className="mt-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)] max-w-[52ch]">{sub}</p>}
    </div>
  )
}

function Factoid({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-[family-name:var(--font-geist-mono)] text-[13px] font-semibold leading-5 tracking-[-0.02em] text-[var(--t-faint)]">{label}</span>
      <span className="mono text-[14px] leading-5 text-[var(--t-ink)] tabular-nums">{value}</span>
    </div>
  )
}

function Bullet() {
  return <span className="mt-[7px] h-[6px] w-[6px] flex-shrink-0 bg-[var(--t-mint-ink)]" aria-hidden />
}

export default function HomeClient({ caseStudies }: HomeClientProps) {
  const router = useRouter()
  const openStudy = (c: CaseStudy) => router.push(`/work/${c.slug}`)
  const goToPricing = () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  const hasCaseStudy = (c: CaseStudy) => c.cover.startsWith("/case/")
  const caseStudyWorks = caseStudies.filter(hasCaseStudy)
  const shippedByYear = Object.entries(
    caseStudies.reduce<Record<string, typeof caseStudies>>((acc, c) => {
      const y = String(parseYearSpan(c.date).end)
      ;(acc[y] ??= []).push(c)
      return acc
    }, {}),
  ).sort(([a], [b]) => Number(b) - Number(a))
  const testimonialCount = caseStudies.filter((c) => c.testimonial).length
  const pad = (n: number) => String(n).padStart(2, "0")

  const customQuoteFeatures = [
    "Brand identity design",
    "Product & website design",
    "Framer or Webflow",
    "Next.js development",
    "Unlimited revisions",
    "Frequent updates",
  ]
  const subscriptionFeatures = [
    "2–3 updates / week",
    "Best-in-class Figma work",
    "Next.js development",
    "Unlimited requests",
    "Slack or WhatsApp",
    "Pause or cancel anytime",
  ]

  const block = "px-5 py-16 sm:px-6 sm:py-20"

  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "var(--t-page)",
        backgroundImage: "radial-gradient(var(--t-dot) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      <div className="mx-auto min-h-screen w-full max-w-[680px] border-x border-[var(--t-line)] bg-[var(--t-bg)]">
        {/* Topbar */}
        <header className="sticky top-0 z-50 border-b border-[var(--t-line)] bg-[var(--t-header)] backdrop-blur-xl">
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-6">
            <Link href="/" className="press flex items-center" aria-label="velora.studio home">
              <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="theme-logo" priority />
            </Link>
            <nav className="flex items-center gap-5">
              <a href="#work" className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">
                Work
              </a>
              <button type="button" onClick={goToPricing} className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">
                Pricing
              </button>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary !h-9 !px-4 !text-[13px]">
                Schedule Call
              </a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <Reveal as="section" className={`${block} !pb-9 sm:!pb-9`}>
          <div className="mb-8 flex items-center gap-2">
            <span className="h-2 w-2 bg-[var(--t-mint)]" aria-hidden />
            <span className="mono text-[13px] leading-5 text-[var(--t-muted)]">Design &amp; development studio</span>
          </div>
          <h1 className="!text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-[var(--t-ink)]">
            <BlurText text="velora.studio partners with Web3, AI, and early-stage founders to turn ideas into standout websites, products, and brands." />
          </h1>
          <p className="mt-4 !text-[16px] !leading-[26px] !font-[400] text-[var(--t-muted)]">
            Looking to transform your idea into a real-world product?<br className="hidden sm:block" /> We specialize in creating intuitive, attractive interfaces that solve complex challenges across SaaS, Web3, and AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary">
              Schedule Call
            </a>
            <span className="text-[14px] leading-5 text-[var(--t-faint)]">
              or{" "}
              <button type="button" onClick={goToPricing} className="text-[var(--t-ink)] underline decoration-[var(--t-line-strong)] underline-offset-4 transition-colors hover:decoration-[var(--t-mint)]">
                see pricing
              </button>
            </span>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <Factoid label="Case studies" value={<NumberTicker value={caseStudyWorks.length} pad={2} />} />
            <Factoid label="Client notes" value={<NumberTicker value={testimonialCount} pad={2} />} />
            <Factoid label="Plans from" value={<NumberTicker value={3999} prefix="€" suffix="/mo" />} />
          </div>
          <div className="mt-12 border-t border-[var(--t-line)] pt-8">
            <span className="mono text-[12px] leading-4 text-[var(--t-faint)]">Trusted by teams at</span>
            <LogoMarquee studies={caseStudies} />
          </div>
        </Reveal>

        <CapLine />

        {/* Why founders come to us */}
        <Reveal as="section" className={block}>
          <Subheading title="Why founders come to us" />
          <ul className="flex flex-col gap-5">
            {WHY.map((w) => (
              <li key={w.title} className="text-[15px] leading-[24px] text-[var(--t-muted)]">
                <span className="text-[var(--t-ink)]">{w.title}</span> {w.body}{" "}
                <button
                  type="button"
                  onClick={() => {
                    const s = caseStudies.find((c) => c.slug === w.slug)
                    if (s) openStudy(s)
                  }}
                  className="text-[var(--t-mint-ink)] underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
                >
                  {w.client}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        <CapLine />

        {/* Selected work */}
        <Reveal as="section" id="work" className={`${block} scroll-mt-16`}>
          <Subheading
            title="Selected work"
            meta={pad(caseStudyWorks.length)}
            sub="Brand, product and web for founders building in AI and Web3."
          />
          <WorkGrid caseStudies={caseStudyWorks} />
        </Reveal>

        <CapLine />

        {/* Wall of Love */}
        <Reveal as="section" className={block}>
          <Subheading title="Wall of Love" meta={pad(testimonialCount)} sub="What founders say about working with velora.studio." />
          <WallOfLove />
        </Reveal>

        <CapLine />

        {/* How we work */}
        <Reveal as="section" className={block}>
          <Subheading title="How we work" meta={pad(PRINCIPLES.length)} sub="A few rules we hold ourselves to on every project." />
          <ol className="border-t border-[var(--t-line)]">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[40px_1fr] gap-x-4 border-b border-[var(--t-line)] py-4 sm:grid-cols-[48px_200px_1fr]">
                <span className="mono text-[13px] leading-6 text-[var(--t-mint)] tabular-nums">{pad(i + 1)}</span>
                <span className="text-[15px] leading-6 text-[var(--t-ink)]">{p.title}</span>
                <span className="col-start-2 text-[14px] leading-[22px] text-[var(--t-muted)] sm:col-start-3">{p.body}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <CapLine />

        {/* Pricing */}
        <Reveal as="section" id="pricing" className={`${block} scroll-mt-16`}>
          <Subheading title="Pricing" sub="A custom scope built around you, or a monthly design partner that ships every week." />
          <div className="grid grid-cols-1 border border-[var(--t-line)] bg-[var(--t-surface)] sm:grid-cols-2">
            {/* Custom Quote */}
            <div className="flex flex-col border-b border-[var(--t-line)] p-6 sm:border-b-0 sm:border-r">
              <span className="mono text-[14px] leading-5 text-[var(--t-faint)]">Project</span>
              <h3 className="funnel mt-3 !text-[28px] !leading-[36px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Custom Quote</h3>
              <p className="mt-2 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)]">
                Your go-to for whatever you need: brand, product, web, and build.
              </p>
              <div className="my-6"><CapLine /></div>
              <ul className="flex flex-1 flex-col gap-3">
                {customQuoteFeatures.map((label) => (
                  <li key={label} className="flex items-start gap-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-ink)]">
                    <Bullet />
                    {label}
                  </li>
                ))}
              </ul>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-secondary mt-8 w-full">
                Share your vision
              </a>
            </div>

            {/* Design Partner */}
            <div className="relative flex flex-col border-t-2 border-[var(--t-mint)] p-6 sm:border-t-2">
              <BorderBeam size={140} duration={9} />
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{ background: "linear-gradient(180deg, rgb(var(--t-accent-rgb)/0.10) 0%, rgba(93,255,202,0) 100%)" }}
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <span className="mono text-[14px] leading-5 text-[var(--t-faint)]">Design Partner</span>
                <span className="mono rounded-[3px] bg-[image:var(--t-btn)] px-2 py-0.5 text-[12px] leading-4 text-[var(--t-btn-fg)]">
                  Popular
                </span>
              </div>
              <p className="funnel relative mt-3 !text-[28px] !leading-[36px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)] tabular-nums">
                €3,999<span className="mono ml-1 !text-[14px] text-[var(--t-faint)]">/mo</span>
              </p>
              <p className="relative mt-2 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)]">
                Unlimited design for teams that ship every week.
              </p>
              <div className="my-6"><CapLine /></div>
              <ul className="flex flex-1 flex-col gap-3">
                {subscriptionFeatures.map((label) => (
                  <li key={label} className="flex items-start gap-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-ink)]">
                    <Bullet />
                    {label}
                  </li>
                ))}
              </ul>
              <a href={subscribeUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary mt-8 w-full">
                Let&apos;s work together
              </a>
            </div>
          </div>
        </Reveal>

        <CapLine />

        {/* Shipped with — full index by year */}
        <Reveal as="section" className={block}>
          <Subheading title="Shipped with" meta={pad(caseStudies.length)} sub="Every project, newest first." />
          <div className="flex flex-col">
            {shippedByYear.map(([year, list]) => (
              <div key={year} className="grid grid-cols-[56px_1fr] border-t border-[var(--t-line)] py-3">
                <span className="mono pt-[6px] text-[13px] leading-5 text-[var(--t-faint)] tabular-nums">{year}</span>
                <ul>
                  {list.map((c) =>
                    hasCaseStudy(c) ? (
                      <li key={c.slug}>
                        <button
                          type="button"
                          onClick={() => openStudy(c)}
                          className="group flex w-full items-baseline gap-3 py-[6px] text-left"
                        >
                          <span className="shrink-0 text-[14px] leading-5 text-[var(--t-ink)]">{c.title}</span>
                          <span className="h-px flex-1 translate-y-[-4px] bg-[var(--t-line)] transition-colors group-hover:bg-[var(--t-line-strong)]" aria-hidden />
                          <span className="truncate text-right text-[13px] leading-5 text-[var(--t-faint)] transition-colors group-hover:text-[var(--t-ink)]">
                            {c.tagline ?? c.services?.join(", ")} ↗
                          </span>
                        </button>
                      </li>
                    ) : (
                      // No full case study yet: name only, not clickable
                      <li key={c.slug} className="py-[6px] text-[14px] leading-5 text-[var(--t-muted)]">
                        {c.title}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <CapLine />

        {/* Closing CTA + footer */}
        <Reveal as="footer" className={block}>
          <div
            className="flex flex-col items-start gap-5 border border-[var(--t-line)] bg-[var(--t-surface)] p-8"
            style={{ backgroundImage: "linear-gradient(180deg, rgb(var(--t-accent-rgb)/0.08) 0%, rgba(93,255,202,0) 60%)" }}
          >
                        <h2 className="funnel !text-[28px] !leading-[36px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">
              Got a launch, a raise or a new product coming up?
            </h2>
            <p className="-mt-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)]">
              Tell us the date and we&apos;ll work back from it. We set the plan together on a short call.
            </p>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary mt-1">
              Schedule Call
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[var(--t-line)] pt-8 sm:grid-cols-4">
            <div className="flex flex-col gap-2">
              <span className="mono text-[12px] leading-4 text-[var(--t-faint)]">Services</span>
              {[["Brand identity", "/services/brand-identity"], ["Product design", "/services/product-design"], ["Websites", "/services/website-design"], ["Design partner", "/services/design-subscription"], ["All services", "/services"]].map(([t, h]) => (
                <a key={h} href={h} className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">{t}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="mono text-[12px] leading-4 text-[var(--t-faint)]">For</span>
              {[["AI startups", "/industries/ai-startups"], ["Fintech", "/industries/fintech"], ["Developer tools", "/industries/developer-tools"], ["Web3", "/industries/web3"], ["Glossary", "/glossary"]].map(([t, h]) => (
                <a key={h} href={h} className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">{t}</a>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <span className="mono text-[12px] leading-4 text-[var(--t-faint)]">Studio</span>
              <a href="#work" className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">Work</a>
              <button type="button" onClick={goToPricing} className="text-left text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">Pricing</button>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">Book a call</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="mono text-[12px] leading-4 text-[var(--t-faint)]">Elsewhere</span>
              <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">X</a>
              <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">LinkedIn</a>
              <a href="https://www.instagram.com/studio.velora/" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">Instagram</a>
            </div>
          </div>
          <p className="mono mt-10 text-[12px] leading-4 text-[var(--t-faint)]">velora.studio · Design &amp; development studio · © 2026</p>
        </Reveal>
      </div>

    </main>
  )
}
