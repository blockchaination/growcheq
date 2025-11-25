
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

    // 1. Customer Email Content
    const customerHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background: linear-gradient(to right, #2f196d, #4865b7); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px;">GrowCheq</h1>
        </div>
        customerHtml
      ),
      sendEmail(
        [{ email: ADMIN_EMAIL }],
        `New Lead: ${ leadData.name } from ${ leadData.company || 'Unknown'
  } `,
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
    // Even if email fails, we don't want to break the client flow if possible, 
    // but since this is the backend, we report the error. 
    // The client handles the "soft fail" logic.
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});