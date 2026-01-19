"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products-data"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ShoppingCart, ArrowLeft, Package, Droplets, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    notFound()
  }

  const currentVariant = product.variants[selectedVariant]
  const priceInJOD = typeof currentVariant.price === "string" 
    ? parseFloat(currentVariant.price) 
    : currentVariant.price

  const descriptionArray = Array.isArray(product.description.en)
    ? product.description.en
    : [product.description.en]

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceInJOD,
      brand: product.brand,
      image: product.image,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <Link href={`/brand/${product.brand}`}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to {product.brand === "topicrem" ? "Topicrem" : "Novexpert"}
            </Button>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-square relative bg-gradient-to-br from-muted/30 to-background">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                />
              </div>
            </Card>
          </motion.div>

          {/* Product Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-sm uppercase">
                  {product.line}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {product.brand === "topicrem" ? "Topicrem" : "Novexpert"}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary">{priceInJOD.toFixed(2)}</span>
                <span className="text-2xl text-muted-foreground">JOD</span>
                <span className="text-sm text-muted-foreground ml-2">/ {currentVariant.size}</span>
              </div>

              {/* Variant Selection */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <p className="text-sm font-medium mb-3">Select Size:</p>
                  <div className="flex gap-2">
                    {product.variants.map((variant, index) => (
                      <Button
                        key={index}
                        variant={selectedVariant === index ? "default" : "outline"}
                        onClick={() => setSelectedVariant(index)}
                        className="min-w-[100px]"
                      >
                        {variant.size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Button
                    size="lg"
                    className="w-full gap-2"
                    onClick={handleAddToCart}
                    disabled={addedToCart}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {addedToCart ? "Added to Cart!" : "Add to Cart"}
                  </Button>
                </motion.div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Droplets className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Texture</p>
                    <p className="text-muted-foreground text-xs">{product.texture}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <div>
                    <p className="font-medium">Skin Type</p>
                    <p className="text-muted-foreground text-xs">{product.skinType}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">Description</h2>
                  <ul className="space-y-2">
                    {descriptionArray.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">Benefits</h2>
                  <div className="grid gap-2">
                    {product.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="flex items-center gap-2 bg-muted/50 p-3 rounded-lg"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">Key Ingredients</h2>
                  <div className="space-y-3">
                    {product.ingredients.main.map((ingredient, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Package className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                  {product.ingredients.spotlight && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-sm font-medium mb-1">Spotlight:</p>
                      <p className="text-sm text-muted-foreground">{product.ingredients.spotlight}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Usage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">How to Use</h2>
                  <p className="text-muted-foreground leading-relaxed">{product.usage.en}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
