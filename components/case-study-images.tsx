"use client"

import { useEffect, useRef, useState } from "react"
import type { CaseStudyWorkItem } from "@/lib/case-studies"

interface Props {
  items: CaseStudyWorkItem[]
  title: string
}

function AnimatedItem({ item, index, title }: { item: CaseStudyWorkItem; index: number; title: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border-[4px] border-white bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.07)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 700ms cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms, transform 700ms cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
      }}
    >
      {item.type === "video" ? (
        <video src={item.src} autoPlay loop muted playsInline className="w-full h-auto block" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt ?? `${title} ${index + 1}`}
          className="w-full h-auto block"
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      )}
    </div>
  )
}

export function CaseStudyImages({ items, title }: Props) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => (
        <AnimatedItem key={item.src} item={item} index={i} title={title} />
      ))}
    </div>
  )
}
