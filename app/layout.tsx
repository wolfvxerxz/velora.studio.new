import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Funnel_Display } from "next/font/google"
import localFont from "next/font/local"

const mori = localFont({
  src: [
    { path: "./fonts/PPMori-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/PPMori-SemiBold.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-mori",
  display: "swap",
})
const funnel = Funnel_Display({ subsets: ["latin"], weight: ["500"], variable: "--font-funnel", display: "swap" })
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://velora.studio'),
  title: {
    default: 'Velora Studio — Brand, product and launch for funded AI and fintech startups',
    template: '%s | velora.studio'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  description: 'Brand, product and launch for funded AI and fintech startups. Velora designs the brand, app and landing page as one system and ships them in 4–6 weeks.',
  keywords: ['web design agency', 'web development', 'custom website design', 'startup web design', 'SaaS website design', 'UI/UX design services', 'landing page design', 'high-converting websites', 'design subscription', 'unlimited design', 'velora studio'],
  authors: [{ name: 'Velora Studio' }],
  creator: 'Velora Studio',
  publisher: 'Velora Studio',
  formatDetection: { email: false, address: false, telephone: false },
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
  verification: {
    google: 'rBFO4BnsZWwJLW1BLBRn6wuhlOt2OzXkm1Yu6BDIM6I',
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://velora.studio',
    title: 'Velora Studio — Brand, product and launch for funded AI and fintech startups',
    description: 'Brand, product and launch for funded AI and fintech startups. Velora designs the brand, app and landing page as one system and ships them in 4–6 weeks.',
    siteName: 'velora.studio',
    images: [{ url: 'https://velora.studio/og-image.jpg', width: 1200, height: 630, alt: 'Velora Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Studio — Brand, product and launch for funded AI and fintech startups',
    description: 'Brand, product and launch for funded AI and fintech startups. Velora designs the brand, app and landing page as one system and ships them in 4–6 weeks.',
    creator: '@veloraxstudio',
    images: ['https://velora.studio/twitter-image.jpg'],
  },
  category: 'technology',
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${funnel.variable} ${mori.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://velora.studio/#org",
                  "name": "Velora Studio",
                  "alternateName": "velora.studio",
                  "url": "https://velora.studio",
                  "logo": "https://velora.studio/logo/logo-v.svg",
                  "image": "https://velora.studio/og-image.jpg",
                  "description": "Design and development studio for AI, fintech, Web3 and developer-tool startups: brand identity, product design, websites and Next.js development.",
                  "slogan": "Websites, products and brands people actually want to use.",
                  "areaServed": "Worldwide",
                  "priceRange": "€€€",
                  "knowsAbout": ["Brand identity", "Product design", "UI/UX design", "Landing page design", "Next.js development", "Design systems", "Fintech design", "AI product design", "Developer tool design", "Web3 design"],
                  "makesOffer": [
                    { "@type": "Offer", "name": "Audit", "price": "2500", "priceCurrency": "EUR", "description": "One-week review of product, site and brand with a prioritised fix list, credited to the first month or project.", "url": "https://velora.studio/pricing" },
                    { "@type": "Offer", "name": "Launch", "priceSpecification": { "@type": "PriceSpecification", "minPrice": "14900", "priceCurrency": "EUR" }, "description": "Brand, app, landing page, case study and launch posts in 4–6 weeks.", "url": "https://velora.studio/pricing" },
                    { "@type": "Offer", "name": "Design Partner", "price": "5900", "priceCurrency": "EUR", "description": "Unlimited design requests, 2–3 updates a week, Next.js development, pause or cancel anytime.", "url": "https://velora.studio/pricing" }
                  ],
                  "potentialAction": { "@type": "ReserveAction", "target": "https://cal.com/vuk-m/15min", "name": "Book a 15-minute call" },
                  "sameAs": [
                    "https://x.com/veloraxstudio",
                    "https://twitter.com/veloraxstudio",
                    "https://www.linkedin.com/company/velorastudio/",
                    "https://www.instagram.com/studio.velora/"
                  ]
                },
                { "@type": "WebSite", "@id": "https://velora.studio/#site", "url": "https://velora.studio", "name": "Velora Studio", "publisher": { "@id": "https://velora.studio/#org" } }
              ]
            })
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTR4C6B21F"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-HTR4C6B21F');document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href*="cal.com"]');if(a){gtag('event','book_call_click',{page_path:location.pathname,link_text:(a.textContent||'').trim().slice(0,40)});if(window.twq)twq('event','tw-pwx4f-book',{});}},true);`}
        </Script>
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config','pwx4f');`}
        </Script>
      </head>
      <body className="min-h-screen font-sans antialiased" style={{ backgroundColor: "var(--t-bg)" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
