"use client"

export function GradientBlurFooter({ height = 96 }: { height?: number }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
      style={{
        height: `${height}px`,
        background: 'linear-gradient(to top, #0f0f0f 20%, transparent 100%)',
      }}
    />
  )
} 