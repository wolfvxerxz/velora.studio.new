"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { DEFAULT_LOCATION, type CaseStudy } from "@/lib/case-studies"
import { CaseStudyBody } from "./case-study-body"

const iconBtn =
  "flex h-7 w-7 items-center justify-center rounded-md text-[#A2A2A2] transition-colors hover:bg-white/10 hover:text-white"

function ExpandIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M9 2h4v4M13 2 8 7M6 13H2V9M2 13l5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PeekIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="2" y="3.5" width="11" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function SidebarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <rect x="2" y="3" width="11" height="9" rx="1.6" stroke="currentColor" strokeWidth="1.3" />
      <line x1="9.5" y1="3" x2="9.5" y2="12" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function CollapseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 3l4 4-4 4M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CaseStudyModal({ study, onClose }: { study: CaseStudy | null; onClose: () => void }) {
  const [showDetails, setShowDetails] = useState(false)
  const [sidePeek, setSidePeek] = useState(false)

  // Keep latest onClose without making it an effect dependency
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  const isOpen = !!study

  // Reset view state whenever a different study is opened
  useEffect(() => {
    setShowDetails(false)
    setSidePeek(false)
  }, [study])

  // Lock page scroll while the modal is open (position:fixed = bulletproof,
  // also works on iOS Safari and preserves scroll position on close)
  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current()
    }
    document.addEventListener("keydown", onKey)

    const scrollY = window.scrollY
    const body = document.body
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: document.documentElement.style.overflow,
    }
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.left = "0"
    body.style.right = "0"
    body.style.width = "100%"
    document.documentElement.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      body.style.position = prev.position
      body.style.top = prev.top
      body.style.left = prev.left
      body.style.right = prev.right
      body.style.width = prev.width
      document.documentElement.style.overflow = prev.overflow
      // Restore scroll instantly (the site uses scroll-behavior: smooth globally)
      const html = document.documentElement
      const prevBehavior = html.style.scrollBehavior
      html.style.scrollBehavior = "auto"
      window.scrollTo(0, scrollY)
      html.style.scrollBehavior = prevBehavior
    }
  }, [isOpen])

  if (!study) return null

  const location = study.location ?? DEFAULT_LOCATION

  const outerClass = sidePeek
    ? "fixed inset-0 z-[100] flex items-stretch justify-end animate-modal-backdrop"
    : "fixed inset-0 z-[100] flex items-start justify-center px-4 py-6 sm:py-10 animate-modal-backdrop"

  const panelClass = sidePeek
    ? `relative flex h-full w-full flex-col border-l border-[#1F1F1F] bg-[#161616] shadow-2xl animate-modal-side ${showDetails ? "max-w-3xl" : "max-w-xl"}`
    : `relative flex max-h-[88vh] w-full flex-col overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#161616] shadow-2xl animate-modal-panel ${showDetails ? "max-w-5xl" : "max-w-3xl"}`

  return (
    <div
      className={outerClass}
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div className={panelClass} onClick={(e) => e.stopPropagation()}>
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-[#1F1F1F] px-3 py-2.5">
          <div className="flex items-center gap-0.5">
            <Link href={`/work/${study.slug}`} className={iconBtn} title="Open as full page" aria-label="Open as full page">
              <ExpandIcon />
            </Link>
            <button
              type="button"
              onClick={() => setSidePeek((v) => !v)}
              className={iconBtn}
              title="Switch peek mode"
              aria-label="Switch peek mode"
            >
              <PeekIcon />
            </button>
          </div>
          <button
            type="button"
            onClick={() => setShowDetails((v) => !v)}
            className={`${iconBtn} ${showDetails ? "bg-white/10 text-white" : ""}`}
            title="View details"
            aria-label="View details"
          >
            <SidebarIcon />
          </button>
        </div>

        {/* Body: main content + optional properties panel */}
        <div className="flex min-h-0 flex-1">
          <div className="modal-scroll flex-1 overflow-y-auto px-6 pb-8 pt-6 sm:px-10">
            {/* Velora × client logo */}
            <div className="flex items-center gap-3">
              <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="opacity-90 brightness-0 invert" />
              <span className="text-white/25 text-sm">×</span>
              <Image
                src={study.logo}
                alt={study.title}
                width={study.title === "Ecom Wizards" ? 100 : 80}
                height={24}
                className={`h-5 w-auto max-w-[100px] object-contain opacity-90 ${study.logoNoInvert ? "" : "brightness-0 invert"}`}
              />
            </div>

            <h2 className="mt-5 text-[22px] leading-[30px] font-normal tracking-[-0.02em] text-white">
              {study.title} — Design &amp; build
            </h2>

            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              className="mt-1 inline-block text-[14px] leading-[22px] font-normal text-[#6E6E6E] transition-colors hover:text-white"
            >
              {showDetails ? "Hide details" : "View details"}
            </button>

            <CaseStudyBody study={study} />
          </div>

          {showDetails && (
            <aside className="modal-scroll flex w-[260px] shrink-0 flex-col overflow-y-auto border-l border-[#1F1F1F]">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[13px] leading-[18px] font-normal text-[#6E6E6E]">Properties</span>
                <button
                  type="button"
                  onClick={() => setShowDetails(false)}
                  className={iconBtn}
                  title="Close panel"
                  aria-label="Close panel"
                >
                  <CollapseIcon />
                </button>
              </div>

              <div className="flex flex-col gap-5 px-4 pb-6">
                <div>
                  <p className="text-[13px] leading-[18px] font-normal text-[#6E6E6E]">Location</p>
                  <p className="mt-1.5 text-[14px] leading-[20px] font-normal text-white">{location}</p>
                </div>
                <div>
                  <p className="text-[13px] leading-[18px] font-normal text-[#6E6E6E]">Date</p>
                  <p className="mt-1.5 text-[14px] leading-[20px] font-normal text-white tabular-nums">{study.date}</p>
                </div>
                {study.services && study.services.length > 0 && (
                  <div>
                    <p className="text-[13px] leading-[18px] font-normal text-[#6E6E6E]">Services</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {study.services.map((s) => (
                        <span
                          key={s}
                          className="rounded-md bg-[#262626] px-2 py-1 text-[13px] leading-[16px] font-normal text-white"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {study.areas && study.areas.length > 0 && (
                  <div>
                    <p className="text-[13px] leading-[18px] font-normal text-[#6E6E6E]">Areas</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {study.areas.map((a) => (
                        <span
                          key={a}
                          className="rounded-md bg-[#262626] px-2 py-1 text-[13px] leading-[16px] font-normal text-white"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
