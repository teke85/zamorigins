"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  Star,
  ShoppingBag,
  Heart,
  Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const categories = [
    { name: "Kapenta", products: "8 Products", image: "https://images.unsplash.com/photo-1626132646529-50033aa6f6b9?auto=format&fit=crop&q=80&w=600" },
    { name: "Dried Fish", products: "12 Products", image: "https://images.unsplash.com/photo-1534123235357-51b587bbdb8e?auto=format&fit=crop&q=80&w=600" },
    { name: "Beans & Pulses", products: "10 Products", image: "https://images.unsplash.com/photo-1551462147-37885acc3c41?auto=format&fit=crop&q=80&w=600" },
    { name: "Mealie Meal", sub: "incl. Cassava Meal", products: "6 Products", image: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&q=80&w=600" },
    { name: "Rice", products: "4 Products", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600" },
    { name: "Wild Mushrooms", products: "5 Products", image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=600" },
  ];

  const drinks = [
    { name: "Fanta Bottle", slug: "fanta-bottle", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270623/Fanta_Bottle.jpg" },
    { name: "Fanta Disposable", slug: "fanta-disposable", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Fanta_Disposable.jpg" },
    { name: "Appy Apple", slug: "appy-apple", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Appy_Apple.jpg" },
    { name: "Coca-Cola", slug: "coca-cola", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Coca_Cola_Soft_DRink.jpg" },
    { name: "Milkit MilkShake", slug: "milkit-milkshake", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Milkit_MilkShake.jpg" },
    { name: "Appy Lemon", slug: "appy-lemon", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/WhatsApp_Image_2026-09-24_at_18.59.06_12.jpg" },
  ];

  const signature = [
    {
      id: "kapenta",
      name: "Premium Lake Kariba Kapenta",
      price: 12.99,
      variant: "500g",
      badge: "Best Seller",
      image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439413/product-kapenta-L5aJLvM4_ifvfdb.jpg"
    },
    {
      id: "beans",
      name: "Mixed Zambian Beans",
      price: 8.99,
      variant: "1kg",
      badge: null,
      image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439360/product-beans-D143BQH__xwbt5h.jpg"
    },
    {
      id: "mealie-meal",
      name: "Breakfast Mealie Meal",
      price: 9.99,
      originalPrice: 12.99,
      variant: "2.5kg",
      badge: "Best Seller + Sale",
      image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439345/product-mealie-CygOyINB_m2ivdm.jpg"
    },
    {
      id: "spice-collection",
      name: "Zambian Spice Collection",
      price: 11.99,
      variant: "300g",
      badge: "New",
      image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439303/product-spices-DgLgP1aF_roh8mb.jpg"
    },
  ];

  const testimonials = [
    {
      text: "I cried when I opened my first package. The kapenta smelled exactly like my grandmother's kitchen in Lusaka. Thank you, ZamOrigins!",
      author: "Chimwemwe M.",
      location: "London, UK"
    },
    {
      text: "Finally, real Zambian mealie meal. My nshima tastes like home again. Fast shipping and excellent packaging.",
      author: "Bwalya K.",
      location: "Toronto, Canada"
    },
    {
      text: "The quality is exceptional. I now order every month. My children are reconnecting with their roots.",
      author: "Mutinta N.",
      location: "Houston, USA"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF8] text-secondary">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439489/hero%20image.png"
            alt="ZamOrigins Heritage"
            fill
            className="object-cover brightness-75 scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent z-10" />
        </div>

        <div className="container relative z-20 text-white">
          <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="space-y-4">
              <span className="text-secondary-foreground/80 font-bold uppercase tracking-[0.4em] text-[10px]">
                Authentic Heritage Sourced With Integrity
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-serif font-bold leading-[0.9] -ml-1 text-white">
                Taste Home, <br />
                <span className="text-[#D99C3B] italic">Wherever You Are.</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed font-light">
              We deliver the finest Zambian staples straight from the source to your kitchen—anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Button size="lg" className="h-16 px-12 rounded-full text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-white border-none shadow-2xl shadow-primary/20" asChild>
                <Link href="/shop">Explore the Collection</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 rounded-full text-xs font-bold uppercase tracking-widest border border-white/40 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm transition-all" asChild>
                <Link href="/about">Our Philosophy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: Shop by Category (Editorial 6-Column Grid) */}
      <section className="py-20 bg-[#FCFAF8]">
        <div className="container">
          <div className="max-w-3xl mb-20 space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <span className="text-[#D99C3B] font-bold uppercase tracking-[0.3em] text-[10px]">
              Collections
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-secondary -ml-1">Shop by Category</h2>
            <p className="text-secondary/60 text-lg leading-relaxed max-w-xl">
              Authentic Zambian pantry essentials, thoughtfully sourced and curated for your home abroad.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={cat.name}
                href="/shop"
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-sm border border-secondary/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D99C3B] transition-colors">{cat.name}</h3>
                    {cat.sub && <p className="text-[10px] text-white/60 font-medium uppercase tracking-widest">{cat.sub}</p>}
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] pt-1">{cat.products}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1b: Drinks Category */}
      <section className="py-20 bg-white border-t border-secondary/5">
        <div className="container">
          <div className="max-w-3xl mb-16 space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <span className="text-[#D99C3B] font-bold uppercase tracking-[0.3em] text-[10px]">
              Beverages
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-secondary -ml-1">Drinks</h2>
            <p className="text-secondary/60 text-lg leading-relaxed max-w-xl">
              Refreshing drinks and beverages — the perfect companion to your favourite Zambian meals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 xl:gap-6">
            {drinks.map((drink, idx) => (
              <Link
                key={drink.name}
                href={`/drinks/${drink.slug}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-white shadow-sm border border-secondary/5 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-1">
                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#D99C3B] transition-colors leading-tight">{drink.name}</h3>
                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] pt-1">Shop Now</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/drinks" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-all border-b border-primary/20 pb-2">
              View All Drinks <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: Signature Selection (Featured Elevated) */}
      <section className="py-20 bg-white border-y border-secondary/5">
        <div className="container text-center mb-20 space-y-4">
          <span className="text-[#D99C3B] font-bold uppercase tracking-[0.3em] text-[10px]">
            Signature Selection
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-secondary">Hand-Selected Favourites</h2>
          <div className="max-w-xl mx-auto flex items-center justify-center gap-4">
            <div className="h-[1px] flex-1 bg-secondary/10" />
            <p className="text-secondary/60 text-lg px-4 italic">A refined selection of our most loved essentials.</p>
            <div className="h-[1px] flex-1 bg-secondary/10" />
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {signature.map((p) => (
              <div key={p.id} className="group space-y-6">
                <Link href={`/shop/${p.id}`} className="block relative aspect-square rounded-2xl overflow-hidden bg-[#FCFAF8] shadow-sm border border-secondary/5 transition-all duration-700 hover:shadow-2xl">
                  {p.badge && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-white/90 backdrop-blur-sm border border-[#D99C3B]/20 text-secondary px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] shadow-sm">
                        {p.badge}
                      </span>
                    </div>
                  )}
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-6 px-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button className="w-full bg-white text-secondary font-bold uppercase tracking-widest text-[9px] h-12 rounded-full border border-secondary/10 hover:bg-secondary hover:text-white transition-all shadow-xl">
                      Quick Addition
                    </Button>
                  </div>
                </Link>
                <div className="space-y-2 text-center">
                  <p className="text-[10px] text-[#D99C3B] font-bold uppercase tracking-[0.2em]">{p.variant}</p>
                  <Link href={`/shop/${p.id}`}>
                    <h3 className="text-lg font-serif font-bold text-secondary hover:text-primary transition-colors">{p.name}</h3>
                  </Link>
                  <div className="flex items-center justify-center gap-3">
                    {p.originalPrice && <span className="text-sm text-secondary/30 line-through">£{p.originalPrice.toFixed(2)}</span>}
                    <span className="text-lg font-bold text-primary">£{p.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/shop" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-secondary hover:text-primary transition-all border-b border-primary/20 pb-2">
              View All Featured Items <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Experience (How It Works) */}
      <section className="py-24 bg-[#FCFAF8]">
        <div className="container">
          <div className="text-center mb-28 space-y-6">
            <h2 className="text-6xl md:text-7xl font-serif text-secondary tracking-tight">How It Works</h2>
            <p className="text-secondary/40 text-xl font-light">Getting your favourite Zambian foods has never been easier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative">
            <div className="text-center space-y-8 relative group">
              <div className="w-24 h-24 mx-auto rounded-full bg-secondary/[0.03] border border-secondary/5 flex items-center justify-center group-hover:border-[#D99C3B]/30 transition-all duration-700">
                <ShoppingBag className="w-8 h-8 text-[#563C29] font-light" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-secondary">Browse &amp; Order</h4>
                <p className="text-secondary/50 text-base leading-relaxed max-w-[300px] mx-auto font-light">
                  Choose from our curated selection of authentic Zambian dry foods.
                </p>
              </div>
            </div>

            <div className="text-center space-y-8 relative group">
              <div className="w-24 h-24 mx-auto rounded-full bg-secondary/[0.03] border border-secondary/5 flex items-center justify-center group-hover:border-[#D99C3B]/30 transition-all duration-700 shadow-sm">
                <Quote className="w-8 h-8 text-[#563C29] font-light" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-secondary">We Pack with Care</h4>
                <p className="text-secondary/50 text-base leading-relaxed max-w-[300px] mx-auto font-light">
                  Each order is carefully packaged to preserve freshness and quality.
                </p>
              </div>
            </div>

            <div className="text-center space-y-8 relative group">
              <div className="w-24 h-24 mx-auto rounded-full bg-secondary/[0.03] border border-secondary/5 flex items-center justify-center group-hover:border-[#D99C3B]/30 transition-all duration-700 shadow-sm">
                <ChevronRight className="w-8 h-8 text-[#563C29] font-light" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-serif text-secondary">Delivered to You</h4>
                <p className="text-secondary/50 text-base leading-relaxed max-w-[300px] mx-auto font-light">
                  We ship internationally to your doorstep — UK, USA, Canada &amp; Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Voices from the Diaspora (Testimonials) */}
      <section className="py-24 bg-white border-y border-secondary/5 overflow-hidden">
        <div className="container">
          <div className="text-center mb-28 space-y-6">
            <h2 className="text-6xl md:text-8xl font-serif text-secondary tracking-tighter">Voices from the Diaspora</h2>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scroll-smooth px-4 scrollbar-hide">
            {testimonials.map((t, idx) => (
              <div key={idx} className="min-w-full md:min-w-[400px] snap-center p-12 bg-[#FCFAF8] rounded-[40px] border border-secondary/5 space-y-8 relative">
                <div className="flex text-amber-300 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-secondary/80 leading-relaxed relative z-10">
                  &quot;{t.text}&quot;
                </p>
                <div className="pt-4 border-t border-secondary/10">
                  <p className="font-bold text-secondary">{t.author}</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-secondary/40">{t.location}</p>
                </div>
                <Quote className="absolute top-10 right-10 w-24 h-24 text-secondary/[0.03] rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Private Invitation (Newsletter) */}
      <section className="py-24 bg-[#563C29] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
        </div>
        <div className="container relative z-10 max-w-4xl text-center text-white space-y-12">
          <div className="space-y-6">
            <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">
              Reserved for Our Community
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-sm">Stay Connected to Home</h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto font-light leading-relaxed">
              Receive early access to new arrivals, limited releases, and curated collections — reserved for our community.
            </p>
          </div>

          <form className="max-w-md mx-auto relative group">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-16 bg-white/5 border border-white/20 rounded-full px-8 text-white placeholder:text-white/30 focus:outline-none focus:border-[#D99C3B] transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-[#D99C3B] hover:bg-[#D99C3B]/90 text-white font-bold px-8 rounded-full text-[10px] uppercase tracking-widest transition-all">
              Join the Family
            </button>
            <p className="mt-6 text-[10px] text-white/20 font-medium uppercase tracking-[0.2em]">
              We respect your privacy—only rare, curated updates.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
