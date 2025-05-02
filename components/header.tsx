import Link from 'next/link'
import { Profile } from './ui/profile'
import { MobileMenu } from './mobile-menu'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <MobileMenu />
          <Link href="/" className="flex items-center space-x-2">
            <Profile size="sm" />
            <span className="font-headline text-xl">Velora Studio</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <Link
            href="/about"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
} 