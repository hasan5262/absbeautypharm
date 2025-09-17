"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Share2 } from "lucide-react"
import type { Product } from "@/lib/database"

interface ProductActionsProps {
  product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
  const handleAddToCart = () => {
    alert("Added to cart!")
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
        onClick={handleAddToCart}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        {product.in_stock ? "Add to Cart" : "Out of Stock"}
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
