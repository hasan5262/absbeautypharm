import { NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

export const dynamic = "force-dynamic"

const sql = neon(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const [productCount, orderCount, recentOrders] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM products`.catch(() => [{ count: 0 }]),
      sql`SELECT COUNT(*) as count FROM orders`.catch(() => [{ count: 0 }]),
      sql`
        SELECT o.id, o.total, o.status, o.created_at
        FROM orders o
        ORDER BY o.created_at DESC
        LIMIT 5
      `.catch(() => []),
    ])

    return NextResponse.json({
      productCount: productCount[0]?.count || 0,
      orderCount: orderCount[0]?.count || 0,
      customerCount: 0, // Will be updated when user system is implemented
      recentOrders: recentOrders || [],
    })
  } catch (error) {
    console.error("Database query error:", error)
    return NextResponse.json({
      productCount: 0,
      orderCount: 0,
      customerCount: 0,
      recentOrders: [],
    })
  }
}
