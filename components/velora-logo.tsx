export function VeloraLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/logo-v.svg" alt="Velora Logo" className="h-10 w-10" />
      <span className="font-medium text-base">velora.studio</span>
    </div>
  )
}
