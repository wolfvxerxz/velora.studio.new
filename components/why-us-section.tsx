import { Target, CheckCircle, MessageSquare } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-8 sm:py-12 md:py-16 bg-[#0f0f0f] border-t border-zinc-800">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[640px]">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-6 text-white">Why Work With Us?</h2>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-gray-400 mb-8 text-sm sm:text-base">
                We don't just build websites - we build business tools that get you results. Here's what makes us different:
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm sm:text-base">
                      We're obsessed with results
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      Every design decision is backed by data and focused on converting visitors into customers.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm sm:text-base">
                      We move fast (really fast)
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      No endless revisions or months of waiting. You'll have your site in 14 days or less.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm sm:text-base">
                      We're in it for the long haul
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      Your success is our success. We'll keep optimizing until you're getting the results you want.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeUp" delay={500}>
              <p className="text-gray-400 mt-8 text-sm sm:text-base">
                Ready to stop hoping your website works and start knowing it does? Let's talk.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-zinc-800">
                  <img
                    src="images/vuk.avif"
                    alt="velora.studio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm sm:text-base">velora.studio</h3>
                  <p className="text-white text-sm sm:text-base">Vuk</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
