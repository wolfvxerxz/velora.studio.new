"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { EnhancedCard } from "./enhanced-card"

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn"
  delay?: number
  hoverEffect?: "lift" | "scale" | "glow" | "none"
}

export function AnimatedCard({
  children,
  className,
  animation = "fadeInUp",
  delay = 0,
  hoverEffect = "lift",
}: AnimatedCardProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const hoverClasses = {
    lift: "hover-lift",
    scale: "hover-scale",
    glow: "hover-glow",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? `animate-${animation}` : "opacity-0",
        delay > 0 ? `delay-${delay}` : "",
        hoverEffect !== "none" ? hoverClasses[hoverEffect] : "",
      )}
    >
      <EnhancedCard className={className}>{children}</EnhancedCard>
    </div>
  )
}
