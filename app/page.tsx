"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Instagram, MessageCircle, Sparkles, Heart, Zap, Star, Info } from "lucide-react"

const categories = [
  {
    id: "quote",
    name: "Quote Stickers",
    emoji: "💬",
    description: "Motivational, sarcastic & Nepali slang",
    price: "Rs. 500",
    stickers: "25-30 stickers",
    samples: [
"https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/motivational/1.jpeg",
      "/images/quote-sample-1.png", // Sample 1
      "/images/quote-sample-2.png", // Sample 2
      "/images/quote-sample-3.png", // Sample 3
      "/images/quote-sample-4.png", // Sample 4
      "/images/quote-sample-5.png", // Sample 5
    ],
    popular: ["Motivational Quotes", "Nepali Slang", "Sarcastic Vibes", "Study Motivation"],
  },
  {
    id: "anime",
    name: "Anime Stickers",
    emoji: "✨",
    description: "Naruto, One Piece, JJK & more",
    price: "Rs. 500",
    stickers: "25-30 stickers",
    samples: [
 "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/anime/WhatsApp%20Image%202025-05-29%20at%2013.19.34.jpeg",

      "/images/anime-sample-1.png",
      "/images/anime-sample-2.png",
      "/images/anime-sample-3.png",
      "/images/anime-sample-4.png",
      "/images/anime-sample-5.png",
    ],
    popular: ["Naruto", "One Piece", "Jujutsu Kaisen", "Attack on Titan"],
  },
  {
    id: "guitar",
    name: "Guitar Stickers",
    emoji: "🎸",
    description: "For musicians & guitar lovers",
    price: "Rs. 600 - 2000",
    stickers: "Front Wrap - Whole body wrap",
    samples: [
 "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/guitars/WhatsApp%20Image%202025-05-29%20at%2013.21.18.jpeg",
      "/images/guitar-sample-1.png",
      "/images/guitar-sample-2.png",
      "/images/guitar-sample-3.png",
      "/images/guitar-sample-4.png",
      "/images/guitar-sample-5.png",
    ],
    popular: ["Electric Guitar", "Acoustic Vibes", "Band Logos", "Music Quotes"],
    isSpecial: true, // This will link to the guitar page
  },
  {
    id: "logo",
    name: "Logo Stickers",
    emoji: "🔥",
    description: "For businesses & creators",
    price: "Rs. 500",
    stickers: "25-30 stickers",
    samples: [
 "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/custom/Custom%20brand.jpg",
      "/images/logo-sample-1.png",
      "/images/logo-sample-2.png",
      "/images/logo-sample-3.png",
      "/images/logo-sample-4.png",
      "/images/logo-sample-5.png",
    ],
    popular: ["Business Logos", "Creator Brands", "Social Media", "Gaming Logos"],
  },
  {
    id: "couple",
    name: "Couple/Name Stickers",
    emoji: "💕",
    description: "Names, couple initials & more",
    price: "Rs. 500",
    stickers: "25-30 stickers",
    samples: [
 "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/couple/Wishing%20Images%20-%20Free%20Images%20for%20you%20and%20your%20love%20ones.jpeg",
      "/images/couple-sample-1.png",
      "/images/couple-sample-2.png",
      "/images/couple-sample-3.png",
      "/images/couple-sample-4.png",
      "/images/couple-sample-5.png",
    ],
    popular: ["Couple Names", "Initials", "Anniversary", "Love Quotes"],
  },
  {
    id: "custom",
    name: "Custom Orders",
    emoji: "🎨",
    description: "Upload your own design",
    price: "Rs. 500",
    stickers: "25-30 stickers",
    samples: [
 "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/custom/Custom%20brand.jpg",
      "/images/custom-sample-1.png",
      "/images/custom-sample-2.png",
      "/images/custom-sample-3.png",
      "/images/custom-sample-4.png",
      "/images/custom-sample-5.png",
    ],
    popular: ["Personal Photos", "Custom Art", "Memes", "Brand Designs"],
  },
]

