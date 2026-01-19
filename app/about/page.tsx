"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              >
                {"Topicrem & Novexpert"}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed text-pretty"
              >
                {
                  "Two exceptional French skincare brands bringing premium dermatological expertise to Jordan. Trusted by professionals worldwide."
                }
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-4">{"Our Story"}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {
                      "Topicrem and Novexpert are two prestigious French skincare brands, each with a unique approach to skin health. Both brands share a commitment to quality, efficacy, and innovation backed by dermatological expertise."
                    }
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "Each product is carefully formulated with clinically-proven ingredients and tested for safety and efficacy. We bring premium French skincare to Jordan - products that truly deliver results."
                    }
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative h-80 rounded-lg overflow-hidden"
                >
                  <Image
                    src="/luxury-pink-skincare-bottles-elegant-minimal.jpg"
                    alt="Luxury skincare products"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Brands */}
        <section className="bg-muted/30 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mb-12"
              >
                {"Our Premium Brands"}
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Topicrem */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className="relative w-24 h-24 bg-white rounded-xl p-3 shadow-lg mb-4"
                    >
                      <Image
                        src="/topicremlogo.png"
                        alt="Topicrem Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{"Topicrem"}</h3>
                    <p className="text-sm text-primary font-semibold mb-4">Made in France 🇫🇷</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {
                        "Since 1999, Topicrem has been developing dermatological skincare for sensitive and demanding skin. Trusted by dermatologists and pharmacists worldwide, Topicrem offers safe, effective solutions for the whole family."
                      }
                    </p>
                    <div className="space-y-3 mb-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary">✓</span>
                        <span className="text-sm text-muted-foreground">Dermatologically tested formulas</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary">✓</span>
                        <span className="text-sm text-muted-foreground">Hypoallergenic products</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary">✓</span>
                        <span className="text-sm text-muted-foreground">Suitable for sensitive skin</span>
                      </motion.div>
                    </div>
                    <div className="space-y-3">
                      <Link href="/brand/topicrem">
                        <Button className="w-full">{"Explore Products"}</Button>
                      </Link>
                      <a
                        href="https://www.instagram.com/topicrem_jordan?igsh=eDgxajhjc3BjZXU2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Follow @topicrem_jordan</span>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Novexpert */}
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-card border border-border rounded-lg p-8"
                >
                  <div className="mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                      className="relative w-24 h-24 bg-white rounded-xl p-3 shadow-lg mb-4"
                    >
                      <Image
                        src="/novaexpert.png"
                        alt="Novexpert Logo"
                        fill
                        className="object-contain p-2"
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">{"Novexpert"}</h3>
                    <p className="text-sm text-accent font-semibold mb-4">Made in France 🇫🇷</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {
                        "Novexpert combines scientific expertise with natural ingredients to create innovative skincare solutions. Their products are formulated with high concentrations of active ingredients for visible, proven results."
                      }
                    </p>
                    <div className="space-y-3 mb-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-accent">✓</span>
                        <span className="text-sm text-muted-foreground">Clinical expertise & innovation</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-accent">✓</span>
                        <span className="text-sm text-muted-foreground">Natural & eco-conscious formulas</span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-accent">✓</span>
                        <span className="text-sm text-muted-foreground">Proven anti-aging results</span>
                      </motion.div>
                    </div>
                    <div className="space-y-3">
                      <Link href="/brand/novexpert">
                        <Button variant="outline" className="w-full">{"Explore Products"}</Button>
                      </Link>
                      <a
                        href="https://www.instagram.com/novexpertjo?igsh=c3B0eXJyZWU0b3pi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Instagram className="w-4 h-4" />
                        <span>Follow @novexpertjo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center mb-12"
              >
                {"Why Choose These Brands"}
              </motion.h2>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl">🇫🇷</span>
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{"Authentic French Brands"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {"100% authentic products imported directly from France with full traceability."}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl">💎</span>
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{"Dermatological Quality"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {"Clinically tested products trusted by dermatologists and skincare experts."}
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <span className="text-3xl">🚚</span>
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{"Fast Delivery"}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {"Quick and reliable shipping across Jordan with careful handling."}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-primary-foreground py-16"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold mb-4"
            >
              {"Ready to Experience Premium Skincare?"}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty"
            >
              {"Discover our curated collection from Topicrem and Novexpert."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link href="/brand/topicrem">
                <Button size="lg" variant="secondary">
                  {"Shop Topicrem"}
                </Button>
              </Link>
              <Link href="/brand/novexpert">
                <Button size="lg" variant="secondary">
                  {"Shop Novexpert"}
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <SiteFooter />
    </div>
  )
}
