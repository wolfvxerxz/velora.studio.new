"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"

const projects = [
  {
    image: "/landingpages/extsy.webp",
    name: "Extsy Crypto",
    category: "Crypto",
  },
  {
    image: "/landingpages/relo.webp",
    name: "Relo",
    category: "Productivity",
  },
  {
    image: "/landingpages/copilot.webp",
    name: "Copilot Sync",
    category: "Developer Tools",
  }, 
  {
    image: "/landingpages/topit.webp",
    name: "Topit",
    category: "Creative Agency",
  },
  {
    image: "/landingpages/quantvpn.webp",
    name: "QuantVPN",
    category: "VPN / Security",
    fit: "contain",
  },
  {
    image: "/landingpages/flowsync.webp",
    name: "FlowSync",
    category: "Workflow / SaaS",
  },
  {
    image: "/landingpages/wolfmail.webp",
    name: "WolfMail",
    category: "Email Marketing",
  },
  {
    image: "/landingpages/webserv.webp",
    name: "Webserv",
    category: "Healthcare Marketing",
  },
  {
    image: "/landingpages/suprema.webp",
    name: "Suprema",
    category: "Project Management",
  },
]

export function WorkSection() {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  // Pause auto-scroll when user is scrolling the page
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout
    let isScrolling = false

    const handlePageScroll = () => {
      if (!isScrolling) {
        setIsAutoScrolling(false)
        isScrolling = true
      }
      
      // Resume auto-scroll after user stops scrolling
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        setIsAutoScrolling(true)
        isScrolling = false
      }, 1500) // Increased to 1.5 seconds for better user experience
    }

    // Use passive listener for better performance
    window.addEventListener('scroll', handlePageScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handlePageScroll)
      clearTimeout(scrollTimeout)
    }
  }, [])

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
        // Otherwise, scroll smoothly but more slowly
        container.scrollBy({ left: 0.5, behavior: "auto" })
      }
    }

    // Set up interval for smooth scrolling - reduced frequency to prevent interference
    autoScrollRef.current = setInterval(checkScroll, 100) // Changed from 20ms to 100ms

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
  // This ensures the slider appears infinite
  const displayProjects = [...projects, ...projects]

  return (
    <section id="work" className="py-8 sm:py-12 md:py-16 w-full bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-[640px]">
          <AnimatedSection animation="fadeUp">
            <div className="text-left mb-16">
              <h2 className="text-3xl sm:text-4xl font-velora-studio text-white mb-4">
                Our Work
              </h2>
              <p className="text-zinc-400 text-lg font-velora-studio">
                Take a look at some of our recent projects. Each one is crafted with care to deliver exceptional results.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection animation="fadeUp" delay={100}>
        <div className="relative w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Scroll buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#0f0f0f]/50 p-1 sm:p-2 rounded-full shadow-md dark:shadow-none hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-black dark:text-white" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-[#0f0f0f]/50 p-1 sm:p-2 rounded-full shadow-md dark:shadow-none hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-black dark:text-white" />
          </button>

          {/* Scrollable container - full width */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-3 sm:gap-4 pb-4 hide-scrollbar px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayProjects.map((project, index) => (
              <div
                key={`${project.name}-${index}`}
                className="flex-shrink-0 w-[250px] sm:w-[300px] md:w-[350px] rounded-lg overflow-hidden bg-white dark:bg-[#0f0f0f] border border-gray-100 dark:border-zinc-800 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className={`object-cover${project.name === "QuantVPN" ? " object-contain p-8 bg-white" : ""}`} />
                </div>
                <div className="p-2 sm:p-3">
                  <div className="flex justify-between text-[10px] sm:text-xs text-gray-700 dark:text-gray-400">
                    <span>{project.name}</span>
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
