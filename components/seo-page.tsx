// One template for service, industry and comparison pages: a quotable answer, sections, proof, questions, booking.
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { caseStudies } from "@/lib/case-studies"
import { getSeoPage, STUDIO, type SeoPage } from "@/lib/seo"
import { Shell, Subheading, CapLine, RelatedWork, Faq, BookCta, JsonLd, block, body } from "./seo-shell"

const HUB: Record<SeoPage["kind"], [string, string]> = { services: ["Services", "/services"], industries: ["Industries", "/services#industries"], compare: ["Guides", "/services#guides"] }

export function seoMetadata(kind: SeoPage["kind"], slug: string): Metadata {
  const p = getSeoPage(kind, slug)
  if (!p) return {}
  const cover = caseStudies.find((c) => c.slug === p.cases[0])?.cover
  const url = `${STUDIO.url}/${kind}/${slug}`
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: url },
    openGraph: { title: p.title, description: p.description, url, type: "website", images: cover ? [{ url: `${STUDIO.url}${cover}` }] : undefined },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: cover ? [`${STUDIO.url}${cover}`] : undefined },
  }
}

export function SeoPageView({ kind, slug }: { kind: SeoPage["kind"]; slug: string }) {
  const p = getSeoPage(kind, slug)
  if (!p) notFound()
  const url = `${STUDIO.url}/${kind}/${slug}`
  const ld =
    kind === "compare"
      ? { "@context": "https://schema.org", "@type": "Article", headline: p.h1, description: p.description, url, author: { "@type": "Organization", name: STUDIO.name, url: STUDIO.url }, publisher: { "@type": "Organization", name: STUDIO.name } }
      : { "@context": "https://schema.org", "@type": "Service", name: p.name, serviceType: p.name, description: p.description, url, areaServed: "Worldwide", provider: { "@type": "Organization", name: STUDIO.name, url: STUDIO.url } }
  return (
    <Shell crumbs={[["Home", "/"], HUB[kind], [p.name, `/${kind}/${slug}`]]}>
      <JsonLd data={ld} />
      <section className={block}>
        <h1 className="!text-[28px] !leading-[34px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">{p.h1}</h1>
        <p className={`mt-4 ${body}`}>{p.answer}</p>
        <a href={STUDIO.book} target="_blank" rel="noopener noreferrer" className="tick tick-primary mt-8 inline-flex">Schedule Call</a>
      </section>
      {p.sections.map((s) => (
        <div key={s.title}>
          <CapLine />
          <section className={block}>
            <Subheading title={s.title} />
            {s.body?.map((t) => <p key={t} className={`${body} mb-4 last:mb-0`}>{t}</p>)}
            {s.list && (
              <ul className="flex flex-col gap-3">
                {s.list.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] leading-6 text-[var(--t-ink)]">
                    <span className="mt-[9px] h-[6px] w-[6px] flex-none bg-[var(--t-mint)]" aria-hidden />{t}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      ))}
      <CapLine />
      <RelatedWork slugs={p.cases} />
      <CapLine />
      <Faq faq={p.faq} />
      <BookCta />
    </Shell>
  )
}
