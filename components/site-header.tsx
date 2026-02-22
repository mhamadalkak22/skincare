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
            <Link
              href="/"
              className="flex items-center gap-4 sm:gap-6 md:gap-8"
              aria-label="Topicrem & Novexpert Home"
            >
              <span className="relative h-18 w-44 min-[480px]:h-20 min-[480px]:w-52 sm:h-20 sm:w-52 md:h-22 md:w-60 lg:h-24 lg:w-72">
                <Image
                  src="/topicremlogo.png"
                  alt="Topicrem"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 480px) 176px, (max-width: 640px) 208px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 288px"
                  priority
                />
              </span>
              <span className="relative h-18 w-44 min-[480px]:h-20 min-[480px]:w-52 sm:h-20 sm:w-52 md:h-22 md:w-60 lg:h-24 lg:w-72">
                <Image
                  src="/novaexpert.png"
                  alt="Novexpert"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 224px, 256px"
                  priority
                />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
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
                <Button variant="ghost" size="icon" className="md:hidden">
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

            <CartButton />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
