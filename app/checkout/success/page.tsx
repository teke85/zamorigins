"use client";

import Link from "next/link";
import { Check, ArrowRight, ShoppingBag, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
    const orderNumber = "ZO-7281-AMZ";

    return (
        <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-6 lg:p-20 py-32 overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[200px] -translate-y-1/2 scale-150 pointer-events-none" />

            <div className="max-w-3xl w-full flex flex-col items-center text-center space-y-12 relative z-10">
                {/* Animated Success Marker */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-125 animate-pulse" />
                    <div className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center relative shadow-2xl transition-transform duration-700 group-hover:rotate-12">
                        <Check className="w-12 h-12 stroke-[3]" />
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-secondary leading-tight">Harvest Secured.</h1>
                    <p className="text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
                        Thank you for choosing ZamOrigins. Your order <span className="text-secondary font-bold">#{orderNumber}</span> has been successfully received by our artisans.
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    <div className="p-10 bg-white border-2 border-primary/10 rounded-[40px] shadow-sm space-y-4 hover:shadow-md transition-shadow">
                        <ShoppingBag className="w-6 h-6 text-primary mx-auto md:mx-0" />
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Standard Delivery</p>
                            <p className="text-lg font-serif font-bold text-secondary">Est. Arriving March 5th</p>
                        </div>
                    </div>
                    <div className="p-10 bg-white border-2 border-primary/10 rounded-[40px] shadow-sm space-y-4 hover:shadow-md transition-shadow">
                        <MapPin className="w-6 h-6 text-primary mx-auto md:mx-0" />
                        <div className="text-center md:text-left space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Ship To</p>
                            <p className="text-lg font-serif font-bold text-secondary">Sarah Jenkins, London</p>
                        </div>
                    </div>
                </div>

                {/* Timeline Visualization */}
                <div className="w-full space-y-10 pt-10">
                    <div className="flex justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2 z-0" />
                        <div className="absolute top-1/2 left-0 w-1/4 h-1 bg-primary -translate-y-1/2 z-0" />
                        {[
                            { label: "Ordered", done: true },
                            { label: "Processing", active: true },
                            { label: "Shipped" },
                            { label: "Delivered" },
                        ].map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                                <div className={`w-4 h-4 rounded-full border-4 border-white shadow-md ${step.done ? 'bg-primary' : step.active ? 'bg-primary animate-ping' : 'bg-muted'}`} />
                                <p className={`text-[10px] font-bold uppercase tracking-widest ${step.done || step.active ? 'text-secondary' : 'text-muted-foreground'}`}>{step.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 pt-10">
                    <Button className="h-16 px-12 rounded-full text-base font-bold uppercase tracking-widest shadow-xl shadow-primary/20 transition-all hover:scale-105" asChild>
                        <Link href="/track">Track my shipment</Link>
                    </Button>
                    <Button variant="ghost" className="h-16 px-12 rounded-full text-base font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-all" asChild>
                        <Link href="/shop">Continue Shopping <ArrowRight className="w-4 h-4" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
