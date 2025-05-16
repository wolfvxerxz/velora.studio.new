import { useEffect, useRef } from "react"

interface BackgroundLinesProps {
  className?: string
  color?: string
  opacity?: number
  density?: number
  speed?: number
}

export function BackgroundLines({
  className = "",
  color = "#000000",
  opacity = 0.03,
  density = 30,
  speed = 0.5
}: BackgroundLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let lines: { x: number; y: number; length: number; angle: number; speed: number }[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initLines()
    }

    const initLines = () => {
      lines = []
      for (let i = 0; i < density; i++) {
        lines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 100 + 100,
          angle: Math.random() * Math.PI * 2,
          speed: (Math.random() * 0.5 + 0.5) * speed
        })
      }
    }

    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.strokeStyle = color
      ctx.globalAlpha = opacity
      ctx.lineWidth = 1

      lines.forEach(line => {
        ctx.beginPath()
        ctx.moveTo(line.x, line.y)
        const endX = line.x + Math.cos(line.angle) * line.length
        const endY = line.y + Math.sin(line.angle) * line.length
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Move the line
        line.x += Math.cos(line.angle) * line.speed
        line.y += Math.sin(line.angle) * line.speed

        // Reset line position when it goes off screen
        if (line.x < -line.length) line.x = canvas.width + line.length
        if (line.x > canvas.width + line.length) line.x = -line.length
        if (line.y < -line.length) line.y = canvas.height + line.length
        if (line.y > canvas.height + line.length) line.y = -line.length
      })

      animationFrameId = requestAnimationFrame(drawLines)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawLines()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, opacity, density, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  )
} 