"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Truck, Star, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const featured = [
    { name: "Premium Sorghum (Mabele)", price: "£4.99", category: "Grains & Beans", tag: "Organic" },
    { name: "Dried Pumpkin Leaves", price: "£3.99", category: "Dried Vegetables", tag: "Best Seller" },
    { name: "Authentic Groundnuts", price: "£6.50", category: "Snacks", tag: "Fresh" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      {/* Magazine Hero Section */}
      <section className="relative h-[90vh] flex items-center pt-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch h-full">
          {/* Hero Content */}
          <div className="flex flex-col justify-center space-y-8 pr-0 lg:pr-20 z-10 px-4 lg:px-0">
            <div className="space-y-4">
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
                Authentic Heritage • Natural Quality
              </span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] text-secondary">
                Taste the <br />
                <span className="text-primary italic">Soul</span> of <br />
                Zambia.
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Experience the finest organic dry foods, sustainably grown and ethically sourced directly from the heart of Zambia. Premium quality, delivered to your UK doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="h-14 px-10 rounded-full text-base font-bold uppercase tracking-widest shadow-xl hover:shadow-primary/20 transition-all" asChild>
                <Link href="/shop">Shop Collection</Link>
              </Button>
              <Button variant="ghost" size="lg" className="h-14 px-10 rounded-full text-base font-bold uppercase tracking-widest hover:text-primary" asChild>
                <Link href="/subscription">The Monthly Box</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block rounded-l-[100px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
            <div className="w-full h-full bg-muted flex items-center justify-center relative group">
              {/* This would be a high-quality product image */}
              <div className="text-secondary/20 text-4xl font-serif italic select-none group-hover:scale-105 transition-transform duration-700">
                Premium Harvest Photography
              </div>
              <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur p-6 rounded-2xl border flex items-center gap-4 animate-in slide-in-from-bottom-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-muted-foreground tracking-tighter">Certified</p>
                  <p className="font-serif font-bold text-secondary">100% Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">The Essentials</h2>
              <p className="text-muted-foreground max-w-lg text-lg">Our most requested authentic Zambian staples, harvested with care.</p>
            </div>
            <Link href="/shop" className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
              View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map((p, i) => (
              <div key={i} className="group relative perspective-1000">
                <div className="aspect-[4/5] bg-background rounded-3xl overflow-hidden mb-6 relative border transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary shadow-sm">
                      {p.tag}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-white">
                    <Heart className="w-4 h-4" />
                  </button>
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground font-serif text-xl scale-10 transition-transform group-hover:scale-110 duration-700">
                    Image
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 w-full px-6">
                    <Button className="w-full h-12 rounded-full font-bold uppercase tracking-widest text-xs">
                      Quick Add
                    </Button>
                  </div>
                </div>
                <div className="text-center space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">{p.category}</p>
                  <h3 className="text-xl font-serif font-bold text-secondary">{p.name}</h3>
                  <p className="text-lg font-bold text-primary">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-10" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                From the Earth <br /> to your <span className="text-primary italic">Kitchen.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4 p-6 bg-white/5 rounded-2xl backdrop-blur">
                  <Leaf className="w-8 h-8 text-primary" />
                  <h4 className="font-bold text-xl uppercase tracking-wider">Organic First</h4>
                  <p className="text-sm text-white/60 leading-relaxed">No preservatives, no additives. Just raw, natural Zambian ingredients as nature intended.</p>
                </div>
                <div className="space-y-4 p-6 bg-white/5 rounded-2xl backdrop-blur">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                  <h4 className="font-bold text-xl uppercase tracking-wider">Ethical Sourcing</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Working directly with local farming cooperatives to ensure fair trade and community support.</p>
                </div>
              </div>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-secondary rounded-full px-10 h-14 font-bold uppercase tracking-widest text-xs">
                Our Story
              </Button>
            </div>
            <div className="aspect-square bg-white/5 rounded-[100px] flex items-center justify-center p-20 relative">
              <div className="w-full h-full bg-white/10 rounded-full flex items-center justify-center text-4xl font-serif italic text-white/20 select-none">
                Heritage Story Visual
              </div>
              <div className="absolute -bottom-4 right-10 bg-primary p-8 rounded-full shadow-2xl rotate-12">
                <p className="text-white font-serif font-bold text-2xl">EST. 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-background">
        <div className="container max-w-4xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Join the Harvest</h2>
            <p className="text-muted-foreground text-lg">Subscribe to get notified about new arrivals, recipes, and seasonal specials.</p>
          </div>
          <form className="relative max-w-2xl mx-auto group">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-20 bg-white border-2 border-muted rounded-full px-10 text-lg transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 shadow-sm"
            />
            <button className="absolute right-3 top-3 bottom-3 bg-secondary text-white font-bold px-10 rounded-full hover:bg-primary transition-all uppercase tracking-widest text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
