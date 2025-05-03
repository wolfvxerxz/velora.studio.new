import Image from "next/image"
import { Star, Crown } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export function TestimonialsSection() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <motion.h2
            variants={fadeInUp}
            className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300"
          >
            Happy Clients
          </motion.h2>

          <div>
            <motion.p
              variants={fadeInUp}
              className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300"
            >
              Our individual backgrounds encompass years of industry expertise. We've partnered with clients across
              different sectors, and here are their thoughts on our services.
            </motion.p>

            <div className="space-y-12">
              {/* Testimonial 1 - Victor Uhl */}
              <motion.div
                variants={fadeInUp}
                className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-black relative transition-colors duration-300"
              >
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
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                variants={fadeInUp}
                className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Rosa</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Co-Founder & CEO at Steel</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
                      <Image
                        src="/confident-professional.png"
                        alt="Rosa"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                    <p className="mb-4">velora.studio was a breath of fresh air.</p>
                    <p>
                      After a disappointing experience with a larger, more established agency, velora.studio was a
                      breath of fresh air. They understood our vision from the start, constantly sought feedback, and
                      executed quickly. The final product has received a ton of brand awareness I know we wouldn't have
                      otherwise and has been a strategic success for us. Working with them has been one of the best
                      decisions we made early on, and look forward to continuing to collaborate with them.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                variants={fadeInUp}
                className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Kalidora Kramer-Len</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Co-Founder at Datum Labs</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
                      <Image
                        src="/confident-professional-two.png"
                        alt="Kalidora Kramer-Len"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                    <p className="mb-4">Working with velora.studio has been a joy!</p>
                    <p>
                      We've now worked with them on several projects, each of which they've executed excellently and
                      creatively. We first came to them with only a few words until our launch as a major conference and
                      a big vision for how we'd make a splash, and they were incredibly creative and efficient in the
                      visuals they brought to life.
                    </p>
                    <p className="mt-4">
                      The vibrant, eye-catching posters and elegant visual elements they designed for our launch were a
                      huge hit. They built on this success in further posters, visual items, brand assets, and
                      partnership announcement templates they worked closely with us on over the following months. We
                      can only recommend them!
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 4 */}
              <motion.div
                variants={fadeInUp}
                className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-medium text-sm text-gray-900 dark:text-white transition-colors duration-300">Roberto Quintero</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">Founder at Tierra</p>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-700 transition-colors duration-300">
                      <Image
                        src="/confident-professional-three.png"
                        alt="Roberto Quintero"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="text-gray-600 dark:text-gray-300 text-xs transition-colors duration-300">
                    <p className="mb-4">velora.studio turned our ideas into a product.</p>
                    <p>
                      After working for more than 8 weeks with both our team I can safely say that it was one of the
                      best decisions made in the early stages of our project. Patience, quality, accessibility and
                      commitment are 4 qualities that are highly valued in the initial stages of a company and they are
                      able to provide them with an incredible competence making the project design no longer a problem
                      for you.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
