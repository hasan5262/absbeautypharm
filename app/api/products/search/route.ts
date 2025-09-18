import { type NextRequest, NextResponse } from "next/server"
import { searchProducts } from "@/lib/neon"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")

    if (!query || query.trim().length === 0) {
      return NextResponse.json([])
    }

    const products = await searchProducts(query.trim())

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error searching products:", error)
    return NextResponse.json({ error: "Failed to search products" }, { status: 500 })
  }
}
