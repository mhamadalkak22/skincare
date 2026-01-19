"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { SiteHeader } from "@/components/site-header"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, total, itemCount } = useCart()

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
              {"Add some luxurious skincare products to your cart and start your journey to radiant skin."}
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

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader showBackButton />

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">{"Shopping Cart"}</h1>
            <p className="text-muted-foreground">{`${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart`}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence mode="popLayout">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    layout
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          {/* Product Image */}
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="w-24 h-24 rounded-lg bg-secondary overflow-hidden flex-shrink-0"
                          >
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>

                          {/* Product Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between gap-4 mb-2">
                              <div>
                                <h3 className="font-bold leading-tight">{item.name}</h3>
                                <p className="text-sm text-muted-foreground capitalize">{item.brand.replace("-", " ")}</p>
                              </div>
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeFromCart(item.id)}
                                  className="flex-shrink-0"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </motion.div>
                            </div>

                            <div className="flex items-center justify-between gap-4 mt-4">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="h-8 w-8"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                </motion.div>
                                <motion.span
                                  key={item.quantity}
                                  initial={{ scale: 1.2 }}
                                  animate={{ scale: 1 }}
                                  className="w-8 text-center font-medium"
                                >
                                  {item.quantity}
                                </motion.span>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="h-8 w-8"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </motion.div>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <motion.p
                                  key={item.quantity}
                                  initial={{ scale: 1.1 }}
                                  animate={{ scale: 1 }}
                                  className="font-bold text-lg"
                                >
                                  {`$${(item.price * item.quantity).toFixed(2)}`}
                                </motion.p>
                                {item.quantity > 1 && (
                                  <p className="text-xs text-muted-foreground">{`$${item.price.toFixed(2)} each`}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-bold">{"Order Summary"}</h2>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{"Subtotal"}</span>
                        <motion.span
                          key={total}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          className="font-medium"
                        >
                          {`$${total.toFixed(2)}`}
                        </motion.span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{"Shipping"}</span>
                        <span className="font-medium">{"FREE"}</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between">
                          <span className="font-bold text-lg">{"Total"}</span>
                          <motion.span
                            key={total}
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            className="font-bold text-2xl"
                          >
                            {`$${total.toFixed(2)}`}
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link href="/checkout">
                        <Button size="lg" className="w-full">
                          {"Proceed to Checkout"}
                        </Button>
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link href="/">
                        <Button variant="outline" className="w-full bg-transparent">
                          {"Continue Shopping"}
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
