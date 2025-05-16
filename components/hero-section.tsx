"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"
import { GradientBlurFooter } from "./ui/gradient-blur-footer"

export function HeroSection() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-6 bg-[#000000] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-black"></div>
      
      {/* Pixelated background effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')]"></div>
      
      <div className="mx-auto px-4 flex justify-center relative">
        <div className="w-full max-w-[800px]">
          <AnimatedSection animation="fadeUp">
            <div className="flex flex-col items-center gap-6 mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a1a1a] backdrop-blur-sm rounded-full border border-[#333333] shadow-sm">
                <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-gentle-pulse" />
                <span className="text-[#e5e5e5] text-xs font-medium tracking-wide">2 spots available</span>
              </div>
              
              <p className="text-[#666666] text-sm">Designed for businesses who demand results</p>
              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-medium text-white leading-tight text-center">
                Websites That Convert<br />
                In Record Time
              </h1>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <p className="text-sm sm:text-base text-[#999999] mb-8 leading-relaxed text-center">
              <span className="font-medium text-white">
                14 days from concept to launch.
              </span>{" "}
              Get a high-converting website that pays for itself, or we'll fix it for free.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                data-cal-link="vuk-m/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-black text-sm sm:text-base font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Your Free Strategy Call →
              </button>
              <Link
                href="#work"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#1a1a1a] text-white text-sm sm:text-base hover:bg-[#252525] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-[#333333]"
              >
                See Our Work
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <div className="text-[#666666] text-xs sm:text-sm md:text-base text-center">
              <span className="text-[#999999] font-medium">⚡ Limited Time:</span> Only 2 consultation spots remaining this month →{" "}
              <a
                href="mailto:contact@velora.studio"
                className="text-white hover:text-[#3b82f6] transition-colors font-medium"
              >
                contact@velora.studio
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
