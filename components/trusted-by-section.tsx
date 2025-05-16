import Image from "next/image"
import { AnimatedSection } from "./ui/animated-section"

export function TrustedBySection() {
  return (
    <section className="py-6 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <div>
            <AnimatedSection animation="fadeUp">
              <p className="text-gray-700 dark:text-gray-400 mb-6 text-xs transition-colors duration-300">
                Trusted by forward-thinking brands who demand measurable results:
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 items-center">
              <AnimatedSection animation="fadeUp" delay={100}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/279640_logo.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={150}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/509420_logo.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/513650_logo.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={250}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/253710_logo.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/Owlet_Logomark_white.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={350}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/logo1.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/logo2.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={450}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/amenify.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              
              
              
  
              
              
              <AnimatedSection animation="fadeUp" delay={700}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/logo sub.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={750}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/images/brands/bobo logos.png"
                    alt="Brand Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
