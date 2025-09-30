"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Heart, Share2 } from "lucide-react"
import type { Product } from "@/lib/database"

interface ProductActionsProps {
  product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
  const handleWhatsAppOrder = () => {
    const phoneNumber = "96171020517" // +961 71020517 without + and spaces
    const message = encodeURIComponent(`Hi! I'm interested in ordering: ${product.name}`)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = () => {
    alert("Share functionality coming soon!")
  }

  return (
    <div className="flex gap-4 pt-4">
      <Button
        size="lg"
        className="flex-1 bg-white text-black hover:bg-gray-100"
        disabled={!product.in_stock}
        onClick={handleWhatsAppOrder}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        {product.in_stock ? "Order on WhatsApp" : "Out of Stock"}
      </Button>
      <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
        <Heart className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-white/30 text-white hover:bg-white/10 bg-transparent"
        onClick={handleShare}
      >
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  )
}
