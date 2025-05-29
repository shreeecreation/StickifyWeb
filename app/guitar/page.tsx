"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Instagram, MessageCircle, ArrowLeft, Music, Guitar, Star, Heart } from "lucide-react"
import DesignGallery from "./design"
const guitarCategories = [
  {
    id: "anime",
    name: "Anime Guitar Stickers",
    emoji: "✨",
    description: "Anime characters on guitars",
    price: "Rs. 900",
      samples: [
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/1.jpg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/2.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/3.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/4.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/5.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/6.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/7.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/8.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/9.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/10.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/11.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/12.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/13.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/14.jpg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/15.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/16.jpg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/17.jpg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/18.jpg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/19.jpg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/anime/20.jpg",
],
    tags: ["Naruto Guitar", "One Piece", "JJK", "Attack on Titan", "Demon Slayer", "Studio Ghibli"],
  },
  {
    id: "band",
    name: "Band Logo Stickers",
    emoji: "🤘",
    description: "Famous bands & artists",
    price: "Rs. 900",
samples: [
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/band/Rock%20Bands%20Wallpaper.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/band/_%20(10).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/band/_%20(6).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/band/_%20(7).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/band/_%20(8).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/band/_%20(9).jpeg",
]
,
    tags: ["Led Zeppelin", "Pink Floyd", "Metallica", "Nirvana", "Beatles", "Queen"],
  },
  {
    id: "aesthetic",
    name: "Aesthetic Guitar Stickers",
    emoji: "🌸",
    description: "Soft, dreamy & aesthetic vibes",
    price: "Rs. 900",
  samples: [
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/aesthetic/Blue%20wallpaper.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/aesthetic/_%20(10).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/aesthetic/_%20(6).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/aesthetic/_%20(7).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/aesthetic/_%20(8).jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/aesthetic/_%20(9).jpeg",
],

    tags: ["Pastel Colors", "Soft Grunge", "Vintage", "Minimalist", "Boho", "Dreamy"],
  },
  
 
  {
    id: "space",
    name: "Space Guitar Stickers",
    emoji: "🚀",
    description: "Galaxy & cosmic themes",
    price: "Rs. 900",
   samples: [
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/1.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/2.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/3.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/4.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/5.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/6.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/7.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/8.jpeg",
  "https://raw.githubusercontent.com/shreeecreation/StickifyImages/main/guitar/space/9.jpeg",
]
,
    tags: ["Galaxy", "Stars", "Planets", "Astronaut", "Cosmic", "Universe"],
  },
];


