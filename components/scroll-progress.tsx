"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show progress bar only after scrolling down a bit
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        scaleX: scrollYProgress,
        transition: "transform 0.1s linear"
      }}
    />
  )
} 