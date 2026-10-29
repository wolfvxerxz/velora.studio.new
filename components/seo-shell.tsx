// The frame every search page shares: the case-page column, header, breadcrumbs, related work, FAQ and booking.
import Link from "next/link"
import Image from "next/image"
import { caseStudies } from "@/lib/case-studies"
import { SERVICES, INDUSTRIES, COMPARE, STUDIO } from "@/lib/seo"

export const block = "px-5 py-16 sm:px-6 sm:py-20"
export const body = "!text-[16px] !leading-[26px] !font-[400] text-[var(--t-muted)]"

export function CapLine() {
  return <div className="cap-line" aria-hidden><span /></div>
}

export function Subheading({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-[7px] w-3 bg-[var(--t-mint)]" aria-hidden />
      <h2 className="mono !text-[16px] !leading-[20px] !tracking-[-0.02em] text-[var(--t-ink)]">{title}</h2>
      <span className="h-px flex-1 bg-[var(--t-line)]" aria-hidden />
      {meta && <span className="mono text-[14px] leading-5 text-[var(--t-faint)] tabular-nums">{meta}</span>}
    </div>
  )
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
    <main
      className="min-h-screen font-sans"
      style={{ backgroundColor: "var(--t-page)", backgroundImage: "radial-gradient(var(--t-dot) 1px, transparent 1px)", backgroundSize: "14px 14px" }}
    >
      <JsonLd data={breadcrumbLd(crumbs)} />
      <div className="mx-auto min-h-screen w-full max-w-[680px] border-x border-[var(--t-line)] bg-[var(--t-bg)]">
        <header className="sticky top-0 z-50 border-b border-[var(--t-line)] bg-[var(--t-header)] backdrop-blur-xl">
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-6">
            <Link href="/" className="press flex items-center" aria-label="velora.studio home">
              <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="theme-logo" priority />
            </Link>
            <nav className="flex items-center gap-5">
              <Link href="/#work" className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">Work</Link>
              <Link href="/services" className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">Services</Link>
              <Link href="/pricing" className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">Pricing</Link>
              <a href={STUDIO.book} target="_blank" rel="noopener noreferrer" className="tick tick-primary !h-9 !px-4 !text-[13px]">Schedule Call</a>
            </nav>
          </div>
        </header>
        <div className={`${block} !pb-0`}>
          <nav className="mono flex flex-wrap items-center gap-2 text-[13px] leading-5 text-[var(--t-faint)]" aria-label="Breadcrumb">
            {crumbs.map(([name, path], i) => (
              <span key={path} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {i < crumbs.length - 1 ? <Link href={path} className="transition-colors hover:text-[var(--t-ink)]">{name}</Link> : <span className="text-[var(--t-muted)]" aria-current="page">{name}</span>}
              </span>
            ))}
          </nav>
        </div>
        {children}
        <SiteLinks />
      </div>
    </main>
  )
}

export function RelatedWork({ slugs, title = "Work that shows it" }: { slugs: string[]; title?: string }) {
  const list = slugs.map((s) => caseStudies.find((c) => c.slug === s)).filter((c): c is (typeof caseStudies)[number] => !!c && c.cover.startsWith("/case/"))
  if (!list.length) return null
  return (
    <section className={block}>
      <Subheading title={title} meta={String(list.length).padStart(2, "0")} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {list.map((c) => (
          <Link key={c.slug} href={`/work/${c.slug}`} className="press group block">
            <div className="rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2 transition-colors group-hover:border-[var(--t-line-strong)]">
              <div className="relative aspect-[16/9] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.cover} alt={`${c.title} case study`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            </div>
            <p className="mt-3 px-0.5 text-[13px] leading-[18px]">
              <span className="text-[var(--t-ink)]">{c.title}</span>
              {c.tagline && <span className="ml-2 text-[var(--t-faint)]">{c.tagline}</span>}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export function Faq({ faq }: { faq: [string, string][] }) {
  if (!faq.length) return null
  return (
    <section className={block}>
      <JsonLd data={faqLd(faq)} />
      <Subheading title="Questions" />
      <dl className="border-t border-[var(--t-line)]">
        {faq.map(([q, a]) => (
          <div key={q} className="border-b border-[var(--t-line)] py-5">
            <dt className="text-[16px] leading-6 text-[var(--t-ink)]">{q}</dt>
            <dd className={`mt-2 ${body}`}>{a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function BookCta({ line = "Tell us what you're building and when it needs to ship. We set the plan together on a short call." }: { line?: string }) {
  return (
    <section className={block}>
      <div
        className="flex flex-col items-start gap-5 border border-[var(--t-line)] bg-[var(--t-surface)] p-8"
        style={{ backgroundImage: "linear-gradient(180deg, rgb(var(--t-accent-rgb)/0.08) 0%, rgba(93,255,202,0) 60%)" }}
      >
        <h2 className="funnel !text-[28px] !leading-[36px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Got a launch coming up?</h2>
        <p className="-mt-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)]">{line}</p>
        <a href={STUDIO.book} target="_blank" rel="noopener noreferrer" className="tick tick-primary mt-1">Schedule Call</a>
      </div>
    </section>
  )
}

// Every search page links to every other, so Google and assistants can find them all.
export function SiteLinks() {
  const col = (h: string, links: [string, string][]) => (
    <div className="flex flex-col gap-2">
      <span className="mono text-[12px] leading-4 text-[var(--t-faint)]">{h}</span>
      {links.map(([t, href]) => <Link key={href} href={href} className="text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)]">{t}</Link>)}
    </div>
  )
  return (
    <footer className={`${block} border-t border-[var(--t-line)]`}>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {col("Services", SERVICES.map((s) => [s.name, `/services/${s.slug}`]))}
        {col("Industries", INDUSTRIES.map((s) => [s.name, `/industries/${s.slug}`]))}
        {col("Guides", [...COMPARE.map((s) => [s.name, `/compare/${s.slug}`] as [string, string]), ["Glossary", "/glossary"], ["Pricing", "/pricing"], ["Blog", "/blog"]])}
      </div>
      <p className="mono mt-10 text-[12px] leading-4 text-[var(--t-faint)]">velora.studio · Design &amp; development studio · © 2026</p>
    </footer>
  )
}
