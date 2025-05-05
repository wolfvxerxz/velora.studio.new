"use client"

import Script from "next/script"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebDesignCompany",
    "name": "Velora Studio",
    "description": "We design & build custom websites that people actually want to use. Specializing in modern web development, e-commerce, and digital experiences for startups and established businesses.",
    "url": "https://velora.studio",
    "logo": "https://velora.studio/logo-v.svg",
    "sameAs": [
      "https://twitter.com/velorastudio",
      // Add other social media URLs when available
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr",
    "telephone": "",  // Add phone if available
    "email": "contact@velora.studio",
    "areaServed": "Worldwide",
    "serviceType": [
      "Web Design",
      "Web Development",
      "UI/UX Design",
      "E-commerce Development",
      "Digital Strategy"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Custom Web Design & Development Services"
    }
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  )
} 