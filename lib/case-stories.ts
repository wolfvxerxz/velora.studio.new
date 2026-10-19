import type { CaseStudy, CaseStudyWorkItem } from "./case-studies"

/** One chapter of a case page: a label, an optional heading and copy, then full-width shots. */
export interface CaseChapter {
  label: string
  title?: string
  body?: string[]
  /** Each row is one image/video, or two side by side. */
  rows?: CaseStudyWorkItem[][]
}

export interface CaseStory {
  headline: string
  intro: string[]
  vision?: string
  hero: CaseStudyWorkItem
  chapters: CaseChapter[]
  result?: string
}

const img = (client: string, file: string): CaseStudyWorkItem => ({ src: `/case/${client}/${file}`, type: "image" })
const vid = (client: string, file: string): CaseStudyWorkItem => ({ src: `/case/${client}/${file}`, type: "video" })

const A = (f: string) => img("Atlas", f)
const J = (f: string) => img("Junction", f)

const STORIES: Record<string, Omit<CaseStory, "hero"> & { hero?: CaseStudyWorkItem }> = {
  atlas: {
    headline: "A trading platform for crypto, stocks, gold and FX, brand to app",
    intro: [
      "Atlas is a trading platform that puts crypto, stocks, gold and FX in one account, on the web and on iOS.",
      "We designed the brand, the web terminal, the iOS app and the landing page as one system, then animated the moments that matter.",
    ],
    vision: "Trade what moves.",
    hero: vid("Atlas", "hero.mp4"),
    chapters: [
      {
        label: "Brief",
        title: "Six tabs, three apps and a spreadsheet",
        body: ["Active traders were juggling too many tools. The brief was four surfaces that feel like one product: brand, web terminal, iOS app and landing page."],
        rows: [[A("1.webp")], [A("2.webp")]],
      },
      {
        label: "Brand",
        title: "One A, one orange",
        body: [
          "Six rounds of exploration got us to a solid A with a doorway cut through it. We kept the letter and lost everything decorative.",
          "The palette is mostly dark and climbs to a single orange that only ever means act. Green and red only ever mean price.",
        ],
        rows: [[A("3.webp")], [A("4.webp")], [A("5.webp")], [A("6.webp")]],
      },
      {
        label: "Web terminal",
        title: "Everything on one screen",
        body: ["Chart, order book, positions and order form sit together. Markets, portfolio and news share the same panel language, and the order ticket shows size, fee and liquidation price before you confirm."],
        rows: [[A("7.webp")], [A("8.webp")], [A("9.webp")]],
      },
      {
        label: "iOS app",
        title: "The same account in your pocket",
        body: ["The app carries the terminal's logic to a phone: the same palette, the same order ticket, sized for one thumb."],
        rows: [[A("10.webp")]],
      },
      {
        label: "Website",
        title: "A landing page that shows the product working",
        body: ["Instead of describing the terminal, the page shows it trading, top to bottom in one continuous take."],
        rows: [[A("11.webp")], [vid("Atlas", "landing-scroll.mp4")]],
      },
      {
        label: "Motion",
        title: "A deposit in five beats",
        body: ["Choose, pull, flow, arrive, received. A deposit is pulled into a pipe, runs through Atlas and lands in the account."],
        rows: [[vid("Atlas", "funding.mp4")], [A("12.webp")], [vid("Atlas", "cta.mp4")]],
      },
      {
        label: "Social",
        title: "Built for the feed",
        body: ["Launch posts are made from the same textures as the product, so the feed and the app feel like one thing."],
        rows: [[A("13.webp")], [A("14.webp")]],
      },
    ],
    result: "Four surfaces, one language.",
  },
  junction: {
    headline: "A playful investing app for first-time investors, brand to landing page",
    intro: [
      "Junction is an investing app for people buying their first stock. Ready-made mixes are drawn as transit lines and every stock is a stop, so a whole portfolio reads like one map.",
      "We designed the brand, the iOS app and the landing page, plus the motion system that runs on the same rails.",
    ],
    vision: "Investing, mapped out.",
    chapters: [
      {
        label: "Idea",
        title: "Every stock is a stop",
        body: ["Charts scare new investors. A metro map doesn't. Pick a line, see its stops, and know where your money goes."],
        rows: [[J("1.webp")]],
      },
      {
        label: "Brand",
        title: "Rails, not charts",
        body: [
          "The mark is a J drawn as three parallel rails. Lines turn at sharp 45° corners, and every colour has a job.",
          "Text sits on solid colour in black, set in Satoshi at medium and semibold only.",
        ],
        rows: [[J("2.webp")], [J("3.webp")], [J("4.webp")]],
      },
      {
        label: "Motion",
        title: "Patterns that keep moving",
        body: ["Four looping patterns, interchange, stack, timetable and loop, built from the same rails as the mark."],
        rows: [[vid("Junction", "patterns.mp4")]],
      },
      {
        label: "System",
        title: "Stickers and solid icons",
        body: ["Stickers carry the playful side; solid icons keep the interface calm and readable."],
        rows: [[J("5.webp")], [J("6.webp")]],
      },
      {
        label: "iOS app",
        title: "Calm enough for a first investment",
        body: ["Plain-words explainers on every stop, arrows on every price move so nothing depends on colour alone, and text size that changes the whole app."],
        rows: [[J("7.webp")], [vid("Junction", "onboarding.mp4")]],
      },
      {
        label: "Website",
        title: "A landing page that teaches as you scroll",
        body: ["Lines, three stops to a first investment, a live money map and a short FAQ, in a light, bright layout."],
        rows: [[J("8.webp")], [J("9.webp")]],
      },
    ],
    result: "A whole portfolio you can read like one map.",
  },
}

/** The story for a case page. Studies without a written story get one built from their data. */
export function getCaseStory(study: CaseStudy): CaseStory {
  const cover: CaseStudyWorkItem = { src: study.cover, type: "image", alt: study.title }
  const s = STORIES[study.slug]
  if (s) return { ...s, hero: s.hero ?? cover }
  const shots = study.work.filter((w) => w.src !== study.cover)
  return {
    headline: study.tagline ?? study.title,
    intro: [study.description],
    hero: cover,
    chapters: [{ label: "Work", rows: shots.map((w) => [w]) }],
  }
}
