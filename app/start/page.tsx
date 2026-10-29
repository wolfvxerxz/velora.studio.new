import type { Metadata } from "next"
import { ApplePage } from "@/components/apple"
import { StartFlow } from "@/components/start-flow"
import { STUDIO } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Start a project — Velora Studio",
  description: "Five quick questions about what you're building, what you need, your stage, your date and your budget. We suggest a plan and you book a 15-minute call.",
  alternates: { canonical: `${STUDIO.url}/start` },
}

export default function Start() {
  return <ApplePage className="vs-page"><StartFlow /></ApplePage>
}
