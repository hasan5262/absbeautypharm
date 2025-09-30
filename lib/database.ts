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

export async function getProductById(id: string | number): Promise<Product | null> {
  const supabase = await createClient()
  const { data: product, error } = await supabase.from("products").select("*").eq("id", id).single()

  if (error) {
    console.error("[v0] Database error:", error)
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

  // Clean and prepare search terms
  const cleanQuery = query.trim().toLowerCase()
  const searchTerms = cleanQuery.split(/\s+/).filter((term) => term.length > 0)

  // Build flexible search conditions
  const searchConditions = searchTerms
    .map((term) => {
      // Remove special characters and create fuzzy patterns
      const fuzzyTerm = term.replace(/[^a-z0-9]/g, "")
      return `name.ilike.%${term}%,description.ilike.%${term}%,category.ilike.%${term}%,active_ingredients.ilike.%${term}%`
    })
    .join(",")

  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .or(searchConditions)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error searching products:", error)
    return []
  }

  // Additional client-side fuzzy matching for better results
  const results =
    products?.filter((product) => {
      const searchableText = [
        product.name,
        product.description,
        product.category,
        product.active_ingredients,
        ...(product.effects || []),
      ]
        .join(" ")
        .toLowerCase()

      return searchTerms.some((term) => {
        // Exact match
        if (searchableText.includes(term)) return true

        // Fuzzy match - allow for small typos
        const words = searchableText.split(/\s+/)
        return words.some((word) => {
          if (word.length < 3) return word === term

          // Simple fuzzy matching - allow 1 character difference for words > 3 chars
          if (Math.abs(word.length - term.length) <= 1) {
            let differences = 0
            const maxLen = Math.max(word.length, term.length)
            for (let i = 0; i < maxLen; i++) {
              if (word[i] !== term[i]) differences++
              if (differences > 1) return false
            }
            return differences <= 1
          }

          return false
        })
      })
    }) || []

  return results as Product[]
}

export async function updateProduct(id: string | number, updates: Partial<Product>): Promise<Product | null> {
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

export async function deleteProduct(id: string | number): Promise<boolean> {
  const supabase = await createClient()
  const { error } = await supabase.from("products").delete().eq("id", id)

  if (error) {
    console.error("Error deleting product:", error)
    return false
  }

  return true
}
