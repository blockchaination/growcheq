import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.0.0?target=deno";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
    apiVersion: '2022-11-15',
    httpClient: Stripe.createFetchHttpClient(),
});

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, stripe-signature',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    const signature = req.headers.get('stripe-signature');
    if (!signature) {
        return new Response(
            JSON.stringify({ error: 'No signature' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    try {
        const body = await req.text();
        const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');

        if (!webhookSecret) {
            console.error('STRIPE_WEBHOOK_SECRET not set');
            return new Response(
                JSON.stringify({ error: 'Webhook secret not configured' }),
                { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        // Verify webhook signature
        const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

        console.log('Webhook event received:', event.type);

        // Handle different event types
        switch (event.type) {
            case 'checkout.session.completed':
                await handleCheckoutComplete(event.data.object as Stripe.Checkout.Session);
                break;

            case 'customer.subscription.created':
                await handleSubscriptionCreated(event.data.object as Stripe.Subscription);
                break;

            case 'customer.subscription.updated':
                await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
                break;

            case 'customer.subscription.deleted':
                await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
                break;

            case 'invoice.payment_succeeded':
                await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
                break;

            case 'invoice.payment_failed':
                await handlePaymentFailed(event.data.object as Stripe.Invoice);
                break;

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return new Response(
            JSON.stringify({ received: true }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error: any) {
        console.error('Webhook error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});

async function handleCheckoutComplete(session: Stripe.Checkout.Session) {
    const userId = session.metadata?.userId;
    const planName = session.metadata?.planName;

    if (!userId) {
        console.error('No userId in session metadata');
        return;
    }

    console.log(`Checkout completed for user ${userId}, plan ${planName}`);

    // Calculate trial end date (14 days from now)
    const trialEnd = new Date();
    trialEnd.setDate(trialEnd.getDate() + 14);

    // Save subscription to database
    const { error } = await supabase.from('subscriptions').insert({
        user_id: userId,
        stripe_customer_id: session.customer as string,
        stripe_subscription_id: session.subscription as string,
        plan_name: planName,
        status: 'trialing',
        trial_end: trialEnd.toISOString(),
    });

    if (error) {
        console.error('Failed to save subscription:', error);
    } else {
        console.log(`Subscription created for user ${userId}`);
    }
}

async function handleSubscriptionCreated(subscription: Stripe.Subscription) {
    console.log('Subscription created:', subscription.id);
    // Additional logic if needed
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
    const customerId = subscription.customer as string;

    console.log(`Subscription updated: ${subscription.id}, status: ${subscription.status}`);

    // Update subscription status in database
    const { error } = await supabase
        .from('subscriptions')
        .update({
            status: subscription.status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
        })
        .eq('stripe_customer_id', customerId);

    if (error) {
        console.error('Failed to update subscription:', error);
    }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
    const customerId = subscription.customer as string;

    console.log(`Subscription deleted: ${subscription.id}`);

    const { error } = await supabase
        .from('subscriptions')
        .update({
            status: 'canceled',
            canceled_at: new Date().toISOString(),
        })
        .eq('stripe_customer_id', customerId);

    if (error) {
        console.error('Failed to mark subscription as canceled:', error);
    }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
    console.log('Payment succeeded:', invoice.id);
    // Send success email via Brevo (optional)
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
    console.error('Payment failed:', invoice.id);
    // Send failed payment notification via Brevo
}
