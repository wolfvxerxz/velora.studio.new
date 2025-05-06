import Image from "next/image"
import { Target, CheckCircle, MessageSquare } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-8 sm:py-12 md:py-16 bg-white border-t border-gray-200">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[640px]">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-xl sm:text-2xl font-normal mb-3 sm:mb-6 text-black">Why Us</h2>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-gray-600 mb-4 sm:mb-8 text-sm sm:text-base">
                Complicated problems don't call for complex interfaces — we craft user-friendly and straightforward
                interfaces that simplify even the most sophisticated issues.
              </p>
            </AnimatedSection>

            <div className="space-y-4 sm:space-y-6">
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <p className="text-black text-sm sm:text-base">
                    Tailored design solutions that meet your specific needs.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <p className="text-black text-sm sm:text-base">
                    Rigorous quality checks and revisions for high standards.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                  <p className="text-black text-sm sm:text-base">
                    Regular updates and clear communication throughout projects.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeUp" delay={500}>
              <p className="text-gray-600 mt-6 sm:mt-8 text-sm sm:text-base">
                Your product is treated as ours with a primary goal of your uncompromised satisfaction — your success
                equals our success.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src="/images/vuk.png"
                    alt="velora.studio"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-gray-600 text-sm sm:text-base">velora.studio</h3>
                  <p className="text-black text-sm sm:text-base">Vuk</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
