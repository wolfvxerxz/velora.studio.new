import type { Metadata } from "next"
import { GLOSSARY, STUDIO, slugify } from "@/lib/seo"
import { Shell, BookCta, JsonLd, block, body } from "@/components/seo-shell"

export const metadata: Metadata = {
  title: "Design Glossary — Brand, Product and Web Terms in Plain Words",
  description: "Plain definitions of design and web terms founders run into: brand identity, design system, design tokens, MVP, Core Web Vitals, AEO, llms.txt and more.",
  alternates: { canonical: `${STUDIO.url}/glossary` },
}

export default function Glossary() {
  return (
    <Shell crumbs={[["Home", "/"], ["Glossary", "/glossary"]]}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "DefinedTermSet", name: "Velora Studio design glossary", url: `${STUDIO.url}/glossary`,
        hasDefinedTerm: GLOSSARY.map(([t, d]) => ({ "@type": "DefinedTerm", name: t, description: d, url: `${STUDIO.url}/glossary#${slugify(t)}` })),
      }} />
      <section className={block}>
        <h1 className="!text-[28px] !leading-[34px] !font-[500] !tracking-[-0.02em] text-[var(--t-ink)]">Design terms, in plain words</h1>
        <p className={`mt-4 ${body}`}>Short definitions of the words that come up when a startup works on its brand, product and website.</p>
        <dl className="mt-10 border-t border-[var(--t-line)]">
          {GLOSSARY.map(([t, d]) => (
            <div key={t} id={slugify(t)} className="scroll-mt-20 border-b border-[var(--t-line)] py-5">
              <dt className="text-[16px] leading-6 text-[var(--t-ink)]">{t}</dt>
              <dd className={`mt-2 ${body}`}>{d}</dd>
            </div>
          ))}
        </dl>
      </section>
      <BookCta />
    </Shell>
  )
}
