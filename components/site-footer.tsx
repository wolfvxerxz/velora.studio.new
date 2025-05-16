import Link from "next/link"
import { VeloraLogo } from "./velora-logo"

export function SiteFooter() {
  return (
    <footer className="bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="flex justify-center px-4 py-12">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <VeloraLogo className="h-8 w-8 text-black dark:text-white transition-colors duration-300" />
                <span className="font-medium text-black dark:text-white transition-colors duration-300">velora.studio</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                We design and develop high-converting websites that help businesses grow. Our focus is on creating experiences that drive results.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-black dark:text-white mb-4 transition-colors duration-300">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/work" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-black dark:text-white mb-4 transition-colors duration-300">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com/velorastudio" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/velorastudio" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/velorastudio" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Velora Studio. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
