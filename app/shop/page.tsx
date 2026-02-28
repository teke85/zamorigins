"use client";

import { use } from "react";
import { Filter, ChevronDown, SlidersHorizontal, Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";

// Updated mock data with tags
const mockProducts = [
    { id: '1', name: 'Premium Sorghum (Mabele)', price: 4.99, image: 'bg-primary/20', category: 'Grains & Beans', tag: 'Best Seller' },
    { id: '2', name: 'Authentic Groundnuts', price: 6.50, image: 'bg-secondary/20', category: 'Snacks', tag: 'Fresh' },
    { id: '3', name: 'Dried Pumpkin Leaves (Chibwabwa)', price: 3.99, image: 'bg-primary/20', category: 'Dried Vegetables', tag: 'Seasonal' },
    { id: '4', name: 'Millet Meal', price: 5.50, image: 'bg-secondary/20', category: 'Grains & Beans' },
    { id: '5', name: 'Kapenta (Dried Seafood)', price: 8.99, image: 'bg-primary/20', category: 'Seafood', tag: 'Staff Pick' },
    { id: '6', name: 'Zambian Wild Honey', price: 9.99, image: 'bg-secondary/20', category: 'Specials', tag: 'Rare' },
];

export default function ShopPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
    const params = use(searchParams);
    const selectedCategory = params?.category;

    const categories = ["All Products", "Grains & Beans", "Spices", "Dried Vegetables", "Snacks", "Seafood"];

    return (
        <div className="bg-background min-h-screen">
            {/* Header / Banner */}
            <section className="bg-secondary pt-32 pb-20 text-white border-b border-white/5">
                <div className="container text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">The Pantry</h1>
                    <p className="text-white/60 max-w-lg mx-auto text-lg">
                        Sourced with integrity. Shared with love. Explore our collection of authentic Zambian flavors.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <div className="container py-20 lg:py-32">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Subtle Mobile Filter Button */}
                    <div className="lg:hidden flex justify-between items-center mb-10 pb-4 border-b">
                        <Button variant="outline" className="rounded-full gap-2">
                            <Filter className="w-4 h-4" /> Filters
                        </Button>
                        <div className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
                            {mockProducts.length} Results
                        </div>
                    </div>

                    {/* Desktop Filter Sidebar */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="sticky top-32 space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-b pb-4">Browse by Category</h3>
                                <ul className="space-y-4">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                className={`text-sm font-medium transition-all hover:text-primary ${(selectedCategory === cat.toLowerCase() || (!selectedCategory && cat === "All Products"))
                                                        ? "text-primary translate-x-3"
                                                        : "text-muted-foreground"
                                                    }`}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-b pb-4">Price Focus</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="text-[10px] uppercase font-bold text-muted-foreground block mb-2">Min Price</label>
                                            <input type="text" placeholder="£0" className="w-full bg-muted/50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-[10px] uppercase font-bold text-muted-foreground block mb-2">Max Price</label>
                                            <input type="text" placeholder="£100" className="w-full bg-muted/50 border-none rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary" />
                                        </div>
                                    </div>
                                    <Button className="w-full rounded-full h-12 uppercase font-bold text-[10px] tracking-widest shadow-lg">
                                        Update Results
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                            <div className="hidden lg:block">
                                <p className="text-sm text-muted-foreground font-medium">
                                    Showing <span className="text-secondary font-bold">1–{mockProducts.length}</span> of 24 carefully curated items
                                </p>
                            </div>

                            <div className="flex items-center gap-6 w-full sm:w-auto">
                                <div className="flex items-center gap-2 border rounded-full p-1 bg-muted/20">
                                    <button className="p-1.5 rounded-full bg-white shadow-sm text-primary"><Grid2X2 className="w-4 h-4" /></button>
                                    <button className="p-1.5 rounded-full text-muted-foreground hover:text-secondary"><List className="w-4 h-4" /></button>
                                </div>
                                <div className="relative group flex-1 sm:flex-initial">
                                    <button className="flex items-center justify-between w-full sm:w-48 gap-2 text-xs font-bold uppercase tracking-widest border-2 border-muted rounded-full px-6 h-12 hover:border-primary transition-colors">
                                        Sort By <ChevronDown className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-10">
                            {mockProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    category={product.category}
                                    tag={product.tag}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-32 flex justify-center items-center gap-4">
                            <Button variant="ghost" disabled className="text-xs uppercase font-bold tracking-widest h-12 px-8 rounded-full border">Prev</Button>
                            <div className="flex items-center gap-2">
                                {[1, 2, 3].map(n => (
                                    <button key={n} className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${n === 1 ? 'bg-secondary text-white shadow-lg scale-110' : 'text-muted-foreground hover:text-primary'}`}>
                                        {n}
                                    </button>
                                ))}
                            </div>
                            <Button variant="ghost" className="text-xs uppercase font-bold tracking-widest h-12 px-8 rounded-full border">Next</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
