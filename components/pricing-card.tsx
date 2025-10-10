"use client"

import { Check } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

interface PricingFeature {
  text: string
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: PricingFeature[]
  bonusText: string
  ctaText: string
  onCtaClick: () => void
  availabilityText: string
  isPopular?: boolean
  delay?: number
}

export function PricingCard({
  title,
  price,
  description,
  features,
  bonusText,
  ctaText,
  onCtaClick,
  availabilityText,
  isPopular = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <div
      className="p-6 md:p-8 relative hover-lift overflow-hidden rounded-xl"
      style={{
        background: "linear-gradient(145deg, rgba(39, 39, 42, 0.4) 0%, rgba(39, 39, 42, 0.1) 100%)",
        boxShadow: "0px 4px 5px -3px rgba(0, 0, 0, 1), 0px 8px 10px -6px rgba(0, 0, 0, 1), 0px 1px 0px 1px rgba(0, 0, 0, 1)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-500/5 rounded-full blur-xl"></div>

      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 z-20">MOST POPULAR</div>
      )}

      <div className="mb-6 relative z-10 mt-4">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <div className="flex items-baseline mt-4">
          <p className="text-2xl md:text-4xl font-bold">{price}</p>
          <span className="ml-2 text-zinc-400 text-sm md:text-base">one-time investment</span>
        </div>
        <p className="text-xs md:text-sm text-zinc-400 mt-2">{description}</p>
      </div>

      <ul className="mb-6 md:mb-8 space-y-3 md:space-y-4 text-xs md:text-sm relative z-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 md:h-5 md:w-5 text-yellow-400 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-2 mb-6 text-xs md:text-sm bg-white/5 p-3 rounded-lg relative z-10">
        <strong className="text-yellow-400">BONUS:</strong> {bonusText}
      </div>

      <AnimatedButton
        size="lg"
        animation="shimmer"
        className="mt-auto w-full md:w-auto bg-white text-black hover:bg-zinc-200 rounded-full relative z-10"
        style={{
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
        }}
        onClick={onCtaClick}
      >
        {ctaText}
      </AnimatedButton>

      <p className="text-xs text-center mt-2 text-zinc-400 relative z-10">{availabilityText}</p>
    </div>
  )
}
