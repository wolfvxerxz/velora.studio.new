"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  className?: string
}

export function TypewriterEffect({ words, className = "" }: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (!isDeleting && currentText === currentWord) {
      // Pause before starting to delete
      setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(100)
      }, 2000)
      return
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
      setTypingSpeed(150)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed])

  return (
    <span className={`inline-block text-blue-400 ${className}`}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
} 