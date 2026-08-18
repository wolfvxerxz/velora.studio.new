"use client"

import { useState, useRef, useEffect } from "react"
import type { CaseStudyTestimonial } from "@/lib/case-studies"

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
        className="h-[42px] w-[42px] flex-shrink-0 rounded-full border border-black/[0.08] object-cover"
      />
    )
  }
  return (
    <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-[#F0F1F3] text-[13px] font-medium text-[#666666]">
      {initials}
    </div>
  )
}

export function CaseStudyTestimonialCard({ testimonial }: { testimonial: CaseStudyTestimonial }) {
  const dot = testimonial.quote.indexOf(". ")
  const headline = dot > -1 ? testimonial.quote.slice(0, dot + 1) : testimonial.quote
  const body = dot > -1 ? testimonial.quote.slice(dot + 2) : ""
  const initials = testimonial.name.split(" ").map((w) => w[0]).slice(0, 2).join("")

  return (
    <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)]">
      <div className="flex items-center gap-3 p-4">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-[14px] leading-[20px] font-normal text-[#0A0A0A] truncate">{testimonial.name}</p>
          <p className="text-[14px] leading-[20px] font-normal text-[#666666] truncate">{testimonial.role}</p>
        </div>
        <Avatar src={testimonial.avatar} initials={initials} />
      </div>
      <div className="mx-4 border-t border-dotted border-black/[0.14]" />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-[14px] leading-[20px] font-normal text-[#0A0A0A]">{headline}</p>
        {body && <p className="text-[14px] leading-[20px] font-normal text-[#666666]">{body}</p>}
      </div>
    </div>
  )
}
