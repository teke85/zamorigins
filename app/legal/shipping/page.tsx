export default function ShippingPolicyPage() {
    return (
        <article className="prose prose-slate max-w-none">
            <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last Updated: February 2026</p>

            <h2>1. UK Domestic Shipping</h2>
            <p>ZamOrigins ships exclusively to the United Kingdom from our local fulfillment center. Orders are typically processed within 1-2 business days.</p>

            <h2>2. Shipping Rates</h2>
            <p>Our shipping rates are calculated based on the total weight of your cart:</p>
            <ul>
                <li><strong>Standard UK (Up to 2kg):</strong> £4.99</li>
                <li><strong>Medium Parcel (2kg - 5kg):</strong> £8.99</li>
                <li><strong>Heavy Parcel (Over 5kg):</strong> £12.99</li>
            </ul>

            <h2>3. Delivery Estimates</h2>
            <p>Standard delivery takes 2-4 working days after the order has been processed. You will receive a tracking link via email once your order has been dispatched.</p>

            <h2>4. International Sourcing transparency</h2>
            <p>While we ship to you from within the UK, our products are grown, harvested, and packaged in Zambia. We handle all the international shipping, customs, and import duties so you don't have to. The price you see at checkout is the final price.</p>

        </article>
    );
}
