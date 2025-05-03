"use client"

import Link from "next/link"
import { VeloraLogo } from "./velora-logo"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-white dark:bg-black transition-colors duration-300 shadow-sm dark:shadow-none">
      <div className="w-full flex justify-center px-4">
        <div className="w-full flex items-center justify-between" style={{ maxWidth: "640px" }}>
          {/* Logo/Brand */}
          <div>
            <Link href="/" className="text-black dark:text-white flex items-center gap-2">
              <VeloraLogo />
            </Link>
          </div>

          {/* Navigation on right */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="#work"
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white text-xs hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors border border-gray-200 dark:border-transparent"
            >
              View Work
            </Link>
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Book a Intro
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
