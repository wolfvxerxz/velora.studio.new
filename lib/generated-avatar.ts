import { createAvatar } from "@dicebear/core"
import { adventurer } from "@dicebear/collection"

const cache = new Map<string, string>()

/**
 * Deterministic memoji-style avatar (DiceBear "adventurer") as an inline SVG
 * data URI, seeded by name. Used as the pfp for testimonials that have no real
 * client photo. Generated locally — no runtime network calls.
 */
export function generatedAvatar(seed: string): string {
  const cached = cache.get(seed)
  if (cached) return cached
  const uri = createAvatar(adventurer, {
    seed,
    radius: 50,
    backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"],
  }).toDataUri()
  cache.set(seed, uri)
  return uri
}
