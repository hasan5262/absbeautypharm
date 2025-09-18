import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function DELETE() {
  try {
    const cookieStore = cookies()

    const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    })

    // Delete all products
    const { data, error, count } = await supabase
      .from("products")
      .delete()
      .neq("id", "00000000-0000-0000-0000-000000000000") // Delete all except non-existent ID
      .select("*", { count: "exact" })

    if (error) {
      console.error("Error deleting products:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      deletedCount: count || 0,
      message: `Deleted ${count || 0} products successfully`,
    })
  } catch (error) {
    console.error("Error in clear-products API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
