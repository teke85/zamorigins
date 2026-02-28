"use client";

import { useState } from "react";
import { Package, Truck, CheckCircle2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderTrackingPage() {
    const [orderNumber, setOrderNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleTrackSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);

        // Simulate API call
        setTimeout(() => {
            setIsSearching(false);
            setHasSearched(true);
        }, 1200);
    };

    const steps = [
        { name: "Order Received", status: "completed", date: "Feb 18, 2026", time: "10:30 AM", icon: Package },
        { name: "Packed in Zambia", status: "completed", date: "Feb 19, 2026", time: "02:15 PM", icon: Package },
        { name: "In Transit (Flight)", status: "current", date: "Feb 21, 2026", time: "08:45 AM", icon: Plane },
        { name: "Out for Delivery (UK)", status: "upcoming", date: "", time: "", icon: Truck },
        { name: "Delivered", status: "upcoming", date: "", time: "", icon: CheckCircle2 },
    ];

    return (
        <div className="container py-12 md:py-20 min-h-[calc(100vh-10rem)]">
            <div className="max-w-3xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Track Your ZamOrigins Order</h1>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Enter your order number and email address to see the journey of your authentic Zambian foods.
                    </p>
                </div>

                <div className="bg-card border rounded-2xl shadow-sm p-6 md:p-8">
                    <form onSubmit={handleTrackSubmit} className="flex flex-col md:flex-row gap-4 items-end">
                        <div className="grid gap-1.5 w-full md:flex-1">
                            <label htmlFor="orderNum" className="text-sm font-medium">Order Number</label>
                            <input
                                id="orderNum"
                                type="text"
                                placeholder="e.g. ZAM-123456"
                                className="h-12 flex w-full rounded-md border px-3"
                                value={orderNumber}
                                onChange={(e) => setOrderNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-1.5 w-full md:flex-1">
                            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Email used at checkout"
                                className="h-12 flex w-full rounded-md border px-3"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <Button size="lg" className="w-full md:w-auto h-12 px-8" type="submit" disabled={isSearching}>
                            {isSearching ? "Searching..." : "Track Order"}
                        </Button>
                    </form>

                    {hasSearched && (
                        <div className="mt-12 border-t pt-8 animate-in fade-in duration-500">
                            <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wider text-primary">Order {orderNumber || 'ZAM-857392'}</h3>
                                    <p className="text-muted-foreground text-sm mt-1">Expected Delivery: Feb 24, 2026</p>
                                </div>
                                <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-md font-semibold self-start md:self-center">
                                    In Transit
                                </div>
                            </div>

                            {/* Status Timeline */}
                            <div className="relative border-l ml-6 md:ml-8 space-y-8">
                                {steps.map((step, idx) => {
                                    const Icon = step.icon;
                                    return (
                                        <div key={idx} className="relative pl-8 md:pl-10">
                                            <div className={`absolute -left-5 md:-left-6 w-10 md:w-12 h-10 md:h-12 rounded-full border-4 border-background flex items-center justify-center ${step.status === 'completed' ? 'bg-primary text-primary-foreground' :
                                                    step.status === 'current' ? 'bg-secondary text-primary-foreground ring-4 ring-secondary/20' :
                                                        'bg-muted text-muted-foreground'
                                                }`}>
                                                <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                            </div>

                                            <div className="pt-2">
                                                <h4 className={`text-base md:text-lg font-bold ${step.status === 'upcoming' ? 'text-muted-foreground' : 'text-foreground'
                                                    }`}>
                                                    {step.name}
                                                </h4>
                                                {step.date && (
                                                    <p className="text-sm text-muted-foreground mt-1 font-medium">
                                                        {step.date} <span className="mx-1">•</span> {step.time}
                                                    </p>
                                                )}

                                                {step.status === 'current' && (
                                                    <div className="mt-4 bg-muted/50 p-4 rounded-lg text-sm border-l-4 border-l-secondary">
                                                        Your package has departed Kenneth Kaunda International Airport (LUN) and is currently in transit to London Heathrow (LHR).
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
