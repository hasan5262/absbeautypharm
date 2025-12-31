"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl mx-auto px-4">
        <div className="bg-background/40 backdrop-blur-md rounded-2xl border border-border shadow-2xl">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/abs-favicon.png" alt="ABS Beauty Pharm" className="h-12 w-auto" />
            </Link>

            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-accent rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <div className="pt-24" />

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />

          {/* Popup Navigation */}
          <div className="relative bg-background/95 backdrop-blur-md rounded-3xl border border-border p-8 w-full max-w-md shadow-2xl">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-foreground hover:bg-accent rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Logo in popup */}
            <div className="flex justify-center mb-8">
              <img src="/images/abs-favicon.png" alt="ABS Beauty Pharm" className="h-16 w-auto" />
            </div>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground rounded-xl"
              />
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <Link
                href="/products"
                className="text-foreground hover:text-muted-foreground transition-colors py-3 px-4 rounded-xl hover:bg-accent text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="text-foreground hover:text-muted-foreground transition-colors py-3 px-4 rounded-xl hover:bg-accent text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-muted-foreground transition-colors py-3 px-4 rounded-xl hover:bg-accent text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
