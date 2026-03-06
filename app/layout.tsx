import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter, Onest } from "next/font/google"
import { ScrollProgress } from "@/components/scroll-progress"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://velora.studio'),
  title: {
    default: 'Velora Studio | Custom Design & Development',
    template: '%s | Velora Studio'
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
  verification: {
    google: 'rBFO4BnsZWwJLW1BLBRn6wuhlOt2OzXkm1Yu6BDIM6I',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://velora.studio',
    title: 'Velora Studio | Custom Design & Development',
    description: 'Expert web design and development services for startups and established businesses. We create custom websites that people actually want to use.',
    siteName: 'Velora Studio',
    images: [
      {
        url: 'https://velora.studio/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Velora Studio - Custom Design & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Velora Studio | Custom Design & Development',
    description: 'Expert web design and development services for startups and established businesses. We create custom websites that people actually want to use.',
    creator: '@velora_studio',
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
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`min-h-screen font-sans antialiased ${inter.variable} ${onest.variable} scroll-smooth dark`}
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://static.ads-twitter.com" />
        
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
              "logo": "https://velora.studio/logo.avif",
              "description": "We design & build websites people actually want to use. Expert web design and development services for startups and established businesses.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/velora_studio",
                "https://www.linkedin.com/company/velorastudio/",
                "https://www.instagram.com/studio.velora/",
                "https://t.me/vukkm",
                "https://wa.me/message/CRWTXVTJ2LCJO1"
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
        <Script id="ahrefs-analytics" src="https://analytics.ahrefs.com/analytics.js" data-key="NI3XpWk2opCemHvSfF6Oag" async strategy="afterInteractive" />
        <meta name="twitter:image" content="https://velora.studio/twitter-image.jpg" />
        <Script id="cal-script" strategy="afterInteractive">
          {`
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal; let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {}; cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", {origin:"https://cal.com"});
            Cal("init", "30min");
          `}
        </Script>
        {/* X (Twitter) Pixel */}
        <Script id="twitter-pixel" strategy="afterInteractive">
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('config','pwx4f');
            twq('track','PageView');
          `}
        </Script>
        {/* Twitter conversion tracking event code */}
        <Script id="twitter-event" strategy="afterInteractive">
          {`
            twq('event', 'tw-pwx4f-pwx4h', {
              email_address: null
            });
          `}
        </Script>
        <meta name="google-site-verification" content="rBFO4BnsZWwJLW1BLBRn6wuhlOt2OzXkm1Yu6BDIM6I" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
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
