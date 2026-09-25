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
      className="h-[42px] w-[42px] flex-shrink-0 rounded-full border border-[var(--t-line)] bg-[var(--t-cap)] object-cover"
    />
  )
}

export function CaseStudyTestimonialCard({ testimonial }: { testimonial: CaseStudyTestimonial }) {
  const dot = testimonial.quote.indexOf(". ")
  const headline = dot > -1 ? testimonial.quote.slice(0, dot + 1) : testimonial.quote
  const body = dot > -1 ? testimonial.quote.slice(dot + 2) : ""

  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--t-line)] bg-[var(--t-surface)] ">
      <div className="flex items-center gap-3 p-4">
        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-[14px] leading-[20px] font-normal text-[var(--t-ink)] truncate">{testimonial.name}</p>
          <p className="text-[14px] leading-[20px] font-normal text-[var(--t-muted)] truncate">{testimonial.role}</p>
        </div>
        <Avatar src={testimonial.avatar} name={testimonial.name} />
      </div>
      <div className="mx-4 border-t border-dotted border-[var(--t-line-strong)]" />
      <div className="flex flex-col gap-2 p-4">
        <p className="text-[14px] leading-[20px] font-normal text-[var(--t-ink)]">{headline}</p>
        {body && <p className="text-[14px] leading-[20px] font-normal text-[var(--t-muted)]">{body}</p>}
      </div>
    </div>
  )
}
