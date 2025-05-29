import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackNav() {
  return (
    <div className="border-b border-zinc-800">
      <div className="max-w-[720px] mx-auto px-4 py-4">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  )
} 