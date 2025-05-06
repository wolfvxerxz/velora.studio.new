"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm animate-fadeInDown">
      <div className="w-full max-w-[640px] mx-auto px-4 py-3">
        <nav className="flex flex-row items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <VeloraLogo className="w-auto h-[20px] sm:h-[22px] md:h-[24px]" />
          </Link>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="#work"
              className="px-4 py-2 text-sm sm:text-base rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-gray-200 text-center"
            >
              View Work
            </Link>
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-4 py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-[0_2px_10px_rgba(249,115,22,0.25)] hover:shadow-[0_3px_15px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Book a Intro
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
