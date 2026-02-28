import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        {/* Fallback background if image doesn't load */}
        <div className="absolute inset-0 bg-secondary/90 z-0"></div>
        {/* Placeholder for Hero Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>

        <div className="container relative z-20 text-white space-y-6 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Authentic Zambian Dry Foods, <br />
            <span className="text-primary">Delivered to the UK.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Experience the rich, premium tastes of Zambia. Ethically sourced, perfectly preserved, and brought straight to your kitchen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto text-lg" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white hover:text-black" asChild>
              <Link href="/subscription">Taste of Home Box</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose ZamOrigins?</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We bridge the gap between Zambian farmers and your UK kitchen, ensuring quality at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl shadow-sm border text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">100% Authentic</h3>
              <p className="text-muted-foreground">Sourced directly from local Zambian farmers. No artificial preserves.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-sm border text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">Rigorous quality checks ensure you get only the best ingredients.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-sm border text-center space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Fast UK Delivery</h3>
              <p className="text-muted-foreground">Stocked locally in the UK for quick and reliable shipping to your door.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold">Shop by Category</h2>
              <p className="text-muted-foreground mt-2">Explore our core selections</p>
            </div>
            <Link href="/shop" className="hidden sm:flex items-center text-primary font-medium hover:underline">
              View All <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {['Grains & Beans', 'Spices & Seasonings', 'Dried Vegetables', 'Snacks'].map((category, i) => (
              <Link href={`/shop?category=${encodeURIComponent(category.toLowerCase())}`} key={i} className="group relative rounded-2xl overflow-hidden aspect-square bg-muted flex items-center justify-center">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply group-hover:bg-secondary/60 transition-colors z-10"></div>
                <div className="relative z-20 text-center p-4">
                  <h3 className="text-white font-bold text-xl md:text-2xl">{category}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Join the ZamOrigins Family</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, authentic recipes, and updates on our Taste of Home Box.
          </p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
            <Button size="lg" variant="secondary" className="bg-secondary text-white hover:bg-secondary/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
