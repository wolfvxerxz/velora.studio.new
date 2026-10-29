// Search pages: what Velora does, who it does it for, honest comparisons and plain definitions.
// Each page answers one real search, links to the work that proves it, and ends with a way to book.

export interface SeoSection { title: string; body?: string[]; list?: string[] }
export interface SeoPage {
  slug: string
  kind: "services" | "industries" | "compare"
  /** Short name used in lists and breadcrumbs. */
  name: string
  /** The <title> and the H1 can differ: the title is what people search, the H1 is what we say. */
  title: string
  h1: string
  description: string
  /** Two or three plain sentences an AI assistant can quote as the answer. */
  answer: string
  sections: SeoSection[]
  cases: string[]
  faq: [string, string][]
}

export const STUDIO = {
  name: "Velora Studio",
  url: "https://velora.studio",
  book: "https://cal.com/vuk-m/15min",
  email: "hello@velora.studio",
  oneLine: "Velora Studio is a design and development studio for AI, fintech, Web3 and developer-tool startups. We design brands, products and websites, and build them in Next.js.",
  plans: [
    { name: "Design Partner", price: "€3,999 per month", detail: "Unlimited design requests, 2–3 updates a week, Next.js development, Slack or WhatsApp, pause or cancel anytime." },
    { name: "Custom Quote", price: "Scoped per project", detail: "Brand identity, product and website design, Framer, Webflow or Next.js builds, unlimited revisions." },
  ],
}

const book = "Book a 15-minute call and we set the plan around your launch date."

