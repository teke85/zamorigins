import Link from "next/link";
import { Package, Heart, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardOverviewPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
                <p className="text-muted-foreground">Here is an overview of your account activity.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                        <Package className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">2</h3>
                    <p className="text-muted-foreground text-sm font-medium">Active Orders</p>
                </div>
                <div className="bg-card border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">5</h3>
                    <p className="text-muted-foreground text-sm font-medium">Saved Items</p>
                </div>
                <div className="bg-card border rounded-xl p-6 flex flex-col items-center text-center shadow-sm">
                    <div className="w-12 h-12 bg-muted text-muted-foreground rounded-full flex items-center justify-center mb-4">
                        <RefreshCw className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">Inactive</h3>
                    <p className="text-muted-foreground text-sm font-medium">Subscription</p>
                </div>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Recent Orders</h2>
                    <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                        <Link href="/dashboard/orders">View All <ArrowRight className="ml-1 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-md"></div>
                            <div>
                                <p className="font-semibold text-sm">Order #ZAM-857392</p>
                                <p className="text-xs text-muted-foreground">Placed on Feb 18, 2026</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-sm">£30.96</p>
                            <p className="text-xs text-secondary font-medium mt-1">In Transit</p>
                        </div>
                    </div>
                </div>

                <Button variant="outline" className="w-full mt-4 sm:hidden" asChild>
                    <Link href="/dashboard/orders">View All Orders</Link>
                </Button>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-xl font-bold text-foreground mb-2">Taste of Home Box</h2>
                    <p className="text-muted-foreground text-sm max-w-md">
                        Never run out of your favorite Zambian staples. Subscribe to get them delivered to your door every month.
                    </p>
                </div>
                <Button asChild className="shrink-0 w-full sm:w-auto">
                    <Link href="/subscription">Join Waitlist</Link>
                </Button>
            </div>
        </div>
    );
}
