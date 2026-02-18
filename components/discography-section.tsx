"use client"

import Link from 'next/link'

const albums = [
  {
    id: 1,
    title: "Plan B",
    year: 2025,
    // tracks: 11,
    image: "/planb.png",
    href: "https://fm.fanlink.tv/Planb"
  },
  // {
  //   id: 2,
  //   title: "Party Anthem",
  //   year: 2025,
  //   // tracks: 11,
  //   image: "/party.png",
  //   href: "https://ffm.to/flexyb-party-anthem"
  // },
  {
    id: 2,
    title: "Pusing-P",
    year: 2025,
    // tracks: 13,
    image: "/pushingp.png",
    href: "https://ffm.to/milligbp-pushing-p"
  },
]

export default function DiscographySection() {
  return (
    <section id="discography" className="w-full py-20 px-4 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Discography</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            A collection of albums and EPs that showcase the artist's evolution and creative journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album) => (
            <Link
              key={album.id}
              href={album.href}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 block"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={album.image || "/placeholder.svg"}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-accent font-semibold">
                    Listen
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-bold text-foreground text-lg mb-2 text-balance">{album.title}</h3>
                <div className="flex justify-between text-sm text-foreground/70">
                  <span>{album.year}</span>
                  {/* <span>{album.tracks} tracks</span> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}