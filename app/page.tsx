"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { ArrowRight, Sparkles, Shield, Award, Truck } from "lucide-react"
import Link from "next/link"

const featuredProducts = [
  {
    id: "1",
    name: "CLEAR:UP EMULSION",
    description:
      "Light cleansing emulsion with a velvety texture for the removal of oil-soluble contaminants and make-up",
    volume: "250 mL",
    price: 45.0,
    category: "Cleansers",
    effects: ["Gently cleanses", "Removes waterproof make-up", "Calming effect", "Moisturizes skin"],
    image_url: "/luxury-skincare-cleanser-bottle.jpg",
  },
  {
    id: "2",
    name: "ENZYME:CITRUS MASK",
    description: "Innovative formula for delicate exfoliation, nutrition and skin colour improvement",
    volume: "150 mL",
    price: 52.0,
    category: "Masks",
    effects: ["Removes keratinized cells", "Improves circulation", "Enriches with vitamins", "Lightens pigment spots"],
    image_url: "/citrus-enzyme-face-mask-jar.jpg",
  },
  {
    id: "3",
    name: "HYDRO:COLD MASK",
    description: "Prepares the skin for further professional procedures",
    volume: "150 mL",
    price: 38.0,
    category: "Masks",
    effects: ["Deep pore cleansing", "Softens comedones", "Moisturizing effect", "Anti-inflammatory"],
    image_url: "/hydrating-cold-face-mask.jpg",
  },
  {
    id: "4",
    name: "FRESH:LIGHT CREAM",
    description: "Formula for flawless skin even without make-up",
    volume: "50 mL",
    price: 42.0,
    category: "Moisturizers",
    effects: ["Mattifies skin", "Narrows pores", "Prevents inflammation", "Restores hydrolipid film"],
    image_url: "/light-moisturizing-face-cream.jpg",
  },
  {
    id: "5",
    name: "SILK:GLOSS CREAM",
    description: "Formula with a delicate silky texture for daytime care or use as a make-up base",
    volume: "50 mL",
    price: 48.0,
    category: "Moisturizers",
    effects: ["Nourishes skin", "Maintains moisture", "Gives elasticity", "Calming effect"],
    image_url: "/silky-day-cream-luxury-skincare.jpg",
  },
  {
    id: "6",
    name: "TRIPLE:ESSENCE",
    description: "Anti-aging essence for skin structure renewal",
    volume: "30 mL",
    price: 65.0,
    category: "Serums",
    effects: ["Reduces facial stress", "Smooths wrinkles", "Improves skin turgor", "Anti-inflammatory"],
    image_url: "/anti-aging-serum-essence-bottle.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge className="bg-black/40 text-white border-white/30 backdrop-blur-sm">
              Professional Beauty & Pharmaceutical Solutions
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-white">Advanced Beauty</span>
              <br />
              <span className="text-white">Redefined</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Discover ABS Beauty Pharm's revolutionary skincare solutions. Professional-grade formulations for
              transformative results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-6 text-lg">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/20 px-8 py-6 text-lg bg-black/20 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Premium Formulations",
                description: "Advanced active ingredients for maximum efficacy",
              },
              {
                icon: Shield,
                title: "Dermatologically Tested",
                description: "Safe and gentle for all skin types",
              },
              {
                icon: Award,
                title: "Professional Grade",
                description: "Trusted by beauty professionals worldwide",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Quick and secure shipping to your door",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-100 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-100 text-lg max-w-2xl mx-auto">
              Discover our most popular skincare solutions, carefully crafted with premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Transform Your Skincare Routine</h2>
            <p className="text-gray-200 text-lg">
              Join thousands of satisfied customers who have experienced the ABS Beauty Pharm difference. Professional
              results, delivered to your door.
            </p>
            <Button size="lg" className="px-8 py-6 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src="/images/abs-logo.png" alt="ABS Beauty Pharm" className="h-8 w-auto" />
              <p className="text-gray-300 text-sm">
                Professional beauty and pharmaceutical solutions for transformative skincare results.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Products</h4>
              <div className="space-y-2 text-sm">
                <Link
                  href="/products?category=cleansers"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Cleansers
                </Link>
                <Link
                  href="/products?category=moisturizers"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Moisturizers
                </Link>
                <Link
                  href="/products?category=treatments"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Treatments
                </Link>
                <Link
                  href="/products?category=serums"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Serums
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
                <Link href="/shipping" className="block text-gray-300 hover:text-white transition-colors">
                  Shipping
                </Link>
                <Link href="/returns" className="block text-gray-300 hover:text-white transition-colors">
                  Returns
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="/faq" className="block text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">© 2024 ABS Beauty Pharm S.A.R.L. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
