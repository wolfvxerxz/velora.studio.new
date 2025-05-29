"use client"

import { AnimatedSection } from "./ui/animated-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can you build my website?",
    answer: "We work fast and smart. Your website will be ready in 14 days or less, including all designs, development, and revisions. Our streamlined process and dedicated team make this possible without cutting corners."
  },
  {
    question: "What happens if the website doesn't perform?",
    answer: "Simple. If your new website isn't converting better than your old one in 90 days, we'll keep working on it for free until it does. Your success is our success."
  },
  {
    question: "Do you use website templates?",
    answer: "Never. Every website is built from scratch based on your specific goals and target audience. While we follow proven conversion strategies, your design will be 100% unique to your brand."
  },
  {
    question: "What does the price include?",
    answer: "Everything you need, with no hidden costs. You get a complete, custom website optimized for conversions, including mobile design, SEO setup, and analytics. Plus unlimited revisions until you love it."
  },
  {
    question: "How will you make my website convert?",
    answer: "We blend proven conversion tactics with real-world data. Every button, headline, and section is strategically designed to turn visitors into customers. Plus, we keep optimizing based on actual user behavior."
  },
  {
    question: "How do we get started?",
    answer: "Just book a free strategy call. We'll chat about your goals and challenges, then create a custom plan to make your website your best sales tool."
  }
]

export function FaqSection() {
  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="container px-4 md:px-6">
        <div className="max-w-[640px] mx-auto">
          <AnimatedSection animation="fadeUp">
            <div className="text-left mb-16">
              <h2 className="text-3xl sm:text-4xl font-medium text-white mb-4">
                Got Questions?
              </h2>
              <p className="text-zinc-400 text-lg">
                Here's what our clients usually ask us
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-zinc-800 rounded-lg px-6 py-2"
                >
                  <AccordionTrigger className="text-white hover:text-white/90 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 