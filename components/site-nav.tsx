import Link from "next/link"
import { VeloraLogo } from "./velora-logo"

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-lg border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-[640px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <VeloraLogo className="h-6 w-auto text-black dark:text-white" />
          </Link>
          
          <div className="flex items-center">
            <Link 
              href="/blog" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 