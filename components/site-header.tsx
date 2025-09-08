"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"

export function SiteHeader() {
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
            href="https://www.figma.com/proto/QbXz89f7qHCP2kfFqM6eEV/Our-Work---velora.studio?node-id=9-2&p=f&t=SrwUknsZjSSmcgwX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center h-[40px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Work
          </Link>
          <Link href="/15-min">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-velora-studio hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img
                src="/images/vuk.avif"
                alt="Vuk"
                className="w-6 h-6 rounded-full"
              />
              Schedule a Call
            </button>
          </Link>
        </div>
        
        {/* Mobile Menu */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="https://www.figma.com/proto/QbXz89f7qHCP2kfFqM6eEV/Our-Work---velora.studio?node-id=9-2&p=f&t=SrwUknsZjSSmcgwX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            className="px-3 py-1.5 text-xs rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Work
          </Link>
          <button
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-velora-studio hover:bg-gray-100 transition-all duration-200"
          >
            <span>Call</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
