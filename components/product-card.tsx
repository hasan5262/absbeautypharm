"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import type { Product } from "@/lib/database"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleAddToCart = () => {
    // Simple notification for demo purposes
    alert(`${product.name} added to cart!`)
  }

  console.log("[v0] Product image URL:", product.image_url, "for product:", product.name)

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          {product.image_url && !imageError ? (
            <img
              src={product.image_url || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => {
                console.log("[v0] Image failed to load:", product.image_url)
                setImageError(true)
              }}
              onLoad={() => {
                console.log("[v0] Image loaded successfully:", product.image_url)
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-700 font-medium text-sm">{product.name.split(":")[0]}</span>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={(e) => {
              e.preventDefault()
              setIsLiked(!isLiked)
            }}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <Badge variant="secondary" className="text-xs mb-2">
                {product.category}
              </Badge>
              <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm">{product.name}</h3>
              {product.volume && <p className="text-xs text-gray-700 mt-1">{product.volume}</p>}
            </div>

            <p className="text-xs text-gray-800 line-clamp-2">{product.description}</p>

            {product.effects.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-900">Key Benefits:</p>
                <ul className="text-xs text-gray-800 space-y-0.5">
                  {product.effects.slice(0, 2).map((effect, index) => (
                    <li key={index} className="line-clamp-1">
                      • {effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <Button
                size="sm"
                onClick={(e) => {
                  e.preventDefault()
                  handleAddToCart()
                }}
                className="bg-black hover:bg-gray-800 text-white"
                disabled={!product.in_stock}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                {product.in_stock ? "Add" : "Out"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
