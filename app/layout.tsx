import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { instagramSans, instagramSansCondensed, instagramSansScript, instagramSansHeadline } from './fonts'
import { ScrollProgress } from "@/components/scroll-progress"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://velora.studio'),
  title: {
    default: "Velora Studio | Custom Design & Development",
    template: "%s | Velora Studio"
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
    },
  },
  description: "We design & build websites people actually want to use. Expert web design and development services for startups and established businesses. Get real results within 90 days.",
  keywords: [
    "web design",
    "web development",
    "website design",
    "UI/UX design",
    "digital agency",
    "web agency",
    "custom website",
    "responsive design",
    "business website",
    "web design agency",
    "professional web design",
    "modern web design",
    "website development",
    "website optimization"
  ],
  authors: [{ name: "Velora Studio", url: "https://velora.studio" }],
  creator: "Velora Studio",
  publisher: "Velora Studio",
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
  verification: {
    google: 'add-your-google-site-verification-here',
  },
  alternates: {
    canonical: 'https://velora.studio',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://velora.studio',
    title: 'Velora Studio | Custom Design & Development',
    description: 'We design & build websites people actually want to use. Expert web design and development services for startups and established businesses.',
    siteName: 'Velora Studio',
    images: [
      {
        url: 'https://velora.studio/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Studio - Modern Web Design & Development',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Studio | Custom Design & Development',
    description: 'We design & build websites people actually want to use. Expert web design and development services for startups and established businesses.',
    creator: '@velorastudio',
    images: ['https://velora.studio/twitter-image.jpg'],
  },
  category: 'technology',
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instagramSans.variable} ${instagramSansCondensed.variable} ${instagramSansScript.variable} ${instagramSansHeadline.variable} min-h-screen font-sans antialiased ${inter.variable} scroll-smooth dark`}>
      <head>
        <Script id="cal-script" strategy="lazyOnload">
          {`
            (function (C, A, L) { 
              let p = function (a, ar) { a.q.push(ar); }; 
              let d = C.document; 
              C.Cal = C.Cal || function () { 
                let cal = C.Cal; 
                let ar = arguments; 
                if (!cal.loaded) { 
                  cal.ns = {}; 
                  cal.q = cal.q || []; 
                  d.head.appendChild(d.createElement("script")).src = A; 
                  cal.loaded = true; 
                } 
                if (ar[0] === L) { 
                  const api = function () { p(api, arguments); }; 
                  const namespace = ar[1]; 
                  api.q = api.q || []; 
                  if(typeof namespace === "string"){
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar); 
                  return;
                } 
                p(cal, ar); 
              }; 
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "30min", {origin:"https://cal.com"});
            Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HTR4C6B21F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HTR4C6B21F');
          `}
        </Script>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Velora Studio",
              "url": "https://velora.studio",
              "logo": "https://velora.studio/logo.png",
              "description": "We design & build websites people actually want to use. Expert web design and development services for startups and established businesses.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/velora_studio",
           
              ]
            })
          }}
        />
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Velora Studio",
              "url": "https://velora.studio",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://velora.studio/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider>
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
