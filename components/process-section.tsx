export function ProcessSection() {
  return (
    <section className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
            How We Work
          </h2>

          <div>
            <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
              Discover how our bullet-proof collaborative process takes your project from 0 to 1, ensuring your
              satisfaction every step of the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Step 1 */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">
                    <span className="text-white">1</span>
                  </div>
                  <h3 className="font-medium text-sm text-white">Have a meeting</h3>
                </div>
                <p className="text-gray-400 text-xs">
                  We'll have a quick meeting where we'll discuss your ideas and how we can help you achieve them.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">
                    <span className="text-white">2</span>
                  </div>
                  <h3 className="font-medium text-sm text-white">Research and Preparation</h3>
                </div>
                <p className="text-gray-400 text-xs">
                  We'll conduct research and present you our recommendation on how we should approach solving your
                  problem.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">
                    <span className="text-white">3</span>
                  </div>
                  <h3 className="font-medium text-sm text-white">Get to work</h3>
                </div>
                <p className="text-gray-400 text-xs">
                  We design the solution based on the agreed direction until you're satisfied, ensuring blazing-fast
                  updates.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border border-zinc-800 rounded-lg p-6 bg-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs">
                    <span className="text-white">4</span>
                  </div>
                  <h3 className="font-medium text-sm text-white">Delivery</h3>
                </div>
                <p className="text-gray-400 text-xs">
                  Once you're happy with the results we'll proceed to our carefully-designed handoff procedure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
