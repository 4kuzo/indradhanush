"use client"

const tracks = [
  { number: "01", title: "Andhakaar", producer: "Kaaja", duration: "2:35" },
  { number: "02", title: "Ghar", producer: "Mayuresh", duration: "3:00" },
  { number: "03", title: "Jiwan Saathi", producer: "baadbeats", duration: "2:27" },
  { number: "04", title: "Paschhataap", producer: "Sapjer", duration: "2:54" },
  { number: "05", title: "Indradhanush", producer: "Mayuresh", duration: "3:18" },
  { number: "06", title: "TBD", producer: null, duration: "—" },
  { number: "07", title: "Jiwan Yesai Bitchha?", producer: "Dhruv", duration: "2:32" },
]

// Calculate total runtime (excluding TBD track)
const totalSeconds = tracks
  .filter((t) => t.duration !== "—")
  .reduce((acc, track) => {
    const [mins, secs] = track.duration.split(":").map(Number)
    return acc + mins * 60 + secs
  }, 0)
const totalMins = Math.floor(totalSeconds / 60)
const totalSecs = totalSeconds % 60

export function Tracklist() {
  return (
    <section className="py-20 px-4 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground text-center mb-4">
          Tracklist
        </h3>
        <p className="text-center text-muted-foreground/60 text-xs mb-12">
          7 colors. 7 truths.
        </p>

        <div className="space-y-0">
          {tracks.map((track) => (
            <div
              key={track.number}
              className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-border transition-colors cursor-default"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs text-muted-foreground w-6 tabular-nums">
                  {track.number}
                </span>
                <div className="flex flex-col">
                  <span className={`text-sm md:text-base group-hover:text-primary transition-colors ${track.title === "TBD" ? "text-muted-foreground italic" : ""}`}>
                    {track.title}
                  </span>
                  {track.producer && (
                    <span className="text-xs text-muted-foreground/60">
                      Prod. {track.producer}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {track.duration}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 tracking-wider">
          Total Runtime: {totalMins}:{String(totalSecs).padStart(2, "0")}+
        </p>
      </div>
    </section>
  )
}
