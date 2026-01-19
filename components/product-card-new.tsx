"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products-data"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.variants[0]
  const price = typeof firstVariant.price === "string" ? parseFloat(firstVariant.price) : firstVariant.price

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -8, transition: { duration: 0.2 } }}
      >
        <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-primary/20 cursor-pointer">
          <motion.div
            className="aspect-square bg-gradient-to-br from-muted/30 to-background relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6"
            />
            {/* Overlay effect on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4"
            >
              <Button variant="secondary" size="sm" className="gap-2">
                <Eye className="w-4 h-4" />
                View Details
              </Button>
            </motion.div>
          </motion.div>

          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs uppercase font-semibold">
                  {product.line}
                </Badge>
              </div>

              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem]">
                {product.name}
              </h3>

              {/* Show first description point */}
              {product.description.en && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {Array.isArray(product.description.en)
                    ? product.description.en[0]
                    : product.description.en}
                </p>
              )}
            </div>

            <div className="flex items-end justify-between pt-2 border-t">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold">{price.toFixed(2)}</span>
                  <span className="text-sm text-muted-foreground">JOD</span>
                </div>
                <span className="text-xs text-muted-foreground">{firstVariant.size}</span>
              </div>

              <Button size="sm" className="gap-2">
                View
              </Button>
            </div>

            {/* Skin Type */}
            {product.skinType && (
              <div className="text-xs text-muted-foreground pt-2">
                <span className="font-medium">For:</span> {product.skinType}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
