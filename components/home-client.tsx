"use client"

import Image from "next/image"
import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  FlashIcon,
  SparklesIcon,
  HeartCheckIcon,
  Layout01Icon,
  FramerIcon,
  CheckmarkCircle01Icon,
  Refresh01Icon,
  Calendar01Icon,
  FigmaIcon,
  Infinity01Icon,
  Message01Icon,
  PauseCircleIcon,
  BinaryCodeIcon,
} from "@hugeicons/core-free-icons"
import type { CaseStudy } from "@/lib/case-studies"
import { WorkGrid } from "@/components/work-grid"

const clientLogos = [
  { src: "/images/brands/extsy.webp", alt: "Extsy" },
  { src: "/images/brands/webserv.webp", alt: "Webserv" },
  { src: "/images/brands/ecom.webp", alt: "Ecom Wizards" },
  { src: "/images/brands/nordeus.webp", alt: "Nordeus" },
  { src: "/images/brands/amenify.webp", alt: "Amenify" },
  { src: "/images/brands/bobos.webp", alt: "Bobos" },
  { src: "/case/SubPay/logo.svg", alt: "SubPay" },
  { src: "/case/Armature/armature-logo.svg", alt: "Armature" },
  { src: "/case/Cactus/cactus-logo.png", alt: "Cactus" },
  { src: "/case/InsForge/insforge-logo.svg", alt: "InsForge" },
]

type SidebarView = "index" | "process" | "about" | "pricing"

const TESTIMONIALS = [
  {
    quote: "Working with Vuk was effortless. From our first chat he understood my brand, refining my ideas with his own creative polish. Every update matched my vision, only better. Truly a 10/10 experience.",
    name: "Victor Uhl",
    role: "Founder, Ecom Wizards",
  },
  {
    quote: "velora.studio understood our vision immediately and worked efficiently. The final product has significantly improved our brand presence. Working with them has been one of our best decisions.",
    name: "Everett Lynn",
    role: "Founder & CEO, Amenify",
  },
  {
    quote: "As we scaled Bobo's Oat Bars, we needed a website that could reflect our homemade quality while appealing to a national audience. velora.studio delivered exactly that — a warm, inviting digital storefront.",
    name: "Beryl Stafford",
    role: "Founder & President, Bobo's Oat Bars",
  },
  {
    quote: "We needed a product that felt premium and moved fast. Velora got the balance right from day one. Clean UI, clear flows, and they shipped on time. Would work with them again in a heartbeat.",
    name: "Marcus Chen",
    role: "Head of Product, FlowSync",
  },
  {
    quote: "Our rebrand could have been a mess. Instead, Velora gave us a system we actually use — consistent, scalable, and on-brand everywhere. The team is sharp and easy to work with.",
    name: "Sarah Reeves",
    role: "Marketing Director, Nordeus",
  },
  {
    quote: "From wireframes to launch, the process was transparent and iterative. They asked the right questions and pushed back when it mattered. Our conversion rate went up 40% after the redesign.",
    name: "James Okonkwo",
    role: "Co-founder, Extsy",
  },
  {
    quote: "We're a small team with big ambitions. Velora felt like an extension of us — same pace, same standards. The design they delivered became our competitive edge.",
    name: "Elena Vasquez",
    role: "CEO, Copilot Labs",
  },
]

interface HomeClientProps {
  caseStudies: CaseStudy[]
}

const TESTIMONIAL_INTERVAL_MS = 5000

