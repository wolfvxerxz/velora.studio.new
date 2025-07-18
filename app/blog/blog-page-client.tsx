'use client'

import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { BackNav } from '@/components/back-nav'
import { blogPosts } from '@/data/blog-posts'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import Link from 'next/link'
import Script from 'next/script'
import { useState } from 'react'

// Get unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)))

// Format date consistently
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Filter posts based on selected category
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  // Blog schema structured data
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Velora Studio Blog',
    description: 'Web design and development insights, tips, and best practices',
    url: 'https://velora.studio/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Velora Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://velora.studio/logo.avif',
      },
    },
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Organization',
        name: 'Velora Studio',
      },
      url: `https://velora.studio/blog/${post.slug}`,
      image: post.image ? `https://velora.studio${post.image}` : undefined,
    })),
  }

  return (
    <>
      <Script
        id="blog-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <SiteNav />
      <main className="min-h-screen bg-white dark:bg-[#0f0f0f] pt-16">
        <BackNav />
        <div className="max-w-[720px] mx-auto px-4 py-8">
          <Breadcrumbs />
          
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Expert insights on SaaS design, UX optimization, and digital product development.
            </p>
          </header>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-colors duration-200 ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm px-3 py-1.5 rounded-md whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow hover:shadow-md">
                <Link href={`/blog/${post.slug}`} className="block">
                  {post.image && (
                    <div className="aspect-[16/9]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-black dark:text-white mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <time className="text-xs text-gray-500 mt-2 block">
                      {formatDate(post.date)}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </>
  )
} 