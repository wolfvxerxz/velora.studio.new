'use client'

import Image from 'next/image'

export function BlogImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-64 mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = '/images/placeholder.jpg';
        }}
      />
    </div>
  )
} 