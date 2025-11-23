
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
        </div>
      </div>
    `;

    // Send both emails in parallel
    const emailPromises = [
      sendEmail(
        [{ email: leadData.email, name: leadData.name }],
        "Thanks for Your Interest in GrowCheq!",
        customerHtml
      ),
      sendEmail(
        [{ email: ADMIN_EMAIL }],
        `New Lead: ${ leadData.name } from ${ leadData.company || 'Unknown' } `,
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