"use client"

import Image from "next/image"
import Link from "next/link"

import { useEffect, useRef, useState } from "react"
import { SimpleFooter } from "@/components/simple-footer"
import { ProcessSection } from "@/components/process-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
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
  { 
    src: "/landingpages/extsy.webp", 
    alt: "Extsy",
    title: "Extsy",
    description: "We designed the full application for Extsy, creating a seamless product experience that empowered the team to sustain momentum and scale effectively.",
    metric: "$18.5M",
    metricLabel: "Fees Annualized",
    graphColor: "#8b5cf6" // purple
  },
  { 
    src: "/landingpages/webserv.webp", 
    alt: "Webserv",
    title: "Webserv",
    description: "We designed a performance-driven marketing platform for Webserv, helping treatment centers achieve measurable growth and patient acquisition.",
    metric: "200+",
    metricLabel: "Treatment Centers",
    graphColor: "#ef4444" // red
  },
  { 
    src: "/landingpages/nordeus.webp", 
    alt: "Nordeus",
    title: "Nordeus",
    description: "We designed mobile gaming experiences for Nordeus, powering top sports games enjoyed by millions of champions around the world.",
    metric: "100M+",
    metricLabel: "Players Worldwide",
    graphColor: "#ffffff" // white
  },
]

const brandLogos = [
  { src: "/images/brands/webserv.svg", alt: "Ostium" },
  { src: "/images/brands/extsy.svg", alt: "Extsy" },
  { src: "/images/brands/adalo.webp", alt: "Adalo" },
  { src: "/images/brands/nordeus.svg", alt: "Ninety Eight" },
  { src: "/images/brands/ecom.svg", alt: "Ecom" },
  { src: "/images/brands/bobos.webp", alt: "Bobos" },
  { src: "/images/brands/amenify.webp", alt: "amenify" },
];


function MiniLogoSlider() {
  // Duplicate logos multiple times for seamless infinite scroll
  const logos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speed = 0.5; // px per frame
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
    
    // width of one set of logos (divided by 4 since we have 4 copies)
    const totalWidth = container.scrollWidth / 4;

    function animate() {
      // Only animate when user is not scrolling
      if (!isUserScrollingRef.current) {
        pos -= speed;
        
        // Use modulo to create seamless loop without visible reset
        if (Math.abs(pos) >= totalWidth) {
          pos = pos % totalWidth;
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
    <div className="w-full flex flex-col justify-center py-2">
      <div className="relative max-w-[700px] w-full overflow-hidden">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, #080808 0%, transparent 100%)'}} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, #080808 0%, transparent 100%)'}} />
        <div
          ref={containerRef}
          className="flex whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="px-6 flex items-center justify-center min-w-[160px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={140}
                className={`object-contain opacity-80 w-auto ${
                  logo.alt === "Ninety Eight" ? "h-[100px]" : "h-[140px]"
                }`}
                style={{ 
                  width: 'auto',
                  filter: logo.alt === "amenify" ? "grayscale(100%) brightness(500%) invert(1)" : 
                          logo.alt === "Adalo" ? "grayscale(100%) brightness(300%)" : undefined
                }}
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
    <div className="min-h-screen w-full text-white" style={{backgroundColor: '#080808'}}>
      {/* Navbar Wrapper */}
      <div className="w-full sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Navbar />
        </div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <StatsSection />
        
        {/* Use Cases Section */}
        <UseCasesSection />
        
        {/* Work Images */}
        <WorkSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Process Section */}
        <ProcessSection />
        
        {/* Industries & Services Section */}
        <IndustriesSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* Team Section */}
        <TeamSection />

        {/* CTA Section */}
        <section className="pt-16 pb-0 mb-0 border border-dashed border-white/10">
          <div className="w-full max-w-6xl mx-auto px-4 pb-16">
            <div className="max-w-[800px] mx-auto">
              <div className="relative border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden bg-black/40">
                {/* Animated Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                  }}
                />
                
                {/* Noise Texture Overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                  }}
                />
                
                {/* Animated Gradient Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl animate-float-slow" />
                  <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl animate-float-slower" />
                </div>
                
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none animate-gradient" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-velora-studio">
                    Ready to <span className="text-white">generate</span> more{" "}
                    <span className="text-white">users</span>,{" "}
                    <span className="text-white">revenue</span> & <span className="text-white">attention</span>?
                  </h2>
                  <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8 font-velora-studio">
                    Stop guessing what's wrong with your site. We'll give you a free audit that shows you the exact areas to improve for higher conversions.
                  </p>
                  <Link 
                    href="/15-min"
                    className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-lg font-velora-studio border border-black/10 button-shadows hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Yes, I'm Ready To Scale
                    <span className="ml-2 w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
        
        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.15);
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite;
        }
      `}</style>
      
      {/* Footer */}
      <SimpleFooter />
    </div>
  )
}

function AnimatedCounter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref}>
      {prefix}{count}{suffix}
    </div>
  );
}

