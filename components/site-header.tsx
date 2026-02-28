"use client";

import { useState } from "react";
import { Link } from "@/src/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/src/i18n/navigation";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/cart-button";
import Image from "next/image";
import { ChevronLeft, Menu, Languages } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SiteHeaderProps {
  showBackButton?: boolean;
  backHref?: string;
}

export function SiteHeader({
  showBackButton = false,
  backHref = "/",
}: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/brand/topicrem", label: t("topicrem") },
    { href: "/brand/novexpert", label: t("novexpert") },
  ];

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale as any });
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="border-b border-border bg-white sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {/* Logo area: can shrink on mobile so buttons don't overlap */}
          <div className="flex items-center gap-2 flex-1 min-w-0 justify-center md:flex-none md:justify-start">
            {showBackButton && (
              <Link href={backHref}>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <Link
              href="/"
              className="group flex items-center gap-2 sm:gap-4 md:gap-10 min-w-0 shrink"
              aria-label="Topicrem & Novexpert Home"
            >
              <span className="flex items-center overflow-hidden h-10 sm:h-14 shrink-0">
                <Image
                  src="/logo1.jpeg"
                  alt="Topicrem"
                  width={400}
                  height={120}
                  priority
                  className="h-10 w-auto max-h-10 sm:h-14 sm:max-h-14 object-contain object-center transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </span>
              <span className="flex items-center overflow-hidden h-10 sm:h-14 shrink-0">
                <Image
                  src="/logo2.jpeg"
                  alt="Novexpert"
                  width={400}
                  height={120}
                  priority
                  className="h-10 w-auto max-h-10 sm:h-14 sm:max-h-14 object-contain object-center transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.18em] uppercase shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Translate, menu, cart: always visible and never overlap logos */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 border-s border-border ps-2 sm:ps-3 shrink-0 bg-white">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 size-10 touch-manipulation">
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="min-w-[140px] bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700"
              >
                <DropdownMenuItem
                  onClick={() => switchLocale("ar")}
                  className={`font-arabic ${locale === "ar" ? "bg-primary text-white focus:bg-primary focus:text-white" : "focus:bg-gray-100 focus:text-gray-900 dark:focus:bg-gray-800 dark:focus:text-gray-100"}`}
                >
                  <span dir="rtl">العربية</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => switchLocale("en")}
                  className={locale === "en" ? "bg-primary text-white focus:bg-primary focus:text-white" : "focus:bg-gray-100 focus:text-gray-900 dark:focus:bg-gray-800 dark:focus:text-gray-100"}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden shrink-0 size-10 touch-manipulation">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={locale === "ar" ? "left" : "right"}
                className="w-[300px] sm:w-[400px]"
              >
                <SheetHeader>
                  <SheetTitle>
                    {locale === "ar" ? "القائمة" : "Menu"}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <span className="shrink-0 inline-flex">
              <CartButton />
            </span>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
