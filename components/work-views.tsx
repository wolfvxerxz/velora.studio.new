"use client"

import Link from "next/link"
import { useState } from "react"
import { type CaseStudy } from "@/lib/case-studies"
import { SpotlightCard } from "@/components/ui/spotlight-card"

interface WorkGridProps {
  caseStudies: CaseStudy[]
}

export function WorkGrid({ caseStudies }: WorkGridProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  return (
    <div className="grid grid-cols-2 gap-5">
      {caseStudies.map((study, i) => {
        const hovered = hoveredSlug === study.slug
        return (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className={`press group block ${i === 0 ? "col-span-2" : ""}`}
            onMouseEnter={() => setHoveredSlug(study.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
          >
            {/* Framed thumbnail */}
            <SpotlightCard className="rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2 transition-colors duration-300 group-hover:border-[var(--t-line-strong)]">
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[16/11]"}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.cover}
                  alt={study.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    objectPosition: study.coverPosition ?? "center",
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 900ms var(--spring)",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </SpotlightCard>
            {/* Name + one-line story, inline like a caption */}
            <p className="mt-3 px-0.5 text-[13px] leading-[18px]">
              <span className="text-[var(--t-ink)]">{study.title}</span>
              {study.tagline && <span className="ml-2 text-[var(--t-faint)]">{study.tagline}</span>}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
