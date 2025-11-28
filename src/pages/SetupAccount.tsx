import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

interface SessionData {
    email: string;
    customerName: string;
    customerId: string;
    subscriptionId: string;
    planName: string;
    planPrice: string;
    trialEnd: string;
    status: string;
}

export default function SetupAccount() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const sessionId = searchParams.get('session_id');

    const [loading, setLoading] = useState(true);
    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    useEffect(() => {
        if (sessionId) {
            verifySession();
        } else {
            setError('No session found');
            setLoading(false);
        }
    }, [sessionId]);

    const verifySession = async () => {
        try {
            console.log('Verifying session:', sessionId);

            // Call Supabase function to verify Stripe session
            const { data, error: functionError } = await supabase.functions.invoke(
                'verify-stripe-session',
                {
                    body: { sessionId }
                }
            );

            if (functionError) throw functionError;

            if (data?.success) {
                setSessionData(data);
                console.log('Session verified:', data);
            } else {
                setError(data?.error || 'Invalid session');
            }
        } catch (err: any) {
            console.error('Verification error:', err);
            setError(err.message || 'Failed to verify session');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateAccount = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters');
            return;
        }

        setIsCreatingAccount(true);
        setError('');

        try {
            console.log('Creating account for:', sessionData?.email);

            // Create Supabase account
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: sessionData!.email,
                password: password,
                options: {
                    data: {
                        full_name: sessionData!.customerName || '',
                        stripe_customer_id: sessionData!.customerId,
                        subscription_id: sessionData!.subscriptionId,
                        plan: sessionData!.planName,
                    },
                    emailRedirectTo: undefined, // Prevent email confirmation
                }
            });

            if (authError) throw authError;

            if (!authData.user) {
                throw new Error('Failed to create account');
            }

            console.log('Account created, completing setup...');

            // Complete account setup on backend
            const { data: setupData, error: setupError } = await supabase.functions.invoke(
                'complete-account-setup',
                {
                    body: {
                        userId: authData.user.id,
                        sessionId,
                    }
                }
            );

            if (setupError) throw setupError;

            if (!setupData?.success) {
                throw new Error('Failed to complete account setup');
            }

            console.log('Setup complete, redirecting to dashboard...');

            // Redirect to dashboard with welcome message
            navigate('/dashboard?welcome=true', { replace: true });

        } catch (err: any) {
            console.error('Account creation error:', err);
            setError(err.message || 'Failed to create account. Please contact support.');
            setIsCreatingAccount(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
                <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-lg text-muted-foreground">Verifying your payment...</p>
                </div>
            </div>
        );
    }

    if (error && !sessionData) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-white to-blue-50">
                <Card className="border-2 border-red-200 bg-red-50 max-w-md">
                    <CardContent className="p-8">
                        <div className="text-center space-y-4">
                            <div className="flex justify-center">
                                <div className="rounded-full bg-red-100 p-4">
                                    <XCircle className="h-12 w-12 text-red-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-heading font-bold text-red-800">Error</h2>
                            <p className="text-red-700">{error}</p>
                            <Button
                                onClick={() => navigate('/pricing')}
                                variant="outline"
                            >
                                ← Back to Pricing
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-white to-blue-50">
            <Card className="max-w-md w-full shadow-2xl">
                <CardContent className="p-8">
                    <div className="text-center mb-6">
                        <div className="flex justify-center mb-4">
                            <div className="rounded-full bg-green-100 p-4">
                                <CheckCircle2 className="h-12 w-12 text-green-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-heading font-bold mb-2">Payment Successful!</h1>
                        <p className="text-muted-foreground">
                            Your 14-day free trial has started
                        </p>
                    </div>

                    <Card className="bg-blue-50 border-blue-200 mb-6">
                        <CardContent className="p-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Email:</span>
                                <span className="font-medium">{sessionData?.email}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Plan:</span>
                                <span className="font-medium">{sessionData?.planName}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Trial ends:</span>
                                <span className="font-medium">
                                    {sessionData?.trialEnd && new Date(sessionData.trialEnd).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    <form onSubmit={handleCreateAccount} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="password">Create Password</Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                minLength={8}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Min. 8 characters"
                                disabled={isCreatingAccount}
                            />
                            <p className="text-xs text-muted-foreground">
                                Must include uppercase, lowercase, number, and special character
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Re-enter password"
                                disabled={isCreatingAccount}
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-800 text-sm">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isCreatingAccount}
                            variant="gradient"
                            size="lg"
                            className="w-full"
                        >
                            {isCreatingAccount ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                'Complete Setup →'
                            )}
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                            By continuing, you agree to our Terms of Service and Privacy Policy
                        </p>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
