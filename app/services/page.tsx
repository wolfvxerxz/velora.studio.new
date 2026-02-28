import { generateMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import Script from 'next/script'

export const metadata = generateMetadata({
  title: 'Our Services | Web Design & Development',
  description: 'Expert web design and development services tailored to your business needs. From custom websites to e-commerce solutions, we create digital experiences that drive results.',
  path: '/services',
  image: '/images/services-og.jpg',
})

export default function ServicesPage() {
  // Service schema structured data
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web Design & Development Services',
    provider: {
      '@type': 'Organization',
      name: 'Velora Studio',
      url: 'https://velora.studio',
    },
    description: 'Expert web design and development services tailored to your business needs. From custom websites to e-commerce solutions, we create digital experiences that drive results.',
    serviceType: ['Web Design', 'Web Development', 'UI/UX Design', 'E-commerce Development'],
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Services Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Design',
            description: 'Tailored website designs that reflect your brand and engage your audience.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Development',
            description: 'Full-featured online stores with secure payment processing and inventory management.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description: 'User-centered design that creates intuitive and engaging digital experiences.',
          },
        },
      ],
    },
  }

  return (
    <>
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <h1 className="text-[22px] font-velora-studio mb-8">Our Services</h1>
        {/* Add your services content here */}
      </main>
    </>
  )
} 