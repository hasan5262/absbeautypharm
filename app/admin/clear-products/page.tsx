"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function ClearProductsPage() {
  const [isDeleting, setIsDeleting] = useState(false)
  const [message, setMessage] = useState("")

  const clearAllProducts = async () => {
    setIsDeleting(true)
    setMessage("")

    try {
      const response = await fetch("/api/admin/clear-products", {
        method: "DELETE",
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(`✅ Successfully deleted ${result.deletedCount} products`)
      } else {
        setMessage(`❌ Error: ${result.error}`)
      }
    } catch (error) {
      setMessage(`❌ Error: ${error instanceof Error ? error.message : "Unknown error"}`)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Clear All Products</CardTitle>
          <CardDescription>This will permanently delete all products from the database.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={clearAllProducts} disabled={isDeleting} variant="destructive" className="w-full">
            {isDeleting ? "Deleting..." : "Delete All Products"}
          </Button>

          {message && <div className="p-3 rounded-md bg-muted text-sm">{message}</div>}
        </CardContent>
      </Card>
    </div>
  )
}
