import { ArrowUpRight, ArrowDownRight, Users, ShoppingCart, PoundSterling, Package } from "lucide-react";

export default function AdminOverviewPage() {
    const stats = [
        { name: "Total Revenue", value: "£12,450.00", change: "+4.75%", icon: PoundSterling, positive: true },
        { name: "Orders", value: "342", change: "+12.2%", icon: ShoppingCart, positive: true },
        { name: "Active Customers", value: "1,240", change: "+2.1%", icon: Users, positive: true },
        { name: "Low Stock Items", value: "12", change: "-4.0%", icon: Package, positive: false },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground mt-1">Overview of your store&apos;s performance today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="bg-card border rounded-xl p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                                <Icon className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="mt-4 flex items-baseline gap-2">
                                <h3 className="text-2xl font-bold">{stat.value}</h3>
                            </div>
                            <div className="mt-2 text-xs">
                                <span className={`inline-flex items-center font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                    {stat.change}
                                </span>
                                <span className="text-muted-foreground ml-2">vs last month</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Chart Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-card border rounded-xl p-6 shadow-sm min-h-[400px] flex flex-col justify-between">
                    <h3 className="font-bold text-lg">Revenue Overview</h3>
                    <div className="w-full flex-1 mt-6 flex items-end justify-between px-4 gap-2">
                        {[10, 25, 15, 40, 30, 60, 45, 70, 50, 80, 60, 90].map((h, i) => (
                            <div key={i} className="w-full bg-primary/20 rounded-t-md relative group hover:bg-primary/40 transition-colors cursor-pointer" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded hidden group-hover:block transition-all shadow-md">
                                    £{h * 120}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-4 pt-4 border-t px-2">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                    </div>
                </div>

                <div className="bg-card border rounded-xl p-6 shadow-sm flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-lg">Recent Orders</h3>
                    </div>
                    <div className="space-y-4 flex-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-semibold text-sm">ZAM-{(857390 + i).toString()}</p>
                                    <p className="text-xs text-muted-foreground mt-0.5">Jane Doe • 2 items</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm">£{(24.50 * i).toFixed(2)}</p>
                                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] uppercase font-bold rounded-sm mt-1">Paid</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
