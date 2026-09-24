import { Plus, Search, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

// Mock Data
const products = [
    { id: '1', name: 'Premium Sorghum (Mabele)', category: 'Grains & Beans', price: 4.99, stock: 42, status: 'Active' },
    { id: '2', name: 'Dried Pumpkin Leaves (Chibwabwa)', category: 'Dried Vegetables', price: 3.99, stock: 15, status: 'Active' },
    { id: '3', name: 'Authentic Groundnuts', category: 'Snacks', price: 6.50, stock: 0, status: 'Out of Stock' },
    { id: '4', name: 'Millet Meal', category: 'Grains & Beans', price: 5.50, stock: 120, status: 'Active' },
    { id: '5', name: 'Zambian Wild Honey', category: 'Specials', price: 9.99, stock: 5, status: 'Low Stock' },
];

export default function AdminProductsPage() {
    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Products</h1>
                    <p className="text-muted-foreground mt-1">Manage your inventory, variants, and pricing.</p>
                </div>
                <Button>
                    <Plus className="w-4 h-4 mr-2" /> Add Product
                </Button>
            </div>

            <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b flex items-center justify-between gap-4 bg-muted/20">
                    <div className="relative max-w-sm flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search products..."
                            className="flex h-9 w-full rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm shadow-sm"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">Filter</Button>
                        <Button variant="outline" size="sm">Export</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b">
                            <tr>
                                <th className="px-6 py-3 font-medium">Product</th>
                                <th className="px-6 py-3 font-medium hidden sm:table-cell">Category</th>
                                <th className="px-6 py-3 font-medium">Price</th>
                                <th className="px-6 py-3 font-medium">Stock</th>
                                <th className="px-6 py-3 font-medium hidden md:table-cell">Status</th>
                                <th className="px-6 py-3 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4 font-medium text-foreground">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded bg-muted"></div>
                                            {product.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 hidden sm:table-cell text-muted-foreground">{product.category}</td>
                                    <td className="px-6 py-4">{formatGBP(product.price)}</td>
                                    <td className="px-6 py-4">{product.stock}</td>
                                    <td className="px-6 py-4 hidden md:table-cell">
                                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${product.status === 'Active' ? 'bg-green-100 text-green-800' :
                                                product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                            }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t flex justify-between items-center text-sm text-muted-foreground bg-muted/10">
                    <span>Showing 1 to 5 of 24 entries</span>
                    <div className="flex gap-1">
                        <Button variant="outline" size="sm" disabled>Prev</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