export default function GuitarPage() {
  const [selectedTab, setSelectedTab] = useState("anime")
  const [formData, setFormData] = useState({
    name: "",
    handle: "",
    guitarType: "",
    quantity: "",
    location: "",
    notes: "",
    wrappingStyle: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const orderDetails = `
🎸 *Guitar Sticker Order - StickifyNepal*

👤 *Customer:* ${formData.name}
📱 *Handle:* ${formData.handle}
🎸 *Guitar Sticker Type:* ${formData.guitarType || selectedTab}
📦 *Quantity:* ${formData.quantity}
📍 *Location:* ${formData.location}
${formData.notes ? `📝 *Notes:* ${formData.notes}` : ""}
${uploadedFile ? `📎 *File:* ${uploadedFile.name}` : ""}

🎵 Order placed via StickifyNepal.com/guitar
    `.trim()

    const whatsappUrl = `https://wa.me/9779808901365?text=${encodeURIComponent(orderDetails)}`
    window.open(whatsappUrl, "_blank")
    setIsLoading(false)
  }

    function openModal(idx: number): void {
    const selectedCategory = guitarCategories.find((category) => category.id === selectedTab);
    if (!selectedCategory) {
      console.error("Selected category not found");
      return;
    }

    const selectedImage = selectedCategory.samples[idx];
    if (!selectedImage) {
      console.error("Selected image not found");
      return;
    }

    window.open(selectedImage, "_blank");
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 overflow-x-hidden">
      {/* Floating Musical Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-50"></div>
        <Music className="absolute top-60 left-1/4 w-8 h-8 text-orange-300 animate-pulse opacity-30" />
        <Guitar className="absolute bottom-60 right-1/4 w-10 h-10 text-red-300 animate-bounce opacity-20" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              🎸 Guitar Stickers
            </h1>
            <Link
              href="/order-details"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
            >
              Details
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 text-center relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="inline-block animate-bounce">Rock</span>{" "}
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.1s" }}>
                  Your
                </span>{" "}
                <span className="inline-block animate-bounce" style={{ animationDelay: "0.2s" }}>
                  Guitar
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent inline-block animate-bounce"
                  style={{ animationDelay: "0.3s" }}
                >
                  With Style! 🎸
                </span>
              </h2>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 font-bold">
                  Choose from 10 amazing categories - each with 10 unique designs! 🎵
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guitar Categories Tabs */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-full mx-auto">
            <Tabs defaultValue="anime" value={selectedTab} onValueChange={setSelectedTab}>
              <div className="flex justify-center mb-8 overflow-x-auto pb-4">
                <TabsList className="bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-orange-200 min-w-max">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {guitarCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className={`rounded-xl px-4 py-3 transition-all duration-300 text-sm font-semibold whitespace-nowrap ${
                          selectedTab === category.id
                            ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                            : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                        }`}
                      >
                        <span className="mr-2 text-lg">{category.emoji}</span>
                        <span className="hidden sm:inline">{category.name}</span>
                        <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                      </TabsTrigger>
                    ))}
                  </div>
                </TabsList>
              </div>

              {guitarCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="animate-fade-in-up">
                  <Card className="border-2 border-orange-300 bg-white/95 backdrop-blur-sm shadow-2xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
                            {category.emoji} {category.name}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base mb-2">{category.description}</p>
                          <div className="flex items-center gap-3">
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                              {category.price}
                            </span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <span className="text-gray-600 text-sm">10 designs</span>
                          </div>
                        </div>
                        <Button
                          onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                          className="mt-4 md:mt-0 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-full px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                          Order Now 🎸
                        </Button>
                      </div>

                      {/* Tags */}
                      <div className="mb-8">
                        <div className="flex flex-wrap gap-3">
                          {category.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200 cursor-pointer border border-orange-200 hover:border-orange-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Sample Gallery - 10 Images */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {category.samples.map((sample, idx) => (
                          <div
                             onClick={() => openModal(idx)}

                            key={idx}
                            className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 via-red-100 to-purple-100 hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
                            style={{
                              animationDelay: `${idx * 0.05}s`,
                            }}
                          >
                            <Image
                              src={sample || "/placeholder.svg"}
                              alt={`${category.name} design ${idx + 1}`}
                              width={200}
                              height={200}

                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="text-sm font-bold">Design #{idx + 1}</div>
                              <div className="text-xs opacity-90">Click to order</div>
                            </div>
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Heart className="w-5 h-5 text-white hover:text-red-400 transition-colors duration-200" />
                            </div>
                            {/* Design Number Badge */}
                            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                              {idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Category Summary */}
                      <div className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                        <div className="text-center">
                          <h4 className="text-lg font-bold text-orange-800 mb-2">{category.name} Collection</h4>
                          <p className="text-orange-700 text-sm">
                            10 unique designs • Premium quality • Perfect for your guitar • {category.price}
                          </p>
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

      {/* Order Form */}
      <section id="order" className="py-16 bg-gradient-to-br from-orange-100 via-red-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-orange-300 bg-white/95 backdrop-blur-sm shadow-2xl animate-fade-in-up">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Order Guitar Stickers 🎸
                  </h3>
                  <p className="text-gray-600 text-lg">Choose from 10 categories with 10 designs each!</p>
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
                        className="mt-1 rounded-full border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
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
                          className="pl-10 rounded-full border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
                      <Label htmlFor="guitarType" className="text-sm font-semibold text-gray-700">
                        Guitar Sticker Category *
                      </Label>
                      <select
                        id="guitarType"
                        value={formData.guitarType}
                        onChange={(e) => handleInputChange("guitarType", e.target.value)}
                        required
                        className="mt-1 w-full rounded-full border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md px-4 py-2"
                      >
                        <option value="">Choose category</option>
                        {guitarCategories.map((category) => (
                          <option key={category.id} value={category.name}>
                            {category.emoji} {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
                      <Label htmlFor="quantity" className="text-sm font-semibold text-gray-700">
                        Quantity *
                      </Label>
                      <Input
                        id="quantity"
                        value={formData.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        placeholder="How many stickers?"
                        required
                        className="mt-1 rounded-full border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
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
                      className="mt-1 rounded-full border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                    />
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <Label htmlFor="upload" className="text-sm font-semibold text-gray-700">
                      Upload Your Guitar Photo (Optional)
                    </Label>
                    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-orange-400 transition-all duration-300 hover:bg-orange-50 group">
                      <input type="file" id="upload" onChange={handleFileUpload} accept="image/*" className="hidden" />
                      <label htmlFor="upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400 group-hover:text-orange-500 transition-colors duration-300 group-hover:scale-110 transform" />
                        <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors duration-300">
                          {uploadedFile ? (
                            <span className="text-green-600 font-semibold">✅ {uploadedFile.name}</span>
                          ) : (
                            "Upload your guitar photo for better customization"
                          )}
                        </p>
                      </label>
                    </div>
                  </div>
                  <div className="animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
  <Label htmlFor="wrappingStyle" className="text-sm font-semibold text-gray-700">
    Wrapping Style *
  </Label>
  <select
    id="wrappingStyle"
    value={formData.wrappingStyle || ""}
    onChange={(e) => handleInputChange("wrappingStyle", e.target.value)}
    required
    className="mt-1 w-full rounded-full border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md px-4 py-2"
  >
    <option value="" disabled>
      Choose wrapping style
    </option>
    <option value="frontWrap">Front Wrap (Rs. 900)</option>
    <option value="fullWrap">Full Wrap (Rs. 2000)</option>
  </select>
</div>


                  <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                    <Label htmlFor="notes" className="text-sm font-semibold text-gray-700">
                      Additional Notes
                    </Label>
                    <Textarea
                      id="notes"
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      placeholder="Tell us about your guitar model, preferred designs, or any special requests..."
                      className="mt-1 rounded-2xl border-2 border-gray-200 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in-up"
                    style={{ animationDelay: "0.5s" }}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Order...
                      </div>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Order via WhatsApp 🎸
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
      <footer className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h4 className="text-2xl md:text-3xl font-black mb-4 animate-pulse">🎸 Guitar Stickers - StickifyNepal</h4>
          <p className="mb-4 text-lg">10 Categories • 100 Designs • Endless Possibilities! 🎵</p>
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


