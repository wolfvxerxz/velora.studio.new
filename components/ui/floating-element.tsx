"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  speed?: "slow" | "medium" | "fast"
  delay?: number
}

export function FloatingElement({ children, className, speed = "medium", delay = 0 }: FloatingElementProps) {
  const speedClasses = {
    slow: "animate-float",
    medium: "animate-float",
    fast: "animate-float",
  }

  const durationStyles = {
    slow: { animationDuration: "6s" },
    medium: { animationDuration: "4s" },
    fast: { animationDuration: "2s" },
  }

  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : {}

  return (
    <div className={cn(speedClasses[speed], className)} style={{ ...durationStyles[speed], ...delayStyle }}>
      {children}
    </div>
  )
}
