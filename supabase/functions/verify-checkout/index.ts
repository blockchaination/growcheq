import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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

        console.log('Verifying checkout session:', sessionId);

        const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
            apiVersion: '2022-11-15',
            httpClient: Stripe.createFetchHttpClient(),
        });

        // Retrieve session from Stripe with expanded subscription and customer
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['subscription', 'customer']
        });

        if (!session || session.payment_status !== 'paid') {
            return new Response(
                JSON.stringify({ success: false, error: 'Invalid or incomplete session' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        const subscription = session.subscription as Stripe.Subscription;
        const customer = session.customer as Stripe.Customer;
        const userId = session.metadata?.userId;
        const planName = session.metadata?.planName;
        const planPrice = session.metadata?.planPrice;

        console.log('Session verified:', {
            customerId: customer.id,
            subscriptionId: subscription.id,
            status: subscription.status,
            userId
        });

        // Calculate trial end date
        const trialEnd = subscription.trial_end
            ? new Date(subscription.trial_end * 1000)
            : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

        // Initialize Supabase client with service role key
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        // Save/update subscription in database (upsert to handle webhook race condition)
        const { data: subData, error: subError } = await supabase
            .from('subscriptions')
            .upsert({
                user_id: userId,
                stripe_customer_id: customer.id,
                stripe_subscription_id: subscription.id,
                plan_name: planName,
                status: subscription.status,
                trial_end: trialEnd.toISOString(),
                current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
                current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            }, {
                onConflict: 'user_id',
                ignoreDuplicates: false
            })
            .select()
            .single();

        if (subError) {
            console.error('Supabase error:', subError);
            // Don't fail the request - webhook will handle it
        } else {
            console.log('Subscription saved to Supabase:', subData);
        }

        // Return success with subscription data
        return new Response(
            JSON.stringify({
                success: true,
                subscription: {
                    planName,
                    email: session.customer_email,
                    trialEnd: trialEnd.toISOString(),
                    status: subscription.status,
                    customerId: customer.id,
                    subscriptionId: subscription.id
                }
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error: any) {
        console.error('Verify checkout error:', error);
        return new Response(
            JSON.stringify({ success: false, error: error.message || 'Failed to verify session' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
