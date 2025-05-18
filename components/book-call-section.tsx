import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { EnhancedStarryBackground } from "@/components/enhanced-starry-background"

export function BookCallSection() {
  return (
    <EnhancedStarryBackground className="w-full py-16 md:py-24 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white transition-colors duration-300">
              Let's Talk About Your Website Goals
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
              Hi, I'm Vuk! I've helped over 150 businesses boost their sales with high-converting websites. 
              Want to see if we can do the same for you? Let's jump on a quick call.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-black dark:text-white transition-colors duration-300">Quick 30-Min Chat</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">No sales pitch, just honest advice about what's possible for your site</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-medium text-lg text-black dark:text-white transition-colors duration-300">Pick a Time That Works</h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">My calendar is open 7 days a week - choose what's best for you</p>
                </div>
              </div>
            </div>

            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="btn-primary flex items-center gap-2"
            >
              Book Your Free Strategy Call
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white dark:from-[#0f0f0f] dark:to-black rounded-2xl transform -rotate-3 transition-colors duration-300"></div>
            <div className="absolute inset-0 bg-gray-50 dark:bg-[#0f0f0f] rounded-2xl transform rotate-3 overflow-hidden transition-colors duration-300">
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
