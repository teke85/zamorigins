"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

export default function CheckoutPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call and redirect
        setTimeout(() => {
            router.push('/checkout/success');
        }, 1500);
    };

    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                    <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-8">

                        {/* Contact Information */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold border-b pb-2">1. Contact Information</h2>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium">Email address</label>
                                <input type="email" required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold border-b pb-2">2. Shipping Address (UK Only)</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-1">
                                    <label className="text-sm font-medium">First name</label>
                                    <input type="text" required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                                </div>
                                <div className="grid gap-1">
                                    <label className="text-sm font-medium">Last name</label>
                                    <input type="text" required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium">Address</label>
                                <input type="text" required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-1">
                                    <label className="text-sm font-medium">City</label>
                                    <input type="text" required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                                </div>
                                <div className="grid gap-1">
                                    <label className="text-sm font-medium">Postcode</label>
                                    <input type="text" required className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium">Phone number</label>
                                <input type="tel" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm" />
                            </div>
                        </div>

                        {/* Payment (Simulated) */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold border-b pb-2">3. Payment</h2>
                            <div className="bg-muted p-4 rounded-md text-sm text-muted-foreground flex items-center gap-3">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                This is a mock checkout for Version 1. No real payment processing is taking place.
                            </div>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium">Card number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" disabled className="flex h-10 w-full rounded-md border px-3 py-2 text-sm opacity-50 bg-gray-100" />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-4">
                            <input type="checkbox" id="terms" required className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="terms" className="text-sm font-medium leading-none">
                                I agree to the <Link href="/legal/terms" className="text-primary hover:underline" target="_blank">Terms and Conditions</Link> and <Link href="/legal/privacy" className="text-primary hover:underline" target="_blank">Privacy Policy</Link>
                            </label>
                        </div>

                    </form>
                </div>

                {/* Order Summary Sidebar */}
                <div className="w-full lg:w-96 shrink-0">
                    <div className="bg-muted/30 rounded-2xl p-6 border sticky top-24">
                        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            {/* Mock items */}
                            <div className="flex gap-4 text-sm items-center">
                                <div className="w-12 h-12 bg-primary/20 rounded shrink-0"></div>
                                <div className="flex-1">
                                    <p className="font-medium line-clamp-1">Premium Sorghum (Mabele)</p>
                                    <p className="text-muted-foreground text-xs">Variant: 1kg x 2</p>
                                </div>
                                <div className="font-medium">{formatGBP(17.98)}</div>
                            </div>
                            <div className="flex gap-4 text-sm items-center">
                                <div className="w-12 h-12 bg-primary/20 rounded shrink-0"></div>
                                <div className="flex-1">
                                    <p className="font-medium line-clamp-1">Dried Pumpkin Leaves</p>
                                    <p className="text-muted-foreground text-xs">Variant: 500g x 1</p>
                                </div>
                                <div className="font-medium">{formatGBP(3.99)}</div>
                            </div>
                        </div>

                        <div className="space-y-3 text-sm border-t pt-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span className="font-medium">{formatGBP(21.97)}</span>
                            </div>
                            <div className="flex justify-between border-b pb-4">
                                <span className="text-muted-foreground">Shipping (UK Standard)</span>
                                <span className="font-medium">{formatGBP(8.99)}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 text-lg">
                                <span className="font-bold">Total</span>
                                <span className="font-bold text-primary">{formatGBP(30.96)}</span>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            form="checkout-form"
                            className="w-full mt-8 text-base h-12"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Processing..." : "Place Order"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
