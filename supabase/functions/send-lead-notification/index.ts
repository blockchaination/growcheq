import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

<<<<<<< HEAD
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
=======
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const ADMIN_EMAIL = "leads@growcheq.com";
const SENDER_NAME = "Ariana from GrowCheq";
const SENDER_EMAIL = "hello@growcheq.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
};

interface LeadNotification {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  interest_level: string;
  plan_name?: string;
  source_page?: string;
}

const sendEmail = async (to: { email: string; name?: string }[], subject: string, htmlContent: string, apiKey: string, sender: { name: string; email: string }) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: sender,
      to: to,
      subject: subject,
      htmlContent: htmlContent,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Brevo API Error: ${response.status} ${response.statusText} - ${errorText}`);
  }

  return await response.json();
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY');
    const SENDER_NAME = Deno.env.get('SENDER_NAME') || 'GrowCheq';
    const SENDER_EMAIL = Deno.env.get('SENDER_EMAIL') || 'hello@growcheq.com';
    const ADMIN_EMAIL = Deno.env.get('ADMIN_EMAIL') || 'hello@growcheq.com';

    if (!BREVO_API_KEY) {
      throw new Error('BREVO_API_KEY is not set');
    }

<<<<<<< HEAD
    const leadData: LeadNotification = await req.json();
    console.log("Processing lead notification for:", leadData.email);

    // 1. Customer Email Content
=======
    // Customer Email
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
    const customerHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(to right, #2f196d, #4865b7); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">GrowCheq</h1>
        </div>
<<<<<<< HEAD
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #2f196d;">Thanks for your interest, ${leadData.name}!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Hi there, I'm Ariana, the founder of GrowCheq. I'm thrilled you're interested in seeing how we can help you turn every interaction into revenue.
          </p>
          <h3 style="color: #4865b7; margin-top: 25px;">Here's what happens next:</h3>
          <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li style="margin-bottom: 10px;">I'll personally review your information</li>
            <li style="margin-bottom: 10px;">You'll hear from me within 24 hours</li>
            <li style="margin-bottom: 10px;">We'll schedule a personalized demo to show you around</li>
          </ul>
=======
        <div style="padding: 30px; background: white;">
          <h2 style="color: #2f196d; margin-bottom: 20px;">Thanks for your interest, ${leadData.name}!</h2>
          <p style="font-size: 16px; line-height: 1.6;">We're excited to help ${leadData.company || 'your business'} grow with GrowCheq.</p>
          <p style="font-size: 16px; line-height: 1.6;">One of our team members will reach out shortly to discuss how we can help.</p>
          <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">Best regards,<br><strong>Ariana</strong><br>Founder, GrowCheq</p>
        </div>
        <div style="padding: 20px; background: #f5f5f5; text-align: center; font-size: 14px; color: #666;">
          <p>© 2025 GrowCheq. All rights reserved.</p>
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
        </div>
      </div>
    `;

<<<<<<< HEAD
    const adminHtml = `
      <div style="font-family: sans-serif;">
        <h2 style="color: #2f196d;">New Lead: ${leadData.name} from ${leadData.company || 'Unknown Company'}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.company || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.phone || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Interest:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.interest_level}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Plan:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.plan_name || 'N/A'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.message ? leadData.message.replace(/\n/g, '<br>') : 'N/A'}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; color: #856404; border: 1px solid #ffeeba; border-radius: 4px;">
          <strong>Action Required:</strong> Reply within 1-2 hours for best conversion!
=======
    // Admin Email
    const adminHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(to right, #2f196d, #4865b7); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Alert</h1>
        </div>
        <div style="padding: 30px; background: white;">
          <h2 style="color: #2f196d; margin-bottom: 20px;">Lead Details</h2>
          <p><strong>Name:</strong> ${leadData.name}</p>
          <p><strong>Email:</strong> ${leadData.email}</p>
          <p><strong>Company:</strong> ${leadData.company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${leadData.phone || 'Not provided'}</p>
          <p><strong>Interest Level:</strong> ${leadData.interest_level}</p>
          <p><strong>Plan:</strong> ${leadData.plan_name || 'Not specified'}</p>
          <p><strong>Source Page:</strong> ${leadData.source_page || 'Not specified'}</p>
          ${leadData.message ? `<p><strong>Message:</strong><br>${leadData.message}</p>` : ''}
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
        </div>
      </div>
    `;

<<<<<<< HEAD
    // Send both emails in parallel
    const emailPromises = [
      sendEmail(
        [{ email: leadData.email, name: leadData.name }],
        "Thanks for Your Interest in GrowCheq!",
        customerHtml,
        BREVO_API_KEY,
        { name: SENDER_NAME, email: SENDER_EMAIL }
=======
    const emailPromises = [
      sendEmail(
        [{ email: leadData.email, name: leadData.name }],
        "Thanks for your interest in GrowCheq!",
        customerHtml
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
      ),
      sendEmail(
        [{ email: ADMIN_EMAIL }],
        `New Lead: ${leadData.name} from ${leadData.company || 'Unknown'}`,
<<<<<<< HEAD
        adminHtml,
        BREVO_API_KEY,
        { name: SENDER_NAME, email: SENDER_EMAIL }
=======
        adminHtml
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
      )
    ];

    await Promise.all(emailPromises);
    console.log("Both emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
<<<<<<< HEAD
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
=======
    console.error("Error in send-lead-notification function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
>>>>>>> 5d362f2e04d2d14af4cf99b82241f4f517399e88
  }
});