export const SERVICES: SeoPage[] = [
  {
    slug: "brand-identity",
    kind: "services",
    name: "Brand identity",
    title: "Brand Identity Design for Startups",
    h1: "Brand identity for startups that need to look funded",
    description: "Logo, colour, type, patterns and a full brand book for AI, fintech and developer-tool startups. Built to work in the product, not just on a slide.",
    answer: "Velora designs brand identities for early-stage startups: a mark, colour and type system, textures and patterns, and a brand book, all tested inside a real product screen and landing page before hand-off.",
    sections: [
      { title: "What you get", list: ["Logo and wordmark, with lockups for every background", "Colour, type and spacing tokens ready for code", "Patterns, textures and motion rules built from the mark", "A brand book of 12–16 pages, exported for posting", "Launch visuals for X and LinkedIn in the right sizes"] },
      { title: "How it works", body: ["We start with the idea behind the company and draw it, not with a mood board. Every direction is shown on a real app screen and a landing hero so you judge it where it will live.", "Most identities take two to three weeks, including the brand book and launch posts."] },
      { title: "Why it matters", body: ["Investors and early users meet the brand before they meet you. A brand that holds together across the product, site and feed reads as a company that will still be here next year."] },
    ],
    cases: ["moss", "nightshift", "junction", "armature"],
    faq: [
      ["How long does a startup brand identity take?", "Usually two to three weeks from first call to brand book, including logo, colour, type, patterns and launch visuals."],
      ["Do you design the logo only?", "We can, but most founders get more from a full system: mark, colour, type and patterns that also work inside the product and site."],
      ["Will the brand work in our app?", "Yes. Every direction is shown on real product screens and a landing page before we finish, and the tokens hand over ready for code."],
    ],
  },
  {
    slug: "product-design",
    kind: "services",
    name: "Product design",
    title: "Product Design (UI/UX) for SaaS and AI Startups",
    h1: "Product design that people get on the first try",
    description: "UI and UX design for SaaS, AI and fintech products: flows, dashboards, onboarding and design systems, handed over as real components.",
    answer: "Velora designs web and mobile products for startups: onboarding, core flows, dashboards and settings, with a component library that maps one-to-one to code.",
    sections: [
      { title: "What you get", list: ["User flows for the jobs that matter most", "High-fidelity screens in light and dark", "A component library and tokens that match your codebase", "Interactive prototypes for investor and user demos", "Empty, loading and error states, not just the happy path"] },
      { title: "How it works", body: ["We map the one job your product must do well, design that flow end to end, then widen out. You see working screens every week, not a big reveal at the end."] },
    ],
    cases: ["moss", "atlas", "insforge", "subpay"],
    faq: [
      ["Do you design dashboards?", "Yes. Most of our product work is dashboards and data-heavy tools: trading terminals, database consoles, billing and admin panels."],
      ["Can you work with our existing design system?", "Yes. We extend what you have, or replace it with one that maps to your components."],
      ["Do you also build it?", "We can build in Next.js, or hand over to your engineers with components and tokens ready."],
    ],
  },
  {
    slug: "website-design",
    kind: "services",
    name: "Website and landing pages",
    title: "Landing Page and Website Design for Startups",
    h1: "Landing pages that explain the product in one scroll",
    description: "Startup websites and landing pages that show the real product, load fast on phones and turn visitors into booked calls.",
    answer: "Velora designs and builds startup landing pages that show the real product instead of illustrations, pass Core Web Vitals on mobile, and are structured so Google and AI assistants can read them.",
    sections: [
      { title: "What you get", list: ["Hero, product, proof, pricing and FAQ sections", "The real product shown live, not as stock art", "Light and dark versions", "SEO structure, schema and fast mobile load", "Built in Next.js, Framer or Webflow"] },
      { title: "What makes it convert", body: ["One clear promise above the fold, the product doing the thing within one scroll, proof next to every claim and one action repeated: book or start."] },
    ],
    cases: ["moss", "youspot", "junction", "nightshift"],
    faq: [
      ["How long does a landing page take?", "One to two weeks for design, and about a week more to build it in Next.js or Framer."],
      ["Framer, Webflow or Next.js?", "Framer for speed and easy edits, Webflow for content-heavy marketing sites, Next.js when the site shares code with your product. See our comparison page."],
      ["Do you write the copy?", "Yes, in plain words, and we keep every claim tied to something the product actually does."],
    ],
  },
  {
    slug: "web-development",
    kind: "services",
    name: "Next.js development",
    title: "Next.js Website and Web App Development",
    h1: "We build what we design, in Next.js",
    description: "Next.js and React development for marketing sites and web apps: fast, accessible, SEO-ready and easy for your team to keep shipping.",
    answer: "Velora builds marketing sites and web apps in Next.js and React with TypeScript, so the design ships exactly as drawn and loads fast on phones.",
    sections: [
      { title: "What you get", list: ["Next.js with TypeScript and a clean component structure", "Core Web Vitals passing on mobile", "Sitemaps, structured data and llms.txt for search and AI assistants", "Analytics and conversion events wired up", "A codebase your engineers can keep extending"] },
    ],
    cases: ["moss", "youspot", "atlas", "junction"],
    faq: [
      ["Do you only build in Next.js?", "Mostly. We also build in Framer and Webflow when the team needs to edit pages without code."],
      ["Can you build a working product demo?", "Yes. Our case studies run the real dashboards inside the landing page, not screenshots."],
    ],
  },
  {
    slug: "design-subscription",
    kind: "services",
    name: "Design subscription",
    title: "Design Subscription for Startups — Unlimited Design, €3,999/mo",
    h1: "A design partner that ships every week",
    description: "Unlimited design requests for €3,999 a month: product, web and brand, 2–3 updates a week, Next.js development, pause or cancel anytime.",
    answer: "Velora's Design Partner plan is a monthly design subscription at €3,999 per month with unlimited requests, 2–3 updates a week, Next.js development, and the option to pause or cancel anytime.",
    sections: [
      { title: "What's included", list: ["Unlimited requests, one active at a time", "2–3 updates a week", "Product, website and brand design", "Next.js development", "A shared Slack or WhatsApp channel", "Pause or cancel anytime"] },
      { title: "Who it's for", body: ["Teams that ship every week and need senior design without hiring. If you have one big project with a fixed scope, a Custom Quote usually fits better."] },
    ],
    cases: ["nightshift", "atlas", "bentolabs", "insforge"],
    faq: [
      ["How much does the design subscription cost?", "€3,999 per month, with unlimited requests and 2–3 updates a week. You can pause or cancel anytime."],
      ["How fast are updates?", "Two to three updates a week on your active request, in a shared channel."],
      ["Is development included?", "Yes, Next.js development is part of the plan."],
    ],
  },
  {
    slug: "mvp-design",
    kind: "services",
    name: "MVP and startup design",
    title: "MVP Design for Startups — Brand, App and Landing Page",
    h1: "From idea to launch: brand, app and landing page together",
    description: "Everything a new startup needs to launch: brand identity, the first product, a landing page and launch visuals, designed as one system.",
    answer: "For new startups Velora designs the full launch package as one system: brand identity, the first version of the app, the landing page, and the case study and launch posts to announce it.",
    sections: [
      { title: "The launch package", list: ["Brand identity and brand book", "First product flows, web or iOS", "Landing page with the live product", "Launch posts and a short product film", "Pricing and changelog pages"] },
      { title: "Timeline", body: ["Four to six weeks for most launches. We work back from your date: raise, demo day or public launch."] },
    ],
    cases: ["moss", "youspot", "junction", "nightshift"],
    faq: [
      ["What does an MVP design include?", "Brand, the core product flows, a landing page and launch visuals, designed together so they look like one company."],
      ["Can you hit a demo day or fundraising date?", "Yes. Tell us the date on the call and we plan back from it."],
    ],
  },
  {
    slug: "mobile-app-design",
    kind: "services",
    name: "Mobile app design",
    title: "iOS and Mobile App Design for Startups",
    h1: "Mobile apps that feel calm on the first open",
    description: "iOS and mobile app design for fintech, AI and consumer startups: onboarding, core flows, accessibility and a component system ready for SwiftUI or React Native.",
    answer: "Velora designs iOS and mobile apps for startups, from onboarding to core flows, with accessibility built in: dynamic text size, reduced motion and signals that never rely on colour alone.",
    sections: [
      { title: "What you get", list: ["Onboarding told as a story, not a form", "Core flows with real data and edge cases", "Accessibility settings that change the whole app", "Components ready for SwiftUI or React Native", "App Store visuals"] },
    ],
    cases: ["junction", "atlas", "cactus", "wayfind"],
    faq: [
      ["Do you design for iOS and Android?", "Yes. We usually start on iOS and adapt to Android once the flows are proven."],
      ["Is accessibility included?", "Always: text size, contrast, reduced motion and never using colour as the only signal."],
    ],
  },
]

