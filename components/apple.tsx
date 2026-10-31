// The chrome every inner page shares: the way back to the work and a call.
import Link from "next/link"
import Image from "next/image"

export const BOOK = "https://cal.com/vuk-m/15min"
const ext = { target: "_blank", rel: "noopener noreferrer" } as const

// No navbar: the site is the landing page, so every other page just has the way back to the work and a call.
export function AppleNav() {
  return (
    <header className="va-nav va-back">
      <div className="va-nav-in">
        <Link href="/" className="va-home"><Image src="/logo/logo-v.svg" alt="" width={16} height={16} priority /><span>All work</span></Link>
        <a href={BOOK} {...ext} className="va-nav-cta">Book a call</a>
      </div>
    </header>
  )
}

// A page in the same manner: the way back, then the page. No footer, as on the landing page.
export function ApplePage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className="va"><AppleNav /><main className={`vp ${className}`}>{children}</main></div>
}
