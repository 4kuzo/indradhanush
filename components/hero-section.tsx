"use client"

import React from "react"
import Image from "next/image"

const platforms = [
  { name: "Spotify", url: "https://open.spotify.com/album/0zRMd1AFCrSGrmdshoyce5" },
  { name: "Apple Music", url: "https://music.apple.com/us/album/indradhanush/1879181627" },
  { name: "YouTube Music", url: "https://music.youtube.com/playlist?list=OLAK5uy_mgBNvQieO2sRmQC50pTpVesSa6PDdZdCI&si=F8ZxGZyBP8pizApZ" },
  { name: "SoundCloud", url: "https://soundcloud.com/akuzo/sets/indradhanush" },
  { name: "Deezer", url: "https://www.deezer.com/en/album/923349221" },
  { name: "Tidal", url: "https://tidal.com/album/500639127" },
  { name: "iTunes", url: "https://music.apple.com/us/album/indradhanush/1879313042" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-black">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center md:items-center justify-center gap-12 lg:gap-24">
        {/* Left: Album Cover */}
        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] shrink-0 border border-white/10">
          <Image
            src="/album art mockup1.png"
            alt="Indradhanush Album Cover"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right: Title & Links */}
        <div className="w-full max-w-sm flex flex-col">
          <h1 className="text-3xl md:text-4xl font-black text-center text-white uppercase mb-6 tracking-wide" style={{ fontFamily: 'Impact, sans-serif' }}>
            INDRADHANUSH
          </h1>

          <div className="flex flex-col space-y-3">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#f05a28] hover:bg-[#d94d1c] transition-colors text-white text-center font-bold py-3 text-lg lg:text-xl"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
