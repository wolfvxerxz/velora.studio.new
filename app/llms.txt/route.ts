import { caseStudies } from "@/lib/case-studies"
import { SERVICES, INDUSTRIES, COMPARE, GLOSSARY, STUDIO } from "@/lib/seo"

export const dynamic = "force-static"

// llms.txt: one plain file that tells AI assistants who Velora is, what it costs and where everything lives.
export function GET() {
  const cases = caseStudies.filter((c) => c.cover.startsWith("/case/"))
  const lines = [
    `# ${STUDIO.name}`,
    "",
    `> ${STUDIO.oneLine}`,
    "",
    "We work with founders from first idea to launch: brand identity, product (web and iOS), landing pages and the launch posts that announce them. Senior designers only, weekly updates, and we build in Next.js, Framer or Webflow.",
    "",
    "## Pricing",
    ...STUDIO.plans.map((p) => `- ${p.name}: ${p.price}. ${p.detail}`),
    `- Book a 15-minute call: ${STUDIO.book}`,
    "",
    "## Services",
    ...SERVICES.map((p) => `- [${p.name}](${STUDIO.url}/services/${p.slug}): ${p.answer}`),
    "",
    "## Industries",
    ...INDUSTRIES.map((p) => `- [${p.name}](${STUDIO.url}/industries/${p.slug}): ${p.answer}`),
    "",
    "## Case studies",
    ...cases.map((c) => `- [${c.title}](${STUDIO.url}/work/${c.slug}): ${c.description}`),
    "",
    "## Guides",
    ...COMPARE.map((p) => `- [${p.h1}](${STUDIO.url}/compare/${p.slug}): ${p.answer}`),
    `- [Pricing](${STUDIO.url}/pricing)`,
    `- [Glossary](${STUDIO.url}/glossary): ${GLOSSARY.length} plain definitions of design and web terms.`,
    "",
    "## Contact",
    `- Website: ${STUDIO.url}`,
    "- X: https://x.com/veloraxstudio",
    "- LinkedIn: https://www.linkedin.com/company/velorastudio/",
    "",
  ]
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
