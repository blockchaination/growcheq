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
    const planPrice = session.metadata?.planPrice;
    const customerEmail = session.customer_email;

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

    // Send welcome email via Brevo
    if (customerEmail) {
        await sendWelcomeEmail(customerEmail, planName || 'Professional', planPrice || '197', trialEnd);
    }
}

async function sendWelcomeEmail(email: string, planName: string, planPrice: string, trialEnd: Date) {
    const brevoApiKey = Deno.env.get('BREVO_API_KEY');
    
    if (!brevoApiKey) {
        console.error('BREVO_API_KEY not configured');
        return;
    }

    const formattedTrialEnd = trialEnd.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to GrowCheq</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8f9fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Header with gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Welcome to GrowCheq! 🎉</h1>
                        </td>
                    </tr>
                    
                    <!-- Main content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Hi there,
                            </p>
                            
                            <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Thank you for starting your free trial with GrowCheq! We're excited to help you grow your business with our all-in-one customer engagement platform.
                            </p>
                            
                            <!-- Subscription details box -->
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
                            
                            <h3 style="margin: 30px 0 15px; color: #1f2937; font-size: 18px; font-weight: 600;">What's Next?</h3>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                        <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                                            <strong style="color: #667eea;">1.</strong> <strong style="color: #1f2937;">Log in to your account</strong> and explore your dashboard
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                        <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                                            <strong style="color: #667eea;">2.</strong> <strong style="color: #1f2937;">Import your contacts</strong> to start engaging with your customers
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                                        <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                                            <strong style="color: #667eea;">3.</strong> <strong style="color: #1f2937;">Set up your first campaign</strong> using our ready-made templates
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0;">
                                        <p style="margin: 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                                            <strong style="color: #667eea;">4.</strong> <strong style="color: #1f2937;">Book a demo call</strong> with our team for personalized onboarding
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="https://growcheq.com/profile" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 16px;">
                                            Go to Dashboard →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 30px 0 20px; color: #4b5563; font-size: 15px; line-height: 1.6; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                                <strong style="color: #1f2937;">Remember:</strong> You have 14 days to explore all features completely free. No payment required until your trial ends. Cancel anytime if it's not right for you.
                            </p>
                            
                            <p style="margin: 0 0 20px; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Need help? Just reply to this email – I'm here to support you!
                            </p>
                            
                            <p style="margin: 0; color: #1f2937; font-size: 16px; line-height: 1.6;">
                                Best regards,<br>
                                <strong>Ariana from GrowCheq</strong>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 10px; color: #6b7280; font-size: 13px;">
                                GrowCheq - All-in-One Customer Engagement Platform
                            </p>
                            <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                                You're receiving this email because you started a free trial with GrowCheq.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;

    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': brevoApiKey,
            },
            body: JSON.stringify({
                sender: {
                    name: 'Ariana from GrowCheq',
                    email: 'hello@growcheq.com',
                },
                to: [
                    {
                        email: email,
                    },
                ],
                subject: '🎉 Welcome to GrowCheq - Your Free Trial is Active!',
                htmlContent: htmlContent,
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Failed to send welcome email:', errorData);
        } else {
            console.log('Welcome email sent successfully to:', email);
        }
    } catch (error) {
        console.error('Error sending welcome email:', error);
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
