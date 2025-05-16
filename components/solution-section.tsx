"use client"

import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Zap } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export function SolutionSection() {
  return (
    <section id="process" className="w-full py-12 md:py-16 lg:py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Diagonal decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gray-50 dark:bg-zinc-900/50 transform -skew-y-3 z-0 transition-colors duration-300"></div>
      <div className="absolute bottom-0 right-0 w-full h-40 bg-gray-50 dark:bg-zinc-900/50 transform skew-y-3 z-0 transition-colors duration-300"></div>

      {/* Glowing orb decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/5 dark:bg-yellow-500/5 blur-3xl z-0 transition-colors duration-300"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-yellow-500/5 blur-3xl z-0 transition-colors duration-300"></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" delay={100} className="relative">
            <div className="max-w-xl">
              <div className="inline-flex items-center space-x-2 mb-6">
                <Badge variant="outline" className="bg-white/5 border-zinc-800 text-gray-400">
                  Our Process
                </Badge>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white mb-6 transition-colors duration-300">
                Transforming Ideas into Digital Reality
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
                We combine strategic thinking with cutting-edge technology to create websites that not only look stunning but also drive real business results.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-black dark:text-white mb-1 transition-colors duration-300">
                      Fast Delivery
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      14-day turnaround
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-black dark:text-white mb-1 transition-colors duration-300">
                      Guaranteed
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      100% satisfaction
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-black dark:text-white mb-1 transition-colors duration-300">
                      High Impact
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                      Results-driven
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={200} className="relative">
            <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden rounded-2xl">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black transition-colors duration-300"></div>

              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/10 dark:bg-yellow-500/10 rounded-full blur-xl transition-colors duration-300"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 dark:bg-yellow-500/10 rounded-full blur-xl transition-colors duration-300"></div>

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10 dark:opacity-20 transition-opacity duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-xl font-medium text-black dark:text-white mb-4 transition-colors duration-300">
                    Ready to transform your digital presence?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
                    Book a free consultation to discuss your project
                  </p>
                  <button className="btn-primary">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
