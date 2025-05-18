import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-800 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Want to Chat About Your Website?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's have a no-pressure conversation about turning your website into a customer-getting machine.
            No sales pitch, just honest advice about what's possible.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-8 py-4 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-gray-400">
              Rather send an email?{" "}
            <a href="mailto:contact@vuk.agency" className="text-white hover:underline">
              contact@vuk.agency
            </a>
            </p>

            <p className="text-sm text-gray-600">
              We usually respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
