'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return [ref, isVisible] as const
}

export function useWordReveal<T extends HTMLElement = HTMLElement>() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0,
        rootMargin: '0px'
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return [ref, isVisible] as const
}
