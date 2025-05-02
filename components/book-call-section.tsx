import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { EnhancedStarryBackground } from "@/components/enhanced-starry-background"

export function BookCallSection() {
  return (
    <EnhancedStarryBackground className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight italic">
              Book a Strategy Call with Vuk
            </h2>
            <p className="text-zinc-400 text-lg">
              Get personalized insights on how to transform your website into a conversion machine. Vuk has helped over
              150+ businesses increase their conversion rates by an average of 127%.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-white mt-1" />
                <div>
                  <h3 className="font-medium text-lg">30-Minute Strategy Session</h3>
                  <p className="text-zinc-400">Free, no-obligation consultation to discuss your website goals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-white mt-1" />
                <div>
                  <h3 className="font-medium text-lg">Flexible Scheduling</h3>
                  <p className="text-zinc-400">Book a time that works for you - available 7 days a week</p>
                </div>
              </div>
            </div>

            <Button className="rounded-full bg-white text-black hover:bg-zinc-200 px-6 flex items-center gap-2 mt-6">
              Schedule Your Call Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black rounded-2xl transform -rotate-3"></div>
            <div className="absolute inset-0 bg-zinc-800 rounded-2xl transform rotate-3 overflow-hidden">
              <Image
                src="/vuk-profile.jpeg"
                alt="Vuk - Web Design Expert"
                fill
                className="object-cover mix-blend-luminosity opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </EnhancedStarryBackground>
  )
}
