"use client"

import Link from "next/link"
import { useState } from "react"
import type { CaseStudy } from "@/lib/case-studies"

interface WorkGridProps {
  caseStudies: CaseStudy[]
}

export function WorkGrid({ caseStudies }: WorkGridProps) {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null)

  return (
    <div className="flex-1 md:h-screen md:overflow-y-auto" style={{ backgroundColor: "#fafafa" }}>
      <div className="p-5 md:p-6">
        <header className="mb-4 flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-black leading-[28px] tracking-[-0.01em]">Work.</h2>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {caseStudies.map((study) => {
            const isHovered = hoveredSlug === study.slug
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block"
                onMouseEnter={() => setHoveredSlug(study.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div
                  className="overflow-hidden rounded-2xl border-[4px] border-white bg-white"
                  style={{
                    boxShadow: isHovered
                      ? "0 12px 32px -8px rgba(0,0,0,0.14), 0 2px 8px -4px rgba(0,0,0,0.06)"
                      : "0 2px 12px -4px rgba(0,0,0,0.07)",
                    transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                    transition: "transform 500ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 500ms cubic-bezier(0.23, 1, 0.32, 1)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={study.cover}
                    alt={study.title}
                    className="aspect-[16/11] w-full object-cover object-center"
                    style={{
                      transform: isHovered ? "scale(1.03)" : "scale(1)",
                      transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-2 px-0.5">
                  <span
                    className="text-[14px] leading-[22px] font-medium tracking-[-0.01em] truncate"
                    style={{
                      color: isHovered ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.75)",
                      transition: "color 300ms ease-out",
                    }}
                  >
                    {study.title}
                  </span>
                  <span className="shrink-0 text-[14px] leading-[22px] font-normal text-black/40 tabular-nums">
                    {study.date}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
