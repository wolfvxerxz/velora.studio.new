"use client"

import Image from "next/image"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Vuk",
      role: "Founder & CEO",
      image: "/images/team/Vuk.jpg"
    },
    {
      name: "Yenlik",
      role: "Designer",
      image: "/images/team/Yenlik.jpeg"
    },
    {
      name: "Peter",
      role: "Motion Designer",
      image: "/images/team/Peter.jpeg"
    }
  ]

  return (
    <section id="team" className="py-16 border border-dashed border-white/10">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-velora-studio">ABOUT</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-velora-studio">
            MEET THE TEAM AT VELORA STUDIO
          </h2>
        </div>

        {/* Team Grid */}
        <div className="max-w-[550px] mx-auto mb-8">
          <div className="flex justify-center gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-left w-44">
                <div className="mb-2 overflow-hidden rounded-lg" style={{boxShadow: '0px 4px 5px -3px rgba(0, 0, 0, 1), 0px 8px 10px -6px rgba(0, 0, 0, 1), 0px 1px 0px 1px rgba(0, 0, 0, 1)'}}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={180}
                    height={180}
                    loading="lazy"
                    quality={80}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <h3 className="text-white text-base font-bold mb-0.5 font-velora-studio">{member.name}</h3>
                <p className="text-white/40 text-xs font-velora-studio">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Text */}
        <div className="max-w-[550px] mx-auto">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 mb-0.5">
                <Image
                  src="/logo-v.svg"
                  alt="Velora Studio Logo"
                  width={24}
                  height={24}
                  loading="lazy"
                  className="w-6 h-6"
                />
                <span className="text-white text-lg font-bold font-velora-studio">
                  velora.studio
                </span>
              </div>
              <p className="text-white/40 text-[10px] font-velora-studio ml-8">EST. 2024</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-white/60 text-sm leading-snug font-velora-studio">
              Velora Studio is a <span className="text-white font-bold">design partner for founders</span> building the next generation of digital products. We specialize in creating beautiful, conversion-focused designs that help startups go from 0→1 and scale with confidence.
            </p>
            <p className="text-white/60 text-sm leading-snug font-velora-studio">
              Our <span className="text-white font-bold">small but mighty team</span> is built for speed and quality: unlimited design requests, fast turnaround times, end-to-end execution from wireframes to final assets, and we stay with you through launch and beyond.
            </p>
            <p className="text-white/60 text-sm leading-snug font-velora-studio">
              We believe in measurable results and long-term partnerships. Our mission is simple: <span className="text-white font-bold">help you ship faster, convert better, and build a brand people love.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

