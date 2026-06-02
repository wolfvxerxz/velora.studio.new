import HomeClient from "@/components/home-client"
import { caseStudies } from "@/lib/case-studies"

export default function HomePage() {
  return <HomeClient caseStudies={caseStudies} />
}
