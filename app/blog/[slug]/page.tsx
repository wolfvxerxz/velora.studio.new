import { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/animated-section'
import Script from 'next/script'
import { AppleNav, AppleFoot } from '@/components/apple'
import { blogPosts } from '@/data/blog-posts'
import Link from 'next/link'
import { BlogImage } from '@/components/blog-image'
import { generateMetadata as generateBaseMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { notFound } from 'next/navigation'

// Add generateStaticParams for static site generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return generateBaseMetadata({
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
      path: `/blog/${params.slug}`,
    })
  }

  return generateBaseMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  })
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  // Find related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : []

  // Blog post schema structured data
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://velora.studio${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Velora Studio',
      url: 'https://velora.studio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Velora Studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://velora.studio/logo.avif',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://velora.studio/blog/${post.slug}`,
    },
  }

  return (
    <>
      <div className="va vb">
      <AppleNav />
      <main className="min-h-screen ">
        <div className="max-w-[720px] mx-auto px-4 py-10 sm:py-12 md:py-16">
          <Breadcrumbs />
          <AnimatedSection animation="fadeUp">
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-[14px] text-gray-600 hover:text-black transition-colors duration-300"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                  />
                </svg>
                Back to Blog
              </Link>
            </div>

            {post.image && <BlogImage src={post.image} alt={post.title} />}
            
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] sm:text-xs bg-gray-100 text-black px-1.5 sm:px-2 py-0.5 rounded-md transition-colors duration-300">
                {post.category}
              </span>
              <span className="text-gray-600 text-[14px] transition-colors duration-300">
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-[22px] font-velora-studio text-black mb-6 transition-colors duration-300 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-10">
              <span className="text-gray-600 text-[14px] transition-colors duration-300">
                {post.author}
              </span>
              <time className="text-gray-600 text-[14px] transition-colors duration-300">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            {/* Table of Contents */}
            {post.toc && post.toc.length > 0 && (
              <div className="mb-10 p-6 bg-gray-50 rounded-xl">
                <h2 className="text-[14px] font-velora-studio text-black mb-4">Table of Contents</h2>
                <nav>
                  <ul className="space-y-2">
                    {post.toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-gray-600 hover:text-black transition-colors duration-300"
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            
            <article 
              className="prose max-w-none prose-lg
                prose-headings:font-bold prose-headings:text-black
                prose-h1:text-[22px] prose-h2:text-[22px] prose-h3:text-[22px]
                prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-[14px]
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-black
                prose-ul:my-8 prose-ol:my-8
                prose-li:my-3 prose-li:text-gray-600 prose-li:text-[14px]
                prose-blockquote:border-l-4 prose-blockquote:border-gray-300
                prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[14px]
                prose-img:rounded-xl prose-img:shadow-lg
                prose-hr:border-gray-200
                prose-pre:bg-gray-100 prose-pre:text-gray-800
                prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-code:before:content-none prose-code:after:content-none
                [&>*]:mb-6 [&>*:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-[14px] font-velora-studio text-black mb-6">Related Articles</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <div className="p-6 bg-gray-50 rounded-xl transition-colors duration-300">
                        <span className="text-[10px] sm:text-xs bg-gray-100 text-black px-1.5 sm:px-2 py-0.5 rounded-md transition-colors duration-300">
                          {relatedPost.category}
                        </span>
                        <h3 className="mt-3 text-[14px] font-velora-studio text-black group-hover:text-blue-600 transition-colors duration-300">
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href="/blog"
                className="text-black text-[14px] font-medium hover:underline transition-colors duration-300"
              >
                ← Back to Blog
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <AppleFoot />
      </div>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
    </>
  )
} 