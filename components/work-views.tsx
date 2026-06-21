"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import { DEFAULT_LOCATION, parseMonthSpan, type CaseStudy } from "@/lib/case-studies"

export type ViewMode = "work" | "timeline" | "all" | "pricing"

interface ViewProps {
  caseStudies: CaseStudy[]
  onOpen: (study: CaseStudy) => void
}

interface WorkViewsProps extends ViewProps {
  view: ViewMode
  onViewChange: (view: ViewMode) => void
  pricing?: React.ReactNode
}

/* ----------------------------- shared helpers ----------------------------- */

const tagClass =
  "rounded-md bg-[#262626] px-2 py-0.5 text-[12px] leading-[18px] font-normal text-white whitespace-nowrap"

function openHandler(study: CaseStudy, onOpen: (s: CaseStudy) => void) {
  return (e: React.MouseEvent) => {
    // Let modifier/middle clicks open the full page; intercept plain clicks for the modal
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onOpen(study)
  }
}

function StudyLogo({ study, size = 18 }: { study: CaseStudy; size?: number }) {
  return (
    <Image
      src={study.logo}
      alt={study.title}
      width={size}
      height={size}
      className={`h-[18px] w-[18px] shrink-0 rounded-[4px] object-contain ${study.logoNoInvert ? "" : "brightness-0 invert"}`}
    />
  )
}

/* -------------------------------- view tabs ------------------------------- */

function BriefcaseIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="2" y="4.5" width="11" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 4.5V3.6C5.5 3.05 5.95 2.6 6.5 2.6h2c.55 0 1 .45 1 1v.9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2 7.6h11" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function TimelineIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="2" y="3" width="7" height="2.4" rx="1.2" fill="currentColor" />
      <rect x="5" y="9.6" width="8" height="2.4" rx="1.2" fill="currentColor" />
    </svg>
  )
}

function TableIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <rect x="2" y="2.5" width="11" height="10" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
      <line x1="2" y1="6" x2="13" y2="6" stroke="currentColor" strokeWidth="1.2" />
      <line x1="6.5" y1="6" x2="6.5" y2="12.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function PricingIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden>
      <path d="M7.6 1.9 13 7.3a1.2 1.2 0 0 1 0 1.7l-4 4a1.2 1.2 0 0 1-1.7 0L1.9 7.6V1.9h5.7Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="4.7" cy="4.7" r="0.9" fill="currentColor" />
    </svg>
  )
}

const VIEWS: { id: ViewMode; label: string; Icon: () => React.JSX.Element }[] = [
  { id: "work", label: "Work", Icon: BriefcaseIcon },
  { id: "timeline", label: "Timeline", Icon: TimelineIcon },
  { id: "all", label: "All", Icon: TableIcon },
  { id: "pricing", label: "Pricing", Icon: PricingIcon },
]

