import Link from "next/link";
import { Filter, ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

// Mock data for UI only
const mockProducts = [
    { id: '1', name: 'Premium Sorghum (Mabele)', price: 4.99, image: 'bg-primary/20', category: 'Grains & Beans' },
    { id: '2', name: 'Authentic Groundnuts', price: 6.50, image: 'bg-secondary/20', category: 'Snacks' },
    { id: '3', name: 'Dried Pumpkin Leaves (Chibwabwa)', price: 3.99, image: 'bg-primary/20', category: 'Dried Vegetables' },
    { id: '4', name: 'Millet Meal', price: 5.50, image: 'bg-secondary/20', category: 'Grains & Beans' },
    { id: '5', name: 'Kapenta (Dried Seafood)', price: 8.99, image: 'bg-primary/20', category: 'Seafood' },
    { id: '6', name: 'Zambian Wild Honey', price: 9.99, image: 'bg-secondary/20', category: 'Specials' },
];

export default function ShopPage({ searchParams }: { searchParams: { category?: string } }) {
    const selectedCategory = searchParams?.category;

    return (
        <div className="container py-10 md:py-16">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Filters Sidebar UI */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="sticky top-24 space-y-8">
                        <div>
                            <div className="flex items-center justify-between font-semibold border-b pb-2 mb-4">
                                <h3>Filters</h3>
                                <Filter className="w-4 h-4" />
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium">Categories</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li><button className="hover:text-primary transition-colors data-[active=true]:text-primary font-medium" data-active={!selectedCategory}>All Products</button></li>
                                        <li><button className="hover:text-primary transition-colors data-[active=true]:text-primary font-medium" data-active={selectedCategory === 'grains'}>Grains & Beans</button></li>
                                        <li><button className="hover:text-primary transition-colors data-[active=true]:text-primary font-medium" data-active={selectedCategory === 'spices'}>Spices & Seasonings</button></li>
                                        <li><button className="hover:text-primary transition-colors data-[active=true]:text-primary font-medium" data-active={selectedCategory === 'vegetables'}>Dried Vegetables</button></li>
                                        <li><button className="hover:text-primary transition-colors data-[active=true]:text-primary font-medium" data-active={selectedCategory === 'snacks'}>Snacks</button></li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium">Price Range</h4>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <input type="number" placeholder="Min" className="h-8 rounded-md border px-2 w-full" />
                                        <input type="number" placeholder="Max" className="h-8 rounded-md border px-2 w-full" />
                                    </div>
                                </div>

                                <Button className="w-full mt-4">Apply Filters</Button>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold">Shop {selectedCategory ? selectedCategory : 'All Products'}</h1>
                            <p className="text-muted-foreground mt-1">Showing 1-6 of 24 results</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Sort By:</span>
                            <button className="flex items-center gap-1 text-sm font-medium border rounded-md px-3 py-1.5 hover:bg-muted">
                                Featured <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockProducts.map((product) => (
                            <Link href={`/shop/${product.id}`} key={product.id} className="group flex flex-col border rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-card">
                                <div className={`aspect-square w-full ${product.image} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors z-10" />
                                    <span className="font-semibold text-foreground/40 text-lg">Image</span>
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <span className="text-xs text-muted-foreground font-medium mb-1 uppercase tracking-wider">{product.category}</span>
                                    <h3 className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">{product.name}</h3>
                                    <div className="mt-auto pt-4 flex items-center justify-between">
                                        <span className="font-bold">{formatGBP(product.price)}</span>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:bg-primary/10 hover:text-primary rounded-full" onClick={(e) => e.preventDefault()}>
                                            <ShoppingCart className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" disabled>Previous</Button>
                            <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">1</Button>
                            <Button variant="outline" size="sm">2</Button>
                            <Button variant="outline" size="sm">3</Button>
                            <Button variant="outline" size="sm">Next</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
