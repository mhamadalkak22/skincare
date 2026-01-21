// Complete product data from brands_cleaned.json
import productsJson from "../brands_cleaned.json"

export interface ProductVariant {
  size: string
  price: string | number
}

export interface ProductIngredients {
  main: string[]
  spotlight: string
}

export interface ProductDescription {
  en: string | string[]
  ar: string
}

export interface ProductUsage {
  en: string
  ar: string
}

export interface Product {
  id: string
  brand: "topicrem" | "novexpert"
  line: string
  name: string
  variants: ProductVariant[]
  description: ProductDescription
  texture: string
  skinType: string
  benefits: string[] | string
  ingredients: ProductIngredients
  usage: ProductUsage
  image: string
}

// Helper function to generate product ID
function generateProductId(brand: string, name: string, index: number): string {
  const brandPrefix = brand === "TOPICREM" ? "tc" : "nx"
  const cleanName = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 30)
  return `${brandPrefix}-${cleanName}-${index}`
}

// Helper function to map product image - EXACT 1-to-1 mapping
function mapProductImage(productName: string, brand: string): string {
  // Clean the product name - trim spaces
  const cleanName = productName.trim()
  
  // NOVEXPERT: EXACT mapping - 19 products to 19 images
  // Image names from public/novaexpertimage/ folder
  const novexpertImageMap: Record<string, string> = {
    "Vitamin C Serum 25%": "BOOSTER WITH VITAMIN C_2000x2000px.png",
    "The Peeling Night Cream": "THE PEELING NIGHT CREAM_2000x2000px.png",
    "HA Serum Booster 3.2%": "BOOSTER SERUM WITH HA_2000x2000px.png",
    "Expert Anti Aging Cream": "THE EXPERT ANTI-AGING CREAM_2000x2000px.png",
    "Expert Anti Aging Fluid": "THE EXPERT ANTI-AGING FLUID_2000x2000px.png",
    "LipUp": "LIP'UP_2000x2000px.png",
    "Expert Antiaging Eye Contour": "EXPERT ANTI-AGING EYE CONTOUR_2000x2000px.png",
    "Radiance Lifting Eye Contour": "RADIANCE LIFTING EYE CONTOUR_2000x2000px.png",
    "Express Radiant Cleansing Foam": "EXPRESS RADIANT CLEANSING FOAM_2000x2000px.png",
    "Expert Exfoliator": "THE EXPERT EXFOLIATOR_2000x2000px.png",
    "Velvety Hydrobiotic Cream": "VELVETY HYDRO-BIOTIC CREAM_2000x2000px.png",
    "Magnesium Mist": "MAGNESIUM MIST_2000x2000px.png",
    "Milky Cleanser Hydro-Biotic": "MILKY CLEANSER HYDRO-BIOTIC_2000x2000px.png",
    "Purifying Gel": "PURIFYING GEL_2000x2000px.png",
    "Express Blemish Care": "EXPRESS BLEMISH CARE_2000x2000px.png",
    "Clear Skin Foaming Gel": "CLEAR SKIN FOAMING GEL_2000x2000px.png",
    "The Caramel Cream light -N 1": "THE CARAMEL CREAM N°1_2000x2000px.png",
    "The Caramel Cream medium -N 2": "THE CARAMEL CREAM N°2_2000x2000px.png",
    "Micellar Water With HA": "MICELLAR WATER WITH HA_2000x2000px.png",
  }

  // For NOVEXPERT - return image path from /novaexpertimage/ folder
  if (brand === "NOVEXPERT") {
    const imageName = novexpertImageMap[cleanName]
    if (imageName) {
      return `/novaexpertimage/${imageName}`
    }
    // If no image found, return placeholder
    return "/placeholder.jpg"
  }

  // For TOPICREM, use category-based placeholders
  if (brand === "TOPICREM") {
    const upperName = cleanName.toUpperCase()
    if (upperName.includes("SPF") || upperName.includes("SUN")) {
      return "/pink-sunscreen-tube.jpg"
    } else if (upperName.includes("SERUM")) {
      return "/pink-serum-bottle-luxury.jpg"
    } else if (upperName.includes("CREAM") || upperName.includes("BALM")) {
      return "/pink-cream-jar-elegant.jpg"
    } else if (upperName.includes("CLEANSER") || upperName.includes("GEL") || upperName.includes("FOAM")) {
      return "/pink-cleanser-bottle.jpg"
    } else if (upperName.includes("MASK")) {
      return "/pink-mask-jar-luxury.jpg"
    } else if (upperName.includes("EYE")) {
      return "/pink-eye-cream-tube.jpg"
    } else if (upperName.includes("LIP")) {
      return "/pink-lip-treatment.jpg"
    } else if (upperName.includes("TONER") || upperName.includes("MIST") || upperName.includes("WATER")) {
      return "/pink-toner-bottle-spray.jpg"
    }
  }

  // Default fallback
  return "/placeholder.jpg"
}

