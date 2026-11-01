"use client"
// The client's real site, running inside the case. It renders at desktop width and is scaled to fit,
// so it reads as the site people see; on phones it renders at the phone's width instead.
import { useEffect, useRef, useState } from "react"
import { Maximize, Minimize } from "reicon-react"

const DESKTOP = 1440

export function LivePreview({ src, title, hint = "Scroll inside to explore the site" }: { src: string; title: string; hint?: string }) {
  const box = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(0)
  const [native, setNative] = useState(false)
  // Where the browser won't go full screen (iPhone Safari, embedded browsers) the preview fills the window instead
  const [filled, setFilled] = useState(false)
  const full = native || filled
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    const el = box.current!
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width))
    ro.observe(el)
    const onFs = () => setNative(document.fullscreenElement === el.parentElement)
    document.addEventListener("fullscreenchange", onFs)
    return () => { ro.disconnect(); document.removeEventListener("fullscreenchange", onFs) }
  }, [])

  // In the case it's a scaled-down desktop; full screen shows it at true size, never blown up past 1:1
  const virtual = w < 520 ? w : full ? Math.max(w, DESKTOP) : DESKTOP
  const scale = w ? w / virtual : 1
  const toggle = () => {
    if (native) return void document.exitFullscreen()
    if (filled) return setFilled(false)
    const frame = box.current!.parentElement!
    if (!frame.requestFullscreen) return setFilled(true)
    frame.requestFullscreen().catch(() => setFilled(true))
    setTimeout(() => { if (!document.fullscreenElement) setFilled(true) }, 400)
  }
  useEffect(() => {
    if (!filled) return
    const k = (e: KeyboardEvent) => e.key === "Escape" && setFilled(false)
    const lock = document.body.style.overflow; document.body.style.overflow = "hidden"
    addEventListener("keydown", k)
    return () => { removeEventListener("keydown", k); document.body.style.overflow = lock }
  }, [filled])

  return (
    <div className={`vl ${filled ? "filled" : ""}`}>
      <div className="vl-bar">
        <span className="vl-live">{title}, live</span>
        <button onClick={toggle}>
          {full ? <Minimize size={16} weight="Filled" /> : <Maximize size={16} weight="Filled" />}
          {full ? "Close" : "Full screen"}
        </button>
      </div>
      <div className="vl-view" ref={box} onPointerEnter={() => setTimeout(() => setTouched(true), 1600)} onPointerDown={() => setTouched(true)}>
        <p className={`vl-hint ${touched ? "off" : ""}`} aria-hidden>{hint}</p>
        {w > 0 && (
          <iframe
            src={src}
            title={`${title} website`}
            loading="lazy"
            style={{ width: virtual, height: `${100 / scale}%`, transform: `scale(${scale})` }}
          />
        )}
      </div>
    </div>
  )
}
