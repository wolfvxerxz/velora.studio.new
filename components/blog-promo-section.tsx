import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogPromoSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#0f0f0f] border-t border-zinc-800">
      <div className="container px-4 md:px-6">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
            Read Our Blog
          </h2>
          <p className="text-zinc-400 text-lg mb-12">
            Check out our blog where we share insights, tips, and strategies for creating high-converting websites. 
            From UX best practices to conversion optimization techniques, we've got you covered.
          </p>

          <div className="text-center">
            <Link 
              href="/blog"
              className="px-8 py-4 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition-colors flex items-center gap-2 w-fit mx-auto"
            >
              Read Our Blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 