"use client"

import Image from "next/image"
import Link from "next/link"
import { TrustedBySection } from "@/components/trusted-by-section"
import { useEffect, useRef } from "react"
import { instagramSans, instagramSansHeadline, instrumentSerif } from "./fonts"
import { ScrollUnblurImage } from "@/components/scroll-unblur-image";

const landingImages = [
  { src: "/landingpages/final.webp", alt: "Final" },
  { src: "/landingpages/panelly.webp", alt: "Panelly" },
  { src: "/landingpages/copilot.webp", alt: "Copilot" },
  { src: "/landingpages/starlabs.webp", alt: "Starlabs" },
  { src: "/landingpages/extsy.webp", alt: "Extsy" },
  { src: "/landingpages/flowsync.webp", alt: "Flowsync" },
  { src: "/landingpages/QuantVPN.webp", alt: "QuantVPN" },
  { src: "/landingpages/relo.webp", alt: "Relo" },
  { src: "/landingpages/suprema.webp", alt: "Suprema" },
  { src: "/landingpages/topit.webp", alt: "Topit" },
  { src: "/landingpages/v-fit.webp", alt: "V-Fit" },
  { src: "/landingpages/webserv.webp", alt: "Webserv" },
  { src: "/landingpages/wolfmail.webp", alt: "Wolfmail" },
]

const brandLogos = [
  { src: "/images/brands/webserv.webp", alt: "Ostium" },
  { src: "/images/brands/extsy.webp", alt: "Whop" },
  { src: "/images/brands/adalo.webp", alt: "Chaos Labs" },
  { src: "/images/brands/nordeus.webp", alt: "Ninety Eight" },
  { src: "/images/brands/zula.webp", alt: "Amenify" },
  { src: "/images/brands/ecom.webp", alt: "Ecom" },
  { src: "/images/brands/abide.webp", alt: "abide" },
];


function MiniLogoSlider() {
  // Duplicate logos once for seamless infinite scroll
  const logos = [...brandLogos, ...brandLogos];
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speed = 1.5; // px per frame, increased for faster animation

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let pos = 0;
    let frameId: number;
    const totalWidth = container!.scrollWidth / 2; // width of one set of logos

    function animate() {
      pos -= speed;
      if (Math.abs(pos) >= totalWidth) {
        pos = 0;
      }
      if (container) {
        container.style.transform = `translateX(${pos}px)`;
      }
      frameId = requestAnimationFrame(animate);
    }
    frameId = requestAnimationFrame(animate);
    animationRef.current = frameId;
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="w-full flex flex-col justify-center bg-[#0f0f0f] py-4">
      <div className="relative max-w-[600px] w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #0f0f0f 70%, transparent)'}} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #0f0f0f 70%, transparent)'}} />
        <div
          ref={containerRef}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="px-2 flex items-center justify-center min-w-[90px] h-[35px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={35}
                className={`object-contain opacity-80  h-[40px] w-auto${logo.src.includes('ecom') ? ' invert' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
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
    <section className="w-full md:w-[600px] flex-shrink-0 flex flex-col justify-center items-center text-left md:sticky md:top-0 h-screen bg-[#0f0f0f] text-white px-8 py-12 m-0 border-r border-white/56">
      {/* Logo */}
      <div className="flex justify-start items-center gap-3 mb-8 w-full">
        <Image src="/logo-v.svg" alt="Velora Logo" width={32} height={32} />
        <span className={`text-white font-medium ${instagramSans.className}`}>Velora Studio</span>
      </div>
      
      {/* Trusted By Section */}
      <div className="w-full mb-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 flex flex-col sm:flex-row items-center gap-2 border border-white/10 shadow-lg w-fit">
          <div className="flex -space-x-1.5 mr-2 flex-shrink-0">
            <Image 
              src="/images/1.avif" 
              alt="Client" 
              width={24}
              height={24}
              className="w-6 h-6 rounded-full border-2 border-[#141414] object-cover"
            />
            <Image 
              src="/images/2.avif" 
              alt="Client" 
              width={24}
              height={24}
              className="w-6 h-6 rounded-full border-2 border-[#141414] object-cover"
            />
            <Image 
              src="/images/3.avif" 
              alt="Client" 
              width={24}
              height={24}
              className="w-6 h-6 rounded-full border-2 border-[#141414] object-cover"
            />
          </div>
          <span className="text-gray-300 text-xs min-w-0 break-words whitespace-normal text-center sm:text-left font-sans">
            38+ startups & founders chose velora.studio
          </span>
        </div>
      </div>
      
      {/* Main Text */}
      <div className="max-w-xl flex flex-col gap-4 mb-8">
        <h2 className="text-white font-geist-medium font-medium mb-2 tracking-tight leading-tight text-base">
          High-Converting Websites for Startups & SaaS
        </h2>
        <p className="framer-style-text">
          We craft high-converting websites that help startups, founders, and SaaS companies attract and convert their ideal customers.
        </p>
        <p className="framer-style-text">
          <span className="font-medium text-white font-geist-medium">O→1 Design</span> — Launch from zero with purpose. Clear scope. Fixed price.
        </p>
        <p className="framer-style-text">
          <span className="font-medium text-white font-geist-medium">Unlimited Design</span> — €3,000/mo for as much design as you need.
        </p>
      </div>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center w-full md:w-auto mb-8">
        <Link href="/15-min" className="inline-block bg-white text-black px-6 py-3 rounded-full text-base font-medium shadow font-geist-medium hover:bg-gray-100 transition-colors duration-200">Book a Call With Vuk</Link>
        <Link href="https://www.figma.com/proto/QbXz89f7qHCP2kfFqM6eEV/Our-Work---velora.studio?node-id=9-2&p=f&t=SrwUknsZjSSmcgwX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#222] text-white px-6 py-3 rounded-full text-base font-medium border border-white/10 font-geist-medium hover:bg-[#333] transition-colors duration-200">View Work</Link>
      </div>
      
      {/* Email */}
      <div className="framer-style-text mb-8">
        Or drop us an email → <a href="mailto:vuk@velora.studio" className="text-white underline hover:text-gray-300 transition-colors duration-200">vuk@velora.studio</a>
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
          <ScrollUnblurImage
            src={img.src}
            alt={img.alt}
            width={900}
            height={500}
            className="rounded-lg w-full md:w-[700px] mx-auto object-cover shadow-lg"
            blurAmount={20}
            priority
          />
        </div>
      ))}
    </section>
  )
}
