import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="py-12 bg-black">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h3 className="text-2xl font-normal mb-6 text-white">Elevate your idea from 0 → 1 with velora.studio.</h3>

          <div className="flex gap-4 mb-6">
            <Link
              href="#contact"
              className="px-6 py-2 rounded-full bg-white text-black text-base hover:bg-gray-200 transition-colors"
            >
              Book a Intro
            </Link>
            <Link
              href="#work"
              className="px-6 py-2 rounded-full bg-zinc-800 text-white text-base hover:bg-zinc-700 transition-colors"
            >
              View Work
            </Link>
          </div>

          <p className="text-gray-400 text-base mb-12">
            Or drop us an email →{" "}
            <a href="mailto:contact@velora.studio" className="text-white hover:underline">
              contact@velora.studio
            </a>
          </p>

          <div className="flex justify-between items-center">
            <p className="text-base text-gray-500">© velora.studio 2025</p>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-base" aria-label="X (Twitter)">
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
