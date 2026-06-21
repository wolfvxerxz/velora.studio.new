import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL('https://velora.studio'),
  title: {
    default: 'velora.studio — design and development studio',
    template: '%s | velora.studio'
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  description: 'Velora Studio partners with AI founders to design investor-ready products that users actually want to use.',
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
    title: 'velora.studio — design and development studio',
    description: 'Velora Studio partners with AI founders to design investor-ready products that users actually want to use.',
    siteName: 'velora.studio',
    images: [{ url: 'https://velora.studio/og-image.jpg', width: 1200, height: 630, alt: 'Velora Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'velora.studio — design and development studio',
    description: 'Velora Studio partners with AI founders to design investor-ready products that users actually want to use.',
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
    <html lang="en" className={GeistSans.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Velora Studio",
              "url": "https://velora.studio",
              "description": "We design & build websites people actually want to use.",
              "sameAs": [
                "https://twitter.com/veloraxstudio",
                "https://www.linkedin.com/company/velorastudio/",
                "https://www.instagram.com/studio.velora/",
              ]
            })
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTR4C6B21F"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-HTR4C6B21F');`}
        </Script>
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('config','pwx4f');`}
        </Script>
      </head>
      <body className="min-h-screen font-sans antialiased" style={{ backgroundColor: "#000000" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
