// The frame every search page shares, in the homepage's Apple manner: nav, a centred column, related work,
// questions, booking and the grey footer.
import Link from "next/link"
import { caseStudies } from "@/lib/case-studies"
import { STUDIO } from "@/lib/seo"
import { ApplePage } from "./apple"

export const block = "vp-block"
export const body = "vp-body"

export function CapLine() {
  return null
}

export function Subheading({ title }: { title: string; meta?: string }) {
  return <h2 className="vp-h2">{title}</h2>
}

export const JsonLd = ({ data }: { data: object }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
)

export const breadcrumbLd = (items: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: `${STUDIO.url}${path}` })),
})

export const faqLd = (faq: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
})

export function Shell({ crumbs, children }: { crumbs: [string, string][]; children: React.ReactNode }) {
  return (
    <ApplePage>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <nav className="vp-crumbs" aria-label="Breadcrumb">
        {crumbs.map(([name, path], i) => (
          <span key={path}>
            {i > 0 && <span aria-hidden> › </span>}
            {i < crumbs.length - 1 ? <Link href={path}>{name}</Link> : <span aria-current="page">{name}</span>}
          </span>
        ))}
      </nav>
      {children}
    </ApplePage>
  )
}

export function RelatedWork({ slugs, title = "Work that shows it" }: { slugs: string[]; title?: string }) {
  const list = slugs.map((s) => caseStudies.find((c) => c.slug === s)).filter((c): c is (typeof caseStudies)[number] => !!c && c.cover.startsWith("/case/"))
  if (!list.length) return null
  return (
    <section className="vp-block vp-wide">
      <h2 className="vp-h2">{title}</h2>
      <div className="vp-work">
        {list.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="vp-work-tile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.cover} alt={`${c.title} case study`} loading="lazy" decoding="async" />
            <b>{c.title}</b>
            {c.tagline && <span>{c.tagline}</span>}
          </Link>
        ))}
      </div>
    </section>
  )
}

export function Faq({ faq }: { faq: [string, string][] }) {
  if (!faq.length) return null
  return (
    <section className="vp-block">
      <JsonLd data={faqLd(faq)} />
      <h2 className="vp-h2">Questions</h2>
      <div className="vp-faq">
        {faq.map(([q, a]) => (
          <details key={q}><summary>{q}<span aria-hidden>+</span></summary><p>{a}</p></details>
        ))}
      </div>
    </section>
  )
}

export function BookCta({ line = "Tell us what you're building and when it needs to ship. We set the plan together on a short call." }: { line?: string }) {
  return (
    <section className="vp-block vp-wide">
      <div className="vp-cta">
        <h2>Got a launch coming up?</h2>
        <p>{line}</p>
        <a href={STUDIO.book} target="_blank" rel="noopener noreferrer" className="va-pill">Book a call</a>
      </div>
    </section>
  )
}

// Kept for pages that still import it; the footer now carries these links.
export function SiteLinks() {
  return null
}
