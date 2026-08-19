"use client"

import { useState } from "react"
import type { CaseStudyTestimonial } from "@/lib/case-studies"
import { generatedAvatar } from "@/lib/generated-avatar"

function Avatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const url = src && !failed ? src : generatedAvatar(name)
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={name}
      width={42}
      height={42}
      onError={() => setFailed(true)}
      className="h-[42px] w-[42px] flex-shrink-0 rounded-full border border-black/[0.08] bg-[#EDEFF2] object-cover"
    />
  )
}

export function CaseStudyTestimonialCard({ testimonial }: { testimonial: CaseStudyTestimonial }) {
  const dot = testimonial.quote.indexOf(". ")
  const headline = dot > -1 ? testimonial.quote.slice(0, dot + 1) : testimonial.quote
  const body = dot > -1 ? testimonial.quote.slice(dot + 2) : ""

  return (
    <div className="rounded-2xl overflow-hidden border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)]">
      <div className="flex items-center gap-3 p-4">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-[14px] leading-[20px] font-normal text-[#0A0A0A] truncate">{testimonial.name}</p>
          <p className="text-[14px] leading-[20px] font-normal text-[#666666] truncate">{testimonial.role}</p>
        </div>
        <Avatar src={testimonial.avatar} name={testimonial.name} />
      </div>
      <div className="mx-4 border-t border-dotted border-black/[0.14]" />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-[14px] leading-[20px] font-normal text-[#0A0A0A]">{headline}</p>
        {body && <p className="text-[14px] leading-[20px] font-normal text-[#666666]">{body}</p>}
      </div>
    </div>
  )
}
