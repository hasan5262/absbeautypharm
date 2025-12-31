"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AnimatedBackground } from "@/components/animated-background"
import { DynamicGlow } from "@/components/dynamic-glow"
import { Header } from "@/components/header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FeaturedProducts } from "@/components/featured-products"
import { ArrowRight, Sparkles, Shield, Award, Truck } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getSupabaseBrowserClient } from "@/lib/supabase-singleton"

interface Product {
  id: string
  name: string
  image_url: string
  category: string
  description: string
}

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const supabase = getSupabaseBrowserClient()

        const { data, error } = await supabase
          .from("products")
          .select("id, name, image_url, category, description")
          .eq("in_stock", true)
          .not("image_url", "is", null)
          .not("image_url", "like", "%placeholder%")
          .limit(9)
          .order("created_at", { ascending: false })

        if (error) {
          console.error("[v0] Error fetching featured products:", error)
          setFeaturedProducts([])
        } else if (data) {
          const uniqueProducts = data.filter(
            (product, index, self) => index === self.findIndex((p) => p.name === product.name),
          )
          setFeaturedProducts(uniqueProducts)
        }
      } catch (error) {
        console.error("[v0] Exception fetching featured products:", error)
        setFeaturedProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedProducts()
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus("loading")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubscribeStatus("success")
      setEmail("")
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    } catch (error) {
      setSubscribeStatus("error")
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/60 to-background relative">
      <AnimatedBackground />
      <DynamicGlow />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal direction="fade" delay={200}>
              <Badge className="bg-background/40 text-foreground border-border backdrop-blur-sm">
                Professional Beauty & Pharmaceutical Solutions
              </Badge>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="text-foreground">Advanced Beauty</span>
                <br />
                <span className="text-foreground">Redefined</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discover ABS Beauty Pharm's revolutionary skincare solutions. Professional-grade formulations for
                transformative results.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/products">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Explore Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-border text-foreground hover:bg-accent px-8 py-6 text-lg bg-background/20 backdrop-blur-sm"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Large Logo Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" delay={200}>
            <div className="max-w-2xl mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-09-05_15-41-02-removebg-preview-n85AARuypdfRK2vgky6y3f1tZa5lTp.png"
                alt="ABS Beauty Pharm Logo"
                className="w-full max-w-lg mx-auto h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Products Section */}
      {!loading && featuredProducts.length > 0 && <FeaturedProducts products={featuredProducts} />}

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
              <ScrollReveal key={index} direction="up" delay={200 + index * 100}>
                <div className="text-center space-y-4 p-6 rounded-lg bg-card/20 backdrop-blur-sm border border-border">
                  <div className="w-12 h-12 mx-auto bg-accent rounded-full flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <ScrollReveal direction="up" delay={200}>
            <div className="max-w-3xl mx-auto space-y-8 p-8 rounded-2xl bg-card/40 backdrop-blur-sm border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Transform Your Skincare Routine</h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of satisfied customers who have experienced the ABS Beauty Pharm difference. Professional
                results, delivered to your door.
              </p>
              <Link href="/products">
                <Button size="lg" className="px-8 py-6 text-lg">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <ScrollReveal direction="up" delay={100}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <img src="/images/abs-logo.png" alt="ABS Beauty Pharm" className="h-10 w-auto" />
                <p className="text-muted-foreground text-sm">
                  Professional beauty and pharmaceutical solutions for transformative skincare results.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground font-semibold">Products</h4>
                <div className="space-y-2 text-sm">
                  <Link
                    href="/products?category=cleansers"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cleansers
                  </Link>
                  <Link
                    href="/products?category=moisturizers"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Moisturizers
                  </Link>
                  <Link
                    href="/products?category=treatments"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Treatments
                  </Link>
                  <Link
                    href="/products?category=serums"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Serums
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground font-semibold">Company</h4>
                <div className="space-y-2 text-sm">
                  <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                  <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                  <Link
                    href="/shipping"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Shipping
                  </Link>
                  <Link href="/returns" className="block text-muted-foreground hover:text-foreground transition-colors">
                    Returns
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground font-semibold">Stay Updated</h4>
                <p className="text-muted-foreground text-sm">
                  Subscribe to our newsletter for exclusive offers and updates.
                </p>
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                  >
                    {subscribeStatus === "loading"
                      ? "Subscribing..."
                      : subscribeStatus === "success"
                        ? "Subscribed!"
                        : "Subscribe"}
                  </Button>
                  {subscribeStatus === "error" && (
                    <p className="text-destructive text-xs">Failed to subscribe. Please try again.</p>
                  )}
                </form>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="fade" delay={300}>
            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-muted-foreground text-sm">© 2025 ABS Beauty Pharm S.A.R.L. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
