"use client"

import Image from "next/image"
import Link from "next/link"
import { TrustedBySection } from "@/components/trusted-by-section"
import { useEffect, useRef } from "react"
import { instagramSans, instagramSansHeadline, instrumentSerif } from "./fonts"

const landingImages = [
  { src: "/landing pages/final.webp", alt: "Final" },
  { src: "/landing pages/panelly.webp", alt: "Panelly" },
  { src: "/landing pages/copilot.webp", alt: "Copilot" },
  { src: "/landing pages/extsy.webp", alt: "Extsy" },
  { src: "/landing pages/flowsync.webp", alt: "Flowsync" },
  { src: "/landing pages/QuantVPN.webp", alt: "QuantVPN" },
  { src: "/landing pages/relo.webp", alt: "Relo" },
  { src: "/landing pages/suprema.webp", alt: "Suprema" },
  { src: "/landing pages/topit.webp", alt: "Topit" },
  { src: "/landing pages/v-fit.webp", alt: "V-Fit" },
  { src: "/landing pages/webserv.webp", alt: "Webserv" },
  { src: "/landing pages/wolfmail.webp", alt: "Wolfmail" },
]

const brandLogos = [
  { src: "/images/brands/253710_logo.webp", alt: "Ostium" },
  { src: "/images/brands/279640_logo.webp", alt: "Whop" },
  { src: "/images/brands/509420_logo.webp", alt: "Chaos Labs" },
  { src: "/images/brands/513650_logo.webp", alt: "Ninety Eight" },
  { src: "/images/brands/amenify.webp", alt: "Amenify" },
  { src: "/images/brands/ecom.png", alt: "Ecom" },
];

const brandLogos2 = [
  { src: "/images/brands/logo.avif", alt: "Brand 1" },
  { src: "/images/brands/logo1.avif", alt: "Brand 2" },
  { src: "/images/brands/logo2.avif", alt: "Brand 3" },
  { src: "/images/brands/logo sub.avif", alt: "Brand 4" },
  { src: "/images/brands/Owlet_Logomark_white.avif", alt: "Owlet" },
]

function MiniLogoSlider() {
  // Duplicate logos once for seamless infinite scroll
  const logos = [...brandLogos, ...brandLogos];
  return (
    <div className="w-full flex flex-col justify-center bg-[#141414] py-4">
      <div className="relative max-w-[600px] w-full overflow-hidden">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'scroll 12s linear infinite',
          }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="px-8 flex items-center justify-center min-w-[120px] h-[40px]">
              <Image src={logo.src} alt={logo.alt} width={100} height={40} className="object-contain grayscale opacity-80" />
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#0F0F0F] text-white flex flex-col">
      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Image Section */}
        <ImageSection />
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full md:w-[500px] flex-shrink-0 flex flex-col justify-center items-center text-left md:sticky md:top-0 h-screen bg-[#141414] text-white px-8 py-12 m-0 border-r border-white/56">
      {/* Logo */}
      <div className="flex justify-start items-center gap-3 mb-8 w-full">
        <Image src="/logo-v.svg" alt="Velora Logo" width={32} height={32} />
        <span className={`text-white font-medium ${instagramSans.className}`}>Velora Studio</span>
      </div>
      
      {/* Main Text */}
      <div className={`max-w-xl flex flex-col gap-2 mb-8 ${instagramSans.className}`}>
        <h2 className="text-2xl font-bold text-white mb-2">
          High-Converting Websites<br />
          for Startups & SaaS
        </h2>
        <p className="text-sm sm:text-base text-gray-300">
          We craft high-converting websites that help startups, founders, and SaaS companies attract and convert their ideal customers.
        </p>
        <p className="text-sm sm:text-base text-gray-300">
          <span className="font-semibold text-white">O→1 Design</span> — Launch from scratch with impact. One clear scope. One set price.
        </p>
        <p className="text-sm sm:text-base text-gray-300">
          <span className="font-semibold text-white">Unlimited Design</span> — €3,000/mo for as much design as you need.
        </p>
      </div>
      
      {/* Buttons */}
      <div className={`flex flex-col sm:flex-row gap-3 justify-center w-full md:w-auto mb-8 ${instagramSans.className}`}>
        <Link href="/15-min" className="inline-block bg-white text-black px-6 py-2 rounded-full text-base font-medium shadow">Schedule Call</Link>
        <Link href="https://www.figma.com/proto/QbXz89f7qHCP2kfFqM6eEV/Our-Work---velora.studio?node-id=9-2&p=f&t=SrwUknsZjSSmcgwX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#222] text-white px-6 py-2 rounded-full text-base font-medium border border-white/10">View Work</Link>
      </div>
      
      {/* Email */}
      <div className={`text-sm text-gray-400 mb-8 ${instagramSans.className}`}>
        Or drop us an email → <a href="mailto:vuk@velora.studio" className="text-white underline">vuk@velora.studio</a>
      </div>
      
      {/* Mini Brand Logos */}
      <MiniLogoSlider />
    </section>
  )
}

function ImageSection() {
  return (
    <section className="flex-1 flex flex-col items-center md:justify-center w-full gap-12 md:items-center md:gap-8 my-12 bg-[#0F0F0F]">
      {landingImages.map((img, i) => (
        <div key={i} className="border border-white/56 p-1 rounded-lg">
          <Image src={img.src} alt={img.alt} width={900} height={500} className="rounded-lg w-full md:w-[700px] mx-auto object-cover shadow-lg" />
        </div>
      ))}
    </section>
  )
}
