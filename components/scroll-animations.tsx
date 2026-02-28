'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { ReactNode } from 'react'

interface FadeInUpProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeInUp({ children, className = '', delay = 0, duration = 1000 }: FadeInUpProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-3'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface BounceInLeftProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BounceInLeft({ children, className = '', delay = 0, duration = 1000 }: BounceInLeftProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 -translate-x-6 scale-98'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface BounceInRightProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BounceInRight({ children, className = '', delay = 0, duration = 1000 }: BounceInRightProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 scale-100'
          : 'opacity-0 translate-x-6 scale-98'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface BounceInBottomLeftProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BounceInBottomLeft({ children, className = '', delay = 0, duration = 1000 }: BounceInBottomLeftProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : 'opacity-0 -translate-x-4 translate-y-4 scale-98'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface BounceInBottomRightProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function BounceInBottomRight({ children, className = '', delay = 0, duration = 1000 }: BounceInBottomRightProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : 'opacity-0 translate-x-4 translate-y-4 scale-98'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface FadeInLeftProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeInLeft({ children, className = '', delay = 0, duration = 1000 }: FadeInLeftProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-3'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface FadeInRightProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function FadeInRight({ children, className = '', delay = 0, duration = 1000 }: FadeInRightProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-3'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface ScaleInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function ScaleIn({ children, className = '', delay = 0, duration = 1000 }: ScaleInProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-99'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface SlideInUpProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function SlideInUp({ children, className = '', delay = 0, duration = 1000 }: SlideInUpProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface RotateInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}

export function RotateIn({ children, className = '', delay = 0, duration = 1000 }: RotateInProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all ${className} ${
        isVisible
          ? 'opacity-100 rotate-0 scale-100'
          : 'opacity-0 rotate-0.5 scale-99'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {children}
    </div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({ children, className = '', staggerDelay = 100 }: StaggerContainerProps) {
  return (
    <div className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <div key={index} style={{ animationDelay: `${index * staggerDelay}ms` }}>
              {child}
            </div>
          ))
        : children
      }
    </div>
  )
}
