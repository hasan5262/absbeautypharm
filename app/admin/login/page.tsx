"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { DynamicGlow } from "@/components/dynamic-glow"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (email === "hasanmerhi8117@outlook.com" && password === "MhdHasan$64342736") {
        // Store admin session
        localStorage.setItem(
          "adminUser",
          JSON.stringify({
            email,
            id: "admin-user",
            role: "admin",
          }),
        )
        router.push("/admin")
      } else {
        throw new Error("Invalid admin credentials")
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800/60 to-black flex items-center justify-center p-6">
      <AnimatedBackground />
      <DynamicGlow />
      <div className="w-full max-w-md relative z-10">
        <Card className="bg-white/90 backdrop-blur-sm border-gray-200/50">
          <CardHeader className="text-center">
            <Link href="/" className="flex justify-center mb-4">
              <img src="/images/abs-logo.png" alt="ABS Beauty Pharm" className="h-8 w-auto" />
            </Link>
            <CardTitle className="text-2xl text-gray-900">Admin Login</CardTitle>
            <CardDescription>Sign in to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Admin Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" className="w-full bg-black hover:bg-gray-800" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In as Admin"}
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                <Link href="/" className="underline underline-offset-4 text-black hover:text-gray-700">
                  Back to Store
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
