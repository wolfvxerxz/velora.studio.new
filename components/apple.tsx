// The chrome every inner page shares: the way back to the work and a call.
import Link from "next/link"
import Image from "next/image"
import { FloatCall } from "./float-call"

export const BOOK = "https://cal.com/vuk-m/15min"

// No navbar: the site is the landing page, so every other page just has a quiet way back above the
// content, and the call, which rises in at the bottom once you scroll past the intro.
export function AppleNav() {
  return (
    <>
      <header className="va-back">
        <Link href="/" className="va-home"><Image src="/logo/logo-v.svg" alt="" width={14} height={14} priority /><span>Go back</span></Link>
      </header>
      <FloatCall href={BOOK} />
    </>
  )
}

// A page in the same manner: the way back, then the page. No footer, as on the landing page.
export function ApplePage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className="va"><AppleNav /><main className={`vp ${className}`}>{children}</main></div>
}
