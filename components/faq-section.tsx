import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-16 border-t border-gray-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="w-full flex justify-center px-4">
        <div className="w-full" style={{ maxWidth: "768px" }}>
          <h2 className="text-xl font-normal mb-6 text-black dark:text-white transition-colors duration-300">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 dark:text-gray-400 mb-12 text-sm transition-colors duration-300">
            Find answers to common questions about our design services, process, and collaboration methods.
          </p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-zinc-800">
              <AccordionTrigger className="text-black dark:text-white hover:no-underline">
                What is included in the unlimited design subscription?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-400">
                Our unlimited design subscription includes UI/UX design, website design, brand identity, graphic design, and Framer development. 
                You can request as many designs as you need, and we'll work on them one at a time with unlimited revisions until you're completely satisfied.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-zinc-800">
              <AccordionTrigger className="text-black dark:text-white hover:no-underline">
                How fast will I receive my designs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-400">
                We typically deliver the first design concept within 24-48 hours of receiving your request. 
                Revisions are usually completed within 24 hours. Complex projects may take longer, but we'll always 
                keep you updated on the progress.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-zinc-800">
              <AccordionTrigger className="text-black dark:text-white hover:no-underline">
                Can I pause or cancel my subscription?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-400">
                Yes, you can pause or cancel your subscription at any time. There are no long-term contracts or 
                commitments. Just let us know before your next billing cycle, and we'll take care of it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-zinc-800">
              <AccordionTrigger className="text-black dark:text-white hover:no-underline">
                How do we collaborate on projects?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-400">
                We use Figma for design collaboration and communication. You'll have access to your project files 
                and can leave comments directly on the designs. We also use email for regular updates and can 
                schedule video calls when needed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-zinc-800">
              <AccordionTrigger className="text-black dark:text-white hover:no-underline">
                What if I need a custom project?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-400">
                For custom projects or specific requirements, we offer our "0 → 1 Design" service with custom quotes. 
                This is perfect for comprehensive brand identities, complex web applications, or any specialized design needs. 
                Contact us to discuss your project and get a custom quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-zinc-800">
              <AccordionTrigger className="text-black dark:text-white hover:no-underline">
                Do you offer a trial period?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-400">
                Yes, we offer a trial week with our subscription plan. This allows you to experience our design process 
                and quality firsthand with no strings attached. If you're not satisfied, you can cancel before the full 
                subscription begins.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 