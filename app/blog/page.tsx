import { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { BackNav } from '@/components/back-nav'
import { blogPosts } from '@/data/blog-posts'
import Link from 'next/link'
import { generateMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata = generateMetadata({
  title: 'Blog | Web Design & Development Insights',
  description: 'Explore our latest insights on web design, development, and digital strategy. Expert tips, trends, and best practices for creating successful digital experiences.',
  path: '/blog',
  image: '/images/blog-og.jpg',
})

// Get unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)))

export default function BlogPage() {
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
      <main className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors duration-300 pt-16">
        <BackNav />
        <div className="max-w-[720px] mx-auto px-4 py-10 sm:py-12 md:py-16">
          <Breadcrumbs />
          <AnimatedSection animation="fadeUp">
            <h1 className="text-3xl sm:text-4xl font-velora-studio text-black dark:text-white mb-6 transition-colors duration-300">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 transition-colors duration-300 font-velora-studio">
              Expert insights on SaaS design, UX optimization, and digital product development.
            </p>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.slug} className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg">
                  {post.image && (
                    <div className="relative h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-xl font-velora-studio mb-2">
                      <a href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 font-velora-studio">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>
      <SiteFooter />
    </>
  )
} 