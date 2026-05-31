"use client"

import React from "react"
import { Calendar, Globe, Sparkles } from "lucide-react"

export function AboutArtist() {
  const profileDetails = [
    { label: "Based In", value: "Dallas, Texas, USA", icon: Globe },
    { label: "Profession", value: "Music Artist, Rapper & Producer", icon: Sparkles },
    { label: "Active Since", value: "2022 - Present", icon: Calendar },
  ]

  return (
    <section id="about" className="py-24 px-6 border-t border-white/10 bg-gradient-to-b from-[#050505] to-black relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-orange-600/5 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-xs tracking-[0.4em] uppercase text-[#f05a28] text-center mb-4 font-bold">
          Biography
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-center text-white uppercase mb-16" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          About The Artist
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Panel: Profile Fact Sheet Card */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 shadow-inner">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-white/5 pb-4" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
              Personal Profile
            </h4>
            
            <div className="space-y-4">
              {profileDetails.map((detail) => (
                <div key={detail.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-b-0 gap-4">
                  <div className="flex items-center gap-2.5 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    <detail.icon className="w-4 h-4 text-[#f05a28]" />
                    <span>{detail.label}</span>
                  </div>
                  <span className="text-sm font-bold text-white text-right">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Biography Text */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p className="text-lg md:text-xl text-white font-medium">
                <span className="text-[#f05a28] font-bold">AKUZO</span> is a Nepali rapper, songwriter, and producer.
              </p>
              <p>
                Currently based out of Dallas, Texas, Akuzo serves as a pivotal bridge between the traditional storytelling roots of Nepali culture and the modern rhythms of international hip-hop.
              </p>
              <p>
                Since stepping into the professional arena in 2022, Akuzo's songwriting has consistently explored deeply resonant themes of cultural identity, internal resilience, and reflective self-discovery. His tracks appeal globally, speaking powerfully both to Nepali youth back home and the diaspora abroad.
              </p>
              <p>
                Akuzo represents a growing wave of boundary-pushing artists who are blending native vernacular poetry with atmospheric beats—paving a unique pathway for the globalization of Nepali rap.
              </p>
            </div>

            {/* Quote banner */}
            <div className="mt-8 p-4 border-l-2 border-[#f05a28] bg-white/[0.01] rounded-r-xl">
              <p className="italic text-white text-xs md:text-sm">
                "An Indradhanush only shows up after the rain. My music is the spectrum of colors that followed mine."
              </p>
              <span className="block text-[10px] uppercase tracking-widest text-[#f05a28] font-bold mt-2">
                — AKUZO
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
