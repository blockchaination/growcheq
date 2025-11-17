import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadNotification = await req.json();
    console.log("Processing lead notification:", leadData);

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "GrowCheq Leads <leads@growcheq.com>",
        to: ["yassine.anaddam@hotmail.co.uk"],
        subject: `New Lead: ${leadData.name}${leadData.company ? ` from ${leadData.company}` : ''}`,
        html: `
          <h1>New Lead Captured!</h1>
          <p><strong>Name:</strong> ${leadData.name}</p>
          <p><strong>Email:</strong> ${leadData.email}</p>
          ${leadData.company ? `<p><strong>Company:</strong> ${leadData.company}</p>` : ''}
          ${leadData.phone ? `<p><strong>Phone:</strong> ${leadData.phone}</p>` : ''}
          <p><strong>Interest Level:</strong> ${leadData.interest_level}</p>
          ${leadData.plan_name ? `<p><strong>Plan:</strong> ${leadData.plan_name}</p>` : ''}
          ${leadData.source_page ? `<p><strong>Source:</strong> ${leadData.source_page}</p>` : ''}
          ${leadData.message ? `<p><strong>Message:</strong><br>${leadData.message.replace(/\n/g, '<br>')}</p>` : ''}
          <hr>
          <p style="color: #666; font-size: 12px;">View in Supabase dashboard to follow up.</p>
        `,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    const data = await res.json();
    console.log("Email sent successfully:", data);

    return new Response(JSON.stringify(data), {
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