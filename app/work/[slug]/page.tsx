import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy, getCaseStudySlugs, type CaseStudyWorkItem } from "@/lib/case-studies"
import { getCaseStory } from "@/lib/case-stories"
import { Reveal } from "@/components/reveal"

interface PageProps {
  params: Promise<{ slug: string }>
}

const scheduleUrl = "https://cal.com/vuk-m/15min"
const block = "px-5 py-16 sm:px-6 sm:py-20"
const body = "!text-[16px] !leading-[26px] !font-[400] text-[var(--t-muted)]"

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: "Work" }
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  }
}

function CapLine() {
  return (
    <div className="cap-line" aria-hidden>
      <span />
    </div>
  )
}

// Same section heading as the home page: tick, mono title, rule
function Subheading({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="h-[7px] w-3 bg-[var(--t-mint)]" aria-hidden />
      <h2 className="mono !text-[16px] !leading-[20px] !tracking-[-0.02em] text-[var(--t-ink)]">{title}</h2>
      <span className="h-px flex-1 bg-[var(--t-line)]" aria-hidden />
      {meta && <span className="mono text-[14px] leading-5 text-[var(--t-faint)] tabular-nums">{meta}</span>}
    </div>
  )
}

// A shot in the same frame as the home work grid
function Shot({ item, alt }: { item: CaseStudyWorkItem; alt: string }) {
  return (
    <div className="rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2">
      {item.type === "video" ? (
        <video src={item.src} autoPlay loop muted playsInline aria-label={alt} className="block h-auto w-full" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.src} alt={item.alt ?? alt} loading="lazy" decoding="async" className="block h-auto w-full" />
      )}
    </div>
  )
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const story = getCaseStory(study)
  const withPages = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const i = withPages.findIndex((c) => c.slug === study.slug)
  const next = withPages[(i + 1) % withPages.length]
  const pad = (n: number) => String(n).padStart(2, "0")

  const facts = [
    { k: "Project", v: study.areas?.join(", ") },
    { k: "Year", v: study.date },
    { k: "Deliverables", v: study.services?.join(", ") },
  ].filter((f) => f.v)

  // Lead the quote with its first sentence in full ink, the rest softer
  const q = study.testimonial?.quote ?? ""
  const cut = q.search(/[.!?] /)
  const qHead = cut > -1 ? q.slice(0, cut + 1) : q
  const qRest = cut > -1 ? q.slice(cut + 1) : ""

  return (
    <main
      className="min-h-screen font-sans"
      style={{
        backgroundColor: "var(--t-page)",
        backgroundImage: "radial-gradient(var(--t-dot) 1px, transparent 1px)",
        backgroundSize: "14px 14px",
      }}
    >
      <div className="mx-auto min-h-screen w-full max-w-[680px] border-x border-[var(--t-line)] bg-[var(--t-bg)]">
        {/* Topbar, as on the home page */}
        <header className="sticky top-0 z-50 border-b border-[var(--t-line)] bg-[var(--t-header)] backdrop-blur-xl">
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-6">
            <Link href="/" className="press flex items-center" aria-label="velora.studio home">
              <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="theme-logo" priority />
            </Link>
            <nav className="flex items-center gap-5">
              <Link href="/#work" className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">
                Work
              </Link>
              <Link href="/#pricing" className="mono hidden text-[14px] leading-5 text-[var(--t-muted)] transition-colors hover:text-[var(--t-ink)] sm:inline">
                Pricing
              </Link>
              <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary !h-9 !px-4 !text-[13px]">
                Schedule Call
              </a>
            </nav>
          </div>
        </header>

        {/* Intro */}
        <Reveal as="section" className={block}>
          <nav className="mono mb-8 flex items-center gap-2 text-[13px] leading-5 text-[var(--t-faint)]" aria-label="Breadcrumb">
            <Link href="/#work" className="transition-colors hover:text-[var(--t-ink)]">Work</Link>
            <span aria-hidden>/</span>
            <span className="text-[var(--t-muted)]">{study.title}</span>
          </nav>
          <h1 className="!text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-[var(--t-ink)]">{story.headline}</h1>
          <p className={`mt-4 ${body}`}>{study.description}</p>

          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.k} className="flex flex-col gap-1">
                <dt className="font-[family-name:var(--font-geist-mono)] text-[13px] font-semibold leading-5 tracking-[-0.02em] text-[var(--t-faint)]">{f.k}</dt>
                <dd className="text-[14px] leading-5 text-[var(--t-ink)]">{f.v}</dd>
              </div>
            ))}
          </dl>

          {study.testimonial && (
            <figure className="mt-10 border-t border-[var(--t-line)] pt-8">
              <blockquote className="text-[16px] leading-[26px] text-[var(--t-muted)]">
                “<span className="text-[var(--t-ink)]">{qHead}</span>{qRest}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-[14px] leading-5">
                {study.testimonial.avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={study.testimonial.avatar} alt="" width={24} height={24} className="h-6 w-6 rounded-full object-cover" />
                )}
                <span className="text-[var(--t-ink)]">{study.testimonial.name}</span>
                <span className="text-[var(--t-faint)]">{study.testimonial.role}</span>
              </figcaption>
            </figure>
          )}

          <div className="mt-10">
            <Shot item={story.hero} alt={`${study.title} preview`} />
          </div>
        </Reveal>

        <CapLine />

        <Reveal as="section" className={block}>
          <Subheading title="Introduction" />
          <div className="flex flex-col gap-4">
            {story.intro.map((p) => <p key={p} className={body}>{p}</p>)}
          </div>
          {story.vision && (
            <p className="mt-8 border-l-2 border-[var(--t-mint)] pl-4 !text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-[var(--t-ink)]">
              {story.vision}
            </p>
          )}
        </Reveal>

        {story.chapters.map((c, n) => (
          <div key={c.label}>
            <CapLine />
            <Reveal as="section" className={block}>
              <Subheading title={c.label} meta={story.chapters.length > 1 ? pad(n + 1) : undefined} />
              {c.title && <h3 className="!text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-[var(--t-ink)]">{c.title}</h3>}
              {c.body && (
                <div className={`flex flex-col gap-4 ${c.title ? "mt-3" : ""}`}>
                  {c.body.map((p) => <p key={p} className={body}>{p}</p>)}
                </div>
              )}
              {c.rows && c.rows.length > 0 && (
                <div className={`flex flex-col gap-5 ${c.title || c.body ? "mt-10" : ""}`}>
                  {c.rows.map((row, r) => (
                    <div key={r} className={row.length > 1 ? "grid grid-cols-1 gap-5 sm:grid-cols-2" : ""}>
                      {row.map((item) => <Shot key={item.src} item={item} alt={`${study.title}, ${c.label}`} />)}
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        ))}

        <CapLine />

        {/* Result, closing CTA and next case */}
        <Reveal as="footer" className={block}>
          {story.result && (
            <div className="mb-12">
              <Subheading title="The result" />
              <p className="!text-[20px] !leading-[28px] !font-[500] !tracking-[-0.01em] text-[var(--t-ink)]">{story.result}</p>
            </div>
          )}

          <div
            className="flex flex-col items-start gap-5 border border-[var(--t-line)] bg-[var(--t-surface)] p-8"
            style={{ backgroundImage: "linear-gradient(180deg, rgb(var(--t-accent-rgb)/0.08) 0%, rgba(93,255,202,0) 60%)" }}
          >
            <h2 className="funnel !text-[28px] !leading-[36px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Want work like this for your startup?</h2>
            <p className="-mt-3 !text-[14px] !leading-[20px] !font-[400] text-[var(--t-muted)]">
              Tell us what you&apos;re building and when it needs to ship. We set the plan together on a short call.
            </p>
            <a href={scheduleUrl} target="_blank" rel="noopener noreferrer" className="tick tick-primary mt-1">
              Schedule Call
            </a>
          </div>

          {next && next.slug !== study.slug && (
            <div className="mt-12">
              <Subheading title="Next case" />
              <Link href={`/work/${next.slug}`} className="press group block">
                <div className="rounded-[2px] border border-[var(--t-line)] bg-[var(--t-surface)] p-2 transition-colors duration-300 group-hover:border-[var(--t-line-strong)]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={next.cover}
                      alt={next.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: next.coverPosition ?? "center" }}
                    />
                  </div>
                </div>
                <p className="mt-3 px-0.5 text-[13px] leading-[18px]">
                  <span className="text-[var(--t-ink)]">{next.title}</span>
                  {next.tagline && <span className="ml-2 text-[var(--t-faint)]">{next.tagline}</span>}
                </p>
              </Link>
            </div>
          )}

          <p className="mono mt-12 text-[12px] leading-4 text-[var(--t-faint)]">velora.studio · Design &amp; development studio · © 2026</p>
        </Reveal>
      </div>
    </main>
  )
}
