import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>

                <div className="grid gap-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-4">
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
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                />
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium leading-none" htmlFor="password">
                                        Password
                                    </label>
                                    <Link href="/authentication/reset-password" className="text-sm text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    required
                                />
                            </div>
                            <Button type="submit">Sign In</Button>
                        </div>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
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
                    Don&apos;t have an account?{" "}
                    <Link href="/authentication/register" className="underline underline-offset-4 hover:text-primary">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
