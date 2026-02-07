"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import type { Product } from "@/lib/products-data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations("Product");
  const tCommon = useTranslations("Common");
  const locale = useLocale();

  // Get the first variant's price for display
  const price =
    typeof product.variants[0]?.price === "string"
      ? parseFloat(product.variants[0].price)
      : product.variants[0]?.price || 0;

  // Get first variant size
  const size = product.variants[0]?.size || "";

  // Get description - take first item if array, handle locale
  const description = (() => {
    const descData = (locale === "ar" && product.description?.ar)
      ? product.description.ar
      : product.description?.en;
    
    if (Array.isArray(descData)) {
      return descData[0] || "";
    }
    if (typeof descData === "string") {
      return descData;
    }
    return "";
  })();

  // Get skin type based on locale
  const skinType = (() => {
    if (!product.skinType) return "";
    if (typeof product.skinType === "string") return product.skinType;
    if (product.skinType && typeof product.skinType === "object") {
      const value =
        locale === "ar"
          ? product.skinType.ar || product.skinType.en
          : product.skinType.en || product.skinType.ar;
      return value || "";
    }
    return "";
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-primary/20 bg-gradient-to-b from-white to-gray-50">
        <Link href={`/product/${product.id}`}>
          <motion.div
            className="aspect-square bg-white relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-8"
            />
          </motion.div>
        </Link>

        <CardContent className="p-6 space-y-3">
          {/* Line/Category */}
          {product.line && (
            <div className="bg-gray-100 px-3 py-1 inline-block rounded">
              <p className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
                {product.line}
              </p>
            </div>
          )}

          {/* Product Name */}
          <h3 className="font-bold text-xl leading-tight min-h-[3rem]">
            {product.name}
          </h3>

          {/* Description */}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
              {description}
            </p>
          )}

          {/* Price and Size */}
          <div className="pt-2 border-t border-gray-200">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-3xl font-bold text-foreground">
                {price.toFixed(2)}
              </span>
              <span className="text-lg text-muted-foreground font-medium">
                {tCommon("jod")}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{size}</p>
          </div>

          {/* Skin Type */}
          {skinType && (
            <div className="pt-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                <span className="font-semibold">For:</span> {skinType}
              </p>
            </div>
          )}

          {/* View Button */}
          <div className="pt-3">
            <Button
              asChild
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold"
              size="lg"
            >
              <Link href={`/product/${product.id}`}>{t("viewDetails")}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
