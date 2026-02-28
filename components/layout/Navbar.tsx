"use client";

import Link from "next/link";
import { Search, ShoppingBag, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-secondary backdrop-blur-md">
            <div className="container flex h-20 items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105">
                    <span className="text-2xl font-serif font-bold text-white tracking-tight">
                        Zam<span className="text-primary italic">Origins</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {["Shop", "Featured", "About Us", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Shop" ? "/shop" : "#"}
                            className="text-sm font-medium text-white/90 hover:text-primary transition-colors tracking-wide uppercase"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                {/* Action Icons */}
                <div className="flex items-center gap-6 text-white">
                    <div className="relative group hidden sm:block">
                        <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <div className="absolute right-0 top-10 w-64 p-3 bg-white border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full text-black px-3 py-2 text-sm border-none focus:ring-0 bg-muted/50 rounded-lg"
                            />
                        </div>
                    </div>
                    <Link href="/dashboard/wishlist">
                        <Heart className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    </Link>
                    <Link href="/authentication/login">
                        <User className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    </Link>
                    <Link href="/cart" className="relative group">
                        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
