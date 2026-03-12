"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeIn",
  delay = 0,
  threshold = 0.1,
  rootMargin = "0px",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? `animate-${animation}` : "opacity-0", delay > 0 ? `delay-${delay}` : "")}
    >
      {children}
    </div>
  )
}
