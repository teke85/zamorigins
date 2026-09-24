"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, SlidersHorizontal, ChevronDown, ArrowRight, ShoppingBag, Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";
import { getPublishedDrinks, drinkCategories, drinkBrands } from "@/lib/drinks-data";

const ALL_DRINKS = getPublishedDrinks();

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name A–Z" },
];

export default function DrinksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...ALL_DRINKS];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }

    if (category !== "All") list = list.filter((p) => p.category === category);
    if (brand !== "All") list = list.filter((p) => p.brand === brand);

    if (minPrice !== "") {
      const min = parseFloat(minPrice);
      if (!isNaN(min)) list = list.filter((p) => p.variants[0]?.price >= min);
    }
    if (maxPrice !== "") {
      const max = parseFloat(maxPrice);
      if (!isNaN(max)) list = list.filter((p) => p.variants[0]?.price <= max);
    }

    if (sort === "price-asc") list.sort((a, b) => a.variants[0].price - b.variants[0].price);
    else if (sort === "price-desc") list.sort((a, b) => b.variants[0].price - a.variants[0].price);
    else if (sort === "name-asc") list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "newest") list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    else list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

    return list;
  }, [search, category, brand, minPrice, maxPrice, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setBrand("All");
    setMinPrice("");
    setMaxPrice("");
    setSort("featured");
  };

  const hasActiveFilters =
    search || category !== "All" || brand !== "All" || minPrice || maxPrice;

  return (
    <div className="bg-[#FCFAF8] min-h-screen text-secondary">
      {/* Hero Banner */}
      <section className="relative pt-40 pb-24 border-b border-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#563C29]/5 via-transparent to-[#D99C3B]/5" />
        <div className="container relative z-10 space-y-6">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary/40 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-secondary">Drinks</span>
          </nav>
          <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">Beverages</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Drinks Catalogue
          </h1>
          <p className="text-secondary/50 max-w-xl text-lg leading-relaxed font-light">
            Authentic Zambian beverages — from the classics you grew up with to the ones you've been searching for.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="container py-8">
        <div className="relative max-w-2xl">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, brand, category or keyword..."
            className="w-full h-14 bg-white border border-secondary/10 rounded-full pl-14 pr-6 text-sm placeholder:text-secondary/30 focus:outline-none focus:border-[#D99C3B] focus:ring-2 focus:ring-[#D99C3B]/10 transition-all shadow-sm"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-5 top-1/2 -translate-y-1/2 text-secondary/30 hover:text-secondary">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="container pb-24">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Filter Sidebar — Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-10">
              {/* Category */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-3">
                  Category
                </h3>
                <ul className="space-y-2">
                  {drinkCategories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setCategory(cat)}
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all w-full text-left ${
                          category === cat ? "text-secondary" : "text-secondary/40 hover:text-secondary"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-[#D99C3B] transition-all ${category === cat ? "opacity-100" : "opacity-0"}`} />
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-3">
                  Brand
                </h3>
                <ul className="space-y-2">
                  {drinkBrands.map((b) => (
                    <li key={b}>
                      <button
                        onClick={() => setBrand(b)}
                        className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all w-full text-left ${
                          brand === b ? "text-secondary" : "text-secondary/40 hover:text-secondary"
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-[#D99C3B] transition-all ${brand === b ? "opacity-100" : "opacity-0"}`} />
                        {b}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-3">
                  Price Range
                </h3>
                <div className="flex gap-3">
                  <div className="flex-1 space-y-1">
                    <label className="text-[9px] uppercase font-bold text-secondary/40 tracking-widest">Min</label>
                    <input
                      type="number"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      placeholder="£0"
                      className="w-full bg-white border border-secondary/5 rounded-full px-4 h-10 text-xs focus:ring-1 focus:ring-[#D99C3B] outline-none"
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <label className="text-[9px] uppercase font-bold text-secondary/40 tracking-widest">Max</label>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      placeholder="£20"
                      className="w-full bg-white border border-secondary/5 rounded-full px-4 h-10 text-xs focus:ring-1 focus:ring-[#D99C3B] outline-none"
                    />
                  </div>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary/40 hover:text-primary transition-colors"
                >
                  <X className="w-3 h-3" /> Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-6 border-b border-secondary/5">
              <p className="text-xs text-secondary/40 font-bold uppercase tracking-widest">
                {filtered.length} {filtered.length === 1 ? "drink" : "drinks"} found
              </p>
              <div className="flex items-center gap-4">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest border border-secondary/10 bg-white rounded-full px-5 h-10 hover:border-[#D99C3B] transition-all"
                >
                  <SlidersHorizontal className="w-3 h-3" /> Filters
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest border border-secondary/10 bg-white rounded-full px-5 pr-9 h-10 hover:border-[#D99C3B] transition-all cursor-pointer focus:outline-none text-secondary"
                  >
                    {SORT_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#D99C3B] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="lg:hidden mb-8 p-6 bg-white rounded-2xl border border-secondary/5 shadow-sm space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#D99C3B]">Category</p>
                    {drinkCategories.map((cat) => (
                      <button key={cat} onClick={() => setCategory(cat)}
                        className={`block text-xs font-bold uppercase tracking-widest ${category === cat ? "text-secondary" : "text-secondary/40"}`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#D99C3B]">Brand</p>
                    {drinkBrands.map((b) => (
                      <button key={b} onClick={() => setBrand(b)}
                        className={`block text-xs font-bold uppercase tracking-widest ${brand === b ? "text-secondary" : "text-secondary/40"}`}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs font-bold uppercase tracking-widest text-secondary/40 hover:text-primary flex items-center gap-1">
                    <X className="w-3 h-3" /> Clear Filters
                  </button>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-32 space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-secondary/5 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-secondary/20" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary">No drinks found</h3>
                <p className="text-secondary/50">
                  {search
                    ? `We couldn't find any drinks matching "${search}".`
                    : "No drinks match the selected filters."}
                </p>
                <Button onClick={clearFilters} variant="outline" className="rounded-full px-8 h-12 uppercase text-[9px] font-bold tracking-widest">
                  Clear Filters &amp; Try Again
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 animate-in fade-in duration-700">
                {filtered.map((drink) => {
                  const mainVariant = drink.variants[0];
                  const inStock = drink.variants.some((v) => v.stockCount > 0);
                  return (
                    <div key={drink.id} className="group relative">
                      <Link href={`/drinks/${drink.slug}`} className="block">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-white relative border border-secondary/5 transition-all duration-700 hover:shadow-2xl">
                          {/* Badge */}
                          {drink.isFeatured && (
                            <div className="absolute top-4 left-4 z-20">
                              <span className="bg-white/90 backdrop-blur-sm border border-[#D99C3B]/20 text-secondary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                                Featured
                              </span>
                            </div>
                          )}
                          {!inStock && (
                            <div className="absolute top-4 right-4 z-20">
                              <span className="bg-secondary/80 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em]">
                                Out of Stock
                              </span>
                            </div>
                          )}

                          {/* Wishlist */}
                          <button
                            className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-secondary hover:text-white"
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            aria-label="Add to wishlist"
                          >
                            <Heart className="w-3.5 h-3.5" />
                          </button>

                          {/* Image */}
                          <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                            <Image
                              src={drink.primaryImage}
                              alt={drink.name}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>

                          {/* Quick Add */}
                          {inStock && (
                            <div className="absolute inset-x-0 bottom-4 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                              <Link
                                href={`/drinks/${drink.slug}`}
                                className="flex items-center justify-center gap-2 w-full h-11 bg-white text-secondary font-bold uppercase tracking-widest text-[9px] rounded-full border border-secondary/10 hover:bg-secondary hover:text-white transition-all shadow-xl"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ShoppingBag className="w-3.5 h-3.5" /> View &amp; Add to Cart
                              </Link>
                            </div>
                          )}
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="mt-5 text-center space-y-1.5">
                        <p className="text-[10px] text-[#D99C3B] font-bold uppercase tracking-[0.2em]">
                          {drink.brand} · {mainVariant?.name}
                        </p>
                        <Link href={`/drinks/${drink.slug}`}>
                          <h3 className="text-base font-serif font-bold text-secondary hover:text-primary transition-colors line-clamp-1">
                            {drink.name}
                          </h3>
                        </Link>
                        <div className="flex items-center justify-center gap-3">
                          {mainVariant?.compareAtPrice && (
                            <span className="text-xs text-secondary/30 line-through">
                              {formatGBP(mainVariant.compareAtPrice)}
                            </span>
                          )}
                          <span className="text-base font-bold text-primary">
                            {mainVariant ? formatGBP(mainVariant.price) : "—"}
                          </span>
                        </div>
                        {!inStock && (
                          <span className="text-[9px] font-bold uppercase tracking-widest text-secondary/30">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
