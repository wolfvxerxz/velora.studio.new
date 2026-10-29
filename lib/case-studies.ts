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
  /** Logo artwork is black/dark — render inverted to white on the dark site. */
  logoDark?: boolean
  description: string
  /** One-line story shown under the card on the home grid. */
  tagline?: string
  work: CaseStudyWorkItem[]
  coverPosition?: string
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

const caseVid = (client: string, file: string): CaseStudyWorkItem => ({
  src: `/case/${client}/${file}`,
  type: "video",
})

export const caseStudies: CaseStudy[] = [
  {
    slug: "moss",
    services: ["Brand", "Product Design", "Web", "Motion"],
    areas: ["Developer Tools", "Database", "B2B"],
    title: "Moss",
    tagline: "Postgres that branches like your code, on an old blue screen",
    date: "2026",
    start: "2026-10",
    end: "2026-10",
    cover: "/case/Moss/hero.webp",
    logo: "/icons/client-logos/Moss.svg",
    description:
      "Brand, dashboard, landing page and site for Moss, a Postgres platform that gives every pull request its own copy of production. The identity is a screen up close: VCR blue, an LCD pixel grid, a pixel sprout for a mark, and a page you enter by changing the channel.",
    work: [
      caseVid("Moss", "landing-scroll.mp4"),
      caseImg("Moss", "1.webp"),
      caseImg("Moss", "2.webp"),
      caseImg("Moss", "3.webp"),
      caseImg("Moss", "4.webp"),
      caseImg("Moss", "5.webp"),
      caseImg("Moss", "6.webp"),
      caseImg("Moss", "7.webp"),
      caseImg("Moss", "9.webp"),
      caseImg("Moss", "10.webp"),
      caseImg("Moss", "11.webp"),
    ],
  },
  {
    slug: "youspot",
    services: ["Brand", "Product Design", "Web", "Motion"],
    areas: ["AI", "Productivity", "Consumer"],
    title: "YouSpot",
    tagline: "A second brain that tells you who needs you today",
    date: "2026",
    start: "2026-10",
    end: "2026-10",
    cover: "/case/YouSpot/cover.webp",
    logo: "/icons/client-logos/YouSpot.svg",
    description:
      "Brand, app and landing page for YouSpot, an AI assistant that reads your mail, calendar and chats and tells you each morning who is waiting on you. Four shapes make every graphic, and one orange spot always marks the person who needs you next.",
    work: [
      caseVid("YouSpot", "landing-scroll.mp4"),
      caseImg("YouSpot", "1.webp"),
      caseImg("YouSpot", "2.webp"),
      caseImg("YouSpot", "3.webp"),
      caseImg("YouSpot", "4.webp"),
      caseImg("YouSpot", "5.webp"),
      caseImg("YouSpot", "6.webp"),
      caseImg("YouSpot", "7.webp"),
      caseImg("YouSpot", "8.webp"),
      caseImg("YouSpot", "9.webp"),
      caseImg("YouSpot", "10.webp"),
      caseImg("YouSpot", "11.webp"),
    ],
  },
  {
    slug: "nightshift",
    services: ["Brand", "Product Design", "Web", "Motion"],
    areas: ["AI", "Agents", "B2B"],
    title: "Nightshift",
    tagline: "AI agents that work overnight, in a night-garden brand",
    date: "2026",
    start: "2026-10",
    end: "2026-10",
    cover: "/case/Nightshift/landing-hero.webp",
    logo: "/icons/client-logos/Nightshift.svg",
    description:
      "Brand, web app and landing page for Nightshift, a platform that runs a team's AI agents overnight. Work is handed off at dusk and reviewed at dawn, so the identity lives at night: blurred night-garden photography, grain and contour lines, and agent tokens that bloom as they learn.",
    work: [
      caseVid("Nightshift", "logo.mp4"),
      caseImg("Nightshift", "1.webp"),
      caseImg("Nightshift", "2.webp"),
    ],
  },
  {
    slug: "junction",
    services: ["Brand", "Product Design", "Web", "Motion"],
    areas: ["Fintech", "Investing", "Consumer"],
    title: "Junction",
    tagline: "Investing as a metro map: pick a line, every stock is a stop",
    date: "2026",
    start: "2026-10",
    end: "2026-10",
    cover: "/case/Junction/landing-hero.webp",
    logo: "/icons/client-logos/Junction.svg",
    description:
      "Brand, iOS app and landing page for Junction, a playful investing app for first-time investors. Ready-made mixes are drawn as transit lines and every stock is a stop, so a whole portfolio reads like one map. Built light, bright and accessible, with motion that runs on the same rails.",
    work: [
      caseImg("Junction", "1.webp"),
      caseImg("Junction", "2.webp"),
      caseImg("Junction", "3.webp"),
      caseImg("Junction", "4.webp"),
      caseVid("Junction", "patterns.mp4"),
      caseImg("Junction", "5.webp"),
      caseImg("Junction", "6.webp"),
      caseImg("Junction", "7.webp"),
      caseVid("Junction", "onboarding.mp4"),
      caseImg("Junction", "8.webp"),
      caseImg("Junction", "9.webp"),
    ],
  },
  {
    slug: "atlas",
    services: ["Brand", "Product Design", "Web", "Motion"],
    areas: ["Fintech", "Trading", "Crypto"],
    title: "Atlas",
    tagline: "One terminal for crypto, stocks, gold and FX",
    date: "2026",
    start: "2026-09",
    end: "2026-10",
    cover: "/case/Atlas/landing-hero.webp",
    logo: "/icons/client-logos/Atlas.svg",
    description:
      "Brand, web terminal, iOS app and landing page for Atlas, a trading platform covering crypto, stocks, gold and FX. Four surfaces in one language: a solid A, a mostly dark palette climbing to one orange that only ever means act, and an order ticket you read in one glance.",
    work: [
      caseVid("Atlas", "hero.mp4"),
      caseImg("Atlas", "1.webp"),
      caseImg("Atlas", "2.webp"),
      caseImg("Atlas", "3.webp"),
      caseImg("Atlas", "4.webp"),
      caseImg("Atlas", "5.webp"),
      caseImg("Atlas", "6.webp"),
      caseImg("Atlas", "7.webp"),
      caseImg("Atlas", "8.webp"),
      caseImg("Atlas", "9.webp"),
      caseImg("Atlas", "10.webp"),
      caseImg("Atlas", "11.webp"),
      caseVid("Atlas", "funding.mp4"),
      caseImg("Atlas", "12.webp"),
      caseVid("Atlas", "landing-scroll.mp4"),
      caseImg("Atlas", "13.webp"),
      caseVid("Atlas", "cta.mp4"),
      caseImg("Atlas", "14.webp"),
    ],
  },
  {
    slug: "wayfind",
    services: ["Brand", "Product Design", "Web"],
    areas: ["AI", "Maps", "Consumer"],
    title: "Wayfind",
    logoDark: true,
    tagline: "Turning a plain-language ask into a map-first AI guide",
    date: "2025",
    start: "2025-06",
    end: "2025-11",
    cover: "/case/Wayfind/1.webp",
    logo: "/case/Wayfind/logo.svg",
    description:
      "Brand and product design for Wayfind — an AI guide that turns a plain-language request into ranked, real-world place recommendations, wrapped in a clean, map-first experience.",
    work: [
      caseImg("Wayfind", "1.webp"),
      caseImg("Wayfind", "2.webp"),
      caseImg("Wayfind", "3.webp"),
      caseImg("Wayfind", "4.webp"),
      caseImg("Wayfind", "5.webp"),
    ],
    testimonial: {
      quote: "Hey Vuk, working with you was such a smooth ride. You took a rough idea for Wayfind and turned it into something people actually get the second they land on it — fast, sharp, and always a step ahead.",
      name: "Marco",
      role: "Founder, Wayfind",
    },
  },
  {
    slug: "extsy",
    title: "Extsy",
    logoDark: true,
    tagline: "A conversion-focused product, from wireframes to launch",
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
    logoDark: true,
    tagline: "A warm, trustworthy product that scaled nationally",
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
    logoDark: true,
    tagline: "A homemade-feeling storefront for a national audience",
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
    logoDark: true,
    tagline: "A design system that keeps every touchpoint on-brand",
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
    logoDark: true,
    tagline: "From first sketch to a sharper version of the founder's vision",
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
    tagline: "Clean flows and ship-ready screens across the product",
    date: "2025",
    cover: "/work/-1.webp",
    logo: "/images/brands/webserv.webp",
    description:
      "Web design and product UI for Webserv — clean flows, sharp visual direction, and ship-ready screens across the full product.",
    work: [img("-1.webp"), img("-3.webp"), img("-4.webp"), img("1 2.webp")],
    testimonial: {
      quote: "Vuk, honestly one of the best calls we made. You gave Webserv a clean, confident look and the flows finally make sense — communication was effortless the whole way through.",
      name: "Daniel",
      role: "Founder, Webserv",
    },
  },
  {
    slug: "aether",
    services: ["Brand", "Product Design"],
    areas: ["AI", "Developer Tools", "Productivity"],
    title: "Aether",
    tagline: "A calm, ambient identity for an AI productivity tool",
    date: "2025",
    start: "2025-02",
    end: "2025-06",
    cover: "/case/Aether/hero.webp",
    logo: "/icons/client-logos/AETHER.svg",
    description:
      "Brand and product design for Aether — a refined, ambient visual identity built to communicate clarity and depth across every touchpoint.",
    work: [
      caseImg("Aether", "1.webp"),
      caseImg("Aether", "2.webp"),
      caseImg("Aether", "3.webp"),
      caseImg("Aether", "4.webp"),
    ],
    testimonial: {
      quote: "Working with velora.studio felt like having a co-founder on design. You understood Aether's vibe instantly and every screen came back sharper than I pictured it — genuinely a pleasure.",
      name: "Sofia",
      role: "Founder, Aether",
    },
  },
  {
    slug: "bentolabs",
    services: ["Brand", "Product Design"],
    areas: ["AI", "Infrastructure", "Developer Tools"],
    title: "BentoLabs",
    tagline: "A modular visual system for infra teams that ship fast",
    date: "2025",
    start: "2025-05",
    end: "2025-10",
    cover: "/case/BentoLabs/Hero.webp",
    logo: "/icons/client-logos/BentoLabs.svg",
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
    tagline: "Subscription billing made clear at every step",
    date: "2025",
    start: "2025-03",
    end: "2025-08",
    cover: "/case/SubPay/Hero.webp",
    logo: "/icons/client-logos/SubPay.svg",
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
    testimonial: {
      quote: "Vuk made the whole SubPay redesign painless. Our complex billing flows suddenly felt simple, and you shipped exactly on time — couldn't recommend you more.",
      name: "Leon",
      role: "Founder, SubPay",
    },
  },
  {
    slug: "armature",
    services: ["Brand", "Product Design", "Web"],
    areas: ["AI", "Developer Tools", "DevOps"],
    title: "Armature",
    tagline: "Sharp brand and product for AI-native DevOps",
    date: "2025 – 2026",
    start: "2025-09",
    end: "2026-03",
    cover: "/case/Armature/hero.webp",
    coverPosition: "left",
    logo: "/icons/client-logos/Armature.svg",
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
    tagline: "A resilient identity that keeps its edge as it scales",
    date: "2025",
    start: "2025-07",
    end: "2025-11",
    cover: "/case/Cactus/hero.webp",
    logo: "/icons/client-logos/CACTUS.svg",
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
    tagline: "Making backend infrastructure feel effortless for AI builders",
    date: "2024 – 2026",
    start: "2024-08",
    end: "2026-01",
    cover: "/case/InsForge/hero.webp",
    logo: "/icons/client-logos/InsForge.svg",
    description:
      "Product design and brand direction for InsForge — clarity and confidence built into every screen, from onboarding to core workflow.",
    work: [
      caseImg("InsForge", "1.webp"),
      caseImg("InsForge", "2.webp"),
      caseImg("InsForge", "3.webp"),
      caseImg("InsForge", "4.webp"),
    ],
    testimonial: {
      quote: "Hey Vuk, you nailed InsForge from the very first pass. Clean, confident, and built to scale — you just get product. Already looking forward to the next one.",
      name: "Nikhil",
      role: "Founder, InsForge",
    },
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

/** Class that turns a dark logo white; empty for logos that are already light or colored. */
export function logoClass(study: CaseStudy): string {
  return study.logoDark ? "logo-invert" : ""
}
