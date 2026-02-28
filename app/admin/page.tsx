"use client";

import Link from "next/link";
import {
    BarChart3,
    Package,
    Users,
    Settings,
    ShoppingBag,
    ArrowUpRight,
    Search,
    Bell,
    PlusCircle,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
    const stats = [
        { name: "Total Revenue", value: "£12,450.00", change: "+12.5%", trend: "up" },
        { name: "Active Orders", value: "24", change: "+3", trend: "up" },
        { name: "New Customers", value: "148", change: "+18%", trend: "up" },
        { name: "Inventory Alerts", value: "2", change: "-1", trend: "down" },
    ];

    const recentOrders = [
        { id: "ORD-7281", customer: "Sarah Jenkins", product: "Premium Sorghum", status: "Processing", total: "£14.99" },
        { id: "ORD-7280", customer: "James Mwale", product: "Wild Honey", status: "Shipped", total: "£29.50" },
        { id: "ORD-7279", customer: "Elena Rossi", product: "Groundnuts Bulk", status: "Delivered", total: "£45.00" },
    ];

    return (
        <div className="flex h-[90vh] bg-[#FDFCFB] overflow-hidden rounded-3xl m-4 border shadow-2xl">
            {/* Sidebar - High Contrast Chocolate */}
            <aside className="w-72 bg-secondary text-white flex flex-col p-8 space-y-12">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-serif font-bold text-white tracking-tight">
                        Zam<span className="text-primary italic">Admin</span>
                    </span>
                </div>

                <nav className="flex-1 space-y-3">
                    {[
                        { name: "Overview", icon: BarChart3, active: true },
                        { name: "Products", icon: Package },
                        { name: "Orders", icon: ShoppingBag },
                        { name: "Customers", icon: Users },
                        { name: "Settings", icon: Settings },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold tracking-widest uppercase transition-all ${item.active
                                    ? "bg-primary text-white shadow-lg"
                                    : "text-white/50 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </button>
                    ))}
                </nav>

                <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">A</div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest">Admin User</p>
                            <p className="text-[10px] text-white/40">Store Manager</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Sub-header / Top Bar */}
                <header className="h-20 border-b flex items-center justify-between px-10 shrink-0 bg-white/50 backdrop-blur">
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search data, orders, customers..."
                            className="w-full bg-muted/30 border-none rounded-full pl-12 pr-6 h-11 text-sm focus:ring-1 focus:ring-primary"
                        />
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Bell className="w-5 h-5 text-secondary cursor-pointer hover:text-primary transition-colors" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <Button className="rounded-full gap-2 px-6 shadow-lg shadow-primary/10 uppercase font-bold text-[10px] tracking-widest h-11">
                            <PlusCircle className="w-4 h-4" /> Add Product
                        </Button>
                    </div>
                </header>

                {/* Dashboard Grid */}
                <div className="p-10 space-y-12 max-w-7xl">
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {stats.map((s) => (
                            <div key={s.name} className="bg-white p-8 rounded-[40px] border shadow-sm space-y-4 hover:shadow-md transition-shadow">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.name}</p>
                                <div className="flex items-baseline justify-between">
                                    <h3 className="text-3xl font-serif font-bold text-secondary">{s.value}</h3>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${s.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-primary bg-primary/5'}`}>
                                        {s.change}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts / Tables Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Section */}
                        <div className="lg:col-span-2 bg-white rounded-[50px] border shadow-sm p-10 space-y-10">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-serif font-bold text-secondary">Recent Orders</h3>
                                <button className="text-xs font-bold uppercase tracking-widest text-primary hover:text-secondary flex items-center gap-1 transition-colors">
                                    View List <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>

                            <div className="space-y-6">
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="flex items-center justify-between p-6 rounded-3xl hover:bg-muted/30 transition-colors border border-transparent hover:border-muted cursor-pointer">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center font-bold text-secondary/40">#</div>
                                            <div>
                                                <p className="font-serif font-bold text-secondary">{order.customer}</p>
                                                <p className="text-xs text-muted-foreground">{order.product} • {order.id}</p>
                                            </div>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <p className="font-bold text-primary">{order.total}</p>
                                            <span className="text-[10px] font-bold uppercase tracking-tighter px-3 py-1 bg-muted rounded-full">
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side Insights */}
                        <div className="bg-secondary p-10 rounded-[50px] text-white space-y-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-10 translate-x-10" />
                            <h3 className="text-2xl font-serif font-bold relative z-10">Sales Goal</h3>
                            <div className="space-y-6 relative z-10">
                                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[72%] bg-primary rounded-full shadow-[0_0_20px_rgba(147,91,58,0.5)]" />
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <p className="text-4xl font-bold">72%</p>
                                    <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Monthly Target</p>
                                </div>
                                <p className="text-sm text-white/60 leading-relaxed">
                                    You are roughly <span className="text-white font-bold italic">£3,400</span> away from your elite performance goal.
                                </p>
                                <Button variant="outline" className="w-full h-14 rounded-2xl border-white/20 text-white hover:bg-white hover:text-secondary uppercase font-bold text-[10px] tracking-widest">
                                    Optimization Report
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
