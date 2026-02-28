"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

export default function CartPage() {
    const items = [
        { id: '1', name: 'Premium Sorghum (Mabele)', price: 4.99, quantity: 2, weight: "500g" },
        { id: '2', name: 'Authentic Groundnuts', price: 6.50, quantity: 1, weight: "1kg" },
    ];

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 5.99;

    return (
        <div className="bg-background min-h-screen py-20 lg:py-32">
            <div className="container">

                {/* Page Header */}
                <div className="space-y-4 mb-20 text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary tracking-tight">Your Bag</h1>
                    <p className="text-muted-foreground text-lg uppercase tracking-widest font-bold text-[10px]">
                        {items.length} Curated Items Ready for Shipment
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">

                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="space-y-8">
                            {items.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row gap-10 items-center pb-10 border-b last:border-0 group">
                                    {/* Product Visual Mock */}
                                    <div className="w-40 h-52 bg-muted rounded-[32px] overflow-hidden shrink-0 border transition-all duration-700 group-hover:shadow-2xl group-hover:-rotate-3">
                                        <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 font-serif italic text-xs">Product Image</div>
                                    </div>

                                    {/* Info & Quantity */}
                                    <div className="flex-1 flex flex-col justify-between py-2 space-y-6 sm:space-y-0">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <Link href={`/shop/${item.id}`} className="text-2xl font-serif font-bold text-secondary hover:text-primary transition-colors block mb-1">
                                                    {item.name}
                                                </Link>
                                                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">{item.weight}</span>
                                            </div>
                                            <p className="text-2xl font-bold text-secondary">{formatGBP(item.price)}</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center border border-muted p-1 rounded-full bg-white shadow-sm">
                                                <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white rounded-full transition-colors"><Minus className="w-3 h-3" /></button>
                                                <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                                                <button className="w-8 h-8 flex items-center justify-center hover:bg-primary hover:text-white rounded-full transition-colors"><Plus className="w-3 h-3" /></button>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <button className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                                    <Heart className="w-4 h-4" /> Move to Wishlist
                                                </button>
                                                <button className="text-muted-foreground hover:text-destructive transition-colors flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                                                    <Trash2 className="w-4 h-4" /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Note / Promo Section */}
                        <div className="pt-10 space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Add a note for the artisan</h4>
                            <textarea
                                placeholder="Special gift instructions or delivery notes..."
                                className="w-full h-32 bg-muted/20 border-none rounded-3xl p-6 text-sm focus:ring-1 focus:ring-primary resize-none"
                            />
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <aside className="bg-secondary rounded-[50px] p-12 text-white shadow-2xl space-y-12">
                        <h3 className="text-3xl font-serif font-bold">Summary</h3>

                        <div className="space-y-6 text-sm font-medium">
                            <div className="flex justify-between items-center text-white/50">
                                <span>Subtotal</span>
                                <span className="text-white">{formatGBP(subtotal)}</span>
                            </div>
                            <div className="flex justify-between items-center text-white/50">
                                <span>Shipping Estimate</span>
                                <span className="text-white">{formatGBP(shipping)}</span>
                            </div>
                            <div className="flex justify-between items-center text-white/50">
                                <span>Authenticity Guarantee</span>
                                <span className="text-white">Included</span>
                            </div>
                            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                <span className="text-lg font-serif font-bold uppercase tracking-widest">Total</span>
                                <span className="text-4xl font-bold text-primary">{formatGBP(subtotal + shipping)}</span>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4">
                            <Button className="w-full h-16 rounded-full text-base font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]" asChild>
                                <Link href="/checkout">Proceed to Checkout</Link>
                            </Button>
                            <Link href="/shop" className="block text-center text-xs font-bold uppercase tracking-widest text-white/40 hover:text-primary transition-colors py-4">
                                Continue Exploring
                            </Link>
                        </div>

                        {/* Trust markers */}
                        <div className="pt-10 border-t border-white/5 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">Secured with premium <br /> UK encryption standards</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <ShoppingBag className="w-6 h-6 text-primary" />
                                <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">Direct support <br /> from Zambian artisans</p>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
