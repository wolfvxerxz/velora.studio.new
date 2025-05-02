"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto px-4 flex justify-center">
        <div style={{ maxWidth: "640px" }} className="w-full">
          <h1 className="text-3xl font-normal mb-4 leading-tight text-black dark:text-white transition-colors duration-300">
            Elevate Your Digital Presence Into a Strategic Business Asset
          </h1>
          <h2 className="text-2xl font-normal mb-6 leading-relaxed text-gray-800 dark:text-gray-300 transition-colors duration-300">
            We craft conversion-focused websites that align with your business objectives and drive measurable results.
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300">
            <span className="font-medium text-black dark:text-white">
              Our clients experience an average 127% increase in engagement within 90 days.
            </span>{" "}
            We deliver strategic digital solutions for SaaS companies, tech startups, and service businesses that demand
            excellence.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Book a Intro
            </Link>
            <Link
              href="#work"
              className="px-4 py-2 rounded-full bg-gray-200 dark:bg-zinc-800 text-black dark:text-white text-base hover:bg-gray-300 dark:hover:bg-zinc-700 transition-colors"
            >
              View Work
            </Link>
          </div>

          <div className="text-gray-700 dark:text-gray-400 text-base transition-colors duration-300">
            <span className="text-black dark:text-white font-medium">Limited availability:</span> We only accept 4 new
            projects per month →{" "}
            <a
              href="mailto:contact@velora.studio"
              className="text-black dark:text-white hover:underline transition-colors duration-300 font-medium"
            >
              contact@velora.studio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
