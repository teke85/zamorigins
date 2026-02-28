import Link from "next/link";
import { formatGBP } from "@/lib/utils";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40 text-sm">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-xl text-primary">ZamOrigins<span className="text-secondary">.</span></span>
                        </Link>
                        <p className="text-muted-foreground pr-4">
                            Premium dry foods sourced directly from Zambian farmers, delivered to your door in the UK.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Shop</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="/shop?category=grains" className="hover:text-primary transition-colors">Grains & Beans</Link></li>
                            <li><Link href="/shop?category=spices" className="hover:text-primary transition-colors">Spices & Seasonings</Link></li>
                            <li><Link href="/subscription" className="hover:text-primary transition-colors">Taste of Home Box</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Support</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/track" className="hover:text-primary transition-colors">Track Your Order</Link></li>
                            <li><Link href="/legal/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                            <li><Link href="/legal/customs" className="hover:text-primary transition-colors">Customs & Duties</Link></li>
                            <li><Link href="/legal/refunds" className="hover:text-primary transition-colors">Refunds & Returns</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold">Legal</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/legal/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="/legal/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
                    <p className="text-muted-foreground">
                        &copy; {new Date().getFullYear()} ZamOrigins. All rights reserved.
                    </p>
                    <div className="mt-4 flex space-x-4 md:mt-0 text-muted-foreground">
                        <span>Prices shown in {formatGBP(0).replace('0.00', '').trim()}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
