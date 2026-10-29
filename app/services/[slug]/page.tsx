import { SERVICES } from "@/lib/seo"
import { SeoPageView, seoMetadata } from "@/components/seo-page"

interface Props { params: Promise<{ slug: string }> }
export const dynamicParams = false
export function generateStaticParams() { return SERVICES.map((p) => ({ slug: p.slug })) }
export async function generateMetadata({ params }: Props) { return seoMetadata("services", (await params).slug) }
export default async function Page({ params }: Props) { return <SeoPageView kind="services" slug={(await params).slug} /> }
