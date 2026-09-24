import Link from "next/link";
import { User, Package, Heart, MapPin, Settings, LogOut } from "lucide-react";

export default function CustomerDashboardLayout({ children }: { children: React.ReactNode }) {
    const tabs = [
        { name: 'Overview', href: '/dashboard', icon: User },
        { name: 'My Orders', href: '/dashboard/orders', icon: Package },
        { name: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
        { name: 'Addresses', href: '/dashboard/addresses', icon: MapPin },
        { name: 'Account Settings', href: '/dashboard/settings', icon: Settings },
    ];

    return (
        <div className="container py-10 md:py-16 flex flex-col md:flex-row gap-10 min-h-[calc(100vh-10rem)]">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 shrink-0">
                <div className="bg-white border border-secondary/10 rounded-2xl p-6 hidden md:block sticky top-24 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                            JD
                        </div>
                        <div>
                            <h3 className="font-bold text-secondary">John Doe</h3>
                            <p className="text-xs text-secondary/40 font-bold uppercase tracking-widest">john.doe@example.com</p>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <Link
                                    key={tab.name}
                                    href={tab.href}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-bold tracking-widest uppercase hover:bg-secondary/5 hover:text-primary transition-all text-secondary/40"
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-8 pt-8 border-t border-secondary/5">
                        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-destructive/10 text-destructive w-full transition-colors">
                            <LogOut className="w-4 h-4" />
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden flex overflow-x-auto gap-2 pb-4">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className="px-4 py-2 border border-secondary/10 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap bg-white text-secondary/40 hover:text-primary transition-all"
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
