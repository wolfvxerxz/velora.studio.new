"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
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
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold,
    rootMargin,
  })

  return (
    <div
      ref={ref}
      className={cn(className, isVisible ? `animate-${animation}` : "opacity-0", delay > 0 ? `delay-${delay}` : "")}
    >
      {children}
    </div>
  )
}
