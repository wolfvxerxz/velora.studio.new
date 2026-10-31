import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy, getCaseStudySlugs, type CaseStudyWorkItem } from "@/lib/case-studies"
import { getCaseStory } from "@/lib/case-stories"
import { JsonLd, breadcrumbLd } from "@/components/seo-shell"
import { AppleNav } from "@/components/apple"
import { LivePreview } from "@/components/live-preview"

interface PageProps {
  params: Promise<{ slug: string }>
}

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

// Each piece of work sits in its own card
function Shot({ item, alt }: { item: CaseStudyWorkItem; alt: string }) {
  return (
    <figure className="vc-card">
      {item.type === "video"
        ? <video src={item.src} autoPlay loop muted playsInline preload="metadata" aria-label={alt} />
        // eslint-disable-next-line @next/next/no-img-element
        : <img src={item.src} alt={item.alt ?? alt} loading="lazy" decoding="async" />}
    </figure>
  )
}

// A case reads like a walk through the work: what it is, the site running live, then each idea
// with one line on why, and its shots in ones and twos.
export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const story = getCaseStory(study)
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const i = withPages.findIndex((c) => c.slug === study.slug)
  const next = withPages[(i + 1) % withPages.length]
  const meta = [...(study.services ?? []), study.date].filter(Boolean)

  return (
    <div className="va vc">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "CreativeWork", name: `${study.title} case study`, headline: story.headline, description: study.description,
        url: `https://velora.studio/work/${study.slug}`, image: `https://velora.studio${study.cover}`, dateCreated: study.date, genre: study.services, keywords: study.areas?.join(", "),
        creator: { "@type": "Organization", name: "Velora Studio", url: "https://velora.studio" },
      }} />
      <JsonLd data={breadcrumbLd([["Home", "/"], ["Work", "/#work"], [study.title, `/work/${study.slug}`]])} />
      <AppleNav />

      <header className="vc-head">
        <span className="vc-mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.logo} alt="" className={study.logoDark ? "inv" : ""} />
        </span>
        <h1><b>{study.title}.</b> {story.headline}.</h1>
        <p>{study.description}</p>
        <p className="vc-meta">{meta.join(" · ")}</p>
      </header>

      <main className="vc-work">
        {study.live ? <LivePreview src={study.live} title={study.title} /> : <Shot item={story.hero} alt={`${study.title} case study`} />}

        {story.chapters.map((c) => (
          <section key={c.label} className="vc-chapter">
            <div className="vc-note">
              <h2>{c.title ?? c.label}</h2>
              {c.body?.[0] && <p>{c.body[0]}</p>}
            </div>
            {c.rows?.map((row, r) => (
              <div key={r} className={row.length > 1 ? "vc-two" : "vc-one"}>
                {row.map((s) => <Shot key={s.src} item={s} alt={`${study.title}, ${c.label}`} />)}
              </div>
            ))}
          </section>
        ))}

        {(story.result || study.testimonial) && (
          <section className="vc-end">
            {story.result && <p className="vc-result">{story.result}</p>}
            {study.testimonial && (
              <figure className="vc-quote">
                <blockquote>{study.testimonial.quote}</blockquote>
                <figcaption>
                  {study.testimonial.avatar && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={study.testimonial.avatar} alt="" width={28} height={28} />
                  )}
                  <span><b>{study.testimonial.name}</b> {study.testimonial.role}</span>
                </figcaption>
              </figure>
            )}
          </section>
        )}

        <Link href={`/work/${next.slug}`} className="vc-next">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={next.cover} alt="" loading="lazy" decoding="async" style={{ objectPosition: next.coverPosition ?? "top" }} />
          <p><b>{next.title}</b><span>{next.tagline}</span></p>
        </Link>
      </main>
    </div>
  )
}
