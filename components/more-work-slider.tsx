"use client"

import { useCallback, useEffect, useRef, useState } from "react"

export function MoreWorkSlider({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  // Track which slide is closest to the left edge as the user scrolls/swipes
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const slide = track.firstElementChild as HTMLElement | null
      if (!slide) return
      const step = slide.offsetWidth + 12
      setIndex(Math.min(images.length - 1, Math.round(track.scrollLeft / step)))
    }
    track.addEventListener("scroll", onScroll, { passive: true })
    return () => track.removeEventListener("scroll", onScroll)
  }, [images.length])

  const go = useCallback((dir: 1 | -1) => {
    const track = trackRef.current
    const slide = track?.firstElementChild as HTMLElement | null
    if (!track || !slide) return
    track.scrollBy({ left: dir * (slide.offsetWidth + 12), behavior: "smooth" })
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")
  const arrowBtn =
    "press flex h-9 w-9 items-center justify-center rounded-[6px] border border-[var(--t-line-strong)] bg-[rgb(var(--t-line-rgb)/0.05)] text-[var(--t-ink)] transition-colors hover:bg-[rgb(var(--t-line-rgb)/0.1)] disabled:pointer-events-none disabled:opacity-30"

  return (
    <div>
      <div
        ref={trackRef}
        className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 sm:-mx-6 sm:scroll-px-6 sm:px-6"
        aria-label="More work, scroll sideways"
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="group w-[86%] flex-shrink-0 snap-start overflow-hidden rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Velora work ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 [transition-timing-function:var(--spring)] group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="mono text-[13px] leading-5 text-[var(--t-faint)] tabular-nums">
          {pad(index + 1)} / {pad(images.length)}
        </span>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => go(-1)} disabled={index === 0} className={arrowBtn} aria-label="Previous project">
            ←
          </button>
          <button type="button" onClick={() => go(1)} disabled={index >= images.length - 1} className={arrowBtn} aria-label="Next project">
            →
          </button>
        </div>
      </div>
    </div>
  )
}
