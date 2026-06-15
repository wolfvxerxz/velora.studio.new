"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  SparklesIcon,
  CheckmarkCircle01Icon,
  Refresh01Icon,
  FlashIcon,
  RainbowIcon,
} from "@hugeicons/core-free-icons"
import type { CaseStudy } from "@/lib/case-studies"

const clientLogos: { src: string; alt: string; yc?: boolean; noInvert?: boolean }[] = [
  { src: "/images/brands/extsy.webp", alt: "Extsy" },
  { src: "/images/brands/webserv.webp", alt: "Webserv", noInvert: true },
  { src: "/images/brands/ecom.webp", alt: "Ecom Wizards" },
  { src: "/images/brands/nordeus.webp", alt: "Nordeus" },
  { src: "/images/brands/amenify.webp", alt: "Amenify" },
  { src: "/images/brands/bobos.webp", alt: "Bobos" },
  { src: "/case/Aether/logo.svg", alt: "Aether" },
  { src: "/case/BentoLabs/Logo.svg", alt: "BentoLabs", yc: true },
  { src: "/case/SubPay/logo.svg", alt: "SubPay", noInvert: true },
  { src: "/case/Armature/armature-logo.svg", alt: "Armature", yc: true },
  { src: "/case/Cactus/cactus-logo.webp", alt: "Cactus", yc: true },
  { src: "/case/InsForge/insforge-logo.svg", alt: "InsForge", yc: true },
]

const TESTIMONIALS = [
  {
    quote: "Working with Vuk was effortless. From our first chat he understood my brand, refining my ideas with his own creative polish. Every update matched my vision, only better. Truly a 10/10 experience.",
    name: "Victor Uhl",
    role: "Founder, Ecom Wizards",
    avatar: "/images/clients/victor.jpeg",
  },
  {
    quote: "velora.studio understood our vision immediately and worked efficiently. The final product has significantly improved our brand presence. Working with them has been one of our best decisions.",
    name: "Everett Lynn",
    role: "Founder & CEO, Amenify",
    avatar: "/images/clients/everett.jpeg",
  },
  {
    quote: "As we scaled Bobo's Oat Bars, we needed a website that could reflect our homemade quality while appealing to a national audience. velora.studio delivered exactly that — a warm, inviting digital storefront.",
    name: "Beryl Stafford",
    role: "Founder & President, Bobo's Oat Bars",
    avatar: "/images/clients/beryl.jpeg",
  },
  {
    quote: "Our rebrand could have been a mess. Instead, Velora gave us a system we actually use — consistent, scalable, and on-brand everywhere. The team is sharp and easy to work with.",
    name: "Branko",
    role: "Founder, Nordeus",
    avatar: "/images/clients/branko.jpeg",
  },
  {
    quote: "From wireframes to launch, the process was transparent and iterative. They asked the right questions and pushed back when it mattered. Our conversion rate went up 40% after the redesign.",
    name: "Varun",
    role: "Founder, Extsy",
  },
  {
    quote: "Velora nailed our brand from the first pass. The system they built is modular, fast to work with, and made our product feel premium overnight. Couldn't recommend them more.",
    name: "Abhinav",
    role: "Founder, BentoLabs",
    avatar: "/images/clients/abhinav.jpg",
  },
  {
    quote: "Distinctive, sharp, and exactly on-brand. Velora gave Cactus a visual identity that stands out and scales without losing its edge. A genuinely great partner to build with.",
    name: "Roman",
    role: "Founder, Cactus",
    avatar: "/images/clients/roman.jpg",
  },
  {
    quote: "Velora delivered a polished identity and product experience that reflects the quality of our work. Sharp execution, smooth communication, and they shipped right on time.",
    name: "Theodore",
    role: "Co-founder, Armature",
    avatar: "/images/clients/theodore.jpg",
  },
]

interface HomeClientProps {
  caseStudies: CaseStudy[]
}

const scheduleUrl = "https://cal.com/vuk-m/15min"
const subscribeUrl = "https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"

const primaryBtn = "rounded-full bg-white px-4 py-2 text-[14px] leading-[22px] font-normal text-[#0F0F0F] hover:bg-white/90 transition-all duration-200 inline-flex items-center gap-2"
const secondaryBtn = "rounded-full bg-[#282828] px-4 py-2 text-[14px] leading-[22px] font-normal text-white hover:bg-[#333333] transition-all duration-200 inline-flex items-center"

