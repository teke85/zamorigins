"use client";

import Link from "next/link";
import { Mail, ShieldCheck, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="min-h-[90vh] bg-[#FDFCFB] grid grid-cols-1 lg:grid-cols-2">
            {/* Illustration / Branding Side */}
            <div className="hidden lg:flex bg-secondary p-20 xl:p-32 flex-col justify-between text-white relative h-full">
                <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                <div className="relative z-10 space-y-6">
                    <Link href="/" className="text-3xl font-serif font-bold text-white tracking-tight">
                        Zam<span className="text-primary italic">Origins</span>
                    </Link>
                    <h2 className="text-5xl xl:text-7xl font-serif font-bold leading-tight">Authentic <br /> connection <br /> to the <span className="text-primary italic">Soul.</span></h2>
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
                        <h1 className="text-4xl font-serif font-bold text-secondary">Welcome back.</h1>
                        <p className="text-muted-foreground text-lg">Continue your harvest journey.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-4">
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
                                    placeholder="Password"
                                    className="w-full h-16 bg-muted/20 border-none rounded-2xl pl-16 pr-6 text-sm focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-2">
                            <div className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded border group-hover:border-primary transition-all" />
                                Remember me
                            </div>
                            <Link href="/authentication/reset-password" title="Recover your artisanal access" className="hover:text-primary transition-colors">Forgot password?</Link>
                        </div>

                        <Button className="w-full h-16 rounded-full text-base font-bold uppercase tracking-widest shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02]">
                            Enter Boutique
                        </Button>
                    </form>

                    <div className="text-center space-y-8 pt-8 border-t border-muted">
                        <p className="text-sm text-muted-foreground">New to ZamOrigins heritage? <Link href="/authentication/register" className="text-primary font-bold hover:underline">Create an account</Link></p>

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
