"use client"

import Link from "next/link"
import { AnimatedSection } from "./ui/animated-section"

export function HeroSection() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-6 bg-white">
      <div className="mx-auto px-4 flex justify-center">
        <div className="w-full max-w-[640px]">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-2xl sm:text-3xl font-normal mb-3 sm:mb-4 leading-tight text-black">
              We design & build websites people actually want to use
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <h2 className="text-xl sm:text-2xl font-normal mb-4 sm:mb-6 leading-relaxed text-gray-800">
              Simple, clean, and focused on what matters - helping your business grow through better digital experiences.
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              <span className="font-medium text-black">
                Our clients see real results within 90 days.
              </span>{" "}
              We work with startups and established businesses who need a website that actually performs.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              <button
                data-cal-link="vuk-m/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm sm:text-base font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-[0_3px_15px_rgba(249,115,22,0.25)] hover:shadow-[0_5px_25px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Book a Intro
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
            <div className="text-gray-700 text-xs sm:text-sm md:text-base">
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
