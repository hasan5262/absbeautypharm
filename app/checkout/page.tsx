"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedBackground } from "@/components/animated-background"
import { DynamicGlow } from "@/components/dynamic-glow"
import { Header } from "@/components/header"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800/60 to-black">
      <AnimatedBackground />
      <DynamicGlow />
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shopping
          </Link>
        </div>

        <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm">
          <CardContent className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Checkout Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We're currently perfecting the theme and user experience. Checkout functionality will be available soon!
            </p>
            <Link href="/products">
              <Button className="bg-black hover:bg-gray-800">Browse Products</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
