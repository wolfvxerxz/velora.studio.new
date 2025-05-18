"use client"

import { AnimatedSection } from "./ui/animated-section"
import { XCircle, CheckCircle } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="mx-auto px-4 max-w-[1000px]">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
              Want a Website That Actually Brings You Sales?
            </h2>
            <p className="text-zinc-400 text-lg max-w-[600px] mx-auto">
              While other agencies obsess over pretty designs, we're laser-focused on one thing: getting you more leads and sales.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimatedSection animation="fadeUp" delay={200}>
            <div className="bg-black/50 border border-zinc-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-medium text-white mb-6">Traditional Agencies</h3>
              <ul className="space-y-4">
                {[
                  "Beautiful designs that never drive sales",
                  "Endless back-and-forth revisions",
                  "Zero clarity on your ROI",
                  "Cookie-cutter templates like everyone else",
                  "Hidden fees that keep adding up"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="bg-black/50 border border-zinc-800/50 rounded-2xl p-6">
              <h3 className="text-xl font-medium text-white mb-6">With Velora</h3>
              <ul className="space-y-4">
                {[
                  "Data-driven designs that turn visitors into customers",
                  "Lightning-fast 14-day delivery",
                  "100% ROI guarantee or we fix it free",
                  "Custom-built for your unique goals",
                  "Simple pricing, no surprises ever"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeUp" delay={400}>
          <div className="mt-12 text-center">
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Your Free Strategy Call
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
