"use client"

import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  animation?: "pulse" | "shimmer" | "none"
  onClick?: () => void
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

export function AnimatedButton({
  children,
  className,
  animation = "none",
  onClick,
  asChild = false,
  variant = "default",
  size = "default",
}: AnimatedButtonProps) {
  const animationClasses = {
    pulse: "animate-pulse",
    shimmer: "animate-shimmer relative overflow-hidden",
    none: "",
  }

  return (
    <Button
      className={cn(className, animationClasses[animation])}
      onClick={onClick}
      asChild={asChild}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  )
}
