"use client"

import { useEffect, useRef, useState } from "react"
import { caseStudies, type CaseStudyTestimonial } from "@/lib/case-studies"

const testimonials = caseStudies
  .map((c) => c.testimonial)
  .filter((t): t is CaseStudyTestimonial => !!t)

const times = [
  "Yesterday at 18:06 PM",
  "Yesterday at 09:24 AM",
  "Monday at 14:02 PM",
  "Tuesday at 11:47 AM",
  "Yesterday at 20:15 PM",
  "Friday at 16:38 PM",
  "Wednesday at 08:52 AM",
  "Thursday at 13:10 PM",
  "Monday at 10:31 AM",
  "Yesterday at 15:52 PM",
  "Tuesday at 19:08 PM",
  "Friday at 12:20 PM",
  "Thursday at 17:44 PM",
]
const rotations = [-3.46, 2.8, -2.4, 3.2, -3, 2.4, -2.6, 3, -3.2, 2.6, -2.8, 3.4, -2.2]

/** Trim a quote to its first sentence so the chip stays compact. */
function firstSentence(quote: string): string {
  const i = quote.indexOf(". ")
  return i > -1 ? quote.slice(0, i + 1) : quote
}

/** Wrap Vuk / Velora / velora.studio mentions in a Slack-style highlight. */
function renderMessage(text: string) {
  const parts = text.split(/(velora\.studio|\bVelora\b|\bVuk\b)/gi)
  return parts.map((part, i) => {
    if (/^velora\.studio$/i.test(part) || /^velora$/i.test(part))
      return (
        <span key={i} className="rounded-[3px] bg-[#ECF5FA] px-1 text-[#2F6F8F]">
          @Velora
        </span>
      )
    if (/^vuk$/i.test(part))
      return (
        <span key={i} className="rounded-[3px] bg-[#ECF5FA] px-1 text-[#2F6F8F]">
          @Vuk
        </span>
      )
    return <span key={i}>{part}</span>
  })
}

function ChipAvatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("")
  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
      />
    )
  }
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E6EAF0] text-[10px] font-bold text-[#4B5563]">
      {initials}
    </div>
  )
}

/** Fade + slide + settle-into-rotation reveal, triggered when scrolled into view. */
function Reveal({ rot, children }: { rot: number; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown
          ? `translateY(0) scale(1) rotate(${rot}deg)`
          : `translateY(22px) scale(0.92) rotate(0deg)`,
        transition:
          "opacity 900ms cubic-bezier(0.16, 1, 0.3, 1), transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}

function Chip({ t, time }: { t: CaseStudyTestimonial; time: string }) {
  return (
    <div
      className="w-[290px] rounded-lg bg-white/80 py-2 pl-2 pr-3 backdrop-blur-md"
      style={{
        boxShadow: "0 8px 24px rgba(30,45,82,0.10), 0 0 0 1px rgba(30,45,82,0.05)",
      }}
    >
      <div className="flex items-start gap-2">
        <ChipAvatar src={t.avatar} name={t.name} />
        <div className="flex min-w-0 flex-col gap-0.5">
          <div className="flex items-baseline gap-2">
            <span className="text-[12px] font-bold leading-[14px] text-[#222222]">{t.name}</span>
            <span className="text-[9px] leading-[11px] tracking-[-0.02em] text-[#3F3F3F] opacity-50">
              {time}
            </span>
          </div>
          <p className="text-[12px] leading-[15px] text-[#3F3F3F]">
            {renderMessage(firstSentence(t.quote))}
          </p>
        </div>
      </div>
    </div>
  )
}

function Gutter({
  side,
  items,
  indices,
}: {
  side: "left" | "right"
  items: CaseStudyTestimonial[]
  indices: number[]
}) {
  const isLeft = side === "left"
  return (
    <div
      className={`absolute top-0 flex h-full flex-col ${isLeft ? "left-0" : "right-0"}`}
      style={{ width: "calc((100% - 632px) / 2)" }}
    >
      {items.map((t, i) => {
        const globalIdx = indices[i]
        return (
          <div
            key={t.name + i}
            className={`flex min-h-0 flex-1 items-center ${isLeft ? "justify-end pr-6" : "justify-start pl-6"}`}
          >
            <Reveal rot={rotations[globalIdx % rotations.length]}>
              <Chip t={t} time={times[globalIdx % times.length]} />
            </Reveal>
          </div>
        )
      })}
    </div>
  )
}

export function FloatingTestimonials() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  // Dynamically span the gutters from the top of the page down to the Pricing
  // section, so every chip is distributed within that region.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const measure = () => {
      const pricing = document.getElementById("pricing")
      if (!pricing) return
      const h = pricing.getBoundingClientRect().top - root.getBoundingClientRect().top
      if (h > 0) setHeight(h)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    window.addEventListener("resize", measure)
    // Re-measure after fonts/images settle
    const t1 = setTimeout(measure, 400)
    const t2 = setTimeout(measure, 1200)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  const leftIdx = testimonials.map((_, i) => i).filter((i) => i % 2 === 0)
  const rightIdx = testimonials.map((_, i) => i).filter((i) => i % 2 === 1)
  const left = leftIdx.map((i) => testimonials[i])
  const right = rightIdx.map((i) => testimonials[i])

  return (
    <div
      ref={rootRef}
      className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden xl:block"
      style={{ height: height ?? undefined }}
      aria-hidden
    >
      {height !== null && (
        <>
          <Gutter side="left" items={left} indices={leftIdx} />
          <Gutter side="right" items={right} indices={rightIdx} />
        </>
      )}
    </div>
  )
}
