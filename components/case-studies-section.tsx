"use client"

import Image from "next/image"
import { EnhancedStarryBackground } from "@/components/enhanced-starry-background"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

interface CaseStudyProps {
  name: string
  logo: string
  backgroundImage: string
  services: string[]
  industries: string[]
  tools?: string[]
}

const caseStudies: CaseStudyProps[] = [
  {
    name: "Midnight Labs",
    logo: "/abstract-midnight-lab.png",
    backgroundImage: "/cosmic-dawn.png",
    services: ["No-code Development", "Motion Design", "Website", "Branding", "Copywriting"],
    industries: ["Copyright Protection", "Anti-Piracy", "AI-Powered Brand Protection"],
    tools: ["Figma", "Framer", "React"],
  },
  {
    name: "Next Layer",
    logo: "/abstract-layered-design.png",
    backgroundImage: "/fiery-flow.png",
    services: ["No-code Development", "Motion Design", "Website", "Branding", "Copywriting"],
    industries: [
      "Business Intelligence",
      "Enterprise SaaS",
      "Telecommunications",
      "AI-Powered Communications",
      "CPaaS",
    ],
  },
  {
    name: "Quantum Edge",
    logo: "/abstract-quantum-edge.png",
    backgroundImage: "/digital-flow.png",
    services: ["UX/UI Design", "Web Development", "SEO Optimization", "Content Strategy"],
    industries: ["Fintech", "Blockchain", "Digital Banking"],
  },
]

export function CaseStudiesSection() {
  return (
    <EnhancedStarryBackground className="w-full py-12 md:py-16 lg:py-24" density={1.2}>
      <div className="container px-4 md:px-6">
        <AnimatedSection animation="fadeInUp" className="text-center mb-8 md:mb-12">
          <p className="text-zinc-400 mb-2 md:mb-3">Case Study</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Our Success stories
          </h2>
        </AnimatedSection>

        <div className="space-y-6 md:space-y-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={index * 200}
              className="overflow-hidden border border-zinc-800 rounded-2xl md:rounded-3xl bg-black hover-lift"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left side - Logo and background image */}
                <div className="relative h-48 sm:h-56 md:h-auto overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={study.backgroundImage || "/placeholder.svg"}
                      alt={`${study.name} background`}
                      fill
                      className="object-cover animate-scaleIn"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 md:p-8">
                    <div className="relative w-full max-w-[180px] md:max-w-[240px] h-12 md:h-16 animate-fadeIn">
                      <Image src={study.logo || "/placeholder.svg"} alt={study.name} fill className="object-contain" />
                    </div>
                  </div>
                </div>

                {/* Right side - Information */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">{study.name}</h3>

                  {/* Tools icons if available */}
                  {study.tools && (
                    <div className="flex gap-2 mb-4 md:mb-6">
                      {study.tools.map((tool, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 md:w-8 md:h-8 bg-zinc-800 rounded-md flex items-center justify-center animate-fadeIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <span className="text-xs">{tool.charAt(0)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Services */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, i) => (
                        <span
                          key={i}
                          className="text-xs md:text-sm text-white animate-fadeIn"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {service}
                          {i < study.services.length - 1 && " "}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <p className="text-zinc-400 mb-2 md:mb-3 text-sm">Industry</p>
                    <div className="flex flex-wrap gap-2">
                      {study.industries.map((industry, i) => (
                        <Badge
                          key={i}
                          className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs md:text-sm animate-fadeIn hover-bright"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </EnhancedStarryBackground>
  )
}
