"use client"

import React, { useState, useEffect, useRef } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Music, ListMusic } from "lucide-react"

const tracks = [
  { id: 1, title: "Indradhanush", artist: "AKUZO", features: "w/ Bahun & Tracy", duration: "3:10", audioSrc: "", lyrics: [
    "Colors fading in the sky...",
    "Underneath the pouring rain, we fly",
    "Sapana ko sansar ma harayo yo maan",
    "Timro tyo muskan, jaba hunchha din sunsan",
    "Indradhanush ka sataranga haru...",
    "Living through the storm, looking for the light",
    "We rise above the grey into the bright."
  ]},
  { id: 2, title: "Andhakaar", artist: "AKUZO", features: "", duration: "2:35", audioSrc: "", lyrics: [
    "Lost in the shadow, finding my way...",
    "Every single word that we didn't say",
    "Andhakaar ko chhaya bhitra kheldai",
    "Ujyalo ko kiran ma aaja rami",
    "Out of the dark, into the frame."
  ]}
]

export function MediaPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(30) // dummy start progress
  const [volume, setVolume] = useState(80)
  const [lyricIndex, setLyricIndex] = useState(0)
  const currentTrack = tracks[currentTrackIndex]

  // Simulate progress bar movement and lyrics scrolling when playing
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext()
            return 0
          }
          return prev + 1
        })
        
        // Change lyrics every 5 seconds
        setLyricIndex((prev) => (prev + 1) % currentTrack.lyrics.length)
      }, 1000)
    }
    return () => clearInterval(timer)
  }, [isPlaying, currentTrackIndex])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
    setProgress(0)
    setLyricIndex(0)
  }

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length)
    setProgress(0)
    setLyricIndex(0)
  }

  return (
    <section className="py-24 px-6 border-t border-white/10 bg-gradient-to-b from-black to-[#050505] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#f05a28]/10 to-transparent blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-xs tracking-[0.4em] uppercase text-[#f05a28] text-center mb-4 font-bold">
          Featured Preview
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-center text-white uppercase mb-12" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          Experience the Sound
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Animated Audio Controller & Equalizer */}
          <div className="lg:col-span-7 bg-[#0c0c0c]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Header info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#f05a28]/10 flex items-center justify-center border border-[#f05a28]/20">
                  <Music className="w-5 h-5 text-[#f05a28]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-wide">AKUZO Radio</h4>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-widest">Streaming Preview</p>
                </div>
              </div>

              {/* Dynamic Equalizer icon */}
              <div className="flex items-end gap-0.5 h-6">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <span
                    key={bar}
                    className={`w-1 rounded-t-full bg-[#f05a28] transition-all duration-300 ${
                      isPlaying ? "animate-pulse" : "h-1"
                    }`}
                    style={{
                      height: isPlaying ? `${Math.floor(Math.random() * 20) + 4}px` : "3px",
                      animationDelay: `${bar * 0.15}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Middle: Title & Scrubber */}
            <div className="my-6">
              <h5 className="text-2xl font-black text-white tracking-wide" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                {currentTrack.title}
              </h5>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-6">
                {currentTrack.artist} {currentTrack.features && <span className="text-[#f05a28] font-semibold">{currentTrack.features}</span>}
              </p>

              {/* Progress Scrubber */}
              <div className="space-y-2">
                <div 
                  className="relative w-full h-1.5 bg-white/10 rounded-full cursor-pointer overflow-hidden group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const clickX = e.clientX - rect.left
                    const percentage = Math.floor((clickX / rect.width) * 100)
                    setProgress(percentage)
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-[#f05a28] rounded-full group-hover:bg-[#ff6c3b] transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono tabular-nums tracking-widest">
                  <span>0:52</span>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
              {/* Skip Back / Play / Skip Forward */}
              <div className="flex items-center gap-5">
                <button onClick={handlePrev} className="text-muted-foreground hover:text-white transition-colors" aria-label="Previous track">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button
                  onClick={handlePlayPause}
                  className="w-12 h-12 rounded-full bg-[#f05a28] hover:bg-[#ff6c3b] hover:scale-105 active:scale-95 transition-all text-white flex items-center justify-center shadow-lg"
                  aria-label={isPlaying ? "Pause track" : "Play track"}
                >
                  {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                </button>
                <button onClick={handleNext} className="text-muted-foreground hover:text-white transition-colors" aria-label="Next track">
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-3 w-28 md:w-36">
                <Volume2 className="w-4 h-4 text-muted-foreground shrink-0" />
                <div 
                  className="relative flex-1 h-1 bg-white/10 rounded-full cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const clickX = e.clientX - rect.left
                    const percentage = Math.floor((clickX / rect.width) * 100)
                    setVolume(percentage)
                  }}
                >
                  <div
                    className="absolute top-0 left-0 h-full bg-white/60 rounded-full"
                    style={{ width: `${volume}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Sleek Live Lyrics display */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0c0c0c] to-black border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-semibold">
                <ListMusic className="w-4 h-4 text-[#f05a28]" />
                <span>Lyrics Overlay</span>
              </div>

              {/* Lyrics Scroll Box */}
              <div className="space-y-4 my-2 overflow-hidden max-h-[220px]">
                {currentTrack.lyrics.map((lyric, idx) => {
                  const isActive = idx === lyricIndex
                  return (
                    <p
                      key={idx}
                      className={`text-sm md:text-base tracking-wide transition-all duration-500 ease-in-out origin-left ${
                        isActive
                          ? "text-[#f05a28] font-bold scale-102 blur-0 translate-x-1"
                          : "text-muted-foreground/40 blur-[0.5px] scale-98 hover:text-muted-foreground/60 cursor-pointer"
                      }`}
                      onClick={() => setLyricIndex(idx)}
                    >
                      {lyric}
                    </p>
                  )
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest text-muted-foreground/50">
              * Simulated player. Click play button to listen.
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
