"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkout } from "@/components/checkout"

export function HeroSection() {
  const [showCheckout, setShowCheckout] = useState(false)
  const [amount, setAmount] = useState("")

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    // Only allow one decimal point and max 2 decimal places
    const parts = value.split(".")
    if (parts.length > 2) return
    if (parts[1] && parts[1].length > 2) return
    setAmount(value)
  }

  const amountInCents = Math.round((parseFloat(amount) || 0) * 100)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />
      
      {/* Artist name */}
      <h1 className="relative z-10 text-sm tracking-[0.4em] uppercase text-muted-foreground mb-12 font-sans">
        A K U Z O
      </h1>

      {/* Album artwork */}
      <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 bg-card border border-border overflow-hidden">
        <Image
          src="/album-cover.png"
          alt="Indradhanush Album Cover - A close-up black and white grainy image of an eye with a rainbow-colored iris"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Album title */}
      <h2 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-center text-balance font-sans mt-12 mb-6">
        INDRADHANUSH
      </h2>

      {/* Album description */}
      <div className="relative z-10 max-w-lg text-center mb-8">
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
          This Album is me, split into 7 colors.
        </p>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-2">
          Different moods. Different truths. All from the same phase of my life.
        </p>
      </div>

      {/* Pay What You Want */}
      <div className="relative z-10 flex flex-col items-center gap-4 mt-4">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Pay What You Want
        </p>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground text-lg font-medium">$</span>
            <Input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0"
              className="w-32 h-14 pl-8 pr-4 text-center text-2xl font-bold bg-card border-border focus:border-primary"
            />
          </div>
          <Button 
            size="lg" 
            className="h-14 px-8 text-sm tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
            onClick={() => setShowCheckout(true)}
          >
            Pre-Order
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          {amountInCents === 0 ? "Free is totally fine" : `$${(amountInCents / 100).toFixed(2)} — Thank you for your support`}
        </p>
      </div>

      <p className="relative z-10 mt-6 text-xs text-muted-foreground tracking-wider">
        Digital Album — Available March 3, 2026
      </p>

      {/* Checkout Modal */}
      {showCheckout && (
        <Checkout 
          amountInCents={amountInCents} 
          onClose={() => setShowCheckout(false)} 
        />
      )}
    </section>
  )
}
