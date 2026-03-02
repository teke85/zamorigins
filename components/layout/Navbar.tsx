"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Heart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        { label: "All Categories", href: "/shop" },
        { label: "Best Sellers", href: "/shop?sort=best-sellers" },
        { label: "New products", href: "/shop?sort=new" },
        { label: "Food and drink", href: "/shop/food-and-drink" },
        { label: "dry foods", href: "/shop/dry-foods" },
        { label: "beauty and wellness", href: "/shop/beauty-and-wellness" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b">
            {/* Announcement Bar */}
            <div className="bg-[#563C29] text-white py-1.5 px-4 text-center text-[11px] font-bold uppercase tracking-[0.2em]">
                🇿🇲 Delivering authentic Zambian flavours to the UK, USA, Canada & Europe
            </div>

            <nav className="w-full">
                {/* Top Row: Logo, Search, Actions */}
                <div className="container flex h-16 items-center justify-between gap-8 py-2">
                    {/* Brand */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <span className="text-xl md:text-2xl font-serif font-bold text-secondary tracking-tight">
                            Zam<span className="text-primary italic">Origins</span>
                        </span>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-2xl relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2">
                            <Search className="w-4 h-4 text-secondary/40" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search products or brands..."
                            className="w-full h-11 pl-11 pr-4 bg-[#FCFAF8] border border-secondary/10 rounded-full text-sm placeholder:text-secondary/40 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/10 transition-all"
                        />
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-2 md:gap-5 text-secondary">
                        <Link href="/dashboard/wishlist" className="p-2 hover:text-primary transition-colors hidden sm:block">
                            <Heart className="w-5 h-5" />
                        </Link>
                        <Link href="/authentication/login" className="p-2 hover:text-primary transition-colors flex items-center gap-2">
                            <User className="w-5 h-5" />
                            <span className="hidden lg:block text-xs font-bold uppercase tracking-widest">Sign In</span>
                        </Link>
                        <Link href="/cart" className="p-2 relative group hover:text-primary transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            <span className="absolute top-1 right-1 bg-primary text-white text-[9px] font-bold h-3.5 w-3.5 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </Link>
                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Bottom Row: Category Links - Desktop */}
                <div className="hidden md:block border-t border-secondary/5">
                    <div className="container flex items-center justify-center gap-8 py-3">
                        {categories.map((cat) => (
                            <Link
                                key={cat.label}
                                href={cat.href}
                                className="text-[13px] font-bold text-secondary/70 hover:text-primary transition-colors uppercase tracking-widest whitespace-nowrap"
                            >
                                {cat.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl p-6 space-y-6 animate-in fade-in slide-in-from-top-4">
                        {/* Mobile Search */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/40" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full h-11 pl-11 pr-4 bg-[#FCFAF8] border border-secondary/10 rounded-full text-sm"
                            />
                        </div>
                        <div className="space-y-4">
                            <p className="text-[10px] font-bold text-secondary/40 uppercase tracking-[0.2em] border-b pb-2">Categories</p>
                            {categories.map((cat) => (
                                <Link
                                    key={cat.label}
                                    href={cat.href}
                                    className="block text-sm font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {cat.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