// Products to EXCLUDE - no images available
const excludedProducts = [
  "Booster Serum Polyphenols",
  "Targeted Dark Spot Corrector", 
  "Pro Collagen Booster Serum"
]

// Transform the JSON data - FILTER OUT products without images
export const allProducts: Product[] = productsJson
  .filter((item: any) => {
    // Remove Novexpert products that don't have images
    if (item.brand === "NOVEXPERT") {
      return !excludedProducts.includes(item.name.trim())
    }
    return true
  })
  .map((item: any, index: number) => {
    const brand = item.brand === "TOPICREM" ? "topicrem" : "novexpert"
    
    // Ensure benefits is always an array
    const benefits = Array.isArray(item.benefits) ? item.benefits : [item.benefits]
    
    return {
      id: generateProductId(item.brand, item.name, index),
      brand,
      line: item.line,
      name: item.name.trim(),
      variants: item.variants,
      description: item.description,
      texture: item.texture || "",
      skinType: item.skinType || "",
      benefits,
      ingredients: item.ingredients,
      usage: item.usage,
      image: mapProductImage(item.name, item.brand),
    }
  })

// Get products by brand
export function getProductsByBrand(brand: "topicrem" | "novexpert"): Product[] {
  return allProducts.filter((p) => p.brand === brand)
}

// Get products by brand and line
export function getProductsByLine(brand: "topicrem" | "novexpert", line: string): Product[] {
  return allProducts.filter((p) => p.brand === brand && p.line === line)
}

// Get unique lines for a brand
export function getLinesByBrand(brand: "topicrem" | "novexpert"): string[] {
  const products = getProductsByBrand(brand)
  const lines = [...new Set(products.map((p) => p.line))]
  return lines.sort()
}

// Get product by ID
export function getProductById(id: string): Product | undefined {
  return allProducts.find((p) => p.id === id)
}

// Get brand info
export function getBrandInfo(brand: "topicrem" | "novexpert") {
  const brands = {
    topicrem: {
      name: "Topicrem",
      tagline: "Dermatological Expertise for All Skin Types",
      description:
        "Topicrem offers dermatologically tested skincare solutions designed for sensitive and demanding skin. Trusted by dermatologists worldwide for over 20 years.",
      color: "primary",
      logo: "/topicremlogo.png",
      instagram: "https://www.instagram.com/topicrem_jordan?igsh=eDgxajhjc3BjZXU2",
    },
    novexpert: {
      name: "Novexpert",
      tagline: "Expert Science, Natural Innovation",
      description:
        "Novexpert combines scientific expertise with natural ingredients to create powerful anti-aging and skin health solutions. Made in France with proven efficacy.",
      color: "accent",
      logo: "/novaexpert.png",
      instagram: "https://www.instagram.com/novexpertjo?igsh=c3B0eXJyZWU0b3pi",
    },
  }
  return brands[brand]
}
