// The chrome every page shares: Apple's quiet global nav and its small grey footer.
import Link from "next/link"
import Image from "next/image"

export const BOOK = "https://cal.com/vuk-m/15min"
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

export function AppleNav() {
  return (
    <header className="va-nav">
      <div className="va-nav-in">
        <Link href="/" className="va-logo" aria-label="Velora Studio home"><Image src="/logo/logo-v.svg" alt="" width={16} height={16} priority /></Link>
        <nav>
          <Link href="/#work">Work</Link><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/blog">Blog</Link><Link href="/#voices">Founders</Link>
        </nav>
        <Link href="/start" className="va-nav-cta">Start a project</Link>
      </div>
    </header>
  )
}

export function AppleFoot() {
  return (
    <footer className="va-foot">
      <div className="va-foot-in">
        <p className="va-foot-note">Every launch is planned back from your date on a 15-minute call. <a href={BOOK} {...ext}>Book one ›</a></p>
        <div className="va-foot-cols">
          {[
            ["Studio", [["Work", "/#work"], ["Pricing", "/pricing"], ["Blog", "/blog"], ["Glossary", "/glossary"], ["Start a project", "/start"], ["Book a call", BOOK]]],
            ["Services", [["Brand identity", "/services/brand-identity"], ["Product design", "/services/product-design"], ["Websites", "/services/website-design"], ["Design partner", "/services/design-subscription"], ["All services", "/services"]]],
            ["For", [["AI startups", "/industries/ai-startups"], ["Fintech", "/industries/fintech"], ["Developer tools", "/industries/developer-tools"], ["Web3", "/industries/web3"], ["SaaS", "/industries/saas"]]],
            ["Elsewhere", [["X", "https://x.com/veloraxstudio"], ["LinkedIn", "https://www.linkedin.com/company/velorastudio/"], ["Instagram", "https://www.instagram.com/studio.velora/"]]],
          ].map(([h, ls]) => (
            <div key={h as string}><b>{h as string}</b>{(ls as string[][]).map(([t, href]) => <a key={t} href={href}>{t}</a>)}</div>
          ))}
        </div>
        <p className="va-copy">Copyright © 2026 Velora Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

// A page in the same manner: nav, a white page, footer.
export function ApplePage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className="va"><AppleNav /><main className={`vp ${className}`}>{children}</main><AppleFoot /></div>
}
