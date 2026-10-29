import HomeV2 from "@/components/home-v2"
import { caseStudies } from "@/lib/case-studies"

export default function HomePage() {
  return <HomeV2 caseStudies={caseStudies} />
}