function ViewTabs({
  view,
  setView,
  showPricing,
}: {
  view: ViewMode
  setView: (v: ViewMode) => void
  showPricing: boolean
}) {
  const tabs = showPricing ? VIEWS : VIEWS.filter((v) => v.id !== "pricing")
  return (
    <div className="flex items-center gap-1">
      {tabs.map(({ id, label, Icon }) => {
        const active = view === id
        return (
          <button
            key={id}
            type="button"
            onClick={() => setView(id)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[13px] leading-[18px] font-normal transition-colors ${
              active ? "bg-[#202020] text-white" : "text-[#A2A2A2] hover:text-white hover:bg-white/5"
            }`}
          >
            <Icon />
            {label}
          </button>
        )
      })}
    </div>
  )
}

/* -------------------------------- grid view ------------------------------- */

function GridView({ caseStudies, onOpen }: ViewProps) {
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
              className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#111111]"
              style={{
                boxShadow: hovered ? "0 20px 40px -12px rgba(255,255,255,0.1)" : "0 2px 12px -4px rgba(0,0,0,0.3)",
                transform: hovered ? "translateY(-6px) scale(1.02)" : "translateY(0px) scale(1)",
                transition: "all 500ms cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {/* Logo thumbnail on a light panel */}
              <div className="flex aspect-[16/10] items-center justify-center px-6" style={{ backgroundColor: "#EEEBE6" }}>
                {study.slug === "cactus" ? (
                  <div
                    className="flex items-center gap-2.5"
                    style={{
                      transform: hovered ? "scale(1.04)" : "scale(1)",
                      transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={study.logo} alt={study.title} className="h-11 w-auto object-contain brightness-0" loading="lazy" decoding="async" />
                    <span className="text-[32px] font-semibold leading-none text-black" style={{ fontFamily: "var(--font-geist-sans)" }}>
                      Cactus
                    </span>
                  </div>
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.logo}
                      alt={study.title}
                      className={`w-auto object-contain ${study.slug === "subpay" ? "max-h-[84px] max-w-[82%]" : "max-h-14 max-w-[64%]"} ${study.logoNoInvert ? "" : "brightness-0"}`}
                      style={{
                        transform: hovered ? "scale(1.04)" : "scale(1)",
                        transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
                      }}
                      loading="lazy"
                      decoding="async"
                    />
                  </>
                )}
              </div>
              {/* Footer bar — the box exterior */}
              <div className="flex items-center gap-2 px-3 py-2.5">
                <StudyLogo study={study} />
                <span className="truncate text-[14px] leading-[22px] font-medium tracking-[-0.01em] text-white">
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

/* ------------------------------ timeline view ----------------------------- */

const NAME_COL = 132 // px — left label column
const MONTH_COL = 52 // px — width per month column
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function TimelineView({ caseStudies, onOpen }: ViewProps) {
  const { rows, months, yearGroups, minAbs, total } = useMemo(() => {
    const rows = caseStudies.map((study) => {
      const s = parseMonthSpan(study)
      return { study, startAbs: s.startY * 12 + s.startM, endAbs: s.endY * 12 + s.endM }
    })
    const minAbs = Math.min(...rows.map((r) => r.startAbs))
    const maxAbs = Math.max(...rows.map((r) => r.endAbs))
    const total = maxAbs - minAbs + 1
    const months = Array.from({ length: total }, (_, i) => {
      const abs = minAbs + i
      return { abs, y: Math.floor(abs / 12), m: abs % 12 }
    })
    // Group consecutive months by year for the top header row
    const yearGroups: { y: number; count: number }[] = []
    months.forEach((mo) => {
      const last = yearGroups[yearGroups.length - 1]
      if (last && last.y === mo.y) last.count += 1
      else yearGroups.push({ y: mo.y, count: 1 })
    })
    // Earliest first, like a real timeline
    rows.sort((a, b) => a.startAbs - b.startAbs || a.endAbs - b.endAbs)
    return { rows, months, yearGroups, minAbs, total }
  }, [caseStudies])

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#1F1F1F] bg-[#111111]">
      <div style={{ minWidth: NAME_COL + total * MONTH_COL }}>
        {/* Header: year row */}
        <div className="flex border-b border-[#1F1F1F]">
          <div className="shrink-0 border-r border-[#1F1F1F]" style={{ width: NAME_COL }} />
          <div className="flex flex-1">
            {yearGroups.map((g, i) => (
              <div
                key={g.y}
                className={`px-3 py-1.5 text-[12px] leading-[16px] font-medium text-[#A2A2A2] tabular-nums ${
                  i === 0 ? "" : "border-l border-[#1F1F1F]"
                }`}
                style={{ flex: g.count }}
              >
                {g.y}
              </div>
            ))}
          </div>
        </div>

        {/* Header: month row */}
        <div className="flex border-b border-[#1F1F1F]">
          <div className="shrink-0 border-r border-[#1F1F1F]" style={{ width: NAME_COL }} />
          <div className="flex flex-1">
            {months.map((mo, i) => (
              <div
                key={mo.abs}
                className={`flex-1 py-1.5 text-center text-[11px] leading-[14px] font-normal text-[#6E6E6E] ${
                  mo.m === 0 && i > 0 ? "border-l border-[#1F1F1F]" : ""
                }`}
              >
                {MONTH_NAMES[mo.m]}
              </div>
            ))}
          </div>
        </div>

        {/* Rows */}
        {rows.map(({ study, startAbs, endAbs }) => {
          const left = ((startAbs - minAbs) / total) * 100
          const width = ((endAbs - startAbs + 1) / total) * 100
          return (
            <div key={study.slug} className="flex border-b border-[#1F1F1F] last:border-b-0">
              <div
                className="flex shrink-0 items-center gap-2 border-r border-[#1F1F1F] px-3 py-2.5"
                style={{ width: NAME_COL }}
              >
                <StudyLogo study={study} />
                <span className="truncate text-[13px] leading-[18px] font-medium text-white">{study.title}</span>
              </div>
              <div className="relative flex-1 py-2.5">
                {/* faint year guides */}
                <div className="pointer-events-none absolute inset-0 flex">
                  {months.map((mo, i) => (
                    <div key={mo.abs} className={`flex-1 ${mo.m === 0 && i > 0 ? "border-l border-[#1F1F1F]" : ""}`} />
                  ))}
                </div>
                {/* bar */}
                <div className="relative h-8" style={{ marginLeft: `${left}%`, width: `${width}%` }}>
                  <Link
                    href={`/work/${study.slug}`}
                    onClick={openHandler(study, onOpen)}
                    className="group absolute inset-y-0 left-1.5 right-1.5 flex items-center overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#1E1E1E] px-2.5 transition-colors hover:border-[#3A3A3A] hover:bg-[#262626]"
                    title={`${study.title} · ${study.date}`}
                  >
                    <StudyLogo study={study} size={16} />
                    <span className="ml-2 truncate text-[12px] leading-[16px] font-normal text-[#D6D6D6] group-hover:text-white">
                      {study.title}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ------------------------------- table view ------------------------------- */

function TableView({ caseStudies, onOpen }: ViewProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#1F1F1F] bg-[#111111]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-[#1F1F1F]">
            {["Name", "Services", "Areas", "Location", "Date"].map((h) => (
              <th
                key={h}
                className="whitespace-nowrap px-4 py-2.5 text-[12px] leading-[16px] font-normal text-[#6E6E6E]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {caseStudies.map((study) => (
            <tr
              key={study.slug}
              className="group border-b border-[#1F1F1F] last:border-b-0 transition-colors hover:bg-white/[0.02]"
            >
              <td className="px-4 py-3 align-middle">
                <Link
                  href={`/work/${study.slug}`}
                  onClick={openHandler(study, onOpen)}
                  className="flex items-center gap-2.5"
                >
                  <StudyLogo study={study} />
                  <span className="whitespace-nowrap text-[13px] leading-[18px] font-medium text-white underline-offset-2 group-hover:underline">
                    {study.title}
                  </span>
                </Link>
              </td>
              <td className="px-4 py-3 align-middle">
                <div className="flex flex-wrap gap-1.5">
                  {(study.services ?? []).map((s) => (
                    <span key={s} className={tagClass}>
                      {s}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-3 align-middle">
                <div className="flex flex-wrap gap-1.5">
                  {(study.areas ?? []).map((a) => (
                    <span key={a} className={tagClass}>
                      {a}
                    </span>
                  ))}
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-3 align-middle text-[13px] leading-[18px] font-normal text-[#A2A2A2]">
                {study.location ?? DEFAULT_LOCATION}
              </td>
              <td className="whitespace-nowrap px-4 py-3 align-middle text-[13px] leading-[18px] font-normal text-[#A2A2A2] tabular-nums">
                {study.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* --------------------------------- shell ---------------------------------- */

export function WorkViews({ caseStudies, onOpen, view, onViewChange, pricing }: WorkViewsProps) {
  return (
    <div>
      <div className="mb-4">
        <ViewTabs view={view} setView={onViewChange} showPricing={!!pricing} />
      </div>
      {view === "work" && <GridView caseStudies={caseStudies} onOpen={onOpen} />}
      {view === "timeline" && <TimelineView caseStudies={caseStudies} onOpen={onOpen} />}
      {view === "all" && <TableView caseStudies={caseStudies} onOpen={onOpen} />}
      {view === "pricing" && pricing}
    </div>
  )
}
