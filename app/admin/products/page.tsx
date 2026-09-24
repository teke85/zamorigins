"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Plus, Search, MoreHorizontal, Edit2, Archive, Trash2, Eye,
  ChevronDown, Filter, X, Upload, ImagePlus, Package, CheckCircle2,
  AlertCircle, Clock, FolderX, BarChart2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatGBP } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
type Status = "PUBLISHED" | "DRAFT" | "OUT_OF_STOCK" | "ARCHIVED";

interface AdminProduct {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  status: Status;
  updatedAt: string;
  sku?: string;
}

// ─── Seed Data (replace with Prisma query when DB is connected) ───────────────
const SEED_PRODUCTS: AdminProduct[] = [
  { id: "1", name: "Fanta Orange – Glass Bottle", brand: "Fanta", category: "Drinks", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270623/Fanta_Bottle.jpg", price: 2.49, compareAtPrice: 2.99, stock: 48, status: "PUBLISHED", updatedAt: "2026-09-24", sku: "FANTA-BTL-500" },
  { id: "2", name: "Fanta Orange – Plastic Bottle", brand: "Fanta", category: "Drinks", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Fanta_Disposable.jpg", price: 1.99, stock: 72, status: "PUBLISHED", updatedAt: "2026-09-24", sku: "FANTA-DSP-500" },
  { id: "3", name: "Appy Apple Juice", brand: "Appy", category: "Drinks", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270622/Appy_Apple.jpg", price: 1.49, stock: 96, status: "PUBLISHED", updatedAt: "2026-09-24", sku: "APPY-APL-250" },
  { id: "4", name: "Coca-Cola Classic", brand: "Coca-Cola", category: "Drinks", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Coca_Cola_Soft_DRink.jpg", price: 2.29, compareAtPrice: 2.79, stock: 120, status: "PUBLISHED", updatedAt: "2026-09-24", sku: "COKE-CLK-500" },
  { id: "5", name: "Milkit MilkShake", brand: "Milkit", category: "Drinks", image: "https://res.cloudinary.com/v69xhq02/image/upload/v1790270621/Milkit_MilkShake.jpg", price: 1.89, stock: 0, status: "OUT_OF_STOCK", updatedAt: "2026-09-23", sku: "MLKT-SHK-200" },
  { id: "6", name: "Premium Lake Kariba Kapenta", brand: "ZamOrigins", category: "Fish", image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439413/product-kapenta-L5aJLvM4_ifvfdb.jpg", price: 12.99, stock: 34, status: "PUBLISHED", updatedAt: "2026-09-20" },
  { id: "7", name: "Mixed Zambian Beans", brand: "ZamOrigins", category: "Grains & Beans", image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439360/product-beans-D143BQH__xwbt5h.jpg", price: 8.99, stock: 55, status: "PUBLISHED", updatedAt: "2026-09-20" },
  { id: "8", name: "Breakfast Mealie Meal", brand: "ZamOrigins", category: "Staples", image: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1772439345/product-mealie-CygOyINB_m2ivdm.jpg", price: 9.99, compareAtPrice: 12.99, stock: 22, status: "DRAFT", updatedAt: "2026-09-18" },
];

const CATEGORIES = ["All Categories", "Drinks", "Fish", "Grains & Beans", "Staples", "Vegetables", "Spices", "Beauty & Wellness"];
const STATUS_OPTIONS: Status[] = ["PUBLISHED", "DRAFT", "OUT_OF_STOCK", "ARCHIVED"];

// ─── Status Badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Status }) {
  const map = {
    PUBLISHED: { label: "Published", cls: "bg-emerald-50 text-emerald-700", icon: CheckCircle2 },
    DRAFT: { label: "Draft", cls: "bg-secondary/5 text-secondary/50", icon: Clock },
    OUT_OF_STOCK: { label: "Out of Stock", cls: "bg-amber-50 text-amber-700", icon: AlertCircle },
    ARCHIVED: { label: "Archived", cls: "bg-red-50 text-red-600", icon: FolderX },
  };
  const { label, cls, icon: Icon } = map[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${cls}`}>
      <Icon className="w-2.5 h-2.5" />{label}
    </span>
  );
}

// ─── Add Product Form ─────────────────────────────────────────────────────────
function AddProductForm({ onClose }: { onClose: () => void }) {
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<Status>("DRAFT");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (publish?: boolean) => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      if (publish) setStatus("PUBLISHED");
      setTimeout(() => { setSaved(false); onClose(); }, 1200);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-end">
      <div className="w-full max-w-2xl h-screen bg-white overflow-y-auto shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-secondary/5 px-8 py-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-serif font-bold text-secondary">Add New Product</h2>
            <p className="text-xs text-secondary/40 font-bold uppercase tracking-widest mt-1">Fill in product details below</p>
          </div>
          <button onClick={onClose} className="p-2 hover:text-primary transition-colors text-secondary/40">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 p-8 space-y-8">
          {/* Basic Info */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-2">Basic Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Product Name *</label>
                <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none transition-all text-secondary" placeholder="e.g. Fanta Orange – Glass Bottle" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Brand *</label>
                  <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none transition-all text-secondary" placeholder="e.g. Fanta" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Category *</label>
                  <div className="relative">
                    <select className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none appearance-none text-secondary">
                      {CATEGORIES.slice(1).map(c => <option key={c}>{c}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-secondary/30 pointer-events-none" />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Short Description</label>
                <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none transition-all text-secondary" placeholder="One-line description shown on cards" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Full Description</label>
                <textarea className="w-full h-28 border border-secondary/10 rounded-xl px-4 py-3 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none resize-none transition-all text-secondary" placeholder="Detailed product description..." />
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-2">Pricing (GBP)</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Selling Price *</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm text-secondary/40 font-bold">£</span>
                  <input type="number" step="0.01" className="w-full h-11 border border-secondary/10 rounded-xl pl-8 pr-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Previous Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm text-secondary/40 font-bold">£</span>
                  <input type="number" step="0.01" className="w-full h-11 border border-secondary/10 rounded-xl pl-8 pr-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Currency</label>
                <div className="h-11 border border-secondary/10 rounded-xl px-4 flex items-center text-sm font-bold text-secondary/40 bg-secondary/[0.02]">
                  GBP – British Pound
                </div>
              </div>
            </div>
          </section>

          {/* Product Details */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-2">Product Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Volume / Size</label>
                <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="e.g. 500ml" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Weight (g)</label>
                <input type="number" className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="e.g. 550" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">SKU / Product Code</label>
                <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="e.g. FANTA-BTL-500" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Country / Origin</label>
                <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="e.g. Zambia" />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Tags (comma-separated)</label>
                <input className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="e.g. fanta, orange, carbonated, imported" />
              </div>
            </div>
          </section>

          {/* Inventory */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-2">Inventory</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Stock Quantity</label>
                <input type="number" className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="0" />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Low Stock Alert (qty)</label>
                <input type="number" className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary" placeholder="5" />
              </div>
            </div>
          </section>

          {/* Images */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-2">Product Images</h3>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-1.5">Primary Image URL</label>
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full h-11 border border-secondary/10 rounded-xl px-4 text-sm bg-[#FCFAF8] focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary"
                placeholder="https://res.cloudinary.com/..."
              />
            </div>
            {imageUrl && (
              <div className="relative w-32 h-32 rounded-xl overflow-hidden border border-secondary/10">
                <Image src={imageUrl} alt="Preview" fill className="object-cover" unoptimized />
                <button onClick={() => setImageUrl("")} className="absolute top-1 right-1 w-6 h-6 bg-secondary/80 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            <div className="border-2 border-dashed border-secondary/10 rounded-2xl p-8 text-center space-y-2 hover:border-[#D99C3B]/30 transition-colors cursor-pointer">
              <ImagePlus className="w-8 h-8 text-secondary/20 mx-auto" />
              <p className="text-xs font-bold text-secondary/40">Paste image URL above or drag &amp; drop</p>
              <p className="text-[10px] text-secondary/20">JPG, PNG, WEBP — max 5MB recommended</p>
            </div>
          </section>

          {/* Publishing */}
          <section className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D99C3B] border-b border-secondary/5 pb-2">Publishing Status</h3>
            <div className="grid grid-cols-2 gap-3">
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`p-4 rounded-xl border text-left space-y-1 transition-all ${
                    status === s ? "border-[#D99C3B] bg-[#D99C3B]/5" : "border-secondary/5 hover:border-secondary/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${status === s ? "bg-[#D99C3B]" : "bg-secondary/20"}`} />
                    <StatusBadge status={s} />
                  </div>
                  <p className="text-[9px] text-secondary/40 leading-tight pl-4">
                    {s === "PUBLISHED" && "Visible to all customers"}
                    {s === "DRAFT" && "Hidden – still being edited"}
                    {s === "OUT_OF_STOCK" && "Visible but shows unavailable"}
                    {s === "ARCHIVED" && "Removed from catalogue"}
                  </p>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-secondary/5 px-8 py-5 flex items-center gap-4">
          <Button
            onClick={() => handleSave(false)}
            variant="outline"
            className="flex-1 h-12 rounded-xl uppercase text-[9px] font-bold tracking-widest border-secondary/10"
            disabled={saving}
          >
            {saving ? "Saving…" : saved ? "Saved ✓" : "Save as Draft"}
          </Button>
          <Button
            onClick={() => handleSave(true)}
            className="flex-1 h-12 rounded-xl uppercase text-[9px] font-bold tracking-widest bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10"
            disabled={saving}
          >
            {saving ? "Publishing…" : saved ? "Published ✓" : "Publish Product"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AdminProductsPage() {
  const [products, setProducts] = useState<AdminProduct[]>(SEED_PRODUCTS);
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showAddForm, setShowAddForm] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const filtered = products.filter((p) => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    const matchCat = catFilter === "All Categories" || p.category === catFilter;
    const matchStatus = statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchCat && matchStatus;
  });

  const stats = {
    total: products.length,
    published: products.filter(p => p.status === "PUBLISHED").length,
    draft: products.filter(p => p.status === "DRAFT").length,
    outOfStock: products.filter(p => p.status === "OUT_OF_STOCK").length,
    archived: products.filter(p => p.status === "ARCHIVED").length,
  };

  const changeStatus = (id: string, status: Status) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, status } : p));
    setOpenMenuId(null);
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
    setOpenMenuId(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-secondary">Products</h1>
          <p className="text-xs text-secondary/40 font-bold uppercase tracking-widest mt-1">
            Manage inventory, pricing, images and visibility
          </p>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="gap-2 rounded-xl px-6 h-11 uppercase font-bold text-[10px] tracking-widest shadow-lg shadow-primary/10"
        >
          <Plus className="w-4 h-4" /> Add Product
        </Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "Total", value: stats.total, icon: Package, active: statusFilter === "all", onClick: () => setStatusFilter("all") },
          { label: "Published", value: stats.published, icon: CheckCircle2, active: statusFilter === "PUBLISHED", onClick: () => setStatusFilter("PUBLISHED") },
          { label: "Draft", value: stats.draft, icon: Clock, active: statusFilter === "DRAFT", onClick: () => setStatusFilter("DRAFT") },
          { label: "Out of Stock", value: stats.outOfStock, icon: AlertCircle, active: statusFilter === "OUT_OF_STOCK", onClick: () => setStatusFilter("OUT_OF_STOCK") },
          { label: "Archived", value: stats.archived, icon: FolderX, active: statusFilter === "ARCHIVED", onClick: () => setStatusFilter("ARCHIVED") },
        ].map((s) => (
          <button
            key={s.label}
            onClick={s.onClick}
            className={`p-5 rounded-2xl border text-left transition-all hover:shadow-md ${
              s.active ? "bg-secondary text-white border-secondary shadow-lg" : "bg-white border-secondary/5 hover:border-[#D99C3B]/20"
            }`}
          >
            <s.icon className={`w-4 h-4 mb-2 ${s.active ? "text-primary" : "text-secondary/30"}`} />
            <p className={`text-2xl font-serif font-bold ${s.active ? "text-white" : "text-secondary"}`}>{s.value}</p>
            <p className={`text-[9px] font-bold uppercase tracking-widest mt-0.5 ${s.active ? "text-white/60" : "text-secondary/40"}`}>{s.label}</p>
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-2xl border border-secondary/5 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-secondary/5 flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-secondary/30" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search products..."
              className="w-full h-10 rounded-xl border border-secondary/10 bg-[#FCFAF8] pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none text-secondary"
            />
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="relative">
              <select
                value={catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
                className="h-10 rounded-xl border border-secondary/10 bg-white pl-4 pr-8 text-xs font-bold uppercase tracking-widest text-secondary/60 focus:ring-2 focus:ring-[#D99C3B]/20 focus:border-[#D99C3B] outline-none appearance-none"
              >
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <ChevronDown className="absolute right-3 top-3 w-3 h-3 text-secondary/30 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="border-b border-secondary/5 bg-secondary/[0.02]">
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary/40">Product</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary/40 hidden sm:table-cell">Category</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary/40">Price</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary/40 hidden md:table-cell">Stock</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary/40 hidden lg:table-cell">Status</th>
                <th className="px-6 py-4 text-[9px] font-bold uppercase tracking-widest text-secondary/40 hidden xl:table-cell">Updated</th>
                <th className="px-6 py-4 text-right text-[9px] font-bold uppercase tracking-widest text-secondary/40">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secondary/5">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-16 text-center text-secondary/30">
                    <Package className="w-8 h-8 mx-auto mb-3 opacity-30" />
                    <p className="font-bold text-sm">No products found</p>
                    <p className="text-xs mt-1">Try adjusting your search or filters</p>
                  </td>
                </tr>
              )}
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-secondary/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-secondary/5 shrink-0 bg-secondary/5">
                        {product.image && (
                          <Image src={product.image} alt={product.name} width={48} height={48} className="w-full h-full object-cover" unoptimized />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-secondary text-sm line-clamp-1">{product.name}</p>
                        <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{product.brand}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 bg-secondary/5 px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-0.5">
                      <p className="font-bold text-secondary">{formatGBP(product.price)}</p>
                      {product.compareAtPrice && (
                        <p className="text-[10px] text-secondary/30 line-through">{formatGBP(product.compareAtPrice)}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className={`font-bold text-sm ${product.stock === 0 ? "text-red-500" : product.stock < 10 ? "text-amber-600" : "text-secondary"}`}>
                      {product.stock}
                    </span>
                    {product.stock < 10 && product.stock > 0 && (
                      <span className="ml-2 text-[9px] text-amber-600 font-bold uppercase">Low</span>
                    )}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    <StatusBadge status={product.status} />
                  </td>
                  <td className="px-6 py-4 hidden xl:table-cell">
                    <span className="text-xs text-secondary/40">{product.updatedAt}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="relative inline-block">
                      <button
                        onClick={() => setOpenMenuId(openMenuId === product.id ? null : product.id)}
                        className="p-2 text-secondary/30 hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                      {openMenuId === product.id && (
                        <div className="absolute right-0 top-full mt-1 bg-white rounded-xl border border-secondary/10 shadow-xl z-30 min-w-[160px] py-1 animate-in fade-in slide-in-from-top-2 duration-150">
                          <button className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-secondary/60 hover:text-secondary hover:bg-secondary/5 transition-colors">
                            <Eye className="w-3.5 h-3.5" /> View
                          </button>
                          <button className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-secondary/60 hover:text-secondary hover:bg-secondary/5 transition-colors">
                            <Edit2 className="w-3.5 h-3.5" /> Edit
                          </button>
                          {product.status !== "PUBLISHED" && (
                            <button onClick={() => changeStatus(product.id, "PUBLISHED")} className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-emerald-600 hover:bg-emerald-50 transition-colors">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Publish
                            </button>
                          )}
                          {product.status !== "DRAFT" && (
                            <button onClick={() => changeStatus(product.id, "DRAFT")} className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-secondary/60 hover:bg-secondary/5 transition-colors">
                              <Clock className="w-3.5 h-3.5" /> Unpublish
                            </button>
                          )}
                          {product.status !== "ARCHIVED" && (
                            <button onClick={() => changeStatus(product.id, "ARCHIVED")} className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-amber-600 hover:bg-amber-50 transition-colors">
                              <Archive className="w-3.5 h-3.5" /> Archive
                            </button>
                          )}
                          <div className="border-t border-secondary/5 mt-1 pt-1">
                            <button onClick={() => deleteProduct(product.id)} className="flex items-center gap-3 w-full px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-red-500 hover:bg-red-50 transition-colors">
                              <Trash2 className="w-3.5 h-3.5" /> Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-secondary/5 flex justify-between items-center">
          <span className="text-xs text-secondary/40 font-bold uppercase tracking-widest">
            Showing {filtered.length} of {products.length} products
          </span>
          <div className="flex gap-1">
            <button className="w-9 h-9 rounded-lg text-xs font-bold bg-secondary text-white">1</button>
            <button className="w-9 h-9 rounded-lg text-xs font-bold text-secondary/40 hover:bg-secondary/5 transition-colors">2</button>
          </div>
        </div>
      </div>

      {/* Add Product Slide-Over */}
      {showAddForm && <AddProductForm onClose={() => setShowAddForm(false)} />}

      {/* Close dropdown on outside click */}
      {openMenuId && (
        <div className="fixed inset-0 z-20" onClick={() => setOpenMenuId(null)} />
      )}
    </div>
  );
}
