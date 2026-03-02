"use client";

import { use } from "react";
import { Filter, ChevronDown, SlidersHorizontal, Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";

// Updated mock data with tags
const mockProducts = [
    { id: 'kapenta', name: 'Premium Lake Kariba Kapenta', price: 12.99, variant: "500g", category: 'Fish', tag: 'Best Seller', image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439413/product-kapenta-L5aJLvM4_ifvfdb.jpg" },
    { id: 'dried-fish', name: 'Bream Dried Fish', price: 15.50, variant: "750g", category: 'Fish', tag: 'Fresh', image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439374/product-dried-fish-Bh_X2_xb_kx8hk7.jpg" },
    { id: 'beans', name: 'Mixed Zambian Beans', price: 8.99, variant: "1kg", category: 'Grains & Beans', tag: 'Organic', image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439360/product-beans-D143BQH__xwbt5h.jpg" },
    { id: 'mealie-meal', name: 'Breakfast Mealie Meal', price: 9.99, variant: "2.5kg", category: 'Staples', tag: 'Essential', image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439345/product-mealie-CygOyINB_m2ivdm.jpg" },
    { id: 'mushrooms', name: 'Wild Forest Mushrooms', price: 14.99, variant: "250g", category: 'Vegetables', tag: 'Seasonal', image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439329/product-mushrooms-DjAcZHFP_xalhkz.jpg" },
    { id: 'spices', name: 'Heritage Spice Collection', price: 11.50, variant: "300g", category: 'Spices', tag: 'Rare', image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439303/product-spices-DgLgP1aF_roh8mb.jpg" },
];

export default function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const params = use(searchParams);
    const selectedCategory = params?.category;

    const categories = ["All Collections", "Fish", "Grains & Beans", "Staples", "Vegetables", "Spices"];

    return (
        <div className="bg-[#FCFAF8] min-h-screen text-secondary">
            {/* Header / Banner - Refined Editorial */}
            <section className="relative pt-40 pb-24 border-b border-secondary/5 overflow-hidden">
                <div className="container relative z-10 text-center space-y-6">
                    <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">The Collection</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">The Pantry</h1>
                    <p className="text-secondary/50 max-w-xl mx-auto text-lg leading-relaxed font-light">
                        Traditionally harvested staples from the heart of Zambia, curated for the modern global kitchen.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container py-24">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Desktop Filter Sidebar - Modernized */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-40 space-y-16">
                            <div className="space-y-8">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-4">Collections</h3>
                                <ul className="space-y-4">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                className={`group flex items-center text-xs font-bold uppercase tracking-widest transition-all duration-300 ${(selectedCategory === cat.toLowerCase() || (!selectedCategory && cat === "All Collections"))
                                                    ? "text-secondary"
                                                    : "text-secondary/40 hover:text-secondary hover:translate-x-1"
                                                    }`}
                                            >
                                                <span className={`w-2 h-2 rounded-full bg-[#D99C3B] mr-3 transition-all duration-300 ${(selectedCategory === cat.toLowerCase() || (!selectedCategory && cat === "All Collections")) ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75"}`} />
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-4">Refine by Price</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[9px] uppercase font-bold text-secondary/40 tracking-widest">Min</label>
                                            <input type="text" placeholder="£0" className="w-full bg-white border border-secondary/5 rounded-full px-4 h-10 text-xs focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <label className="text-[9px] uppercase font-bold text-secondary/40 tracking-widest">Max</label>
                                            <input type="text" placeholder="£50" className="w-full bg-white border border-secondary/5 rounded-full px-4 h-10 text-xs focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20" />
                                        </div>
                                    </div>
                                    <Button className="w-full rounded-full h-12 bg-secondary text-white uppercase font-bold text-[9px] tracking-widest hover:bg-secondary/90 shadow-xl transition-all">
                                        Apply Filters
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        {/* Toolbar - Boutique Style */}
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8 border-b border-secondary/5 pb-8">
                            <div className="space-y-1">
                                <p className="text-xs text-secondary/40 font-bold uppercase tracking-widest">
                                    Found <span className="text-secondary">{mockProducts.length}</span> Objects of Heritage
                                </p>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 p-1 bg-white rounded-full border border-secondary/5 shadow-sm">
                                    <button className="p-2 rounded-full bg-secondary text-white shadow-lg"><Grid2X2 className="w-3.5 h-3.5" /></button>
                                    <button className="p-2 rounded-full text-secondary/30 hover:text-secondary hover:bg-secondary/5 transition-all"><List className="w-3.5 h-3.5" /></button>
                                </div>
                                <button className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest border border-secondary/5 bg-white rounded-full px-6 h-12 hover:border-[#D99C3B] hover:shadow-md transition-all text-secondary">
                                    Sort by: Popularity <ChevronDown className="w-3.5 h-3.5 text-[#D99C3B]" />
                                </button>
                            </div>
                        </div>

                        {/* Grid - Refined Spacing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 animate-in fade-in duration-1000">
                            {mockProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    tag={product.tag}
                                    image={product.image}
                                    variant={product.variant}
                                />
                            ))}
                        </div>

                        {/* Pagination - Minimalist */}
                        <div className="mt-32 flex justify-center items-center gap-4">
                            <button className="w-12 h-12 rounded-full text-[10px] font-bold bg-secondary text-white shadow-2xl">01</button>
                            <button className="w-12 h-12 rounded-full text-[10px] font-bold text-secondary/40 hover:text-secondary hover:bg-white border border-transparent hover:border-secondary/5 transition-all">02</button>
                            <button className="w-12 h-12 rounded-full text-[10px] font-bold text-secondary/40 hover:text-secondary hover:bg-white border border-transparent hover:border-secondary/5 transition-all">03</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
