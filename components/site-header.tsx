"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white shadow-sm animate-fadeInDown">
      <div className="w-full flex justify-center px-4">
        <div className="w-full flex items-center justify-between" style={{ maxWidth: "640px" }}>
          {/* Logo/Brand */}
          <div className="animate-fadeIn">
            <Link href="/" className="text-black flex items-center gap-2 hover:opacity-80 transition-opacity">
              <VeloraLogo />
            </Link>
          </div>

          {/* Navigation on right */}
          <div className="flex items-center gap-3 animate-fadeIn delay-200">
            <Link
              href="#work"
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-xs hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-gray-200"
            >
              View Work
            </Link>
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-[0_3px_15px_rgba(249,115,22,0.25)] hover:shadow-[0_5px_25px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Intro
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
