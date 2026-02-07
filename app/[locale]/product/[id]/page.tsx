"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Link } from "@/src/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { getProductById } from "@/lib/products-data";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  ArrowLeft,
  Package,
  Droplets,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { useState } from "react";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = useTranslations("Product");
  const tCommon = useTranslations("Common");
  const tNav = useTranslations("Nav");
  const locale = useLocale();
  const { id } = use(params);
  const product = getProductById(id);
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const currentVariant = product.variants[selectedVariant];
  const priceInJOD =
    typeof currentVariant.price === "string"
      ? parseFloat(currentVariant.price)
      : currentVariant.price;

  // Safe extraction helper
  const getLocalizedValue = (field: any, useLocale: boolean = true): string => {
    if (!field) return "";
    if (typeof field === "string") return field;
    if (typeof field === "object" && field !== null) {
      if (useLocale && locale === "ar" && field.ar) return field.ar;
      return field.en || field.ar || "";
    }
    return String(field);
  };

  // Safe array extraction helper
  const getLocalizedArray = (
    field: any,
    useLocale: boolean = true
  ): string[] => {
    if (!field) return [];
    if (Array.isArray(field)) {
      return field.filter((item) => typeof item === "string");
    }
    if (typeof field === "object" && field !== null) {
      const value =
        useLocale && locale === "ar" && field.ar
          ? field.ar
          : field.en || field.ar;
      // Handle both array and string values
      if (Array.isArray(value)) {
        return value.filter((item) => typeof item === "string");
      } else if (typeof value === "string") {
        return [value];
      }
      return [];
    }
    if (typeof field === "string") return [field];
    return [];
  };

  // Get description based on locale
  const descriptionArray = getLocalizedArray(product.description, true);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceInJOD,
      brand: product.brand,
      image: product.image,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

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
              {product.brand === "topicrem"
                ? tNav("topicrem")
                : tNav("novexpert")}
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

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-primary">
                  {priceInJOD.toFixed(2)}
                </span>
                <span className="text-2xl text-muted-foreground">
                  {tCommon("jod")}
                </span>
                <span className="text-sm text-muted-foreground ml-2">
                  / {currentVariant.size}
                </span>
              </div>

              {/* Variant Selection */}
              {product.variants.length > 1 && (
                <div className="space-y-3">
                  <label className="text-sm font-medium">
                    {t("selectVariant")}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <Button
                        key={index}
                        variant={
                          selectedVariant === index ? "default" : "outline"
                        }
                        size="sm"
                        onClick={() => setSelectedVariant(index)}
                        className="min-w-24"
                      >
                        {variant.size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Add to Cart Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full gap-2"
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                >
                  <ShoppingCart className="w-5 h-5" />
                  {addedToCart ? "✓ " + t("addedToCart") : t("addToCart")}
                </Button>
              </motion.div>

              {/* Key Info */}
              {(product.texture || product.skinType) && (
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {product.texture && (
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Droplets className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {t("texture")}
                        </p>
                        <p className="font-medium text-sm">
                          {(() => {
                            if (typeof product.texture === "string") {
                              return product.texture;
                            }
                            if (
                              product.texture &&
                              typeof product.texture === "object"
                            ) {
                              const textureValue =
                                locale === "ar"
                                  ? product.texture.ar || product.texture.en
                                  : product.texture.en || product.texture.ar;
                              return textureValue || "";
                            }
                            return "";
                          })()}
                        </p>
                      </div>
                    </div>
                  )}
                  {product.skinType && (
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {t("skinType")}
                        </p>
                        <p className="font-medium text-sm">
                          {(() => {
                            if (typeof product.skinType === "string") {
                              return product.skinType;
                            }
                            if (
                              product.skinType &&
                              typeof product.skinType === "object"
                            ) {
                              const skinTypeValue =
                                locale === "ar"
                                  ? product.skinType.ar || product.skinType.en
                                  : product.skinType.en || product.skinType.ar;
                              return skinTypeValue || "";
                            }
                            return "";
                          })()}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Package className="w-6 h-6 text-primary" />
                    {t("description")}
                  </h2>
                  <ul className="space-y-2">
                    {descriptionArray
                      .filter((d) => d && typeof d === "string")
                      .map((desc, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits */}
            {product.benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <Sparkles className="w-6 h-6 text-primary" />
                      {t("benefits")}
                    </h2>
                    <ul className="space-y-2">
                      {getLocalizedArray(product.benefits, true).map(
                        (benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold">{t("ingredients")}</h2>

                    {product.ingredients.spotlight && (
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <p className="text-sm font-medium text-primary mb-1">
                          {t("spotlight")}
                        </p>
                        <p className="text-sm">
                          {getLocalizedValue(
                            product.ingredients.spotlight,
                            false
                          )}
                        </p>
                      </div>
                    )}

                    {product.ingredients.main && (
                      <div>
                        <p className="text-sm font-medium mb-2">
                          {t("keyIngredients")}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {getLocalizedArray(
                            product.ingredients.main,
                            false
                          ).map((ingredient, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="text-xs"
                            >
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Usage */}
            {product.usage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <h2 className="text-2xl font-bold">{t("usage")}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {getLocalizedValue(product.usage, true)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
