"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Music", href: "#music" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Newsletter", href: "#newsletter" },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    if (href === "#" || href === "") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    try {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } catch (err) {
      console.error("Invalid scroll selector:", err)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, "#")}
          className="text-xl md:text-2xl font-black tracking-widest text-white hover:text-[#f05a28] transition-colors"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
        >
          AKUZO
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f05a28] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-black/95 backdrop-blur-lg border-b border-white/10 py-8 px-6 space-y-6 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-5 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-white transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
