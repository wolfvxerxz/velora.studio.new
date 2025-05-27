import Link from "next/link"
import Image from "next/image"
import { VeloraLogo } from "./velora-logo"
import { X } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0f0f0f] py-12">
      <div className="max-w-[640px] mx-auto px-4">
        <div className="mb-8">
          <Link href="/" className="inline-block mb-4">
            <VeloraLogo className="h-6 w-auto text-white" />
          </Link>
          
          <h2 className="text-white text-xl font-medium mb-6">Take your idea from zero → hero with Velora Studio.</h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="inline-flex items-center gap-2 px-5 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <img
                src="/images/vuk.avif"
                alt="Vuk's Profile"
                className="w-5 h-5 rounded-full object-cover"
              />
              Book a Call With Vuk
            </button>
          </div>
          
          <p className="text-gray-400 text-sm mb-6">
            Or drop us an email → <a href="mailto:contact@velora.studio" className="text-white hover:underline">contact@velora.studio</a>
          </p>
        </div>
        
        <div className="border-t border-zinc-800 pt-6">
          <div className="flex flex-wrap gap-6 mb-6">
            <Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">
              Blog
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Velora Studio
            </p>
            <a 
              href="https://twitter.com/velora_studio" 
              className="mt-4 md:mt-0 p-2 text-gray-400 hover:text-white"
              aria-label="X (Twitter)"
              target="_blank"
            >
              <X className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
