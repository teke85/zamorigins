"use client";

import Link from "next/link";
import { Mail, Star, Users, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubscriptionPage() {
    return (
        <div className="bg-background min-h-screen flex flex-col items-center">

            {/* Editorial Content Hero */}
            <section className="container py-32 lg:py-52">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-40 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px]">
                                Exclusive • Members only • UK Delivery
                            </span>
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-secondary leading-[0.9] tracking-tighter">
                                The Taste of <br /> <span className="text-primary italic">Home</span> Box.
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            The ultimate curated collection for the Zambian diaspora and organic food enthusiasts in the UK. Hand-selected staples, seasonal treats, and authentic flavors delivered to your door every month.
                        </p>

                        <div className="space-y-8 pt-6">
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white shadow-xl">
                                    <Star className="w-6 h-6 text-primary fill-current" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-secondary">Artisanal Selection</h4>
                                    <p className="text-sm text-muted-foreground">Rare specialties not found anywhere else in the UK.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white shadow-xl">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-secondary">Direct Impact</h4>
                                    <p className="text-sm text-muted-foreground">Every box directly supports 5+ Zambian farming families.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Membership CTA Section */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-secondary rounded-[100px] -rotate-3 transition-transform group-hover:rotate-0 duration-700 shadow-2xl" />
                        <div className="relative bg-white p-12 lg:p-20 rounded-[100px] border shadow-2xl space-y-12 text-center lg:text-left">
                            <div className="space-y-2">
                                <h3 className="text-3xl font-serif font-bold text-secondary">Join the Waitlist</h3>
                                <p className="text-muted-foreground italic font-serif">Arriving Spring 2026. Limited to 500 initial slots.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full h-18 bg-muted border-none rounded-full pl-16 pr-6 text-sm focus:ring-2 focus:ring-primary shadow-inner"
                                    />
                                </div>
                                <Button className="w-full h-18 rounded-full text-base font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
                                    Secure Early Access
                                </Button>
                            </form>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-10 border-t border-muted">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(idx => (
                                        <div key={idx} className="w-10 h-10 rounded-full border-2 border-white bg-muted shadow-sm flex items-center justify-center font-bold text-[8px] uppercase tracking-tighter">Sarah</div>
                                    ))}
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">
                                    Joined by <span className="text-primary">1,248</span> others
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Sub-section */}
            <section className="bg-secondary w-full py-32 rounded-t-[100px] text-white">
                <div className="container overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
                        {[
                            { title: "Sustainably Packed", icon: ShieldCheck, desc: "Eco-friendly, biodegradable packaging from Zambia." },
                            { title: "Flavor First", icon: Heart, desc: "Hand-tasted and vetted by our culinary heritage board." },
                            { title: "Direct Track", icon: ArrowRight, desc: "Full traceability from farm gate to your kitchen." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-6 text-center md:text-left">
                                <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-primary border border-white/5">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-white uppercase tracking-wider">{item.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
