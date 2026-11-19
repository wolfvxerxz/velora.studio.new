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
const N = (f: string) => img("Nightshift", f)
const M = (f: string) => img("Moss", f)
const Y = (f: string) => img("YouSpot", f)
const K_ = (f: string) => img("Kept", f)
const S_ = (f: string) => img("Streak", f)
const G = (f: string) => img("Glint", f)
const BL = (f: string) => img("Bloop", f)
const TX = (f: string) => img("Tare", f)
const TV = (f: string) => vid("Tare", f)
const PX = (f: string) => img("Pnyx", f)
const PV = (f: string) => vid("Pnyx", f)

const STORIES: Record<string, Omit<CaseStory, "hero"> & { hero?: CaseStudyWorkItem }> = {
  tare: {
    headline: "Coding agents billed only when they ship, drawn on one engineer's grid",
    intro: [
      "Tare takes an issue from Linear or GitHub, runs six coding agents on it in parallel, checks every attempt against the team's tests, types, lint and scope, and opens one pull request with the best result. Retries and dead ends are never billed.",
      "The name is the weight of an empty container, the part you shouldn't pay for. We built the brand, the console where teams start tasks, watch the attempts and merge, and the landing page that shows a run instead of describing one.",
    ],
    vision: "You should pay for the change, not the tokens.",
    hero: TX("cover.webp"),
    chapters: [
      {
        label: "Brand",
        title: "A cursor cut from a square",
        body: ["The mark is a square with two circles cut from its sides, an I-beam, the cursor every line of code starts from. Everything sits on one visible grid inside viewfinder brackets: mint on near-black for the product, pale stone for the moments that explain."],
        rows: [[TX("brand-slides.webp")], [TX("slide-02.webp"), TX("slide-03.webp")]],
      },
      {
        label: "Identity",
        title: "Work drawn as bars",
        body: ["Agents are drawn as stacked bars that rise as they work, checks as blocks that snap into place, and the merge as one line that carries on while the others stop. The mark is drafted on the grid, square first, then the two circles, then the cut."],
        rows: [[TV("brand-motion.mp4")], [TX("slide-04.webp"), TX("slide-05.webp")]],
      },
      {
        label: "Console",
        title: "Six attempts, one pull request",
        body: ["Sign up with GitHub, name the workspace, pick repositories and agents, and the first task is running before setup ends. Six lanes race on the issue, every check lands as it finishes, and the winner arrives as a pull request that explains why it won. The bill appears only when you merge."],
        rows: [[TV("app-onboarding.mp4")], [TV("app-run.mp4")], [TV("app-review.mp4")]],
      },
      {
        label: "Landing",
        title: "The run is the hero",
        body: ["The hero is a live run: six agents on one issue, the checks filling in, one merged and five not billed. Below it, the steps, a bento of what makes the work safe to merge, the review, a bill that compares per-token pricing with Tare's, the customers and the questions."],
        rows: [[TV("land-hero.mp4")], [TV("land-scroll.mp4")], [TX("land-slides.webp")]],
      },
      {
        label: "Launch",
        title: "Slides for X",
        body: ["A case-study board for the brand and another for the site, with the phones in Apple's own frames and the closing slide carrying the line the whole brand is built on."],
        rows: [[TX("land-04.webp")], [TX("slide-06.webp"), TX("land-06.webp")]],
      },
    ],
    result: "Teams review one pull request, and pay only for the one they merge.",
  },
  pnyx: {
    headline: "Onchain governance built from the objects Athens voted with, brand to landing",
    intro: [
      "Pnyx is onchain governance for DAOs: proposals, delegates, councils and treasuries, on every chain. Whales can't buy the outcome, councils are drawn by a lottery anyone can re-run, and every count is public and final.",
      "The name is the hill where Athenians met to vote. We rebuilt the things that kept those votes fair, the bronze ballot, the water clock, the allotment machine, the shards they wrote on, as the parts of the brand, the app and the landing page.",
    ],
    vision: "A vote is only fair if nobody can buy it, and everybody can count it.",
    hero: PX("cover.webp"),
    chapters: [
      {
        label: "Brand",
        title: "A room facing its floor",
        body: ["The mark is a square with four sides cut away round a centre: an assembly facing the floor between it. Black glaze, fired clay and bone, the two colours of Attic pottery and the paper they were counted on, with Satoshi for every word."],
        rows: [[PX("brand-slides.webp")], [PX("slide-02.webp"), PX("slide-03.webp")]],
      },
      {
        label: "Identity",
        title: "Every object from the Agora, moving",
        body: ["Each part of governance has its object, drawn in one-bit dither and always in motion. The amphora carries a proposal's turnout as its frieze, the balance only sits level when every vote is counted, the water clock is hold to sign, and the five principles build and break apart cell by cell."],
        rows: [[PV("brand-motion.mp4")], [PV("obj-amphora.mp4"), PV("obj-balance.mp4")], [PV("obj-clock.mp4")], [PV("obj-questions.mp4"), PV("obj-stele.mp4")]],
      },
      {
        label: "App",
        title: "A ballot you hold to sign",
        body: ["The question set large, three Athenian ballots to choose from, a solid hub for, a hollow one against and a blank shard to abstain, a one-bit tally with its quorum, and the council of 48 seated round the floor. You hold the button to sign, so nobody votes by accident."],
        rows: [[PV("app-floor.mp4")]],
      },
      {
        label: "Landing",
        title: "A live proposal in the hero",
        body: ["The hero is the product: a proposal created by one API call, votes arriving one by one, the tally filling until quorum is reached. Below it, each part of governance gets its own calm visual, and the code, the guarantees and the launch follow in the same black glaze."],
        rows: [[PV("land-hero.mp4")], [PV("land-product.mp4")], [PV("land-features.mp4"), PV("land-stats.mp4")], [PV("land-code.mp4"), PV("land-security.mp4")], [PV("land-start.mp4")]],
      },
      {
        label: "Launch",
        title: "Slides and a profile for X",
        body: ["Six slides in one case-study board, each a frame of its own, and an X profile with the Greek key running along its banner."],
        rows: [[PX("slide-04.webp"), PX("slide-05.webp")], [PX("slide-06.webp")], [PV("x-profile.mp4")]],
      },
    ],
    result: "Governance anyone can count, and nobody can buy.",
  },
  bloop: {
    headline: "A wallet where launching a coin is the fun part, brand to iPhone",
    intro: [
      "Bloop is a crypto wallet for iPhone. Name a coin, pick its mascot and a chain, and it's live in under a minute. Every list shows which of your friends already hold what you're looking at.",
      "We designed the brand and built the native iPhone app: one black canvas, four bright colours with one job each, and a cast of cartoon animals in crypto gear that make it feel like a game.",
    ],
    vision: "Launching a coin should feel like a party, not a form.",
    hero: BL("cover.webp"),
    chapters: [
      {
        label: "Brand",
        title: "A b, split down the middle",
        body: ["A lowercase b built from two plain shapes, a stem and a round bowl, cut on the diagonal: white above the cut and a lime to aqua to blue gradient below it, the way a coin flips from nothing to live. In ink on the gradient, it holds a poster on its own."],
        rows: [[BL("brand-mark.webp")], [BL("brand-poster.webp")], [BL("brand-icon.webp"), BL("brand-colour.webp")]],
      },
      {
        label: "System",
        title: "Four colours, one job each",
        body: ["Lime is the brand and the launch button, aqua is money coming in, blue is every action, grape is people and gifts. Every coin is a cartoon animal in crypto gear, pixel shades, laser eyes, a gold chain, a crown, and every wallet is a hand-drawn person, so a list always looks alive."],
        rows: [[BL("brand-mascots.webp"), BL("brand-people.webp")]],
      },
      {
        label: "Launch",
        title: "A coin in a minute",
        body: ["Discover opens on two glossy tiles: launch your own coin, or claim the airdrops waiting for you. The launch form is four rows and a shuffle for the mascot, and the moment it's live gets its own celebration, ready to share."],
        rows: [[BL("phones-launch.webp")], [vid("Bloop", "thumb.mp4")]],
      },
      {
        label: "Wallets",
        title: "Every wallet has a face",
        body: ["Wallets live in one sheet. Pin the ones you use most and they move to the top as big faces; give any wallet a new name and face in a couple of taps."],
        rows: [[BL("phones-wallets.webp")]],
      },
      {
        label: "Money",
        title: "Hold, buy and claim",
        body: ["Home is your balance, four round actions and your coins. A coin opens on its chart, the friends who hold it and a one-tap buy, and airdrops always say why you got them."],
        rows: [[BL("phones-money.webp")]],
      },
    ],
    result: "Name it, launch it, watch your friends pile in.",
  },
  glint: {
    headline: "A Mac launcher that tells you why a token moved, brand to landing",
    intro: [
      "Glint is a crypto launcher for the Mac. Press ⌥Space anywhere and it shows what's moving, the reason behind each move, and who's talking about it, before the chart catches up.",
      "We designed the brand, the desktop app and the landing page around one idea: every row leads with its cause, not its rank.",
    ],
    vision: "A price tells you something happened. Glint tells you what.",
    hero: G("cover.webp"),
    chapters: [
      {
        label: "Brand",
        title: "A glint caught on a sphere",
        body: ["A white sphere with a four-point glint cut from its upper right, the flash you see before anyone else does. It stays monochrome everywhere, so the logo never competes with the product's one blue."],
        rows: [[G("brand-cover.webp")], [G("brand-mark.webp"), G("brand-icon.webp")]],
      },
      {
        label: "System",
        title: "Ink, paper, and one blue for focus",
        body: ["Black and white for everything, Glint Blue for selection, cyan when money moves, green and red only for price. Seven one-word causes, Whale, Flow, Listing, Post, News, Unlock and Cooling, so a list reads at a glance."],
        rows: [[G("brand-colour.webp")], [G("brand-tab.webp"), G("brand-posters.webp")], [G("brand-profile.webp")]],
      },
      {
        label: "Desktop app",
        title: "Every move, told in order",
        body: [
          "Moving now, Whales, New listings, On X and your Watchlist, one key each, and each list gets the column it needs: a price line, a buy and sell split, mindshare bars.",
          "Enter opens the story: two plain sentences, the chart with each event pinned where the price reacted, a timeline, and the facts that matter. ⌘K holds every action, so the mouse never has to move.",
        ],
        rows: [[G("app-now.webp")], [G("app-whales.webp"), G("app-listings.webp")], [G("app-story.webp")], [G("app-onx.webp"), G("app-menu.webp")]],
      },
      {
        label: "Landing",
        title: "The product does the explaining",
        body: ["The real launcher sits in the hero and types its own question. Below it, the lists, a story told in order, the seven causes, the eight keys and pricing, each one shown with Glint itself."],
        rows: [[G("land-hero.webp")], [G("land-lists.webp")], [G("land-story.webp")], [G("land-signals.webp"), G("land-keys.webp")], [G("land-pricing.webp"), G("land-end.webp")]],
      },
      {
        label: "Launch",
        title: "Four posts for launch week",
        body: ["The list, a story, the actions and the line, each made from the app itself at 16:9 for X."],
        rows: [[G("x-list.webp"), G("x-story.webp")], [G("x-actions.webp"), G("x-line.webp")]],
      },
    ],
    result: "One shortcut, and the reason behind every move.",
  },
  streak: {
    headline: "A wallet where every trade climbs a board, brand to iPhone",
    intro: [
      "Streak is a social crypto wallet. Every token is a community with its own face and colours, every trade earns XP for that community, and every holder has a rank on its board.",
      "We designed the brand, the web app, the landing page and the iPhone app, all from one black canvas, one blue, and the comets that streak across it.",
    ],
    vision: "Price tells you what a token is worth. The board tells you who's holding it with you.",
    hero: S_("cover.webp"),
    chapters: [
      {
        label: "Brand",
        title: "A comet with three trails",
        body: ["One round head and three trails behind it, the way every token streaks across the hero. It stays monochrome, black on white or white on black, and leaves blue to the product."],
        rows: [[S_("brand-cover.webp")], [S_("brand-mark.webp")], [S_("brand-lockup.webp"), S_("brand-icon.webp")], [S_("showcase.webp")]],
      },
      {
        label: "System",
        title: "Black, white, and blue when something moves",
        body: ["Soft dark cards, white pills for the one thing to do, blue for what you earn. Each token brings its own two colours, used only on its page, its board and its comet."],
        rows: [[S_("brand-colour.webp")], [S_("brand-tokens.webp"), S_("brand-people.webp")], [S_("brand-type.webp"), S_("brand-streak.webp")], [S_("brand-voice.webp"), S_("brand-use.webp")], [S_("kit.webp")]],
      },
      {
        label: "Web app",
        title: "Trade, then see what it did",
        body: ["Built for a desktop: a sidebar with the same five places as the iPhone, Home, Tokens, Feed, Analyst and XP, and the communities you've joined under them. Each token is the hub for its price, its board and its chat, and a trade ends on the XP you earned and the rank it bought you."],
        rows: [[S_("app-wallet.webp")], [S_("app-token.webp"), S_("app-trade-done.webp")], [S_("app-tokens.webp")], [S_("app-earn.webp"), S_("app-feed.webp")], [S_("app-community.webp"), S_("app-analyst.webp")]],
      },
      {
        label: "Landing",
        title: "The product, shown working",
        body: ["A bento of live pieces instead of illustrations: the trade sheet, a token's page, its podium, its chat and the analyst, on a fine square grid that fades out around each one."],
        rows: [[S_("land-bento.webp")], [S_("land-together.webp")], [S_("land-quotes.webp"), S_("land-foot.webp")]],
      },
      {
        label: "iPhone",
        title: "The same streak in your pocket",
        body: ["The same five tabs: Home, Tokens, Feed, Analyst and XP. Trades end on the same result panel, and quests send you straight to where you can finish them."],
        rows: [[S_("phones-start.webp")], [S_("phones-trade.webp")], [S_("phones-social.webp")]],
      },
      {
        label: "Launch",
        title: "One trade away",
        body: ["A chat about Toad, a reply, and the $50 buy that follows, every tap shown. Then the boards it climbs, and the line the whole brand comes down to."],
        rows: [[vid("Streak", "launch.mp4")]],
      },
    ],
    result: "Eight communities, one wallet, and a reason to come back every morning.",
  },
  kept: {
    headline: "A calendar that keeps the count, so freelancers get paid on time",
    intro: [
      "Kept is a calendar for freelancers who bill by the session. Every session punches a hole in the client's card, a full card becomes an invoice, and Kept reminds the client before it's late.",
      "We designed the desktop app, the landing page and an iPhone app, in one calm language: warm paper, serif headlines, a teal accent, and the punch card at the centre of everything.",
    ],
    vision: "Every session counted. Every invoice paid.",
    hero: K_("land-stage.webp"),
    chapters: [
      {
        label: "Desktop",
        title: "The week at a desk",
        body: ["Drag across a free slot and a small card asks what you're working on; Enter books it. Stretch a session by its edge, drag it to another day, right-click to rename, duplicate, move or delete. Every client has a punch card, and the last hole is the invoice."],
        rows: [[K_("app-week.webp")], [K_("app-new.webp"), K_("app-menu.webp")], [K_("app-edit.webp")], [K_("app-month.webp"), K_("app-clients.webp")], [K_("app-billing.webp"), K_("app-payments.webp")], [K_("app-reports.webp")], [K_("app-settings.webp"), K_("app-dark.webp")]],
      },
      {
        label: "Landing",
        title: "Built from the app itself",
        body: ["The hero plays the real week: a slot is selected, the session card fills itself in, the session stretches and moves to Friday. Below it, every section is built from the app itself: a pinned story where scrolling punches the card, the features as live moments, and a panel for each kind of work billed by the session."],
        rows: [[K_("land-hero.webp")], [K_("land-steps.webp"), K_("land-band.webp")], [K_("land-features.webp")], [K_("land-for.webp"), K_("land-pricing.webp")]],
      },
      {
        label: "Launch",
        title: "Every session, counted",
        body: ["Thirteen seconds, built only from Kept: seven holes punch, the clients gather into the week, a call with Velora Studio books itself, the eighth hole fills, €2,400 counts up and gets paid, and the holes fly together into the mark. Scored with its own music and sound."],
        rows: [[vid("Kept", "launch.mp4")]],
      },
      {
        label: "iPhone",
        title: "The punch card in your pocket",
        body: ["The day by name and a strip of dates to scrub through. Every session shows the hole it punches, every client their card, and booking says exactly what a session counts toward."],
        rows: [[K_("phones-welcome.webp")], [K_("phones-week.webp")], [K_("phones-money.webp")]],
      },
    ],
    result: "Five clients, one calendar, nothing left to chase.",
  },
  moss: {
    headline: "A Postgres platform on an old blue screen, brand to dashboard",
    intro: [
      "Moss gives every pull request its own copy of production in under a second, rewinds any table to any second in the last thirty days, and puts idle branches to sleep so they cost nothing.",
      "We designed the brand, the dashboard in light and dark, the landing page, pricing and changelog, and the motion that ties them together.",
    ],
    vision: "Seen up close, every screen is a grid. So is every table.",
    hero: vid("Moss", "landing-scroll.mp4"),
    chapters: [
      {
        label: "Brand",
        title: "A pixel sprout",
        body: [
          "The mark is drawn on a thirteen by thirteen grid: main grows straight up and flowers, and a branch leaves the stem to flower on its own.",
          "Screen blue, night and ice carry everything. Headlines are set in a pixel face read from across the room; everything up close is Geist.",
        ],
        rows: [[M("brand-mark.webp"), M("brand-grid.webp")], [M("brand-lockups.webp"), M("brand-colour.webp")]],
      },
      {
        label: "Type and texture",
        title: "The screen, up close",
        body: ["A close-up LCD grid with red, green and blue subpixels sits under every blue surface. On phones it covers the whole page, so you scroll behind the glass."],
        rows: [[M("brand-type.webp"), M("brand-headline.webp")], [M("brand-screen.webp"), M("brand-osd.webp")]],
      },
      {
        label: "Website",
        title: "Change the channel to come in",
        body: [
          "Every page opens like flipping a VCR to a new channel: blue, tape noise and an on-screen display, then the signal locks and the page comes into focus.",
          "The hero is a live grid that bends toward your cursor; click anywhere and a branch is planted.",
        ],
        rows: [[M("1.webp")], [M("2.webp")], [M("3.webp")], [M("4.webp")]],
      },
      {
        label: "Windows",
        title: "Every showcase is a window",
        body: ["Old window chrome, used sparingly: a title bar, three buttons and a sharp frame. Inside, the real dashboard runs on a curved, scan-lined screen."],
        rows: [[M("brand-windows.webp"), M("brand-pattern.webp")], [M("5.webp")], [M("6.webp")]],
      },
      {
        label: "Dashboard",
        title: "Soft, grey and quick to read",
        body: ["Branches, Rewind, Tables, Ask and Usage. Stats sit on soft cards, rows float on a tray, and the only colour left is the branch dot."],
        rows: [[M("10.webp")], [M("12.webp")], [M("brand-product-light.webp")]],
      },
      {
        label: "Pages",
        title: "Pricing and changelog",
        body: ["The same windows carry the plans and every release, so the inner pages feel like more channels of the same set."],
        rows: [[M("8.webp")], [M("9.webp")]],
      },
    ],
    result: "Real Postgres, safe to break.",
  },
  youspot: {
    headline: "An assistant that knows who needs you today, brand to landing page",
    intro: [
      "YouSpot reads your mail, calendar and chats and tells you every morning who is waiting on you, with replies already drafted in your voice.",
      "We designed the brand, the app and the landing page, plus a set of launch posts and films.",
    ],
    vision: "Know who needs you today.",
    hero: vid("YouSpot", "landing-scroll.mp4"),
    chapters: [
      {
        label: "Idea",
        title: "One of them is the spot",
        body: ["Your network is made of different people, so the mark is made of four different shapes. The orange spot is the one who needs you next."],
        rows: [[Y("1.webp")], [Y("2.webp")]],
      },
      {
        label: "Brand",
        title: "Mostly calm, one loud spot",
        body: ["Paper and white carry the page, ink carries the words, and orange only marks what needs someone."],
        rows: [[Y("3.webp")], [Y("4.webp")], [Y("mark.webp"), Y("icons.webp")]],
      },
      {
        label: "System",
        title: "Everything built from the mark",
        body: ["The four shapes become patterns, borders and big crops, textures, icons and every illustration in the product."],
        rows: [[Y("5.webp")], [Y("6.webp")], [Y("7.webp")], [Y("network.webp"), Y("radar.webp")]],
      },
      {
        label: "Detail",
        title: "Type, shapes and icons",
        body: ["One family, Inter, semibold for headlines and regular for everything else. Icons share a 24 grid and one orange spot."],
        rows: [[Y("8.webp")], [Y("9.webp")], [Y("10.webp")], [Y("11.webp")]],
      },
      {
        label: "Website",
        title: "A landing page that feels like the morning brief",
        body: ["Section by section: the day, how it works, the brief, the agents, a bento of what it keeps track of, and pricing."],
        rows: [[Y("landing-hero.webp"), Y("landing-how.webp")], [Y("landing-brief.webp"), Y("landing-agents.webp")], [Y("landing-bento.webp"), Y("landing-pricing.webp")]],
      },
      {
        label: "Social",
        title: "Built for the feed",
        body: ["Launch posts made from the same shapes as the product, so the feed and the app feel like one thing."],
        rows: [[Y("post-a1-day.webp"), Y("post-b1-brain.webp")], [Y("post-a3-chat.webp"), Y("post-b2-agents.webp")], [vid("YouSpot", "network.mp4"), vid("YouSpot", "radar.mp4")]],
      },
    ],
    result: "Three people need you today. Now you know which.",
  },
  nightshift: {
    headline: "AI agents that work overnight, brand to web app",
    intro: [
      "Nightshift runs a team's AI agents while the team is offline. You hand off work at dusk, agents work the night, and a morning brief is waiting at dawn with anything risky held for a person.",
      "We designed the brand, the web app and the landing page, plus a motion system built from the same imagery.",
    ],
    vision: "Your team sleeps. The work doesn't.",
    hero: vid("Nightshift", "logo.mp4"),
    chapters: [
      {
        label: "Idea",
        title: "A warmer night for AI",
        body: [
          "The category is full of glowing brains, neon and terminal green. We went for soft-focus night photography instead: a garden after dark, warm light in the foreground, grain and blur doing the technical work quietly.",
          "It should feel calm, capable and human. A light left on for you.",
        ],
        rows: [[N("1.webp")], [vid("Nightshift", "film.mp4")]],
      },
      {
        label: "Brand",
        title: "Built from circles",
        body: ["The mark is five circles merged into one soft shape, with a hole cut for the moon. The wordmark is set lowercase, rounded and warm."],
        rows: [[N("2.webp")], [N("3.webp")], [N("4.webp")]],
      },
      {
        label: "Adaptive tokens",
        title: "Tokens bloom as agents learn",
        body: ["Every agent gets its own token. It starts as a single soft shape and gains a petal for every skill it learns, so how far along an agent is becomes something you can see."],
        rows: [[vid("Nightshift", "agents.mp4")], [N("5.webp")], [N("6.webp")]],
      },
      {
        label: "Typed tokens",
        title: "Every agent, typed out",
        body: ["For big moments an agent's token is drawn in characters: dense where the shape is solid, light at its soft edge, warming from dawn to ember. Relay grows petal by petal as it learns."],
        rows: [[vid("Nightshift", "token.mp4")], [N("18.webp")]],
      },
      {
        label: "System",
        title: "Textures, colour and type",
        body: ["Blurred photography painted in code, film grain, a square-dot screen, contour lines, binary, halftone edges and typed tokens. Inter Tight Light for display, one warm action colour."],
        rows: [[N("19.webp")], [N("7.webp")], [N("8.webp")], [N("9.webp")], [N("10.webp")]],
      },
      {
        label: "Web app",
        title: "Hand off at dusk, decide at dawn",
        body: ["The morning brief puts what needs you first, then what happened overnight. Every run keeps a written trace, and anything that moves money or goes public waits in Approvals."],
        rows: [[N("11.webp")], [vid("Nightshift", "brief.mp4")], [N("12.webp")]],
      },
      {
        label: "Website",
        title: "One page, one night",
        body: ["The landing page opens on the night garden and shows the product working, with proof, integrations and a short FAQ."],
        rows: [[vid("Nightshift", "landing.mp4")], [N("13.webp")], [N("14.webp")]],
      },
      {
        label: "Voice and applications",
        title: "Plain, calm, on your side",
        rows: [[N("15.webp")], [N("16.webp")], [N("17.webp")]],
      },
    ],
    result: "A brand that makes overnight AI feel calm instead of cold.",
  },
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
    hero: J("hero.webp"),
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
