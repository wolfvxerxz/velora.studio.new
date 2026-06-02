import Link from "next/link"
import type { CaseStudy } from "@/lib/case-studies"

interface WorkGridProps {
  caseStudies: CaseStudy[]
}

export function WorkGrid({ caseStudies }: WorkGridProps) {
  return (
    <div className="flex-1 md:h-screen md:overflow-y-auto bg-white">
      <div className="p-3 md:p-4">
        <header className="mb-2.5 flex items-center justify-between">
          <h2 className="text-[13px] font-medium text-black tracking-[-0.01em]">Work.</h2>
        </header>

        <div className="grid grid-cols-2 gap-2.5">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl border border-black/[0.06] bg-neutral-50 transition-all duration-200 group-hover:border-black/[0.12] group-hover:shadow-[0_4px_16px_-8px_rgba(0,0,0,0.1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.cover}
                  alt={study.title}
                  className="aspect-[16/11] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-1.5 flex items-baseline justify-between gap-2 px-0.5">
                <span className="text-[11px] font-medium text-black tracking-[-0.01em] truncate">
                  {study.title}
                </span>
                <span className="shrink-0 text-[10px] font-normal text-black/40 tabular-nums">
                  {study.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
