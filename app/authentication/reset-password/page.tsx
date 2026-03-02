"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetPasswordRequestPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#FCFAF8] py-24 px-8">
            <div className="mx-auto flex w-full flex-col justify-center space-y-12 sm:w-[400px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="flex flex-col space-y-6 text-center">
                    <span className="text-[#D99C3B] font-bold uppercase tracking-[0.4em] text-[10px]">Restoration</span>
                    <h1 className="text-4xl font-serif font-bold text-secondary tracking-tight">Reset Password</h1>
                    <p className="text-secondary/40 text-sm font-light leading-relaxed">
                        Enter your email address to receive a <br /> secured restoration link.
                    </p>
                </div>

                <div className="grid gap-10">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] px-1" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                className="flex h-16 w-full rounded-full border border-secondary/5 bg-white px-8 py-1 text-sm shadow-sm focus:ring-1 focus:ring-[#D99C3B] outline-none transition-all text-secondary placeholder:text-secondary/20"
                                required
                            />
                        </div>

                        <Button type="submit" className="w-full h-16 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] shadow-2xl bg-secondary hover:bg-secondary/90 text-white border-none transition-all" asChild>
                            <Link href="/authentication/reset-password/confirm">Send Restoration Link</Link>
                        </Button>
                    </form>
                </div>

                <p className="px-8 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-secondary/30">
                    Return to{" "}
                    <Link href="/authentication/login" className="text-[#D99C3B] hover:underline underline-offset-8 transition-all">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
