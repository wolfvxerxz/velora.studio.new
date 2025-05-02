import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { instagramSans, instagramSansCondensed, instagramSansScript, instagramSansHeadline } from './fonts'
import { ScrollProgress } from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Velora Studio",
  description: "A modern web studio",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instagramSans.variable} ${instagramSansCondensed.variable} ${instagramSansScript.variable} ${instagramSansHeadline.variable} min-h-screen font-sans antialiased ${inter.variable} scroll-smooth`}>
      <body className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
