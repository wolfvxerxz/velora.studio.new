import type { MetadataRoute } from "next"
import { caseStudies } from "@/lib/case-studies"
import { SERVICES, INDUSTRIES, COMPARE, STUDIO } from "@/lib/seo"
import { blogPosts } from "@/data/blog-posts"

export const dynamic = "force-static"

// Every page, generated from the same data that builds it, so new cases and posts are found automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const u = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({ url: `${STUDIO.url}${path}`, lastModified: now, changeFrequency, priority })
  return [
    u("", 1, "weekly"),
    u("/services", 0.9), u("/pricing", 0.9), u("/glossary", 0.6), u("/blog", 0.7, "weekly"), u("/15-min", 0.5),
    ...SERVICES.map((p) => u(`/services/${p.slug}`, 0.8)),
    ...INDUSTRIES.map((p) => u(`/industries/${p.slug}`, 0.8)),
    ...COMPARE.map((p) => u(`/compare/${p.slug}`, 0.7)),
    ...caseStudies.filter((c) => c.cover.startsWith("/case/")).map((c) => u(`/work/${c.slug}`, 0.8)),
    ...blogPosts.map((b) => u(`/blog/${b.slug}`, 0.6)),
  ]
}
