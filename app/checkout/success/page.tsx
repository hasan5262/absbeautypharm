import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"
import { CheckCircle, Package, Mail } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <AnimatedBackground />
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/90 backdrop-blur-sm text-center">
            <CardHeader className="pb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">Order Confirmed!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Thank you for your purchase! Your order has been successfully placed and is being processed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Confirmation Email</p>
                    <p className="text-xs text-gray-600">Sent to your inbox</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <Package className="h-5 w-5 text-green-600" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Processing</p>
                    <p className="text-xs text-gray-600">1-2 business days</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/">
                  <Button className="w-full bg-black hover:bg-gray-800">Continue Shopping</Button>
                </Link>
                <Link href="/orders">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Order History
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
