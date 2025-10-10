"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [step2Animation, setStep2Animation] = useState(0)

  // Loop animation for Step 2
  useEffect(() => {
    const interval = setInterval(() => {
      setStep2Animation(prev => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 border border-dashed border-white/10">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-2 font-velora-studio">STARTING IS EASY</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-velora-studio">HOW DOES IT WORK?</h2>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Step 1 */}
          <div 
            className="text-center cursor-pointer group"
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="mb-6 relative">
              <div className="w-full h-64 rounded-2xl border border-white/10 p-6 flex items-center justify-center transition-all duration-300" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)', boxShadow: '0px 4px 5px -3px rgba(0, 0, 0, 1), 0px 8px 10px -6px rgba(0, 0, 0, 1), 0px 1px 0px 1px rgba(0, 0, 0, 1)'}}>
                <div className="relative">
                  {/* Animated Video Call Interface */}
                  <div className="relative">
                    {/* Video call screens with animation */}
                    <div className="relative w-80 h-56 mb-4">
                      {/* Left Screen - Girl */}
                      <div className={`absolute left-2 top-8 w-40 h-32 rounded-lg border-2 border-white/20 transition-all duration-500 overflow-hidden ${hoveredStep === 1 ? 'transform rotate-[-8deg] scale-110 z-10' : 'transform rotate-[-3deg] z-10'}`}>
                        <Image
                          src="/images/step1/girl.png"
                          alt="Girl in video call"
                          width={160}
                          height={128}
                          loading="lazy"
                          quality={75}
                          className="w-full h-full object-cover rounded-md"
                        />
                        {/* Cal.com badge above girl's head */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 text-black text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                          Cal.com
                        </div>
                      </div>

                      {/* Right Screen - Boy */}
                      <div className={`absolute right-2 top-6 w-40 h-32 rounded-lg border-2 border-white/20 transition-all duration-500 overflow-hidden ${hoveredStep === 1 ? 'transform rotate-[8deg] scale-110 z-10' : 'transform rotate-[3deg] z-10'}`}>
                        <Image
                          src="/images/step1/boy.png"
                          alt="Boy in video call"
                          width={160}
                          height={128}
                          loading="lazy"
                          quality={75}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </div>

                    {/* Zoom Control Bar - Below Images */}
                    <div className={`flex justify-center transition-all duration-300 ${hoveredStep === 1 ? 'scale-110' : ''}`}>
                      <Image
                        src="/images/step1/Zoom bar.png"
                        alt="Zoom control bar"
                        width={200}
                        height={40}
                        loading="lazy"
                        quality={75}
                        className="w-auto h-6 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-white/60 font-bold text-xs mb-2">STEP 1</p>
              <h3 className="text-white text-lg font-velora-studio mb-3">Schedule your intro call</h3>
              <p className="text-white/60 text-sm leading-relaxed font-velora-studio">
                Jump on a quick call with us to discuss your vision, goals, and how we can bring your product to life.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div 
            className="cursor-pointer group"
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="mb-6 relative">
              <div className="w-full h-64 rounded-2xl border border-white/10 p-4 flex items-center justify-center transition-all duration-300 overflow-hidden" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)', boxShadow: '0px 4px 5px -3px rgba(0, 0, 0, 1), 0px 8px 10px -6px rgba(0, 0, 0, 1), 0px 1px 0px 1px rgba(0, 0, 0, 1)'}}>
                <div className="relative w-full max-w-xl h-full flex items-center justify-center">
                  {/* Task Assignment Flow */}
                  <div className="space-y-2 w-full">
                    {/* New Task Card */}
                    <div className={`transition-all duration-500 ${
                      step2Animation >= 0 ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
                    }`}>
                      <div className="rounded-lg p-3 border border-white/10" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
                        <div className="flex items-start gap-2.5">
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="text-white text-xs font-bold mb-0.5 font-velora-studio">Design SaaS Dashboard</h5>
                            <p className="text-white/60 text-[9px] mb-1.5 font-velora-studio">Complete UI/UX design for analytics platform</p>
                            <div className="flex items-center gap-1.5">
                              <span className="bg-white/10 text-white text-[8px] px-1.5 py-0.5 rounded border border-white/20 font-velora-studio">High Priority</span>
                              <span className="bg-white/10 text-white/60 text-[8px] px-1.5 py-0.5 rounded border border-white/20 font-velora-studio">Product Design</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Assignment Action */}
                    <div className={`flex items-center gap-2 py-0.5 transition-all duration-500 ${
                      step2Animation >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}>
                      <div className="flex-1 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        <span className="text-white/60 text-[9px] font-bold font-velora-studio">Assigning to designer...</span>
                      </div>
                      <div className="flex-1 h-px bg-gradient-to-l from-white/40 to-transparent"></div>
                    </div>

                    {/* Designer - Vuk */}
                    <div className={`transition-all duration-700 ${
                      step2Animation >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}>
                      <div className="rounded-lg p-3 border border-white/10" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)'}}>
                        <div className="flex items-center gap-3">
                          <div className="relative flex-shrink-0">
                            <Image
                              src="/images/vuk.avif"
                              alt="Vuk - Product Designer"
                              width={48}
                              height={48}
                              loading="lazy"
                              quality={75}
                              className="w-12 h-12 rounded-full border-2 border-white/20"
                            />
                            {step2Animation >= 2 && (
                              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full border-2 border-[#080808] flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white text-xs font-bold mb-0.5 font-velora-studio">Vuk</h4>
                            <p className="text-white/60 text-[9px] mb-1 font-velora-studio">Senior Product Designer</p>
                            <div className={`flex items-center gap-1 transition-all duration-500 ${
                              step2Animation >= 2 ? 'opacity-100' : 'opacity-0'
                            }`}>
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                              <span className="text-white/60 text-[8px] font-bold font-velora-studio">Available Now</span>
                            </div>
                          </div>
                          <div className={`px-2.5 py-1 rounded-md bg-white/10 border border-white/20 transition-all duration-500 flex-shrink-0 ${
                            step2Animation >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                          }`}>
                            <span className="text-white text-[8px] font-bold font-velora-studio">ASSIGNED</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 text-center">
              <p className="text-white/60 font-bold text-xs mb-2">STEP 2</p>
              <h3 className="text-white text-lg font-velora-studio mb-3">Get matched with your design team</h3>
              <p className="text-white/60 text-sm leading-relaxed font-velora-studio">
                We pair you with top-tier designers who understand your industry and are ready to execute your vision.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div 
            className="text-center cursor-pointer group"
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
          >
            <div className="mb-6 relative">
              <div className="w-full h-64 rounded-2xl border border-white/10 p-6 flex items-center justify-center transition-all duration-300 overflow-hidden" style={{background: 'linear-gradient(to bottom, #0F0F0F, #090909)', boxShadow: '0px 4px 5px -3px rgba(0, 0, 0, 1), 0px 8px 10px -6px rgba(0, 0, 0, 1), 0px 1px 0px 1px rgba(0, 0, 0, 1)'}}>
                <div className="relative w-full h-full flex items-start justify-center gap-12 pt-8">
                  {/* Before Image */}
                  <div className={`relative transition-all duration-700 flex flex-col items-center ${
                    hoveredStep === 3 ? 'translate-x-16 opacity-30 scale-90 z-0' : 'translate-x-0 opacity-100 scale-100 z-10'
                  }`}>
                    <div className="mb-2">
                      <span className="text-white text-sm font-bold font-velora-studio">before</span>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-white/20">
                      <Image
                        src="/images/before.png"
                        alt="Before Design"
                        width={320}
                        height={500}
                        loading="lazy"
                        quality={75}
                        className="w-80 h-auto object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* After Image */}
                  <div className={`relative transition-all duration-700 delay-100 flex flex-col items-center ${
                    hoveredStep === 3 ? '-translate-x-16 opacity-100 scale-110 z-20' : 'translate-x-0 opacity-100 scale-100 z-10'
                  }`}>
                    <div className="mb-2">
                      <span className="text-white text-sm font-bold font-velora-studio">after</span>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-white/20">
                      <Image
                        src="/images/after.png"
                        alt="After Design"
                        width={320}
                        height={500}
                        loading="lazy"
                        quality={75}
                        className="w-80 h-auto object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 text-center">
              <p className="text-white/60 font-bold text-xs mb-2">STEP 3</p>
              <h3 className="text-white text-lg font-velora-studio mb-3">Receive designs & iterate fast</h3>
              <p className="text-white/60 text-sm leading-relaxed font-velora-studio">
                Get fresh designs delivered consistently, with unlimited revisions until you're 100% satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(10deg); }
        }
        .animate-wave {
          animation: wave 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

