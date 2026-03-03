"use server"

export async function subscribeEmail(email: string) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.warn("RESEND_API_KEY is not set. Simulating success.")
            return { success: false, error: "RESEND_API_KEY is missing." }
        }

        const { Resend } = await import("resend")
        const resend = new Resend(process.env.RESEND_API_KEY)

        const result = await resend.emails.send({
            from: "Indradhanush Updates <onboarding@resend.dev>",
            to: "mailforakuzo@gmail.com",
            subject: "New Email Subscriber!",
            html: `<p>You have a new subscriber to your mailing list: <strong>${email}</strong></p>`,
        })

        if (result.error) {
            console.error("Resend API error:", result.error)
            return { success: false, error: result.error.message }
        }

        return { success: true }
    } catch (error) {
        console.error("Failed to subscribe email:", error)
        return { success: false, error: "Failed to subscribe" }
    }
}
