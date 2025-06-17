import Link from "next/link"
import { VeloraLogo } from "./velora-logo"
import { XLogo } from "./icons/x-logo"

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
            <Link href="/15-min">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <img
                  src="/images/vuk.avif"
                  alt="Vuk"
                  className="w-6 h-6 rounded-full"
                />
                Book a Call With Vuk
              </button>
            </Link>
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
            <div className="flex gap-3 mt-4 md:mt-0">
              <a 
                href="https://twitter.com/velora_studio" 
                className="p-2 text-gray-400 hover:text-white"
                aria-label="X (Twitter)"
                target="_blank"
                rel="noopener noreferrer"
              >
                <XLogo className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/message/CRWTXVTJ2LCJO1"
                className="p-2 text-gray-400 hover:text-white"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.58 2.236 6.364L4 29l7.01-2.184A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.98 0-3.89-.58-5.5-1.67l-.393-.25-4.163 1.298 1.29-4.06-.256-.396A9.92 9.92 0 016.083 15c0-5.478 4.456-9.917 9.917-9.917S25.917 9.522 25.917 15 21.461 25.917 16 25.917zm5.13-7.13c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.67 1.12 2.85c.14.18 1.93 2.95 4.68 4.02.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z"/></svg>
              </a>
              <a
                href="https://t.me/vukkm"
                className="p-2 text-gray-400 hover:text-white"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.036 16.569l-.398 3.948c.57 0 .818-.244 1.116-.537l2.676-2.553 5.547 4.045c1.016.561 1.74.266 1.993-.941l3.617-16.93c.33-1.495-.543-2.08-1.527-1.72L2.36 9.47c-1.453.56-1.435 1.36-.25 1.72l4.63 1.444 10.75-6.77c.505-.32.97-.143.59.177z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
