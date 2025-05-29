'use client'

import Image from 'next/image'

interface BlogImageProps {
  src: string
  alt: string
  className?: string
}

export function BlogImage({ src, alt, className = '' }: BlogImageProps) {
  return (
    <div className={`relative w-full aspect-[16/9] mb-8 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          const target = e.target as HTMLImageElement;
          target.src = '/images/placeholder.jpg';
        }}
      />
    </div>
  )
} 