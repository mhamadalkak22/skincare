import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter, Cairo, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";
import "../globals.css";
import { CartProvider } from "@/components/cart-provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-arabic",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-gotham-fallback",
});

export const metadata: Metadata = {
  title: "Topicrem & Novexpert Jordan | Premium French Skincare",
  description:
    "Official distributor of Topicrem and Novexpert in Jordan. Authentic French skincare - dermatologically tested, clinically proven. Shop premium skincare solutions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  // Use Cairo for Arabic; Playfair/Inter for English. Always load Cairo so language switcher shows "العربية" correctly.
  const fontClass =
    locale === "ar"
      ? `${cairo.variable} font-arabic`
      : `${playfair.variable} ${inter.variable} ${cairo.variable} ${montserrat.variable} font-sans`;

  // Set direction based on locale: RTL for Arabic, LTR for English
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${fontClass} antialiased`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <CartProvider>{children}</CartProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
