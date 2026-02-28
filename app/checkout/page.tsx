"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
    return (
        <div className="bg-background min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* Left: Contact & Shipping Form */}
                <div className="p-10 lg:p-32 flex flex-col justify-center">
                    <div className="max-w-xl mx-auto w-full space-y-16">
                        <div className="space-y-6">
                            <Link href="/cart" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Return to Bag
                            </Link>
                            <h1 className="text-5xl font-serif font-bold text-secondary">Checkout</h1>
                        </div>

                        <div className="space-y-12">
                            {/* Contact Info */}
                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary pb-4 border-b">1. Contact Information</h3>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="Email address for notifications"
                                        className="w-full h-16 bg-muted/20 border-none rounded-2xl pl-16 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>
                            </div>

                            {/* Shipping Address */}
                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary pb-4 border-b">2. Shipping Address</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <input placeholder="First name" className="col-span-1 h-16 bg-muted/20 border-none rounded-2xl px-6 text-sm focus:ring-1 focus:ring-primary" />
                                    <input placeholder="Last name" className="col-span-1 h-16 bg-muted/20 border-none rounded-2xl px-6 text-sm focus:ring-1 focus:ring-primary" />
                                    <input placeholder="Address line 1" className="col-span-2 h-16 bg-muted/20 border-none rounded-2xl px-6 text-sm focus:ring-1 focus:ring-primary" />
                                    <input placeholder="City" className="col-span-1 h-16 bg-muted/20 border-none rounded-2xl px-6 text-sm focus:ring-1 focus:ring-primary" />
                                    <input placeholder="Postcode" className="col-span-1 h-16 bg-muted/20 border-none rounded-2xl px-6 text-sm focus:ring-1 focus:ring-primary" />
                                </div>
                            </div>

                            {/* Payment Mockup */}
                            <div className="space-y-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary pb-4 border-b">3. Payment Method</h3>
                                <div className="p-8 border-2 border-primary/20 bg-primary/5 rounded-3xl flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <CreditCard className="w-8 h-8 text-primary" />
                                        <div>
                                            <p className="font-serif font-bold text-secondary tracking-tight">Deferred Payment for V1</p>
                                            <p className="text-xs text-muted-foreground">Functional processing arrives in V2</p>
                                        </div>
                                    </div>
                                    <Lock className="w-5 h-5 text-primary/40" />
                                </div>
                            </div>

                            <Button className="w-full h-16 rounded-full text-base font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]" asChild>
                                <Link href="/checkout/success">Deliver my Harvest</Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right: Order Summary Backdrop */}
                <div className="hidden lg:flex bg-secondary p-20 xl:p-32 flex-col justify-center text-white relative h-full">
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
                    <div className="max-w-md mx-auto w-full space-y-16 relative z-10">
                        <h3 className="text-3xl font-serif font-bold pb-10 border-b border-white/10 uppercase tracking-widest">Selected Collection</h3>

                        <div className="space-y-8 max-h-[40vh] overflow-y-auto pr-4 custom-scrollbar">
                            {[1, 2].map(i => (
                                <div key={i} className="flex justify-between items-center group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-20 bg-white/5 rounded-2xl border border-white/10 shrink-0 flex items-center justify-center font-serif text-[10px] text-white/20 italic">Visual</div>
                                        <div>
                                            <p className="font-serif font-bold text-lg leading-snug">Premium Sorghum (Mabele)</p>
                                            <p className="text-xs text-white/40 font-bold uppercase tracking-[0.2em] mt-1">Quantity: 2 • 500G</p>
                                        </div>
                                    </div>
                                    <p className="font-bold text-primary tracking-tight">£9.98</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6 pt-10 border-t border-white/10">
                            <div className="flex justify-between items-center text-white/40 text-sm font-bold uppercase tracking-widest">
                                <span>Subtotal</span>
                                <span className="text-white">£42.50</span>
                            </div>
                            <div className="flex justify-between items-center text-white/40 text-sm font-bold uppercase tracking-widest">
                                <span>Shipping</span>
                                <span className="text-white">£5.99</span>
                            </div>
                            <div className="pt-8 flex justify-between items-end">
                                <span className="text-xl font-serif font-bold uppercase tracking-[0.3em]">Total</span>
                                <div className="text-right">
                                    <p className="text-xs text-white/40 font-bold mb-1">UK Pounds (GBP)</p>
                                    <p className="text-5xl font-bold text-primary">£48.49</p>
                                </div>
                            </div>
                        </div>

                        {/* Guarantee */}
                        <div className="pt-10 flex items-center gap-6 bg-white/5 p-8 rounded-[40px] border border-white/10">
                            <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed text-white/60">
                                Sustainably sourced and <br /> ethically harvested in Zambia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
