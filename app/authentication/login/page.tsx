"use client";

import Link from "next/link";
import Image from "next/image"; // Added Image import
import { Mail, ShieldCheck, Lock, CheckCircle, ArrowRight } from "lucide-react"; // Added ArrowRight import
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-[#FCFAF8] grid grid-cols-1 lg:grid-cols-2">
            {/* Cinematic Branding Side */}
            <div className="hidden lg:flex relative h-full overflow-hidden">
                <Image
                    src="https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439489/hero%20image.png"
                    alt="ZamOrigins Heritage"
                    fill
                    className="object-cover brightness-75 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 to-transparent z-10" />

                <div className="relative z-20 p-20 xl:p-32 flex flex-col justify-between h-full text-white">
                    <div className="space-y-12">
                        <Link href="/" className="text-3xl font-serif font-bold tracking-tight">
                            Zam<span className="italic text-[#D99C3B]">Origins</span>
                        </Link>
                        <h2 className="text-6xl xl:text-8xl font-serif font-bold leading-[1.1]">
                            Authentic <br />
                            Connection <br />
                            to the <span className="italic text-[#D99C3B]">Soul.</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-3">
                            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#D99C3B]/60" />)}
                        </div>
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] leading-relaxed max-w-xs">
                            Secured by ZamOrigins Heritage Encryption. Part of the boutique farming network.
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Side - Refined & Minimal */}
            <div className="flex items-center justify-center p-8 lg:p-24 py-24 bg-[#FCFAF8]">
                <div className="max-w-md w-full space-y-16 animate-in fade-in slide-in-from-right-8 duration-1000">
                    <div className="space-y-6 text-center lg:text-left">
                        <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">Registry</span>
                        <h1 className="text-5xl font-serif font-bold text-secondary">Welcome Back</h1>
                        <p className="text-secondary/40 text-lg font-light leading-relaxed">Continue your curated harvest journey.</p>
                    </div>

                    <form className="space-y-10">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-[#D99C3B] transition-all" />
                                    <input
                                        type="email"
                                        placeholder="email@address.com"
                                        className="w-full h-16 bg-white border border-secondary/5 rounded-full pl-16 pr-8 text-sm focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20 transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1">Password</label>
                                <div className="relative group">
                                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/20 group-focus-within:text-[#D99C3B] transition-all" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full h-16 bg-white border border-secondary/5 rounded-full pl-16 pr-8 text-sm focus:ring-1 focus:ring-[#D99C3B] outline-none text-secondary placeholder:text-secondary/20 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-secondary/40 px-6">
                            <div className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-4 h-4 rounded-full border border-secondary/10 group-hover:border-[#D99C3B] transition-all flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D99C3B] opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                                Remember Me
                            </div>
                            <Link href="/authentication/reset-password" title="Recover your artisanal access" className="hover:text-[#D99C3B] transition-colors decoration-[#D99C3B]/20 underline underline-offset-8">Forgot password?</Link>
                        </div>

                        <Button className="w-full h-16 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl bg-secondary hover:bg-secondary/90 text-white border-none group transition-all">
                            Enter Boutique <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>

                    <div className="text-center space-y-12 pt-12 border-t border-secondary/5">
                        <p className="text-xs text-secondary/40 font-medium">New to ZamOrigins? <Link href="/authentication/register" className="text-[#D99C3B] font-bold hover:underline underline-offset-8">Create an account</Link></p>

                        <div className="flex justify-center gap-12">
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-12 h-12 border border-[#D99C3B]/10 rounded-full flex items-center justify-center group-hover:bg-[#D99C3B]/5 transition-all">
                                    <ShieldCheck className="w-5 h-5 text-[#D99C3B]" />
                                </div>
                                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-secondary/30">Verified</span>
                            </div>
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-12 h-12 border border-[#D99C3B]/10 rounded-full flex items-center justify-center group-hover:bg-[#D99C3B]/5 transition-all">
                                    <CheckCircle className="w-5 h-5 text-[#D99C3B]" />
                                </div>
                                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-secondary/30">Authentic Heritage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
