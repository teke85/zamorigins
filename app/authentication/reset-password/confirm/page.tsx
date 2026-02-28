import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ResetPasswordConfirmPage() {
    return (
        <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center pt-8 border-t border-dashed">
                    <h1 className="text-2xl font-semibold tracking-tight">Set new password</h1>
                    <p className="text-sm text-muted-foreground">
                        Your identity has been confirmed. Please set your new password below.
                    </p>
                </div>

                <div className="grid gap-6">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid gap-4">
                            <div className="grid gap-1">
                                <label className="text-sm font-medium leading-none" htmlFor="password">
                                    New Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                    required
                                />
                            </div>
                            <div className="grid gap-1">
                                <label className="text-sm font-medium leading-none" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                                    required
                                />
                            </div>

                            <Button type="submit" asChild>
                                <Link href="/authentication/login">Update Password</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
