import { readdir } from "fs/promises"
import { join } from "path"
import HomeClient from "@/components/home-client"

const IMAGE_EXTENSIONS = /\.(webp|png|jpg|jpeg|avif)$/i
const VIDEO_EXTENSIONS = /\.(webm|mp4)$/i

export default async function HomePage() {
  const workDir = join(process.cwd(), "public", "work")
  const files = await readdir(workDir)

  const workItems = files
    .filter((f) => IMAGE_EXTENSIONS.test(f) || VIDEO_EXTENSIONS.test(f))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] ?? "0", 10)
      const numB = parseInt(b.match(/\d+/)?.[0] ?? "0", 10)
      return numA - numB
    })
    .map((f) => ({
      src: `/work/${f}`,
      type: (VIDEO_EXTENSIONS.test(f) ? "video" : "image") as "video" | "image",
    }))

  return <HomeClient workItems={workItems} />
}