function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  
  // Calculate prices
  const basicMonthly = 2815;
  const proMonthly = 4515;
  const basicAnnual = Math.round(basicMonthly * 12 * 0.8); // 20% discount
  const proAnnual = Math.round(proMonthly * 12 * 0.8); // 20% discount

  const basicPrice = isAnnual ? basicAnnual : basicMonthly;
  const proPrice = isAnnual ? proAnnual : proMonthly;
  const billingPeriod = isAnnual ? "/ Per Year" : "/ Per Month";
  
  return (
    <section id="pricing" className="w-full py-12 px-4 border border-dashed border-white/10">
      <div className="max-w-[800px] mx-auto">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="text-center mb-8">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-velora-studio">PRICING</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-velora-studio">Our Pricing</h2>
            <p className="text-[#A3A3A3] text-base leading-relaxed font-velora-studio mb-6">
              For info, limits and rates, explore a <Link href="#faq" className="underline hover:text-white transition-colors">detailed pricing breakdown ↗</Link>.
            </p>
          </div>
        </BounceInFromBottom>
        
        {/* Billing Toggle */}
        <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-base font-velora-studio transition-colors duration-200 ${!isAnnual ? 'text-white' : 'text-white/50'}`}>
              Monthly
            </span>
            
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/40"
              style={{ backgroundColor: isAnnual ? '#ffffff' : '#4a4a4a' }}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-black transition-transform duration-300 ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            
            <span className={`text-base font-velora-studio transition-colors duration-200 ${isAnnual ? 'text-white' : 'text-white/50'}`}>
              Annually <span className="text-green-400">(Save 20%)</span>
            </span>
          </div>
        </BounceInFromBottom>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Plan */}
          <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
            <div className="rounded-2xl p-8 shadow-xl relative hover:scale-105 transition-all duration-500" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            {/* Gradient border overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-[1px]">
              <div className="w-full h-full rounded-2xl" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-white text-xl font-velora-studio mb-2">Basic</h3>
                <p className="text-[#A3A3A3] text-sm font-velora-studio">For founders who are looking for a design partner they can trust</p>
              </div>
              <div className="mb-8">
                <span className="text-white text-4xl font-velora-studio">€{basicPrice.toLocaleString()}</span>
                <span className="text-[#A3A3A3] text-sm font-velora-studio">{billingPeriod}</span>
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
          <BounceInFromBottom delay={300} duration={500} earlyTrigger={true}>
            <div className="rounded-2xl p-8 shadow-xl relative hover:scale-105 transition-all duration-500" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            {/* Gradient border overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-white/5 p-[1px]">
              <div className="w-full h-full rounded-2xl" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-white text-xl font-velora-studio mb-2">Most founders choose Pro!</h3>
                <p className="text-[#A3A3A3] text-sm font-velora-studio">For founders or teams looking for design partners with quick turnaround time.</p>
              </div>
              <div className="mb-8">
                <span className="text-white text-4xl font-velora-studio">€{proPrice.toLocaleString()}</span>
                <span className="text-[#A3A3A3] text-sm font-velora-studio">{billingPeriod}</span>
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
  );
}

function StatsSection() {
  return (
    <section className="w-full py-16 px-4 border border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
            <div className="py-8 md:py-0">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={38} suffix="+" />
              </h3>
              <p className="text-white/60 text-sm">startups & founders</p>
            </div>
          </BounceInFromBottom>
          <BounceInFromBottom delay={100} duration={500} earlyTrigger={true}>
            <div className="py-8 md:py-0">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={15} prefix="$" suffix="M+" />
              </h3>
              <p className="text-white/60 text-sm">in funding raised by clients</p>
            </div>
          </BounceInFromBottom>
          <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
            <div className="py-8 md:py-0">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter end={120} suffix="+" />
              </h3>
              <p className="text-white/60 text-sm">products launched</p>
            </div>
          </BounceInFromBottom>
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const outcomes = [
    { icon: FaSlidersH, title: "E-com Scale", color: "#fbbf24" },
    { icon: FaChartBar, title: "Revenue Growth", color: "#fb923c" },
    { icon: FaBolt, title: "Faster Launches", color: "#ec4899" },
    { icon: FaStar, title: "Funding Raised", color: "#10b981" },
    { icon: FaMobile, title: "Lower CAC", color: "#3b82f6" },
    { icon: FaDesktop, title: "Repeatable Systems", color: "#ef4444" },
    { icon: FaGlobe, title: "Market Expansion", color: "#8b5cf6" },
    { icon: FaBook, title: "Stronger Retention", color: "#f97316" },
  ]

  return (
    <section className="w-full py-20 px-4 border border-white/10">
      <div className="max-w-6xl mx-auto">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="text-center mb-4">
            <p className="text-white/60 text-sm mb-4">Use Cases</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Founders Achieve with Velora Studio
            </h2>
            <p className="text-white/60 text-base max-w-3xl mx-auto">
              From raising capital to scaling revenue, Velora designs create outcomes that move businesses forward.
            </p>
          </div>
        </BounceInFromBottom>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon;
            return (
              <BounceInFromBottom key={index} delay={index * 50} duration={500} earlyTrigger={true}>
                <div className="rounded-lg p-6 border border-white/10 flex items-center gap-3 h-24">
                  <IconComponent className="text-3xl flex-shrink-0" style={{ color: outcome.color }} />
                  <h3 className="text-white font-normal text-base" style={{ color: outcome.color }}>
                    {outcome.title}
                  </h3>
                </div>
              </BounceInFromBottom>
            );
          })}
        </div>
      </div>
    </section>
  )
}

function Navbar() {
  return (
    <nav className="w-full border-b border-l border-r border-white/10 bg-[#080808]/95 backdrop-blur-sm py-4">
      <div className="w-full px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src="/logo-v.svg" alt="Velora Logo" width={32} height={32} />
            <span className="text-white font-velora-studio text-lg">velora studio</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#work" className="text-white/70 hover:text-white text-sm font-velora-studio transition-colors">
              Case Studies
            </Link>
            <Link href="#testimonials" className="text-white/70 hover:text-white text-sm font-velora-studio transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-white/70 hover:text-white text-sm font-velora-studio transition-colors">
              Pricing
            </Link>
            <Link href="/services" className="text-white/70 hover:text-white text-sm font-velora-studio transition-colors">
              Services
            </Link>
          </div>
          
          {/* CTA Button */}
          <Link 
            href="/15-min" 
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-velora-studio button-shadows hover:bg-white/90 transition-all duration-200"
          >
            Free Redesign
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center border-l border-r border-dashed py-8 border-white/10">
      {/* Main Hero Card */}
      <div className="w-full max-w-2xl mx-auto">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="bg-[#080808] rounded-2xl p-8 md:p-10 relative text-center">
            
            {/* Trusted By Section */}
            <BounceInFromBottom delay={200} duration={500} earlyTrigger={true}>
              <div className="w-full mb-6 flex justify-center relative z-10">
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
              <div className="space-y-5 mb-8 relative z-10">
                  <div className="space-y-6">
                    <p className="text-white text-[20px] md:text-[20px] leading-relaxed font-velora-studio">
                      We collaborate with founders to design products that attract investors, go from 0→1, and get to market with speed.
                    </p>
                    <div className="space-y-3">
                      <p className="text-white text-[20px] md:text-[18px] leading-relaxed font-velora-studio">
                        €2,815/mo for as much design as you need.
                      </p>
                    </div>
                  </div>
              </div>
            </BounceInFromBottom>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 relative z-10 justify-center">
              <BounceInFromBottom delay={400} duration={500} earlyTrigger={true}>
                <Link href="/15-min" className="group inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full text-base font-velora-studio border border-black/10 button-shadows hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40">
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
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-white/70">2 founders booked a call this week</span>
                </div>
              </div>
            </BounceInFromBottom>
            
            {/* Mini Brand Logos */}
            <BounceInFromBottom delay={700} duration={500} earlyTrigger={true}>
              <div className="w-full flex justify-center mt-6 relative z-10">
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
    <section id="work" className="w-full py-20 px-4 border border-dashed border-white/10">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col gap-16 mb-12">
          {landingImages.slice(0, 3).map((project, i) => (
            <BounceInFromBottom key={i} delay={i * 100} duration={500} earlyTrigger={true}>
              <div className="space-y-6">
                {/* Header with title, description, metric and graph */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-white/70 text-sm md:text-base">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    {/* Metric above graph */}
                    <div className="mb-4 text-right">
                      <span className="text-base md:text-lg font-bold text-white">{project.metric}</span>
                      <span className="text-white/60 text-xs ml-1.5">{project.metricLabel}</span>
                    </div>

                    {/* Graph visualization */}
                    <div className="relative h-20 rounded-lg p-3 overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 800 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: project.graphColor, stopOpacity: 0.6 }} />
                            <stop offset="100%" style={{ stopColor: project.graphColor, stopOpacity: 1 }} />
                          </linearGradient>
                          <clipPath id={`clip-${i}`}>
                            <rect x="0" y="0" width="800" height="100">
                              <animate
                                attributeName="width"
                                from="0"
                                to="800"
                                dur="1.5s"
                                fill="freeze"
                              />
                            </rect>
                          </clipPath>
                        </defs>
                        <g clipPath={`url(#clip-${i})`}>
                          {/* Animated growth line */}
                          <path
                            d={`M 0 ${80 - (i * 5)} Q 200 ${70 - (i * 8)} 400 ${50 - (i * 10)} T 800 ${20 - (i * 5)}`}
                            fill="none"
                            stroke={`url(#gradient-${i})`}
                            strokeWidth="2"
                          />
                          {/* Vertical bars in background - more detailed */}
                          {[...Array(50)].map((_, idx) => {
                            const seed = i * 100 + idx;
                            const barY = 90 - ((seed * 9301 + 49297) % 233 / 233) * 50;
                            const barHeight = ((seed * 8121 + 28411) % 233 / 233) * 50 + 5;
                            return (
                              <rect
                                key={idx}
                                x={idx * 16}
                                y={barY}
                                width="1.5"
                                height={barHeight}
                                fill="white"
                                opacity="0.08"
                              />
                            );
                          })}
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="group border border-white/20 p-1 rounded-xl hover:border-white/40 transition-all duration-300">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={900}
                    height={600}
                    className="rounded-lg w-full h-auto object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300"
                    priority={i < 2}
                  />
                </div>
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
      name: "Victor Uhl",
      role: "Founder of Ecom Wizards",
      image: "/victor-uhl.avif",
      quote: "Vuk delivered a truly best-in-class experience, going above and beyond to create a stunning final product. He was constantly responsive to feedback and iterated rapidly throughout the entire process, ensuring the design, layout, and animations perfectly matched our vision. We were deeply impressed by the dedication he brought to the project, and we look forward to working with him again in the future!",
      highlight: "delivered a truly best-in-class experience"
    },
    {
      name: "Everett Lynn",
      role: "Founder & CEO at Amenify",
      image: "/images/2.avif",
      quote: "In a space where everything is done online not having a great digital storefront was a pain point within my business. Unlocking the lead capture a website hold has been something I greatly appreciate now that it's bringing in leads to my business. Loved working with Vuk, super quick delivery!",
      highlight: "Unlocking the lead capture a website hold has been something I greatly appreciate"
    },
    {
      name: "Beryl Stafford",
      role: "Founder at Bobo's Oat Bars",
      image: "/images/1.avif",
      quote: "I've been really happy with Vuk. From the start, he was super professional and easy to work with. What stood out most was how open he was to feedback, which made the whole process collaborative and stress-free. Overall, he made the entire experience smooth, enjoyable, and delivered exactly what we needed.",
      highlight: "super professional and easy to work with"
    }
  ]

  return (
    <section id="testimonials" className="w-full py-16 px-4 border border-white/10">
      <div className="max-w-6xl mx-auto">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="text-center mb-12">
            <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-velora-studio">TESTIMONIALS</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-velora-studio">
              WHAT OUR CLIENTS THINK
            </h2>
          </div>
        </BounceInFromBottom>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <BounceInFromBottom key={index} delay={index * 100} duration={500} earlyTrigger={true}>
              <div className="h-full flex flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1 font-onest">{testimonial.name}</h3>
                    <p className="text-white/60 text-sm font-onest">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed flex-grow font-onest font-light" style={{ fontSize: '14px' }}>
                  {testimonial.quote.split(testimonial.highlight)[0]}
                  <span className="font-bold text-white">{testimonial.highlight}</span>
                  {testimonial.quote.split(testimonial.highlight)[1]}
                </p>
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
    <section className="w-full py-12 px-4 border border-dashed border-white/10">
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
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaBolt className="w-3 h-3" />
            <span>web apps</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaBook className="w-3 h-3" />
            <span>branding</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaDesktop className="w-3 h-3" />
            <span>websites</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaSlidersH className="w-3 h-3" />
            <span>user experience</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaStar className="w-3 h-3" />
            <span>marketing</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaChartBar className="w-3 h-3" />
            <span>pitch decks</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaMobile className="w-3 h-3" />
            <span>mobile apps</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <SiFramer className="w-3 h-3" />
            <span>framer</span>
          </div>
          <div className="border border-gray-600 text-gray-200 px-3 py-1.5 rounded-full text-xs font-velora-studio flex items-center gap-1.5" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
            <FaGlobe className="w-3 h-3" />
            <span>webflow</span>
          </div>
          </div>
        </BounceInFromBottom>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="w-full py-20 px-4 border border-white/10 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-orange-800/30 to-orange-600/20"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
          <div className="text-center space-y-8">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to <span className="text-white">generate</span> more{" "}
              <span className="text-white">users,</span>
              <br />
              <span className="text-white">revenue</span>{" "}
              <span className="text-white/60">&</span>{" "}
              <span className="text-white">attention</span>?
            </h2>
            
            {/* Subtext */}
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stop guessing what's wrong with your site. We'll give you a free audit that shows you the exact areas to improve for higher conversions.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Link 
                href="/15-min" 
                className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-velora-studio hover:bg-white/90 transition-all duration-200 hover:scale-105"
              >
                <span>Yes, I'm Ready To Scale</span>
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </BounceInFromBottom>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="w-full py-16 px-4 border border-white/10">
      <BounceInFromBottom delay={0} duration={500} earlyTrigger={true}>
        <h2 className="text-white text-2xl md:text-3xl font-velora-studio mb-8 text-center">Got Questions?</h2>
      </BounceInFromBottom>
      <BounceInFromBottom delay={100} duration={400} earlyTrigger={true}>
        <p className="text-zinc-400 text-sm mb-8 text-center max-w-2xl mx-auto">Here's what our clients usually ask us</p>
      </BounceInFromBottom>
      
      <div className="space-y-3 max-w-4xl mx-auto">
        <BounceInFromBottom delay={150} duration={400} earlyTrigger={true}>
          <details className="group border border-white/10 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.4), rgba(9, 9, 9, 0.4))'}}>
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
          <details className="group border border-white/10 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.4), rgba(9, 9, 9, 0.4))'}}>
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
          <details className="group border border-white/10 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.4), rgba(9, 9, 9, 0.4))'}}>
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
          <details className="group border border-white/10 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.4), rgba(9, 9, 9, 0.4))'}}>
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
          <details className="group border border-white/10 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.4), rgba(9, 9, 9, 0.4))'}}>
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
          <details className="group border border-white/10 rounded-lg" style={{background: 'linear-gradient(to bottom, rgba(15, 15, 15, 0.4), rgba(9, 9, 9, 0.4))'}}>
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
