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
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Sidebar */}
            <aside className="w-64 bg-card border-r flex flex-col shrink-0 hidden md:flex">
                <div className="h-20 flex items-center px-6 border-b border-secondary/5 shrink-0 bg-white">
                    <Link href="/" className="text-xl font-serif font-bold text-secondary tracking-tight">
                        Zam<span className="text-primary italic">Origins</span> <span className="text-[10px] ml-1 uppercase tracking-widest text-[#D99C3B]">Admin</span>
                    </Link>
                </div>
                <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
                    {nav.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-secondary/5 hover:text-primary transition-all text-secondary/40"
                            >
                                <Icon className="w-4 h-4" />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
                <div className="p-4 border-t shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">AD</div>
                        <div className="text-sm">
                            <p className="font-bold text-secondary">Admin User</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">admin@zamorigins.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Container */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-20 flex items-center justify-between px-6 border-b border-secondary/5 bg-white shrink-0">
                    <div className="text-sm font-bold uppercase tracking-widest text-secondary md:hidden">Admin Panel</div>
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
