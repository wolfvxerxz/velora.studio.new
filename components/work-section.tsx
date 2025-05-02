"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    image: "/scribe-website.png",
    name: "Scribe",
    category: "Email",
  },
  {
    image: "/designify-website.png",
    name: "Designify",
    category: "Web3",
  },
  {
    image: "/social-seller-website.png",
    name: "Social Seller",
    category: "SaaS",
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Golden%20Rectangle-7BTo6AfXAbBCVat8tmEHljeii0vl9z.png",
    name: "Captivio",
    category: "Finance",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3%20%281%29-KVMC2mHTCoPlu0DSHMss8rqjVNIIEE.png",
    name: "Ecom Wizards",
    category: "E-commerce",
  },
]

export function WorkSection() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const checkScroll = () => {
      if (!isAutoScrolling || !container) return

      // If we're near the end, jump back to start without animation
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 300) {
        container.scrollLeft = 0
      } else {
        // Otherwise, scroll smoothly
        container.scrollBy({ left: 1, behavior: "auto" })
      }
    }

    // Set up interval for smooth scrolling
    autoScrollRef.current = setInterval(checkScroll, 20)

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
      }
    }
  }, [isAutoScrolling])

  // Handle mouse interactions
  const handleMouseEnter = () => setIsAutoScrolling(false)
  const handleMouseLeave = () => setIsAutoScrolling(true)

  // Double the projects for seamless looping
  const displayProjects = [...projects, ...projects]

  return (
    <section id="work" className="py-16 w-full bg-white dark:bg-black transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <h2 className="text-xl font-normal mb-8 text-black dark:text-white transition-colors duration-300">
            Our Work
          </h2>
        </div>
      </div>

      <div className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Scroll buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black/50 p-2 rounded-full shadow-md dark:shadow-none"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6 text-black dark:text-white" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-black/50 p-2 rounded-full shadow-md dark:shadow-none"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6 text-black dark:text-white" />
        </button>

        {/* Scrollable container - full width */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayProjects.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className="flex-shrink-0 w-[350px] rounded-lg overflow-hidden bg-white dark:bg-black border border-gray-100 dark:border-zinc-800"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
              </div>
              <div className="p-3">
                <div className="flex justify-between text-xs text-gray-700 dark:text-gray-400">
                  <span>{project.name}</span>
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
