"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? scrolled / total : 0)
      setVisible(scrolled > 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 transition-opacity duration-300"
      style={{
        transform: `scaleX(${progress})`,
        opacity: visible ? 1 : 0,
      }}
    />
  )
}
