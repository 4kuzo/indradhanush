import { Instagram } from "lucide-react"

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/akuzo_/", icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@akuzo__", icon: TikTokIcon },
]

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        {/* Social Links */}
        <div className="flex items-center justify-center gap-8 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
            A K U Z O
          </span>
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground/60">
            © 2026 Akuzo. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground/40">
            <a href="#" className="hover:text-muted-foreground transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-muted-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
