"use client"

import React from "react"
import { Calendar, MapPin, Ticket } from "lucide-react"

const shows = [
  { id: 1, date: { day: "12", month: "JUN", year: "2026" }, city: "Kathmandu, Nepal", venue: "Club Fahrenheit", status: "Active", link: "#" },
  { id: 2, date: { day: "20", month: "JUN", year: "2026" }, city: "Pokhara, Nepal", venue: "Catwalk Pokhara", status: "Active", link: "#" },
  { id: 3, date: { day: "04", month: "JUL", year: "2026" }, city: "London, UK", venue: "The Garage", status: "Sold Out", link: "#" },
  { id: 4, date: { day: "11", month: "JUL", year: "2026" }, city: "New York, USA", venue: "Sounds of Brazil (SOBs)", status: "Active", link: "#" },
  { id: 5, date: { day: "18", month: "JUL", year: "2026" }, city: "Toronto, Canada", venue: "The Opera House", status: "Active", link: "#" }
]

export function TourSection() {
  return (
    <section id="tour" className="py-24 px-6 border-t border-white/10 bg-black relative overflow-hidden">
      {/* Decorative ambient background light */}
      <div className="absolute bottom-1/10 left-10 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-orange-600/10 to-red-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-xs tracking-[0.4em] uppercase text-[#f05a28] text-center mb-4 font-bold">
          Live Events
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-center text-white uppercase mb-14" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          Indradhanush Tour 2026
        </h3>

        <div className="space-y-4">
          {shows.map((show) => {
            const isSoldOut = show.status === "Sold Out"
            return (
              <div
                key={show.id}
                className="group flex flex-col md:flex-row items-center justify-between p-5 md:p-6 bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 gap-6 md:gap-4 shadow-sm"
              >
                {/* Date display block */}
                <div className="flex items-center gap-6 self-start md:self-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col items-center justify-center text-center shadow-inner group-hover:border-[#f05a28]/30 group-hover:bg-[#f05a28]/5 transition-all">
                    <span className="text-xl md:text-2xl font-black text-white leading-none tracking-tight">
                      {show.date.day}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold text-[#f05a28] tracking-widest mt-1">
                      {show.date.month}
                    </span>
                  </div>

                  {/* Venue and City */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-white tracking-wide group-hover:text-[#f05a28] transition-colors" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                      {show.venue}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1 uppercase tracking-widest">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground/60" />
                      <span>{show.city}</span>
                    </div>
                  </div>
                </div>

                {/* Tickets Button or Sold Out label */}
                <div className="w-full md:w-auto self-end md:self-center">
                  {isSoldOut ? (
                    <span className="inline-block w-full md:w-auto text-center px-6 py-3 text-xs tracking-widest uppercase font-semibold text-muted-foreground bg-white/5 border border-white/5 rounded-xl cursor-default">
                      Sold Out
                    </span>
                  ) : (
                    <a
                      href={show.link}
                      className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 text-xs tracking-widest uppercase font-bold text-black bg-white hover:bg-[#f05a28] hover:text-white rounded-xl shadow-lg transition-all duration-300"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Buy Tickets</span>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-[11px] text-muted-foreground mt-10 tracking-widest uppercase">
          * More dates to be announced soon. Join our newsletter to stay updated.
        </p>
      </div>
    </section>
  )
}
