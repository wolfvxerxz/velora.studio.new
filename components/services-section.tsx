import { Palette, Layers, Monitor, Code, BarChart3, FileCode } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"

export function ServicesSection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[640px]">
          <AnimatedSection animation="fadeUp">
            <div className="text-left mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
                Our Services
              </h2>
              <p className="text-zinc-400 text-lg">
                Sometimes, you come across a design that feels right — you can't quite explain why, but you know it when you see it!
              </p>
            </div>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-gray-700 dark:text-gray-400 mb-4 sm:mb-8 text-xs sm:text-sm transition-colors duration-300">
                We're dedicated to crafting solutions that evoke this feeling while offering everything design- related,
                from A to Z.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={200}>
              <p className="text-gray-700 dark:text-gray-400 mb-6 sm:mb-12 text-xs sm:text-sm transition-colors duration-300">
                We're dedicated to crafting solutions that evoke this feeling while offering everything design- related,
                from A to Z.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-3 sm:mb-4">
                    <Palette className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black dark:text-white transition-colors duration-300 mb-2">Brand Identity Design</h3>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-3 sm:mb-4">
                    <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black dark:text-white transition-colors duration-300 mb-2">Product Design</h3>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={500}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-3 sm:mb-4">
                    <Monitor className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black dark:text-white transition-colors duration-300 mb-2">Website Design</h3>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={600}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-3 sm:mb-4">
                    <Code className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black dark:text-white transition-colors duration-300 mb-2">Framer Development</h3>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={700}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-3 sm:mb-4">
                    <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black dark:text-white transition-colors duration-300 mb-2">Graphic & 3D Design</h3>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={800}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg p-4 sm:p-6 bg-gray-50 dark:bg-[#0f0f0f] hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mb-3 sm:mb-4">
                    <FileCode className="h-4 w-4 sm:h-5 sm:w-5 text-black dark:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-black dark:text-white transition-colors duration-300 mb-2">Pitch Deck Design</h3>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
