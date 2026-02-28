import Link from "next/link";
import { CheckCircle2, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
    const fakeOrderNumber = `ZAM-${Math.floor(100000 + Math.random() * 900000)}`;

    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-10rem)] py-12">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <CheckCircle2 className="w-20 h-20 text-green-500" />
                </div>

                <h1 className="text-3xl font-bold tracking-tight">Order Confirmed!</h1>

                <p className="text-muted-foreground">
                    Thank you for choosing ZamOrigins. Your authentic Zambian dry foods are being prepared for dispatch.
                </p>

                <div className="bg-muted p-6 rounded-xl text-left mt-8">
                    <h2 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Order Information</h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Order Number:</span>
                            <span className="font-bold">{fakeOrderNumber}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-medium">Total Paid:</span>
                            <span className="font-bold">£30.96</span>
                        </div>
                        <div className="flex justify-between pt-1">
                            <span className="font-medium">Est. Delivery:</span>
                            <span className="font-bold text-primary">In 2-4 working days</span>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="w-full sm:w-auto">
                        <Link href="/track">
                            <Package className="mr-2 w-4 h-4" /> Track Order
                        </Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full sm:w-auto">
                        <Link href="/shop">
                            Continue Shopping <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
