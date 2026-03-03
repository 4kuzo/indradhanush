import { HeroSection } from "@/components/hero-section"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EmailSignup />
      <Footer />
    </main>
  )
}
