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
                <div className="bg-muted/30 border rounded-2xl p-6 hidden md:block sticky top-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                            JD
                        </div>
                        <div>
                            <h3 className="font-bold">John Doe</h3>
                            <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <Link
                                    key={tab.name}
                                    href={tab.href}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted hover:text-foreground transition-colors text-muted-foreground"
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="mt-8 pt-8 border-t">
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
                            className="px-4 py-2 border rounded-full text-sm font-medium whitespace-nowrap bg-muted/30"
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