export default function HomePage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    handle: "",
    stickerType: "",
    quantity: "",
    location: "",
    notes: "",
  })
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
    }
  }

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const orderDetails = `
🎨 *New Order - StickifyNepal*

👤 *Customer:* ${formData.name}
📱 *Handle:* ${formData.handle}
🏷️ *Sticker Type:* ${formData.stickerType}
📦 *Quantity:* ${formData.quantity}
📍 *Location:* ${formData.location}
${formData.notes ? `📝 *Notes:* ${formData.notes}` : ""}
${uploadedFile ? `📎 *File:* ${uploadedFile.name}` : ""}

✨ Order placed via https://stickifynepal.vercel.app/
    `.trim()

    const whatsappUrl = `https://wa.me/9779808901365?text=${encodeURIComponent(orderDetails)}`
    window.open(whatsappUrl, "_blank")
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-x-hidden">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-50"></div>
        <div
          className="absolute bottom-20 right-10 w-5 h-5 bg-pink-400 rounded-full animate-bounce opacity-30"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
  <Link href="/">
    <img
      src="https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/logo.jpeg"
      alt="Stickify Logo"
      className="w-10 h-10 rounded-full"
    />
  </Link>

  <Link
    href="/"
    className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse"
  >
    StickifyNepal ✨
  </Link>
