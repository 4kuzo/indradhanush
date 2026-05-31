"use client"

import React, { useState } from "react"
import { X, ZoomIn } from "lucide-react"

const images = [
  {
    id: 1,
    url: "https://artistnepal.com/uploads/2025/10/521410067_18519276445041742_2383740601387636654_n.jpg",
    caption: "AKUZO Studio Portrait"
  },
  {
    id: 2,
    url: "https://artistnepal.com/uploads/2025/10/6947CA7B-A3A2-48CF-9359-F4ECAD7F187B.jpeg",
    caption: "AKUZO Album Cover Landscape"
  },
  {
    id: 3,
    url: "https://artistnepal.com/uploads/2025/10/IMG_5526.jpeg",
    caption: "Live Session Photo"
  },
  {
    id: 4,
    url: "https://artistnepal.com/uploads/2025/10/IMG_4249.jpeg",
    caption: "Studio Creative Session"
  },
  {
    id: 5,
    url: "https://artistnepal.com/uploads/2025/10/IMG_4516.jpeg",
    caption: "Atmospheric Black & White Portrait"
  },
  {
    id: 6,
    url: "https://artistnepal.com/uploads/2025/10/IMG_4518.jpeg",
    caption: "Alternative Studio Shading Profile"
  }
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-24 px-6 border-t border-white/10 bg-black relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-[#f05a28]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-xs tracking-[0.4em] uppercase text-[#f05a28] text-center mb-4 font-bold">
          Visuals
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-center text-white uppercase mb-16" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          Photo Gallery
        </h3>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.url)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 border border-white/5 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image element (using native img tag as these are external URLs on foreign domain) */}
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Glassmorphic hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#f05a28] font-bold">AKUZO</span>
                    <h4 className="text-sm font-semibold text-white tracking-wide mt-1">{img.caption}</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-full transition-all focus:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div 
            className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="AKUZO Expanded" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
