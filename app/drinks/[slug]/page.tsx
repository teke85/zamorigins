"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, ShoppingBag, Heart, Truck, Star, Info,
  ChevronRight, Check, Box, Globe, Share2, Package, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { getDrinkBySlug, getRelatedDrinks, DrinkVariant } from "@/lib/drinks-data";
import { notFound } from "next/navigation";

export default function DrinkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const drink = getDrinkBySlug(slug);

  if (!drink) notFound();

  const related = getRelatedDrinks(drink, 4);
  const [selectedVariant, setSelectedVariant] = useState<DrinkVariant>(drink.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const { addToCart } = useCart();

  const inStock = selectedVariant.stockCount > 0;

  const handleAddToCart = () => {
    addToCart({
      id: `${drink.id}-${selectedVariant.id}`,
      name: drink.name,
      price: selectedVariant.price,
      compareAtPrice: selectedVariant.compareAtPrice,
      image: drink.primaryImage,
      variant: selectedVariant.name,
      category: drink.category,
    }, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: drink.name, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="bg-[#FCFAF8] min-h-screen font-sans">
      <div className="h-28 md:h-32" />

      {/* Breadcrumb */}
      <nav className="container mb-8">
        <div className="flex items-center gap-2 text-xs font-medium text-secondary/40">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/drinks" className="hover:text-primary transition-colors">Drinks</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-secondary/80 truncate max-w-[200px]">{drink.name}</span>
        </div>
      </nav>

      <main className="container max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

          {/* ── LEFT: Image Gallery ── */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-secondary/5 shadow-sm relative group">
              <Image
                src={drink.images[selectedImage]?.url || drink.primaryImage}
                alt={drink.images[selectedImage]?.alt || drink.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                unoptimized
              />
              {drink.isFeatured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-sm border border-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Featured
                  </span>
                </div>
              )}
              {!inStock && (
                <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center">
                  <span className="bg-white text-secondary font-bold uppercase tracking-widest px-6 py-3 rounded-full text-xs shadow-xl">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {drink.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {drink.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === idx
                        ? "border-primary ring-4 ring-primary/10"
                        : "border-transparent hover:border-secondary/20"
                    }`}
                  >
                    <Image src={img.url} alt={img.alt} width={120} height={120} className="w-full h-full object-cover" unoptimized />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Details ── */}
          <div className="lg:col-span-5 space-y-8">
            {/* Brand + Name */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B]">{drink.brand}</p>
                <button onClick={handleShare} className="p-2 text-secondary/40 hover:text-primary transition-colors" aria-label="Share">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-[1.1]">{drink.name}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary/5 text-secondary/60 rounded-full">
                  {drink.category}
                </span>
                {drink.subCategory && (
                  <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary/5 text-secondary/60 rounded-full">
                    {drink.subCategory}
                  </span>
                )}
                <span className={`flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  inStock ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"
                }`}>
                  {inStock ? <><Check className="w-3 h-3" /> In Stock</> : <><AlertCircle className="w-3 h-3" /> Out of Stock</>}
                </span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-4 p-6 bg-white rounded-2xl border border-secondary/5 shadow-sm">
              {selectedVariant.compareAtPrice && (
                <span className="text-lg text-secondary/30 line-through">{formatGBP(selectedVariant.compareAtPrice)}</span>
              )}
              <span className="text-4xl font-bold text-secondary">{formatGBP(selectedVariant.price)}</span>
              {selectedVariant.compareAtPrice && (
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Save {formatGBP(selectedVariant.compareAtPrice - selectedVariant.price)}
                </span>
              )}
            </div>

            {/* Variant Selector */}
            {drink.variants.length > 1 && (
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-secondary">Size / Volume</p>
                <div className="flex gap-2 flex-wrap">
                  {drink.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => { setSelectedVariant(v); setQuantity(1); }}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                        selectedVariant.id === v.id
                          ? "bg-secondary text-white border-secondary shadow-lg"
                          : "bg-white text-secondary/60 border-secondary/10 hover:border-secondary/40"
                      } ${v.stockCount === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                      disabled={v.stockCount === 0}
                    >
                      {v.name} {v.stockCount === 0 && "· OOS"}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Short Description */}
            <p className="text-secondary/70 leading-relaxed text-sm italic border-l-2 border-[#D99C3B] pl-4">
              {drink.shortDescription}
            </p>

            {/* Quantity + Actions */}
            {inStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {/* Qty Stepper */}
                  <div className="flex items-center bg-white border border-secondary/10 rounded-xl h-14 px-2 shadow-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      className="w-10 h-10 flex items-center justify-center text-lg hover:text-primary transition-colors disabled:opacity-30"
                    >−</button>
                    <span className="w-10 text-center font-bold text-secondary">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(selectedVariant.stockCount, quantity + 1))}
                      disabled={quantity >= selectedVariant.stockCount}
                      className="w-10 h-10 flex items-center justify-center text-lg hover:text-primary transition-colors disabled:opacity-30"
                    >+</button>
                  </div>

                  {/* Add to Cart */}
                  <Button
                    onClick={handleAddToCart}
                    className={`flex-1 h-14 font-bold uppercase tracking-widest text-[10px] rounded-xl shadow-lg gap-2 transition-all ${
                      addedToCart
                        ? "bg-emerald-600 hover:bg-emerald-600 text-white"
                        : "bg-primary hover:bg-primary/90 text-white shadow-primary/10"
                    }`}
                  >
                    {addedToCart ? <><Check className="w-4 h-4" /> Added!</> : <><ShoppingBag className="w-4 h-4" /> Add to Cart</>}
                  </Button>

                  {/* Wishlist */}
                  <button
                    className="h-14 w-14 flex items-center justify-center border border-secondary/10 rounded-xl hover:bg-white hover:border-primary hover:text-primary transition-all shadow-sm shrink-0"
                    aria-label="Save to wishlist"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                <Link
                  href="/cart"
                  className="block text-center text-xs font-bold uppercase tracking-widest text-secondary/40 hover:text-primary transition-colors py-2"
                >
                  View Cart &amp; Checkout →
                </Link>
              </div>
            )}

            {/* Full Description */}
            <div className="space-y-3 pt-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#D99C3B]" /> About this Product
              </h4>
              <p className="text-sm text-secondary/70 leading-relaxed">{drink.description}</p>
            </div>

            {/* Specs Table */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Product Details</h4>
              <div className="bg-white rounded-2xl border border-secondary/5 overflow-hidden shadow-sm">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-secondary/5">
                    {[
                      { label: "Brand", value: drink.brand, icon: Package },
                      { label: "Origin", value: drink.origin, icon: Globe },
                      { label: "Volume", value: selectedVariant.name, icon: Box },
                      { label: "Packaging", value: drink.packaging || "—", icon: Package },
                      { label: "SKU", value: selectedVariant.sku || "—", icon: Info },
                      { label: "Category", value: drink.category, icon: ChevronRight },
                    ].map((item, i) => (
                      <tr key={i}>
                        <td className="px-5 py-3.5 font-bold text-secondary/40 uppercase tracking-widest w-1/3 border-r border-secondary/5 bg-secondary/[0.02]">
                          {item.label}
                        </td>
                        <td className="px-5 py-3.5 text-secondary font-medium">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Shipping Block */}
            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-0.5">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">International Delivery</p>
                <p className="text-[11px] text-secondary/60 leading-snug">
                  UK delivery 3–5 business days · Europe 5–8 days · North America 7–14 days. Tracked &amp; insured.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Related Drinks ── */}
        {related.length > 0 && (
          <div className="mt-32 space-y-10">
            <div className="flex items-center justify-between border-b border-secondary/10 pb-6">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B]">You May Also Like</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">More Drinks</h2>
              </div>
              <Link href="/drinks" className="text-xs font-bold uppercase tracking-widest text-primary hover:opacity-70 transition-all border-b-2 border-primary/20 pb-1 flex items-center gap-1">
                View All <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((r) => (
                <Link key={r.id} href={`/drinks/${r.slug}`} className="group">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-secondary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl relative">
                    <Image src={r.primaryImage} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                  </div>
                  <div className="mt-4 space-y-1 text-center">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#D99C3B]">{r.brand}</p>
                    <h3 className="text-sm font-serif font-bold text-secondary group-hover:text-primary transition-colors line-clamp-1">{r.name}</h3>
                    <p className="text-sm font-bold text-primary">{formatGBP(r.variants[0].price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
