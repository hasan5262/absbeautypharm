import { type NextRequest, NextResponse } from "next/server"
import { getAllProducts, createProduct } from "@/lib/neon"

export async function GET() {
  try {
    const products = await getAllProducts()
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, description, volume, price, category, effects, active_ingredients, directions, in_stock } = body

    const result = await createProduct({
      name,
      description,
      volume,
      price,
      category,
      effects,
      active_ingredients,
      directions,
      in_stock,
    })

    if (!result) {
      return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
