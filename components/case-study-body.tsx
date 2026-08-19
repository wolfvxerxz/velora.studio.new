"use client"

import { CaseStudyImages } from "@/components/case-study-images"
import { CaseStudyTestimonialCard } from "@/components/case-study-testimonial"
import { type CaseStudy } from "@/lib/case-studies"

export function CaseStudyBody({ study }: { study: CaseStudy }) {
  const items =
    study.work[0]?.src === study.cover
      ? study.work
      : [{ src: study.cover, type: "image" as const, alt: `${study.title} preview` }, ...study.work]

  return (
    <>
      <p className="mt-4 text-[18px] font-normal text-[#666666] leading-[28px] tracking-[-0.01em]">
        {study.description}
      </p>

      {study.testimonial && (
        <div className="mt-8">
          <CaseStudyTestimonialCard testimonial={study.testimonial} />
        </div>
      )}

      <div className="mt-10">
        <CaseStudyImages items={items} title={study.title} />
      </div>
    </>
  )
}
