import { neon } from "@neondatabase/serverless"

export const sql = neon(process.env.NEON_NEON_DATABASE_URL!)

export async function getProducts(limit?: number) {
  const query = limit
    ? `SELECT * FROM products ORDER BY created_at DESC LIMIT ${limit}`
    : `SELECT * FROM products ORDER BY created_at DESC`

  return await sql(query)
}

export async function getProductById(id: string) {
  const result = await sql`SELECT * FROM products WHERE id = ${id}`
  return result[0] || null
}

export async function getProductsByCategory(category: string) {
  return await sql`SELECT * FROM products WHERE category = ${category} ORDER BY created_at DESC`
}

export async function searchProducts(query: string) {
  return await sql`
    SELECT * FROM products 
    WHERE name ILIKE ${"%" + query + "%"} 
    OR description ILIKE ${"%" + query + "%"}
    ORDER BY created_at DESC
  `
}

export async function getCartItems(userId: string) {
  return await sql`
    SELECT ci.*, p.name, p.price, p.image_url, p.volume
    FROM cart_items ci
    JOIN products p ON ci.product_id = p.id
    WHERE ci.user_id = ${userId}
  `
}

export async function addToCart(userId: string, productId: string, quantity = 1) {
  // Check if item already exists in cart
  const existing = await sql`
    SELECT * FROM cart_items 
    WHERE user_id = ${userId} AND product_id = ${productId}
  `

  if (existing.length > 0) {
    // Update quantity
    return await sql`
      UPDATE cart_items 
      SET quantity = quantity + ${quantity}
      WHERE user_id = ${userId} AND product_id = ${productId}
      RETURNING *
    `
  } else {
    // Insert new item
    return await sql`
      INSERT INTO cart_items (user_id, product_id, quantity)
      VALUES (${userId}, ${productId}, ${quantity})
      RETURNING *
    `
  }
}

export async function updateCartItemQuantity(userId: string, productId: string, quantity: number) {
  if (quantity <= 0) {
    return await sql`
      DELETE FROM cart_items 
      WHERE user_id = ${userId} AND product_id = ${productId}
    `
  }

  return await sql`
    UPDATE cart_items 
    SET quantity = ${quantity}
    WHERE user_id = ${userId} AND product_id = ${productId}
    RETURNING *
  `
}

export async function removeFromCart(userId: string, productId: string) {
  return await sql`
    DELETE FROM cart_items 
    WHERE user_id = ${userId} AND product_id = ${productId}
  `
}

export async function clearCart(userId: string) {
  return await sql`DELETE FROM cart_items WHERE user_id = ${userId}`
}
