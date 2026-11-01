"use client"
// Book a call, the way Apple's floating controls behave: hidden while you read the intro; once you scroll past it a dot
// pops in at the bottom centre, stretches into a white pill and the words arrive, and it folds away when you scroll back.
import { useEffect, useState } from "react"

export function FloatCall({ href }: { href: string }) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    // Appear once the page's intro has scrolled out of view; pages without one wait for a short scroll
    // and step aside while the page's own call to action is on screen
    const intro = document.querySelector(".vc-head"), own = document.querySelector("[data-own-cta]")
    const onScroll = () => {
      const past = intro ? intro.getBoundingClientRect().bottom < 0 : scrollY > 200
      const ownInView = own ? own.getBoundingClientRect().top < innerHeight - 40 : false
      setShown(past && !ownInView)
    }
    onScroll()
    addEventListener("scroll", onScroll, { passive: true }); addEventListener("resize", onScroll)
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll) }
  }, [])

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`va-float ${shown ? "shown" : ""}`} aria-hidden={!shown} tabIndex={shown ? 0 : -1}>
      <span className="va-float-dot" aria-hidden />
      <span className="va-float-bg" aria-hidden />
      <span className="va-float-label">Book an intro call</span>
    </a>
  )
}
