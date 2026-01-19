"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartButton } from "@/components/cart-button"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

interface SiteHeaderProps {
  showBackButton?: boolean
  backHref?: string
}

export function SiteHeader({ showBackButton = false, backHref = "/" }: SiteHeaderProps) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border-b border-border bg-card sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Link href={backHref}>
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
              {"Mazaya United"}
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {"Home"}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {"About"}
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {"Contact"}
            </Link>
            <Link href="/brand/topicrem" className="text-sm font-medium hover:text-primary transition-colors">
              {"Topicrem"}
            </Link>
            <Link href="/brand/novexpert" className="text-sm font-medium hover:text-primary transition-colors">
              {"Novexpert"}
            </Link>
          </nav>

          <CartButton />
        </div>
      </div>
    </motion.header>
  )
}
