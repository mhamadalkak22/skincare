"use client";

import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Shield, Sparkles, Heart } from "lucide-react";
import { getProductsByBrand } from "@/lib/products-data";

export default function HomePage() {
  const t = useTranslations("Home");
  const tNav = useTranslations("Nav");
  const tCommon = useTranslations("Common");

  const topicremProducts = getProductsByBrand("topicrem");
  const novexpertProducts = getProductsByBrand("novexpert");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Discount Announcement Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-pink-500 via-primary to-pink-600 text-white py-3 px-4 text-center sticky top-0 z-50 shadow-lg"
      >
        <div className="container mx-auto">
          <motion.p
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm md:text-base font-semibold"
          >
            🎉 <span className="font-bold">{t("specialOffer")}</span>{" "}
            {t("discount")}{" "}
            <span className="bg-white text-primary px-3 py-1 rounded-md font-bold mx-2">
              SKIN20
            </span>{" "}
            {t("atCheckout")} 🎉
          </motion.p>
        </div>
      </motion.div>

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
                {t("hero.title")}
                <span className="block text-primary mt-2">
                  {t("hero.brands")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-4">
                {t("hero.subtitle")}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 justify-center flex-wrap pt-4 relative z-20"
            >
              <Button
                size="lg"
                className="text-lg px-8 pointer-events-auto"
                asChild
              >
                <Link href="/brand/topicrem">{t("hero.exploreTopicrem")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 pointer-events-auto"
                asChild
              >
                <Link href="/brand/novexpert">
                  {t("hero.exploreNovexpert")}
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
            {t("whyChoose.title")}
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
              <h3 className="font-bold text-xl mb-3">
                {t("whyChoose.dermatologicallyTested.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("whyChoose.dermatologicallyTested.description")}
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
              <h3 className="font-bold text-xl mb-3">
                {t("whyChoose.frenchExpertise.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("whyChoose.frenchExpertise.description")}
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
              <h3 className="font-bold text-xl mb-3">
                {t("whyChoose.naturalInnovation.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("whyChoose.naturalInnovation.description")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {topicremProducts.length + novexpertProducts.length}+
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {t("trustIndicators.premiumProducts")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                2
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {t("trustIndicators.trustedBrands")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                100%
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {t("trustIndicators.freeShipping")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                ✓
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {t("trustIndicators.onAllOrders")}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Sections */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            {t("ourBrands")}
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
                <Link
                  href="/brand/topicrem"
                  className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/20 dark:to-pink-900/20 relative overflow-hidden group"
                >
                  <Image
                    src="/topicremimage/HYDRA_PROTECTIVE_DAY_CREAM__40ML.webp"
                    alt="Topicrem Collection"
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />
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
                      <h2 className="text-4xl font-bold">{tNav("topicrem")}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("madeInFrance")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-primary">
                      {t("topicrem.tagline")}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("topicrem.description")}
                    </p>
                  </div>

                  <div className="flex gap-4 items-center pt-4">
                    <Button asChild>
                      <Link href="/brand/topicrem">
                        {t("topicrem.exploreCollection")}
                      </Link>
                    </Button>
                    <a
                      href="https://www.instagram.com/topicrem_jordan?igsh=eDgxajhjc3BjZXU2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">
                        {t("topicrem.followOnInstagram")}
                      </span>
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
                <Link
                  href="/brand/novexpert"
                  className="aspect-[4/3] md:aspect-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 relative overflow-hidden md:order-2 group"
                >
                  <Image
                    src="/novaexpertimage/BOOSTER WITH VITAMIN C_2000x2000px.webp"
                    alt="Novexpert Collection"
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />
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
                      <h2 className="text-4xl font-bold">
                        {tNav("novexpert")}
                      </h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("madeInFrance")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-primary">
                      {t("novexpert.tagline")}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("novexpert.description")}
                    </p>
                  </div>

                  <div className="flex gap-4 items-center pt-4">
                    <Button asChild>
                      <Link href="/brand/novexpert">
                        {t("novexpert.exploreCollection")}
                      </Link>
                    </Button>
                    <a
                      href="https://www.instagram.com/novexpertjo?igsh=c3B0eXJyZWU0b3pi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">
                        {t("novexpert.followOnInstagram")}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
