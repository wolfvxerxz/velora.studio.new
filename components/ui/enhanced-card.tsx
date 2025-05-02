import type React from "react"
import { cn } from "@/lib/utils"

interface EnhancedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function EnhancedCard({ children, className, ...props }: EnhancedCardProps) {
  return (
    <div
      className={cn("bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden", className)}
      style={{
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      }}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  )
}
