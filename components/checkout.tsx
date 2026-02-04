"use client"

import React from "react"

import { useCallback, useState, useEffect } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { createCheckoutSession } from "@/app/actions/stripe"
import { X, Check, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)

interface CheckoutProps {
  amountInCents: number
  onClose: () => void
}

export function Checkout({ amountInCents, onClose }: CheckoutProps) {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [isFree, setIsFree] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    setError(null)
    
    // For free orders, process immediately
    if (amountInCents === 0) {
      setIsLoading(true)
      try {
        const result = await createCheckoutSession(amountInCents, email)
        if (result.isFree) {
          setIsFree(true)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to process order")
      } finally {
        setIsLoading(false)
      }
    } else {
      // For paid orders, show Stripe checkout
      setEmailSubmitted(true)
    }
  }

  const fetchClientSecret = useCallback(async () => {
    try {
      const result = await createCheckoutSession(amountInCents, email)
      if (result.isFree) {
        setIsFree(true)
        return ""
      }
      return result.clientSecret!
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create checkout")
      throw err
    }
  }, [amountInCents, email])

  useEffect(() => {
    if (isFree) {
      const timer = setTimeout(() => {
        router.push(`/checkout/success?free=true&email=${encodeURIComponent(email)}`)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isFree, router, email])

  // Free order success screen
  if (isFree) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="bg-card border border-border p-8 max-w-md text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 flex items-center justify-center">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">Your free pre-order is confirmed. Redirecting...</p>
        </div>
      </div>
    )
  }

  // Error screen
  if (error && emailSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="bg-card border border-border p-8 max-w-md text-center">
          <p className="text-destructive mb-4">{error}</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  // Email collection step
  if (!emailSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="relative bg-card border border-border w-full max-w-md p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Pre-Order Indradhanush</h3>
            <p className="text-muted-foreground text-sm">
              {amountInCents === 0 
                ? "Enter your email to claim your free copy" 
                : `Enter your email to continue — $${(amountInCents / 100).toFixed(2)}`}
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 bg-background border-border text-center"
                required
              />
              {error && <p className="text-destructive text-xs mt-2">{error}</p>}
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-sm tracking-widest uppercase"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : (
                <>
                  {amountInCents === 0 ? "Confirm Free Pre-Order" : "Continue to Payment"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            We will send album updates and download link to this email.
          </p>
        </div>
      </div>
    )
  }

  // Stripe checkout step (paid orders only)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative bg-card border border-border w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-4">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ fetchClientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      </div>
    </div>
  )
}
