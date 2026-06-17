import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { caseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies"
import { CaseStudyImages } from "@/components/case-study-images"
import { CaseStudyTestimonialCard } from "@/components/case-study-testimonial"

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
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#0F0F0F" }}>
      <div className="mx-auto max-w-3xl px-5 py-8 md:py-12">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-[14px] leading-[22px] font-normal text-[#A2A2A2] transition-colors hover:text-white"
        >
          ← Back to work
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <Image src="/logo/logo-v.svg" alt="Velora" width={28} height={28} className="opacity-90 brightness-0 invert" />
          <span className="text-white/25 text-sm">×</span>
          <Image
            src={study.logo}
            alt={study.title}
            width={study.title === "Ecom Wizards" ? 100 : 80}
            height={24}
            className={`h-5 w-auto max-w-[100px] object-contain opacity-90 ${study.logoNoInvert ? "" : "brightness-0 invert"}`}
          />
        </div>

        <h1 className="text-[20px] font-normal text-white leading-[28px] tracking-[-0.02em]">
          {study.title} — Design &amp; build
        </h1>

        <p className="mt-4 text-[16px] font-normal text-[#A2A2A2] leading-[26px] tracking-tight">
          {study.description}
        </p>

        <section className="mt-8">
          <CaseStudyImages
            items={
              study.work[0]?.src === study.cover
                ? study.work
                : [{ src: study.cover, type: "image", alt: `${study.title} preview` }, ...study.work]
            }
            title={study.title}
          />
        </section>

        {study.testimonial && (
          <section className="mt-10">
            <CaseStudyTestimonialCard testimonial={study.testimonial} />
          </section>
        )}

        <div className="mt-10 flex flex-wrap gap-2 border-t border-[#1F1F1F] pt-8">
          <a
            href="https://cal.com/vuk-m/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-4 py-2 text-[14px] leading-[22px] font-normal text-[#0F0F0F] hover:bg-white/90 transition-all duration-200 inline-flex items-center gap-2"
          >
            Schedule Now
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pfp.jpg" alt="Vuk" width={24} height={24} className="h-6 w-6 rounded-[6px] object-cover" />
          </a>
          <Link
            href="/"
            className="rounded-full bg-[#282828] px-4 py-2 text-[14px] leading-[22px] font-normal text-white hover:bg-[#333333] transition-all duration-200"
          >
            View all work
          </Link>
        </div>
      </div>
    </main>
  )
}
