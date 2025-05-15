"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"
import { GradientBlurFooter } from "./ui/gradient-blur-footer"

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-6">
      <GradientBlurFooter height={96} />
      <div className="relative mx-auto px-4 flex justify-center">
        <div className="w-full max-w-[800px]">
          <AnimatedSection animation="fadeUp">
            <div className="flex flex-col items-center gap-6 mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50/80 backdrop-blur-sm rounded-full border border-orange-100/50 shadow-sm">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-gentle-pulse" />
                <span className="text-orange-600 text-xs font-medium tracking-wide">2 spots available</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-normal text-black dark:text-white transition-colors duration-300 leading-tight text-center">
                We Design Premium<br />
                Websites for SaaS & Startups
              </h1>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp">
            <p className="text-sm sm:text-base text-gray-700 mb-8 leading-relaxed text-center">
              <span className="font-medium text-black">
                Delivering measurable results in 90 days
              </span>{" "}
              for ambitious startups ready to scale.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button
                data-cal-link="vuk-m/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-[0_3px_15px_rgba(249,115,22,0.25)] hover:shadow-[0_5px_25px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Your Project Started
              </button>
              <Link
                href="#work"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gray-100 text-black text-sm sm:text-base hover:bg-gray-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Work
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <div className="text-gray-700 text-xs sm:text-sm md:text-base text-center">
              <span className="text-black font-medium">Limited availability:</span> We only accept 4 new
              projects per month →{" "}
              <a
                href="mailto:contact@velora.studio"
                className="text-black hover:underline hover:text-orange-500 transition-colors font-medium"
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
