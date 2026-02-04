import { HeroSection } from "@/components/hero-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { AboutAlbum } from "@/components/about-album"
import { Tracklist } from "@/components/tracklist"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CountdownTimer />
      <AboutAlbum />
      <Tracklist />
      <EmailSignup />
      <Footer />
    </main>
  )
}
