"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import type { CaseStudyWorkItem } from "@/lib/case-studies"

interface Props {
  items: CaseStudyWorkItem[]
  title: string
}

function Lightbox({ src, alt, onClose, onPrev, onNext, hasPrev, hasNext }: {
  src: string
  alt: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  const [drag, setDrag] = useState(0)
  const [dragging, setDragging] = useState(false)
  const startX = useRef(0)
  const moved = useRef(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && hasPrev) onPrev()
      if (e.key === "ArrowRight" && hasNext) onNext()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  const SWIPE_THRESHOLD = 70

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX
    moved.current = false
    setDragging(true)
    try {
      ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
    } catch {
      /* ignore — pointer capture is a progressive enhancement */
    }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return
    let dx = e.clientX - startX.current
    if (Math.abs(dx) > 4) moved.current = true
    // Add resistance when there's no neighbour to swipe to
    if ((dx > 0 && !hasPrev) || (dx < 0 && !hasNext)) dx *= 0.25
    setDrag(dx)
  }
  const endDrag = () => {
    if (!dragging) return
    setDragging(false)
    if (drag > SWIPE_THRESHOLD && hasPrev) onPrev()
    else if (drag < -SWIPE_THRESHOLD && hasNext) onNext()
    setDrag(0)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl select-none"
        onClick={(e) => {
          e.stopPropagation()
          // Swallow the click that ends a drag so it doesn't register as a tap
          if (moved.current) { moved.current = false }
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        style={{
          transform: `translateX(${drag}px)`,
          transition: dragging ? "none" : "transform 260ms cubic-bezier(0.23, 1, 0.32, 1)",
          cursor: dragging ? "grabbing" : "grab",
          touchAction: "pan-y",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="block max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain pointer-events-none"
          style={{ transition: "opacity 200ms ease" }}
        />
      </div>
    </div>
  )
}

function AnimatedItem({ item, index, title, onClick }: {
  item: CaseStudyWorkItem
  index: number
  title: string
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

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
      className="overflow-hidden rounded-2xl border border-[#1F1F1F] bg-[#141414] p-2 [&_img]:rounded-xl [&_video]:rounded-xl"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 700ms cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms, transform 700ms cubic-bezier(0.23, 1, 0.32, 1) ${index * 80}ms`,
      }}
    >
      {item.type === "video" ? (
        <video src={item.src} autoPlay loop muted playsInline className="w-full h-auto block" />
      ) : (
        <button
          type="button"
          onClick={onClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="block w-full cursor-zoom-in overflow-hidden"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.src}
            alt={item.alt ?? `${title} ${index + 1}`}
            className="w-full h-auto block"
            style={{
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 600ms cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </button>
      )}
    </div>
  )
}

export function CaseStudyImages({ items, title }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const imageItems = items.filter(i => i.type === "image")
  const getImageIndex = useCallback((itemIndex: number) => {
    return items.slice(0, itemIndex).filter(i => i.type === "image").length
  }, [items])

  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex(i => i !== null ? Math.max(0, i - 1) : null), [])
  const next = useCallback(() => setLightboxIndex(i => i !== null ? Math.min(imageItems.length - 1, i + 1) : null), [imageItems.length])

  return (
    <>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <AnimatedItem
            key={`${item.src}-${i}`}
            item={item}
            index={i}
            title={title}
            onClick={() => item.type === "image" && setLightboxIndex(getImageIndex(i))}
          />
        ))}
      </div>

      {lightboxIndex !== null && imageItems[lightboxIndex] && (
        <Lightbox
          src={imageItems[lightboxIndex].src}
          alt={imageItems[lightboxIndex].alt ?? `${title} ${lightboxIndex + 1}`}
          onClose={close}
          onPrev={prev}
          onNext={next}
          hasPrev={lightboxIndex > 0}
          hasNext={lightboxIndex < imageItems.length - 1}
        />
      )}
    </>
  )
}
