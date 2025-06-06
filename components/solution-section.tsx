"use client"

import { AnimatedSection } from "./ui/animated-section"
import { XCircle, CheckCircle } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 gradient-text">
            Ready to transform your online presence?
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Let's create a website that not only looks great but also converts visitors into customers.
          </p>
          <button
            data-cal-link="vuk-m/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            className="px-8 py-4 rounded-full bg-white text-black text-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Your Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  )
} 