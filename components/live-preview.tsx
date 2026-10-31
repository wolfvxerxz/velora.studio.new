"use client"
// The client's real site, running inside the case. It renders at desktop width and is scaled to fit,
// so it reads as the site people see; on phones it renders at the phone's width instead.
import { useEffect, useRef, useState } from "react"
import { Maximize, Minimize } from "reicon-react"

const DESKTOP = 1440

export function LivePreview({ src, title }: { src: string; title: string }) {
  const box = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(0)
  const [full, setFull] = useState(false)
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    const el = box.current!
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width))
    ro.observe(el)
    const onFs = () => setFull(document.fullscreenElement === el.parentElement)
    document.addEventListener("fullscreenchange", onFs)
    return () => { ro.disconnect(); document.removeEventListener("fullscreenchange", onFs) }
  }, [])

  const virtual = w < 520 ? w : DESKTOP
  const scale = w ? w / virtual : 1
  const toggle = () => (full ? document.exitFullscreen() : box.current!.parentElement!.requestFullscreen())

  return (
    <div className="vl">
      <div className="vl-bar">
        <span className="vl-live">{title}, live</span>
        <button onClick={toggle}>
          {full ? <Minimize size={16} weight="Filled" /> : <Maximize size={16} weight="Filled" />}
          {full ? "Close" : "Full screen"}
        </button>
      </div>
      <div className="vl-view" ref={box} onPointerEnter={() => setTimeout(() => setTouched(true), 1600)} onPointerDown={() => setTouched(true)}>
        <p className={`vl-hint ${touched ? "off" : ""}`} aria-hidden>Scroll inside to explore the site</p>
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
