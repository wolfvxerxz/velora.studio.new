"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface StarryBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function StarryBackground({ children, className = "" }: StarryBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    interface Star {
      x: number
      y: number
      radius: number
      opacity: number
      speed: number
      velocityX: number
      velocityY: number
      twinkleSpeed: number
    }

    const stars: Star[] = []
    const starCount = Math.floor((canvas.width * canvas.height) / 10000) // Adjust density

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const radius = Math.random() * 1.5
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.05 + 0.01,
        velocityX: (Math.random() - 0.5) * 0.3, // Random horizontal velocity
        velocityY: (Math.random() - 0.5) * 0.3, // Random vertical velocity
        twinkleSpeed: Math.random() * 0.01 + 0.003,
      })
    }

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Move star
        star.x += star.velocityX
        star.y += star.velocityY

        // Wrap around edges
        if (star.x < -star.radius) star.x = canvas.width + star.radius
        if (star.x > canvas.width + star.radius) star.x = -star.radius
        if (star.y < -star.radius) star.y = canvas.height + star.radius
        if (star.y > canvas.height + star.radius) star.y = -star.radius

        // Twinkle effect
        star.opacity += (Math.random() - 0.5) * star.twinkleSpeed
        if (star.opacity < 0.2) star.opacity = 0.2
        if (star.opacity > 1) star.opacity = 1
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" style={{ pointerEvents: "none" }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
