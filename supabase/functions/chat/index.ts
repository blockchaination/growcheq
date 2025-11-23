import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SYSTEM_PROMPT = `
You are a helpful AI assistant for GrowCheq, a UK-based customer engagement platform.

ABOUT GROWCHEQ:
All-in-one platform for UK SMEs to manage customer communications
Replaces 10+ separate tools (CRM, email, SMS, reviews, payments)
Saves businesses £683/month compared to using separate tools
Founded by Ariana Clarke
Website: growcheq.com

PRICING PLANS:
Essential: £79/month
- Up to 5,000 email contacts
- 500 SMS messages/month
- Basic features: CRM, email marketing, SMS, booking, automations

Professional: £197/month (MOST POPULAR)
- Up to 25,000 contacts
- 2,500 SMS messages/month
- Everything in Essential PLUS: reputation management, call tracking, advanced automations, courses, communities

Enterprise: £347/month
- Unlimited contacts and messages
- Everything in Professional PLUS: white-label mobile app, priority support, dedicated account manager

KEY FEATURES:
Unified Inbox: Manage SMS, WhatsApp, Facebook, calls, emails in one place
AI-Powered Automation: Auto-qualify leads, send follow-ups, request reviews
Instant Payments: Send payment links via text
Review Management: Collect and display customer reviews
Call Tracking & Recording: Track all customer calls
Analytics Dashboard: Real-time business insights

FREE TRIAL:
14-day free trial
No credit card required
Full access to all features

TARGET CUSTOMERS:
UK businesses in: Automotive, Salons & Beauty, Home Services (plumbing, HVAC), Retail, Healthcare, Professional Services

YOUR ROLE:
Answer questions about GrowCheq features, pricing, and how it works
Be friendly, helpful, and concise (2-3 sentences max per response)
If asked to book a demo or start trial, collect: name, email, company
If you can't answer something, offer to connect them with our team
Always mention UK focus and cost savings (£683/month vs separate tools)
Use British English spellings (optimise, colour, etc.)

TONE:
Friendly and professional
Enthusiastic but not pushy
Clear and concise
Use emojis sparingly (only when appropriate)

RESPONSES SHOULD BE:
2-3 sentences maximum
Direct and actionable
Include relevant links when helpful
Ask clarifying questions if needed

If someone wants to:
Book demo → Collect name, email, company
Start trial → Direct to website or collect details
Ask about specific industry → Explain industry-specific benefits
Compare to competitors → Highlight all-in-one approach and cost savings
`;

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { message, conversationHistory } = await req.json();
        const apiKey = Deno.env.get('LOVABLE_API_KEY');

        if (!apiKey) {
            throw new Error('LOVABLE_API_KEY is not set');
        }

        // Construct messages array
        const messages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...(conversationHistory || []),
            { role: "user", content: message }
        ];

        const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'google/gemini-2.5-flash',
                messages: messages,
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Lovable AI error:', response.status, data);
            throw new Error(data.error?.message || 'Failed to fetch from Lovable AI');
        }

        const generatedText = data.choices[0].message.content;

        return new Response(
            JSON.stringify({ response: generatedText }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
