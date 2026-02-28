'use client'

import { useWordReveal } from '@/hooks/use-scroll-reveal'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = '', delay = 0 }: AnimatedTextProps) {
  const [ref, isVisible] = useWordReveal<HTMLSpanElement>()

  if (typeof children !== 'string') {
    return <span className={className}>{children}</span>
  }

  const words = children.split(' ')

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 blur-0 translate-y-0'
              : 'opacity-0 blur-sm translate-y-4'
          }`}
          style={{
            transitionDelay: `${delay + index * 100}ms`
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  )
}

interface AnimatedHeadingProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedHeading({ children, className = '', delay = 0 }: AnimatedHeadingProps) {
  const [ref, isVisible] = useWordReveal<HTMLHeadingElement>()

  if (typeof children !== 'string') {
    return <h1 className={className}>{children}</h1>
  }

  const words = children.split(' ')

  return (
    <h1 ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-800 ease-out ${
            isVisible
              ? 'opacity-100 blur-0 translate-y-0'
              : 'opacity-0 blur-sm translate-y-6'
          }`}
          style={{
            transitionDelay: `${delay + index * 120}ms`
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </h1>
  )
}

interface AnimatedParagraphProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedParagraph({ children, className = '', delay = 0 }: AnimatedParagraphProps) {
  const [ref, isVisible] = useWordReveal<HTMLParagraphElement>()

  if (typeof children !== 'string') {
    return <p className={className}>{children}</p>
  }

  const words = children.split(' ')

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-600 ease-out ${
            isVisible
              ? 'opacity-100 blur-0 translate-y-0'
              : 'opacity-0 blur-sm translate-y-3'
          }`}
          style={{
            transitionDelay: `${delay + index * 80}ms`
          }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </p>
  )
}
