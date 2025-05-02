"use client"

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
import { Header } from "@/components/header"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Header />
      <SiteHeader />

      <main className="flex-1">
        <ScrollAnimation animation="fade">
          <HeroSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up" delay={0.2}>
          <TrustedBySection />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up" delay={0.3}>
          <WorkSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-left">
          <WhyUsSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-right">
          <ServicesSection />
        </ScrollAnimation>

        <ScrollAnimation animation="scale">
          <TestimonialsSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up">
          <PricingSection />
        </ScrollAnimation>

        <ScrollAnimation animation="fade" delay={0.2}>
          <ProcessSection />
        </ScrollAnimation>

        <ScrollAnimation animation="slide-up">
          <FaqSection />
        </ScrollAnimation>
      </main>

      <ScrollAnimation animation="slide-up">
        <SiteFooter />
      </ScrollAnimation>
    </div>
  )
}