function DottedDivider() {
  return <div className="mx-4 border-t border-dotted border-[#333333]" />
}

function Avatar({ src, initials }: { src?: string; initials: string }) {
  const [failed, setFailed] = useState(false)
  const ref = useRef<HTMLImageElement>(null)
  useEffect(() => {
    // catch errors that fired before hydration attached onError
    if (ref.current && ref.current.complete && ref.current.naturalWidth === 0) setFailed(true)
  }, [])
  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={src}
        alt={initials}
        width={42}
        height={42}
        onError={() => setFailed(true)}
        className="h-[42px] w-[42px] flex-shrink-0 rounded-full border border-[#1F1F1F] object-cover"
      />
    )
  }
  return (
    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#282828] text-[13px] font-medium text-[#A2A2A2]">
      {initials}
    </div>
  )
}

function WorkCard({ study }: { study: CaseStudy }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#141414] p-2"
        style={{
          boxShadow: hovered ? "0 12px 32px -8px rgba(0,0,0,0.5)" : "0 2px 12px -4px rgba(0,0,0,0.3)",
          transform: hovered ? "translateY(-3px)" : "translateY(0px)",
          transition: "transform 500ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div className="aspect-[16/11] relative overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.cover}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: study.coverPosition ?? "center",
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="mt-2.5 flex items-baseline justify-between gap-2 px-0.5">
        <span className="text-[14px] leading-[22px] font-medium tracking-[-0.01em] truncate transition-colors duration-300" style={{ color: hovered ? "#FFFFFF" : "#A2A2A2" }}>
          {study.title}
        </span>
        <span className="shrink-0 text-[14px] leading-[22px] font-normal text-[#A2A2A2] tabular-nums">{study.date}</span>
      </div>
    </Link>
  )
}

