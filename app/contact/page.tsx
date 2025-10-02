import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const whatsappNumber = "96171020517"
  const whatsappMessage = encodeURIComponent("Hi! I'd like to know more about your products.")

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">Let's Connect</h1>
          <p className="text-xl text-gray-300 mb-4 text-pretty">
            Have questions about our products? Want to place an order?
          </p>
          <p className="text-lg text-gray-400 text-pretty">
            We're here to help you find the perfect beauty and wellness products.
          </p>
        </div>

        {/* Primary CTA - WhatsApp */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border border-green-500/20">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 mb-6">
              <MessageCircle className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Chat with Us on WhatsApp</h2>
            <p className="text-lg text-green-50 mb-8 max-w-2xl text-pretty">
              Get instant responses to your questions, personalized product recommendations, and place orders directly
              through WhatsApp.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 text-xl px-12 py-7 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full md:w-auto"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Chatting Now
              </Button>
            </a>
            <p className="text-green-100 mt-6 text-sm">Available: 9 AM - 9 PM (Lebanon Time)</p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-gray-700 flex-1 max-w-xs"></div>
          <span className="px-6 text-gray-500 text-sm uppercase tracking-wider">Or Follow Us</span>
          <div className="h-px bg-gray-700 flex-1 max-w-xs"></div>
        </div>

        {/* Social Media Section */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Connect on Social Media</h3>
          <p className="text-gray-400 text-center mb-8 text-pretty">
            Stay updated with our latest products, beauty tips, and exclusive offers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/absbeautypharm/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <Instagram className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Instagram</h4>
                    <p className="text-white/80 text-sm">@absbeautypharm</p>
                  </div>
                </div>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@absbeautypharm"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">TikTok</h4>
                    <p className="text-gray-400 text-sm">@absbeautypharm</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1QfdxCnPJV/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <Facebook className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Facebook</h4>
                    <p className="text-blue-100 text-sm">ABS Beauty Pharm</p>
                  </div>
                </div>
              </div>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/absbeautypharm" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">X (Twitter)</h4>
                    <p className="text-gray-400 text-sm">@absbeautypharm</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Prefer to browse our products first?</p>
          <Link href="/products">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-700 text-white hover:bg-white/5 rounded-xl bg-transparent"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
