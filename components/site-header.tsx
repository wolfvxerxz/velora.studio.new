"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"
import { Menu } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-fadeInDown flex items-center justify-center py-4 mt-4 max-w-[640px] mx-auto bg-[#141415] rounded-xl px-3 sm:px-4 h-[54px] border border-zinc-800">
      <div className="flex flex-row items-center justify-between w-full">
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
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center h-[40px]"
          >
            View Work
          </Link>
          <button
            data-cal-link="vuk-m/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] h-[40px]"
          >
            <picture className="w-6 h-6 rounded-full overflow-hidden">
              <source srcSet="/images/vuk.avif" type="image/avif" />
              <source srcSet="/images/vuk.webp" type="image/webp" />
              <img
                src="/images/vuk.avif"
                alt="Vuk"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </picture>
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
            <picture className="w-8 h-8 rounded-full overflow-hidden">
              <source srcSet="/images/vuk.avif" type="image/avif" />
              <source srcSet="/images/vuk.webp" type="image/webp" />
              <img
                src="/images/vuk.avif"
                alt="Vuk"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </picture>
            <span>Call</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
