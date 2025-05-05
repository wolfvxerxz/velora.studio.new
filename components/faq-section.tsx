import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "./ui/animated-section"

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "640px" }}>
          <AnimatedSection animation="fadeUp">
            <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={100}>
            <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
              Find answers to common questions about our design services, process, and collaboration methods.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={200}>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What is your design process like?</AccordionTrigger>
                <AccordionContent>
                  Our design process is collaborative and iterative. We start with a discovery phase to understand your
                  needs, create initial concepts, refine based on feedback, and deliver the final designs. We keep you
                  involved throughout the process to ensure the end result matches your vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                <AccordionContent>
                  Project timelines vary depending on scope and complexity. A typical website design project takes 2-4
                  weeks, while more complex projects may take 6-8 weeks. We'll provide a detailed timeline during our
                  initial consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer ongoing support after launch?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide ongoing support and maintenance services. We can help with updates, optimizations, and
                  any technical issues that arise after launch. We also offer training to help your team manage the
                  website effectively.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What makes your design approach different?</AccordionTrigger>
                <AccordionContent>
                  We focus on creating designs that not only look beautiful but also drive results. Our approach combines
                  aesthetic appeal with user experience best practices and conversion optimization strategies. We also
                  emphasize clear communication and collaboration throughout the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How do you handle revisions and feedback?</AccordionTrigger>
                <AccordionContent>
                  We have a structured feedback process that includes multiple revision rounds. We use collaborative tools
                  to gather and implement your feedback efficiently. Our goal is to ensure you're completely satisfied
                  with the final result.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
} 