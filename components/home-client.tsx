"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { RainbowIcon } from "@hugeicons/core-free-icons"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudyModal } from "@/components/case-study-modal"
import { WorkViews, type ViewMode } from "@/components/work-views"

interface HomeClientProps {
  caseStudies: CaseStudy[]
}

const scheduleUrl = "https://cal.com/vuk-m/15min"
const subscribeUrl = "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"

const primaryBtn = "rounded-full bg-white px-4 py-2 text-[14px] leading-[22px] font-normal text-[#0F0F0F] hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
const secondaryBtn = "rounded-full bg-[#282828] px-4 py-2 text-[14px] leading-[22px] font-normal text-white hover:bg-[#333333] transition-all duration-300 inline-flex items-center hover:shadow-lg hover:shadow-white/10 hover:scale-105"

export default function HomeClient({ caseStudies }: HomeClientProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
  const [workView, setWorkView] = useState<ViewMode>("work")
  const goToPricing = () => {
    setWorkView("pricing")
    requestAnimationFrame(() => document.getElementById("work")?.scrollIntoView())
  }
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

  const featureIcon = (label: string): string => {
    const l = label.toLowerCase()
    if (l.includes("figma")) return "/icons/figma.svg"
    if (l.includes("week")) return "/icons/trial-week.svg"
    if (l.includes("framer") || l.includes("webflow")) return "/icons/framer.svg"
    return "/icons/checked.svg"
  }

  const section = "w-full max-w-[680px] mx-auto px-5"

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#111111" }}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: "rgba(17,17,17,0.8)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      >
        <div className="w-full max-w-[680px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo/logo-v.svg" alt="Velora" width={32} height={32} className="opacity-90 brightness-0 invert" priority />
            <span className="hidden sm:inline-block text-[15px] font-medium text-white tracking-[-0.01em]">velora.studio</span>
          </Link>
          <nav className="flex items-center gap-2">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
            <a href="#work" className={secondaryBtn}>View Work</a>
          </nav>
        </div>
      </header>

      <div className="flex flex-col items-center gap-10 pb-20 pt-12">
        {/* Hero */}
        <section className={section}>
          <h1 className="text-[32px] leading-[40px] font-normal text-white">
            Your vision deserves world-class execution.
          </h1>
          <h2 className="text-[32px] leading-[40px] !font-[400] text-[#A2A2A2] mt-0.5">
            velora.studio is your go-to design partner for founders building in AI.
          </h2>
          <p className="text-[16px] leading-[24px] !font-[400] text-[#A2A2A2] mt-4">
            We help you go from 0→1 fast — products that attract investors, convert users, and ship on time. Backed by YC and a16z, we craft intuitive interfaces that tackle complex challenges in AI, SaaS, and Web3.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
            <button type="button" onClick={goToPricing} className={secondaryBtn}>View Pricing</button>
          </div>
        </section>

        {/* Our Work + Pricing — Notion-style tabbed views */}
        <section id="work" className={section}>
          <WorkViews
            caseStudies={caseStudyWorks}
            onOpen={setSelectedStudy}
            view={workView}
            onViewChange={setWorkView}
            pricing={
              <div>
                <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] mb-5">
                  Our plans cover flat-price websites, subscription product design, or a custom scope built around you — pick what fits how you work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Custom Quote */}
            <div className="flex flex-col rounded-2xl border border-[#1F1F1F] bg-[#262626] p-4">
              <h3 className="text-[20px] leading-[28px] font-normal text-white tracking-[-0.02em]">Custom Quote</h3>
              <p className="mt-1.5 text-[13px] leading-[18px] font-normal text-[#A2A2A2]">
                Your go-to for whatever you need: brand, product, web, and build.
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {customQuoteFeatures.map((label) => {
                  const isFw = label.toLowerCase().includes("framer") || label.toLowerCase().includes("webflow")
                  return (
                    <li key={label} className="flex items-center gap-2 text-[13px] leading-[18px] font-normal text-[#A2A2A2]">
                      {isFw ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/icons/framer.svg" alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0 invert" />
                          <span className="flex items-center gap-1">
                            Framer or
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/icons/webflow.svg" alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0 invert" />
                            Webflow
                          </span>
                        </>
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={featureIcon(label)} alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0 invert" />
                          {label}
                        </>
                      )}
                    </li>
                  )
                })}
              </ul>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center rounded-full bg-[#282828] py-2 text-[13px] font-normal text-white transition-all duration-200 hover:bg-[#333333]">
                Share your vision
              </a>
            </div>

            {/* Design Partner */}
            <div className="flex flex-col rounded-2xl border border-[#1F1F1F] bg-[#262626] p-4">
              <p className="text-[20px] leading-[28px] font-normal text-white tracking-[-0.03em] tabular-nums">
                €5,000<span className="text-[14px] font-normal text-[#A2A2A2]">/mo</span>
              </p>
              <p className="mt-1.5 text-[13px] leading-[18px] font-normal text-[#A2A2A2]">
                Unlimited design for teams that ship every week.
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {subscriptionFeatures.map((label) => (
                  <li key={label} className="flex items-center gap-2 text-[13px] leading-[18px] font-normal text-[#A2A2A2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={featureIcon(label)} alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0 invert" />
                    {label}
                  </li>
                ))}
              </ul>
              <a href={subscribeUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center rounded-full bg-white py-2 text-[13px] font-normal text-[#0F0F0F] transition-all duration-200 hover:bg-white/90">
                Let&apos;s work together
              </a>
            </div>
          </div>

          {/* Custom flat row */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-[#1F1F1F] bg-[#262626] p-4">
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-1.5 text-[13px] font-normal text-[#A2A2A2]">
                <HugeiconsIcon icon={RainbowIcon} size={14} color="#A2A2A2" strokeWidth={1.5} />
                Custom
              </div>
              <p className="text-[13px] leading-[18px] font-normal text-[#A2A2A2]">
                Tailored for those who require specific flat pricing for projects of any type and size.
              </p>
            </div>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full bg-[#282828] px-4 py-2 text-[13px] font-normal text-white transition-all duration-200 hover:bg-[#333333] flex-shrink-0">
              Let&apos;s Talk
            </a>
                </div>
              </div>
            }
          />
        </section>

        {/* More work — single images, stacked */}
        {moreWorkImages.length > 0 && (
          <section className={section}>
            <h2 className="text-[24px] leading-[32px] font-normal text-white mb-1 underline-static">More Work</h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] mb-4">
              A selection of past projects across brand, product, and web.
            </p>
            <div className="flex flex-col gap-4">
              {moreWorkImages.map((src) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#262626] p-2">
                  <div className="overflow-hidden rounded-xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt="Velora work"
                      className="w-full h-auto block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className={`${section} flex items-center justify-between border-t border-[#1F1F1F] pt-6 mt-4`}>
          <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2]">© velora.studio 2026</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] hover:text-white transition-colors">X (Twitter)</a>
            <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] hover:text-white transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </main>
  )
}
