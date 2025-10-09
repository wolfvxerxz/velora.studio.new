"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  FaDesktop, 
  FaPalette, 
  FaRocket, 
  FaPlay, 
  FaMobile, 
  FaCode, 
  FaCube, 
  FaFileAlt 
} from "react-icons/fa"

export function ServicesSection() {
  const services = [
    {
      icon: FaDesktop,
      title: "Website Design",
      description: "Custom, fast, SEO‑friendly marketing sites that convert.",
      image: "/landingpages/extsy.webp"
    },
    {
      icon: FaPalette,
      title: "Brand identity",
      description: "Visual identity, strategy and guidelines that scale across touchpoints.",
      image: "/images/brand identity.png"
    },
    {
      icon: FaRocket,
      title: "Admin Dashboards",
      description: "Data‑rich admin dashboards with clean UX and real‑time states.",
      image: "/landingpages/final.webp"
    },
    {
      icon: FaPlay,
      title: "Motion Design",
      description: "Launch animations, product loops, micro‑interactions and logo reveals.",
      image: "/images/motion.gif"
    },
    {
      icon: FaMobile,
      title: "Product design",
      description: "End‑to‑end product UX/UI for web and mobile—flows and UI kits.",
      image: "/landingpages/lumina-app.webp"
    },
    {
      icon: FaCode,
      title: "No-code development",
      description: "Ship in days with Framer/Webflow + automation.",
      image: "/images/framer.avif"
    },
    {
      icon: FaCube,
      title: "3D Design",
      description: "High‑impact 3D visuals, product renders and hero scenes.",
      image: "/images/3d.webm",
      isVideo: true
    },
    {
      icon: FaFileAlt,
      title: "Pitch Decks & Collateral",
      description: "Investor decks, one‑pagers, sales collateral and brand kits.",
      image: "/images/pitchdeck.png"
    }
  ]

  return (
    <section className="py-20 border border-dashed border-white/10">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Header and CTA (Smaller width) */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-velora-studio">SERVICES</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-velora-studio">
                Our Services
              </h2>
              <div>
                <p className="text-white text-base mb-1">
                We don't just deliver, we redefine what design, development, and marketing can do together.                </p>
                <p className="text-white text-base font-velora-studio mb-4">
                Partnering with founders across
                AI, Banking, Crypto, Health, Gaming, Sports, Beverages, Education, Ecommerce, and Lifestyle.                </p>
                
              </div>
            </div>
            
            <Link 
              href="/15-min"
              className="group inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-lg font-velora-studio border border-black/10 button-shadows hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>Schedule Call</span>
              <div className="ml-2 flex items-center gap-1">
                <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">⌘</div>
                <div className="w-4 h-4 bg-black/10 rounded text-xs flex items-center justify-center font-mono">K</div>
              </div>
            </Link>
          </div>

          {/* Right Column - Services Grid (Larger width) */}
          <div className="lg:col-span-8 grid grid-cols-2">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index}>
                  <div className="border border-white/10 h-full card-shadows" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
                    {/* Visual - Image First */}
                    <div className={`relative overflow-hidden ${service.title === "Product design" || service.title === "Pitch Decks & Collateral" ? 'bg-black' : 'bg-white/5'}`}>
                      {service.isVideo ? (
                        <video
                          src={service.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-48 object-cover"
                        />
                      ) : (
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={400}
                          height={250}
                          className={`w-full h-48 ${service.title === "Motion Design" || service.title === "Product design" || service.title === "Pitch Decks & Collateral" ? 'object-contain' : service.title === "Website Design" ? 'object-cover object-top' : 'object-cover'}`}
                        />
                      )}
                    </div>
                    
                    {/* Text and Icon Section */}
                    <div className="flex items-start gap-3 p-6">
                      {/* Small Icon */}
                      <div className="flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        {/* Title */}
                        <h3 className="text-white text-lg font-bold mb-2 font-velora-studio">
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/60 text-sm leading-relaxed font-velora-studio">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}