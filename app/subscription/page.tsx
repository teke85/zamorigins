"use client";

import { useState } from "react";
import { Check, Mail, Gift, Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubscriptionPage() {
    const [email, setEmail] = useState('');
    const [joined, setJoined] = useState(false);

    const handleJoinWaitlist = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) setJoined(true);
    };

    const benefits = [
        { icon: Gift, title: "Curated Selections", desc: "A different mix of premium Zambian ingredients every month, from staple grains to rare spices." },
        { icon: Heart, title: "Support Local Farmers", desc: "Every box directly empowers farming cooperatives across various provinces in Zambia." },
        { icon: Calendar, title: "Flexible Delivery", desc: "Delivered straight to your UK door on your schedule. Pause or cancel anytime." },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="bg-primary/5 py-20 lg:py-32">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                Coming Soon
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                                The <span className="text-primary">Taste of Home</span> Box
                            </h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                A carefully curated monthly subscription box featuring authentic Zambian dry foods, snacks, and spices. Never run out of your favorites again.
                            </p>

                            {!joined ? (
                                <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <div className="relative flex-1">
                                        <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex h-12 w-full pl-10 pr-3 rounded-md border border-input shadow-sm focus:ring-primary focus:border-primary"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button size="lg" className="h-12 w-full sm:w-auto" type="submit">
                                        Join Waitlist
                                    </Button>
                                </form>
                            ) : (
                                <div className="bg-green-100 text-green-800 p-4 rounded-lg flex items-start gap-3 mt-4 border border-green-200">
                                    <Check className="h-5 w-5 mt-0.5 shrink-0" />
                                    <div>
                                        <h3 className="font-bold">You&apos;re on the list!</h3>
                                        <p className="text-sm mt-1">Thank you for your interest. We&apos;ll notify you at {email} the moment the Taste of Home Box goes live.</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="lg:ml-auto">
                            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted border shadow-lg lg:w-[450px]">
                                <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center p-8 text-center text-primary-foreground">
                                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur mb-6">
                                        <Gift className="w-12 h-12 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold bg-white/80 text-black px-4 py-1 rounded">Taste of Home</h3>
                                    <p className="mt-2 font-medium bg-black/50 px-3 py-1 text-white rounded text-sm">Monthly Subscription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-background">
                <div className="container max-w-5xl">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold">What&apos;s inside the box?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Every month is a different journey across Zambia, bringing you the finest dry foods straight to your UK doorstep.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((b, i) => {
                            const Icon = b.icon;
                            return (
                                <div key={i} className="bg-card border p-8 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 bg-secondary/10 text-secondary border border-secondary/20 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{b.title}</h3>
                                    <p className="text-muted-foreground flex-1">{b.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
