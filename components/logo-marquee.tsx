import { type CaseStudy, logoClass } from "@/lib/case-studies"

function Logos({ studies, hidden }: { studies: CaseStudy[]; hidden?: boolean }) {
  return (
    <div className="marquee-set" aria-hidden={hidden || undefined}>
      {studies.map((c) => {
        // Square badge icons get the name beside them; wordmarks stand alone
        const badge = c.logo.includes("/client-logos/")
        return (
          <span key={c.slug} className="flex flex-none items-center gap-2" title={hidden ? undefined : c.title}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.logo}
              alt={hidden ? "" : c.title}
              className={`${badge ? "h-5 w-5 rounded-full" : "h-5 w-auto max-w-[96px]"} object-contain ${logoClass(c)}`}
            />
            {badge && <span className="whitespace-nowrap text-[14px] leading-5 text-[var(--t-ink)]">{c.title}</span>}
          </span>
        )
      })}
    </div>
  )
}

/** Client logos drifting in a loop; they fade in at one edge and out at the other. */
export function LogoMarquee({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="marquee mt-5">
      <div className="marquee-track">
        <Logos studies={studies} />
        <Logos studies={studies} hidden />
      </div>
    </div>
  )
}
