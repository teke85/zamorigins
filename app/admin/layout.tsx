import Link from "next/link";
import { Search, Filter, LayoutDashboard, Database, ShoppingCart, Truck, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    const nav = [
        { name: 'Overview', href: '/admin', icon: LayoutDashboard },
        { name: 'Products', href: '/admin/products', icon: Database },
        { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
        { name: 'Shipping', href: '/admin/shipping', icon: Truck },
        { name: 'Customers', href: '/admin/customers', icon: Users },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-muted/10">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r flex flex-col shrink-0 hidden md:flex">
                <div className="h-16 flex items-center px-6 border-b shrink-0">
                    <Link href="/" className="font-bold text-xl text-primary">ZamOrigins<span className="text-secondary">.</span> Admin</Link>
                </div>
                <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
                    {nav.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted hover:text-foreground transition-colors text-muted-foreground"
                            >
                                <Icon className="w-4 h-4" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
                <div className="p-4 border-t shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">AD</div>
                        <div className="text-sm">
                            <p className="font-semibold">Admin User</p>
                            <p className="text-xs text-muted-foreground">admin@zamorigins.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 flex items-center justify-between px-6 border-b bg-card shrink-0">
                    <div className="font-semibold md:hidden">Admin Panel</div>
                    <div className="flex-1 flex justify-end">
                        <Button variant="outline" size="sm">Storefront</Button>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