export default function HomeClient({ caseStudies }: HomeClientProps) {
  const caseStudyWorks = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const otherWorks = caseStudies.filter((c) => !c.cover.startsWith("/case/"))
  const moreWorkImages = Array.from(
    new Set(otherWorks.flatMap((c) => [c.cover, ...c.work.filter((w) => w.type === "image").map((w) => w.src)]))
  )

  const processSteps = [
    { title: "Align", text: "We dig into your goals, users, and constraints — moodboards, user flows, and wireframes so everyone's on the same page." },
    { title: "Direct", text: "We design the key screens and establish a clear visual direction. You sign off before we build out the rest." },
    { title: "Build", text: "We design every screen, state, and edge case. Internal reviews keep everything consistent and ship-ready." },
    { title: "Ship", text: "We develop with Framer, Webflow, or Next.js, then test, optimize, and push it live — ready for the world." },
  ]

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
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#0F0F0F" }}>
      {/* Navbar */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: "rgba(15,15,15,0.8)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
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
          <h1 className="text-[24px] leading-[32px] font-normal text-white">
            Your vision deserves world-class execution.
          </h1>
          <h2 className="text-[24px] leading-[32px] !font-[400] text-[#A2A2A2] mt-0.5">
            velora.studio is your go-to design partner for founders building in AI.
          </h2>
          <p className="text-[14px] leading-[20px] !font-[400] text-[#A2A2A2] mt-4">
            We help you go from 0→1 fast — products that attract investors, convert users, and ship on time. Backed by YC and a16z, we craft intuitive interfaces that tackle complex challenges in AI, SaaS, and Web3.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-5">
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Schedule Call
            </a>
            <a href="#pricing" className={secondaryBtn}>View Pricing</a>
          </div>
        </section>

        {/* Trusted by — logo marquee */}
        <section className={section}>
          <p className="text-[14px] leading-[22px] font-normal text-[#A2A2A2] mb-3">Trusted by founders at</p>
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
            }}
          >
            <div className="flex w-max gap-2 animate-marquee">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={i} className="group/logo relative flex flex-shrink-0 items-center justify-center gap-2 px-7 h-[52px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={26}
                    className={`h-[26px] w-auto object-contain opacity-90 ${logo.noInvert ? "" : "brightness-0 invert"}`}
                  />
                  {logo.alt === "Cactus" && (
                    <span className="text-[15px] font-semibold text-white leading-none" style={{ fontFamily: "var(--font-geist-sans)" }}>Cactus</span>
                  )}
                  {logo.yc && (
                    <div
                      className="pointer-events-none absolute inset-0 flex items-center justify-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
                      style={{ backgroundColor: "rgba(15,15,15,0.55)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
                    >
                      <span className="flex h-[14px] w-[14px] items-center justify-center rounded-[3px] text-[9px] font-bold leading-none text-white" style={{ backgroundColor: "#FB651E", fontFamily: "var(--font-geist-sans)" }}>Y</span>
                      <span className="text-[12px] font-semibold leading-none text-white" style={{ fontFamily: "var(--font-geist-sans)" }}>Backed by YC</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work — case studies grid */}
        <section id="work" className={section}>
          <h2 className="text-[24px] leading-[32px] font-normal text-white mb-4">Our Work</h2>
          <div className="grid grid-cols-2 gap-4">
            {caseStudyWorks.map((study) => (
              <WorkCard key={study.slug} study={study} />
            ))}
          </div>
        </section>

        {/* Our Process */}
        <section className={section}>
          <h2 className="text-[24px] leading-[32px] font-normal text-white mb-3">Our Process</h2>
          <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2]">
            Discover how our bullet-proof collaborative process takes your project from 0 to 1, ensuring your satisfaction every step of the way.
          </p>
          <div className="grid grid-cols-1 gap-4 mt-5">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex flex-col rounded-2xl bg-[#141414] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#1A1A1A] text-[13px] font-normal text-[#A2A2A2] tabular-nums">
                    {i + 1}
                  </div>
                  <h3 className="text-[16px] leading-[22px] font-normal text-white">{step.title}</h3>
                </div>
                <p className="mt-4 text-[14px] leading-[20px] font-normal text-[#A2A2A2]">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Happy Clients */}
        <section className={section}>
          <h2 className="text-[24px] leading-[32px] font-normal text-white mb-1">Happy Clients</h2>
          <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] mb-5">
            We&apos;ve partnered with founders across sectors. Here&apos;s what they say about working with us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TESTIMONIALS.map((t) => {
              const dot = t.quote.indexOf(". ")
              const headline = dot > -1 ? t.quote.slice(0, dot + 1) : t.quote
              const body = dot > -1 ? t.quote.slice(dot + 2) : ""
              const initials = t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")
              return (
                <div key={t.name} className="rounded-2xl border border-[#1F1F1F] bg-[#141414] overflow-hidden">
                  <div className="flex items-center gap-3 p-4">
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-[14px] leading-[20px] font-normal text-white truncate">{t.name}</p>
                      <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] truncate">{t.role}</p>
                    </div>
                    <Avatar src={t.avatar} initials={initials} />
                  </div>
                  <DottedDivider />
                  <div className="flex flex-col gap-2 p-4">
                    <p className="text-[14px] leading-[20px] font-normal text-white">{headline}</p>
                    {body && <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2]">{body}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className={section}>
          <h2 className="text-[24px] leading-[32px] font-normal text-white mb-1">Pricing</h2>
          <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] mb-5">
            Our plans cover flat-price websites, subscription product design, or a custom scope built around you — pick what fits how you work.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Custom Quote */}
            <div className="flex flex-col rounded-2xl border border-[#1F1F1F] bg-[#141414] p-4">
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
            <div className="flex flex-col rounded-2xl border border-[#1F1F1F] bg-[#141414] p-4">
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
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-[#1F1F1F] bg-[#141414] p-4">
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
        </section>

        {/* More work — single images, stacked */}
        {moreWorkImages.length > 0 && (
          <section className={section}>
            <h2 className="text-[24px] leading-[32px] font-normal text-white mb-1">More Work</h2>
            <p className="text-[14px] leading-[20px] font-normal text-[#A2A2A2] mb-4">
              A selection of past projects across brand, product, and web.
            </p>
            <div className="flex flex-col gap-4">
              {moreWorkImages.map((src) => (
                <div key={src} className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#141414] p-2">
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
    </main>
  )
}
