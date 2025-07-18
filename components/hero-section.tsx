"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./ui/animated-section"
import { GradientBlurFooter } from "./ui/gradient-blur-footer"

export function HeroSection() {
  return (
    <section className="pt-24 sm:pt-28 md:pt-32 pb-16 bg-[#0f0f0f] relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-[#0f0f0f]"></div>
      
      {/* Pixelated background effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-repeat"></div>
      
      <GradientBlurFooter height={96} />
      <div className="mx-auto px-4 flex flex-col items-center relative">
        <div className="w-full max-w-[800px] flex flex-col items-center">
          
          {/* Testimonial avatars */}
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 flex flex-col sm:flex-row items-center gap-2 mb-6 border border-white/10 shadow-lg max-w-full">
            <div className="flex -space-x-2 mr-2 flex-shrink-0">
              <img 
                src="/images/1.avif" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
              />
              <img 
                src="/images/2.avif" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
              />
              <img 
                src="/images/3.avif" 
                alt="Client" 
                className="w-8 h-8 rounded-full border-2 border-[#0f0f0f] object-cover"
              />
            </div>
            <span className="text-gray-300 text-sm min-w-0 break-words whitespace-normal text-center sm:text-left">
              38+ startups & founders chose velora.studio
            </span>
          </div>
          
         
          {/* Main heading */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-center mb-6 gradient-text">
            High-Converting Websites<br />
             for Startups & SaaS
          </h1>
          
          {/* Subheading */}
          <p className="text-gray-400 text-base sm:text-xl max-w-[600px] text-center mb-12">
            We craft high-converting websites that help startups, founders, and SaaS companies attract and convert their ideal customers.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <Link
                href="/15-min"
                className="group px-8 py-4 rounded-full bg-white text-black text-lg font-medium hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                Get Your Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="https://www.figma.com/proto/QbXz89f7qHCP2kfFqM6eEV/Our-Work---velora.studio?node-id=9-2&p=f&t=SrwUknsZjSSmcgwX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                className="px-8 py-4 text-lg rounded-full bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Work
              </Link>
            </div>
            
            {/* Spots available */}
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Only 2 spots left this month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 