export default function HomeClient({ caseStudies }: HomeClientProps) {
  const [sidebarView, setSidebarView] = useState<SidebarView>("index")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const testimonialIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const navRef = useRef<HTMLElement>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  const navItems = useMemo<{ view: SidebarView; label: string }[]>(
    () => [
      { view: "index", label: "Studio" },
      { view: "process", label: "Process" },
      { view: "about", label: "Testimonial" },
      { view: "pricing", label: "Pricing" },
    ],
    []
  )

  const updatePill = (index: number) => {
    const btn = buttonRefs.current[index]
    const nav = navRef.current
    if (!btn || !nav) return
    const nr = nav.getBoundingClientRect()
    const br = btn.getBoundingClientRect()
    setPillStyle({
      left: br.left - nr.left,
      width: br.width,
    })
  }

  useEffect(() => {
    const index = hoveredIndex ?? navItems.findIndex(({ view }) => view === sidebarView)
    if (index >= 0) updatePill(index)
  }, [hoveredIndex, sidebarView, navItems])

  useEffect(() => {
    const index = navItems.findIndex(({ view }) => view === sidebarView)
    if (index >= 0) {
      const t = requestAnimationFrame(() => updatePill(index))
      return () => cancelAnimationFrame(t)
    }
  }, [])

  const scheduleUrl = "https://cal.com/vuk-m/15min"

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        window.open(scheduleUrl, "_blank", "noopener,noreferrer")
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const startTestimonialTimer = useCallback(() => {
    if (testimonialIntervalRef.current) clearInterval(testimonialIntervalRef.current)
    testimonialIntervalRef.current = setInterval(
      () => setTestimonialIndex((i) => (i + 1) % TESTIMONIALS.length),
      TESTIMONIAL_INTERVAL_MS
    )
  }, [])

  useEffect(() => {
    if (sidebarView !== "about") {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
        testimonialIntervalRef.current = null
      }
      return
    }
    startTestimonialTimer()
    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current)
        testimonialIntervalRef.current = null
      }
    }
  }, [sidebarView, startTestimonialTimer])

  const divider = <hr className="border-0 border-t border-black/[0.07] flex-shrink-0" />

  const scheduleButtonClass = "rounded-full bg-white px-4 py-0 h-9 text-[14px] leading-[22px] font-normal text-black hover:bg-neutral-50 transition-all duration-200 inline-flex items-center" + " " + "border-[0.5px] border-[#F0F0F0]"

  const pricingFeatureIconClass = "text-black/45 flex-shrink-0"

  const featureIcon = (label: string): string => {
    const l = label.toLowerCase()
    if (l.includes("figma")) return "/icons/figma.svg"
    if (l.includes("week")) return "/icons/trial-week.svg"
    if (l.includes("framer") || l.includes("webflow")) return "/icons/framer.svg"
    return "/icons/checked.svg"
  }

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

  const ctaButtons = (
    <section className="flex flex-wrap gap-2 flex-shrink-0">
      <a
        href={scheduleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-black px-4 py-0 h-9 text-[14px] leading-[22px] font-normal text-white hover:bg-black/80 transition-all duration-200 inline-flex items-center"
      >
        Schedule Now
      </a>
      <button
        type="button"
        onClick={() => setSidebarView("pricing")}
        className={scheduleButtonClass}
      >
        View pricing
      </button>
    </section>
  )

  return (
    <main className="min-h-screen flex flex-col md:flex-row font-sans bg-white">
      {/* Left sidebar */}
      <aside
        className="w-full md:w-[420px] md:sticky md:top-0 md:h-screen md:flex-shrink-0 md:overflow-y-auto overflow-x-hidden flex flex-col"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="flex flex-col flex-1 px-5 py-5 gap-4 md:max-w-[420px] md:w-[420px]">

          {/* Logo + Nav */}
          <header className="flex items-center justify-between flex-shrink-0">
            <Image src="/logo/logo-v.svg" alt="Velora" width={32} height={32} className="opacity-90" priority />
            <nav
              ref={navRef}
              className="relative flex gap-0.5 rounded-full bg-black/[0.05] p-1"
            >
              <span
                className="absolute top-1 bottom-1 rounded-full bg-white shadow-sm transition-all duration-200 ease-out"
                style={{ left: pillStyle.left + 2, width: pillStyle.width - 4 }}
              />
              {navItems.map(({ view, label }, i) => {
                const isActive = sidebarView === view
                return (
                  <button
                    key={view}
                    ref={(el) => { buttonRefs.current[i] = el }}
                    type="button"
                    onClick={() => setSidebarView(view)}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative z-10 px-3 py-1 rounded-full text-[14px] leading-[22px] font-normal transition-colors duration-200 ${
                      isActive ? "text-black" : "text-black/45 hover:text-black/75"
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </nav>
          </header>

          {divider}

          {/* Studio view */}
          {sidebarView === "index" && (
            <>
              <section className="flex-shrink-0">
                <h1 className="text-[20px] font-normal text-black leading-[28px] tracking-[-0.01em] mb-2">
                  Design Studio for founders building in AI. Backed by YC and a16z
                </h1>
                <p className="text-[16px] font-normal text-black/70 leading-[26px] tracking-tight">
                  We help you go from 0→1 fast — products that attract investors, convert users, and ship on time.
                </p>
              </section>

              {divider}

              <section className="flex-shrink-0">
                <p className="text-[14px] leading-[22px] font-normal text-black/45 mb-2 tracking-tight">Past clients include</p>
                <div className="grid grid-cols-3 gap-2">
                  {clientLogos.map((logo) => (
                    <div key={logo.alt} className="flex items-center justify-center gap-1.5 rounded-[10px] border-[1.5px] border-white bg-white shadow-[0_1px_6px_-2px_rgba(0,0,0,0.07)] px-3 py-2.5 h-[44px]">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.alt === "Ecom Wizards" ? 90 : 70}
                        height={22}
                        className="object-contain max-h-[22px] w-auto opacity-85"
                      />
                      {logo.alt === "Cactus" && (
                        <span className="text-[13px] font-semibold text-black leading-none" style={{ fontFamily: "var(--font-geist-sans)" }}>Cactus</span>
                      )}
                    </div>
                  ))}
                  {clientLogos.length % 3 !== 0 && (
                    <div className="flex items-center px-1 h-[44px]">
                      <span className="text-[14px] leading-[22px] font-normal text-black/40">and 40+ more</span>
                    </div>
                  )}
                </div>
                {clientLogos.length % 3 === 0 && (
                  <p className="text-[14px] leading-[22px] font-normal text-black/40 mt-1.5">and 40+ more</p>
                )}
              </section>

              {divider}

              <section className="flex flex-col gap-2 flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black px-4 py-0 h-9 text-[14px] leading-[22px] font-normal text-white hover:bg-black/80 transition-all duration-200 inline-flex items-center"
                  >
                    Schedule Now
                  </a>
                  <button
                    type="button"
                    onClick={() => setSidebarView("pricing")}
                    className={scheduleButtonClass}
                  >
                    View pricing
                  </button>
                </div>
                <p className="text-[14px] leading-[22px] font-normal text-black/55">
                  €5,000/mo for as much design as you need, or send us a custom quote. You can pause or cancel anytime for flexibility.
                </p>
              </section>

            </>
          )}

          {/* Process view */}
          {sidebarView === "process" && (
            <>
              <section className="flex-shrink-0">
                <h1 className="text-[20px] font-normal text-black leading-[28px] tracking-[-0.01em] mb-2">
                  From start to finish — how we work
                </h1>
                <p className="text-[16px] font-normal text-black/70 leading-[26px] tracking-tight">
                  When you join us, we open a shared Slack or WhatsApp/Telegram chat the same day. We send updates 2–3 times a week — what we did, what we need, and what you can check.
                </p>
              </section>

              {divider}

              <section className="flex flex-col gap-3 flex-shrink-0">
                {[
                  {
                    label: "001 Align",
                    text: "We dig into your goals, users, and constraints. We create moodboards, map user flows, and design wireframes so everyone's on the same page.",
                  },
                  {
                    label: "002 Direct",
                    text: "We design the key screens and establish a clear visual direction. You sign off before we build out the rest.",
                  },
                  {
                    label: "003 Build",
                    text: "We design every screen, state, and edge case. Internal reviews keep everything consistent and ship-ready.",
                  },
                  {
                    label: "004 Develop",
                    text: "We turn the designs into a fully functional website using Framer or Webflow — depending on your needs. Clean build, smooth interactions, and fully responsive across devices.",
                  },
                  {
                    label: "005 Launch",
                    text: "We test everything, connect domains, optimize performance, and push the site live. From first click to final deploy — it's ready for the world.",
                  },
                ].map(({ label, text }) => (
                  <div key={label} className="flex-shrink-0">
                    <p className="text-[12px] leading-[20px] font-normal text-black mb-1 tracking-tight">{label}</p>
                    <p className="text-[14px] font-normal text-black/75 leading-[22px] tracking-tight">{text}</p>
                  </div>
                ))}
              </section>

              {divider}

              {ctaButtons}
            </>
          )}

          {/* Testimonial view — Apple-style crossfade, one at a time */}
          {sidebarView === "about" && (
            <>
              <section className="flex-shrink-0 flex flex-col min-h-0">
                <h1 className="text-[20px] font-normal text-black leading-[28px] tracking-[-0.01em] mb-3">
                  What clients say
                </h1>
                <div className="relative min-h-[180px]">
                  {TESTIMONIALS.map((t, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 flex flex-col justify-center"
                      style={{
                        opacity: i === testimonialIndex ? 1 : 0,
                        pointerEvents: i === testimonialIndex ? "auto" : "none",
                        transition: "opacity 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <p className="text-[16px] font-normal text-black/75 leading-[26px] tracking-tight line-clamp-4">
                        "{t.quote}"
                      </p>
                      <p className="text-[14px] leading-[22px] font-normal text-black mt-3">{t.name}</p>
                      <p className="text-[14px] leading-[22px] font-normal text-black/50 mt-0.5">{t.role}</p>
                      <p className="text-[14px] leading-[22px] text-amber-500 mt-1.5">★★★★★</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setTestimonialIndex(i)
                        startTestimonialTimer()
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === testimonialIndex ? "w-5 bg-black" : "w-1.5 bg-black/20 hover:bg-black/35"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </section>

              {divider}

              {ctaButtons}
            </>
          )}

          {/* Pricing view */}
          {sidebarView === "pricing" && (
            <>
              <section className="flex-shrink-0 flex flex-col gap-3">
                <p className="text-[14px] leading-[22px] font-normal text-black/65 tracking-tight">
                  Our plans cover flat-price websites, subscription product design, or a custom scope built around you — pick what fits how you work.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {/* Custom quote */}
                  <div className="flex flex-col rounded-2xl border-[1.5px] border-white bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.07)] p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-normal text-black/45">
                      <HugeiconsIcon icon={FlashIcon} size={12} color="currentColor" strokeWidth={1.5} className={pricingFeatureIconClass} />
                      0→1 Design
                    </div>
                    <h2 className="text-[16px] font-normal text-black leading-[26px] tracking-[-0.02em]">
                      Custom Quote
                    </h2>
                    <p className="mt-1.5 text-[10px] font-normal text-black/50 leading-snug">
                      Your go-to for whatever you need — brand, product, web, and build.
                    </p>
                    <ul className="mt-3 flex flex-1 flex-col gap-2">
                      {customQuoteFeatures.map((label) => {
                        const isFramerWebflow = label.toLowerCase().includes("framer") || label.toLowerCase().includes("webflow")
                        return (
                          <li key={label} className="flex items-center gap-1.5 text-[10px] font-normal leading-snug text-black/70">
                            {isFramerWebflow ? (
                              <>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/icons/framer.svg" alt="" width={12} height={12} className="opacity-50 flex-shrink-0" />
                                <span className="flex items-center gap-1">
                                  Framer or
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src="/icons/webflow.svg" alt="" width={12} height={12} className="opacity-50 flex-shrink-0" />
                                  Webflow
                                </span>
                              </>
                            ) : (
                              <>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={featureIcon(label)} alt="" width={12} height={12} className="opacity-50 flex-shrink-0" />
                                {label}
                              </>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                    <a
                      href={scheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex w-full items-center justify-center rounded-full border border-black/20 py-2 text-[11px] font-normal text-black/70 transition-all duration-200 hover:border-black/40 hover:bg-black/[0.03] hover:text-black"
                    >
                      Share your vision
                    </a>
                  </div>

                  {/* Subscription */}
                  <div className="flex flex-col rounded-2xl border-[1.5px] border-white bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.07)] p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] font-normal text-black/45">
                      <HugeiconsIcon icon={SparklesIcon} size={12} color="currentColor" strokeWidth={1.5} className={pricingFeatureIconClass} />
                      Design Partner
                    </div>
                    <p className="text-[20px] font-normal text-black leading-[28px] tracking-[-0.03em] tabular-nums">
                      €5,000<span className="text-[14px] font-normal text-black/40">/mo</span>
                    </p>
                    <p className="mt-1.5 text-[10px] font-normal text-black/50 leading-snug">
                      Unlimited design for teams that ship every week.
                    </p>
                    <ul className="mt-3 flex flex-1 flex-col gap-2">
                      {subscriptionFeatures.map((label) => (
                        <li key={label} className="flex items-center gap-1.5 text-[10px] font-normal leading-snug text-black/70">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={featureIcon(label)} alt="" width={12} height={12} className="opacity-50 flex-shrink-0" />
                          {label}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex w-full items-center justify-center rounded-full bg-black py-2 text-[11px] font-normal text-white transition-all duration-200 hover:bg-black/80"
                    >
                      Let&apos;s work together
                    </a>
                  </div>
                </div>
              </section>

              {divider}

              {ctaButtons}
            </>
          )}

        </div>
      </aside>

      <WorkGrid caseStudies={caseStudies.filter(s => s.cover.startsWith("/case/"))} />
    </main>
  )
}
