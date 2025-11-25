import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { stripePromise } from "@/integrations/stripe/stripe-promise";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

interface CheckoutFlowProps {
    planName: "Essential" | "Professional" | "Enterprise";
    planPrice: number;
    isOpen: boolean;
    onClose: () => void;
}

export const CheckoutFlow = ({
    planName,
    planPrice,
    isOpen,
    onClose,
}: CheckoutFlowProps) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullName: "",
        company: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Step 1: Create user account in Supabase
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        full_name: formData.fullName,
                        company: formData.company,
                    },
                },
            });

            if (authError) throw authError;
            if (!authData.user) throw new Error("Failed to create account");

            // Step 2: Create Stripe Checkout Session
            const { data, error: functionError } = await supabase.functions.invoke(
                "create-checkout-session",
                {
                    body: {
                        planName,
                        planPrice,
                        userId: authData.user.id,
                        email: formData.email,
                        customerName: formData.fullName,
                    },
                }
            );

            if (functionError) throw functionError;
            if (!data?.sessionId) throw new Error("No session ID returned");

            // Step 3: Redirect to Stripe Checkout
            if (data?.url) {
                console.log("Redirecting to Stripe:", data.url);
                window.location.href = data.url;
            } else {
                console.error("Checkout response missing URL:", data);
                throw new Error("Stripe checkout URL not available. Please try again.");
            }
        } catch (err: any) {
            console.error("Checkout error:", err);
            setError(err.message || "Failed to start checkout. Please try again.");
            setIsLoading(false);

            toast({
                title: "Checkout Failed",
                description: err.message || "Failed to start checkout. Please try again.",
                variant: "destructive",
            });
        }
    };

    const handleClose = () => {
        if (!isLoading) {
            setFormData({ email: "", password: "", fullName: "", company: "" });
            setError("");
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-heading">
                        Start Your Free Trial
                    </DialogTitle>
                    <DialogDescription>
                        {planName} Plan - £{planPrice}/month after 14-day trial
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            minLength={8}
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                            placeholder="Min. 8 characters"
                            disabled={isLoading}
                        />
                        <p className="text-xs text-muted-foreground">
                            Must include uppercase, lowercase, number, and special character
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) =>
                                setFormData({ ...formData, fullName: e.target.value })
                            }
                            placeholder="John Smith"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) =>
                                setFormData({ ...formData, company: e.target.value })
                            }
                            placeholder="Your Company Ltd"
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-destructive text-sm">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full"
                        variant="gradient"
                        size="lg"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Starting Trial...
                            </>
                        ) : (
                            "Start Free Trial →"
                        )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                        No charge for 14 days. Cancel anytime.
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    );
};
