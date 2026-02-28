"use client";

import Link from "next/link";
import { ShoppingBag, Package, Heart, MapPin, Settings, ChevronRight, ArrowRight } from "lucide-react";

export default function CustomerDashboard() {
    const recentOrders = [
        { id: "ZO-9012", date: "Feb 24, 2026", status: "In Transit", total: "£42.50" },
        { id: "ZO-8955", date: "Jan 12, 2026", status: "Delivered", total: "£14.99" },
    ];

    return (
        <div className="container py-20 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-20">

                {/* Navigation Sidebar */}
                <aside className="w-full lg:w-72 space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-serif font-bold text-secondary">My Account</h1>
                        <p className="text-muted-foreground text-sm">Managing orders since 2026</p>
                    </div>

                    <nav className="flex flex-col gap-2">
                        {[
                            { name: "Overview", icon: ShoppingBag, active: true },
                            { name: "Order History", icon: Package },
                            { name: "My Wishlist", icon: Heart },
                            { name: "Addresses", icon: MapPin },
                            { name: "Account settings", icon: Settings },
                        ].map((item) => (
                            <button
                                key={item.name}
                                className={`flex items-center justify-between px-6 py-4 rounded-2xl text-sm font-bold tracking-widest uppercase transition-all ${item.active
                                        ? "bg-primary text-white shadow-xl"
                                        : "text-muted-foreground hover:bg-muted/50 hover:text-secondary"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <item.icon className="w-5 h-5" />
                                    {item.name}
                                </div>
                                {item.active && <ChevronRight className="w-4 h-4" />}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Dashboard Content */}
                <div className="flex-1 space-y-16">

                    {/* Welcome Banner */}
                    <div className="bg-secondary rounded-[40px] p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-20 translate-x-10" />
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold">Welcome back, Sarah.</h2>
                            <p className="text-white/60 text-lg max-w-sm">You have <span className="text-white font-bold">1 order</span> currently on its way to your home.</p>
                            <Link href="/track" className="inline-flex items-center gap-2 bg-primary text-white font-bold uppercase tracking-[0.2em] text-[10px] px-8 py-4 rounded-full hover:bg-white hover:text-secondary transition-all">
                                Track Shipment <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Total Spent", value: "£156.49" },
                            { label: "Items in Wishlist", value: "12" },
                            { label: "Coupons Used", value: "2" },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white p-10 rounded-[40px] border shadow-sm space-y-2 group hover:shadow-md transition-shadow">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{stat.label}</p>
                                <p className="text-3xl font-serif font-bold text-secondary group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Recent Orders List */}
                    <div className="space-y-10">
                        <div className="flex justify-between items-center px-4">
                            <h3 className="text-2xl font-serif font-bold text-secondary">Recent Activity</h3>
                            <button className="text-xs font-bold uppercase tracking-widest text-primary border-b-2 border-primary/10 hover:border-primary transition-all pb-1">All Orders</button>
                        </div>

                        <div className="space-y-4">
                            {recentOrders.map(order => (
                                <div key={order.id} className="bg-white border rounded-[32px] p-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-lg transition-all group cursor-pointer">
                                    <div className="flex items-center gap-8">
                                        <div className="w-16 h-16 bg-muted rounded-3xl flex items-center justify-center font-serif font-bold text-muted-foreground italic">
                                            #
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-serif font-bold text-xl text-secondary">{order.id}</p>
                                            <p className="text-sm text-muted-foreground">{order.date}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-12 text-center md:text-right">
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-primary mb-1">Status</p>
                                            <p className="font-bold text-secondary">{order.status}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-primary mb-1">Total</p>
                                            <p className="font-bold text-secondary">{order.total}</p>
                                        </div>
                                        <button className="w-12 h-12 bg-muted/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
