"use client"

import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface ProgressiveBlurProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  blurAmount?: number
}

export function ProgressiveBlur({
  children,
  className = "",
  threshold = 0.2,
  blurAmount = 20,
}: ProgressiveBlurProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    threshold,
    once: false,
  })

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current as HTMLElement
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio
          const blur = blurAmount * (1 - ratio)
          element.style.filter = `blur(${blur}px)`
          element.style.opacity = `${0.3 + ratio * 0.7}`
          element.style.transform = `scale(${0.95 + ratio * 0.05})`
        })
      },
      {
        threshold: Array.from({ length: 20 }, (_, i) => i / 20),
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [blurAmount])

  return (
    <div ref={ref} className={`transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
} 