import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"
export const revalidate = 60

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    const supabase = await createClient()

    let query = supabase
      .from("products")
      .select("*")
      .not("image_url", "is", null)
      .not("image_url", "eq", "")
      .not("image_url", "like", "%placeholder%")
      .order("name", { ascending: true })
      .order("created_at", { ascending: false })

    if (category && category !== "All Products") {
      query = query.eq("category", category)
    }

    const { data: products, error } = await query

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
    }

    const uniqueProducts =
      products?.filter((product, index, self) => index === self.findIndex((p) => p.name === product.name)) || []

    return NextResponse.json(uniqueProducts)
  } catch (error) {
    console.error("Error fetching products by category:", error)
    return NextResponse.json({ error: "Failed to fetch products by category" }, { status: 500 })
  }
}
