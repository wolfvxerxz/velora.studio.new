"use client"

import Image from "next/image"
import { useState, useMemo, useRef, useEffect, useCallback } from "react"

const clientLogos = [
  { src: "/images/brands/extsy.svg", alt: "Extsy" },
  { src: "/images/brands/webserv.svg", alt: "Webserv" },
  { src: "/images/brands/nordeus.svg", alt: "Nordeus" },
  { src: "/images/brands/amenify.webp", alt: "Amenify" },
  { src: "/images/brands/ecom.svg", alt: "Ecom Wizards" },
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

interface HomeClientProps {
  workImages: string[]
}

const TESTIMONIAL_INTERVAL_MS = 5000

export default function HomeClient({ workImages }: HomeClientProps) {
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

  const scheduleButtonClass = "rounded-full border border-black/20 px-5 py-2 text-[13.5px] font-normal text-black/80 hover:border-black/40 hover:text-black hover:bg-black/[0.03] transition-all duration-200 inline-flex items-center gap-2"
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
        className="rounded-full bg-black px-5 py-2 text-[13.5px] font-normal text-white hover:bg-black/80 transition-all duration-200 inline-flex items-center"
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
    <main className="min-h-screen flex font-sans bg-white">
      {/* Left sidebar */}
      <aside
        className="sticky top-0 h-screen w-full flex-shrink-0 overflow-y-auto overflow-x-hidden flex flex-col border-r border-black/[0.07]"
        style={{ maxWidth: "420px", backgroundColor: "#ffffff" }}
      >
        <div className="flex flex-col flex-1 px-7 py-7 gap-7">

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
                <h1 className="text-[21px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-3">
                  Design partner for founders building in AI, web3, and the next wave of ambitious startups.
                </h1>
                <p className="text-[13.5px] font-normal text-black/70 leading-[1.5] tracking-tight">
                  We help you go from 0→1 fast — products that attract investors, convert users, and ship on time.
                </p>
              </section>

              {divider}

              <section className="flex-shrink-0">
                <p className="text-[12px] font-normal text-black/45 mb-3 tracking-tight">Past clients include</p>
                <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                  {clientLogos.map((logo) => (
                    <div key={logo.alt} className="h-7 flex items-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={88}
                        height={28}
                        className="object-contain object-left max-h-7 w-auto brightness-0 opacity-75"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[12px] font-normal text-black/40 mt-3">and 40+ more</p>
              </section>

              {divider}

              <section className="flex flex-col gap-3 flex-shrink-0">
                <div className="flex flex-wrap gap-2">
                  <a
href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black px-5 py-2 text-[13.5px] font-normal text-white hover:bg-black/80 transition-all duration-200 inline-flex items-center"
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
                <p className="text-[12.5px] font-normal text-black/55 leading-[1.5]">
                  €3,500/mo for as much design as you need, or send us a custom quote. You can pause or cancel anytime for flexibility.
                </p>
              </section>

              {divider}

              <section className="flex-shrink-0">
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] font-normal text-black/60 tracking-tight">
                  <span>Brand sprints</span>
                  <span>Wireframing</span>
                  <span>User journeys</span>
                  <span>Social assets</span>
                  <span>Product design</span>
                  <span>UX auditing</span>
                  <span>Web design</span>
                  <span>Consulting</span>
                </div>
              </section>
            </>
          )}

          {/* Process view */}
          {sidebarView === "process" && (
            <>
              <section className="flex-shrink-0">
                <h1 className="text-[21px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-3">
                  From start to finish — how we work
                </h1>
                <p className="text-[13.5px] font-normal text-black/70 leading-[1.5] tracking-tight">
                  When you join us, we open a shared Slack or Telegram chat the same day. We send updates 2–3 times a week — what we did, what we need, and what you can check.
                </p>
              </section>

              {divider}

              <section className="flex flex-col gap-5 flex-shrink-0">
                {[
                  {
                    label: "001 Understand",
                    text: "First, we learn about your goal, your users, and what you can or can't do. We make simple sketches and plans so we all understand the same thing.",
                  },
                  {
                    label: "002 Show the Direction",
                    text: "We design the main screens and choose the style. You approve it before we continue.",
                  },
                  {
                    label: "003 Build It",
                    text: "We design all the screens and every small detail. We double-check everything to make sure it's ready to use.",
                  },
                  {
                    label: "004 Make It Perfect",
                    text: "We fix small things, add smooth interactions, and give you clean files. Your developers can start building right away.",
                  },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <p className="text-[11.5px] font-normal text-black mb-1.5 tracking-tight">{label}</p>
                    <p className="text-[13.5px] font-normal text-black/75 leading-[1.5] tracking-tight">{text}</p>
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
                <h1 className="text-[21px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-4">
                  What clients say
                </h1>
                <div className="relative min-h-[200px]">
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
                      <p className="text-[15px] font-normal text-black/75 leading-[1.45] tracking-tight">
                        "{t.quote}"
                      </p>
                      <p className="text-[13px] font-normal text-black mt-4">{t.name}</p>
                      <p className="text-[12px] font-normal text-black/50 mt-0.5">{t.role}</p>
                      <p className="text-[12px] text-amber-500 mt-2">★★★★★</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-5 flex-wrap">
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
              <section className="flex-shrink-0 flex flex-col gap-4">
                <h1 className="text-[21px] font-normal text-black leading-[1.3] tracking-[-0.01em] mb-1">
                  Pricing
                </h1>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-46U604671L576204CNC5DRPI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-black/10 bg-black/[0.02] p-4 transition-colors hover:bg-black/[0.04] hover:border-black/15"
                  >
                    <p className="text-[15px] font-normal text-black">Subscription</p>
                    <p className="text-[18px] font-normal text-black mt-1">€3,500<span className="text-[14px] font-normal text-black/50">/mo</span></p>
                    <p className="text-[12px] font-normal text-black/50 mt-2 leading-[1.4]">As much design as you need. Pause or cancel anytime.</p>
                  </a>
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-black/10 bg-black/[0.02] p-4 transition-colors hover:bg-black/[0.04] hover:border-black/15"
                  >
                    <p className="text-[15px] font-normal text-black">Custom quote</p>
                    <p className="text-[14px] font-normal text-black/60 mt-1">Tailored to your project</p>
                    <p className="text-[12px] font-normal text-black/50 mt-2 leading-[1.4]">Book a call and we’ll scope it together.</p>
                  </a>
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl border border-black/10 bg-black/[0.02] p-4 transition-colors hover:bg-black/[0.04] hover:border-black/15"
                  >
                    <p className="text-[15px] font-normal text-black">Landing page</p>
                    <p className="text-[18px] font-normal text-black mt-1">€1,600 <span className="text-[14px] font-normal text-black/50">flat</span></p>
                    <p className="text-[12px] font-normal text-black/50 mt-2 leading-[1.4]">One page, designed and delivered. Fixed price.</p>
                  </a>
                </div>
              </section>

              {divider}

              {ctaButtons}
            </>
          )}

          {divider}

          <section className="flex items-center gap-3 flex-shrink-0 mt-auto pt-2">
            <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors" aria-label="X (Twitter)">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://wa.me/message/CRWTXVTJ2LCJO1" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors" aria-label="WhatsApp">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="https://t.me/vukkm" target="_blank" rel="noopener noreferrer" className="text-black/50 hover:text-black transition-colors" aria-label="Telegram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </section>

        </div>
      </aside>

      {/* Right: work section — images fed dynamically from server */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-white">
        <div className="flex flex-col gap-3 max-w-full w-full items-stretch">
          {workImages.map((src, i) => (
            <div key={src} className="w-full rounded-[8px] p-3" style={{ backgroundColor: "#FAFAFA" }}>
              <div className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-[4px]">
                <Image
                  src={src}
                  alt={`Work sample ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 100vw"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="h-10" />
      </div>
    </main>
  )
}
