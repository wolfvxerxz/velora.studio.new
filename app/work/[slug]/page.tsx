import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy, getCaseStudySlugs, type CaseStudyWorkItem } from "@/lib/case-studies"
import { getCaseStory } from "@/lib/case-stories"
import { SERVICES, INDUSTRIES } from "@/lib/seo"
import { JsonLd, breadcrumbLd } from "@/components/seo-shell"
import { ApplePage } from "@/components/apple"

interface PageProps {
  params: Promise<{ slug: string }>
}

const scheduleUrl = "https://cal.com/vuk-m/15min"

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: "Work" }
  const title = `${study.title} — ${study.tagline ?? "Case Study"}`
  const url = `https://velora.studio/work/${study.slug}`
  const image = `https://velora.studio${study.cover}`
  return {
    title,
    description: study.description,
    alternates: { canonical: url },
    openGraph: { title, description: study.description, url, type: "article", images: [{ url: image, width: 2000, height: 1125, alt: study.title }] },
    twitter: { card: "summary_large_image", title, description: study.description, images: [image] },
  }
}

// A shot as Apple shows product: no frame, softly rounded
function Shot({ item, alt }: { item: CaseStudyWorkItem; alt: string }) {
  return item.type === "video"
    ? <video src={item.src} autoPlay loop muted playsInline preload="metadata" aria-label={alt} className="vw-shot" />
    // eslint-disable-next-line @next/next/no-img-element
    : <img src={item.src} alt={item.alt ?? alt} loading="lazy" decoding="async" className="vw-shot" />
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const story = getCaseStory(study)
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const i = withPages.findIndex((c) => c.slug === study.slug)
  const next = withPages[(i + 1) % withPages.length]
  const prev = withPages[(i - 1 + withPages.length) % withPages.length]
  const rel = [...SERVICES, ...INDUSTRIES].filter((p) => p.cases.includes(study.slug)).slice(0, 6)

  const facts = [
    { k: "Project", v: study.areas ?? [] },
    { k: "Year", v: study.date ? [study.date] : [] },
    { k: "Deliverables", v: study.services ?? [] },
  ].filter((f) => f.v.length)

  return (
    <ApplePage className="vw">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CreativeWork", name: `${study.title} case study`, headline: story.headline, description: study.description,
        url: `https://velora.studio/work/${study.slug}`, image: `https://velora.studio${study.cover}`, dateCreated: study.date, genre: study.services, keywords: study.areas?.join(", "),
        creator: { "@type": "Organization", name: "Velora Studio", url: "https://velora.studio" },
      }} />
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Work", "/#work"], [study.title, `/work/${study.slug}`]])} />

      {/* The product bar under the global nav, as on Apple's product pages */}
      <div className="vw-bar">
        <div className="vw-bar-in">
          <b>{study.title}</b>
          <nav aria-label="Case studies">
            <Link href={`/work/${prev.slug}`} title={prev.title}>‹ {prev.title}</Link>
            <Link href={`/work/${next.slug}`} title={next.title}>{next.title} ›</Link>
          </nav>
        </div>
      </div>

      <section className="vw-hero">
        <h1>{study.title}</h1>
        <p className="vw-head">{story.headline}</p>
        <p className="vw-desc">{study.description}</p>
        <dl className="vw-facts">
          {facts.map((f) => <div key={f.k}><dt>{f.k}</dt>{f.v.map((x) => <dd key={x}>{x}</dd>)}</div>)}
        </dl>
        <div className="vw-wide"><Shot item={story.hero} alt={`${study.title} preview`} /></div>
      </section>

      {study.testimonial && (
        <figure className="vw-quote">
          <blockquote>{study.testimonial.quote}</blockquote>
          <figcaption>
            {study.testimonial.avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={study.testimonial.avatar} alt="" width={32} height={32} />
            )}
            <span><b>{study.testimonial.name}</b> {study.testimonial.role}</span>
          </figcaption>
        </figure>
      )}

      <section className="vw-text">
        <h2>Introduction</h2>
        {story.intro.map((p) => <p key={p}>{p}</p>)}
        {story.vision && <p className="vw-big">{story.vision}</p>}
      </section>

      {story.chapters.map((c) => (
        <section key={c.label} className="vw-chapter">
          <div className="vw-text">
            <h2>{c.title ?? c.label}</h2>
            {c.body?.map((p) => <p key={p}>{p}</p>)}
          </div>
          {c.rows && c.rows.length > 0 && (
            <div className="vw-wide vw-rows">
              {c.rows.map((row, r) => (
                <div key={r} className={row.length > 1 ? "vw-two" : ""}>
                  {row.map((item) => <Shot key={item.src} item={item} alt={`${study.title}, ${c.label}`} />)}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      {story.result && (
        <section className="vw-text">
          <h2>The result</h2>
          <p className="vw-big">{story.result}</p>
        </section>
      )}

      <section className="vp-block vp-wide">
        <div className="vp-cta">
          <h2>Want work like this?</h2>
          <p>Tell us what you&apos;re building and when it needs to ship. We set the plan together on a short call.</p>
          <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="va-pill">Book a call</a>
        </div>
      </section>

      {rel.length > 0 && (
        <section className="vw-text vw-rel">
          <h2>Related services</h2>
          <p>{rel.map((p, n) => <span key={p.kind + p.slug}>{n > 0 && " · "}<Link href={`/${p.kind}/${p.slug}`}>{p.name}</Link></span>)}</p>
        </section>
      )}

      <section className="vp-block vp-wide">
        <h2 className="vp-h2">More work</h2>
        <div className="vp-work">
          {withPages.filter((c) => c.slug !== study.slug).map((c) => (
            <Link key={c.slug} href={`/work/${c.slug}`} className="vp-work-tile">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.cover} alt={`${c.title} case study`} loading="lazy" decoding="async" style={{ objectPosition: c.coverPosition ?? "top" }} />
              <b>{c.title}</b>
              {c.tagline && <span>{c.tagline}</span>}
            </Link>
          ))}
        </div>
      </section>
    </ApplePage>
  )
}
