import { Palette, Layers, Monitor, Code, BarChart3, FileCode } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
            Our Services
          </h2>

          <div>
            <p className="text-gray-700 dark:text-gray-400 mb-8 text-sm transition-colors duration-300">
              Sometimes, you come across a design that feels right — you can't quite explain why, but you know it when
              you see it!
            </p>

            <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
              We're dedicated to crafting solutions that evoke this feeling while offering everything design- related,
              from A to Z.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-zinc-800 rounded-lg p-6 bg-black hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <Palette className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">Brand Identity Design</h3>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-black hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <Layers className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">Product Design</h3>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-black hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <Monitor className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">Website Design</h3>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-black hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">Framer Development</h3>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-black hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">Graphic & 3D Design</h3>
              </div>

              <div className="border border-zinc-800 rounded-lg p-6 bg-black hover:bg-zinc-900 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <FileCode className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-medium text-white mb-2">Pitch Deck Design</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
