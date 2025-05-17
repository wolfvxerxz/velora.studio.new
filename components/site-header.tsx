"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"
import { Menu } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fadeInDown flex items-center justify-center py-4">
      <div className="w-full max-w-[640px] mx-auto px-4">
        <nav className="flex flex-row items-center justify-between bg-[#141415] rounded-xl px-3 sm:px-4 h-[54px] border border-zinc-800">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <VeloraLogo className="w-auto h-[18px] xs:h-[20px] sm:h-[22px] md:h-[24px] text-white" />
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden sm:flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href="#work"
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              View Work
            </Link>
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img
                src="/images/vuk.png"
                alt="Vuk's Profile"
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover"
              />
              <span className="hidden md:inline">Book a Call With Vuk</span>
              <span className="md:hidden">Book a Call</span>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="#work"
              className="px-3 py-1.5 text-xs rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
            >
              Work
            </Link>
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img
                src="/images/vuk.png"
                alt="Vuk's Profile"
                className="w-4 h-4 rounded-full object-cover"
              />
              <span>Call</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
