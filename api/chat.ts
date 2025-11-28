import { GoogleGenerativeAI } from "@google/generative-ai";

export const config = {
    runtime: 'edge',
};

const SYSTEM_PROMPT = `
You are a helpful AI assistant for GrowCheq, a UK-based customer engagement platform.

ABOUT GROWCHEQ:
All-in-one platform for UK SMEs to manage customer communications
Replaces 10+ separate tools (CRM, email, SMS, reviews, payments)
Saves businesses £683/month compared to using separate tools
Founded by Yassine Anaddam
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

export default async function handler(req: Request) {
    if (req.method === 'OPTIONS') {
        return new Response('ok', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            }
        });
    }

    try {
        const { message, conversationHistory } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY || "AIzaSyDwmLKEd9a2SNKSC0ohE0tVzleSmqHXzb0";

        if (!apiKey) {
            throw new Error('GEMINI_API_KEY is not set');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: SYSTEM_PROMPT,
        });

        // Convert history to Gemini format
        const history = (conversationHistory || []).map((msg: any) => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        const chat = model.startChat({
            history: history,
            generationConfig: {
                maxOutputTokens: 500,
                temperature: 0.7,
            },
        });

        const result = await chat.sendMessage(message);
        const response = result.response.text();

        return new Response(
            JSON.stringify({ response }),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }
        );

    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }
        );
    }
}
