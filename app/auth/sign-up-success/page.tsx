import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { DynamicGlow } from "@/components/dynamic-glow"

export default function SignUpSuccessPage() {
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
            <CardTitle className="text-2xl text-gray-900">Check Your Email</CardTitle>
            <CardDescription>We've sent you a confirmation link</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-sm text-gray-600">
              You've successfully signed up for ABS Beauty Pharm. Please check your email to confirm your account before
              signing in.
            </p>
            <Link href="/auth/login">
              <Button className="w-full bg-black hover:bg-gray-800">Back to Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
