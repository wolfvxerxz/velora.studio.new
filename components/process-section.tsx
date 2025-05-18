"use client"

import { AnimatedSection } from "./ui/animated-section"

export function ProcessSection() {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <AnimatedSection animation="fadeUp">
            <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
              Here's How We Work
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
              We keep things simple and straightforward. Here's exactly what happens when you work with us.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {/* Step 1 */}
            <AnimatedSection animation="fadeUp" delay={200}>
              <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                    <span className="text-gray-900 dark:text-white transition-colors duration-300">1</span>
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Quick Chat</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                  Let's talk about your goals and see if we're a good fit. No pressure, just a friendly conversation.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 2 */}
            <AnimatedSection animation="fadeUp" delay={300}>
              <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                    <span className="text-gray-900 dark:text-white transition-colors duration-300">2</span>
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Design Magic</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                  We'll create a custom design that matches your brand and turns visitors into customers.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 3 */}
            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                    <span className="text-gray-900 dark:text-white transition-colors duration-300">3</span>
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Quick Tweaks</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                  We'll review everything together and make it perfect. You'll love every pixel, guaranteed.
                </p>
              </div>
            </AnimatedSection>

            {/* Step 4 */}
            <AnimatedSection animation="fadeUp" delay={500}>
              <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                    <span className="text-gray-900 dark:text-white transition-colors duration-300">4</span>
                  </div>
                  <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Launch & Grow</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                  We'll launch your site and stick around to help it grow. Your success is our success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
