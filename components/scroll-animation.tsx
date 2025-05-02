"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "rotate"
  duration?: number
  delay?: number
  className?: string
}

export function ScrollAnimation({ 
  children, 
  animation = "fade", 
  duration = 0.6, 
  delay = 0,
  className = "" 
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: true,
    margin: "0px 0px -10% 0px" 
  })
  
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  const getAnimationVariants = (type: typeof animation) => {
    const baseTransition = {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1], // Custom easing curve (cubic-bezier)
    }

    switch (type) {
      case "fade":
        return {
          hidden: { 
            opacity: 0,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1,
            transition: baseTransition
          }
        }
      case "slide-up":
        return {
          hidden: { 
            opacity: 0, 
            y: 40,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition
          }
        }
      case "slide-down":
        return {
          hidden: { 
            opacity: 0, 
            y: -40,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: baseTransition
          }
        }
      case "slide-left":
        return {
          hidden: { 
            opacity: 0, 
            x: 40,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition
          }
        }
      case "slide-right":
        return {
          hidden: { 
            opacity: 0, 
            x: -40,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: baseTransition
          }
        }
      case "scale":
        return {
          hidden: { 
            opacity: 0, 
            scale: 0.94,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: baseTransition
          }
        }
      case "rotate":
        return {
          hidden: { 
            opacity: 0, 
            rotate: -5,
            scale: 0.98,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1, 
            rotate: 0,
            scale: 1,
            transition: baseTransition
          }
        }
      default:
        return {
          hidden: { 
            opacity: 0,
            transition: baseTransition 
          },
          visible: { 
            opacity: 1,
            transition: baseTransition
          }
        }
    }
  }

  const variants = getAnimationVariants(animation)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
} 