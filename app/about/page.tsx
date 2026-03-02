"use client";

import Link from "next/link";
import Image from "next/image";
import { Leaf, Users, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="bg-[#FCFAF8] min-h-screen text-secondary">
            {/* Cinematic Hero */}
            <section className="relative pt-48 pb-32 border-b border-secondary/5 overflow-hidden">
                <div className="container relative z-10 text-center space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                    <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">Our Origin</span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight leading-[1.1]">
                        A Bridge Between <br /> Zambia and Its Diaspora
                    </h1>
                    <p className="text-secondary/50 max-w-2xl mx-auto text-xl leading-relaxed font-light">
                        ZamOrigins was born from a simple yet powerful craving — the taste of home. Founded by Zambians living abroad, we understand the longing for authentic Zambian flavours that connect us to our roots, our families, and our memories.
                    </p>
                </div>
            </section>

            {/* Core Narrative Sections */}
            <section className="py-24 space-y-24">
                {/* Mission */}
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-flex items-center justify-center w-16 h-16 border border-[#D99C3B]/20 rounded-full mb-4">
                            <Leaf className="w-6 h-6 text-[#D99C3B]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Our Mission</h2>
                        <p className="text-secondary/60 leading-relaxed text-2xl font-light italic">
                            "We exist to ensure that no Zambian, no matter where they are in the world, should have to go without the foods that define home."
                        </p>
                        <p className="text-secondary/50 text-lg max-w-2xl mx-auto leading-relaxed">
                            From the kapenta of Lake Kariba to the mealie meal of the Copperbelt, we source directly from Zambian communities, ensuring every grain and harvest carries the soul of the land.
                        </p>
                    </div>
                </div>

                {/* Trust & Transparency Grid */}
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
                        {/* Quality */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
                            <div className="space-y-4">
                                <span className="text-[#D99C3B] font-bold uppercase tracking-[0.3em] text-[10px]">Heritage Standards</span>
                                <h3 className="text-3xl font-serif font-bold text-secondary">Quality You Can Trust</h3>
                            </div>
                            <p className="text-secondary/60 leading-relaxed text-lg font-light">
                                Every product is carefully sourced, inspected, and packaged to ensure it arrives at your doorstep tasting just as it would from a Zambian market. We work directly with small-scale farmers and fishermen, supporting local communities while delivering premium quality abroad.
                            </p>
                        </div>

                        {/* Transparency */}
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-400">
                            <div className="space-y-4">
                                <span className="text-[#D99C3B] font-bold uppercase tracking-[0.3em] text-[10px]">Direct Connection</span>
                                <h3 className="text-3xl font-serif font-bold text-secondary">Sourcing Transparency</h3>
                            </div>
                            <p className="text-secondary/60 leading-relaxed text-lg font-light">
                                We believe you deserve to know where your food comes from. Each product listing includes its province of origin in Zambia. We visit our suppliers regularly and maintain strict quality control at every step — from harvest to your kitchen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy - Text Focus */}
            <section className="py-24 bg-secondary text-white overflow-hidden relative">
                <div className="container relative z-10 text-center space-y-16">
                    <div className="space-y-6">
                        <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">Integrity</span>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight">Our Philosophy</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="p-8 space-y-4 border border-white/5 rounded-[32px] hover:bg-white/5 transition-all duration-500">
                            <Users className="mx-auto w-6 h-6 text-[#D99C3B] mb-2" />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Community</h4>
                            <p className="text-white/40 text-sm leading-relaxed">Empowering Zambian farmers and fishermen through direct, fair-trade partnerships.</p>
                        </div>
                        <div className="p-8 space-y-4 border border-white/5 rounded-[32px] hover:bg-white/5 transition-all duration-500">
                            <Globe className="mx-auto w-6 h-6 text-[#D99C3B] mb-2" />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Heritage</h4>
                            <p className="text-white/40 text-sm leading-relaxed">Preserving the culinary soul of Zambia through authentic, uncompromised sourcing.</p>
                        </div>
                        <div className="p-8 space-y-4 border border-white/5 rounded-[32px] hover:bg-white/5 transition-all duration-500">
                            <Leaf className="mx-auto w-6 h-6 text-[#D99C3B] mb-2" />
                            <h4 className="text-sm font-bold uppercase tracking-[0.2em]">Purity</h4>
                            <p className="text-white/40 text-sm leading-relaxed">Ensuring every product in our pantry is as nature and heritage intended.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-40 text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Experience Home</h2>
                    <p className="text-secondary/40 max-w-lg mx-auto font-light">Join us in celebrating the flavours that bind us together across borders.</p>
                </div>
                <Button className="h-16 px-12 rounded-full uppercase tracking-[0.4em] text-[10px] font-bold bg-secondary text-white hover:bg-secondary/90 transition-all group border-none">
                    Explore the Collection <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
            </section>
        </div>
    );
}
