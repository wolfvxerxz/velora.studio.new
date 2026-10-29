// Start a project: every finished flow is sent to the studio, by email (Resend) and/or a Slack or Discord webhook.
// Set RESEND_API_KEY + START_NOTIFY_EMAIL for email, START_WEBHOOK_URL for a channel. Either one is enough.
import { NextResponse } from "next/server"

const clean = (v: unknown, max = 200) => (typeof v === "string" ? v.slice(0, max).trim() : "")

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try { body = await req.json() } catch { return NextResponse.json({ ok: false }, { status: 400 }) }
  if (clean(body.website)) return NextResponse.json({ ok: true }) // honeypot: bots fill every field

  const answers = Array.isArray(body.answers) ? (body.answers as unknown[]).slice(0, 10).map((a) => {
    const [q, v] = Array.isArray(a) ? a : []
    return [clean(q, 80), clean(v, 300)]
  }) : []
  const plan = clean(body.plan, 40)
  const email = clean(body.email, 120)
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ ok: false, error: "email" }, { status: 400 })

  const title = email ? `New project from ${email}` : "Someone finished Start a project"
  const lines = [...answers.map(([q, v]) => `${q} ${v || "—"}`), `Suggested plan: ${plan || "—"}`, email ? `Email: ${email}` : "No email left (they may book on cal.com)"]
  const text = `${title}\n\n${lines.join("\n")}`

  const jobs: Promise<Response>[] = []
  const { RESEND_API_KEY, START_NOTIFY_EMAIL, START_WEBHOOK_URL, START_FROM_EMAIL } = process.env
  if (RESEND_API_KEY && START_NOTIFY_EMAIL) {
    jobs.push(fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: START_FROM_EMAIL || "Velora Studio <onboarding@resend.dev>", to: [START_NOTIFY_EMAIL], subject: title, text, ...(email ? { reply_to: email } : {}) }),
    }))
  }
  if (START_WEBHOOK_URL) {
    // Slack reads "text", Discord reads "content"
    jobs.push(fetch(START_WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text, content: text }) }))
  }
  if (!jobs.length) {
    console.warn("[start] no RESEND_API_KEY/START_NOTIFY_EMAIL or START_WEBHOOK_URL set; submission not delivered:\n" + text)
    return NextResponse.json({ ok: false, delivered: false }, { status: 503 })
  }
  const res = await Promise.allSettled(jobs)
  const delivered = res.some((r) => r.status === "fulfilled" && r.value.ok)
  if (!delivered) console.error("[start] delivery failed", res.map((r) => (r.status === "fulfilled" ? r.value.status : String(r.reason))))
  return NextResponse.json({ ok: delivered, delivered })
}
