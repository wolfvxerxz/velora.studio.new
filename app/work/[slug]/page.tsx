import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies"

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
  return {
    title: `${study.title} — Case Study`,
    description: study.description,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <main className="min-h-screen bg-white font-sans">
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] font-normal text-black/45 transition-colors hover:text-black"
        >
          ← Back to work
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="opacity-90" />
          <span className="text-black/25 text-sm">×</span>
          <Image
            src={study.logo}
            alt={study.title}
            width={study.title === "Ecom Wizards" ? 100 : 80}
            height={24}
            className="h-5 w-auto max-w-[100px] object-contain opacity-80"
          />
        </div>

        <h1 className="text-[22px] font-normal text-black leading-[1.25] tracking-[-0.02em] md:text-[26px]">
          {study.title} — Design &amp; build
        </h1>

        <p className="mt-4 text-[14px] font-normal text-black/65 leading-[1.55] tracking-tight">
          {study.description}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-black/[0.08] bg-neutral-50 shadow-[0_2px_24px_-8px_rgba(0,0,0,0.08)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.cover}
            alt={`${study.title} preview`}
            className="w-full h-auto block"
            loading="eager"
            decoding="async"
          />
        </div>

        <section className="mt-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35 mb-4">
            All work
          </p>
          <div className="flex flex-col gap-3">
            {study.work.map((item, i) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-2xl border border-black/[0.06] bg-neutral-50"
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.src}
                    alt={item.alt ?? `${study.title} ${i + 1}`}
                    className="w-full h-auto block"
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-black/[0.07] pt-8">
          <a
            href="https://cal.com/vuk-m/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-black px-5 py-2 text-[13px] font-normal text-white hover:bg-black/80 transition-all duration-200"
          >
            Schedule Now
          </a>
          <Link
            href="/"
            className="rounded-full border border-black/20 px-5 py-2 text-[13px] font-normal text-black/70 hover:border-black/40 hover:text-black hover:bg-black/[0.03] transition-all duration-200"
          >
            View all work
          </Link>
        </div>
      </div>
    </main>
  )
}
