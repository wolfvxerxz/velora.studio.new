import Image from "next/image"

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h2 className="text-2xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">Why Us</h2>

          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-base transition-colors duration-300">
              Complicated problems don't call for complex interfaces — we craft user-friendly and straightforward
              interfaces that simplify even the most sophisticated issues.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14.39 6.26L19 7.13L15.5 10.56L16.38 15.25L12 13.13L7.62 15.25L8.5 10.56L5 7.13L9.61 6.26L12 2Z"
                      stroke="currentColor"
                      className="text-gray-500 dark:text-gray-400 transition-colors duration-300"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-black dark:text-white text-base transition-colors duration-300">
                  Tailored design solutions that meet your specific needs and goals.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14.39 6.26L19 7.13L15.5 10.56L16.38 15.25L12 13.13L7.62 15.25L8.5 10.56L5 7.13L9.61 6.26L12 2Z"
                      stroke="currentColor"
                      className="text-gray-500 dark:text-gray-400 transition-colors duration-300"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-black dark:text-white text-base transition-colors duration-300">
                  Rigorous quality checks and revisions to ensure the final deliverables meet high standards.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14.39 6.26L19 7.13L15.5 10.56L16.38 15.25L12 13.13L7.62 15.25L8.5 10.56L5 7.13L9.61 6.26L12 2Z"
                      stroke="currentColor"
                      className="text-gray-500 dark:text-gray-400 transition-colors duration-300"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-black dark:text-white text-base transition-colors duration-300">
                  Regular updates, clear communication, and transparency throughout the project lifecycle.
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-8 text-base transition-colors duration-300">
              Your product is treated as ours with a primary goal of your uncompromised satisfaction — your success
              equals our success.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-800 transition-colors duration-300">
                <Image
                  src="/images/vuk.png"
                  alt="velora.studio"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-gray-600 dark:text-gray-400 text-base transition-colors duration-300">velora.studio</h3>
                <p className="text-black dark:text-white text-base transition-colors duration-300">Vuk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
