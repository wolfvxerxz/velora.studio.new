import Link from "next/link"
import { XLogo } from "./icons/x-logo"

export function SiteFooter() {
  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-white border-t border-gray-200">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[640px] animate-fadeIn">
          <h3 className="text-xl sm:text-2xl font-normal mb-4 sm:mb-6 text-black animate-fadeInUp delay-100">
            Elevate your idea from 0 → 1 with velora.studio.
          </h3>

          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 animate-fadeInUp delay-200">
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-[0_3px_15px_rgba(249,115,22,0.25)] hover:shadow-[0_5px_25px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Intro
            </button>
            <Link
              href="#work"
              className="px-4 sm:px-6 py-2 rounded-full bg-gray-100 text-black text-sm sm:text-base hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Work
            </Link>
          </div>

          <p className="text-gray-600 text-sm sm:text-base mb-8 sm:mb-12 animate-fadeInUp delay-300">
            Or drop us an email →{" "}
            <a href="mailto:contact@velora.studio" className="text-black hover:underline hover:text-orange-500 transition-colors">
              contact@velora.studio
            </a>
          </p>

          <div className="flex justify-between items-center animate-fadeInUp delay-400">
            <p className="text-sm sm:text-base text-gray-500">© velora.studio 2025</p>
            <a 
              href="https://x.com/velora_studio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 hover:text-black transition-colors hover:scale-[1.02] active:scale-[0.98] inline-flex items-center" 
              aria-label="Follow us on X"
            >
              <XLogo className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
