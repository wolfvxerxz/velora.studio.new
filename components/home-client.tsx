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

const card =
  "rounded-[20px] border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(15,23,42,0.14)]"
const primaryBtn =
  "press inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-5 text-[14px] font-medium tracking-[-0.01em] text-white hover:bg-[#1F1F1F] hover:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]"
const secondaryBtn =
  "press inline-flex h-10 items-center justify-center rounded-full border border-black/[0.08] bg-white px-5 text-[14px] font-medium tracking-[-0.01em] text-[#0A0A0A] hover:bg-[#F4F4F5]"

function SectionHeader({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-6 flex flex-col gap-1">
      <h2 className="!text-[20px] !leading-[28px] !font-[600] tracking-[-0.02em] text-[#0A0A0A]">{title}</h2>
      {sub && <p className="!text-[14px] !leading-[20px] !font-[400] text-[#6B6B6B] max-w-[52ch]">{sub}</p>}
    </div>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-[2px] flex-shrink-0">
      <circle cx="8" cy="8" r="8" fill="#0A0A0A" fillOpacity="0.06" />
      <path d="M5 8.2l2 2 4-4.4" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomeClient({ caseStudies }: HomeClientProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const goToPricing = () => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  const caseStudyWorks = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const otherWorks = caseStudies.filter((c) => !c.cover.startsWith("/case/"))
  const moreWorkImages = Array.from(
    new Set(otherWorks.flatMap((c) => [c.cover, ...c.work.filter((w) => w.type === "image").map((w) => w.src)]))
  )

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

  const section = "w-full max-w-[632px] mx-auto px-5"

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#FAFAFA" }}>
      {/* Floating glass navbar */}
      <header className="sticky top-3 z-50 px-3">
        <div className="mx-auto flex h-14 w-full max-w-[632px] items-center justify-between rounded-full border border-black/[0.06] bg-white/70 pl-4 pr-2 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl backdrop-saturate-150">
          <Link href="/" className="press flex items-center" aria-label="velora.studio home">
            <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="brightness-0" priority />
          </Link>
          <nav className="flex items-center gap-1.5">
            <a href="#work" className="press hidden h-10 items-center rounded-full px-4 text-[14px] font-medium text-[#3F3F46] hover:bg-black/[0.04] sm:inline-flex">
              Work
            </a>
            <button type="button" onClick={goToPricing} className="press hidden h-10 items-center rounded-full px-4 text-[14px] font-medium text-[#3F3F46] hover:bg-black/[0.04] sm:inline-flex">
              Pricing
            </button>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
          </nav>
        </div>
      </header>

      <div className="flex flex-col items-center gap-20 pb-16 pt-20 sm:gap-24 sm:pt-24">
        {/* Hero */}
        <Reveal as="section" className={section}>
          <h1 className="!text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-black">
            velora.studio partners with Web3, AI, and<br className="hidden sm:block" /> early-stage founders to turn ideas into standout<br className="hidden sm:block" /> websites, products, and brands.
          </h1>
          <p className="mt-4 !text-[16px] !leading-[26px] !font-[500] text-[#666666]">
            Looking to transform your idea into a real-world product?<br className="hidden sm:block" /> We specialize in creating intuitive, attractive interfaces that solve complex challenges across SaaS, Web3, and AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
            <button type="button" onClick={goToPricing} className={secondaryBtn}>
              View Pricing
            </button>
          </div>
        </Reveal>

        {/* Selected work */}
        <Reveal as="section" id="work" className={`${section} scroll-mt-24`}>
          <SectionHeader title="Selected work" sub="Brand, product and web for founders building in AI and Web3." />
          <WorkGrid caseStudies={caseStudyWorks} onOpen={setSelectedStudy} />
        </Reveal>

        {/* Wall of Love */}
        <Reveal as="section" className={section}>
          <SectionHeader title="Wall of Love" sub="What founders say about working with velora.studio." />
          <WallOfLove />
        </Reveal>

        {/* Pricing */}
        <Reveal as="section" id="pricing" className={`${section} scroll-mt-24`}>
          <SectionHeader
            title="Pricing"
            sub="A custom scope built around you, or a monthly design partner that ships every week."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* Custom Quote */}
            <div className={`press flex flex-col p-6 ${card}`}>
              <p className="!text-[13px] !leading-[18px] !font-[500] text-[#6B6B6B]">Project</p>
              <h3 className="mt-2 !text-[28px] !leading-[32px] !font-[600] tracking-[-0.03em] text-[#0A0A0A]">Custom Quote</h3>
              <p className="mt-2 !text-[14px] !leading-[20px] !font-[400] text-[#6B6B6B]">
                Your go-to for whatever you need: brand, product, web, and build.
              </p>
              <div className="my-6 h-px bg-black/[0.06]" />
              <ul className="flex flex-1 flex-col gap-3">
                {customQuoteFeatures.map((label) => (
                  <li key={label} className="flex items-start gap-2.5 !text-[14px] !leading-[20px] !font-[400] text-[#3F3F46]">
                    <Check />
                    {label}
                  </li>
                ))}
              </ul>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={`${secondaryBtn} mt-8 w-full`}>
                Share your vision
              </a>
            </div>

            {/* Design Partner */}
            <div className={`press relative flex flex-col p-6 ${card} ring-1 ring-black/[0.04]`}>
              <div className="flex items-center justify-between">
                <p className="!text-[13px] !leading-[18px] !font-[500] text-[#6B6B6B]">Design Partner</p>
                <span className="rounded-full bg-[#0A0A0A] px-2.5 py-1 text-[11px] font-medium leading-none text-white">Popular</span>
              </div>
              <p className="mt-2 !text-[28px] !leading-[32px] !font-[600] tracking-[-0.03em] text-[#0A0A0A] tabular-nums">
                €3,999<span className="!text-[14px] !font-[400] tracking-normal text-[#6B6B6B]"> /mo</span>
              </p>
              <p className="mt-2 !text-[14px] !leading-[20px] !font-[400] text-[#6B6B6B]">
                Unlimited design for teams that ship every week.
              </p>
              <div className="my-6 h-px bg-black/[0.06]" />
              <ul className="flex flex-1 flex-col gap-3">
                {subscriptionFeatures.map((label) => (
                  <li key={label} className="flex items-start gap-2.5 !text-[14px] !leading-[20px] !font-[400] text-[#3F3F46]">
                    <Check />
                    {label}
                  </li>
                ))}
              </ul>
              <a href={subscribeUrl} target="_blank" rel="noopener noreferrer" className={`${primaryBtn} mt-8 w-full`}>
                Let&apos;s work together
              </a>
            </div>
          </div>
        </Reveal>

        {/* More work */}
        {moreWorkImages.length > 0 && (
          <Reveal as="section" className={section}>
            <SectionHeader title="More work" sub="A selection of past projects across brand, product, and web." />
            <div className="flex flex-col gap-4">
              {moreWorkImages.map((src) => (
                <div key={src} className={`group overflow-hidden p-2 ${card}`}>
                  <div className="overflow-hidden rounded-[14px]">
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
        )}

        {/* Closing CTA + footer */}
        <Reveal as="footer" className={section}>
          <div className={`flex flex-col items-start gap-5 p-8 ${card}`}>
            <h2 className="!text-[20px] !leading-[28px] !font-[600] tracking-[-0.02em] text-[#0A0A0A]">
              Have an idea worth building?
            </h2>
            <p className="-mt-3 !text-[14px] !leading-[20px] !font-[400] text-[#6B6B6B]">
              A 15-minute call is enough to see if we&apos;re a fit.
            </p>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
          </div>
          <div className="mt-10 flex items-center justify-between">
            <p className="!text-[13px] !leading-[20px] !font-[400] text-[#8A8A8A]">© velora.studio 2026</p>
            <div className="flex items-center gap-5">
              <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#8A8A8A] transition-colors hover:text-[#0A0A0A]">X (Twitter)</a>
              <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#8A8A8A] transition-colors hover:text-[#0A0A0A]">LinkedIn</a>
            </div>
          </div>
        </Reveal>
      </div>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </main>
  )
}
