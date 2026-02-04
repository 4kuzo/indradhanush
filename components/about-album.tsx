"use client"

export function AboutAlbum() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12">
          About The Album
        </h3>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg md:text-xl text-foreground/90">
            This Album is me, split into 7 colors.
          </p>
          <p>
            Different moods. Different truths.
            <br />
            All from the same phase of my life.
          </p>
          <p>
            Some songs come from clarity, some from confusion, and some from sitting with myself a little too long.
          </p>
          <div className="pt-4 border-t border-border/50 mt-8">
            <p className="italic text-foreground/80">
              An Indradhanush only shows up after the rain.
            </p>
            <p className="text-sm mt-2">
              This project is what came after mine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
