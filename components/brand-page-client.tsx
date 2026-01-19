"use client"

import { ProductCard } from "@/components/product-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram } from "lucide-react"
import type { Product } from "@/lib/products"

interface BrandPageClientProps {
  brand: "topicrem" | "novexpert"
  brandInfo: {
    name: string
    tagline: string
    description: string
    color: string
    logo: string
    instagram: string
  }
  products: Product[]
}

export function BrandPageClient({ brand, brandInfo, products }: BrandPageClientProps) {
  const brandColorClass =
    brand === "topicrem" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative w-32 h-32 mx-auto bg-white rounded-2xl shadow-xl p-4"
            >
              <Image
                src={brandInfo.logo}
                alt={`${brandInfo.name} Logo`}
                fill
                className="object-contain p-4"
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold tracking-tight"
            >
              {brandInfo.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-xl md:text-2xl font-semibold ${brand === "topicrem" ? "text-primary" : "text-accent"}`}
            >
              {brandInfo.tagline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              {brandInfo.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={brandInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                  brand === "topicrem"
                    ? "bg-primary/10 hover:bg-primary/20 text-primary"
                    : "bg-accent/10 hover:bg-accent/20 text-accent"
                }`}
              >
                <Instagram className="w-5 h-5" />
                <span className="font-medium">Follow us on Instagram</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Collection</h2>
          <p className="text-lg text-muted-foreground">
            {products.length} premium product{products.length !== 1 ? "s" : ""} available
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
