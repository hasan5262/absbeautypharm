import { createClient } from "@/lib/supabase/server"

export interface Product {
  id: number
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

export async function getAllProducts(): Promise<Product[]> {
  const supabase = await createClient()
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return products as Product[]
}

export async function getProductById(id: number): Promise<Product | null> {
  const supabase = await createClient()
  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return product as Product
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const supabase = await createClient()
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products by category:", error)
    return []
  }

  return products as Product[]
}

export async function searchProducts(query: string): Promise<Product[]> {
  const supabase = await createClient()
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error searching products:", error)
    return []
  }

  return products as Product[]
}

export async function updateProduct(id: number, updates: Partial<Product>): Promise<Product | null> {
  const supabase = await createClient()
  const { data: product, error } = await supabase
    .from("products")
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating product:", error)
    return null
  }

  return product as Product
}

export async function createProduct(
  product: Omit<Product, "id" | "created_at" | "updated_at">,
): Promise<Product | null> {
  const supabase = await createClient()
  const { data: newProduct, error } = await supabase
    .from("products")
    .insert({
      ...product,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating product:", error)
    return null
  }

  return newProduct as Product
}

export async function deleteProduct(id: number): Promise<boolean> {
  const supabase = await createClient()
  const { error } = await supabase.from("products").delete().eq("id", id)

  if (error) {
    console.error("Error deleting product:", error)
    return false
  }

  return true
}
