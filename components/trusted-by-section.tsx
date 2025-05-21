import React from "react"
import Image from "next/image"
import { AnimatedSection } from "./ui/animated-section"

export function TrustedBySection() {
  return (
    <section className="py-2 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[640px] mx-auto">
          <div className="w-full text-center">
            <div>
              <AnimatedSection animation="fadeUp">
                <p className="text-gray-700 dark:text-gray-400 mb-3 text-xs transition-colors duration-300">
                  Trusted by forward-thinking brands who demand measurable results:
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-items-center items-center">
                <AnimatedSection animation="fadeUp" delay={100}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto">
                      <source srcSet="/images/brands/279640_logo.webp" type="image/webp" />
                      <source srcSet="/images/brands/279640_logo.avif" type="image/avif" />
                      <img
                        src="/images/brands/279640_logo.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={150}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto">
                      <source srcSet="/images/brands/509420_logo.webp" type="image/webp" />
                      <source srcSet="/images/brands/509420_logo.avif" type="image/avif" />
                      <img
                        src="/images/brands/509420_logo.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={200}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto">
                      <source srcSet="/images/brands/513650_logo.webp" type="image/webp" />
                      <source srcSet="/images/brands/513650_logo.avif" type="image/avif" />
                      <img
                        src="/images/brands/513650_logo.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={250}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto">
                      <source srcSet="/images/brands/253710_logo.webp" type="image/webp" />
                      <source srcSet="/images/brands/253710_logo.avif" type="image/avif" />
                      <img
                        src="/images/brands/253710_logo.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={300}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto">
                      <source srcSet="/images/brands/Owlet_Logomark_white.webp" type="image/webp" />
                      <source srcSet="/images/brands/Owlet_Logomark_white.avif" type="image/avif" />
                      <img
                        src="/images/brands/Owlet_Logomark_white.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={350}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto invert">
                      <source srcSet="/images/brands/logo1.webp" type="image/webp" />
                      <source srcSet="/images/brands/logo1.avif" type="image/avif" />
                      <img
                        src="/images/brands/logo1.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={400}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto invert">
                      <source srcSet="/images/brands/logo2.webp" type="image/webp" />
                      <source srcSet="/images/brands/logo2.avif" type="image/avif" />
                      <img
                        src="/images/brands/logo2.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={450}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto">
                      <source srcSet="/images/brands/amenify.webp" type="image/webp" />
                      <source srcSet="/images/brands/amenify.avif" type="image/avif" />
                      <img
                        src="/images/brands/amenify.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={500}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto invert">
                      <source srcSet="/images/brands/logo sub.webp" type="image/webp" />
                      <source srcSet="/images/brands/logo sub.avif" type="image/avif" />
                      <img
                        src="/images/brands/logo sub.png"
                        alt="Brand Logo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={550}>
                  <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                    <picture className="block mx-auto my-auto invert">
                      <source srcSet="/images/brands/bobo logos.webp" type="image/webp" />
                      <source srcSet="/images/brands/bobo logos.avif" type="image/avif" />
                      <img
                        src="/images/brands/bobo logos.png"
                        alt="Bobo"
                        className="max-w-[100px] max-h-[22px] mx-auto my-auto"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </picture>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
