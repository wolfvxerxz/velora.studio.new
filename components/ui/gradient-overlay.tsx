interface GradientOverlayProps {
  variant?: "top" | "bottom" | "left" | "right" | "radial" | "diagonal"
  colors?: string[]
  opacity?: number
  className?: string
}

export function GradientOverlay({
  variant = "top",
  colors = ["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"],
  opacity = 0.5,
  className = "",
}: GradientOverlayProps) {
  let gradientStyle = {}

  switch (variant) {
    case "top":
      gradientStyle = {
        background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`,
      }
      break
    case "bottom":
      gradientStyle = {
        background: `linear-gradient(to top, ${colors[0]}, ${colors[1]})`,
      }
      break
    case "left":
      gradientStyle = {
        background: `linear-gradient(to right, ${colors[0]}, ${colors[1]})`,
      }
      break
    case "right":
      gradientStyle = {
        background: `linear-gradient(to left, ${colors[0]}, ${colors[1]})`,
      }
      break
    case "radial":
      gradientStyle = {
        background: `radial-gradient(circle, ${colors[1]}, ${colors[0]})`,
      }
      break
    case "diagonal":
      gradientStyle = {
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
      }
      break
    default:
      gradientStyle = {
        background: `linear-gradient(to bottom, ${colors[0]}, ${colors[1]})`,
      }
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        ...gradientStyle,
        opacity,
      }}
    />
  )
}
