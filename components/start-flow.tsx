"use client"
// Start a project: five quick questions, one per screen, then the plan we'd start with and a call booked
// with the answers attached. Nothing personal is asked here; cal.com takes the name and email.
import Link from "next/link"
import { useEffect, useState } from "react"
import { Sparkles, TrendUp, Code, Mobile, MessageText, Palette, Layout, DocumentText, Global, Video, Leaf, Rocket, Buildings, Wallet, Timer, Calendar, Hourglass, Flag, Coin, Coins, MoneyBag, Diamonds, Repeat, ArrowLeft, ArrowRight } from "reicon-react"

const CAL = "https://cal.com/vuk-m/15min"

type Q = { id: string; title: string; sub: string; multi?: boolean; options: [string, string, typeof Sparkles][] }
const QUESTIONS: Q[] = [
  { id: "what", title: "What are you building?", sub: "Pick the closest one.", options: [["AI product", "Agents, copilots, AI-native tools", Sparkles], ["Fintech", "Payments, trading, investing, banking", TrendUp], ["Developer tool", "Infra, APIs, databases, DevOps", Code], ["Consumer app", "Mobile and web apps for people", Mobile], ["Something else", "Tell us on the call", MessageText]] },
  { id: "need", title: "What do you need?", sub: "Pick everything that applies.", multi: true, options: [["Brand identity", "Logo, colour, type, brand book", Palette], ["Product design", "App flows, dashboards, iOS or web", Layout], ["Landing page", "One page that sells the product", DocumentText], ["Full website", "Pricing, changelog, blog, docs", Global], ["Launch visuals", "Motion, films and launch posts", Video]] },
  { id: "stage", title: "Where is the company?", sub: "So we know what the work has to do.", options: [["Pre-seed", "Building toward the first raise", Leaf], ["Seed", "Raised, now shipping and hiring", Rocket], ["Series A or later", "Scaling a product people use", Buildings], ["Bootstrapped", "Funded by revenue", Wallet]] },
  { id: "when", title: "When does it need to ship?", sub: "We plan every project back from this.", options: [["Within a month", "Tight, but we can plan for it", Timer], ["In 1–2 months", "The usual launch window", Calendar], ["In 3 months or more", "Time to do it properly", Hourglass], ["There's a fixed date", "A raise, demo day or launch", Flag]] },
  { id: "budget", title: "What budget are you working with?", sub: "A range is fine. It shapes the plan, not the quality.", options: [["Under €2k", "A focused first step", Coin], ["€2k–€10k", "One or two pieces done well", Coins], ["€10k–€25k", "Brand, product and site together", MoneyBag], ["€25k or more", "A full launch with room to spare", Diamonds], ["Monthly", "An ongoing design partner", Repeat]] },
]

const PLANS = {
  page: { name: "Landing Page", price: "€1,200", why: "One page that sells the product, designed and built in 1–2 weeks. It's the fastest way to look ready." },
  launch: { name: "Launch", price: "from €14,900", why: "Brand, product and site designed as one system and shipped in 4–6 weeks, planned back from your date." },
  partner: { name: "Design Partner", price: "€5,900 a month", why: "A senior team on hand every week, with 2–3 updates a week and the build included." },
}

function recommend(a: Record<string, string[]>) {
  const budget = a.budget?.[0] ?? ""
  const need = a.need ?? []
  if (budget === "Monthly") return PLANS.partner
  if (budget === "Under €2k" || budget === "€2k–€10k") return PLANS.page
  if (need.length === 1 && need[0] === "Landing page") return PLANS.page
  return PLANS.launch
}

