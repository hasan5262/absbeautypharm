"use client"

import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { AnimatedBackground } from "@/components/animated-background"
import { DynamicGlow } from "@/components/dynamic-glow"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState, useEffect, useMemo, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"

interface Product {
  id: string
  name: string
  description: string
  volume: string | null
  category: string
  effects: string[]
  image_url: string | null
  active_ingredients: string | null
  directions: string | null
  in_stock: boolean
  created_at: string
  updated_at: string
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const router = useRouter()
  const searchParams = useSearchParams()

  const categories = useMemo(
    () => [
      "All Products",
      "Cleansers",
      "Moisturizers",
      "Treatments",
      "Serums",
      "Masks",
      "Eye Care",
      "Anti-Aging",
      "Body Care",
      "Professional",
      "Toners",
    ],
    [],
  )

  useEffect(() => {
    const category = searchParams.get("category") || "All Products"
    const search = searchParams.get("search") || ""
    setSelectedCategory(category)
    setSearchQuery(search)
  }, [searchParams])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        let url = ""

        if (searchQuery.trim()) {
          url = `/api/products/search?q=${encodeURIComponent(searchQuery)}`
        } else {
          url = `/api/products/category?category=${encodeURIComponent(selectedCategory)}`
        }

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()

        const uniqueProducts = result.filter(
          (product: Product, index: number, self: Product[]) =>
            index === self.findIndex((p) => p.name === product.name) &&
            product.image_url &&
            !product.image_url.includes("placeholder"),
        )

        setProducts(uniqueProducts)
      } catch (error) {
        console.error("[v0] Error fetching products:", error)
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [searchQuery, selectedCategory])

  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchQuery(value)
      const params = new URLSearchParams()
      if (value.trim()) {
        params.set("search", value)
      }
      if (selectedCategory !== "All Products") {
        params.set("category", selectedCategory)
      }
      router.push(`/products?${params.toString()}`)
    },
    [selectedCategory, router],
  )

  const handleCategoryClick = useCallback(
    (category: string) => {
      setSelectedCategory(category)
      setSearchQuery("")
      const params = new URLSearchParams()
      if (category !== "All Products") {
        params.set("category", category)
      }
      router.push(`/products?${params.toString()}`)
    },
    [router],
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/60 to-background">
      <AnimatedBackground />
      <DynamicGlow />
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">ABS Beauty Pharm Products</h1>
          <p className="text-muted-foreground text-lg">
            {loading
              ? "Loading products..."
              : products.length > 0
                ? `Discover our complete range of professional skincare solutions - ${products.length} products available`
                : "Product catalog is being updated. Please check back soon."}
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 bg-card/10 border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => handleCategoryClick(category)}
                className={`border-border text-foreground hover:bg-accent transition-colors ${
                  selectedCategory === category ? "bg-accent border-border" : "bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-2">Loading Products...</h3>
              <p className="text-muted-foreground">Please wait while we fetch the latest products.</p>
            </div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {searchQuery ? "No Products Found" : "No Products Available"}
              </h3>
              <p className="text-muted-foreground text-lg mb-4">
                {searchQuery
                  ? `No products match "${searchQuery}". Try a different search term.`
                  : "Our product catalog is currently being updated with new items."}
              </p>
              {searchQuery && (
                <Button
                  onClick={() => handleSearchChange("")}
                  className="bg-accent hover:bg-accent/80 text-accent-foreground border-border"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
