import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { message, conversationHistory } = await req.json();
        const apiKey = Deno.env.get('HUGGINGFACE_API_KEY');

        if (!apiKey) {
            throw new Error('HUGGINGFACE_API_KEY is not set');
        }

        // Build messages array for OpenAI-compatible endpoint
        const messages = [
            {
                role: "system",
                content: `You are a helpful AI assistant for GrowCheq, a UK-based customer engagement platform.

ABOUT GROWCHEQ:
- All-in-one platform for UK SMEs to manage customer communications
- Replaces 10+ separate tools (CRM, email, SMS, reviews, payments, call tracking)
- Saves businesses £683/month compared to using separate tools
- 14-day free trial, no credit card required
- Founded by Yassine Anaddam and Eesa Badat
- Website: growcheq.com

PRICING PLANS:
1. Essential - £79/month
   • 5,000 email contacts, 500 SMS/month
   • CRM, email marketing, SMS, booking, basic automations

2. Professional - £197/month (MOST POPULAR)
   • 25,000 contacts, 2,500 SMS/month
   • Everything in Essential PLUS: reputation management, call tracking, advanced automations, courses, communities

3. Enterprise - £347/month
   • Unlimited contacts and messages
   • Everything in Professional PLUS: white-label mobile app, priority support, dedicated account manager

KEY FEATURES:
- Unified Inbox: All messages (SMS, WhatsApp, Facebook, calls, email) in one place
- AI Automation: Auto-qualify leads, send follow-ups, request reviews
- Instant Payments: Send payment links via text
- Review Management: Collect and manage reviews
- Call Tracking: Track and record calls
- Analytics: Real-time dashboards

TARGET INDUSTRIES:
Automotive, Salons & Beauty, Home Services, Retail, Healthcare, Professional Services

YOUR ROLE:
- Answer questions about GrowCheq concisely (2-3 sentences max)
- Be friendly and professional
- If asked to book demo or start trial, request: name, email, company
- Emphasize UK focus and £683/month savings
- Use British English

KEEP RESPONSES SHORT: Maximum 2-3 sentences per response!`
            }
        ];

        // Add conversation history (last 6 messages)
        if (conversationHistory && Array.isArray(conversationHistory)) {
            conversationHistory.slice(-6).forEach((msg: any) => {
                messages.push({
                    role: msg.role === 'assistant' ? 'assistant' : 'user',
                    content: msg.content
                });
            });
        }

        // Add current message
        messages.push({
            role: "user",
            content: message
        });

        // Call Hugging Face OpenAI-compatible API
        const response = await fetch(
            'https://router.huggingface.co/v1/chat/completions',
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "meta-llama/Meta-Llama-3-8B-Instruct",
                    messages: messages,
                    max_tokens: 300,
                    temperature: 0.7,
                    stream: false
                })
            }
        );

        // Handle cold start (503)
        if (response.status === 503) {
            return new Response(
                JSON.stringify({
                    response: "I'm warming up... This first message takes a moment. Please try again in 10 seconds!",
                    isLoading: true
                }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            );
        }

        if (!response.ok) {
            const errorText = await response.text();
            console.error('HuggingFace API error:', response.status, errorText);
            throw new Error(`API request failed: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

        return new Response(
            JSON.stringify({ response: botResponse }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error('Chatbot API error:', error);

        // Keep debug mode for now to be safe, or revert to friendly?
        // Let's revert to friendly since we verified it works.
        return new Response(
            JSON.stringify({
                response: "I'm having trouble connecting right now. Please try again or email us at hello@growcheq.com for immediate help!"
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
});
