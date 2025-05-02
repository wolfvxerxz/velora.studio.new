"use client"

import { useEffect, useRef } from "react"

interface DecorativeShapesProps {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  className?: string
}

export function DecorativeShapes({
  count = 10,
  colors = ["rgba(255, 215, 0, 0.1)", "rgba(255, 255, 255, 0.05)", "rgba(255, 255, 255, 0.02)"],
  minSize = 50,
  maxSize = 200,
  className = "",
}: DecorativeShapesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing shapes
    container.innerHTML = ""

    // Create random shapes
    for (let i = 0; i < count; i++) {
      const shape = document.createElement("div")

      // Random properties
      const size = Math.random() * (maxSize - minSize) + minSize
      const color = colors[Math.floor(Math.random() * colors.length)]
      const left = Math.random() * 100
      const top = Math.random() * 100
      const opacity = Math.random() * 0.5 + 0.1
      const blur = Math.random() * 50 + 10
      const shapeType = Math.floor(Math.random() * 3) // 0: circle, 1: square, 2: triangle

      // Apply styles
      shape.style.position = "absolute"
      shape.style.width = `${size}px`
      shape.style.height = `${size}px`
      shape.style.left = `${left}%`
      shape.style.top = `${top}%`
      shape.style.opacity = `${opacity}`
      shape.style.filter = `blur(${blur}px)`
      shape.style.transform = `rotate(${Math.random() * 360}deg)`
      shape.style.transition = "all 20s ease-in-out"

      // Set shape type
      if (shapeType === 0) {
        // Circle
        shape.style.borderRadius = "50%"
        shape.style.background = color
      } else if (shapeType === 1) {
        // Square
        shape.style.background = color
      } else {
        // Triangle (using border trick)
        shape.style.width = "0"
        shape.style.height = "0"
        shape.style.borderLeft = `${size / 2}px solid transparent`
        shape.style.borderRight = `${size / 2}px solid transparent`
        shape.style.borderBottom = `${size}px solid ${color}`
        shape.style.background = "transparent"
      }

      // Add animation
      shape.animate(
        [
          { transform: `translate(0, 0) rotate(0deg)` },
          {
            transform: `translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px) rotate(${Math.random() * 90}deg)`,
          },
          { transform: `translate(0, 0) rotate(0deg)` },
        ],
        {
          duration: 20000 + Math.random() * 10000,
          iterations: Number.POSITIVE_INFINITY,
        },
      )

      container.appendChild(shape)
    }
  }, [count, colors, minSize, maxSize])

  return <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
}
