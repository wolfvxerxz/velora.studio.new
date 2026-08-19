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
            className="group block"
            onMouseEnter={() => setHoveredSlug(study.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
            onClick={openHandler(study, onOpen)}
          >
            {/* Framed thumbnail */}
            <div className="rounded-2xl border border-black/[0.08] bg-white p-2 shadow-[0_1px_3px_rgba(30,45,82,0.06)]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.cover}
                  alt={study.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    objectPosition: study.coverPosition ?? "center",
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                    transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            {/* Name below the card */}
            <div className="mt-3 px-0.5">
              <span className="truncate text-[18px] leading-[24px] font-medium tracking-[-0.01em] text-[#0A0A0A]">
                {study.title}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
