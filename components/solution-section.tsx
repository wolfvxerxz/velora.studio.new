"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SolutionSection() {
  return (
    <section id="process" className="w-full py-12 md:py-16 lg:py-24 bg-black relative overflow-hidden">
      {/* Diagonal decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-zinc-900/50 transform -skew-y-3 z-0"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-zinc-900/50 transform skew-y-3 z-0"></div>

      {/* Glowing orb decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-yellow-500/5 blur-3xl z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl z-0"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection animation="fadeInUp">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge className="bg-zinc-800 text-white hover:bg-zinc-700">Our Solution</Badge>
            <div className="space-y-2 max-w-4xl mx-auto">
              <div className="relative">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                  Conversion-Focused Web Design That Pays For Itself
                </h2>
                {/* Glow effect behind headline */}
                <div
                  className="absolute -inset-10 bg-gradient-radial from-yellow-500/10 to-transparent opacity-70 blur-3xl -z-10"
                  style={{
                    background: "radial-gradient(circle, rgba(234, 179, 8, 0.1) 0%, rgba(0, 0, 0, 0) 70%)",
                  }}
                ></div>
              </div>
              <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                We don't just build websites. We create strategic digital assets that generate measurable returns.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - Feature list */}
          <div className="space-y-12">
            <AnimatedSection animation="fadeInLeft" delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-md"></div>
                    <div className="relative z-10 bg-zinc-900 rounded-full w-14 h-14 flex items-center justify-center">
                      <Zap className="w-7 h-7 text-yellow-400" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Double Your Conversions</h3>
                  <p className="text-zinc-400 mb-3">
                    Our strategic design process focuses on turning visitors into leads and customers, not just creating
                    pretty pages.
                  </p>
                  <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-full px-4 py-1">
                    <span className="text-white font-medium">Average conversion increase: 127%</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-md"></div>
                    <div className="relative z-10 bg-zinc-900 rounded-full w-14 h-14 flex items-center justify-center">
                      <Clock className="w-7 h-7 text-yellow-400" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">14-Day Delivery</h3>
                  <p className="text-zinc-400 mb-3">
                    No endless revisions or months of waiting. Get your high-converting website live in just two weeks.
                  </p>
                  <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-full px-4 py-1">
                    <span className="text-white font-medium">98% on-time delivery rate</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInLeft" delay={300}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-md"></div>
                    <div className="relative z-10 bg-zinc-900 rounded-full w-14 h-14 flex items-center justify-center">
                      <Shield className="w-7 h-7 text-yellow-400" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">ROI Guarantee</h3>
                  <p className="text-zinc-400 mb-3">
                    If your new website doesn't deliver measurable results within 90 days, we'll refine it for free
                    until it does.
                  </p>
                  <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 rounded-full px-4 py-1">
                    <span className="text-white font-medium">100% satisfaction guarantee</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right column - Visual element */}
          <AnimatedSection animation="fadeInRight" delay={200} className="relative">
            <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden rounded-2xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black"></div>

              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"></div>

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-24 h-24 relative mb-8">
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-yellow-500/10 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" fill="#FFD700" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Process Works</h3>

                <div className="space-y-4 max-w-md">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <p className="text-left">Strategic discovery to understand your business goals</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <p className="text-left">Conversion-focused design that guides visitors to action</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <p className="text-left">Rapid implementation with our proven framework</p>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold">4</span>
                    </div>
                    <p className="text-left">Continuous optimization based on real user data</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
