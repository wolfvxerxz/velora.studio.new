"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef, useState } from "react"
import { SimpleFooter } from "@/components/simple-footer"
import { 
  FaBolt, 
  FaBook, 
  FaDesktop, 
  FaSlidersH, 
  FaStar, 
  FaChartBar, 
  FaMobile, 
  FaGlobe 
} from "react-icons/fa"
import { SiFramer } from "react-icons/si"

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
  { src: "/landingpages/eche.webp", alt: "Eche" },
  { src: "/landingpages/webserv.webp", alt: "Webserv" },
  { src: "/landingpages/wolfmail.webp", alt: "Wolfmail" },
]

const brandLogos = [
  { src: "/images/brands/webserv.webp", alt: "Ostium" },
  { src: "/images/brands/extsy.webp", alt: "Extsy" },
  { src: "/images/brands/adalo.webp", alt: "Chaos Labs" },
  { src: "/images/brands/nordeus.webp", alt: "Ninety Eight" },
  { src: "/images/brands/zula.webp", alt: "Zula" },
  { src: "/images/brands/ecom.webp", alt: "Ecom" },
  { src: "/images/brands/abide.webp", alt: "Abide" },
  { src: "/images/brands/bobos.webp", alt: "Bobos" },
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
    <div className="w-full flex flex-col justify-center py-3 pt-12">
      <div className="relative max-w-[600px] w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #000 0%, transparent 100%)'}} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #000 0%, transparent 100%)'}} />
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

// Custom scroll animation components
function SlideUpFromBottom({ children, delay = 0, duration = 600 }: { children: React.ReactNode, delay?: number, duration?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function ScaleInFromBottom({ children, delay = 0, duration = 700 }: { children: React.ReactNode, delay?: number, duration?: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-98'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  )
}

function ScaleInFromZero({ children, delay = 0, duration = 600, earlyTrigger = false }: { children: React.ReactNode, delay?: number, duration?: number, earlyTrigger?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: earlyTrigger ? '0px 0px 200px 0px' : '0px 0px -50px 0px' 
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, earlyTrigger])

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ease-out ${
        isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-0'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  )
}

function BounceInFromBottom({ children, delay = 0, duration = 600, earlyTrigger = false }: { children: React.ReactNode, delay?: number, duration?: number, earlyTrigger?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: earlyTrigger ? '0px 0px 200px 0px' : '0px 0px -50px 0px' 
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, earlyTrigger])

  return (
    <div
      ref={ref}
      className={`transition-all duration-${duration} ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-98'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  // Add keyboard shortcut for CMD+K to trigger Schedule Call
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for CMD+K on Mac or Ctrl+K on Windows/Linux
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        // Find and click the first Schedule Call button
        const scheduleCallButton = document.querySelector('a[href="/15-min"]') as HTMLAnchorElement;
        if (scheduleCallButton) {
          scheduleCallButton.click();
        }
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen w-full text-white flex flex-col">
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Work Images */}
        <WorkSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Industries & Services Section */}
        <IndustriesSection />
        
              {/* Testimonials Section */}
        <section className="w-full py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Testimonial */}
            <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
              <div className="transform rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
              {/* Header */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border-b-4 border-dashed border-white/20">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-velora-studio text-sm font-medium">
                  Conversion rate increased by 340%!
                </span>
              </div>
                {/* Quote */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l border-r border-b border-white/10">
                <p className="text-white/90 text-sm leading-relaxed font-velora-studio">
                  Velora Studio transformed our landing page completely. The design is not just beautiful, but <span className="font-semibold text-white">it actually converts visitors into customers.</span> Our conversion rate went from 2.1% to 9.2% in just 3 weeks.
                </p>
                <div className="mt-4">
                  <p className="text-white font-velora-studio text-sm font-semibold">
                    Victor Uhl, Founder at Ecom Wizards
                  </p>
                </div>
              </div>
              </div>
            </BounceInFromBottom>

            {/* Right Testimonial */}
            <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
              <div className="transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
              {/* Header */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border-b-4 border-dashed border-white/20">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-velora-studio text-sm font-medium">
                  Raised $2.5M with their design!
                </span>
              </div>
                {/* Quote */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l border-r border-b border-white/10">
                <p className="text-white/90 text-sm leading-relaxed font-velora-studio">
                  Working with Velora Studio was a game-changer for our startup. <span className="font-semibold text-white">Their design helped us raise $2.5M in Series A funding.</span> Investors were impressed by our professional brand presence and user experience.
                </p>
                <div className="mt-4">
                  <div className="flex items-center gap-2">
                    <p className="text-white font-velora-studio text-sm font-semibold">
                      James Crennan, CEO at Adalo
                    </p>
                  
                  </div>
                </div>
              </div>
              </div>
            </BounceInFromBottom>
          </div>
        </div>
        </section>

      {/* Work Showcase Section */}
        <section className="w-full py-12 px-4">
        <div className="max-w-[1000px] mx-auto">
            <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
              <div className="flex justify-center mb-8">
                <Image
                  src="/landingpages/map.webp"
                  alt="Pannelly - Velora Studio Work"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </BounceInFromBottom>
            <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
              <div className="text-center mb-12">
                <p className="text-[#A3A3A3] text-lg font-velora-studio mb-8">100+ web app screens in 2 months</p>
              
              <div className="max-w-[500px] mx-auto space-y-6">
                <div className="space-y-4">
                <div className="space-y-4">
               
               <p className="text-white text-base leading-relaxed font-velora-studio">
  <span className="font-velora-studio text-[#A3A3A3]">We're your design partner that's always available as you grow or scale down. </span>
   Pause or cancel anytime. Need a quick fix? Deck for a YC call? Come back, unpause, and reuse your remaining days.
  </p>
  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/15-min" className="group inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full text-base font-velora-studio border border-black/10 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40">
                    <span>Schedule Call</span>
                    <div className="ml-2 flex items-center gap-1">
                      <div className="w-5 h-5 bg-black/10 rounded text-xs flex items-center justify-center font-mono">⌘</div>
                      <div className="w-5 h-5 bg-black/10 rounded text-xs flex items-center justify-center font-mono">K</div>
                    </div>
                  </Link>
                  <Link href="https://www.paypal.com/ncp/payment/QKBAAEA562Y92" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-transparent text-white px-8 py-3 rounded-full text-base font-velora-studio border border-white/30 hover:bg-white/10 transition-all duration-200">
                    <span>€4,515 - Start now!</span>
                  </Link>
                </div>
              </div>
            </div>
            </BounceInFromBottom>
        </div>
        </section>

              {/* Pricing Section */}
          <section id="pricing" className="w-full py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
            <div className="text-center mb-8">
              <p className="text-[#A3A3A3] text-base leading-relaxed font-velora-studio">
                <span className="font-velora-studio text-white">No hidden contract surprises.</span> Same price and value every<br></br> month, with the freedom to cancel anytime.
              </p>
            </div>
          </BounceInFromBottom>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Plan */}
            <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
              <div className="bg-black rounded-2xl p-8 shadow-xl relative hover:scale-105 transition-all duration-500">
              {/* Gradient border overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-[1px]">
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-white text-xl font-velora-studio mb-2">Basic</h3>
                  <p className="text-[#A3A3A3] text-sm font-velora-studio">For founders who are looking for a design partner they can trust</p>
                </div>
                <div className="mb-8">
                  <span className="text-white text-4xl font-velora-studio">€2,815</span>
                  <span className="text-[#A3A3A3] text-sm font-velora-studio">/ Per Month</span>
                </div>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-white/40 to-transparent mb-8"></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    2 updates per week
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Senior Designer (Previously at Meta, Netflix, Hubspot, Expa & Founding designer at 25+ startups)
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Private Slack Channel
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    No contracts, Cancel Anytime
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    No Meetings
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Marketing Websites
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Product Design (Web & Mobile)
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Link href="https://www.paypal.com/ncp/payment/SQ6EXEE7R67ZC" target="_blank" rel="noopener noreferrer" className="w-full max-w-[320px] inline-flex items-center justify-center bg-[#222] text-white px-8 py-2 rounded-full text-sm font-velora-studio border border-white/10 hover:bg-[#333] transition-colors duration-200">
                    Start Now
                  </Link>
                </div>
              </div>
              </div>
            </BounceInFromBottom>

            {/* Pro Plan */}
            <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
              <div className="bg-black rounded-2xl p-8 shadow-xl relative hover:scale-105 transition-all duration-500">
              {/* Gradient border overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-[1px]">
                <div className="w-full h-full bg-black rounded-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-white text-xl font-velora-studio mb-2">Most founders choose Pro!</h3>
                  <p className="text-[#A3A3A3] text-sm font-velora-studio">For founders or teams looking for design partners with quick turnaround time.</p>
                </div>
                <div className="mb-8">
                  <span className="text-white text-4xl font-velora-studio">€4,515</span>
                  <span className="text-[#A3A3A3] text-sm font-velora-studio">/ Per Month</span>
                </div>
                
                {/* Divider Line */}
                <div className="w-full h-px bg-gradient-to-r from-white/40 to-transparent mb-8"></div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    3 Updates per Week
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Senior Designer (Previously at Meta, Netflix, Hubspot, Expa & Founding designer at 25+ startups)
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Private Slack Channel
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    No contracts, Cancel Anytime
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    No Meetings
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Product Design (Web & Mobile)
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Marketing Websites
                  </li>
                  <li className="flex items-center text-white text-sm font-velora-studio">
                    <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Framer Development
                  </li>
                </ul>
                                      <div className="flex justify-center">
                                        <Link href="https://www.paypal.com/ncp/payment/QKBAAEA562Y92" target="_blank" rel="noopener noreferrer" className="w-full max-w-[320px] inline-flex items-center justify-center bg-white text-black px-8 py-2 rounded-full text-sm font-velora-studio hover:opacity-90 transition-all duration-200">
                          Design Today
                        </Link>
                      </div>
              </div>
              </div>
            </BounceInFromBottom>
          </div>
        </div>
        </section>

      {/* Additional Testimonials Section */}
        <section className="w-full py-12 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Testimonial */}
            <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
              <div className="transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
              {/* Header */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border-b-4 border-dashed border-white/20">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-velora-studio text-sm font-medium">
                  We get first paying customers after working with Velora Studio
                </span>
              </div>
                {/* Quote */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l border-r border-b border-white/10">
                <p className="text-white/90 text-sm leading-relaxed font-velora-studio">
                  We would like to thank you for all the work you've done for us the past month. We've gotten some great feedback on our website and how the product looks, and <span className="font-semibold text-white">we ourselves really like it too so your work really helped on this.</span>
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/brands/bobos.webp"
                    alt="Bobo's Logo"
                    width={80}
                    height={40}
                    className="h-6 w-auto"
                  />
                </div>
              </div>
              </div>
            </BounceInFromBottom>

            {/* Right Testimonial */}
            <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
              <div className="transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
              {/* Header */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3 border-b-4 border-dashed border-white/20">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-velora-studio text-sm font-medium">
                  Improved UX!
                </span>
              </div>
                {/* Quote */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border-l border-r border-b border-white/10">
                <p className="text-white/90 text-sm leading-relaxed font-velora-studio">
                  Working with Velora Studio has been an absolute game-changer for our business. From the moment we started our project, the team at Velora made us feel like their top priority. They took the time to understand our vision and turned it into something even better than we imagined. Their <span className="font-semibold text-white">creativity, attention to detail, and commitment to delivering on time have been outstanding.</span> We couldn't be happier with the results!
                </p>
                <div className="mt-4">
                  <Image
                    src="/images/brands/bobos.webp"
                    alt="Bobo's Logo"
                    width={80}
                    height={40}
                    className="h-6 w-auto"
                  />
                </div>
              </div>
              </div>
            </BounceInFromBottom>
          </div>

          {/* Work Image */}
          <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
            <div className="flex justify-center mb-8">
              <Image
                src="/landingpages/bobo.webp"
                alt="Bobo's - Velora Studio Work"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </BounceInFromBottom>
        </div>
        </section>

      </div>
      
      {/* Contact Section */}
        <section className="w-full py-12 px-4">
        <div className="max-w-[600px] mx-auto">
          <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
            <div className="text-center mb-12">
              <p className="text-sm font-velora-studio font-bold text-white mb-4">
                No more annoying contract pricing!
              </p>
              <p className="text-lg md:text-xl font-velora-studio text-white">
                Let's collaborate today!
              </p>
            </div>
          </BounceInFromBottom>
          
            <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-velora-studio text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-velora-studio focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-velora-studio text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-velora-studio focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-velora-studio text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message here..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 font-velora-studio focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-200 resize-none"
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-3 rounded-xl text-base font-velora-studio font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Send Message
                </button>
              </div>
            </form>
            </div>
            </BounceInFromBottom>
        </div>
        </section>

      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center mb-16">
      {/* Main Hero Card */}
      <div className="w-full max-w-2xl mx-auto">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="bg-black rounded-2xl p-8 md:p-12 shadow-xl relative text-center">
            {/* Gradient border overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-[1px]">
              <div className="w-full h-full bg-black rounded-2xl"></div>
            </div>
            
            {/* Logo and Brand */}
            <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
              <div className="flex items-center justify-center gap-3 mb-8 relative z-10">
                <Image src="/logo-v.svg" alt="Velora Logo" width={40} height={40} />
                <span className="text-white font-velora-studio text-xl">Velora Studio</span>
              </div>
            </BounceInFromBottom>

            {/* Trusted By Section */}
            <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
              <div className="w-full mb-8 flex justify-center relative z-10">
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
                  <span className="text-gray-300 text-xs min-w-0 break-words whitespace-normal text-center sm:text-left font-velora-studio">
                    38+ startups & founders chose velora.studio
                  </span>
                </div>
              </div>
            </BounceInFromBottom>
            
            {/* Main Content */}
            <BounceInFromBottom delay={300} duration={500} earlyTrigger={true}>
              <div className="space-y-6 mb-10 relative z-10">
                <div className="space-y-4">
                  <p className="text-white text-base leading-relaxed font-velora-studio">
                    Product design partner for startup founders. Our designs help founders raise capital, build 0→1 products, and launch fast.
                  </p>
                  <div className="space-y-3">
                    <p className="text-white text-base leading-relaxed font-velora-studio">
                      <span className="font-velora-studio text-white">Unlimited Design</span> – <span className="text-[#A3A3A3]">€2,815/mo for as much design as you need.</span>
                    </p>
                  </div>
                </div>
              </div>
            </BounceInFromBottom>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10 justify-center">
              <BounceInFromBottom delay={400} duration={500} earlyTrigger={true}>
                <Link href="/15-min" className="group inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full text-base font-velora-studio border border-black/10 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40">
                  <span>Schedule Call</span>
                  <div className="ml-2 flex items-center gap-1">
                    <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">⌘</div>
                    <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">K</div>
                  </div>
                </Link>
              </BounceInFromBottom>
              <BounceInFromBottom delay={500} duration={500} earlyTrigger={true}>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-3 rounded-full text-base font-velora-studio border border-white/20 hover:bg-white/20 transition-all duration-200">
                  <span>See pricing</span>
                </button>
              </BounceInFromBottom>
            </div>
            
            {/* Availability */}
            <BounceInFromBottom delay={600} duration={500} earlyTrigger={true}>
              <div className="relative z-10">
                <p className="text-white/60 text-sm">
                  Or drop us an email → <a href="mailto:contact@velora.studio" className="text-white underline hover:text-white/80 transition-colors duration-200">contact@velora.studio</a>
                </p>
              </div>
            </BounceInFromBottom>
            
            {/* Mini Brand Logos */}
            <BounceInFromBottom delay={700} duration={500} earlyTrigger={true}>
              <div className="w-full flex justify-center mt-8 relative z-10">
                <div className="w-full max-w-[500px]">
                  <MiniLogoSlider />
                </div>
              </div>
            </BounceInFromBottom>
            
          </div>
        </BounceInFromBottom>
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section id="work" className="w-full py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {landingImages.map((img, i) => (
            <BounceInFromBottom key={i} delay={i * 100} duration={500} earlyTrigger={true}>
              <div className="group border border-white/56 p-1 rounded-lg hover:border-white/80 transition-all duration-300 hover:scale-105">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="rounded-[10px] w-full h-[300px] object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300"
                  priority
                />
              </div>
            </BounceInFromBottom>
          ))}
        </div>
        
        {/* Buttons below work section */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full mt-8">
          <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
            <Link href="/15-min" className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full text-base font-velora-studio font-velora-studio border border-black/10 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40">
              <span>Schedule Call</span>
              <div className="ml-2 flex items-center gap-1">
                <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">⌘</div>
                <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">K</div>
              </div>
            </Link>
          </BounceInFromBottom>
          <BounceInFromBottom delay={300} duration={500} earlyTrigger={true}>
            <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center bg-[#222] text-white px-8 py-3 rounded-full text-base font-velora-studio border border-white/10 hover:bg-[#333] transition-colors duration-200">See pricing</button>
          </BounceInFromBottom>
        </div>
      </div>
    </section>
  )
}





function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Perfect work, highly recommend! The team delivered exactly what we needed and more.",
      author: "Adalo",
      logo: "/images/brands/adalo.webp",
      alt: "Adalo",
      highlight: true
    },
    {
      quote: "Amazing work! The design exceeded our expectations and helped us achieve better user engagement.",
      author: "Nordeus",
      logo: "/images/brands/nordeus.webp",
      alt: "Nordeus"
    },
    {
      quote: "The quality of work is absolutely exceptional. We were so impressed that we voluntarily increased our monthly retainer. Their designs drive real business results and the conversion improvements paid for the project within the first month.",
      author: "Zula",
      logo: "/images/brands/zula.webp",
      alt: "Zula",
      highlight: true
    },
    {
      quote: "Working with Velora Studio was a complete game-changer for our product strategy. They elevated our vision beyond what we thought possible. Our user engagement increased by 40% and conversion rates improved by 60%. We've been working with them for over a year and they continue to exceed expectations.",
      author: "Extsy",
      logo: "/images/brands/extsy.webp",
      alt: "Extsy"
    },
    {
      quote: "Outstanding work, exceeded expectations! The website redesign was clean, modern, and perfectly aligned with our brand.",
      author: "Ecom Wizards",
      logo: "/images/brands/ecom.webp",
      alt: "Ecom Wizards"
    },
    {
      quote: "Early feedback from our users has been incredible. The new design is exactly what we needed and the user experience improvements have been remarkable.",
      author: "Bobos",
      logo: "/images/brands/bobos.webp",
      alt: "Bobos"
    },
    {
      quote: "Love it, amazing results! Professional, fast, and incredibly talented team. The final product exceeded all our expectations.",
      author: "Webserv",
      logo: "/images/brands/webserv.webp",
      alt: "Webserv"
    },
    {
      quote: "Professional, fast, and incredibly talented team. The final product exceeded all our expectations and we're looking forward to future collaborations.",
      author: "Abide",
      logo: "/images/brands/abide.webp",
      alt: "Abide"
    }
  ]

  return (
    <section className="w-full mb-16">
      <div className="max-w-7xl mx-auto">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <h2 className="text-white text-2xl md:text-3xl font-velora-studio mb-8 text-center">What Our Clients Say</h2>
        </BounceInFromBottom>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial, index) => (
            <BounceInFromBottom key={index} delay={index * 80} duration={400} earlyTrigger={true}>
              <div
                className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] h-fit break-inside-avoid mb-4 ${
                  testimonial.highlight
                    ? 'bg-white border-gray-200 text-black hover:bg-gray-50'
                    : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                }`}
              >
              <p className="text-sm mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.alt}
                    width={32}
                    height={32}
                    className={`w-8 h-8 object-contain ${testimonial.logo.includes('ecom') || testimonial.logo.includes('zula') ? 'invert' : ''}`}
                  />
                </div>
                <span className="text-sm font-velora-studio opacity-80">
                  {testimonial.author}
                </span>
              </div>
              </div>
            </BounceInFromBottom>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <BounceInFromBottom delay={200} duration={400} earlyTrigger={true}>
              <Link href="/15-min" className="group inline-flex items-center justify-center w-full sm:w-auto bg-white text-black px-8 py-3 rounded-full text-base font-velora-studio font-velora-studio border border-black/10 shadow-[0_6px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40">
                <span>Schedule Call</span>
                <div className="ml-2 flex items-center gap-1">
                  <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">⌘</div>
                  <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">K</div>
                </div>
              </Link>
            </BounceInFromBottom>
            <BounceInFromBottom delay={300} duration={400} earlyTrigger={true}>
              <button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center bg-[#222] text-white px-8 py-3 rounded-full text-base font-velora-studio border border-white/10 hover:bg-[#333] transition-colors duration-200">See pricing</button>
            </BounceInFromBottom>
          </div>
          
          {/* Social proof */}
          <BounceInFromBottom delay={400} duration={400} earlyTrigger={true}>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white text-sm font-velora-studio">2 founders booked a call this week!</span>
            </div>
          </BounceInFromBottom>
        </div>
      </div>
    </section>
  )
}

function IndustriesSection() {
  return (
    <section className="w-full mb-12">
      <div className="max-w-[500px] mx-auto px-4">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="mb-6">
            <p className="text-[#A3A3A3] text-sm mb-1">
              We are currently working with founders in 
            </p>
            <p className="text-white text-sm font-velora-studio mb-4">
            AI, Banking, Crypto, Health, Gaming, Sports, Beverages, Education, Ecommerce, Rental & Dating.
            </p>
            
            <p className="text-[#A3A3A3] text-sm mb-1">
              Founders from
            </p>
            <p className="text-white text-sm font-velora-studio mb-1">
              Ecom Wizards, Abide, Nordeus, Extsy, Amenify, Zula, Adolo, Bobos, and 38+ startups, SMB's & Enterprises
            </p>
            <p className="text-[#A3A3A3] text-sm">
              trusted us to deliver
            </p>
          </div>
        </BounceInFromBottom>
        
        {/* Services Tags Grid */}
        <BounceInFromBottom delay={150} duration={400} earlyTrigger={true}>
          <div className="flex flex-wrap gap-2">
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaBolt className="w-3 h-3" />
            <span>web apps</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaBook className="w-3 h-3" />
            <span>branding</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaDesktop className="w-3 h-3" />
            <span>websites</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaSlidersH className="w-3 h-3" />
            <span>user experience</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaStar className="w-3 h-3" />
            <span>marketing</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaChartBar className="w-3 h-3" />
            <span>pitch decks</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaMobile className="w-3 h-3" />
            <span>mobile apps</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <SiFramer className="w-3 h-3" />
            <span>framer</span>
          </div>
          <div className="bg-black border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5">
            <FaGlobe className="w-3 h-3" />
            <span>webflow</span>
          </div>
          </div>
        </BounceInFromBottom>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="w-full mb-16">
      <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
        <h2 className="text-white text-2xl md:text-3xl font-velora-studio mb-8 text-center">Got Questions?</h2>
      </BounceInFromBottom>
      <BounceInFromBottom delay={100} duration={400} earlyTrigger={true}>
        <p className="text-zinc-400 text-sm mb-8 text-center max-w-2xl mx-auto">Here's what our clients usually ask us</p>
      </BounceInFromBottom>
      
      <div className="space-y-3 max-w-4xl mx-auto">
        <BounceInFromBottom delay={150} duration={400} earlyTrigger={true}>
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
        </BounceInFromBottom>

        <BounceInFromBottom delay={200} duration={400} earlyTrigger={true}>
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
        </BounceInFromBottom>

        <BounceInFromBottom delay={250} duration={400} earlyTrigger={true}>
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
        </BounceInFromBottom>

        <BounceInFromBottom delay={300} duration={400} earlyTrigger={true}>
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
        </BounceInFromBottom>

        <BounceInFromBottom delay={350} duration={400} earlyTrigger={true}>
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
        </BounceInFromBottom>

        <BounceInFromBottom delay={400} duration={400} earlyTrigger={true}>
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
        </BounceInFromBottom>
      </div>
    </section>
  )
}
