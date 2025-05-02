import Link from "next/link"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
            Pricing
          </h2>

          <div>
            <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
              Our diverse plans offer a wide range of benefits to meet your specific needs — whether you prefer one-off
              projects, a subscription-based product design, or a combination of both.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Custom Quote */}
              <div className="border border-zinc-800 rounded-lg overflow-hidden bg-black shadow-sm">
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white">0 → 1 Design</span>
                    </div>
                    <h3 className="text-lg font-medium text-white">Custom Quote</h3>
                    <p className="text-gray-400 text-xs mt-1">
                      Your go-to solution for whatever you may need — we design everything!
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Brand Identity Design</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Product and Website Design</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Framer Development</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Graphic and 3D Design</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Unlimited revisions</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Frequent updates</p>
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="block w-full py-2 bg-zinc-800 text-white text-center rounded-md text-xs hover:bg-zinc-700 transition-colors"
                  >
                    Book a Intro
                  </Link>
                </div>
              </div>

              {/* Subscription */}
              <div className="border border-zinc-800 rounded-lg overflow-hidden bg-black shadow-sm">
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-white">Unlimited Design</span>
                      <span className="bg-zinc-800 text-white text-xs px-2 py-0.5 rounded">Subscription</span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-white">$4,500</span>
                      <span className="text-gray-400 text-xs ml-2">/m</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      The ideal solution for those in need of designs across any type of task.
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Trial week — no strings attached</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">World-class design via Figma</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Unlimited requests and revisions</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Frequent updates</p>
                    </div>
                    <div className="flex gap-3">
                      <Check className="flex-shrink-0 text-white h-4 w-4" />
                      <p className="text-gray-300 text-xs">Pause or cancel anytime</p>
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="block w-full py-2 bg-white text-black text-center rounded-md text-xs hover:bg-gray-200 transition-colors"
                  >
                    Book a Intro
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
