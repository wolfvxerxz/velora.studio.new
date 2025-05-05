import Image from "next/image"
import { AnimatedSection } from "./ui/animated-section"

export function TrustedBySection() {
  return (
    <section className="py-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <div>
            <AnimatedSection animation="fadeUp">
              <p className="text-gray-700 dark:text-gray-400 mb-6 text-xs transition-colors duration-300">
                Trusted by forward-thinking brands who demand measurable results:
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-5 gap-8 items-center">
              <AnimatedSection animation="fadeUp" delay={100}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/logo-1.png"
                    alt="Client Logo 1"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/logo-2.png"
                    alt="Client Logo 2"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={300}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/logo-3.png"
                    alt="Client Logo 3"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/logo-4.png"
                    alt="Client Logo 4"
                    width={100}
                    height={40}
                    className="h-8 w-auto object-contain dark:invert"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeUp" delay={500}>
                <div className="grayscale opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src="/logo-5.png"
                    alt="Client Logo 5"
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
