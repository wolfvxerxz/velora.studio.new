"use client"

import { useState } from "react"
import Image from "next/image"

interface SlideProps {
  src: string
  alt: string
}

export function DualRowSlider({ slides }: { slides: SlideProps[] }) {
  // Split slides into two rows
  const firstHalf = Math.ceil(slides.length / 2)
  const firstRowSlides = slides.slice(0, firstHalf)
  const secondRowSlides = slides.slice(firstHalf)

  const [isFirstRowHovered, setIsFirstRowHovered] = useState(false)
  const [isSecondRowHovered, setIsSecondRowHovered] = useState(false)

  return (
    <div className="w-full space-y-4 md:space-y-8 overflow-hidden">
      {/* First row - Right to Left */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsFirstRowHovered(true)}
        onMouseLeave={() => setIsFirstRowHovered(false)}
      >
        <div
          className={`flex ${isFirstRowHovered ? "pause-animation" : ""}`}
          style={{
            animation: "scrollRightToLeft 120s linear infinite",
            animationPlayState: isFirstRowHovered ? "paused" : "running",
            width: `${firstRowSlides.length * 100}%`,
          }}
        >
          {/* Double the slides for seamless looping */}
          {[...firstRowSlides, ...firstRowSlides].map((slide, index) => (
            <div
              key={`first-row-${index}`}
              className="flex-shrink-0 px-2 sm:px-4 transition-all duration-300 hover:scale-105"
              style={{ width: `${100 / (firstRowSlides.length * 2)}%` }}
            >
              <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-contain bg-zinc-900"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - Left to Right */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsSecondRowHovered(true)}
        onMouseLeave={() => setIsSecondRowHovered(false)}
      >
        <div
          className={`flex ${isSecondRowHovered ? "pause-animation" : ""}`}
          style={{
            animation: "scrollLeftToRight 120s linear infinite",
            animationPlayState: isSecondRowHovered ? "paused" : "running",
            width: `${secondRowSlides.length * 100}%`,
          }}
        >
          {/* Double the slides for seamless looping */}
          {[...secondRowSlides, ...secondRowSlides].map((slide, index) => (
            <div
              key={`second-row-${index}`}
              className="flex-shrink-0 px-2 sm:px-4 transition-all duration-300 hover:scale-105"
              style={{ width: `${100 / (secondRowSlides.length * 2)}%` }}
            >
              <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={slide.src || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-contain bg-zinc-900"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
