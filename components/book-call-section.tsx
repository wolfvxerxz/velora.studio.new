import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { EnhancedStarryBackground } from "@/components/enhanced-starry-background"

export function BookCallSection() {
  return (
    <EnhancedStarryBackground className="w-full py-16 md:py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white transition-colors duration-300">
              Book a Strategy Call with Vuk
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
              Get personalized insights on how to transform your website into a conversion machine. Vuk has helped over
              150+ businesses increase their conversion rates by an average of 127%.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-black dark:text-white transition-colors duration-300">30-Minute Strategy Session</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Free, no-obligation consultation to discuss your website goals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-black dark:text-white transition-colors duration-300">Flexible Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Book a time that works for you - available 7 days a week</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              Schedule Your Call Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-zinc-800 dark:to-black rounded-2xl transform -rotate-3 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-gray-50 dark:bg-zinc-800 rounded-2xl transform rotate-3 overflow-hidden transition-colors duration-300">
              <Image
                src="/vuk-profile.jpeg"
                alt="Vuk - Web Design Expert"
                fill
                className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </EnhancedStarryBackground>
  )
}
