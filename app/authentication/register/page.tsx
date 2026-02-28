import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your details below to create your account
                    </p>
                </div>

                <div className="grid gap-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-1">
                                    <label className="text-sm font-medium leading-none" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                        required
                                    />
                                </div>
                                <div className="grid gap-1">
                                    <label className="text-sm font-medium leading-none" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium leading-none" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                    required
                                />
                            </div>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium leading-none" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                    required
                                />
                                {/* Visual Password Strength Indicator Placeholder */}
                                <div className="h-1 w-full bg-muted mt-2 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary/30 w-1/3"></div>
                                </div>
                                <span className="text-[10px] text-muted-foreground mt-1">Password must be at least 8 characters.</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                                <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" required />
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Accept terms and conditions
                                </label>
                            </div>
                            <Button type="submit" className="mt-2">Create Account</Button>
                        </div>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or sign up with
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" type="button">
                            Google
                        </Button>
                        <Button variant="outline" type="button">
                            Apple
                        </Button>
                    </div>
                </div>

                <p className="px-8 text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/authentication/login" className="underline underline-offset-4 hover:text-primary">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
