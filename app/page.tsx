import { readdir } from "fs/promises"
import { join } from "path"
import HomeClient from "@/components/home-client"

// Re-read the work folder on every request so adding a file is instant
export const dynamic = "force-dynamic"

const IMAGE_EXTENSIONS = /\.(webp|png|jpg|jpeg|avif)$/i

export default async function HomePage() {
  const workDir = join(process.cwd(), "public", "work")
  const files = await readdir(workDir)

  const workImages = files
    .filter((f) => IMAGE_EXTENSIONS.test(f))
    .sort()
    .map((f) => `/work/${f}`)

  return <HomeClient workImages={workImages} />
}
