"use client"

import Image from "next/image"
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

function StudyLogo({ study }: { study: CaseStudy }) {
  return (
    <Image
      src={study.logo}
      alt={study.title}
      width={18}
      height={18}
      className="h-[18px] w-[18px] shrink-0 rounded-[4px] object-contain"
    />
  )
}

export function WorkGrid({ caseStudies, onOpen }: WorkGridProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
            <div
              className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_1px_2px_rgba(30,45,82,0.06),0_1px_3px_rgba(30,45,82,0.04)]"
              style={{
                boxShadow: hovered ? "0 18px 40px -12px rgba(30,45,82,0.18)" : "0 1px 3px rgba(30,45,82,0.06)",
                transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0px) scale(1)",
                transition: "all 500ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {/* Hero thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.cover}
                  alt={study.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    objectPosition: study.coverPosition ?? "center",
                    transform: hovered ? "scale(1.03)" : "scale(1)",
                    transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Footer bar — the box exterior */}
              <div className="flex items-center gap-2 px-3 py-2.5">
                <StudyLogo study={study} />
                <span className="truncate text-[14px] leading-[22px] font-medium tracking-[-0.01em] text-[#0A0A0A]">
                  {study.title}
                </span>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
