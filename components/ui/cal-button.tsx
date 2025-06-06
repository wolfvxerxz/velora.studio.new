import { ButtonHTMLAttributes } from "react"

interface CalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export function CalButton({ className = "", children, ...props }: CalButtonProps) {
  return (
    <button
      data-cal-link="vuk-m/30min"
      className={className}
      {...props}
    >
      {children}
    </button>
  )
} 