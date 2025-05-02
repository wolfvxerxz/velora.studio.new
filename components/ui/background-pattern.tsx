"use client"

import { useEffect, useRef } from "react"

interface BackgroundPatternProps {
  variant?: "dots" | "grid" | "waves" | "noise"
  color?: string
  opacity?: number
  className?: string
}

export function BackgroundPattern({
  variant = "dots",
  color = "rgba(255, 255, 255, 0.1)",
  opacity = 0.1,
  className = "",
}: BackgroundPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw pattern based on variant
    const drawPattern = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = color
      ctx.globalAlpha = opacity

      switch (variant) {
        case "dots":
          drawDots(ctx, canvas.width, canvas.height)
          break
        case "grid":
          drawGrid(ctx, canvas.width, canvas.height)
          break
        case "waves":
          drawWaves(ctx, canvas.width, canvas.height)
          break
        case "noise":
          drawNoise(ctx, canvas.width, canvas.height)
          break
        default:
          drawDots(ctx, canvas.width, canvas.height)
      }
    }

    drawPattern()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [variant, color, opacity])

  // Pattern drawing functions
  const drawDots = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const size = 1
    const gap = 20

    for (let x = 0; x < width; x += gap) {
      for (let y = 0; y < height; y += gap) {
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const gap = 30

    ctx.lineWidth = 0.5

    // Draw vertical lines
    for (let x = 0; x < width; x += gap) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }

    // Draw horizontal lines
    for (let y = 0; y < height; y += gap) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }
  }

  const drawWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const waveHeight = 20
    const waveLength = 100
    const gap = 50

    for (let y = 0; y < height; y += gap) {
      ctx.beginPath()
      ctx.moveTo(0, y)

      for (let x = 0; x < width; x += 10) {
        const angle = (x / waveLength) * Math.PI * 2
        const yOffset = Math.sin(angle) * waveHeight
        ctx.lineTo(x, y + yOffset)
      }

      ctx.stroke()
    }
  }

  const drawNoise = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.createImageData(width, height)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      const value = Math.random() < 0.05 ? 255 : 0
      data[i] = data[i + 1] = data[i + 2] = value
      data[i + 3] = value ? Math.random() * 255 * opacity * 2 : 0
    }

    ctx.putImageData(imageData, 0, 0)
  }

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`} style={{ opacity }} />
  )
}
