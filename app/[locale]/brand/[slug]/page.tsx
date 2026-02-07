import { notFound } from "next/navigation";
import {
  getProductsByBrand,
  getBrandInfo,
  getLinesByBrand,
} from "@/lib/products-data";
import { BrandPageClient } from "@/components/brand-page-client";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return [{ slug: "topicrem" }, { slug: "novexpert" }];
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const brand = slug as "topicrem" | "novexpert";

  if (brand !== "topicrem" && brand !== "novexpert") {
    notFound();
  }

  // Get base brand info (logo, color, instagram)
  const baseBrandInfo = getBrandInfo(brand);

  // Get translations for brand page
  const t = await getTranslations("BrandPages");

  // Combine base info with translated content
  const brandInfo = {
    ...baseBrandInfo,
    name: baseBrandInfo.name, // Keep English brand name
    tagline: t(`${brand}.tagline`),
    description: t(`${brand}.description`),
  };

  const products = getProductsByBrand(brand);
  const lines = getLinesByBrand(brand);

  return (
    <BrandPageClient
      brand={brand}
      brandInfo={brandInfo}
      products={products}
      lines={lines}
    />
  );
}
