import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

const sendEmail = async (
  to: { email: string; name?: string }[],
  subject: string,
  htmlContent: string,
  apiKey: string,
  sender: { name: string; email: string }
) => {
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
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");
    const SENDER_NAME = "Yassine from GrowCheq";
    const SENDER_EMAIL = "hello@growcheq.com";
    const ADMIN_EMAIL = "sales@growcheq.com";

    if (!BREVO_API_KEY) {
      throw new Error("BREVO_API_KEY is not set");
    }

    const leadData: LeadNotification = await req.json();
    console.log("Processing lead notification for:", leadData.email);

    // Customer Email Content
    const customerHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(to right, #2f196d, #4865b7); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">GrowCheq</h1>
        </div>
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #2f196d;">Thanks for your interest, ${leadData.name}!</h2>
          <p style="font-size: 16px; line-height: 1.6;">
            Hi there, I'm Yassine, the founder of GrowCheq. I'm thrilled you're interested in seeing how we can help you turn every interaction into revenue.
          </p>
          <h3 style="color: #4865b7; margin-top: 25px;">Here's what happens next:</h3>
          <ul style="font-size: 16px; line-height: 1.6; padding-left: 20px;">
            <li style="margin-bottom: 10px;">I'll personally review your information</li>
            <li style="margin-bottom: 10px;">You'll hear from me within 24 hours</li>
            <li style="margin-bottom: 10px;">We'll schedule a personalized demo to show you around</li>
          </ul>
          <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
            Best regards,<br><strong>Yassine</strong><br>Founder, GrowCheq
          </p>
        </div>
        <div style="padding: 20px; background: #f5f5f5; text-align: center; font-size: 14px; color: #666;">
          <p>© 2025 GrowCheq. All rights reserved.</p>
        </div>
      </div>
    `;

    // Admin Email Content
    const adminHtml = `
      <div style="font-family: sans-serif;">
        <h2 style="color: #2f196d;">New Lead: ${leadData.name} from ${leadData.company || "Unknown Company"}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.company || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.phone || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Interest:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.interest_level}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Plan:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.plan_name || "N/A"}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Message:</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${leadData.message ? leadData.message.replace(/\n/g, "<br>") : "N/A"}</td></tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; color: #856404; border: 1px solid #ffeeba; border-radius: 4px;">
          <strong>Action Required:</strong> Reply within 1-2 hours for best conversion!
        </div>
      </div>
    `;

    // Send both emails in parallel
    const emailPromises = [
      sendEmail(
        [{ email: leadData.email, name: leadData.name }],
        "Thanks for Your Interest in GrowCheq!",
        customerHtml,
        BREVO_API_KEY,
        { name: SENDER_NAME, email: SENDER_EMAIL }
      ),
      sendEmail(
        [{ email: ADMIN_EMAIL }],
        `New Lead: ${leadData.name} from ${leadData.company || "Unknown"}`,
        adminHtml,
        BREVO_API_KEY,
        { name: SENDER_NAME, email: SENDER_EMAIL }
      ),
    ];

    await Promise.all(emailPromises);
    console.log("Both emails sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
