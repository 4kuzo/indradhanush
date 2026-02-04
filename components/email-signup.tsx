"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setStatus("success")
    setEmail("")
    
    // Reset after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Stay Updated
        </h3>
        <p className="text-muted-foreground text-sm mb-8">
          Subscribe to receive exclusive updates, behind-the-scenes content, and early access.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground h-12 px-4 text-sm"
            disabled={status === "loading" || status === "success"}
            required
          />
          <Button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="h-12 px-8 text-xs tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            {status === "loading" && "Subscribing..."}
            {status === "success" && "Subscribed"}
            {status === "idle" && "Subscribe"}
            {status === "error" && "Try Again"}
          </Button>
        </form>

        {status === "success" && (
          <p className="text-xs text-muted-foreground mt-4 animate-in fade-in">
            Thank you for subscribing.
          </p>
        )}

        <p className="text-xs text-muted-foreground/60 mt-6">
          By subscribing, you agree to receive email updates from Akuzo.
        </p>
      </div>
    </section>
  )
}
