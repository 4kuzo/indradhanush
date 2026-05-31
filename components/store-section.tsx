"use client"

import React, { useState } from "react"
import { ShoppingBag, Star, HelpCircle } from "lucide-react"
import { Checkout } from "@/components/checkout"

const products = [
  {
    id: "vinyl",
    name: "Indradhanush Limited Vinyl",
    description: "Gatefold transparent orange with heavy rainbow splatter. Contains full 7-track album, 12-page artwork booklet, and download card.",
    price: "$29.99",
    tag: "Collectible",
    isFree: false
  },
  {
    id: "hoodie",
    name: "Heavyweight Logo Hoodie",
    description: "Ultra-soft 450GSM organic cotton hoodie. Featuring embroidered front minimalist logo and high-density screen-printed back tracklist art.",
    price: "$55.00",
    tag: "Exclusive",
    isFree: false
  },
  {
    id: "digital",
    name: "Digital Album Pre-Order",
    description: "High-quality 24-bit WAV & 320kbps MP3 digital copy of the entire album. Delivered directly to your email on release day.",
    price: "FREE",
    tag: "Digital",
    isFree: true
  }
]

export function StoreSection() {
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)

  const handleOpenCheckout = (productId: string) => {
    setSelectedProduct(productId)
    setShowCheckout(true)
  }

  return (
    <section id="store" className="py-24 px-6 border-t border-white/10 bg-[#050505] relative overflow-hidden">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/3 right-10 w-[220px] h-[220px] rounded-full bg-gradient-to-l from-[#f05a28]/10 to-transparent blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-xs tracking-[0.4em] uppercase text-[#f05a28] text-center mb-4 font-bold">
          Official Merch & Music
        </h2>
        <h3 className="text-2xl md:text-3xl font-black text-center text-white uppercase mb-16" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
          Pre-Order Store
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between bg-black/60 backdrop-blur-md border border-white/5 hover:border-[#f05a28]/30 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative"
            >
              {/* Product Badge */}
              <div className="absolute top-6 right-6 px-3 py-1 text-[9px] uppercase tracking-widest font-bold bg-[#f05a28]/10 border border-[#f05a28]/20 text-[#f05a28] rounded-full">
                {product.tag}
              </div>

              <div>
                {/* Visual Representation box */}
                <div className="w-full aspect-video rounded-xl bg-white/[0.02] border border-white/10 mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-[#f05a28]/25 transition-all shadow-inner">
                  {/* Decorative designs for Vinyl vs Hoodie vs Digital */}
                  {product.id === "vinyl" && (
                    <div className="relative w-28 h-28 flex items-center justify-center">
                      {/* Spin Disc overlay */}
                      <div className="absolute inset-0 rounded-full bg-orange-600 border border-white/10 animate-spin duration-[15s]" style={{ backgroundImage: "repeating-radial-gradient(circle, #f05a28, #3b1406 10px)" }}>
                        <div className="absolute inset-8 rounded-full bg-black flex items-center justify-center border border-white/10">
                          <div className="w-3 h-3 bg-white/20 rounded-full" />
                        </div>
                      </div>
                    </div>
                  )}

                  {product.id === "hoodie" && (
                    <div className="text-center">
                      <div className="w-16 h-20 bg-white/5 border border-white/25 rounded-md relative mx-auto flex items-center justify-center">
                        <span className="text-[10px] text-[#f05a28] font-bold">AKUZO</span>
                        <div className="absolute -top-1 w-6 h-3 bg-white/15 border-b border-white/20 rounded-t-full" />
                      </div>
                    </div>
                  )}

                  {product.id === "digital" && (
                    <div className="text-center text-muted-foreground group-hover:text-white transition-colors">
                      <Star className="w-12 h-12 stroke-1 text-[#f05a28] mx-auto mb-2 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">24-BIT Lossless Audio</span>
                    </div>
                  )}
                </div>

                <h4 className="text-lg md:text-xl font-bold text-white tracking-wide mb-3" style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}>
                  {product.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">Price</span>
                    <span className="text-xl md:text-2xl font-black text-white leading-none mt-1">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenCheckout(product.id)}
                    className="flex items-center gap-2 px-5 py-3 text-xs tracking-widest uppercase font-bold text-white bg-[#f05a28] hover:bg-[#ff6c3b] hover:scale-103 rounded-xl transition-all shadow-md"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pre-Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic checkout Modal */}
        {showCheckout && (
          <Checkout onClose={() => setShowCheckout(false)} />
        )}
      </div>
    </section>
  )
}
