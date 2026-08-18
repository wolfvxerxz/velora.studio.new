"use client"

import { CaseStudyImages } from "@/components/case-study-images"
import { CaseStudyTestimonialCard } from "@/components/case-study-testimonial"
import { DEFAULT_LOCATION, type CaseStudy } from "@/lib/case-studies"

export function CaseStudyBody({ study }: { study: CaseStudy }) {
  const location = study.location ?? DEFAULT_LOCATION
  const items =
    study.work[0]?.src === study.cover
      ? study.work
      : [{ src: study.cover, type: "image" as const, alt: `${study.title} preview` }, ...study.work]

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[13px] leading-[18px] font-normal text-[#999999]">Location</p>
          <p className="mt-1 text-[14px] leading-[20px] font-normal text-[#0A0A0A]">{location}</p>
        </div>
        <div>
          <p className="text-[13px] leading-[18px] font-normal text-[#999999]">Date</p>
          <p className="mt-1 text-[14px] leading-[20px] font-normal text-[#0A0A0A] tabular-nums">{study.date}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-black/[0.08]" />

      <p className="mt-6 text-[16px] font-normal text-[#666666] leading-[26px] tracking-tight">
        {study.description}
      </p>

      {study.testimonial && (
        <div className="mt-8">
          <CaseStudyTestimonialCard testimonial={study.testimonial} />
        </div>
      )}

      <div className="mt-8">
        <CaseStudyImages items={items} title={study.title} />
      </div>
    </>
  )
}
