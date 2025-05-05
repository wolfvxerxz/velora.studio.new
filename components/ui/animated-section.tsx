"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight"
  delay?: number
  threshold?: number
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.2,
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.setAttribute("data-visible", "true")
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "50px",
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, isClient])

  const baseStyles = "opacity-0 transition-all duration-700"
  const animationVariants = {
    fadeUp: "translate-y-8 data-[visible=true]:translate-y-0",
    fadeIn: "opacity-0",
    fadeLeft: "-translate-x-8 data-[visible=true]:translate-x-0",
    fadeRight: "translate-x-8 data-[visible=true]:translate-x-0",
  }

  // Don't render anything until we're on the client
  if (!isClient) {
    return null
  }

  return (
    <div
      ref={sectionRef}
      className={cn(
        baseStyles,
        animationVariants[animation],
        "data-[visible=true]:opacity-100",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
} 