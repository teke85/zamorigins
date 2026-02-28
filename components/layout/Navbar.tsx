import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl tracking-tight text-primary">ZamOrigins<span className="text-secondary">.</span></span>
                    </Link>
                </div>

                <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
                    <Link href="/shop" className="transition-colors hover:text-primary">Shop</Link>
                    <Link href="/shop?category=featured" className="transition-colors hover:text-primary">Featured</Link>
                    <Link href="/subscription" className="transition-colors hover:text-primary">Taste of Home Box</Link>
                </nav>

                <div className="flex items-center justify-end space-x-4">
                    <div className="hidden sm:flex relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search products..."
                            className="h-9 w-64 rounded-md border border-input bg-transparent px-3 pl-9 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>

                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="/authentication/login">
                                <User className="h-5 w-5" />
                                <span className="sr-only">Account</span>
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" asChild className="relative">
                            <Link href="/cart">
                                <ShoppingCartIcon />
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

function ShoppingCartIcon() {
    // Mock cart items count for UI visualization
    const itemCount = 2; // For v1 UI
    return (
        <div className="relative">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
                    {itemCount}
                </span>
            )}
            <span className="sr-only">Cart</span>
        </div>
    );
}
