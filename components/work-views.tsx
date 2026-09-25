"use client"

import Link from "next/link"
import { useState } from "react"
import { type CaseStudy } from "@/lib/case-studies"

interface WorkGridProps {
  caseStudies: CaseStudy[]
  onOpen: (study: CaseStudy) => void
}

function openHandler(study: CaseStudy, onOpen: (s: CaseStudy) => void) {
  return (e: React.MouseEvent) => {
    // Let modifier/middle clicks open the full page; intercept plain clicks for the modal
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onOpen(study)
  }
}

export function WorkGrid({ caseStudies, onOpen }: WorkGridProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  return (
    <div className="grid grid-cols-2 gap-5">
      {caseStudies.map((study) => {
        const hovered = hoveredSlug === study.slug
        return (
          <Link
            key={study.slug}
            href={`/work/${study.slug}`}
            className="press group block"
            onMouseEnter={() => setHoveredSlug(study.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
            onClick={openHandler(study, onOpen)}
          >
            {/* Framed thumbnail */}
            <div className="rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2 transition-colors duration-300 group-hover:border-[var(--t-line-strong)]">
              <div className="relative aspect-[16/11] overflow-hidden">
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
            </div>
            {/* Name below the card */}
            <div className="mt-3 px-0.5">
              <span className="mono truncate text-[14px] leading-5 text-[var(--t-ink)]">
                {study.title}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
