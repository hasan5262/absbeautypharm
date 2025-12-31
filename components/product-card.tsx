"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart } from "lucide-react"
import { useState, memo } from "react"
import Link from "next/link"
import type { Product } from "@/lib/database"

interface ProductCardProps {
  product: Product
}

export const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault()
    const phoneNumber = "96171020517" // +961 71020517 without + and spaces
    const message = encodeURIComponent(`Hi! I'm interested in ordering: ${product.name}`)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLiked(!isLiked)
  }

  const hasValidImage = product.image_url && !product.image_url.includes("placeholder") && !imageError

  return (
    <Link href={`/products/${product.id}`} prefetch={false}>
      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-muted to-muted/80">
          {hasValidImage ? (
            <img
              src={product.image_url || "/placeholder.svg"}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-muted to-muted/60 rounded-full flex items-center justify-center">
                <span className="text-muted-foreground font-medium text-sm">{product.name.split(":")[0]}</span>
              </div>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-card/80 hover:bg-card"
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${isLiked ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
          </Button>
        </div>

        <CardContent className="p-4">
          <div className="space-y-3">
            <div>
              <Badge variant="secondary" className="text-xs mb-2">
                {product.category}
              </Badge>
              <h3 className="font-semibold text-foreground line-clamp-2 text-sm">{product.name}</h3>
              {product.volume && <p className="text-xs text-muted-foreground mt-1">{product.volume}</p>}
            </div>

            <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>

            {product.effects.length > 0 && (
              <div className="space-y-1">
                <p className="text-xs font-medium text-foreground">Key Benefits:</p>
                <ul className="text-xs text-muted-foreground space-y-0.5">
                  {product.effects.slice(0, 2).map((effect, index) => (
                    <li key={index} className="line-clamp-1">
                      • {effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <div className="flex-1">
                <Button
                  size="sm"
                  onClick={handleWhatsAppOrder}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  disabled={!product.in_stock}
                >
                  <MessageCircle className="h-4 w-4 mr-1" />
                  {product.in_stock ? "Order on WhatsApp" : "Out of Stock"}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
})
