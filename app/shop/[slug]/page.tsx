"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [quantity, setQuantity] = useState(1);
    const [selectedWeight, setSelectedWeight] = useState("500g");

    // Mock data matching the boutique aesthetic
    const product = {
        name: "Premium Sorghum (Mabele)",
        price: 4.99,
        category: "Grains & Beans",
        description: "Our Premium Sorghum, locally known as Mabele, is harvested from the mineral-rich soils of the Zambian plateau. Naturally gluten-free and packed with essential nutrients, it carries the earthy, nutty flavor that has nourished Zambian families for generations.",
        details: [
            "100% Organic & Non-GMO",
            "Sustainably harvested in Zambia",
            "Rich in Fiber and Antioxidants",
            "Traditional stone-ground quality"
        ],
        weights: ["250g", "500g", "1kg"]
    };

    return (
        <div className="bg-background min-h-screen">
            {/* Navigation Breadcrumb */}
            <div className="container py-10">
                <Link href="/shop" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Collection
                </Link>
            </div>

            <main className="container pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-start">

                    {/* Left: Gallery (50/50 Split Focus) */}
                    <div className="space-y-6 sticky top-32">
                        <div className="aspect-[4/5] bg-muted rounded-[60px] overflow-hidden relative group border shadow-sm">
                            <div className="absolute inset-0 bg-secondary/5" />
                            <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border flex items-center gap-4">
                                <div className="flex text-primary">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <span className="text-xs font-bold text-secondary uppercase tracking-widest">4.9 (128 Reviews)</span>
                            </div>
                            <div className="w-full h-full flex items-center justify-center text-secondary/10 font-serif italic text-3xl select-none group-hover:scale-105 transition-transform duration-700">
                                Premium Product Visual
                            </div>
                        </div>

                        {/* Thumbnail Row */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map(idx => (
                                <div key={idx} className={`aspect-square rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${idx === 1 ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}>
                                    <div className="w-full h-full bg-muted/30 flex items-center justify-center text-[10px] text-muted-foreground font-serif uppercase tracking-tighter italic">Angle {idx}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Essential Info */}
                    <div className="space-y-12">
                        {/* Product Header */}
                        <div className="space-y-6">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
                                    {product.category} • Authentic Harvest
                                </p>
                                <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary leading-[1.1]">
                                    {product.name}
                                </h1>
                            </div>
                            <p className="text-2xl font-bold text-secondary/80 tracking-tight">
                                {formatGBP(product.price)}
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Personalization / Variants */}
                        <div className="space-y-10 pt-4">
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Select Weight</h4>
                                <div className="flex flex-wrap gap-3">
                                    {product.weights.map(w => (
                                        <button
                                            key={w}
                                            onClick={() => setSelectedWeight(w)}
                                            className={`h-12 px-8 rounded-full border-2 text-sm font-bold transition-all ${selectedWeight === w ? 'border-primary bg-primary text-white shadow-lg' : 'border-muted hover:border-primary/50 text-muted-foreground'}`}
                                        >
                                            {w}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Quantity</h4>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center border-2 border-muted rounded-full h-14 px-2">
                                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:text-primary font-bold shadow-sm">-</button>
                                        <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                        <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:text-primary font-bold shadow-sm">+</button>
                                    </div>
                                    <Button className="flex-1 h-14 rounded-full text-base font-bold uppercase tracking-widest gap-2 shadow-xl hover:shadow-primary/20 transition-all">
                                        <ShoppingBag className="w-5 h-5" /> Add to Bag
                                    </Button>
                                    <Button variant="ghost" className="h-14 w-14 rounded-full border-2 border-muted hover:border-primary hover:text-primary p-0">
                                        <Heart className="w-6 h-6" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Technical Details / Accordion Mockup */}
                        <div className="pt-10 space-y-8 border-t">
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Product Highlights</h4>
                                <ul className="space-y-3">
                                    {product.details.map((d, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-secondary/70">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                                <div className="flex items-center gap-3">
                                    <Truck className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-secondary">Fast UK Shipping</p>
                                        <p className="text-[10px] text-muted-foreground">Express available</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-secondary">Premium Organic</p>
                                        <p className="text-[10px] text-muted-foreground">Certified Zambian</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RotateCcw className="w-5 h-5 text-primary" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-secondary">Safe Arrival</p>
                                        <p className="text-[10px] text-muted-foreground">Guaranteed quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
