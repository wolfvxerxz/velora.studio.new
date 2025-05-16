"use client"

export function GradientBlurFooter({
  className = "",
  height = 96,
}: {
  className?: string
  height?: number
}) {
  return (
    <div 
      className={`pointer-events-none fixed bottom-0 left-0 w-full z-50 ${className}`}
      style={{ 
        height,
        maskImage: 'linear-gradient(to bottom, transparent, black)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        backdropFilter: 'blur(64px)',
        WebkitBackdropFilter: 'blur(64px)'
      }}
    />
  )
} 