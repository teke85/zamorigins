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
    variant?: string;
}

export function ProductCard({ id, name, price, category, image, tag, variant }: ProductCardProps) {
    return (
        <div className="group relative">
            <Link href={`/shop/${id}`} className="block">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#FCFAF8] relative border border-secondary/5 transition-all duration-700 hover:shadow-2xl">
                    {/* Premium Badge */}
                    {tag && (
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-white/90 backdrop-blur-sm border border-[#D99C3B]/20 text-secondary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                                {tag}
                            </span>
                        </div>
                    )}

                    {/* Wishlist Button - Subtle Reveal */}
                    <button
                        className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-secondary hover:text-white"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        <Heart className="w-4 h-4" />
                    </button>

                    {/* Image Area */}
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">
                        {image ? (
                            <img src={image} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-secondary/5 flex items-center justify-center">
                                <span className="text-secondary/10 font-serif italic text-xl select-none">
                                    ZamOrigins
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Quick Add - Luxury Interaction */}
                    <div className="absolute inset-x-0 bottom-6 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <Button
                            className="w-full h-12 bg-white text-secondary font-bold uppercase tracking-widest text-[9px] rounded-full border border-secondary/10 hover:bg-secondary hover:text-white transition-all shadow-xl"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                        >
                            Quick Addition
                        </Button>
                    </div>
                </div>
            </Link>

            {/* Info Area - Centered Editorial Style */}
            <div className="mt-6 text-center space-y-2">
                <div className="flex flex-col items-center">
                    <p className="text-[10px] text-[#D99C3B] font-bold uppercase tracking-[0.2em]">
                        {variant || category}
                    </p>
                    <Link href={`/shop/${id}`}>
                        <h3 className="text-lg font-serif font-bold text-secondary hover:text-primary transition-colors line-clamp-1 mt-1">
                            {name}
                        </h3>
                    </Link>
                </div>
                <p className="text-base font-bold text-primary tracking-tight">
                    {formatGBP(price)}
                </p>
            </div>
        </div>
    );
}
