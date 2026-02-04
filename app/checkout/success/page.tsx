import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Thank You!
        </h1>
        <p className="text-muted-foreground mb-2">
          Your pre-order for <span className="text-foreground font-semibold">Indradhanush</span> has been confirmed.
        </p>
        <p className="text-muted-foreground mb-8">
          You'll receive the digital album on March 3, 2026 via email.
        </p>
        <Button asChild size="lg" className="px-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  )
}
