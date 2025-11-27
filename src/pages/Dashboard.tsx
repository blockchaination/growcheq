import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

interface SubscriptionData {
    planName: string;
    email: string;
    trialEnd: string;
    status: string;
}

export default function Dashboard() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const sessionId = searchParams.get('session_id');
    const success = searchParams.get('success');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null);

    useEffect(() => {
        if (sessionId && success === 'true') {
            verifyCheckoutSession();
        } else {
            setLoading(false);
        }
    }, [sessionId, success]);

    const verifyCheckoutSession = async () => {
        try {
            console.log('Verifying session:', sessionId);

            // Call Supabase function to verify session
            const { data, error: functionError } = await supabase.functions.invoke(
                'verify-checkout',
                {
                    body: { sessionId }
                }
            );

            if (functionError) throw functionError;

            if (data?.success) {
                setSubscriptionData(data.subscription);

                // Clear URL params after 5 seconds and redirect to main dashboard
                setTimeout(() => {
                    navigate('/dashboard', { replace: true });
                }, 5000);
            } else {
                setError(data?.error || 'Failed to verify checkout');
            }
        } catch (err: any) {
            console.error('Verification error:', err);
            setError(err.message || 'Failed to verify checkout session');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="flex items-center justify-center min-h-[80vh]">
                    <div className="text-center space-y-4">
                        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
                        <h2 className="text-2xl font-heading font-bold">Setting up your account...</h2>
                        <p className="text-muted-foreground">This will only take a moment</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-16 lg:py-24">
                {/* Success Message */}
                {subscriptionData && (
                    <div className="max-w-2xl mx-auto">
                        <Card className="border-4 border-green-200 bg-green-50">
                            <CardContent className="p-8">
                                <div className="text-center space-y-6">
                                    <div className="flex justify-center">
                                        <div className="rounded-full bg-green-100 p-4">
                                            <CheckCircle2 className="h-16 w-16 text-green-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="text-3xl lg:text-4xl font-heading font-bold text-green-900 mb-3">
                                            🎉 Welcome to GrowCheq!
                                        </h1>
                                        <p className="text-lg text-green-700">
                                            Your 14-day free trial has started successfully
                                        </p>
                                    </div>

                                    <Card className="bg-white">
                                        <CardContent className="p-6 space-y-3">
                                            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wide">
                                                Trial Details
                                            </p>
                                            <div className="space-y-2 text-left">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-muted-foreground">Plan:</span>
                                                    <span className="font-bold text-lg">{subscriptionData.planName}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-muted-foreground">Email:</span>
                                                    <span className="font-medium">{subscriptionData.email}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-muted-foreground">Trial ends:</span>
                                                    <span className="font-medium">
                                                        {new Date(subscriptionData.trialEnd).toLocaleDateString('en-GB', {
                                                            day: 'numeric',
                                                            month: 'long',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-muted-foreground">Status:</span>
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                                                        {subscriptionData.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="bg-white rounded-lg p-6 space-y-3 text-left">
                                        <p className="font-semibold text-green-900">✓ What's included:</p>
                                        <ul className="space-y-2 text-sm text-green-700">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <span>Welcome email sent to {subscriptionData.email}</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <span>Full access to all {subscriptionData.planName} features</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <span>No charges until your trial ends</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                                <span>Cancel anytime - no questions asked</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-4">
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Redirecting to your dashboard in a few seconds...
                                        </p>
                                        <Button
                                            onClick={() => navigate('/dashboard', { replace: true })}
                                            variant="gradient"
                                            size="lg"
                                            className="w-full sm:w-auto"
                                        >
                                            Go to Dashboard Now →
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="max-w-2xl mx-auto">
                        <Card className="border-2 border-red-200 bg-red-50">
                            <CardContent className="p-8">
                                <div className="text-center space-y-6">
                                    <div className="flex justify-center">
                                        <div className="rounded-full bg-red-100 p-4">
                                            <XCircle className="h-16 w-16 text-red-600" />
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className="text-2xl font-heading font-bold text-red-900 mb-3">
                                            Verification Failed
                                        </h1>
                                        <p className="text-red-700 mb-4">{error}</p>
                                        <p className="text-sm text-red-600">
                                            Please contact support at{' '}
                                            <a href="mailto:hello@growcheq.com" className="underline font-medium">
                                                hello@growcheq.com
                                            </a>
                                        </p>
                                    </div>

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
                )}

                {/* Default Dashboard Content (when no success param) */}
                {!subscriptionData && !error && !loading && (
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-heading font-bold mb-8">Your Dashboard</h1>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-2">Quick Start Guide</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Get started with GrowCheq in 5 minutes
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-2">Connect Channels</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Link your SMS, email, and social accounts
                                    </p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lg mb-2">Support</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Need help? We're here 24/7
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
