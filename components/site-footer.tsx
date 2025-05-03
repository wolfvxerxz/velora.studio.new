import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h3 className="text-2xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">Elevate your idea from 0 → 1 with velora.studio.</h3>

          <div className="flex gap-4 mb-6">
            <button
              data-cal-link="vuk-m/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              className="px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-base hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors"
            >
              Book a Intro
            </button>
            <Link
              href="#work"
              className="px-6 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 text-black dark:text-white text-base hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
            >
              View Work
            </Link>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-base mb-12 transition-colors duration-300">
            Or drop us an email →{" "}
            <a href="mailto:contact@velora.studio" className="text-black dark:text-white hover:underline transition-colors duration-300">
              contact@velora.studio
            </a>
          </p>

          <div className="flex justify-between items-center">
            <p className="text-base text-gray-500 transition-colors duration-300">© velora.studio 2025</p>
            <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors text-base" aria-label="X (Twitter)">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
