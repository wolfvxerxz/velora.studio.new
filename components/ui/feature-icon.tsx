import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureIconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function FeatureIcon({ children, className, ...props }: FeatureIconProps) {
  return (
    <div
      className={cn(
        "relative flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800/80 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/20 to-transparent opacity-70"></div>

      {/* Inner shadow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{ boxShadow: "inset 0 0 15px rgba(255, 215, 0, 0.2)" }}
      ></div>

      {/* Icon container */}
      <div className="relative z-10 text-yellow-400">{children}</div>
    </div>
  )
}
