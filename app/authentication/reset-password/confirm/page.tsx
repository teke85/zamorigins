"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetPasswordConfirmPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center pt-8 border-t border-secondary/10">
                    <h1 className="text-3xl font-serif font-bold text-secondary tracking-tight">Set new password</h1>
                    <p className="text-sm text-secondary/60 font-medium">
                        Your identity has been confirmed. Please set your new password below.
                    </p>
                </div>

                <div className="grid gap-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-4">
                            <div className="grid gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 pb-2" htmlFor="password">
                                    New Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="flex h-14 w-full rounded-2xl border border-secondary/10 bg-white px-6 py-1 text-sm shadow-sm focus:ring-4 focus:ring-primary/10 transition-all text-secondary"
                                    required
                                />
                            </div>
                            <div className="grid gap-1">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 pb-2" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    className="flex h-14 w-full rounded-2xl border border-secondary/10 bg-white px-6 py-1 text-sm shadow-sm focus:ring-4 focus:ring-primary/10 transition-all text-secondary"
                                    required
                                />
                            </div>

                            <Button type="submit" asChild>
                                <Link href="/authentication/login">Update Password</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
