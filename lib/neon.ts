import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export interface Product {
  id: string
  name: string
  description: string
  volume: string | null
  price: number
  category: string
  effects: string[]
  image_url: string | null
  active_ingredients: string | null
  directions: string | null
  in_stock: boolean
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  role: string
  created_at: string
}

export async function isAdmin(userId: string): Promise<boolean> {
  try {
    const result = await sql`
      SELECT role FROM admin_users WHERE id = ${userId}
    `
    return result.length > 0 && result[0].role === "admin"
  } catch (error) {
    console.error("Error checking admin status:", error)
    return false
  }
}

export async function getAllProducts(): Promise<Product[]> {
  try {
    const result = await sql`
      SELECT * FROM products 
      ORDER BY created_at DESC
    `
    return result as Product[]
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const result = await sql`
      SELECT * FROM products WHERE id = ${id}
    `
    return result.length > 0 ? (result[0] as Product) : null
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function createProduct(
  product: Omit<Product, "id" | "created_at" | "updated_at">,
): Promise<Product | null> {
  try {
    const result = await sql`
      INSERT INTO products (
        name, description, volume, price, category, effects, 
        image_url, active_ingredients, directions, in_stock
      ) VALUES (
        ${product.name}, ${product.description}, ${product.volume}, 
        ${product.price}, ${product.category}, ${product.effects}, 
        ${product.image_url}, ${product.active_ingredients}, 
        ${product.directions}, ${product.in_stock}
      )
      RETURNING *
    `
    return result.length > 0 ? (result[0] as Product) : null
  } catch (error) {
    console.error("Error creating product:", error)
    return null
  }
}

export async function updateProduct(id: string, updates: Partial<Product>): Promise<Product | null> {
  try {
    // Filter out readonly fields
    const { id: _, created_at, ...updateFields } = updates

    if (Object.keys(updateFields).length === 0) {
      return await getProductById(id)
    }

    // Build the SET clause dynamically
    const setEntries = Object.entries(updateFields)
    const setClause = setEntries.map(([key], index) => `${key} = $${index + 2}`).join(", ")
    const values = [id, ...setEntries.map(([, value]) => value)]

    const result = await sql`
      UPDATE products 
      SET ${sql.unsafe(setClause)}, updated_at = NOW()
      WHERE id = ${id}
      RETURNING *
    `
    return result.length > 0 ? (result[0] as Product) : null
  } catch (error) {
    console.error("Error updating product:", error)
    return null
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`
    return true
  } catch (error) {
    console.error("Error deleting product:", error)
    return false
  }
}
