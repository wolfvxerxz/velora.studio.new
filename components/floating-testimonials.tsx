"use client"

import { useState } from "react"
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
]
const rotations = [-3.46, 2.8, -2.4, 3.2, -3, 2.4, -2.6, 3]

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

function Chip({ t, time, rot }: { t: CaseStudyTestimonial; time: string; rot: number }) {
  return (
    <div
      className="w-[290px] rounded-lg bg-white/80 py-2 pl-2 pr-3 backdrop-blur-md"
      style={{
        transform: `rotate(${rot}deg)`,
        boxShadow:
          "0 8px 24px rgba(30,45,82,0.10), 0 0 0 1px rgba(30,45,82,0.05)",
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

function Gutter({ side, items }: { side: "left" | "right"; items: CaseStudyTestimonial[] }) {
  const isLeft = side === "left"
  return (
    <div
      className={`absolute top-0 flex h-full flex-col ${isLeft ? "left-0" : "right-0"}`}
      style={{ width: "calc((100% - 632px) / 2)" }}
    >
      {items.map((t, i) => (
        <div
          key={t.name + i}
          className={`flex flex-1 ${isLeft ? "justify-end pr-6" : "justify-start pl-6"}`}
        >
          <div className="sticky top-24 self-start">
            <Chip
              t={t}
              time={times[(isLeft ? i * 2 : i * 2 + 1) % times.length]}
              rot={rotations[(isLeft ? i * 2 : i * 2 + 1) % rotations.length]}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export function FloatingTestimonials() {
  const left = testimonials.filter((_, i) => i % 2 === 0)
  const right = testimonials.filter((_, i) => i % 2 === 1)
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden xl:block" aria-hidden>
      <Gutter side="left" items={left} />
      <Gutter side="right" items={right} />
    </div>
  )
}
