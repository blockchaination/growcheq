import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
const ADMIN_EMAIL = "leads@growcheq.com";
const SENDER_NAME = "Ariana from GrowCheq";
const SENDER_EMAIL = "hello@growcheq.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
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

const sendEmail = async (to: { email: string; name?: string }[], subject: string, htmlContent: string) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": BREVO_API_KEY!,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: SENDER_NAME, email: SENDER_EMAIL },
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
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadNotification = await req.json();
    console.log("Processing lead notification for:", leadData.email);

    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not set");
    }

    // Customer Email
    const customerHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(to right, #2f196d, #4865b7); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">GrowCheq</h1>
        </div>
        <div style="padding: 30px; background: white;">
          <h2 style="color: #2f196d; margin-bottom: 20px;">Thanks for your interest, ${leadData.name}!</h2>
          <p style="font-size: 16px; line-height: 1.6;">We're excited to help ${leadData.company || 'your business'} grow with GrowCheq.</p>
          <p style="font-size: 16px; line-height: 1.6;">One of our team members will reach out shortly to discuss how we can help.</p>
          <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">Best regards,<br><strong>Ariana</strong><br>Founder, GrowCheq</p>
        </div>
        <div style="padding: 20px; background: #f5f5f5; text-align: center; font-size: 14px; color: #666;">
          <p>© 2025 GrowCheq. All rights reserved.</p>
        </div>
      </div>
    `;

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
        </div>
      </div>
    `;

    const emailPromises = [
      sendEmail(
        [{ email: leadData.email, name: leadData.name }],
        "Thanks for your interest in GrowCheq!",
        customerHtml
      ),
      sendEmail(
        [{ email: ADMIN_EMAIL }],
        `New Lead: ${leadData.name} from ${leadData.company || 'Unknown'}`,
        adminHtml
      )
    ];

    await Promise.all(emailPromises);
    console.log("Both emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error in send-lead-notification function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
