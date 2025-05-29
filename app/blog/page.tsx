import { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { BackNav } from '@/components/back-nav'
import { blogPosts } from '@/data/blog-posts'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Velora Studio',
  description: 'Expert insights on SaaS design, UX optimization, and digital product development. Learn from our case studies and best practices.',
  openGraph: {
    title: 'Blog | Velora Studio',
    description: 'Expert insights on SaaS design, UX optimization, and digital product development. Learn from our case studies and best practices.',
    type: 'website',
  },
}

// Get unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)))

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors duration-300 pt-16">
        <BackNav />
        <div className="max-w-[720px] mx-auto px-4 py-10 sm:py-12 md:py-16">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6 transition-colors duration-300">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 transition-colors duration-300">
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
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="bg-gray-50 dark:bg-zinc-800 rounded-xl overflow-hidden transition-colors duration-300">
                    {post.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-zinc-700 text-black dark:text-white px-1.5 sm:px-2 py-0.5 rounded-md transition-colors duration-300">
                          {post.category}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base line-clamp-2 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <span className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                          {post.author}
                        </span>
                        <time className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>
      <SiteFooter />
    </>
  )
} 