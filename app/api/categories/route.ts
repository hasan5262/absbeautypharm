import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: categories, error } = await supabase.from("products").select("category").not("category", "is", null)

    if (error) {
      throw error
    }

    // Extract unique categories
    const uniqueCategories = [...new Set(categories.map((item) => item.category))].sort().map((name) => ({ name }))

    return NextResponse.json(uniqueCategories)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
