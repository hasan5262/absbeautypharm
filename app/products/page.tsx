import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { AnimatedBackground } from "@/components/animated-background"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { getAllProducts, getProductsByCategory, searchProducts } from "@/lib/database"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  const category = searchParams.category
  const search = searchParams.search

  let products = []

  try {
    if (search) {
      products = await searchProducts(search)
    } else if (category && category !== "All Products") {
      products = await getProductsByCategory(category)
    } else {
      products = await getAllProducts()
    }
  } catch (error) {
    console.error("Error fetching products:", error)
    products = []
  }

  const categories = [
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <AnimatedBackground />
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Mesopharm Products</h1>
          <p className="text-gray-400 text-lg">
            Discover our complete range of professional skincare solutions - {products.length} products available
          </p>
        </div>

        {/* Search and Filters - Client-side filtering for now */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
