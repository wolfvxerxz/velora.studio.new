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
      <picture className="w-12 h-12 rounded-full overflow-hidden">
        <source srcSet="/images/vuk.webp" type="image/webp" />
        <source srcSet="/images/vuk.avif" type="image/avif" />
        <img
          src="/images/vuk.png"
          alt="Vuk"
          className="w-full h-full object-cover"
        />
      </picture>
    </div>
  )
} 