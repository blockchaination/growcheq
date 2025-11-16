import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatNotificationRequest {
  session_id: string;
  message: string;
  lead_quality?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { session_id, message, lead_quality }: ChatNotificationRequest = await req.json();

    console.log("Sending chat notification for session:", session_id);

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const leadBadge = lead_quality ? `<span style="background-color: ${
      lead_quality === 'hot' ? '#ef4444' : lead_quality === 'warm' ? '#f59e0b' : '#6b7280'
    }; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${lead_quality.toUpperCase()}</span>` : '';

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Chat Notifications <onboarding@resend.dev>",
        to: ["admin@example.com"], // TODO: Replace with actual admin email
        subject: `New Chat Message ${lead_quality ? `(${lead_quality.toUpperCase()} Lead)` : ''}`,
        html: `
          <h1>New Chat Message Received</h1>
          ${leadBadge ? `<p>Lead Quality: ${leadBadge}</p>` : ''}
          <p><strong>Session ID:</strong> ${session_id}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #e5e7eb; padding-left: 16px; margin: 16px 0; color: #374151;">
            ${message}
          </blockquote>
          <p><a href="https://gpprdjdeydavukbufibf.supabase.co/admin/chats" style="background-color: #3b82f6; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 16px;">View in Admin Dashboard</a></p>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ 
      success: true,
      emailResponse: emailData 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-chat-notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
