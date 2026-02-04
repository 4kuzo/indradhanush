"use server"

import { stripe } from "@/lib/stripe"

export async function createCheckoutSession(amountInCents: number, email: string) {
  // Allow any amount, including $0 (free)
  // Stripe requires minimum of 50 cents for actual charges, but we can use 0 for free
  const finalAmount = Math.max(0, Math.round(amountInCents))

  // If amount is 0, skip Stripe and return success directly
  if (finalAmount === 0) {
    // Here you could store the email in a database for free pre-orders
    // For now, we just return success
    return { clientSecret: null, isFree: true, email }
  }

  // Stripe requires minimum 50 cents for non-zero charges
  const chargeAmount = Math.max(50, finalAmount)

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Indradhanush (Digital Album)",
            description: "Pre-order: AKUZO - Indradhanush. 7 tracks. Available March 3, 2026.",
          },
          unit_amount: chargeAmount,
        },
        quantity: 1,
      },
    ],
    ui_mode: "embedded",
    return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
  })

  if (!session.client_secret) {
    throw new Error("Failed to create checkout session")
  }

  return { clientSecret: session.client_secret, isFree: false }
}
