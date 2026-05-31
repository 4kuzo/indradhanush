import React from "react"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutArtist } from "@/components/about-artist"
import { GallerySection } from "@/components/gallery-section"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-foreground antialiased selection:bg-[#f05a28]/30 selection:text-white">
      {/* Floating responsive glassmorphic navigation header */}
      <Navigation />

      {/* Music Section: Album Info & Platform badges */}
      <div id="music" className="relative">
        <HeroSection />
      </div>

      {/* Biography Section: Personal details, Birthplace, DOB & History */}
      <AboutArtist />

      {/* Visuals Section: Real Artist Photos and Lightbox */}
      <GallerySection />

      {/* Stay Updated Section: Newsletter Signup */}
      <div id="newsletter" className="relative bg-black py-8">
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-[#f05a28]/5 to-transparent blur-[120px] pointer-events-none" />
        <EmailSignup />
      </div>

      {/* Detailed footer */}
      <Footer />
    </main>
  )
}