</div>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600 font-semibold transition-colors">
                Home
              </Link>
              <Link
                href="/order-details"
                className="text-gray-600 hover:text-purple-600 font-semibold transition-colors flex items-center gap-1"
              >
                <Info className="w-4 h-4" />
                Details
              </Link>
              <Link href="/guitar" className="text-gray-600 hover:text-purple-600 font-semibold transition-colors">
                Guitar Stickers 🎸
              </Link>
            </nav>
            {/* Mobile Menu */}
            <div className="md:hidden">
              <Link
                href="/order-details"
                className="text-gray-600 hover:text-purple-600 font-semibold transition-colors flex items-center gap-1"
              >
                <Info className="w-4 h-4" />
                <span className="text-sm">Details</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 text-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                <span className="inline-block animate-bounce">Custom</span>{" "}
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
                  Stickers
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent inline-block animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  Made in Nepal 🇳🇵
                </span>
              </h2>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg md:text-2xl text-gray-600 mb-8 leading-relaxed">
                From TikTok trends to your laptop 📱➡️💻
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-bold">
                  Print Your ideas into reality with us ✨❤️
                </span>
              </p>
            </div>
            <div
              className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                <span className="font-semibold">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="font-semibold">Custom Designs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                <span className="font-semibold">Premium Quality</span>
              </div>
            </div>
            {/* Call to Action for Details */}
            <div className="animate-fade-in-up mt-8" style={{ animationDelay: "0.7s" }}>
              <Link href="/order-details">
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-full px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Info className="w-5 h-5 mr-2" />
                  Learn More About Our Stickers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-3xl md:text-5xl font-black mb-4">Choose Your Vibe 🎨</h3>
            <p className="text-lg text-gray-600">Discover our amazing sticker collections!</p>
            <div className="mt-4">
              <Link href="/order-details" className="text-purple-600 hover:text-purple-700 font-semibold underline">
                Want detailed information? Check our sticker details page →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className={`group transition-all duration-500 border-2 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer rounded-xl overflow-hidden ${
                  category.isSpecial
                    ? "border-orange-300 hover:border-orange-400"
                    : "border-purple-200 hover:border-purple-300"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => {
                  if (category.isSpecial) {
                    window.location.href = "/guitar"
                  } else {
                    setFormData((prev) => ({ ...prev, stickerType: category.name }))
                    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    {/* Image */}
                    <div className="relative aspect-square w-full">
                      <Image
                        src={category.samples[0] || "/placeholder.svg"}
                        alt={category.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      {category.isSpecial && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                          SPECIAL
                        </div>
                      )}
                      {/* Details Link */}
                      <div className="absolute top-4 left-4">
                        <Link
                          href="/order-details"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-white/90 hover:bg-white text-gray-700 hover:text-purple-600 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        >
                          <Info className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-3 animate-bounce">{category.emoji}</div>
                        <h4 className="text-2xl font-bold mb-2">{category.name}</h4>
                        <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                      </div>

                      <div className="flex justify-center items-center gap-2 mb-4">
                        <span
                          className={`text-white px-3 py-1 rounded-full text-sm font-semibold ${
                            category.isSpecial
                              ? "bg-gradient-to-r from-orange-500 to-red-500"
                              : "bg-gradient-to-r from-green-500 to-green-600"
                          }`}
                        >
                          {category.price}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Popular Tags */}
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {category.popular.slice(0, 3).map((item, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              category.isSpecial
                                ? "bg-gradient-to-r from-orange-100 to-red-100 text-orange-700"
                                : "bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700"
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="mt-auto">
                        {category.isSpecial ? (
                          <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full py-2 transform hover:scale-105 transition-all duration-300">
                            Explore Guitar Collection 🎸
                          </Button>
                        ) : (
                          <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold rounded-full py-2 transform hover:scale-105 transition-all duration-300">
                            Order Now 🚀
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-purple-300 bg-white/95 backdrop-blur-sm shadow-2xl animate-fade-in-up">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Place Your Order 📦
                  </h3>
                  <p className="text-gray-600 text-lg">Fill out the form and we'll contact you on WhatsApp!</p>
                  <div className="mt-2">
                    <Link href="/order-details" className="text-purple-600 hover:text-purple-700 text-sm underline">
                      Need more details about our stickers? Click here
                    </Link>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-slide-in-left">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="mt-1 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                    <div className="animate-slide-in-right">
                      <Label htmlFor="handle" className="text-sm font-semibold text-gray-700">
                        Instagram/TikTok Handle
                      </Label>
                      <div className="relative mt-1">
                        <Instagram className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="handle"
                          value={formData.handle}
                          onChange={(e) => handleInputChange("handle", e.target.value)}
                          placeholder="@yourusername"
                          className="pl-10 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-all duration-300 hover:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      <Label htmlFor="stickerType" className="text-sm font-semibold text-gray-700">
                        Sticker Type *
                      </Label>
                      <Select
                        value={formData.stickerType}
                        onValueChange={(value) => handleInputChange("stickerType", value)}
                        required
                      >
                        <SelectTrigger className="mt-1 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-all duration-300 hover:shadow-md">
                          <SelectValue placeholder="Choose category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.name}>
                              {category.emoji} {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                      <Label htmlFor="quantity" className="text-sm font-semibold text-gray-700">
                        Quantity *
                      </Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        placeholder="How many?"
                        required
                        className="mt-1 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-all duration-300 hover:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <Label htmlFor="location" className="text-sm font-semibold text-gray-700">
                      Delivery Location *
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="City, Area"
                      required
                      className="mt-1 rounded-full border-2 border-gray-200 focus:border-purple-400 transition-all duration-300 hover:shadow-md"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <Label htmlFor="upload" className="text-sm font-semibold text-gray-700">
                      Upload Your Design (Optional)
                    </Label>
                    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-purple-400 transition-all duration-300 hover:bg-purple-50 group">
                      <input type="file" id="upload" onChange={handleFileUpload} accept="image/*" className="hidden" />
                      <label htmlFor="upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-purple-500 transition-colors duration-300 group-hover:scale-110 transform" />
                        <p className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors duration-300">
                          {uploadedFile ? (
                            <span className="text-green-600 font-semibold">✅ {uploadedFile.name}</span>
                          ) : (
                            "Click to upload image"
                          )}
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <Label htmlFor="notes" className="text-sm font-semibold text-gray-700">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Any special requests or details..."
                      className="mt-1 rounded-2xl border-2 border-gray-200 focus:border-purple-400 transition-all duration-300 hover:shadow-md"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Send Order via WhatsApp 📱
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h4 className="text-2xl md:text-3xl font-black mb-4 animate-pulse">StickifyNepal ✨</h4>
          <p className="mb-4 text-lg">Making Nepal stick out! 🇳🇵</p>
          <div className="flex justify-center items-center gap-2 text-sm md:text-base">
            <MessageCircle className="w-5 h-5 animate-bounce" />
            <span className="font-semibold">+977 9808901365</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
