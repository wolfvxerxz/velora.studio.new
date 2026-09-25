"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudyModal } from "@/components/case-study-modal"
import { WorkGrid } from "@/components/work-views"
import { WallOfLove } from "@/components/wall-of-love"
import { Reveal } from "@/components/reveal"

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

function Factoid({ label, value }: { label: string; value: string }) {
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
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const goToPricing = () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  const caseStudyWorks = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const otherWorks = caseStudies.filter((c) => !c.cover.startsWith("/case/"))
  const moreWorkImages = Array.from(
    new Set(otherWorks.flatMap((c) => [c.cover, ...c.work.filter((w) => w.type === "image").map((w) => w.src)]))
  )
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
        backgroundColor: "#463830",
        backgroundImage: "radial-gradient(rgba(242,238,227,0.07) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      <div className="mx-auto min-h-screen w-full max-w-[680px] border-x border-[var(--t-line)] bg-[var(--t-bg)]">
        {/* Topbar */}
        <header className="sticky top-0 z-50 border-b border-[var(--t-line)] bg-[#463830]/80 backdrop-blur-xl">
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-6">
            <Link href="/" className="press flex items-center" aria-label="velora.studio home">
              <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="brightness-0 invert" priority />
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
        <Reveal as="section" className={block}>
          <div className="mb-8 flex items-center gap-2">
            <span className="h-2 w-2 bg-[var(--t-mint)] shadow-[0_0_0_3px_rgba(47,143,234,0.2)]" aria-hidden />
            <span className="mono text-[13px] leading-5 text-[var(--t-muted)]">Design &amp; development studio</span>
          </div>
          <h1 className="!text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-[var(--t-ink)]">
            velora.studio partners with Web3, AI, and<br className="hidden sm:block" /> early-stage founders to turn ideas into standout<br className="hidden sm:block" /> websites, products, and brands.
          </h1>
          <p className="mt-4 !text-[16px] !leading-[26px] !font-[400] text-[var(--t-muted)]">
            Looking to transform your idea into a real-world product?<br className="hidden sm:block" /> We specialize in creating intuitive, attractive interfaces that solve complex challenges across SaaS, Web3, and AI.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary">
              Schedule Call
            </a>
            <button type="button" onClick={goToPricing} className="tick tick-secondary">
              View Pricing
            </button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
            <Factoid label="Case studies" value={pad(caseStudyWorks.length)} />
            <Factoid label="Client notes" value={pad(testimonialCount)} />
            <Factoid label="Plans from" value="€3,999/mo" />
          </div>
        </Reveal>

        <CapLine />

        {/* Selected work */}
        <Reveal as="section" id="work" className={`${block} scroll-mt-16`}>
          <Subheading
            title="Selected work"
            meta={pad(caseStudyWorks.length)}
            sub="Brand, product and web for founders building in AI and Web3."
          />
          <WorkGrid caseStudies={caseStudyWorks} onOpen={setSelectedStudy} />
        </Reveal>

        <CapLine />

        {/* Wall of Love */}
        <Reveal as="section" className={block}>
          <Subheading title="Wall of Love" meta={pad(testimonialCount)} sub="What founders say about working with velora.studio." />
          <WallOfLove />
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
            <div className="relative flex flex-col p-6">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{ background: "linear-gradient(180deg, rgba(47,143,234,0.10) 0%, rgba(93,255,202,0) 100%)" }}
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <span className="mono text-[14px] leading-5 text-[var(--t-faint)]">Design Partner</span>
                <span className="mono border-l-2 border-[var(--t-mint-ink)] bg-[rgba(47,143,234,0.12)] px-2 py-0.5 text-[12px] leading-4 text-[var(--t-mint-ink)]">
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

        {/* More work */}
        {moreWorkImages.length > 0 && (
          <>
            <CapLine />
            <Reveal as="section" className={block}>
              <Subheading title="More work" meta={pad(moreWorkImages.length)} sub="A selection of past projects across brand, product, and web." />
              <div className="flex flex-col gap-4">
                {moreWorkImages.map((src) => (
                  <div key={src} className="group overflow-hidden rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2">
                    <div className="overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt="Velora work"
                        className="block h-auto w-full transition-transform duration-700 [transition-timing-function:var(--spring)] group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </>
        )}

        <CapLine />

        {/* Closing CTA + footer */}
        <Reveal as="footer" className={block}>
          <div
            className="flex flex-col items-start gap-5 border border-[var(--t-line)] bg-[var(--t-surface)] p-8"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(47,143,234,0.08) 0%, rgba(93,255,202,0) 60%)" }}
          >
            <span className="mono text-[14px] leading-5 text-[var(--t-faint)]">Next step</span>
            <h2 className="funnel !text-[28px] !leading-[36px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">
              Have an idea worth building?
            </h2>
            <p className="-mt-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)]">
              A 15-minute call is enough to see if we&apos;re a fit.
            </p>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary mt-1">
              Schedule Call
            </a>
          </div>
          <div className="mt-12 flex items-center justify-between">
            <p className="mono text-[13px] leading-5 text-[var(--t-faint)]">© velora.studio 2026</p>
            <div className="flex items-center gap-5">
              <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="mono text-[13px] text-[var(--t-faint)] transition-colors hover:text-[var(--t-ink)]">X (Twitter)</a>
              <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="mono text-[13px] text-[var(--t-faint)] transition-colors hover:text-[var(--t-ink)]">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </div>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </main>
  )
}
