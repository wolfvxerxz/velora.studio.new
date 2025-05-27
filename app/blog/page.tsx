import { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { blogPosts } from '@/data/blog-posts'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Web Design & Development Insights',
  description: 'Expert insights on web design, development, and digital strategy. Learn about the latest trends, best practices, and tips for creating successful digital products.',
  openGraph: {
    title: 'Blog | Web Design & Development Insights',
    description: 'Expert insights on web design, development, and digital strategy. Learn about the latest trends, best practices, and tips for creating successful digital products.',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-white dark:bg-[#0f0f0f] transition-colors duration-300 pt-16">
        <div className="max-w-[640px] mx-auto px-4 py-10 sm:py-12 md:py-16">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
              Blog
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-8 transition-colors duration-300">
              Insights, tips, and trends in web design and development
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} animation="fadeUp" delay={index * 100}>
                <article className="bg-white dark:bg-[#0f0f0f] rounded-xl sm:rounded-2xl border border-gray-200 dark:border-zinc-800 p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  {post.image && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] sm:text-xs bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-1.5 sm:px-2 py-0.5 rounded-md transition-colors duration-300">
                      {post.category}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4 transition-colors duration-300">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-black dark:text-white text-sm sm:text-base font-medium hover:underline transition-colors duration-300"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
} 