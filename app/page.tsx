"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef, useState } from "react"
import { instagramSans } from "./fonts"

const landingImages = [
  { src: "/landingpages/final.webp", alt: "Final" },
  { src: "/landingpages/panelly.webp", alt: "Panelly" },
  { src: "/landingpages/copilot.webp", alt: "Copilot" },
  { src: "/landingpages/starlabs.webp", alt: "Starlabs" },
  { src: "/landingpages/extsy.webp", alt: "Extsy" },
  { src: "/landingpages/flowsync.webp", alt: "Flowsync" },
  { src: "/landingpages/QuantVPN.webp", alt: "QuantVPN" },
  { src: "/landingpages/relo.webp", alt: "Relo" },
  { src: "/landingpages/lumina.webp", alt: "Lumina" },
  { src: "/landingpages/lumina-app.webp", alt: "Lumina App" },
  { src: "/landingpages/eche.webp", alt: "Eche" },
  { src: "/landingpages/webserv.webp", alt: "Webserv" },
  { src: "/landingpages/wolfmail.webp", alt: "Wolfmail" },
  { src: "/landingpages/Ecom.webp", alt: "Ecom Wizards" },
  { src: "/landingpages/bobo.webp", alt: "Bobos" },
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
  const speed = 0.3; // px per frame, reduced for slower animation
  const isUserScrollingRef = useRef(false);

  // Pause animation when user is scrolling
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handlePageScroll = () => {
      isUserScrollingRef.current = true;
      
      // Resume animation after user stops scrolling
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isUserScrollingRef.current = false;
      }, 1000); // Wait 1 second after user stops scrolling
    };

    window.addEventListener('scroll', handlePageScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handlePageScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let pos = 0;
    let frameId: number;
    const totalWidth = container!.scrollWidth / 2; // width of one set of logos

    function animate() {
      // Only animate when user is not scrolling
      if (!isUserScrollingRef.current) {
        pos -= speed;
        if (Math.abs(pos) >= totalWidth) {
          pos = 0;
        }
        if (container) {
          container.style.transform = `translateX(${pos}px)`;
        }
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
    <div className="w-full flex flex-col justify-center py-4 pt-12">
      <div className="relative max-w-[600px] w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, transparent 70%, transparent)'}} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, transparent 70%, transparent)'}} />
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
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Find the logo slider section by ID
      const logoSliderSection = document.getElementById('logo-slider')
      if (logoSliderSection) {
        const logoSliderBottom = logoSliderSection.getBoundingClientRect().bottom
        // Show navbar when logo slider is no longer visible (above viewport)
        setShowNavbar(logoSliderBottom < 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen w-full text-white flex flex-col">
      {/* Sticky Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showNavbar 
          ? 'translate-y-0 bg-black/90 backdrop-blur-md border-b border-white/10' 
          : '-translate-y-full'
      }`}>
        <div className="w-full max-w-[900px] mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo-v.svg" alt="Velora Logo" width={40} height={40} />
            <span className={`text-white font-medium text-xl ${instagramSans.className}`}>Velora</span>
          </div>
          
          {/* Book a Call Button */}
          <Link 
            href="/15-min" 
            className="group inline-flex items-center justify-center bg-white text-black px-4 py-2 rounded-full text-sm font-medium font-geist-medium border border-black/10 shadow-[0_4px_16px_rgba(255,255,255,0.15)] hover:shadow-[0_6px_24px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <span>Book a Call With Vuk</span>
            <svg className="ml-2 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Work Images */}
        <WorkSection />
        
        {/* FAQ Section */}
        <FaqSection />
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center text-center mb-16">
      {/* Logo */}
      <div className="flex justify-center items-center gap-3 mb-8">
        <Image src="/logo-v.svg" alt="Velora Logo" width={60} height={60} />
        <span className={`text-white font-medium text-2xl ${instagramSans.className}`}></span>
      </div>
      
      
      
      {/* Main Text */}
      <div className="max-w-2xl flex flex-col gap-4 mb-8 text-center">
        <h2 className="text-white font-bold mb-2 tracking-tight leading-tight text-3xl md:text-3xl text-center">
          High-Converting Websites for Startups & SaaS
        </h2>
        <p className="framer-style-text font-bold text-center text-lg">
          Velora Studio crafts high-converting websites that help startups, founders, and SaaS companies attract and convert their ideal customers.
        </p>
        <p className="framer-style-text text-center font-bold text-lg">
          <span className="font-bold text-white font-geist-bold">O→1 Design</span> — Launch from zero with purpose. Clear scope. Fixed price.
        </p>
        <p className="framer-style-text text-center font-bold text-lg">
          <span className="font-bold text-white font-geist-bold">Unlimited Design</span> — €3,000/mo for as much design as you need.
        </p>
      </div>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center w-full mb-8">
        <Link href="/15-min" className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-base font-medium font-geist-medium border border-black/10 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40">
          <span>Book a Call With Vuk</span>
          <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <Link href="https://www.figma.com/proto/QbXz89f7qHCP2kfFqM6eEV/Our-Work---velora.studio?node-id=9-2&p=f&t=SrwUknsZjSSmcgwX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#222] text-white px-6 py-3 rounded-full text-base font-medium border border-white/10 font-geist-medium hover:bg-[#333] transition-colors duration-200">View Work</Link>
      </div>
      
      {/* Email */}
      <div className="framer-style-text mb-8 text-center">
        Or drop us an email → <a href="mailto:contact@velora.studio" className="text-white underline hover:text-gray-300 transition-colors duration-200">contact@velora.studio</a>
      </div>

      {/* Trusted By Section */}
      <div className="w-full mt-8 flex justify-center">
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
      
      {/* Mini Brand Logos */}
      <div id="logo-slider" className="w-full flex justify-center">
        <div className="w-full max-w-[600px]">
          <MiniLogoSlider />
        </div>
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section id="work" className="w-full mb-16 pt-4">
      <div className="flex flex-col gap-6 items-center">
        {landingImages.map((img, i) => (
          <div key={i} className="border border-white/56 p-1 rounded-lg">
            <Image
              src={img.src}
              alt={img.alt}
              width={1000}
              height={600}
              className="rounded-[10px] w-full md:w-[900px] mx-auto object-cover shadow-lg"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  )
}





function FaqSection() {
  return (
    <section id="faq" className="w-full mb-16">
      <h2 className="text-white text-2xl md:text-3xl font-medium mb-8 text-center">Got Questions?</h2>
      <p className="text-zinc-400 text-sm mb-8 text-center max-w-2xl mx-auto">Here's what our clients usually ask us</p>
      
      <div className="space-y-3 max-w-4xl mx-auto">
        <details className="group border border-white/10 rounded-lg bg-black/40">
          <summary className="flex items-center justify-between w-full cursor-pointer px-4 py-3 text-white hover:text-white/90 text-sm">
            How quickly can you build my website?
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-3 text-zinc-300 text-sm">
            We work fast and smart. Your website will be ready in 14 days or less, including all designs, development, and revisions. Our streamlined process and dedicated team make this possible without cutting corners.
          </div>
        </details>

        <details className="group border border-white/10 rounded-lg bg-black/40">
          <summary className="flex items-center justify-between w-full cursor-pointer px-4 py-3 text-white hover:text-white/90 text-sm">
            What happens if the website doesn't perform?
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-3 text-zinc-300 text-sm">
            Simple. If your new website isn't converting better than your old one in 90 days, we'll keep working on it for free until it does. Your success is our success.
          </div>
        </details>

        <details className="group border border-white/10 rounded-lg bg-black/40">
          <summary className="flex items-center justify-between w-full cursor-pointer px-4 py-3 text-white hover:text-white/90 text-sm">
            Do you use website templates?
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-3 text-zinc-300 text-sm">
            Never. Every website is built from scratch based on your specific goals and target audience. While we follow proven conversion strategies, your design will be 100% unique to your brand.
          </div>
        </details>

        <details className="group border border-white/10 rounded-lg bg-black/40">
          <summary className="flex items-center justify-between w-full cursor-pointer px-4 py-3 text-white hover:text-white/90 text-sm">
            What does the price include?
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-3 text-zinc-300 text-sm">
            Everything you need, with no hidden costs. You get a complete, custom website optimized for conversions, including mobile design, SEO setup, and analytics. Plus unlimited revisions until you love it.
          </div>
        </details>

        <details className="group border border-white/10 rounded-lg bg-black/40">
          <summary className="flex items-center justify-between w-full cursor-pointer px-4 py-3 text-white hover:text-white/90 text-sm">
            How will you make my website convert?
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-3 text-zinc-300 text-sm">
            We blend proven conversion tactics with real-world data. Every button, headline, and section is strategically designed to turn visitors into customers. Plus, we keep optimizing based on actual user behavior.
          </div>
        </details>

        <details className="group border border-white/10 rounded-lg bg-black/40">
          <summary className="flex items-center justify-between w-full cursor-pointer px-4 py-3 text-white hover:text-white/90 text-sm">
            How do we get started?
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-3 text-zinc-300 text-sm">
            Just book a free strategy call. We'll chat about your goals and challenges, then create a custom plan to make your website your best sales tool.
          </div>
        </details>
      </div>
    </section>
  )
}
