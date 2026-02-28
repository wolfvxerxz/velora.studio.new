"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Script from 'next/script'

interface BreadcrumbItem {
  label: string
  href: string
}

export function Breadcrumbs() {
  const pathname = usePathname()
  
  // Skip breadcrumbs on the homepage
  if (pathname === '/') return null

  const breadcrumbs = generateBreadcrumbs(pathname)
  
  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://velora.studio${item.href}`,
        name: item.label,
      },
    })),
  }

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav className="flex items-center space-x-1 text-[14px] text-gray-500 dark:text-gray-400 mb-8">
        <Link
          href="/"
          className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          Home
        </Link>
        {breadcrumbs.map((item, index) => (
          <div key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 dark:text-gray-100">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean)
  
  return paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    return { label, href }
  })
} 