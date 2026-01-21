"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Shield, Sparkles, Heart } from "lucide-react"
import { getProductsByBrand } from "@/lib/products-data"

export default function HomePage() {
  const topicremProducts = getProductsByBrand("topicrem")
  const novexpertProducts = getProductsByBrand("novexpert")
  
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Decorative Elements - Behind content */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance mb-4">
                {"Premium Skincare"}
                <span className="block text-primary mt-2">{"Topicrem & Novexpert"}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-4">French Dermatological Excellence</p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            >
              {
                "Two leading French skincare brands trusted by dermatologists worldwide. Discover the perfect blend of dermatological expertise and natural innovation."
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap pt-4 relative z-20"
            >
              <Button size="lg" className="text-lg px-8 pointer-events-auto" asChild>
                <Link href="/brand/topicrem">
                  {"Explore Topicrem"}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 pointer-events-auto" asChild>
                <Link href="/brand/novexpert">
                  {"Explore Novexpert"}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {"Why Choose Our Brands"}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Dermatologically Tested</h3>
              <p className="text-muted-foreground leading-relaxed">
                All products are clinically tested and approved by dermatologists for safety and efficacy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">Premium Formulations</h3>
              <p className="text-muted-foreground leading-relaxed">
                European-quality skincare with scientifically proven ingredients and innovative formulas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">For All Skin Types</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gentle formulations suitable for sensitive skin, tested on all skin types and tones
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Sections */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {"Our Premium Brands"}
          </h2>

          {/* Topicrem Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <Link href="/brand/topicrem" className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 relative overflow-hidden group">
                  <Image
                    src="/luxury-pink-skincare-bottles-elegant-minimal.jpg"
                    alt="Topicrem Collection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </Link>
                
                <div className="p-10 md:p-12 flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-white rounded-xl p-2 shadow-lg">
                      <Image
                        src="/topicremlogo.png"
                        alt="Topicrem Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold">{"Topicrem"}</h2>
                      <p className="text-sm text-muted-foreground mt-1">Made in France</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-primary">
                      {"Dermatological Expertise for All Skin Types"}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {
                        "Topicrem offers dermatologically tested skincare solutions designed for sensitive and demanding skin. Trusted by dermatologists worldwide for over 20 years, our products combine efficacy with gentleness."
                      }
                    </p>
                  </div>

                  <div className="flex gap-4 items-center pt-4">
                    <Button asChild>
                      <Link href="/brand/topicrem">{"Explore Collection"}</Link>
                    </Button>
                    <a
                      href="https://www.instagram.com/topicrem_jordan?igsh=eDgxajhjc3BjZXU2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Follow on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Novexpert Brand */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="bg-card border-2 border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:border-accent/50 transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <Link href="/brand/novexpert" className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 relative overflow-hidden md:order-2 group">
                  <Image
                    src="/luxury-black-skincare-bottles-minimalist-elegant.jpg"
                    alt="Novexpert Collection"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </Link>
                
                <div className="p-10 md:p-12 flex flex-col justify-center space-y-6 md:order-1">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 bg-white rounded-xl p-2 shadow-lg">
                      <Image
                        src="/novaexpert.png"
                        alt="Novexpert Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold">{"Novexpert"}</h2>
                      <p className="text-sm text-muted-foreground mt-1">Made in France</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-accent">
                      {"Expert Science, Natural Innovation"}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {
                        "Novexpert combines scientific expertise with natural ingredients to create powerful anti-aging and skin health solutions. Made in France with proven efficacy and eco-conscious formulations."
                      }
                    </p>
                  </div>

                  <div className="flex gap-4 items-center pt-4">
                    <Button variant="outline" asChild>
                      <Link href="/brand/novexpert">{"Explore Collection"}</Link>
                    </Button>
                    <a
                      href="https://www.instagram.com/novexpertjo?igsh=c3B0eXJyZWU0b3pi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Follow on Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{topicremProducts.length + novexpertProducts.length}+</div>
                <p className="text-sm text-muted-foreground">Premium Products</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Dermatologically Tested</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">🇫🇷</div>
                <p className="text-sm text-muted-foreground">Made in France</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-sm text-muted-foreground">Premium Brands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12 md:p-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {"Ready to Transform Your Skin?"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {"Discover our curated collection of premium European skincare products. Experience the difference that quality makes."}
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8">
              {"Get in Touch"}
            </Button>
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  )
}
