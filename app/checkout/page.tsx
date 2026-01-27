"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/components/cart-provider"
import { SiteHeader } from "@/components/site-header"
import { ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    notes: "",
  })

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader showBackButton />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-24"
        >
          <div className="max-w-md mx-auto text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto"
            >
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold"
            >
              {"Your cart is empty"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground"
            >
              {"Add products to your cart before checking out."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/">
                <Button size="lg">{"Continue Shopping"}</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create order message for WhatsApp
    let message = `*New Order - Topicrem & Novexpert*\n\n`
    message += `*Customer Information:*\n`
    message += `Name: ${formData.name}\n`
    message += `Phone: ${formData.phone}\n`
    message += `Email: ${formData.email}\n`
    message += `Address: ${formData.address}, ${formData.city}\n\n`

    message += `*Order Details:*\n`
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Brand: ${item.brand}\n`
      message += `   Quantity: ${item.quantity}\n`
      message += `   Price: ${(item.price * item.quantity).toFixed(2)} JOD\n\n`
    })

    message += `*Total: ${total.toFixed(2)} JOD*\n`

    if (formData.notes) {
      message += `\nNotes: ${formData.notes}`
    }

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "962780686156"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Clear cart and redirect
    clearCart()

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank")

    // Redirect to confirmation page
    router.push("/order-confirmed")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader showBackButton backHref="/cart" />

      {/* Checkout Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold mb-8"
          >
            {"Checkout"}
          </motion.h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Customer Information Form */}
              <div className="lg:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{"Contact Information"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{"Full Name *"}</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{"Phone Number *"}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+962 7X XXX XXXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{"Email Address *"}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{"Delivery Address"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">{"Street Address *"}</Label>
                        <Input
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main Street, Apt 4B"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city">{"City *"}</Label>
                        <Input
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Amman"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">{"Order Notes (Optional)"}</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Add any special instructions for your order..."
                          rows={3}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle>{"Order Summary"}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {items.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="flex justify-between text-sm"
                          >
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">{item.name}</p>
                              <p className="text-muted-foreground text-xs">{`Qty: ${item.quantity}`}</p>
                            </div>
                            <span className="font-medium ml-2">{`${(item.price * item.quantity).toFixed(2)} JOD`}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="border-t border-border pt-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{"Subtotal"}</span>
                          <span className="font-medium">{`${total.toFixed(2)} JOD`}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{"Shipping"}</span>
                          <span className="font-medium">{"FREE"}</span>
                        </div>
                        <div className="border-t border-border pt-2">
                          <div className="flex justify-between">
                            <span className="font-bold text-lg">{"Total"}</span>
                            <span className="font-bold text-2xl">{`${total.toFixed(2)} JOD`}</span>
                          </div>
                        </div>
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button type="submit" size="lg" className="w-full">
                          {"Send Order via WhatsApp"}
                        </Button>
                      </motion.div>

                      <p className="text-xs text-muted-foreground text-center">
                        {"Your order will be sent to us via WhatsApp for confirmation"}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
