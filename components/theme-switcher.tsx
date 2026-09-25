"use client"

import { useEffect, useState } from "react"

const THEMES = [
  { id: "green", label: "Green", bg: "#031B1D", accent: "#21FFBC" },
  { id: "brown", label: "Brown", bg: "#463830", accent: "#2F8FEA" },
  { id: "hermae", label: "Hermae", bg: "#14CFBC", accent: "#E8591A" },
  { id: "tempo", label: "Tempo", bg: "#C5D65A", accent: "#17A6F0" },
] as const

type ThemeId = (typeof THEMES)[number]["id"]

export function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeId>("green")

  useEffect(() => {
    const current = document.documentElement.dataset.theme as ThemeId | undefined
    if (current) setActive(current)
  }, [])

  const choose = (id: ThemeId) => {
    const root = document.documentElement
    root.classList.add("theme-switching")
    root.dataset.theme = id
    setActive(id)
    try {
      localStorage.setItem("velora-theme", id)
    } catch {
      /* storage unavailable: theme still applies for this visit */
    }
    window.setTimeout(() => root.classList.remove("theme-switching"), 500)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="mono text-[13px] leading-5 text-[var(--t-faint)]">Theme</span>
      <div className="flex items-center gap-2" role="radiogroup" aria-label="Site color theme">
        {THEMES.map((t) => {
          const on = active === t.id
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={on}
              aria-label={t.label}
              title={t.label}
              onClick={() => choose(t.id)}
              className="press relative h-7 w-7 overflow-hidden rounded-full"
              style={{
                background: `linear-gradient(135deg, ${t.bg} 0 55%, ${t.accent} 55% 100%)`,
                boxShadow: on
                  ? "0 0 0 2px var(--t-bg), 0 0 0 4px var(--t-ink)"
                  : "0 0 0 1px rgb(var(--t-line-rgb) / 0.3)",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
