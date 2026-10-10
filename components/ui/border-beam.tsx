"use client"

// Adapted from Magic UI — BorderBeam (magicui.design)
export function BorderBeam({
  size = 120,
  duration = 8,
  color = "var(--t-mint)",
}: {
  size?: number
  duration?: number
  color?: string
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
    >
      <div
        className="border-beam absolute aspect-square"
        style={{
          width: size,
          offsetPath: "rect(0 auto auto 0)",
          background: `linear-gradient(to left, ${color}, transparent)`,
          animationDuration: `${duration}s`,
        }}
      />
    </div>
  )
}
