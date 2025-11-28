import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { sessionId } = await req.json();

        if (!sessionId) {
            return new Response(
                JSON.stringify({ success: false, error: 'No session ID provided' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        console.log('Verifying Stripe session:', sessionId);

        const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
            apiVersion: '2022-11-15',
            httpClient: Stripe.createFetchHttpClient(),
        });

        // Retrieve session from Stripe with expanded customer and subscription
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['customer', 'subscription']
        });

        if (!session || session.payment_status !== 'paid') {
            return new Response(
                JSON.stringify({ success: false, error: 'Payment not completed or session invalid' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        const customer = session.customer as Stripe.Customer;
        const subscription = session.subscription as Stripe.Subscription;

        console.log('Session verified successfully:', {
            customerId: customer.id,
            email: customer.email,
            subscriptionId: subscription.id
        });

        // Return customer and subscription details
        return new Response(
            JSON.stringify({
                success: true,
                email: customer.email,
                customerName: customer.name || '',
                customerId: customer.id,
                subscriptionId: subscription.id,
                planName: session.metadata?.planName || 'Professional',
                planPrice: session.metadata?.planPrice || '197',
                trialEnd: subscription.trial_end
                    ? new Date(subscription.trial_end * 1000).toISOString()
                    : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
                status: subscription.status,
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error: any) {
        console.error('Session verification error:', error);
        return new Response(
            JSON.stringify({ success: false, error: error.message || 'Failed to verify session' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
