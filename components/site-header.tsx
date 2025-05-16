"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-zinc-800 backdrop-blur-sm animate-fadeInDown">
      <div className="w-full max-w-[640px] mx-auto px-4 py-3">
        <nav className="flex flex-row items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <VeloraLogo className="w-auto h-[20px] sm:h-[22px] md:h-[24px] text-white" />
          </Link>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="#work"
              className="px-4 py-2 text-sm sm:text-base rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              View Work
            </Link>
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img
                src="/images/vuk.png"
                alt="Vuk's Profile"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span>Book a Call With Vuk</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
