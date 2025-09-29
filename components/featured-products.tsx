"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

interface Product {
  id: number
  name: string
  image_url: string
  category: string
  description: string
}

interface FeaturedProductsProps {
  products: Product[]
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3))
  }

  const visibleProducts = products.slice(currentIndex * 3, currentIndex * 3 + 3)

  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 relative">
      <div className="container mx-auto">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Discover our most popular professional-grade skincare solutions
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-black/40 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-black/40 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {visibleProducts.map((product, index) => (
              <ScrollReveal key={product.id} direction="up" delay={300 + index * 100}>
                <Link href={`/products/${product.id}`}>
                  <Card className="group cursor-pointer bg-black/20 backdrop-blur-sm border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <img
                          src={product.image_url || "/placeholder.svg?height=300&width=300"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 left-3 bg-black/60 text-white border-white/30">
                          {product.category}
                        </Badge>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between">
                          {/* Removed price display, replaced with arrow only */}
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all ml-auto" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mb-8">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <ScrollReveal direction="up" delay={600}>
          <div className="text-center">
            <Link href="/products">
              <Button size="lg" className="px-8 py-6 text-lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
