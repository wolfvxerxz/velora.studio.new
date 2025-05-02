import Image from "next/image"

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 bg-black">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h2 className="text-2xl font-normal mb-6 text-white">Why Us</h2>

          <div>
            <p className="text-gray-400 mb-8 text-base">
              Complicated problems don't call for complex interfaces — we craft user-friendly and straightforward
              interfaces that simplify even the most sophisticated issues.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14.39 6.26L19 7.13L15.5 10.56L16.38 15.25L12 13.13L7.62 15.25L8.5 10.56L5 7.13L9.61 6.26L12 2Z"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-base">Tailored design solutions that meet your specific needs and goals.</p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14.39 6.26L19 7.13L15.5 10.56L16.38 15.25L12 13.13L7.62 15.25L8.5 10.56L5 7.13L9.61 6.26L12 2Z"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-base">
                  Rigorous quality checks and revisions to ensure the final deliverables meet high standards.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L14.39 6.26L19 7.13L15.5 10.56L16.38 15.25L12 13.13L7.62 15.25L8.5 10.56L5 7.13L9.61 6.26L12 2Z"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-white text-base">
                  Regular updates, clear communication, and transparency throughout the project lifecycle.
                </p>
              </div>
            </div>

            <p className="text-gray-400 mt-8 text-base">
              Your product is treated as ours with a primary goal of your uncompromised satisfaction — your success
              equals our success.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/vuk.png"
                  alt="velora.studio"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-gray-400 text-base">velora.studio</h3>
                <p className="text-white text-base">Vuk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
