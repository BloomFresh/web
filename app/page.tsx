"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Globe, Menu, Heart, X, Shield, Clock, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import WhatsAppIcon from "@/components/whatsapp-icon"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/919790629422?text=${encodedMessage}`, "_blank")
  }

  const products = [
    {
      name: "Jasmine",
      weight: "100g",
      image: "/images/jasmine-flowers.jpg",
      popular: true,
      description: "Fragrant white blooms perfect for daily prayers",
    },
    {
      name: "Lotus",
      image: "/images/lotus-flower.jpg",
      description: "Sacred flowers symbolizing purity and enlightenment",
    },
    {
      name: "Fresh Sevanthi",
      weight: "100g",
      image: "/images/chrysanthemum-flower.jpg",
      description: "Vibrant chrysanthemums for festive occasions",
    },
    {
      name: "Marigold",
      weight: "100g",
      image: "/images/marigold-flower.jpg",
      description: "Golden blooms for auspicious ceremonies",
    },
    {
      name: "Pooja Flowers",
      image: "/images/flower-collage.png",
      popular: true,
      description: "Curated mix of traditional worship flowers",
    },
  ]

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fresh Daily",
      description: "Temple-fresh flowers delivered every morning at dawn",
      accent: "from-rose-500 to-pink-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Traditional Values",
      description: "Preserving ancient rituals in contemporary homes",
      accent: "from-orange-500 to-red-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Hand-selected blooms with eco-conscious packaging",
      accent: "from-emerald-500 to-green-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Professional Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100">
                <Image
                  src="/images/bloom-fresh-new-logo.png"
                  alt="Earthe's Bloom Fresh Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-semibold text-2xl text-gray-800 tracking-wide">
                  Earthe's <span className="text-rose-500">Bloom Fresh</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              {["Home", "Heritage", "Collection", "Connect"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase() === "heritage" ? "about" : item.toLowerCase() === "home" ? "home" : item.toLowerCase() === "collection" ? "products" : "contact"}`}
                  className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium tracking-wide relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/bloom-fresh-new-logo.png"
                  alt="Earthe's Bloom Fresh Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-xl text-gray-800">
                  Earthe's <span className="text-rose-500">Bloom Fresh</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          <div className="space-y-8">
            {["Home", "Heritage", "Collection", "Connect"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === "heritage" ? "about" : item.toLowerCase() === "home" ? "home" : item.toLowerCase() === "collection" ? "products" : "contact"}`}
                className="block text-gray-700 hover:text-rose-500 transition-colors font-medium text-lg tracking-wide py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <div className="pt-8 border-t border-gray-200">
              <Button
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold"
                onClick={() => {
                  handleWhatsAppClick("Hi! I would like to order fresh flowers from Earthe's Bloom Fresh.")
                  setMobileMenuOpen(false)
                }}
              >
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Hero Section with Pink Heart Color Background */}
      <section
        id="home"
        className="pt-18 min-h-screen flex items-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            #f8bbd9 0%, 
            #f5a6cd 25%, 
            #f291c1 50%, 
            #ef7cb5 75%, 
            #ec67a9 100%)`,
        }}
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"></div>

          {/* Modern Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-32 right-32 w-4 h-4 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-white/50 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 shadow-lg">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-white">Trusted by 500+ families</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                  Fresh
                  <span className="block text-white drop-shadow-lg">Sacred Blooms</span>
                  <span className="block text-3xl sm:text-4xl lg:text-5xl font-light text-white/90 mt-2">
                    Delivered Daily
                  </span>
                </h1>
              </div>

              <p className="text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                Experience the divine beauty of temple-fresh flowers delivered to your doorstep every morning.
                <span className="text-white font-semibold"> Premium quality, traditional values.</span>
              </p>

              {/* Clean Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80 font-medium">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-white/80 font-medium">Fresh Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Daily</div>
                  <div className="text-sm text-white/80 font-medium">Delivery</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl font-semibold tracking-wide group"
                  onClick={() =>
                    handleWhatsAppClick("Hi! I would like to order fresh flowers from Earthe's Bloom Fresh.")
                  }
                >
                  <WhatsAppIcon className="w-6 h-6 mr-3" />
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white px-8 py-4 text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:shadow-lg transition-all duration-300 rounded-xl font-semibold tracking-wide"
                >
                  View Collection
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Modern Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl transform rotate-3 backdrop-blur-sm shadow-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30">
                  <div className="aspect-square flex items-center justify-center">
                    <Image
                      src="/images/bloom-fresh-new-logo.png"
                      alt="Earthe's Bloom Fresh Logo"
                      width={400}
                      height={400}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Modern Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-white to-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Premium Quality
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Clean Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
              The Earthe's Bloom Fresh <span className="text-rose-500">Promise</span>
            </h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Bridging ancient traditions with contemporary elegance through our premium flower curation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-sm group-hover:shadow-md transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, #f8bbd9, #ec67a9)`,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-wide">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern About Section with Pink Heart Color Background */}
      <section
        id="about"
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            #f8bbd9 0%, 
            #f5a6cd 25%, 
            #f291c1 50%, 
            #ef7cb5 75%, 
            #ec67a9 100%)`,
        }}
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-white tracking-tight">
                  Our <span className="text-white drop-shadow-lg">Heritage</span>
                </h2>
                <div className="w-24 h-px bg-white/50"></div>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  Earthe's Bloom Fresh honors the sacred tradition of fresh flowers in Indian culture, bringing
                  temple-quality blooms to your doorstep with modern convenience and sustainable practices.
                </p>
                <p className="text-lg text-white/80 leading-relaxed font-medium">
                  Each flower is hand-selected at dawn, ensuring the purest essence and longest-lasting beauty for your
                  daily rituals and special celebrations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-sm border border-white/30">
                  <div className="text-3xl font-semibold text-white mb-2">500+</div>
                  <div className="text-white/80 font-medium tracking-wide">Blessed Homes</div>
                </div>
                <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-2xl shadow-sm border border-white/30">
                  <div className="text-3xl font-semibold text-white mb-2">100%</div>
                  <div className="text-white/80 font-medium tracking-wide">Fresh Promise</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative w-full h-96 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/30">
                <Image
                  src="/images/lotus-flower.jpg"
                  alt="Beautiful Lotus Flower"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
              Sacred <span className="text-rose-500">Collection</span>
            </h2>
            <div className="w-24 h-px bg-rose-300 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Hand-curated flowers sourced fresh each morning for your spiritual and decorative needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
              >
                <div className="relative">
                  {product.popular && (
                    <div
                      className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide z-10 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, #f8bbd9, #ec67a9)`,
                      }}
                    >
                      Popular Choice
                    </div>
                  )}
                  <div
                    className="w-full h-48 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, #f8bbd9, #f5a6cd)`,
                    }}
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">{product.name}</h3>
                  {product.weight && <p className="text-sm text-rose-500 mb-3 font-medium">{product.weight}</p>}
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Section with Pink Heart Color Background */}
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            #f8bbd9 0%, 
            #f5a6cd 25%, 
            #f291c1 50%, 
            #ef7cb5 75%, 
            #ec67a9 100%)`,
        }}
      >
        {/* Modern Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-white tracking-tight">
                  Connect with <span className="text-white drop-shadow-lg">Grace</span>
                </h2>
                <div className="w-24 h-px bg-white/50"></div>
                <p className="text-xl text-white/90 font-medium leading-relaxed">
                  Ready to bring sacred beauty to your home? Connect with our founder for personalized floral curation.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+91 9790629422" },
                  { icon: Mail, label: "Email", value: "Earthe.co.in@gmail.com" },
                  { icon: Globe, label: "Website", value: "www.earthe.co.in" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-white/30">
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white tracking-wide">{contact.label}</div>
                      <div className="text-white/80 font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm border border-white/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, #f8bbd9, #ec67a9)`,
                    }}
                  >
                    <Image
                      src="/images/bloom-fresh-new-logo.png"
                      alt="Earthe's Bloom Fresh Logo"
                      width={50}
                      height={50}
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 tracking-wide">Tharani</h3>
                  <p className="text-rose-500 font-medium tracking-wide uppercase text-sm">Founder & Curator</p>
                </div>

                <div className="text-center">
                  <p className="text-gray-600 mb-6 font-medium leading-relaxed italic">
                    "Passionate about preserving the sacred beauty of traditional flowers while embracing sustainable,
                    modern practices for today's conscious homes."
                  </p>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl font-semibold tracking-wide"
                    onClick={() =>
                      handleWhatsAppClick(
                        "Hi Tharani! I would like to connect with you regarding Earthe's Bloom Fresh services.",
                      )
                    }
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Connect via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full w-16 h-16 p-0 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          onClick={() => handleWhatsAppClick("Hi! I would like to order fresh flowers from Earthe's Bloom Fresh.")}
        >
          <WhatsAppIcon className="w-8 h-8" />
        </Button>
      </div>

      {/* Clean Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/bloom-fresh-new-logo.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <div>
                  <div className="font-semibold text-2xl tracking-wide">
                    Earthe's <span className="text-rose-400">Bloom Fresh</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md font-medium leading-relaxed">
                Honoring sacred traditions through fresh flowers, delivered with modern elegance and sustainable
                practices to homes across the city.
              </p>
              <div className="text-sm text-gray-500 font-medium">© 2024 Earthe's Bloom Fresh. All rights reserved.</div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 tracking-wide">Navigation</h4>
              <div className="space-y-3 text-gray-400 font-medium">
                {["Home", "Heritage", "Collection", "Connect"].map((item) => (
                  <div key={item}>
                    <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 tracking-wide">Sacred Flowers</h4>
              <div className="space-y-3 text-gray-400 font-medium">
                {["Jasmine", "Lotus", "Marigold", "Pooja Flowers"].map((flower) => (
                  <div key={flower}>{flower}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
