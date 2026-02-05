import { notFound } from "next/navigation"
import { getProductsByBrand, getBrandInfo, getLinesByBrand } from "@/lib/products-data"
import { BrandPageClient } from "@/components/brand-page-client"

export function generateStaticParams() {
  return [{ slug: "topicrem" }, { slug: "novexpert" }]
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = slug as "topicrem" | "novexpert"

  if (brand !== "topicrem" && brand !== "novexpert") {
    notFound()
  }

  const brandInfo = getBrandInfo(brand)
  const products = getProductsByBrand(brand)
  const lines = getLinesByBrand(brand)

  return <BrandPageClient brand={brand} brandInfo={brandInfo} products={products} lines={lines} />
}