export const INDUSTRIES: SeoPage[] = [
  {
    slug: "ai-startups",
    kind: "industries",
    name: "AI startups",
    title: "Design Agency for AI Startups — Brand, Product and Web",
    h1: "Design for AI products people can trust",
    description: "Brand, product and website design for AI and agent startups: interfaces that show what the AI did, why, and what still needs a person.",
    answer: "Velora designs for AI and agent startups, focusing on trust: showing what the AI did, what it is unsure about, and what still needs a human before anything risky happens.",
    sections: [
      { title: "What AI products get wrong", body: ["A chat box is not a product. People need to see the work, the reasoning and the handoff points. We design briefs, review queues and approval steps that make AI output easy to check."] },
      { title: "What we design", list: ["Agent dashboards and morning briefs", "Approval and review flows", "Brand identities that don't look like every other AI logo", "Landing pages that show the product working"] },
    ],
    cases: ["nightshift", "youspot", "insforge", "bentolabs", "armature"],
    faq: [
      ["Do you only design chat interfaces?", "No. Most AI products need dashboards, queues and approvals more than chat."],
      ["Can you help an AI startup stand out visually?", "Yes. Nightshift and YouSpot both avoided the usual gradient-and-sparkle look with brands built from one clear idea."],
    ],
  },
  {
    slug: "fintech",
    kind: "industries",
    name: "Fintech",
    title: "Fintech App and Website Design Agency",
    h1: "Fintech design that makes money feel simple",
    description: "Design for trading, investing, payments and billing products: order tickets you read in a glance, onboarding that builds trust, and brands that look regulated without looking boring.",
    answer: "Velora designs fintech products, including trading terminals, investing apps and subscription billing, where clarity at the moment of payment or trade matters most.",
    sections: [
      { title: "What we design", list: ["Trading terminals and order tickets", "Investing apps for first-time investors", "Deposit and funding flows", "Subscription and billing screens", "Brands that feel trustworthy and alive"] },
    ],
    cases: ["atlas", "junction", "subpay"],
    faq: [
      ["Do you design crypto and stock trading apps?", "Yes. Atlas is one terminal for crypto, stocks, gold and FX across web and iOS."],
      ["Can you make investing approachable for beginners?", "Yes. Junction draws portfolios as metro lines so first-time investors can read them."],
    ],
  },
  {
    slug: "developer-tools",
    kind: "industries",
    name: "Developer tools",
    title: "Design Agency for Developer Tools and Infrastructure Startups",
    h1: "Design for developer tools that developers actually like",
    description: "Brand, docs-adjacent landing pages and dashboards for databases, infrastructure and DevOps products.",
    answer: "Velora designs for developer-tool and infrastructure startups: dashboards, consoles and landing pages that show real commands and real data, with brands developers don't roll their eyes at.",
    sections: [
      { title: "What we design", list: ["Consoles and dashboards", "Landing pages with live product demos", "Pricing and changelog pages", "Brands with a point of view"] },
    ],
    cases: ["moss", "insforge", "bentolabs", "armature"],
    faq: [
      ["Do you understand technical products?", "Yes. We design from the real workflow: branches, queries, deploys and logs, not abstract illustrations."],
    ],
  },
  {
    slug: "web3",
    kind: "industries",
    name: "Web3 and crypto",
    title: "Web3 and Crypto Design Agency",
    h1: "Crypto products that feel as solid as a bank",
    description: "Design for Web3 and crypto teams: trading, wallets and on-chain products with brands that don't look like a meme coin.",
    answer: "Velora designs Web3 and crypto products, from trading terminals to wallet flows, with interfaces that make risk, fees and leverage clear before anyone confirms.",
    sections: [
      { title: "What we design", list: ["Trading and perps terminals", "Deposit and wallet flows", "Brand identities for protocols and exchanges", "Launch sites and token pages"] },
    ],
    cases: ["atlas", "subpay"],
    faq: [["Do you work with crypto startups?", "Yes. Atlas covers crypto alongside stocks, gold and FX, on web and iOS."]],
  },
  {
    slug: "saas",
    kind: "industries",
    name: "SaaS",
    title: "SaaS Design Agency — Product, Website and Brand",
    h1: "SaaS design from first visit to daily use",
    description: "Design for B2B SaaS: landing pages that convert, onboarding that activates and dashboards teams open every day.",
    answer: "Velora designs B2B SaaS products end to end: the landing page and pricing, the onboarding that gets a team to value, and the dashboards they use every day.",
    sections: [{ title: "What we design", list: ["Landing and pricing pages", "Onboarding and activation flows", "Dashboards and settings", "Design systems"] }],
    cases: ["moss", "nightshift", "subpay", "insforge"],
    faq: [["Can you redesign our existing SaaS?", "Yes. We usually start with the flow that loses the most users and work outward."]],
  },
  {
    slug: "consumer-apps",
    kind: "industries",
    name: "Consumer apps",
    title: "Consumer App Design Agency",
    h1: "Consumer apps people open because they want to",
    description: "Playful, accessible design for consumer apps: onboarding as a story, calm core screens and brands with a sense of humour.",
    answer: "Velora designs consumer apps with personality and accessibility together: playful brands, onboarding told as a story, and core screens calm enough for daily use.",
    sections: [{ title: "What we design", list: ["Onboarding and first-run", "Core daily screens", "Stickers, illustrations and motion", "App Store and launch visuals"] }],
    cases: ["junction", "youspot", "cactus", "wayfind"],
    faq: [["Can a consumer app be playful and still accessible?", "Yes. Junction pairs stickers and bright lines with text-size settings, arrows on every price move and reduced motion."]],
  },
]

