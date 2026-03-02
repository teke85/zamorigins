"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ShoppingBag,
    Heart,
    Truck,
    Star,
    Info,
    ChevronRight,
    Check,
    Box,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";
import { ProductCard } from "@/components/product/ProductCard";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const product = {
        name: "Premium Sun-Dried Kapenta",
        brand: "ZamOrigins Harvests",
        price: 7.50,
        casePrice: 72.00,
        unitsPerCase: 12,
        moq: 1, // Minimum Order Quantity in cases
        rating: 4.9,
        reviewCount: 156,
        category: "Authentic Fish",
        description: "Exquisitely sun-dried using traditional Zambian methods. Our Kapenta is sourced from the deep, clean waters of Lake Kariba, offering a rich, concentrated oceanic flavor that serves as the heart of authentic Zambian cuisine.",
        images: [
            "https://images.unsplash.com/photo-1626132646529-50033aa6f6b9?auto=format&fit=crop&q=80&w=800", // Fish/Dried
            "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=800", // Market
            "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800", // Cooking
            "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800"  // Plateau
        ],
        details: {
            weight: "250g per unit",
            origin: "Lake Kariba, Zambia",
            ingredients: "100% Sun-Dried Kapenta (Limnothrissa miodon)",
            shelfLife: "12 Months",
            storage: "Store in a cool, dry place"
        }
    };

    const related = [
        { id: "dried-fish", name: "Dried Bream Fish", price: 8.50, category: "Fish", tag: "Best Seller", image: "https://images.unsplash.com/photo-1534123235357-51b587bbdb8e?auto=format&fit=crop&q=80&w=400" },
        { id: "beans", name: "Organic Sugar Beans", price: 4.99, category: "Legumes", tag: "Organic", image: "https://images.unsplash.com/photo-1551462147-37885acc3c41?auto=format&fit=crop&q=80&w=400" },
        { id: "spices", name: "Bird's Eye Chili", price: 3.50, category: "Spices", tag: "Local", image: "https://images.unsplash.com/photo-1582213726895-c2ac21cb3401?auto=format&fit=crop&q=80&w=400" },
        { id: "mealie", name: "White Mealie Meal", price: 12.00, category: "Staples", tag: "Essential", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400" },
    ];

    return (
        <div className="bg-[#FCFAF8] min-h-screen font-sans">
            {/* Nav Padding */}
            <div className="h-32" />

            {/* Breadcrumb */}
            <nav className="container mb-8">
                <div className="flex items-center gap-2 text-xs font-medium text-secondary/40">
                    <Link href="/shop" className="hover:text-primary transition-colors">Shop</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href={`/shop/${product.category.toLowerCase()}`} className="hover:text-primary transition-colors">{product.category}</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-secondary/80">{product.name}</span>
                </div>
            </nav>

            <main className="container max-w-7xl mx-auto pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

                    {/* Left: Gallery (6 Columns) */}
                    <div className="lg:col-span-7 xl:col-span-7 space-y-4">
                        <div className="aspect-[4/5] md:aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-secondary/5 relative group">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-white/90 backdrop-blur-sm border border-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                                    Authentic Heritage
                                </span>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-3">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(idx)}
                                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx ? 'border-primary ring-4 ring-primary/5' : 'border-transparent hover:border-secondary/20'}`}
                                >
                                    <img src={img} alt={`${product.name} view ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Details (5 Columns) */}
                    <div className="lg:col-span-5 xl:col-span-5 space-y-8">
                        {/* Header Info */}
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D99C3B] mb-2">{product.brand}</p>
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-[1.1]">
                                    {product.name}
                                </h1>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    {/* Star Rating */}
                                    <div className="flex text-[#D99C3B]">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? "fill-current" : "text-secondary/10"}`} />
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-secondary">{product.rating}</span>
                                </div>
                                <span className="text-xs text-secondary/40 border-l border-secondary/10 pl-4">{product.reviewCount} Reviews</span>
                                <span className="flex items-center gap-1.5 text-xs text-[#005B41] font-bold bg-[#005B41]/5 px-2 py-0.5 rounded-full">
                                    <Check className="w-3 h-3" /> Best Seller
                                </span>
                            </div>
                        </div>

                        {/* Pricing Grid */}
                        <div className="grid grid-cols-2 gap-4 p-5 bg-white border border-secondary/5 rounded-2xl shadow-sm">
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase font-bold text-secondary/40 tracking-widest">Unit Price</p>
                                <p className="text-2xl font-bold text-secondary">{formatGBP(product.price)}</p>
                            </div>
                            <div className="space-y-1 border-l border-secondary/10 pl-4">
                                <p className="text-[10px] uppercase font-bold text-secondary/40 tracking-widest">Case (12 units)</p>
                                <p className="text-2xl font-bold text-primary">{formatGBP(product.casePrice)}</p>
                                <p className="text-[10px] text-primary/60 italic">Save 20% per unit</p>
                            </div>
                        </div>

                        {/* Purchase Controls */}
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Quantity (Cases)</h4>
                                    <p className="text-[10px] text-secondary/40 font-medium">Min order: {product.moq} case</p>
                                </div>
                                <div className="flex gap-3">
                                    <div className="flex items-center bg-white border border-secondary/10 rounded-xl h-14 px-2">
                                        <button
                                            onClick={() => setQuantity(Math.max(product.moq, quantity - 1))}
                                            className="w-10 h-10 flex items-center justify-center text-lg hover:text-primary transition-colors disabled:opacity-20"
                                            disabled={quantity <= product.moq}
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(product.moq, parseInt(e.target.value) || product.moq))}
                                            className="w-12 text-center font-bold bg-transparent border-none focus:ring-0 text-secondary"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 flex items-center justify-center text-lg hover:text-primary transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <Button className="flex-1 h-14 bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-lg shadow-primary/10 gap-2">
                                        <ShoppingBag className="w-4 h-4" /> Add to Shopping Bag
                                    </Button>
                                    <button className="h-14 w-14 flex items-center justify-center border border-secondary/10 rounded-xl hover:bg-white hover:border-primary hover:text-primary transition-all shadow-sm">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Short Description */}
                            <p className="text-secondary/70 leading-relaxed text-sm italic border-l-2 border-[#D99C3B] pl-4">
                                "{product.description}"
                            </p>

                            {/* Structured Product Specs */}
                            <div className="space-y-4 pt-6">
                                <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary">
                                    <Info className="w-3.5 h-3.5 text-[#D99C3B]" /> Product Specifications
                                </h4>
                                <div className="bg-white rounded-2xl border border-secondary/5 overflow-hidden shadow-sm">
                                    <table className="w-full text-xs text-left">
                                        <tbody className="divide-y divide-secondary/5">
                                            {[
                                                { label: "Origin", value: product.details.origin, icon: Globe },
                                                { label: "Weight", value: product.details.weight, icon: Box },
                                                { label: "Ingredients", value: product.details.ingredients, icon: Info },
                                                { label: "Shelf Life", value: product.details.shelfLife, icon: Check },
                                            ].map((item, i) => (
                                                <tr key={i}>
                                                    <td className="px-5 py-4 font-bold text-secondary/40 uppercase tracking-widest w-1/3 border-r border-secondary/5 bg-secondary/[0.02]">{item.label}</td>
                                                    <td className="px-5 py-4 text-secondary font-medium">{item.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Shipping Trust Block */}
                            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                                    <Truck className="w-5 h-5 text-primary" />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Global Express Delivery</p>
                                    <p className="text-[11px] text-secondary/60 leading-tight">
                                        Direct from Lusaka processing hub. UK & EU delivery within 4-6 business days. Tracked & insured.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Below the Fold: More from this brand */}
                <div className="mt-32 space-y-12">
                    <div className="flex items-center justify-between border-b border-secondary/10 pb-6">
                        <div className="space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B]">Explore the Collection</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">More from ZamOrigins</h2>
                        </div>
                        <Link href="/shop" className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-all border-b-2 border-primary/20 pb-1">
                            Browse All
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide snap-x px-1">
                            {related.map((p) => (
                                <div key={p.id} className="min-w-[280px] md:min-w-[320px] snap-start">
                                    <ProductCard {...p} id={p.id} />
                                </div>
                            ))}
                            {/* Empty spacing for scroll ending */}
                            <div className="min-w-[1px]" />
                        </div>

                        {/* Subtle Scroll Indicator */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
                            <div className="w-12 h-1 bg-primary rounded-full" />
                            <div className="w-4 h-1 bg-secondary/10 rounded-full" />
                            <div className="w-4 h-1 bg-secondary/10 rounded-full" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
