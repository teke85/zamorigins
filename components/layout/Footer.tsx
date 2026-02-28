import Link from "next/link";
import { formatGBP } from "@/lib/utils";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-secondary text-white/80 pt-20 pb-10 border-t border-white/5">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                <div className="space-y-6">
                    <Link href="/" className="text-2xl font-serif font-bold text-white tracking-tight">
                        Zam<span className="text-primary italic">Origins</span>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs text-white/60">
                        Dedicated to bringing the most authentic and premium Zambian organic dry foods directly to your kitchen in the UK. Direct, ethical, and superior quality.
                    </p>
                    <div className="flex gap-4 items-center">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-serif font-bold text-white mb-6">Explore</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link href="/shop" className="hover:text-primary transition-colors">Shop All Products</Link></li>
                        <li><Link href="/shop?category=grains" className="hover:text-primary transition-colors">Grains & Beans</Link></li>
                        <li><Link href="/shop?category=spices" className="hover:text-primary transition-colors">Spices & Seasonings</Link></li>
                        <li><Link href="/subscription" className="hover:text-primary transition-colors">Taste of Home Box</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif font-bold text-white mb-6">Customer Care</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link href="/legal/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                        <li><Link href="/legal/refunds" className="hover:text-primary transition-colors">Refund Policy</Link></li>
                        <li><Link href="/track" className="hover:text-primary transition-colors">Track Order</Link></li>
                        <li><Link href="/legal/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-serif font-bold text-white mb-6">Newsletter</h4>
                    <p className="text-sm text-white/60 mb-6">Join our community for exclusive recipes and stock updates.</p>
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full"
                        />
                        <button className="bg-primary text-white font-bold px-6 py-3 rounded-r-lg hover:bg-primary/90 transition-colors uppercase text-xs tracking-widest">
                            Join
                        </button>
                    </form>
                </div>
            </div>

            <div className="container mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-4">
                <p className="text-xs tracking-widest uppercase font-medium text-white/40">
                    © {currentYear} ZamOrigins. All Rights Reserved.
                </p>
                <div className="flex gap-6 text-[10px] tracking-widest uppercase font-bold text-white/60">
                    <span>Currency: GBP (£)</span>
                    <span>Payment: Secured by ZamOrigins</span>
                </div>
            </div>
        </footer>
    );
}
