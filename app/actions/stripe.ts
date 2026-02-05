"use server"

import { stripe } from "@/lib/stripe"

export async function createCheckoutSession(amountInCents: number, email: string) {
  // Allow any amount, including $0 (free)
  // Stripe requires minimum of 50 cents for actual charges, but we can use 0 for free
  const finalAmount = Math.max(0, Math.round(amountInCents))

  // If amount is 0, skip Stripe and return success directly
  if (finalAmount === 0) {
    // For free orders, send a notification email
    try {
      if (process.env.RESEND_API_KEY) {
        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        await resend.emails.send({
          from: "Indradhanush Pre-Order <onboarding@resend.dev>",
          to: "mailforakuzo@gmail.com",
          subject: "New Free Pre-Order!",
          html: `<p>New pre-order from: <strong>${email}</strong></p><p>Amount: FREE</p>`,
        })
      } else {
        console.log("RESEND_API_KEY missing, skipping email notification")
      }
    } catch (error) {
      console.error("Failed to send email notification:", error)
      // Don't fail the request, just log the error
    }

    // Return success
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
