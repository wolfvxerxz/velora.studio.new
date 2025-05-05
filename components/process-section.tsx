import { AnimatedSection } from "./ui/animated-section"

export function ProcessSection() {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <AnimatedSection animation="fadeUp">
            <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
              How We Work
            </h2>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
                Discover how our bullet-proof collaborative process takes your project from 0 to 1, ensuring your
                satisfaction every step of the way.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                      <span className="text-gray-900 dark:text-white transition-colors duration-300">1</span>
                    </div>
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Have a meeting</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                    We'll have a quick meeting where we'll discuss your ideas and how we can help you achieve them.
                  </p>
                </div>
              </AnimatedSection>

              {/* Step 2 */}
              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                      <span className="text-gray-900 dark:text-white transition-colors duration-300">2</span>
                    </div>
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Design & Development</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                    We'll create a custom design that matches your brand and develop it with the latest technologies.
                  </p>
                </div>
              </AnimatedSection>

              {/* Step 3 */}
              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                      <span className="text-gray-900 dark:text-white transition-colors duration-300">3</span>
                    </div>
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Review & Refine</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                    We'll review the project together and make any necessary adjustments to ensure it meets your expectations.
                  </p>
                </div>
              </AnimatedSection>

              {/* Step 4 */}
              <AnimatedSection animation="fadeUp" delay={500}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-6 bg-gray-50 dark:bg-black transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-zinc-800 flex items-center justify-center text-xs transition-colors duration-300">
                      <span className="text-gray-900 dark:text-white transition-colors duration-300">4</span>
                    </div>
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Launch & Support</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-xs transition-colors duration-300">
                    Once everything is perfect, we'll launch your project and provide ongoing support to ensure its success.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
