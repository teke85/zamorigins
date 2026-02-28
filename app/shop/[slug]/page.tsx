"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Heart, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(0);

    // Mock product
    const product = {
        name: "Premium Sorghum (Mabele)",
        price: 4.99,
        category: "Grains & Beans",
        description: "Sourced directly from farmers in Zambia, our premium Sorghum is a nutritious, gluten-free grain perfect for porridge (bota) or grinding into meal. It is naturally drought-resistant and completely authentic.",
        stock: 42,
        variants: [
            { name: "500g", price: 4.99, weight: 0.5 },
            { name: "1kg", price: 8.99, weight: 1.0 },
            { name: "5kg", price: 39.99, weight: 5.0 },
        ]
    };

    const handleAddToCart = () => {
        // Simulated add to cart action for v1
        alert(`Added ${quantity}x ${product.variants[selectedVariant].name} of ${product.name} to cart.`);
    };

    return (
        <div className="container py-10 md:py-16">
            <div className="mb-6 flex items-center text-sm text-muted-foreground whitespace-nowrap overflow-x-auto">
                <Link href="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="w-4 h-4 mx-1" />
                <Link href="/shop" className="hover:text-primary">Shop</Link>
                <ChevronRight className="w-4 h-4 mx-1" />
                <Link href={`/shop?category=${product.category.toLowerCase()}`} className="hover:text-primary">{product.category}</Link>
                <ChevronRight className="w-4 h-4 mx-1 shrink-0" />
                <span className="text-foreground truncate">{product.name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                {/* Product Images Placeholder */}
                <div className="flex flex-col gap-4">
                    <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center relative overflow-hidden border">
                        <span className="text-muted-foreground text-xl font-medium font-serif">Main Image</span>
                        <div className="absolute top-4 left-4">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                Best Seller
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`aspect-square rounded-lg border flex items-center justify-center cursor-pointer ${i === 1 ? 'ring-2 ring-primary ring-offset-2' : ''} bg-muted`}>
                                <span className="text-xs text-muted-foreground">Thumb {i}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col">
                    <h1 className="text-3xl sm:text-4xl font-bold">{product.name}</h1>

                    <div className="mt-4 flex items-center gap-4">
                        <span className="text-2xl font-bold text-primary">
                            {formatGBP(product.variants[selectedVariant].price)}
                        </span>
                        <span className="text-sm font-medium px-2 py-1 rounded bg-green-100 text-green-800">
                            In Stock
                        </span>
                    </div>

                    <p className="mt-6 text-muted-foreground leading-relaxed">
                        {product.description}
                    </p>

                    <div className="mt-8 border-t pt-8">
                        <h3 className="font-medium mb-3">Size Variant</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((v, i) => (
                                <button
                                    key={i}
                                    className={`border rounded-md px-4 py-2 text-sm font-medium transition-colors ${selectedVariant === i ? 'border-primary bg-primary/5 text-primary' : 'hover:border-primary/50 text-muted-foreground hover:text-foreground'}`}
                                    onClick={() => setSelectedVariant(i)}
                                >
                                    {v.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center border rounded-md h-12 w-32 shrink-0">
                            <button
                                className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-l-md"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <div className="flex-1 flex items-center justify-center font-medium">
                                {quantity}
                            </div>
                            <button
                                className="w-10 h-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-r-md"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        <Button size="lg" className="flex-1 h-12 text-base font-semibold" onClick={handleAddToCart}>
                            <ShoppingBag className="w-5 h-5 mr-2" />
                            Add to Cart
                        </Button>

                        <Button size="lg" variant="outline" className="h-12 w-12 p-0 shrink-0">
                            <Heart className="w-5 h-5 text-muted-foreground" />
                        </Button>
                    </div>

                    <div className="mt-10 bg-muted/50 rounded-xl p-4 flex gap-4 items-start">
                        <Truck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                        <div>
                            <h4 className="font-semibold text-sm">Estimated UK Delivery</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                                Order within 2 hours to get it by <span className="font-medium text-foreground">Thursday, Mar 2</span>.
                                Shipping calculated at checkout based on total weight.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description Tabs Placeholder */}
            <div className="mt-20 border-t pt-10">
                <div className="flex gap-8 border-b pb-4">
                    <button className="text-lg font-bold border-b-2 border-primary pb-4 -mb-[18px]">Description</button>
                    <button className="text-lg font-medium text-muted-foreground hover:text-foreground pb-4 -mb-[18px]">Shipping Information</button>
                    <button className="text-lg font-medium text-muted-foreground hover:text-foreground pb-4 -mb-[18px]">Reviews (0)</button>
                </div>
                <div className="py-8 prose prose-slate max-w-none text-muted-foreground">
                    <p>This is a detailed description of the product. Our {product.name} is carefully processed and packed in Zambia before being shipped to our UK warehouse. We ensure that no artificial preservatives are added, maintaining its 100% natural, healthy profile.</p>
                    <p>By purchasing this product, you are directly supporting local farmers in Zambia and experiencing the true taste of home.</p>
                </div>
            </div>
        </div>
    );
}