export function StartFlow() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string[]>>({})
  const done = step === QUESTIONS.length
  const q = QUESTIONS[step]
  const picked = q ? answers[q.id] ?? [] : []

  const pick = (v: string) => {
    if (!q) return
    if (q.multi) setAnswers((a) => ({ ...a, [q.id]: picked.includes(v) ? picked.filter((x) => x !== v) : [...picked, v] }))
    else { setAnswers((a) => ({ ...a, [q.id]: [v] })); setTimeout(() => setStep((s) => s + 1), 220) }
  }

  // number keys pick, Enter continues, Backspace goes back
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (done || !q) return
      const n = Number(e.key)
      if (n >= 1 && n <= q.options.length) pick(q.options[n - 1][0])
      if (e.key === "Enter" && picked.length) setStep((s) => s + 1)
      if (e.key === "Backspace" && step > 0) setStep((s) => s - 1)
    }
    addEventListener("keydown", on)
    return () => removeEventListener("keydown", on)
  })

  // every finished flow reaches the studio, booked or not
  const send = (extra: Record<string, string> = {}) =>
    fetch("/api/start", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers: QUESTIONS.map((x) => [x.title, (answers[x.id] ?? []).join(", ")]), plan: recommend(answers).name, ...extra }) })
  useEffect(() => {
    if (!done) return
    (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", "start_complete", { plan: recommend(answers).name })
    send().catch(() => {})
  }, [done]) // eslint-disable-line react-hooks/exhaustive-deps

  const [email, setEmail] = useState("")
  const [sent, setSent] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const leave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent("sending")
    const website = String(new FormData(e.currentTarget).get("website") ?? "")
    try { const r = await send({ email, website }); setSent(r.ok ? "sent" : "error") } catch { setSent("error") }
  }

  const plan = recommend(answers)
  const notes = QUESTIONS.map((x) => `${x.title} ${(answers[x.id] ?? []).join(", ")}`).join("\n") + `\nSuggested plan: ${plan.name}`
  const cal = `${CAL}?notes=${encodeURIComponent(notes)}`

  return (
    <div className="vs">
      <div className="vs-progress" aria-hidden><span style={{ width: `${(Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100}%` }} /></div>
      <div className="vs-stage" key={step}>
        {!done ? (
          <>
            <h1>{q.title} <span>{q.sub}</span></h1>
            <div className="vs-options" role={q.multi ? "group" : "radiogroup"} aria-label={q.title}>
              {q.options.map(([t, d, I]) => {
                const on = picked.includes(t)
                return (
                  <button key={t} role={q.multi ? "checkbox" : "radio"} aria-checked={on} className={on ? "on" : ""} onClick={() => pick(t)}>
                    <i aria-hidden><I size={16} weight="Filled" /></i><b>{t}</b><span>{d}</span>
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          <div className="vs-result">
            <h1>We&apos;d start with a {plan.name}.</h1>
            <p className="vs-price">{plan.price}</p>
            <p className="vs-sub">{plan.why}</p>
            <dl className="vs-summary">
              {QUESTIONS.map((x) => <div key={x.id}><dt>{x.title}</dt><dd>{(answers[x.id] ?? []).join(", ")}</dd></div>)}
            </dl>
            <div className="va-ctas">
              <a href={cal} target="_blank" rel="noopener noreferrer" className="va-pill">Book your 15-minute call</a>
              <button className="va-pill ghost" onClick={() => setStep(0)}>Change answers</button>
            </div>
            <p className="vs-fine">Your answers go with the booking, so the call starts where they leave off. <Link href="/pricing">See all plans ›</Link></p>
            <form className="vs-email" onSubmit={leave}>
              <label htmlFor="vs-email">Rather we reach out? Leave your email and we&apos;ll reply within a day.</label>
              {sent === "sent" ? <p className="vs-done">Thanks. We&apos;ll be in touch within a day.</p> : (
                <div>
                  <input id="vs-email" type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
                  <input name="website" tabIndex={-1} autoComplete="off" className="vs-hp" aria-hidden />
                  <button className="va-pill ghost" disabled={sent === "sending"}>{sent === "sending" ? "Sending…" : "Send"}</button>
                </div>
              )}
              {sent === "error" && <p className="vs-err">That didn&apos;t send. Book a call instead, or email hello@velora.studio.</p>}
            </form>
          </div>
        )}
      </div>
      {!done && (
        <div className="vs-bar">
          <button className="va-pill ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}><ArrowLeft size={16} weight="Filled" />Back</button>
          <button className="va-pill" onClick={() => setStep((s) => s + 1)} disabled={!picked.length}>{step === QUESTIONS.length - 1 ? "See my plan" : "Continue"}<ArrowRight size={16} weight="Filled" /></button>
        </div>
      )}
    </div>
  )
}
