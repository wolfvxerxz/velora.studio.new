"use client"

import { useEffect, useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { WorkSection } from "@/components/work-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className={`flex min-h-screen flex-col bg-black text-white transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <SiteHeader />

      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <WorkSection />
        <WhyUsSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
      </main>

      <SiteFooter />
    </div>
  )
}
