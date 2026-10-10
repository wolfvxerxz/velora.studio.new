"use client"

// Adapted from React Bits — BlurText (reactbits.dev)
import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

export function BlurText({ text, className, delay = 0.06 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reduce = useReducedMotion()
  const words = text.split(" ")
  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block will-change-[filter,transform,opacity]"
          initial={reduce ? false : { filter: "blur(10px)", opacity: 0, y: 8 }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: i * delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  )
}
