"use client";

import Link from "next/link";
import { ShoppingBag, Heart } from "lucide-react";
import { formatGBP } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    category: string;
    image?: string;
    tag?: string;
}

export function ProductCard({ id, name, price, category, image, tag }: ProductCardProps) {
    return (
        <div className="group relative">
            {/* Visual Area */}
            <Link href={`/shop/${id}`}>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-background relative border border-muted/20 transition-all duration-700 hover:shadow-2xl">
                    {/* Badge */}
                    {tag && (
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary shadow-sm">
                                {tag}
                            </span>
                        </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                        className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/95 backdrop-blur rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-primary hover:text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <Heart className="w-4 h-4" />
                    </button>

                    {/* Image Placeholder */}
                    <div className="w-full h-full flex items-center justify-center bg-[#FDFCFB] group-hover:scale-105 transition-transform duration-700">
                        <span className="text-muted-foreground/20 font-serif italic text-2xl select-none">
                            Premium Image
                        </span>
                    </div>

                    {/* Quick Add Overlay */}
                    <div className="absolute bottom-6 left-0 right-0 px-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Button
                            className="w-full h-12 rounded-full font-bold uppercase tracking-widest text-[10px] shadow-lg"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            Add to Bag
                        </Button>
                    </div>
                </div>
            </Link>

            {/* Info Area */}
            <div className="mt-6 text-center space-y-2">
                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">
                    {category}
                </p>
                <Link href={`/shop/${id}`}>
                    <h3 className="text-xl font-serif font-bold text-secondary hover:text-primary transition-colors line-clamp-1">
                        {name}
                    </h3>
                </Link>
                <p className="text-lg font-bold text-secondary/70 tracking-tight">
                    {formatGBP(price)}
                </p>
            </div>
        </div>
    );
}
