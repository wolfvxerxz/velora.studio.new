import Image from 'next/image'

interface ProfileProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-32 h-32'
}

export function Profile({ className = '', size = 'md' }: ProfileProps) {
  return (
    <div className={`relative aspect-square overflow-hidden rounded-full bg-background ${sizeMap[size]} ${className}`}>
      <Image
        src="/images/vuk.png"
        alt="Vuk"
        fill
        className="object-cover transition-transform hover:scale-105"
        priority
      />
    </div>
  )
} 