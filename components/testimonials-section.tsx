import Image from "next/image"
import { Star, Crown } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"

export function TestimonialsSection() {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <AnimatedSection animation="fadeUp">
            <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
              Happy Clients
            </h2>
          </AnimatedSection>

          <div>
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
                Our individual backgrounds encompass years of industry expertise. We've partnered with clients across
                different sectors, and here are their thoughts on our services.
              </p>
            </AnimatedSection>

            <div className="space-y-12">
              {/* Testimonial 1 - Victor Uhl */}
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-[#0f0f0f] relative transition-colors duration-300">
                  {/* Highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 dark:from-yellow-500/10 dark:via-transparent dark:to-yellow-500/10 transition-colors duration-300"></div>
                  <div className="absolute -inset-[1px] border border-yellow-500/10 dark:border-yellow-500/20 rounded-lg transition-colors duration-300"></div>
                  
                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Victor Uhl</h3>
                          <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-600/80 to-yellow-500/80 rounded-full px-2 py-0.5">
                            <Crown className="w-3 h-3 text-white" />
                            <span className="text-[10px] font-medium text-white">Featured Client</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Founder of Ecom Wizards</p>
                        <div className="flex gap-0.5 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
                        <Image
                          src="/victor-uhl.jpg"
                          alt="Victor Uhl"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                      <p className="mb-4">Working with Vuk was effortless.</p>
                      <p>
                        From our first chat he understood my brand, refining my ideas with his own creative polish. Every update
                        matched my vision, only better. The entire project flowed smoothly with clear check-ins, truly a 10/10
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Testimonial 2 */}
              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Everett Lynn</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Founder & CEO at Amenify</p>
                        <div className="flex gap-0.5 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
                        <Image
                          src="/images/2.jpeg"
                          alt="Everett Lynn"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                      <p className="mb-4">velora.studio delivered exceptional results for Amenify.</p>
                      <p>
                        We needed a website that could represent our property technology platform professionally while being intuitive for users. 
                        velora.studio understood our vision immediately, worked efficiently, and constantly sought our feedback throughout the process. 
                        The final product has significantly improved our brand presence and has been instrumental in helping us communicate our value proposition 
                        to property managers and residents alike. Working with them has been one of our best decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Testimonial 3 */}
              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Beryl Stafford</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Founder and President Bobo's Oat Bars</p>
                        <div className="flex gap-0.5 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
                        <Image
                          src="/images/1.jpg"
                          alt="Beryl Stafford"
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                      <p className="mb-4">velora.studio transformed our digital presence.</p>
                      <p>
                        As we scaled Bobo's Oat Bars, we needed a website that could reflect our homemade quality while appealing to a national audience. 
                        velora.studio delivered exactly what we needed - a warm, inviting digital storefront that captures our brand essence perfectly. 
                        The team showed remarkable patience, quality workmanship, and commitment throughout the project. Their expertise in food product 
                        presentation online has been invaluable to our growth, making our digital presence as wholesome as our products.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
