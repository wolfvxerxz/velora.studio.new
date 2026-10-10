"use client"

// Adapted from Magic UI — NumberTicker (magicui.design)
import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export function NumberTicker({
  value,
  pad = 0,
  prefix = "",
  suffix = "",
  locale = "en-US",
  className,
}: {
  value: number
  pad?: number
  prefix?: string
  suffix?: string
  locale?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  const mv = useMotionValue(reduce ? value : 0)
  const spring = useSpring(mv, { damping: 40, stiffness: 120 })
  const inView = useInView(ref, { once: true, margin: "0px" })
  const fmt = (n: number) => {
    const r = Math.round(n)
    const s = pad ? String(r).padStart(pad, "0") : r.toLocaleString(locale)
    return `${prefix}${s}${suffix}`
  }

  useEffect(() => {
    if (inView) mv.set(value)
  }, [inView, mv, value])

  useEffect(
    () =>
      spring.on("change", (v) => {
        if (ref.current) ref.current.textContent = fmt(v)
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [spring],
  )

  return (
    <span ref={ref} className={className}>
      {fmt(reduce ? value : 0)}
    </span>
  )
}
