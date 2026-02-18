"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    title: "Vibrant Teal Artwork",
    description: "Abstract teal composition with geometric patterns",
    image: "/second.png",
    category: "Abstract",
  },
  {
    id: 2,
    title: "Davido Five Tour",
    description: "Warm golden tones with flowing brush strokes",
    image: "/seconded.png",
    category: "Landscape",
  },
  {
    id: 3,
    title: "Ocean Depths",
    description: "Deep blue ocean waves in motion",
    image: "/twoo.png",
    category: "Nature",
  },
  {
    id: 4,
    title: "Serene Landscape",
    description: "Peaceful mountain scene at dusk",
    image: "/thirded.png",
    category: "Landscape",
  },
]

// Modal component for displaying enlarged image
function ImageModal({ imageUrl, title, description, onClose }: { 
  imageUrl: string, 
  title: string,
  description: string,
  onClose: () => void 
}) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        <button 
          className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 z-10 p-2"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-card">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            priority
          />
        </div>
        <div className="bg-card rounded-b-lg p-6 mt-1">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-white/80">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")
  const [selectedDescription, setSelectedDescription] = useState<string>("")

  const handleImageClick = (imageUrl: string, title: string, description: string) => {
    setSelectedImage(imageUrl)
    setSelectedTitle(title)
    setSelectedDescription(description)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedTitle("")
    setSelectedDescription("")
  }

  return (
    <>
      <section id="gallery" className="w-full py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Image Gallery
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
              Browse the artisit's collection of stunning images. Click on any image to view it in full detail.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {galleryImages.map((item) => (
              <div
                key={item.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => handleImageClick(item.image, item.title, item.description)}
              >
                {/* Clickable image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    {/* <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transform group-hover:scale-110">
                      <span className="text-2xl">🔍</span>
                    </div> */}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    {/* <h3 className="font-bold text-foreground line-clamp-1 flex-1">{item.title}</h3> */}
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {/* {item.category} */}
                    </span>
                  </div>
                  {/* <p className="text-sm text-foreground/70 line-clamp-2">{item.description}</p> */}
                </div>
              </div>
            ))}
          </div>

          {/* See More link */}
          <div className="text-center mt-12">
            <a 
              href="https://drive.google.com/drive/folders/1RsxZIU9V3ekqM9gm3jxGo6HOcixQ2VZZ" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors group px-6 py-3 rounded-lg hover:bg-primary/5"
              onClick={(e) => {
                e.preventDefault()
                // Here you could implement functionality to load more items
                // For now, it's just an anchor tag
                console.log("See more clicked - load more images")
              }}
            >
              See more
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal for displaying enlarged image */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          title={selectedTitle}
          description={selectedDescription}
          onClose={closeModal}
        />
      )}
    </>
  )
}