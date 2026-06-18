"use client"

import { useEffect } from "react"
import Link from "next/link"
import type { CaseStudy } from "@/lib/case-studies"
import { CaseStudyBody } from "./case-study-body"

export function CaseStudyModal({ study, onClose }: { study: CaseStudy | null; onClose: () => void }) {
  useEffect(() => {
    if (!study) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [study, onClose])

  if (!study) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-6 sm:py-10 animate-fadeIn"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-[#1F1F1F] bg-[#161616] shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-end rounded-t-2xl bg-[#161616] px-4 py-3">
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[#A2A2A2] transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-8 sm:px-10">
          {/* Logo tile */}
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#1F1F1F]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={study.logo}
              alt={study.title}
              className={`max-h-9 max-w-[44px] w-auto object-contain ${study.logoNoInvert ? "" : "brightness-0 invert"}`}
            />
          </div>

          <h2 className="mt-5 text-[28px] leading-[34px] font-normal tracking-[-0.02em] text-white">
            {study.title}
          </h2>

          <Link
            href={`/work/${study.slug}`}
            className="mt-1 inline-block text-[14px] leading-[22px] font-normal text-[#6E6E6E] underline-offset-2 transition-colors hover:text-white hover:underline"
          >
            View details
          </Link>

          <CaseStudyBody study={study} />
        </div>
      </div>
    </div>
  )
}
