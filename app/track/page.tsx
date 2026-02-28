"use client";

import Link from "next/link";
import { ArrowLeft, Package, MapPin, Truck, AlertCircle, ShoppingBag, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrackOrderPage() {
    const status = [
        { label: "Order Received", date: "Feb 24, 10:45 AM", completed: true },
        { label: "Quality Inspection", date: "Feb 25, 08:30 AM", completed: true },
        { label: "In Transit", date: "Currently in Lusaka", active: true },
        { label: "Out for Delivery", date: "Est. March 1" },
        { label: "Delivered", date: "Pending" },
    ];

    return (
        <div className="bg-background min-h-screen py-20 lg:py-32">
            <div className="container max-w-5xl">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="space-y-6">
                        <Link href="/dashboard" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> My Dashboard
                        </Link>
                        <h1 className="text-5xl md:text-[80px] font-serif font-bold text-secondary tracking-tight leading-tighter">
                            Trace your <br /> <span className="text-primary italic">Harvest.</span>
                        </h1>
                    </div>
                    <div className="bg-white p-10 rounded-[40px] border-2 border-primary/10 shadow-sm flex items-center gap-8 group hover:shadow-lg transition-all">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <Package className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-[0.2em] mb-1">Order Identifier</p>
                            <p className="text-2xl font-serif font-bold text-secondary tracking-tight">#{"ZO-7281-AMZ"}</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">

                    {/* Left: Tracking Timeline */}
                    <div className="lg:col-span-2 space-y-12">
                        <div className="relative pl-12 space-y-16">
                            {/* Vertical Line */}
                            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-muted z-0" />

                            {status.map((item, i) => (
                                <div key={i} className="relative z-10 group">
                                    <div className={`absolute -left-12 w-8 h-8 rounded-full border-4 border-white shadow-xl flex items-center justify-center transition-all ${item.completed
                                            ? 'bg-primary'
                                            : item.active
                                                ? 'bg-primary border-primary/20 animate-pulse'
                                                : 'bg-muted'
                                        }`}>
                                        {item.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className={`text-xl font-serif font-bold ${item.completed || item.active ? 'text-secondary' : 'text-muted-foreground'}`}>
                                            {item.label}
                                        </h4>
                                        <p className="text-xs font-medium text-muted-foreground tracking-widest uppercase">
                                            {item.date}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Quick Context */}
                    <aside className="space-y-10">
                        <div className="bg-secondary p-10 rounded-[50px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -translate-y-10 translate-x-10 group-hover:scale-125 transition-transform duration-700" />
                            <h3 className="text-2xl font-serif font-bold relative z-10 mb-8 border-b border-white/10 pb-6 uppercase tracking-widest">Shipment Info</h3>

                            <div className="space-y-10 relative z-10">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Carrier Location</p>
                                        <p className="font-serif font-bold">Lusaka International Hub, ZM</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Truck className="w-5 h-5 text-primary shrink-0" />
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Expected Delivery</p>
                                        <p className="font-serif font-bold">March 5, 2026</p>
                                    </div>
                                </div>
                                <div className="bg-white/5 p-6 rounded-3xl border border-white/5 space-y-2">
                                    <div className="flex items-center gap-2 text-primary">
                                        <AlertCircle className="w-4 h-4" />
                                        <p className="text-[10px] font-bold uppercase tracking-widest">Courier Update</p>
                                    </div>
                                    <p className="text-xs text-white/50 leading-relaxed italic">"Weather in transit may cause slight delays in the Lusaka sector. We are monitoring closely."</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 border rounded-[50px] bg-white text-center space-y-6 shadow-sm hover:shadow-md transition-shadow">
                            <ShoppingBag className="w-8 h-8 text-primary mx-auto" />
                            <div className="space-y-2">
                                <h4 className="font-serif font-bold text-secondary text-lg uppercase tracking-tight">Need Support?</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">Our Zambian-based support team is available 24/7 to help trace your harvest.</p>
                            </div>
                            <Button variant="outline" className="w-full rounded-full h-12 border-muted hover:border-primary hover:text-primary uppercase font-bold text-[10px] tracking-widest">
                                Contact Artisan
                            </Button>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
