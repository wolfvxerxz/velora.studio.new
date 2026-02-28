'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { FaXTwitter, FaLinkedin, FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6"

export function SimpleFooter() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let position = 0
    const speed = 0.5 // pixels per frame
    
    // Get the width of one set of items (half of total width since we have duplicates)
    const itemWidth = scrollContainer.scrollWidth / 2

    function animate() {
      if (!scrollContainer) return
      position -= speed
      
      // Use modulo to create seamless loop without visible reset
      if (Math.abs(position) >= itemWidth) {
        position = position % itemWidth
      }
      
      scrollContainer.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <footer className="w-full">
      <div className="w-full max-w-6xl mx-auto px-4 pb-8">
        <div className="w-full border-t border-l border-r border-dashed border-white/10 overflow-hidden rounded-b-3xl" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
          {/* Footer Content */}
          <div className="w-full px-8 pt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left Side - Logo, Description, CTA */}
          <div className="max-w-md">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo-v.svg" alt="Velora Logo" width={50} height={50} />
              <span className="text-white font-velora-studio text-2xl font-bold">velora studio</span>
            </div>
            
            {/* Description */}
            <p className="text-white/60 text-base mb-4 leading-relaxed font-velora-studio">
              Scale your business with ease.<br></br>
              Over 38+ startups trusted us<br></br>
              and increased their revenue!


            </p>
          
            
            {/* CTA Button */}
                      <Link 
                        href="/15-min"
                        className="group inline-flex items-center justify-center bg-white text-black px-8 py-3 rounded-full text-base font-velora-studio border border-black/10 button-shadows hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                      >
              <span>Book a 30-min call</span>
              <div className="ml-2 flex items-center gap-1">
                <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">⌘</div>
                <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">K</div>
              </div>
            </Link>
          </div>
          
          {/* Right Side - Social Media */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-white text-xl font-velora-studio font-bold mb-4">Social Media</h3>
            <div className="flex items-center gap-4">
              <a href="https://x.com/veloraxstudio" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="X (Twitter)">
                <FaXTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/velorastudio/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/studio.velora/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://t.me/vukkm" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Telegram">
                <FaTelegram className="w-6 h-6" />
              </a>
              <a href="https://wa.me/message/CRWTXVTJ2LCJO1" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Big Scrolling Text - Below Content */}
      <div className="w-full overflow-hidden py-12">
        <div ref={scrollRef} className="flex whitespace-nowrap" style={{ willChange: 'transform' }}>
          {/* First set */}
          {[...Array(10)].map((_, i) => (
            <span 
              key={`first-${i}`} 
              className="text-[180px] md:text-[280px] font-black text-white/5 px-16 font-velora-studio"
            >
              velora.studio
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(10)].map((_, i) => (
            <span 
              key={`second-${i}`} 
              className="text-[180px] md:text-[280px] font-black text-white/5 px-16 font-velora-studio"
            >
              velora.studio
            </span>
          ))}
        </div>
      </div>
      </div>
      </div>
    </footer>
  )
}
