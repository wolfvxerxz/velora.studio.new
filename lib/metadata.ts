import { Metadata } from 'next'

const baseUrl = 'https://velora.studio'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Velora Studio | Custom Design & Development',
    template: '%s | Velora Studio'
  },
  description: 'Expert web design and development services for startups and established businesses. We create custom websites that people actually want to use.',
  keywords: ['web design agency', 'web development', 'custom website design', 'startup web design', 'SaaS website design', 'UI/UX design services', 'landing page design', 'high-converting websites', 'design subscription', 'unlimited design', 'velora studio'],
  authors: [{ name: 'Velora Studio' }],
  creator: 'Velora Studio',
  publisher: 'Velora Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Velora Studio',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Velora Studio - Custom Design & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@velora_studio',
    images: [`${baseUrl}/twitter-image.jpg`],
  },
}

export function generateMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = `${baseUrl}${path}`
  
  return {
    ...defaultMetadata,
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
      images: image ? [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: image ? [`${baseUrl}${image}`] : defaultMetadata.twitter?.images,
    },
  }
} 