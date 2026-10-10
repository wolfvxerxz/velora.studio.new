"use client"

// Adapted from React Bits — SpotlightCard (reactbits.dev)
import { useRef } from "react"

export function SpotlightCard({
  children,
  className = "",
  color = "rgb(var(--t-accent-rgb) / 0.14)",
}: {
  children: React.ReactNode
  className?: string
  color?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty("--sx", `${e.clientX - r.left}px`)
    el.style.setProperty("--sy", `${e.clientY - r.top}px`)
  }
  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-card relative overflow-hidden ${className}`} style={{ ["--spot" as string]: color }}>
      {children}
    </div>
  )
}
