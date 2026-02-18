"use client"

export default function BiographySection() {
  return (
    <section id="biography" className="w-full py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
              <img src="/second.png" alt="FlexyB Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-2xl" />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">About MilliGBP</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Godspower Ulaeto AKA MilliGBP, Born 25th June is a multi-talented artist from akwaibom state, nigeria. He has had great passion 
                for music since his teenage ages and draws inspiration from both personal experiences and societal issues crafting authentic music that deeply resonates with listeners.
                
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">100K+ Streams</h3>
                  <p className="text-foreground/70">First release "Plan B" achieved platinum status</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Davido Tour Opener</h3>
                  <p className="text-foreground/70">Opening Artist for first-ever Davido Nigerian Tour</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Unique Sound</h3>
                  <p className="text-foreground/70">Hip-hop foundation with authentic Afrobeat twist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
