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
        const { userId, sessionId } = await req.json();

        if (!userId || !sessionId) {
            return new Response(
                JSON.stringify({ success: false, error: 'Missing userId or sessionId' }),
                { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        console.log('Completing account setup for user:', userId);

        const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
            apiVersion: '2022-11-15',
            httpClient: Stripe.createFetchHttpClient(),
        });

        // Get session details from Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
            expand: ['subscription', 'customer']
        });

        const subscription = session.subscription as Stripe.Subscription;
        const customer = session.customer as Stripe.Customer;

        // Initialize Supabase client with service role key
        const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
        const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        // Calculate trial end date
        const trialEnd = subscription.trial_end
            ? new Date(subscription.trial_end * 1000)
            : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);

        // Save subscription to database
        const { data: subData, error: subError } = await supabase
            .from('subscriptions')
            .upsert({
                user_id: userId,
                stripe_customer_id: customer.id,
                stripe_subscription_id: subscription.id,
                plan_name: session.metadata?.planName || 'Professional',
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
            console.error('Failed to save subscription:', subError);
            throw new Error('Failed to save subscription to database');
        }

        console.log('Subscription saved:', subData);

        // Send welcome email via Brevo
        const brevoApiKey = Deno.env.get('BREVO_API_KEY');

        if (brevoApiKey && customer.email) {
            try {
                const formattedTrialEnd = trialEnd.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                });

                const planName = session.metadata?.planName || 'Professional';
                const planPrice = session.metadata?.planPrice || '197';

                await fetch('https://api.brevo.com/v3/smtp/email', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'api-key': brevoApiKey,
                    },
                    body: JSON.stringify({
                        sender: {
                            name: 'Yassine from GrowCheq',
                            email: 'hello@growcheq.com',
                        },
                        to: [{
                            email: customer.email,
                        }],
                        subject: '🎉 Welcome to GrowCheq - Your Free Trial is Active!',
                        htmlContent: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8f9fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Welcome to GrowCheq! 🎉</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Hi there,
                            </p>
                            <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Thank you for starting your free trial with GrowCheq! We're excited to help you grow your business.
                            </p>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border-radius: 8px; padding: 20px; margin: 30px 0;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 15px; color: #667eea; font-size: 20px; font-weight: 600;">Your Trial Details</h2>
                                        <p style="margin: 0 0 8px; color: #4b5563; font-size: 15px;">
                                            <strong style="color: #1f2937;">Plan:</strong> ${planName}
                                        </p>
                                        <p style="margin: 0 0 8px; color: #4b5563; font-size: 15px;">
                                            <strong style="color: #1f2937;">Price:</strong> £${planPrice}/month (after trial)
                                        </p>
                                        <p style="margin: 0; color: #4b5563; font-size: 15px;">
                                            <strong style="color: #1f2937;">Trial ends:</strong> ${formattedTrialEnd}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="https://growcheq.com/dashboard" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                                            Go to Dashboard →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            <p style="margin: 30px 0 20px; color: #4b5563; font-size: 15px; line-height: 1.6; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                                <strong style="color: #1f2937;">Remember:</strong> You have 14 days to explore all features completely free. No payment required until your trial ends.
                            </p>
                            <p style="margin: 0; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Best regards,<br>
                                <strong>Yassine from GrowCheq</strong>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 10px; color: #6b7280; font-size: 13px;">
                                GrowCheq - All-in-One Customer Engagement Platform
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `,
                    }),
                });

                console.log('Welcome email sent to:', customer.email);
            } catch (emailError) {
                console.error('Failed to send welcome email:', emailError);
                // Don't fail the request if email fails
            }
        }

        return new Response(
            JSON.stringify({ success: true }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error: any) {
        console.error('Complete account setup error:', error);
        return new Response(
            JSON.stringify({ success: false, error: error.message || 'Failed to complete setup' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
