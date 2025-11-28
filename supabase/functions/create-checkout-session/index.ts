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
    const { planName, planPrice } = await req.json();

    // Validate inputs
    if (!planName || !planPrice) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2022-11-15',
      httpClient: Stripe.createFetchHttpClient(),
    });

    // Get base URL from environment or request origin
    const baseUrl = Deno.env.get('VITE_BASE_URL') || req.headers.get('origin') || 'http://localhost:5173';

    // Create Checkout Session for subscription with trial
    // Stripe will collect email - no pre-existing user required
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      billing_address_collection: 'auto', // Stripe collects email and billing info
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            unit_amount: planPrice * 100, // Convert £79 to 7900 pence
            recurring: {
              interval: 'month',
            },
            product_data: {
              name: `GrowCheq ${planName} Plan`,
              description: `${planName} subscription with 14-day free trial`,
            },
          },
          quantity: 1,
        },
      ],
      subscription_data: {
        trial_period_days: 14,
        metadata: {
          planName,
          planPrice: planPrice.toString(),
        },
      },
      success_url: `${baseUrl}/setup-account?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/pricing?canceled=true`,
      metadata: {
        planName,
        planPrice: planPrice.toString(),
      },
    });

    console.log('Stripe session created:', { id: session.id, url: session.url, hasUrl: !!session.url });

    if (!session.url) {
      console.error('Stripe session missing URL:', session);
      return new Response(
        JSON.stringify({ error: 'Failed to create checkout session URL' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
