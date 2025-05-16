"use client"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Minimal grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:2rem_2rem]"
        style={{ maskImage: 'linear-gradient(to bottom, white 85%, transparent 100%)' }}
      />
    </div>
  )
} 