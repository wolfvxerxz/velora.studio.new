import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Ready to elevate your digital presence?</h2>
          <p className="text-gray-400 mb-10 text-lg">Let's discuss how we can transform your vision into reality.</p>

          <div className="flex justify-center">
            <Link
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-black text-sm hover:bg-gray-200 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>

          <div className="mt-8 text-gray-400">
            Or email us directly at{" "}
            <a href="mailto:contact@vuk.agency" className="text-white hover:underline">
              contact@vuk.agency
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
