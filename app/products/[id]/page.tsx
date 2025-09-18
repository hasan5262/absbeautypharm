import { Header } from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProductById, type Product } from "@/lib/database"
import { ProductActions } from "@/components/product-actions"
import { redirect } from "next/navigation"
import { DynamicGlow } from "@/components/dynamic-glow"

function isValidUUID(str: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  return uuidRegex.test(str)
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  console.log("[v0] Full params object:", params)
  console.log("[v0] params.id type:", typeof params.id)
  console.log("[v0] params.id length:", params.id?.length)
  console.log("[v0] params.id value:", JSON.stringify(params.id))

  if (!isValidUUID(params.id)) {
    console.log("[v0] Invalid UUID format:", params.id)
    redirect("/products")
  }

  let product: Product | null = null

  try {
    console.log("[v0] About to call getProductById with ID:", params.id)
    product = await getProductById(params.id)
    console.log("[v0] Product fetched successfully:", product?.name)
  } catch (error) {
    console.error("[v0] Error fetching product:", error)
    redirect("/products")
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-800/60 to-black">
        <AnimatedBackground />
        <DynamicGlow />
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl text-white mb-4">Product not found</h1>
          <p className="text-gray-400 mb-6">The requested product could not be found.</p>
          <Link href="/products">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const activeIngredients = product.active_ingredients ? product.active_ingredients.split(", ") : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800/60 to-black">
      <AnimatedBackground />
      <DynamicGlow />
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Link href="/products">
          <Button variant="outline" className="mb-6 border-white/30 text-white hover:bg-white/10 bg-transparent">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-white/10">
              <Image
                src={product.image_url || "/placeholder.svg?height=500&width=500&query=skincare product"}
                alt={product.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                onError={() => {
                  console.log("[v0] Product detail image failed to load:", product.image_url)
                }}
                onLoad={() => {
                  console.log("[v0] Product detail image loaded successfully:", product.image_url)
                }}
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 bg-white/10 text-white border-white/20">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
              <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-white">${product.price.toFixed(2)}</span>
              {product.volume && (
                <Badge variant="outline" className="border-white/30 text-white">
                  {product.volume}
                </Badge>
              )}
              {!product.in_stock && <Badge variant="destructive">Out of Stock</Badge>}
            </div>

            {/* Effects */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Effects</h3>
              <ul className="space-y-2">
                {product.effects.map((effect, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="text-white mr-2">•</span>
                    {effect}
                  </li>
                ))}
              </ul>
            </div>

            {/* Active Ingredients */}
            {activeIngredients.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Active Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {activeIngredients.map((ingredient, index) => (
                    <Badge key={index} variant="outline" className="border-white/30 text-gray-300">
                      {ingredient.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Directions */}
            {product.directions && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Directions for Use</h3>
                <p className="text-gray-300 leading-relaxed">{product.directions}</p>
              </div>
            )}

            <ProductActions product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}
