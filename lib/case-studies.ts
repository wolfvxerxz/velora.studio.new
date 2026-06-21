export interface CaseStudyWorkItem {
  src: string
  type: "image" | "video"
  alt?: string
}

export interface CaseStudyTestimonial {
  quote: string
  name: string
  role: string
  avatar?: string
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
  testimonial?: CaseStudyTestimonial
  location?: string
  services?: string[]
  areas?: string[]
  /** Optional month-precise span for the Timeline view, format "YYYY-MM". */
  start?: string
  end?: string
}

export const DEFAULT_LOCATION = "San Francisco, US (Remote)"

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
    testimonial: {
      quote: "From wireframes to launch, the process was transparent and iterative. They asked the right questions and pushed back when it mattered. Our conversion rate went up 40% after the redesign.",
      name: "Varun",
      role: "Founder, Extsy",
    },
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
    testimonial: {
      quote: "velora.studio understood our vision immediately and worked efficiently. The final product has significantly improved our brand presence. Working with them has been one of our best decisions.",
      name: "Everett Lynn",
      role: "Founder & CEO, Amenify",
      avatar: "/images/clients/everett.jpeg",
    },
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
    testimonial: {
      quote: "As we scaled Bobo's Oat Bars, we needed a website that could reflect our homemade quality while appealing to a national audience. velora.studio delivered exactly that — a warm, inviting digital storefront.",
      name: "Beryl Stafford",
      role: "Founder & President, Bobo's Oat Bars",
      avatar: "/images/clients/beryl.jpeg",
    },
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
    testimonial: {
      quote: "Our rebrand could have been a mess. Instead, Velora gave us a system we actually use — consistent, scalable, and on-brand everywhere. The team is sharp and easy to work with.",
      name: "Branko",
      role: "Founder, Nordeus",
      avatar: "/images/clients/branko.jpeg",
    },
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
    testimonial: {
      quote: "Working with Vuk was effortless. From our first chat he understood my brand, refining my ideas with his own creative polish. Every update matched my vision, only better. Truly a 10/10 experience.",
      name: "Victor Uhl",
      role: "Founder, Ecom Wizards",
      avatar: "/images/clients/victor.jpeg",
    },
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
    services: ["Brand", "Product Design"],
    areas: ["AI", "Developer Tools", "Productivity"],
    title: "Aether",
    date: "2025",
    start: "2025-02",
    end: "2025-06",
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
    services: ["Brand", "Product Design"],
    areas: ["AI", "Infrastructure", "Developer Tools"],
    title: "BentoLabs",
    date: "2025",
    start: "2025-05",
    end: "2025-10",
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
    testimonial: {
      quote: "Velora nailed our brand from the first pass. The system they built is modular, fast to work with, and made our product feel premium overnight. Couldn't recommend them more.",
      name: "Abhinav",
      role: "Founder, BentoLabs",
      avatar: "/images/clients/abhinav.jpg",
    },
  },
  {
    slug: "subpay",
    services: ["Product Design"],
    areas: ["Fintech", "Payments", "B2B"],
    title: "SubPay",
    date: "2025",
    start: "2025-03",
    end: "2025-08",
    cover: "/case/SubPay/Hero.webp",
    logo: "/case/SubPay/logo.svg",
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
    services: ["Brand", "Product Design", "Web"],
    areas: ["AI", "Developer Tools", "DevOps"],
    title: "Armature",
    date: "2025 – 2026",
    start: "2025-09",
    end: "2026-03",
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
    testimonial: {
      quote: "Velora delivered a polished identity and product experience that reflects the quality of our work. Sharp execution, smooth communication, and they shipped right on time.",
      name: "Theodore",
      role: "Co-founder, Armature",
      avatar: "/images/clients/theodore.jpg",
    },
  },
  {
    slug: "cactus",
    services: ["Brand Identity", "Web"],
    areas: ["AI", "Mobile", "Consumer"],
    title: "Cactus",
    date: "2025",
    start: "2025-07",
    end: "2025-11",
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
    testimonial: {
      quote: "Distinctive, sharp, and exactly on-brand. Velora gave Cactus a visual identity that stands out and scales without losing its edge. A genuinely great partner to build with.",
      name: "Roman",
      role: "Founder, Cactus",
      avatar: "/images/clients/roman.jpg",
    },
  },
  {
    slug: "insforge",
    services: ["Product Design", "Brand"],
    areas: ["AI", "Infrastructure", "Backend"],
    title: "InsForge",
    date: "2024 – 2026",
    start: "2024-08",
    end: "2026-01",
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

/**
 * Parse a human date string like "2025" or "2024 – 2026" into a start/end year
 * span. Falls back to the current year if no 4-digit year is found.
 */
export function parseYearSpan(date: string): { start: number; end: number } {
  const years = (date.match(/\d{4}/g) ?? []).map(Number)
  if (years.length === 0) {
    const now = new Date().getFullYear()
    return { start: now, end: now }
  }
  return { start: years[0], end: years[years.length - 1] }
}

/**
 * Resolve a month-precise span (0-based month index) for the Timeline view.
 * Uses explicit start/end ("YYYY-MM") when present, otherwise falls back to the
 * year span (January of the first year → December of the last).
 */
export function parseMonthSpan(study: CaseStudy): {
  startY: number
  startM: number
  endY: number
  endM: number
} {
  const ym = (s: string) => {
    const [y, m] = s.split("-").map(Number)
    return { y, m: (m ?? 1) - 1 }
  }
  if (study.start && study.end) {
    const a = ym(study.start)
    const b = ym(study.end)
    return { startY: a.y, startM: a.m, endY: b.y, endM: b.m }
  }
  const span = parseYearSpan(study.date)
  return { startY: span.start, startM: 0, endY: span.end, endM: 11 }
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug)
}
