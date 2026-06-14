export interface CaseStudyWorkItem {
  src: string
  type: "image" | "video"
  alt?: string
}

export interface CaseStudy {
  slug: string
  title: string
  date: string
  cover: string
  logo: string
  description: string
  work: CaseStudyWorkItem[]
  coverPosition?: string
  logoNoInvert?: boolean
}

const img = (file: string): CaseStudyWorkItem => ({
  src: `/work/${file}`,
  type: "image",
})

const caseImg = (client: string, file: string): CaseStudyWorkItem => ({
  src: `/case/${client}/${file}`,
  type: "image",
})

export const caseStudies: CaseStudy[] = [
  {
    slug: "extsy",
    title: "Extsy",
    date: "2025",
    cover: "/work/1.webp",
    logo: "/images/brands/extsy.webp",
    description:
      "Product design and web experience for a fast-moving startup — from wireframes to a polished, conversion-focused interface that helped lift conversion after launch.",
    work: [img("1.webp"), img("2.webp"), img("3.webp"), img("4.webp")],
  },
  {
    slug: "amenify",
    title: "Amenify",
    date: "2024",
    cover: "/work/5.webp",
    logo: "/images/brands/amenify.webp",
    description:
      "Brand presence and digital product design for Amenify — a warm, trustworthy experience that scaled with the company as they grew nationally.",
    work: [img("5.webp"), img("6.webp"), img("7.webp"), img("8.webp")],
  },
  {
    slug: "bobos",
    title: "Bobos",
    date: "2024",
    cover: "/work/11.webp",
    logo: "/images/brands/bobos.webp",
    description:
      "A digital storefront that reflects homemade quality while appealing to a national audience — design that feels warm, inviting, and unmistakably Bobo's.",
    work: [img("11.webp"), img("22.webp"), img("24.webp"), img("25.webp")],
  },
  {
    slug: "nordeus",
    title: "Nordeus",
    date: "2024",
    cover: "/work/27.webp",
    logo: "/images/brands/nordeus.webp",
    description:
      "Design system and web work for Nordeus — consistent, scalable, and on-brand across every touchpoint the team ships.",
    work: [img("27.webp"), img("29.webp"), img("32.webp"), img("42.webp")],
  },
  {
    slug: "ecom-wizards",
    title: "Ecom Wizards",
    date: "2025",
    cover: "/work/222.webp",
    logo: "/images/brands/ecom.webp",
    description:
      "End-to-end design for Ecom Wizards — from first sketches to a polished product that matched the founder's vision, only sharper.",
    work: [img("222.webp"), img("333.webp"), img("444.webp"), img("555.webp")],
  },
  {
    slug: "webserv",
    title: "Webserv",
    date: "2025",
    cover: "/work/-1.webp",
    logo: "/images/brands/webserv.webp",
    description:
      "Web design and product UI for Webserv — clean flows, sharp visual direction, and ship-ready screens across the full product.",
    work: [img("-1.webp"), img("-3.webp"), img("-4.webp"), img("1 2.webp")],
  },
  {
    slug: "aether",
    title: "Aether",
    date: "2025",
    cover: "/case/Aether/hero.webp",
    logo: "/case/Aether/logo.svg",
    description:
      "Brand and product design for Aether — a refined, ambient visual identity built to communicate clarity and depth across every touchpoint.",
    work: [
      caseImg("Aether", "1.webp"),
      caseImg("Aether", "2.webp"),
      caseImg("Aether", "3.webp"),
      caseImg("Aether", "4.webp"),
    ],
  },
  {
    slug: "bentolabs",
    title: "BentoLabs",
    date: "2025",
    cover: "/case/BentoLabs/Hero.webp",
    logo: "/case/BentoLabs/Logo.svg",
    description:
      "Brand and product design for BentoLabs — a modular, component-driven visual system built for teams that ship fast without sacrificing quality.",
    work: [
      caseImg("BentoLabs", "1.webp"),
      caseImg("BentoLabs", "2.webp"),
      caseImg("BentoLabs", "3.webp"),
      caseImg("BentoLabs", "4.webp"),
      caseImg("BentoLabs", "5.webp"),
    ],
  },
  {
    slug: "subpay",
    title: "SubPay",
    date: "2025",
    cover: "/case/SubPay/Hero.webp",
    logo: "/case/SubPay/logo.svg",
    logoNoInvert: true,
    description:
      "Product design for SubPay — a clean, conversion-focused subscription payments experience built for clarity at every step of the billing flow.",
    work: [
      caseImg("SubPay", "1.webp"),
      caseImg("SubPay", "2.webp"),
      caseImg("SubPay", "3.webp"),
      caseImg("SubPay", "4.webp"),
      caseImg("SubPay", "Dashboard1.webp"),
      caseImg("SubPay", "Dashboard2.webp"),
      caseImg("SubPay", "Dashboard3.webp"),
      caseImg("SubPay", "Dashboard4.webp"),
    ],
  },
  {
    slug: "armature",
    title: "Armature",
    date: "2025 – 2026",
    cover: "/case/Armature/hero.webp",
    coverPosition: "left",
    logo: "/case/Armature/armature-logo.svg",
    description:
      "Full brand and product design for Armature — a sharp visual identity paired with a polished digital presence built to reflect the quality of their work.",
    work: [
      caseImg("Armature", "1.webp"),
      caseImg("Armature", "2.webp"),
      caseImg("Armature", "3.webp"),
      caseImg("Armature", "4.webp"),
      caseImg("Armature", "5.webp"),
    ],
  },
  {
    slug: "cactus",
    title: "Cactus",
    date: "2025",
    cover: "/case/Cactus/hero.webp",
    logo: "/case/Cactus/cactus-logo.webp",
    description:
      "Brand identity and web design for Cactus — a distinctive, resilient visual system that stands out and scales without losing its edge.",
    work: [
      caseImg("Cactus", "1.webp"),
      caseImg("Cactus", "2.webp"),
      caseImg("Cactus", "3.webp"),
      caseImg("Cactus", "4.webp"),
    ],
  },
  {
    slug: "insforge",
    title: "InsForge",
    date: "2024 – 2026",
    cover: "/case/InsForge/hero.webp",
    logo: "/case/InsForge/insforge-logo.svg",
    description:
      "Product design and brand direction for InsForge — clarity and confidence built into every screen, from onboarding to core workflow.",
    work: [
      caseImg("InsForge", "1.webp"),
      caseImg("InsForge", "2.webp"),
      caseImg("InsForge", "3.webp"),
      caseImg("InsForge", "4.webp"),
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug)
}