export const COMPARE: SeoPage[] = [
  {
    slug: "design-studio-vs-freelancer",
    kind: "compare",
    name: "Studio vs freelancer",
    title: "Design Studio vs Freelancer: Which Should a Startup Hire?",
    h1: "Design studio or freelancer?",
    description: "An honest comparison of hiring a design studio or a freelance designer for a startup: cost, speed, range and risk.",
    answer: "A freelancer is cheaper and great for one clear deliverable. A studio costs more but covers brand, product, web and build together, keeps going if one person is out, and is faster when everything has to launch on one date.",
    sections: [
      { title: "Choose a freelancer when", list: ["You need one deliverable, like a logo or a single landing page", "Budget is the main constraint", "You can manage the work and fill gaps yourself"] },
      { title: "Choose a studio when", list: ["Brand, product and site need to launch together", "You need design and development from one team", "A launch, raise or demo date can't move"] },
      { title: "Cost", body: ["Freelancers commonly charge per project or hour. Velora's Design Partner plan is €3,999 a month for unlimited requests, which is usually less than a senior in-house designer and covers development too."] },
    ],
    cases: ["moss", "junction"],
    faq: [["Is a studio worth it for an early startup?", "When several things need to ship together, yes. For a single logo or page, a good freelancer is often enough."]],
  },
  {
    slug: "design-studio-vs-in-house",
    kind: "compare",
    name: "Studio vs in-house",
    title: "Design Studio vs In-House Designer for Startups",
    h1: "Hire a designer or work with a studio?",
    description: "When a startup should hire its first designer, and when a design studio or subscription is the better move.",
    answer: "Hire in-house once design is a daily, product-defining need and you can give a designer a clear owner. Before that, a studio or subscription gets you senior range across brand, product and web without a long hiring process.",
    sections: [
      { title: "In-house is better when", list: ["You ship product changes daily", "You need someone in every planning meeting", "You can offer a senior designer a clear path"] },
      { title: "A studio is better when", list: ["You need brand, product and web at once", "You want to start this week, not after a hiring round", "Your design needs come in bursts around launches"] },
    ],
    cases: ["atlas", "nightshift"],
    faq: [["Can a studio work alongside our in-house designer?", "Yes. We often extend an in-house designer during launches."]],
  },
  {
    slug: "design-subscription-vs-project",
    kind: "compare",
    name: "Subscription vs project",
    title: "Design Subscription vs Fixed Project: Which Is Better?",
    h1: "Monthly design subscription or one fixed project?",
    description: "How to choose between an unlimited design subscription and a fixed-scope design project.",
    answer: "Pick a fixed project when the scope is clear and finishes on a date, like a brand or a launch site. Pick a subscription when requests keep coming every week and you want them shipped continuously.",
    sections: [
      { title: "Fixed project", list: ["Clear scope and end date", "Best for brand identities and launches", "One price agreed upfront"] },
      { title: "Subscription", list: ["Ongoing requests, 2–3 updates a week", "Best for product teams shipping weekly", "€3,999 a month at Velora, pause or cancel anytime"] },
    ],
    cases: ["moss", "insforge"],
    faq: [["Can I start with a project and move to a subscription?", "Yes, and many teams do after launch."]],
  },
  {
    slug: "framer-vs-webflow-vs-nextjs",
    kind: "compare",
    name: "Framer vs Webflow vs Next.js",
    title: "Framer vs Webflow vs Next.js for a Startup Website",
    h1: "Framer, Webflow or Next.js for your site?",
    description: "Which website stack a startup should choose: Framer for speed, Webflow for content, Next.js for sites that share code with the product.",
    answer: "Framer is fastest to launch and easy to edit. Webflow is strongest for content-heavy marketing sites with a CMS. Next.js is best when the site shares components with your product, needs live demos, or must be fully tuned for speed and SEO.",
    sections: [
      { title: "Framer", list: ["Fastest to launch", "Easy for marketers to edit", "Great for animated landing pages"] },
      { title: "Webflow", list: ["Strong CMS for blogs and resources", "Visual editing for larger marketing teams"] },
      { title: "Next.js", list: ["Shares components with your product", "Live product demos inside the page", "Full control of speed, schema and SEO"] },
    ],
    cases: ["moss", "youspot"],
    faq: [["Which is best for SEO?", "All three can rank well. Next.js gives the most control over speed and structured data; Webflow has the easiest CMS for publishing often."]],
  },
]

