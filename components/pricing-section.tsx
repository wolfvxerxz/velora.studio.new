import { Heart, Sparkles, Framer, Palette, Check, Zap } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"

export function PricingSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-[640px] mx-auto px-4">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-lg sm:text-xl font-normal text-black dark:text-white mb-2 sm:mb-3 transition-colors duration-300">Pricing</h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fadeUp" delay={100}>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 transition-colors duration-300">
            Our diverse plans offer a wide range of benefits to meet your specific needs — whether you prefer
            a flat-price website, a subscription-based product design, or a combination of both.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* 0→1 Design */}
          <AnimatedSection animation="fadeUp" delay={200}>
            <div className="bg-white dark:bg-black rounded-xl sm:rounded-2xl border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white animate-pulse transition-colors duration-300" />
                    <span className="text-black dark:text-white text-xs sm:text-sm transition-colors duration-300">0 → 1 Design</span>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-1.5 sm:px-2 py-0.5 rounded-md transition-colors duration-300">Custom Quote</span>
                </div>

                <h3 className="text-base sm:text-xl font-normal text-black dark:text-white mb-1 sm:mb-2 transition-colors duration-300">Custom Quote</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-8 transition-colors duration-300">
                  Your go-to solution for whatever you may need — we design everything!
                </p>

                <div className="space-y-2 sm:space-y-4">
                  <AnimatedSection animation="fadeUp" delay={300}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Heart className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Brand Identity Design</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={400}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Sparkles className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Product and Website Design</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={500}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Framer className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Framer Development</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={600}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Palette className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Graphic and 3D Design</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={700}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Check className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Unlimited revisions</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={800}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Check className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Frequent updates</span>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              <div className="mt-auto pt-4 sm:pt-8">
                <button className="btn-primary w-full">
                  Share Your Vision
                </button>
              </div>
            </div>
          </AnimatedSection>

          {/* Unlimited Design */}
          <AnimatedSection animation="fadeUp" delay={200}>
            <div className="bg-white dark:bg-black rounded-xl sm:rounded-2xl border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white animate-pulse transition-colors duration-300" />
                    <span className="text-black dark:text-white text-xs sm:text-sm transition-colors duration-300">Unlimited Design</span>
                  </div>
                  <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-1.5 sm:px-2 py-0.5 rounded-md transition-colors duration-300">Subscription</span>
                </div>

                <h3 className="text-base sm:text-xl font-normal text-black dark:text-white mb-1 sm:mb-2 transition-colors duration-300">$4,500<span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">/m</span></h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-8 transition-colors duration-300">
                  The ideal solution for those in need of design services of any type and scale.
                </p>

                <div className="space-y-2 sm:space-y-4">
                  <AnimatedSection animation="fadeUp" delay={300}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Check className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Trial week — no strings attached</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={400}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Sparkles className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Best-in-class design via Figma</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={500}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Check className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Unlimited requests and revisions</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={600}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Check className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Frequent updates</span>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="fadeUp" delay={700}>
                    <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-1 transition-transform">
                      <Check className="flex-shrink-0 text-black dark:text-white h-3 w-3 sm:h-4 sm:w-4 transition-colors duration-300" />
                      <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">Pause or cancel anytime</span>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              <div className="mt-auto pt-4 sm:pt-8">
                <button className="btn-secondary w-full">
                  Let's Work Together
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
