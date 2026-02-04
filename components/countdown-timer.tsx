"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const targetDate = new Date("2026-03-03T00:00:00").getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
            Album Drops In
          </h3>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div key={label} className="text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold tabular-nums">
                  --
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-12">
          Album Drops In
        </h3>
        <div className="grid grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit) => (
            <div key={unit.label} className="text-center">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