export const GLOSSARY: [string, string][] = [
  ["Brand identity", "The visual and verbal system a company uses everywhere: logo, colour, type, imagery, patterns and tone, plus the rules for using them together."],
  ["Brand book", "A document that shows a brand identity and the rules for using it, so anyone can apply it consistently."],
  ["Design system", "A shared library of components, tokens and rules that keeps a product consistent and lets teams build faster."],
  ["Design tokens", "Named values for colour, type, spacing and radius that are used in both design files and code, so the two never drift."],
  ["Product design", "Designing how a product works and looks: the flows, screens, states and components people use to get a job done."],
  ["UX design", "Designing the experience of using a product, from understanding the problem to the flow, structure and feedback a user gets."],
  ["UI design", "Designing the visible interface of a product: layout, components, type, colour and motion."],
  ["MVP", "Minimum viable product: the smallest version of a product that solves the core problem well enough to learn from real users."],
  ["Landing page", "A single web page built around one goal, such as booking a call or starting a trial, usually the first page a visitor sees."],
  ["Conversion rate", "The share of visitors who take the action a page is built for, like booking a call or signing up."],
  ["Design subscription", "A monthly arrangement where a studio handles an ongoing queue of design requests for a flat fee, instead of pricing each project."],
  ["Core Web Vitals", "Google's three measures of real-user page experience: LCP (loading), INP (responsiveness) and CLS (visual stability)."],
  ["AEO", "Answer engine optimisation: structuring a site so AI assistants like ChatGPT, Claude and Perplexity can understand, quote and link to it."],
  ["llms.txt", "A plain-text file at the root of a site that summarises what the site is and links its key pages, written for AI assistants to read."],
  ["Structured data", "Machine-readable labels (schema.org JSON-LD) that tell search engines what a page is about, such as an organisation, service, article or FAQ."],
  ["Case study", "A write-up of a real project showing the problem, the decisions and the result, used to show how a studio works."],
  ["Wordmark", "A logo made from the company name set in a specific way, often paired with a symbol."],
  ["Prototype", "An interactive mock-up of a product used to test flows with users or demo the idea before it is built."],
]

export const ALL_SEO = [...SERVICES, ...INDUSTRIES, ...COMPARE]
export const getSeoPage = (kind: SeoPage["kind"], slug: string) => ALL_SEO.find((p) => p.kind === kind && p.slug === slug)
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
