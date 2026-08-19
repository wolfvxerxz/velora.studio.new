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
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("")
  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        onError={() => setFailed(true)}
        className="h-9 w-9 flex-shrink-0 rounded-full object-cover"
      />
    )
  }
  return (
    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#E6EAF0] text-[11px] font-bold text-[#4B5563]">
      {initials}
    </div>
  )
}

export function WallOfLove() {
  return (
    <div className="columns-1 gap-4 sm:columns-2">
      {testimonials.map((t, i) => (
        <div
          key={t.name + i}
          className="mb-4 break-inside-avoid rounded-xl border border-black/[0.08] bg-white p-4 shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)]"
        >
          <div className="flex items-center gap-2.5">
            <Avatar src={t.avatar} name={t.name} />
            <div className="flex min-w-0 flex-col">
              <span className="text-[14px] font-bold leading-[18px] text-[#222222]">{t.name}</span>
              <span className="text-[11px] leading-[14px] text-[#3F3F3F] opacity-50">
                {times[i % times.length]}
              </span>
            </div>
          </div>
          <p className="mt-3 text-[14px] leading-[21px] text-[#3F3F3F]">
            {renderMessage(t.quote)}
          </p>
        </div>
      ))}
    </div>
  )
}
