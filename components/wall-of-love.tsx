"use client"

import { useEffect, useRef, useState } from "react"
import { caseStudies, type CaseStudyTestimonial } from "@/lib/case-studies"
import { generatedAvatar } from "@/lib/generated-avatar"

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

function Avatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const url = src && !failed ? src : generatedAvatar(name)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={name}
      onError={() => setFailed(true)}
      className="h-9 w-9 flex-shrink-0 rounded-full bg-[#EDEFF2] object-cover"
    />
  )
}

function TestimonialCard({ t, time }: { t: CaseStudyTestimonial; time: string }) {
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
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative mb-4 break-inside-avoid rounded-xl border border-black/[0.08] bg-white p-4 shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)]"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity",
      }}
    >
      {/* Filled quote mark, top-right */}
      <svg
        className="absolute right-4 top-4 text-black/[0.08]"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M9.5 5C6.46 5 4 7.46 4 10.5c0 2.9 2.24 5.28 5.09 5.48-.72 1.53-2.06 2.7-3.84 3.27a.6.6 0 0 0 .28 1.16c3.98-.86 7.47-4.3 7.47-9.16V10.5C13 7.46 12.54 5 9.5 5Zm9 0C15.46 5 13 7.46 13 10.5c0 2.9 2.24 5.28 5.09 5.48-.72 1.53-2.06 2.7-3.84 3.27a.6.6 0 0 0 .28 1.16C18.51 19.55 22 16.11 22 11.25V10.5C22 7.46 21.54 5 18.5 5Z" />
      </svg>
      <div className="flex items-center gap-2.5">
        <Avatar src={t.avatar} name={t.name} />
        <div className="flex min-w-0 flex-col">
          <span className="text-[14px] font-bold leading-[18px] text-[#222222]">{t.name}</span>
          <span className="text-[11px] leading-[14px] text-[#3F3F3F] opacity-50">{time}</span>
        </div>
      </div>
      <p className="mt-3 text-[14px] leading-[21px] text-[#3F3F3F]">{renderMessage(t.quote)}</p>
    </div>
  )
}

export function WallOfLove() {
  return (
    <div className="columns-1 gap-4 sm:columns-2">
      {testimonials.map((t, i) => (
        <TestimonialCard key={t.name + i} t={t} time={times[i % times.length]} />
      ))}
    </div>
  )
}
