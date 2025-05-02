"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideProps {
  src: string
  alt: string
}

export function InfiniteSlider({ slides }: { slides: SlideProps[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length
    setCurrentIndex(newIndex)
  }

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length
    setCurrentIndex(newIndex)
  }

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => {
      goToNextSlide()
    }, 3000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => {
      stopAutoPlay()
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
  }

  const handleMouseLeave = () => {
    setIsAutoPlaying(true)
  }

  // Calculate visible slides (current, prev, next)
  const visibleSlides = [
    (currentIndex - 1 + slides.length) % slides.length,
    currentIndex,
    (currentIndex + 1) % slides.length,
  ]

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sliderRef}
    >
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 z-10 w-full px-4">
        <button
          onClick={goToPrevSlide}
          className="bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`min-w-full flex justify-center px-4 transition-opacity duration-500 ${
              visibleSlides.includes(index) ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-zinc-600"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
