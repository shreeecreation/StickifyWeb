"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle, ArrowLeft, Star, Check, Package, Truck, Shield, Clock } from "lucide-react"

export default function OrderDetailsPage() {
  const [selectedTab, setSelectedTab] = useState("quote")

  const categories = [
    {
      id: "quote",
      name: "Quote Stickers",
      emoji: "💬",
      description:
        "Express yourself with our premium Quote Stickers collection! Each pack contains 25-30 high-quality waterproof vinyl stickers featuring motivational quotes, sarcastic humor, and popular Nepali slang. Perfect for laptops, water bottles, journals, phones, and more. These stickers are designed to inspire, make you laugh, or show off your personality wherever you go.",
      price: "Rs. 500",
      stickers: "25-30 stickers",
      image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/motivational/1.jpeg",
      features: [
        "Waterproof and fade-resistant vinyl material",
        "High-quality printing with vibrant colors",
        "Perfect for laptops, phones, and water bottles",
        "Mix of motivational, sarcastic, and Nepali slang quotes",
        "Easy to apply and remove without residue",
        "Long-lasting durability (2+ years outdoor use)",
        "Scratch and UV resistant",
        "Various sizes from 2-4 inches",
      ],
      specifications: [
        "Material: Premium Vinyl with strong adhesive",
        "Size Range: 2-4 inches (various shapes)",
        "Thickness: 2.3 mil (0.06mm)",
        "Finish: Matte or Glossy options",
        "Waterproof: Yes, fully waterproof",
        "UV Resistant: Yes, fade-resistant",
        "Removable: Yes, without damaging surface",
        "Application: Indoor and outdoor use",
      ],
      whatsIncluded: [
        "25-30 unique quote stickers",
        "Mix of English and Nepali quotes",
        "Motivational and inspirational messages",
        "Sarcastic and funny quotes",
        "Study motivation stickers",
        "Life philosophy quotes",
      ],
    },
    {
      id: "anime",
      name: "Anime Stickers",
      emoji: "✨",
      description:
        "Bring your favorite anime characters to life with our Anime Stickers collection! Each pack includes 25-30 premium stickers featuring popular characters from Naruto, One Piece, Jujutsu Kaisen, Attack on Titan, Demon Slayer, and more. Perfect for anime fans who want to show off their passion with high-quality, vibrant character designs.",
      price: "Rs. 500",
      stickers: "25-30 stickers",
      image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/anime/WhatsApp%20Image%202025-05-29%20at%2013.19.34.jpeg",
      features: [
        "Vibrant, full-color anime character designs",
        "High-definition printing with sharp details",
        "Waterproof and scratch-resistant",
        "Perfect for laptops, phones, and notebooks",
        "Popular anime series included",
        "Authentic character artwork",
        "Long-lasting adhesive",
        "Collector-quality printing",
      ],
      specifications: [
        "Material: Premium Vinyl with anime-grade printing",
        "Size Range: 2-4 inches (character dependent)",
        "Thickness: 2.3 mil (0.06mm)",
        "Finish: High-gloss for vibrant colors",
        "Waterproof: Yes, fully waterproof",
        "UV Resistant: Yes, colors won't fade",
        "Removable: Yes, without residue",
        "Print Quality: 300 DPI high-resolution",
      ],
      whatsIncluded: [
        "25-30 anime character stickers",
        "Naruto series characters",
        "One Piece crew members",
        "Jujutsu Kaisen sorcerers",
        "Attack on Titan characters",
        "Demon Slayer heroes",
      ],
    },
    {
      id: "guitar",
      name: "Guitar Stickers",
      emoji: "🎸",
      description:
        "Transform your guitar with our premium Guitar Stickers collection! We offer various options from small decorative stickers to full body wraps, featuring anime characters, band logos, aesthetic designs, chill vibes, and custom designs. Express your musical style with these high-quality, durable vinyl stickers designed specifically for guitars and music equipment.",
      price: "Rs. 600 - 2000",
      stickers: "Front Wrap - Whole body wrap",
      image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/guitars/WhatsApp%20Image%202025-05-29%20at%2013.21.18.jpeg",
      features: [
        "Specially designed for guitar surfaces",
        "Available in various sizes for different guitar types",
        "Multiple design categories: anime, band logos, aesthetic, chill, custom",
        "Professional application guidance included",
        "Heat and humidity resistant",
        "Removable without damaging guitar finish",
        "Custom sizing available",
        "Professional-grade adhesive",
      ],
      specifications: [
        "Material: Premium Guitar-Safe Vinyl",
        "Size: Custom fit to your guitar model",
        "Thickness: 3.5 mil (0.09mm) for durability",
        "Finish: Matte or Gloss options",
        "Waterproof: Yes, stage-ready",
        "UV Resistant: Yes, stage light safe",
        "Removable: Yes, guitar-safe adhesive",
        "Application: Professional installation recommended",
      ],
      whatsIncluded: [
        "Custom-sized guitar stickers",
        "Application instructions",
        "Cleaning cloth",
        "Squeegee tool",
        "Design consultation",
        "Multiple design options",
      ],
    },
    {
      id: "logo",
      name: "Logo Stickers",
      emoji: "🔥",
      description:
        "Promote your brand or business with our professional Logo Stickers! Each pack contains 25-30 custom-printed stickers featuring your logo or design. Perfect for marketing, packaging, events, merchandise, or brand promotion. Our high-quality vinyl ensures your brand looks professional and stands out wherever it's displayed.",
      price: "Rs. 500",
      stickers: "25-30 stickers",
      image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/custom/Custom%20brand.jpg",
      features: [
        "Custom printed with your logo or design",
        "Professional finish for business use",
        "Waterproof and weather-resistant",
        "Perfect for product packaging and branding",
        "Available in various shapes and sizes",
        "Bulk ordering available for businesses",
        "High-resolution printing",
        "Brand color matching",
      ],
      specifications: [
        "Material: Premium Business-Grade Vinyl",
        "Size: Various (customizable to your needs)",
        "Thickness: 2.3 mil (0.06mm)",
        "Finish: Professional matte or gloss",
        "Waterproof: Yes, outdoor rated",
        "UV Resistant: Yes, fade-resistant",
        "Removable: Yes, clean removal",
        "Print Quality: Vector-based high resolution",
      ],
      whatsIncluded: [
        "25-30 custom logo stickers",
        "Professional design consultation",
        "Multiple size options",
        "Color matching service",
        "Bulk discount available",
        "Fast turnaround time",
      ],
    },
    {
      id: "couple",
      name: "Couple/Name Stickers",
      emoji: "💕",
      description:
        "Celebrate your relationship with our Couple/Name Stickers collection! Each pack includes 25-30 personalized stickers featuring names, couple initials, anniversary dates, and love quotes. Perfect for personalizing belongings, creating couple gifts, adding a special touch to wedding favors, or showing your love in a unique way.",
      price: "Rs. 500",
      stickers: "25-30 stickers",
      image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/couple/Wishing%20Images%20-%20Free%20Images%20for%20you%20and%20your%20love%20ones.jpeg",
      features: [
        "Personalized with names or initials",
        "Romantic designs and love quotes",
        "Perfect for couples, gifts, and celebrations",
        "Customizable fonts and styles",
        "Waterproof and durable for long-lasting memories",
        "Great for special occasions and anniversaries",
        "Multiple design templates",
        "Heart and romantic motifs",
      ],
      specifications: [
        "Material: Premium Vinyl with romantic finishes",
        "Size Range: 2-4 inches (design dependent)",
        "Thickness: 2.3 mil (0.06mm)",
        "Finish: Romantic matte or gloss options",
        "Waterproof: Yes, memory-safe",
        "UV Resistant: Yes, long-lasting",
        "Removable: Yes, gentle removal",
        "Customization: Full personalization available",
      ],
      whatsIncluded: [
        "25-30 personalized stickers",
        "Custom name/initial designs",
        "Love quotes and romantic sayings",
        "Anniversary date options",
        "Heart and couple motifs",
        "Multiple font choices",
      ],
    },
    {
      id: "custom",
      name: "Custom Orders",
      emoji: "🎨",
      description:
        "Bring your imagination to life with our Custom Orders service! Upload your own design, photo, or artwork, and we'll transform it into 25-30 high-quality stickers. Perfect for personal projects, special events, creating unique gifts, business promotions, or turning your creative ideas into reality. The possibilities are endless!",
      price: "Rs. 500",
      stickers: "25-30 stickers",
      image: "https://raw.githubusercontent.com/shreeecreation/StickifyImages/refs/heads/main/custom/Custom%20brand.jpg",
      features: [
        "Your design turned into professional stickers",
        "Upload any image, artwork, or photo",
        "Perfect for personal projects and gifts",
        "High-quality printing and precision cutting",
        "Fast turnaround time",
        "Design assistance and optimization available",
        "Multiple format support",
        "Professional quality assurance",
      ],
      specifications: [
        "Material: Premium Vinyl (design optimized)",
        "Size: Various (customizable to design)",
        "Thickness: 2.3 mil (0.06mm)",
        "Finish: Best suited for your design",
        "Waterproof: Yes, design protected",
        "UV Resistant: Yes, color stable",
        "Removable: Yes, safe removal",
        "File Support: JPG, PNG, PDF, AI, PSD",
      ],
      whatsIncluded: [
        "25-30 custom printed stickers",
        "Design optimization service",
        "Multiple size options",
        "Quality check and preview",
        "Fast production time",
        "Professional finishing",
      ],
    },
  ]

  const selectedCategory = categories.find((cat) => cat.id === selectedTab) || categories[0]

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
            <Link
              href="/"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-pulse">
              StickifyNepal ✨
            </h1>
            <div className="w-24"></div> {/* Spacer for balance */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 text-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Sticker Details
                </span>
              </h2>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                Learn more about our premium sticker collections and find the perfect match for your style!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="quote" value={selectedTab} onValueChange={setSelectedTab}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                <TabsList className="bg-white/70 backdrop-blur-sm p-1 rounded-full">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={`rounded-full px-4 py-2 transition-all duration-300 ${
                        selectedTab === category.id
                          ? category.id === "guitar"
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                            : "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                          : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      <span className="mr-2">{category.emoji}</span>
                      <span className="hidden sm:inline">{category.name}</span>
                      <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="animate-fade-in-up">
                  <Card
                    className={`border-2 bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden ${
                      category.id === "guitar" ? "border-orange-300" : "border-purple-300"
                    }`}
                  >
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image Side */}
                        <div className="relative aspect-square lg:aspect-auto">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            width={600}
                            height={600}
                            className="w-full h-full object-cover"
                          />
                          <div
                            className={`absolute top-4 right-4 ${
                              category.id === "guitar"
                                ? "bg-gradient-to-r from-orange-500 to-red-500"
                                : "bg-gradient-to-r from-pink-500 to-purple-500"
                            } text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
                          >
                            {category.price}
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                              ))}
                              <span className="text-white text-sm">(120+ reviews)</span>
                            </div>
                            <p className="text-white/90 text-sm">{category.stickers}</p>
                          </div>
                        </div>

                        {/* Details Side */}
                        <div className="p-6 lg:p-8">
                          <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{category.name}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                <Package className="w-5 h-5 text-purple-500" />
                                <div>
                                  <div className="text-sm font-semibold text-gray-700">Package</div>
                                  <div className="text-xs text-gray-600">{category.stickers}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                <Truck className="w-5 h-5 text-green-500" />
                                <div>
                                  <div className="text-sm font-semibold text-gray-700">Delivery</div>
                                  <div className="text-xs text-gray-600">2-3 days</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                <Shield className="w-5 h-5 text-blue-500" />
                                <div>
                                  <div className="text-sm font-semibold text-gray-700">Quality</div>
                                  <div className="text-xs text-gray-600">Premium vinyl</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                                <Clock className="w-5 h-5 text-orange-500" />
                                <div>
                                  <div className="text-sm font-semibold text-gray-700">Durability</div>
                                  <div className="text-xs text-gray-600">2+ years</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                              <div className="text-3xl font-bold text-gray-900">{category.price}</div>
                              <div
                                className={`${
                                  category.id === "guitar"
                                    ? "bg-orange-100 text-orange-700"
                                    : "bg-purple-100 text-purple-700"
                                } px-3 py-1 rounded-full text-sm font-semibold`}
                              >
                                {category.stickers}
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="space-y-3">
                            {category.id === "guitar" ? (
                              <Link href="/guitar">
                                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                  Explore Guitar Stickers 🎸
                                </Button>
                              </Link>
                            ) : (
                              <Link href="/#order">
                                <Button
                                  className={`w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                >
                                  <MessageCircle className="w-5 h-5 mr-2" />
                                  Order Now 🚀
                                </Button>
                              </Link>
                            )}
                            <Link href="/">
                              <Button variant="outline" className="w-full rounded-full py-3">
                                View All Categories
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Detailed Information Tabs */}
                      <div className="border-t border-gray-200 bg-gray-50/50">
                        <div className="p-6 lg:p-8">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Features */}
                            <div>
                              <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                Features
                              </h4>
                              <div className="space-y-2">
                                {category.features.map((feature, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <div
                                      className={`${
                                        category.id === "guitar" ? "text-orange-500" : "text-purple-500"
                                      } mt-1`}
                                    >
                                      <Check className="w-4 h-4" />
                                    </div>
                                    <div className="text-gray-700 text-sm">{feature}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Specifications */}
                            <div>
                              <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Package className="w-5 h-5 text-blue-500" />
                                Specifications
                              </h4>
                              <div className="space-y-2">
                                {category.specifications.map((spec, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <div
                                      className={`${
                                        category.id === "guitar" ? "text-orange-500" : "text-purple-500"
                                      } font-bold`}
                                    >
                                      •
                                    </div>
                                    <div className="text-gray-700 text-sm">{spec}</div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* What's Included */}
                            {/* <div>
                              <h4 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                What's Included
                              </h4>
                              <div className="space-y-2">
                                {category.whatsIncluded.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <div
                                      className={`${
                                        category.id === "guitar" ? "text-orange-500" : "text-purple-500"
                                      } mt-1`}
                                    >
                                      <Star className="w-4 h-4 fill-current" />
                                    </div>
                                    <div className="text-gray-700 text-sm">{item}</div>
                                  </div>
                                ))}
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-12 relative overflow-hidden mt-16">
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

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
