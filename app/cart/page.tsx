"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

// Mock cart items based on requirements
const mockCartItems = [
    { id: '1', name: 'Premium Sorghum (Mabele)', variant: '1kg', price: 8.99, quantity: 2, weight: 1.0, image: 'bg-primary/20' },
    { id: '3', name: 'Dried Pumpkin Leaves (Chibwabwa)', variant: '500g', price: 3.99, quantity: 1, weight: 0.5, image: 'bg-primary/20' },
];

export default function CartPage() {
    const [items, setItems] = useState(mockCartItems);
    const [couponCode, setCouponCode] = useState('');

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
    };

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const totalWeight = items.reduce((acc, item) => acc + (item.weight * item.quantity), 0);

    // Dummy weight-based shipping logic
    const shipping = totalWeight > 5 ? 12.99 : (totalWeight > 2 ? 8.99 : 4.99);
    const total = subtotal + shipping;

    return (
        <div className="container py-10 md:py-16">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

            {items.length === 0 ? (
                <div className="text-center py-16 border rounded-2xl bg-muted/20">
                    <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                    <p className="text-muted-foreground mb-6">Looks like you haven&apos;t added any items yet.</p>
                    <Button asChild>
                        <Link href="/shop">Continue Shopping</Link>
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-6">
                        <div className="hidden sm:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground border-b pb-4">
                            <div className="col-span-6">Product</div>
                            <div className="col-span-3 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                            <div className="col-span-1"></div>
                        </div>

                        {items.map((item) => (
                            <div key={item.id} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center border-b pb-6 sm:pb-4 border-dashed sm:border-solid">
                                <div className="col-span-1 sm:col-span-6 flex gap-4">
                                    <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-md shrink-0 flex items-center justify-center ${item.image}`}>
                                        <span className="text-xs text-muted-foreground">Img</span>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <Link href={`/shop/${item.id}`} className="font-semibold hover:text-primary transition-colors line-clamp-2">
                                            {item.name}
                                        </Link>
                                        <span className="text-sm text-muted-foreground mt-1">Variant: {item.variant}</span>
                                        <span className="text-sm font-medium mt-2 sm:hidden">{formatGBP(item.price)}</span>
                                    </div>
                                </div>

                                <div className="col-span-1 sm:col-span-3 flex justify-between sm:justify-center items-center mt-4 sm:mt-0">
                                    <div className="flex items-center border rounded-md h-10 w-28">
                                        <button
                                            className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus className="w-3 h-3" />
                                        </button>
                                        <div className="flex-1 flex items-center justify-center text-sm font-medium">
                                            {item.quantity}
                                        </div>
                                        <button
                                            className="w-8 h-full flex items-center justify-center text-muted-foreground hover:text-foreground"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus className="w-3 h-3" />
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-1 sm:col-span-2 text-right hidden sm:block font-medium">
                                    {formatGBP(item.price * item.quantity)}
                                </div>

                                <div className="col-span-1 flex justify-end">
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive shrink-0" onClick={() => removeItem(item.id)}>
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-96 shrink-0">
                        <div className="bg-muted/30 rounded-2xl p-6 border sticky top-24">
                            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Subtotal</span>
                                    <span className="font-medium">{formatGBP(subtotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Total Weight</span>
                                    <span className="font-medium">{totalWeight.toFixed(1)} kg</span>
                                </div>
                                <div className="flex justify-between border-b pb-4">
                                    <span className="text-muted-foreground">Est. Shipping <br /><span className="text-xs">(based on UK delivery)</span></span>
                                    <span className="font-medium text-right">{formatGBP(shipping)}</span>
                                </div>

                                <div className="flex items-center gap-2 pt-2">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        className="flex h-9 w-full rounded-md border bg-transparent px-3 text-sm"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    <Button variant="outline" className="h-9">Apply</Button>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t text-lg">
                                    <span className="font-bold">Total</span>
                                    <span className="font-bold text-primary">{formatGBP(total)}</span>
                                </div>
                            </div>

                            <Button className="w-full mt-8 text-base h-12" asChild>
                                <Link href="/checkout">
                                    Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
