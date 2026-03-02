import Link from "next/link";
import { formatGBP } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-secondary text-white pt-20 pb-10">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                <div className="space-y-6">
                    <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
                        Zam<span className="text-primary italic">Origins</span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs text-white/70 font-normal">
                        Bringing authentic Zambian sun-dried foods and organic staples directly to your doorstep with love and heritage.
                    </p>
                    <div className="flex gap-4 items-center">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <span className="text-white/60 text-xs tracking-widest uppercase">@zamorigins</span>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><Link href="/shop" className="hover:text-primary transition-colors">Shop All Products</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">Our Heritage</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
                        <li><Link href="/legal/shipping" className="hover:text-primary transition-colors">Help & FAQ</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest text-xs">Global Shipping</h4>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li className="flex items-center gap-2">🇬🇧 United Kingdom</li>
                        <li className="flex items-center gap-2">🇺🇸 United States</li>
                        <li className="flex items-center gap-2">🇨🇦 Canada</li>
                        <li className="flex items-center gap-2">🇪🇺 Europe & Rest of World</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif font-bold text-white mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
                    <p className="text-sm text-white/70 mb-6 font-normal">Join our harvest for exclusive recipes and updates from the farm.</p>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full placeholder:text-white/30 text-white"
                        />
                        <button className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity uppercase text-[10px] tracking-widest">
                            Join the Harvest
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-4">
                <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/40">
                    © {currentYear} ZamOrigins. All Rights Reserved.
                </p>
                <div className="flex gap-4 items-center">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/40">Global Express Delivery</span>
                </div>
            </div>
        </footer>
    );
}
