import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block px-2 py-1 text-lg font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 