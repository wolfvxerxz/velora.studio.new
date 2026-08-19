"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { RainbowIcon } from "@hugeicons/core-free-icons"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudyModal } from "@/components/case-study-modal"
import { WorkGrid } from "@/components/work-views"

interface HomeClientProps {
  caseStudies: CaseStudy[]
}

const scheduleUrl = "https://cal.com/vuk-m/15min"
const subscribeUrl = "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"

const cardBox = "border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)]"
const primaryBtn = "rounded-full bg-[#0A0A0A] px-4 py-2 text-[14px] leading-[22px] font-normal text-white hover:bg-[#1A1A1A] transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:shadow-black/10 hover:scale-105"
const secondaryBtn = "rounded-full bg-white px-4 py-2 text-[14px] leading-[22px] font-normal text-[#0A0A0A] border border-black/[0.08] hover:bg-[#F0F1F3] transition-all duration-300 inline-flex items-center hover:shadow-sm hover:scale-105"

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

  const featureIcon = (label: string): string => {
    const l = label.toLowerCase()
    if (l.includes("figma")) return "/icons/figma.svg"
    if (l.includes("week")) return "/icons/trial-week.svg"
    if (l.includes("framer") || l.includes("webflow")) return "/icons/framer.svg"
    return "/icons/checked.svg"
  }

  const section = "w-full max-w-[632px] mx-auto px-5"

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#F5F6F8" }}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: "rgba(245,246,248,0.8)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      >
        <div className="w-full max-w-[632px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo/logo-v.svg" alt="Velora" width={32} height={32} className="opacity-90 brightness-0" priority />
            <span className="hidden sm:inline-block text-[15px] !font-[400] text-[#0A0A0A] tracking-[-0.01em]">Velora Studio</span>
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
          <h1 className="text-[20px] leading-[28px] !font-[500] text-black">
            velora.studio partners with Web3, AI, and<br />early-stage founders to turn ideas into standout<br />websites, products, and brands.
          </h1>
          <p className="text-[16px] leading-[26px] !font-[500] text-[#666666] mt-4">
            Looking to transform your idea into a real-world product?<br />We specialize in creating intuitive, attractive interfaces that solve complex challenges across SaaS, Web3, and AI.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
            <button type="button" onClick={goToPricing} className={secondaryBtn}>View Pricing</button>
          </div>
        </section>

        {/* Our Work */}
        <section id="work" className={section}>
          <h2 className="text-[24px] leading-[32px] font-normal text-[#0A0A0A] mb-4">Selected work</h2>
          <WorkGrid caseStudies={caseStudyWorks} onOpen={setSelectedStudy} />
        </section>

        {/* Pricing */}
        <section id="pricing" className={section}>
          <h2 className="text-[24px] leading-[32px] font-normal text-[#0A0A0A] mb-1">Pricing</h2>
          <p className="text-[14px] leading-[20px] font-normal text-[#666666] mb-5">
            Our plans cover flat-price websites, subscription product design, or a custom scope built around you — pick what fits how you work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Custom Quote */}
            <div className={`flex flex-col rounded-2xl p-4 ${cardBox}`}>
              <h3 className="text-[20px] leading-[28px] font-normal text-[#0A0A0A] tracking-[-0.02em]">Custom Quote</h3>
              <p className="mt-1.5 text-[13px] leading-[18px] font-normal text-[#666666]">
                Your go-to for whatever you need: brand, product, web, and build.
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {customQuoteFeatures.map((label) => {
                  const isFw = label.toLowerCase().includes("framer") || label.toLowerCase().includes("webflow")
                  return (
                    <li key={label} className="flex items-center gap-2 text-[13px] leading-[18px] font-normal text-[#666666]">
                      {isFw ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/icons/framer.svg" alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0" />
                          <span className="flex items-center gap-1">
                            Framer or
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/icons/webflow.svg" alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0" />
                            Webflow
                          </span>
                        </>
                      ) : (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={featureIcon(label)} alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0" />
                          {label}
                        </>
                      )}
                    </li>
                  )
                })}
              </ul>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center rounded-full bg-[#F0F1F3] py-2 text-[13px] font-normal text-[#0A0A0A] border border-black/[0.08] transition-all duration-200 hover:bg-[#E6E8EB]">
                Share your vision
              </a>
            </div>

            {/* Design Partner */}
            <div className="flex flex-col rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)] p-4">
              <p className="text-[20px] leading-[28px] font-normal text-[#0A0A0A] tracking-[-0.03em] tabular-nums">
                €5,000<span className="text-[14px] font-normal text-[#666666]">/mo</span>
              </p>
              <p className="mt-1.5 text-[13px] leading-[18px] font-normal text-[#666666]">
                Unlimited design for teams that ship every week.
              </p>
              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {subscriptionFeatures.map((label) => (
                  <li key={label} className="flex items-center gap-2 text-[13px] leading-[18px] font-normal text-[#666666]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={featureIcon(label)} alt="" width={14} height={14} className="opacity-70 flex-shrink-0 brightness-0" />
                    {label}
                  </li>
                ))}
              </ul>
              <a href={subscribeUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center rounded-full bg-[#0A0A0A] py-2 text-[13px] font-normal text-white transition-all duration-200 hover:bg-[#1A1A1A]">
                Let&apos;s work together
              </a>
            </div>
          </div>

          {/* Custom flat row */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)] p-4">
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-1.5 text-[13px] font-normal text-[#666666]">
                <HugeiconsIcon icon={RainbowIcon} size={14} color="#666666" strokeWidth={1.5} />
                Custom
              </div>
              <p className="text-[13px] leading-[18px] font-normal text-[#666666]">
                Tailored for those who require specific flat pricing for projects of any type and size.
              </p>
            </div>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full bg-[#F0F1F3] px-4 py-2 text-[13px] font-normal text-[#0A0A0A] border border-black/[0.08] transition-all duration-200 hover:bg-[#E6E8EB] flex-shrink-0">
              Let&apos;s Talk
            </a>
          </div>
        </section>

        {/* More work — single images, stacked */}
        {moreWorkImages.length > 0 && (
          <section className={section}>
            <h2 className="text-[24px] leading-[32px] font-normal text-[#0A0A0A] mb-1 underline-static">More Work</h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#666666] mb-4">
              A selection of past projects across brand, product, and web.
            </p>
            <div className="flex flex-col gap-4">
              {moreWorkImages.map((src) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)] p-2">
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
        <footer className={`${section} flex items-center justify-between border-t border-black/[0.08] pt-6 mt-4`}>
          <p className="text-[14px] leading-[20px] font-normal text-[#666666]">© velora.studio 2026</p>
          <div className="flex items-center gap-4">
            <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] font-normal text-[#666666] hover:text-[#0A0A0A] transition-colors">X (Twitter)</a>
            <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-[14px] leading-[20px] font-normal text-[#666666] hover:text-[#0A0A0A] transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </main>
  )
}
