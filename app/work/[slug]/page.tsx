import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies"
import { CaseStudyBody } from "@/components/case-study-body"

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
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-[14px] leading-[22px] font-normal text-[#666666] transition-colors hover:text-[#0A0A0A]"
        >
          ← Back to work
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="opacity-90 brightness-0" />
          <span className="text-black/25 text-sm">×</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={study.logo}
            alt={study.title}
            className={`h-7 w-auto max-w-[120px] object-contain opacity-90`}
          />
        </div>

        <h1 className="text-[24px] font-medium text-[#0A0A0A] leading-[32px] tracking-[-0.02em]">
          {study.title}
        </h1>

        <CaseStudyBody study={study} />

        <div className="mt-10 flex flex-wrap gap-2 border-t border-black/[0.08] pt-8">
          <a
            href="https://cal.com/vuk-m/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#0A0A0A] px-4 py-2 text-[14px] leading-[22px] font-normal text-white hover:bg-[#1A1A1A] transition-all duration-200 inline-flex items-center gap-2"
          >
            Schedule Now
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pfp.jpg" alt="Vuk" width={24} height={24} className="h-6 w-6 rounded-[6px] object-cover" />
          </a>
          <Link
            href="/"
            className="rounded-full bg-white border border-black/[0.08] px-4 py-2 text-[14px] leading-[22px] font-normal text-[#0A0A0A] hover:bg-[#F0F1F3] transition-all duration-200"
          >
            View all work
          </Link>
        </div>
      </div>
    </main>
  )
}
