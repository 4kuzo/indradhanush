"use client"

import React from "react"
import Image from "next/image"

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/album/0zRMd1AFCrSGrmdshoyce5", icon: "🎵" },
  { name: "Apple Music", url: "https://music.apple.com/us/album/indradhanush/1879181627", icon: "🍎" },
  { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_mgBNvQieO2sRmQC50pTpVesSa6PDdZdCI&si=F8ZxGZyBP8pizApZ", icon: "📺" },
  { name: "SoundCloud", url: "https://soundcloud.com/akuzo/sets/indradhanush", icon: "☁️" },
  { name: "Deezer", url: "https://www.deezer.com/en/album/923349221", icon: "🎧" },
  { name: "Tidal", url: "https://tidal.com/album/500639127", icon: "🌊" },
  { name: "iTunes", url: "https://music.apple.com/us/album/indradhanush/1879313042", icon: "💫" },
]

export function HeroSection() {
  return (
    <section id="music" className="relative min-h-screen flex items-center justify-center px-6 py-28 md:py-36 overflow-hidden bg-black">
      {/* Premium Multi-colored Background Glows (Indradhanush Concept) */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-orange-600 via-pink-600 to-purple-800 opacity-20 blur-[100px] md:blur-[160px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse duration-[10s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-blue-600 via-emerald-600 to-yellow-600 opacity-15 blur-[100px] md:blur-[140px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* Left: Album Cover Art container */}
        <div className="relative group shrink-0 w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] aspect-square">
          {/* Outer Rotating/Pulsing Rainbow Ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-40 blur-md group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient" />
          
          {/* Outer Border Frame */}
          <div className="absolute inset-0 bg-[#0c0c0c] rounded-2xl p-3 border border-white/10 group-hover:border-white/20 transition-colors duration-500 flex items-center justify-center shadow-2xl">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
              <Image
                src="/album art mockup1.png"
                alt="Indradhanush Album Cover"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              {/* Sleek overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Right: Title & Polished Streaming Pills */}
        <div className="w-full max-w-xl flex flex-col justify-center">
          <span className="text-xs uppercase tracking-[0.5em] text-[#f05a28] font-bold mb-3 block text-center lg:text-left">
            AKUZO Presents
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center lg:text-left text-white uppercase mb-4 tracking-tight leading-none" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
            INDRADHANUSH
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base text-center lg:text-left mb-8 max-w-md lg:mx-0 mx-auto leading-relaxed">
            7 Colors. 7 Truths. Explore the spectrum of sounds, stories, and emotions in the official album release.
          </p>

          <h3 className="text-xs uppercase tracking-[0.2em] text-white/50 text-center lg:text-left mb-4 font-semibold">
            Listen Now on Your Favorite Platform:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 rounded-xl px-5 py-4 text-white text-sm font-semibold tracking-wider shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg group-hover:scale-115 transition-transform duration-300">{platform.icon}</span>
                  <span>{platform.name}</span>
                </div>
                <span className="text-xs text-white/40 group-hover:text-[#f05a28] group-hover:translate-x-1 transition-all duration-300">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
