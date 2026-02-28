"use client";

import Link from "next/link";
import { Mail, ShieldCheck, Lock, User, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    return (
        <div className="min-h-[90vh] bg-[#FDFCFB] grid grid-cols-1 lg:grid-cols-2">
            {/* Illustration / Branding Side */}
            <div className="hidden lg:flex bg-secondary p-20 xl:p-32 flex-col justify-between text-white relative h-full">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                <div className="relative z-10 space-y-6">
                    <Link href="/" className="text-3xl font-serif font-bold text-white tracking-tight">
                        Zam<span className="text-primary italic">Origins</span>
                    </Link>
                    <h2 className="text-5xl xl:text-7xl font-serif font-bold leading-tight">Join the <br /> <span className="text-primary italic">Harvest</span> <br /> community.</h2>
                </div>

                <div className="relative z-10 space-y-8">
                    <div className="flex gap-4">
                        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />)}
                    </div>
                    <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] leading-relaxed max-w-xs">
                        Secured by ZamOrigins Heritage Encryption Standards. Part of the boutique farming network.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div className="flex items-center justify-center p-8 lg:p-20 py-24">
                <div className="max-w-md w-full space-y-12">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-serif font-bold text-secondary">Create Account.</h1>
                        <p className="text-muted-foreground text-lg">Start your artisanal journey today.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            <div className="relative group">
                                <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-all" />
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full h-16 bg-muted/20 border-none rounded-2xl pl-16 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-all" />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full h-16 bg-muted/20 border-none rounded-2xl pl-16 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-all" />
                                <input
                                    type="password"
                                    placeholder="Create Password"
                                    className="w-full h-16 bg-muted/20 border-none rounded-2xl pl-16 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                        </div>

                        <Button className="w-full h-16 rounded-full text-base font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
                            Join the Boutique
                        </Button>
                    </form>

                    <div className="text-center space-y-8 pt-8 border-t border-muted">
                        <p className="text-sm text-muted-foreground">Already have an account? <Link href="/authentication/login" className="text-primary font-bold hover:underline">Log in</Link></p>

                        <div className="flex justify-center gap-8">
                            <div className="flex flex-col items-center gap-2 group cursor-wait">
                                <ShieldCheck className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Verified</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 group cursor-wait">
                                <CheckCircle className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground">Authentic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
