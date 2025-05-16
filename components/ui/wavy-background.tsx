"use client"

import { useEffect, useRef } from "react"

interface WavyBackgroundProps {
  className?: string
  color?: string
  opacity?: number
}

export function WavyBackground({
  className = "",
  color = "#000000",
  opacity = 0.2
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      const scale = window.devicePixelRatio || 1
      canvas.width = rect.width * scale
      canvas.height = rect.height * scale
      ctx.scale(scale, scale)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    const drawWaves = () => {
      const rect = container.getBoundingClientRect()
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.globalAlpha = opacity
      ctx.lineWidth = 1.5

      const waveCount = 30
      const waveSpacing = rect.height / (waveCount * 0.8)
      const amplitude = 25
      const frequency = 0.005

      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath()

        for (let x = 0; x <= rect.width; x += 2) {
          const time = Date.now() * 0.0002
          const y = (i * waveSpacing) + 
                   Math.sin(x * frequency + i * 0.3 + time) * amplitude

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
      }
    }

    const animate = () => {
      drawWaves()
      requestAnimationFrame(animate)
    }

    const observer = new ResizeObserver(resizeCanvas)
    observer.observe(container)

    resizeCanvas()
    animate()

    return () => {
      observer.disconnect()
    }
  }, [color, opacity])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  )
} 