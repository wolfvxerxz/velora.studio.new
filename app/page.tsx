import { readdir } from "fs/promises"
import { join } from "path"
import HomeClient from "@/components/home-client"

export const dynamic = "force-dynamic"

const IMAGE_EXTENSIONS = /\.(webp|png|jpg|jpeg|avif)$/i
const VIDEO_EXTENSIONS = /\.(webm|mp4)$/i

export default async function HomePage() {
  const workDir = join(process.cwd(), "public", "work")
  const files = await readdir(workDir)

  const workItems = files
    .filter((f) => IMAGE_EXTENSIONS.test(f) || VIDEO_EXTENSIONS.test(f))
    .sort()
    .map((f) => ({
      src: `/work/${f}`,
      type: (VIDEO_EXTENSIONS.test(f) ? "video" : "image") as "video" | "image",
    }))

  return <HomeClient workItems={workItems} />
}
