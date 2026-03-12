"use client"

import Image from "next/image"
import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  MagicWand01Icon,
  Layout01Icon,
  Layers01Icon,
  Megaphone01Icon,
  Mouse01Icon,
  Audit01Icon,
  GlobeIcon,
  Briefcase01Icon,
} from "@hugeicons/core-free-icons"

const clientLogos = [
  { src: "/images/brands/extsy.webp", alt: "Extsy" },
  { src: "/images/brands/webserv.webp", alt: "Webserv" },
  { src: "/images/brands/ecom.webp", alt: "Ecom Wizards" },
  { src: "/images/brands/nordeus.webp", alt: "Nordeus" },
  { src: "/images/brands/amenify.webp", alt: "Amenify" },
  { src: "/images/brands/bobos.webp", alt: "Bobos" },
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

interface WorkItem {
  src: string
  type: "image" | "video"
}

interface HomeClientProps {
  workItems: WorkItem[]
}

const TESTIMONIAL_INTERVAL_MS = 5000

export default function HomeClient({ workItems }: HomeClientProps) {
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

  const scheduleButtonClass = "rounded-full border border-black/20 px-5 py-2 text-[13px] font-normal text-black/70 hover:border-black/40 hover:text-black hover:bg-black/[0.03] transition-all duration-200 inline-flex items-center gap-2"
  const scheduleBadge = (
    <kbd className="inline-flex items-center gap-0.5 rounded border border-black/20 bg-black/[0.04] px-1.5 py-0.5 font-sans text-[10px] font-medium text-black/50">
      <span className="text-[11px]">⌘</span>K
    </kbd>
  )

  const ctaButtons = (
    <section className="flex flex-wrap gap-2 flex-shrink-0">
      <a
        href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-black px-5 py-2 text-[13px] font-normal text-white hover:bg-black/80 transition-all duration-200 inline-flex items-center"
      >
        Subscribe
      </a>
      <a
        href={scheduleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={scheduleButtonClass}
      >
        Schedule Now {scheduleBadge}
      </a>
    </section>
  )

  return (
    <main className="min-h-screen flex flex-col md:flex-row font-sans bg-white">
      {/* Left sidebar */}
      <aside
        className="w-full md:sticky md:top-0 md:h-screen md:flex-shrink-0 md:overflow-y-auto overflow-x-hidden flex flex-col"
        style={{ maxWidth: "100%", backgroundColor: "#ffffff" }}
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
                    className={`relative z-10 px-3 py-1 rounded-full text-[13px] font-normal transition-colors duration-200 ${
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
                <h1 className="text-[19px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-2">
                  Design partner for founders building in AI, web3, and startups that move fast.
                </h1>
                <p className="text-[14px] font-normal text-black/70 leading-[1.45] tracking-tight">
                  We help you go from 0→1 fast — products that attract investors, convert users, and ship on time.
                </p>
              </section>

              {divider}

              <section className="flex-shrink-0">
                <p className="text-[13px] font-normal text-black/45 mb-2 tracking-tight">Past clients include</p>
                <div className="grid grid-cols-3 gap-x-3 gap-y-2.5">
                  {clientLogos.map((logo) => (
                    <div key={logo.alt} className="h-7 flex items-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.alt === "Ecom Wizards" ? 110 : 80}
                        height={26}
                        className="object-contain object-left max-h-7 w-auto"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[13px] font-normal text-black/40 mt-1.5">and 40+ more</p>
              </section>

              {divider}

              <section className="flex flex-col gap-2 flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  <a
href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-5 py-2 text-[13px] font-normal text-white hover:bg-black/80 transition-all duration-200 inline-flex items-center"
                >
                  Subscribe
                  </a>
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={scheduleButtonClass}
                  >
                    Schedule Now {scheduleBadge}
                  </a>
                </div>
                <p className="text-[13px] font-normal text-black/55 leading-[1.45]">
                  €3,500/mo for as much design as you need, or send us a custom quote. You can pause or cancel anytime for flexibility.
                </p>
              </section>

              {divider}

              <section className="flex-shrink-0">
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {[
                    { icon: MagicWand01Icon, label: "Brand sprints",  iconClass: "icon-wand"   },
                    { icon: Layout01Icon,    label: "Wireframing",    iconClass: "icon-layout" },
                    { icon: Layers01Icon,    label: "User journeys",  iconClass: "icon-layers" },
                    { icon: Megaphone01Icon, label: "Social assets",  iconClass: "icon-mega"   },
                    { icon: Mouse01Icon,     label: "Product design", iconClass: "icon-mouse"  },
                    { icon: Audit01Icon,     label: "UX auditing",    iconClass: "icon-audit"  },
                    { icon: GlobeIcon,       label: "Web design",     iconClass: "icon-globe"  },
                    { icon: Briefcase01Icon, label: "Consulting",     iconClass: "icon-brief"  },
                  ].map(({ icon, label, iconClass }) => (
                    <div key={label} className="service-item flex items-center gap-2 cursor-default">
                      <HugeiconsIcon icon={icon} size={14} color="currentColor" strokeWidth={1.5} className={`${iconClass} text-black/40 flex-shrink-0`} />
                      <span className="text-[13px] font-normal text-black/60 tracking-tight">{label}</span>
                    </div>
                  ))}
                </div>
              </section>

            </>
          )}

          {/* Process view */}
          {sidebarView === "process" && (
            <>
              <section className="flex-shrink-0">
                <h1 className="text-[19px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-2">
                  From start to finish — how we work
                </h1>
                <p className="text-[14px] font-normal text-black/70 leading-[1.45] tracking-tight">
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
                    <p className="text-[13px] font-normal text-black mb-1 tracking-tight">{label}</p>
                    <p className="text-[14px] font-normal text-black/75 leading-[1.45] tracking-tight">{text}</p>
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
                <h1 className="text-[19px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-3">
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
                      <p className="text-[14px] font-normal text-black/75 leading-[1.45] tracking-tight line-clamp-4">
                        "{t.quote}"
                      </p>
                      <p className="text-[13px] font-normal text-black mt-3">{t.name}</p>
                      <p className="text-[12px] font-normal text-black/50 mt-0.5">{t.role}</p>
                      <p className="text-[12px] text-amber-500 mt-1.5">★★★★★</p>
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
                <div>
                  <h1 className="text-[19px] font-normal text-black leading-[1.3] tracking-[-0.01em]">Pricing</h1>
                  <p className="text-[12px] font-normal text-black/40 mt-0.5">Simple and transparent — no surprises.</p>
                </div>

                <div className="flex flex-col gap-2">
                  {/* Subscription — featured */}
                  <a
                    href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl bg-black p-4 transition-all duration-200 hover:bg-black/80"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-normal text-black/60 tracking-widest uppercase">Subscription</span>
                      <span className="text-[10px] font-normal text-black bg-white/90 rounded-full px-2.5 py-0.5 leading-none">Most popular</span>
                    </div>
                    <p className="text-[24px] font-normal text-black tracking-[-0.03em] leading-none">
                      €3,500<span className="text-[13px] font-normal text-black/60">/mo</span>
                    </p>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 mt-3 pt-3 border-t border-black/10">
                      {[
                        "Unlimited requests",
                        "2–3 updates/week",
                        "Slack or Telegram",
                        "Framer or Webflow",
                        "Product & web design",
                        "Pause or cancel anytime",
                      ].map((f) => (
                        <div key={f} className="flex items-center gap-1.5">
                          <svg width="11" height="11" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="6.5" fill="white" fillOpacity="0.12"/><path d="M4 6.5l1.8 1.8L9 4.5" stroke="white" strokeOpacity="0.7" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          <span className="text-[11px] font-normal text-white/80">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/10">
                      <span className="text-[12px] font-normal text-white/80">Get started today</span>
                      <span className="text-black/60 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-200">→</span>
                    </div>
                  </a>

                  {/* Custom + Landing side by side */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={scheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-2xl border border-black/[0.08] bg-black/[0.02] p-3.5 transition-all duration-200 hover:bg-black/[0.05] hover:border-black/15"
                    >
                      <span className="text-[10px] font-normal text-black/30 tracking-widest uppercase mb-1.5">Custom</span>
                      <p className="text-[12px] font-normal text-black/70 leading-[1.35] flex-1">Scoped to your project and budget</p>
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-black/[0.06]">
                        <span className="text-[11px] font-normal text-black/40">Book a call</span>
                        <span className="text-black/25 group-hover:text-black/60 group-hover:translate-x-0.5 transition-all duration-200 text-[12px]">→</span>
                      </div>
                    </a>
                    <a
                      href={scheduleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col rounded-2xl border border-black/[0.08] bg-black/[0.02] p-3.5 transition-all duration-200 hover:bg-black/[0.05] hover:border-black/15"
                    >
                      <span className="text-[10px] font-normal text-black/30 tracking-widest uppercase mb-1.5">Landing</span>
                      <p className="text-[20px] font-normal text-black tracking-[-0.02em] leading-none">€1,600</p>
                      <p className="text-[10px] font-normal text-black/30 mt-0.5 flex-1">flat rate</p>
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-black/[0.06]">
                        <span className="text-[11px] font-normal text-black/40">One page</span>
                        <span className="text-black/25 group-hover:text-black/60 group-hover:translate-x-0.5 transition-all duration-200 text-[12px]">→</span>
                      </div>
                    </a>
                  </div>
                </div>
              </section>

              {divider}

              {ctaButtons}
            </>
          )}

          {divider}

          <section className="flex items-center gap-3 flex-shrink-0 mt-auto pt-2">
            <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://wa.me/message/CRWTXVTJ2LCJO1" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-white transition-colors" aria-label="WhatsApp">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="https://t.me/vukkm" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-white transition-colors" aria-label="Telegram">
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </section>

        </div>
      </aside>

      {/* Right: work section — images/videos fed dynamically from server */}
      <div className="flex-1 md:overflow-y-auto p-1 bg-white">
        <div className="flex flex-col gap-1 max-w-full w-full items-stretch">
          {workItems.map(({ src, type }, i) => (
            <div key={src} className="w-full overflow-hidden rounded-[8px]">
              {type === "video" ? (
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={src}
                  alt={`Work sample ${i + 1}`}
                  className="w-full h-auto block"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
        <div className="h-10" />
      </div>
    </main>
  )
}
