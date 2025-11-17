import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingNotificationRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  scheduled_date: string;
  scheduled_time: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, scheduled_date, scheduled_time }: BookingNotificationRequest = await req.json();

    console.log("Sending booking notification for:", { name, email, company });

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    // Send notification to admin
    const adminEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "GrowCheq Leads <leads@growcheq.com>",
        to: ["yassine.anaddam@hotmail.co.uk"],
        subject: `New Lead: ${name} from ${company}`,
        html: `
          <h1>New Lead Captured!</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <p><strong>Requested Date:</strong> ${scheduled_date}</p>
          <p><strong>Requested Time:</strong> ${scheduled_time}</p>
          <hr>
          <p>View in Supabase dashboard to follow up.</p>
        `,
      }),
    });

    const adminEmailData = await adminEmailResponse.json();
    
    // Send confirmation to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Ariana from GrowCheq <hello@growcheq.com>",
        to: [email],
        subject: "Thanks for Your Interest in GrowCheq!",
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
              .header { background: linear-gradient(to right, #2f196d, #4865b7); padding: 30px; text-align: center; }
              .logo { color: white; font-size: 28px; font-weight: bold; }
              .content { padding: 30px; max-width: 600px; margin: 0 auto; }
              .cta-button { background: linear-gradient(to right, #2f196d, #4865b7); color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; }
              .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="logo">GrowCheq</div>
            </div>
            
            <div class="content">
              <h2>Thanks for Your Interest, ${name}!</h2>
              
              <p>I'm Ariana, founder of GrowCheq. We've received your demo request and I'm excited to show you how we can help ${company} save over £600/month.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>I'll personally review your information</li>
                <li>You'll hear from me within 24 hours</li>
                <li>We'll schedule a personalized 15-minute demo</li>
              </ul>
              
              <p>In the meantime, feel free to explore our website or reply to this email with any questions.</p>
              
              <a href="https://growcheq.com" class="cta-button">Visit GrowCheq</a>
              
              <p>Looking forward to speaking!<br><br>
              <strong>Ariana Clarke</strong><br>
              Founder, GrowCheq<br>
              📧 hello@growcheq.com</p>
            </div>
            
            <div class="footer">
              <p>© 2025 GrowCheq. All rights reserved.</p>
              <p>🇬🇧 Built for UK Businesses</p>
              <p><a href="https://growcheq.com">Visit Website</a> | <a href="mailto:hello@growcheq.com">Contact Us</a></p>
            </div>
          </body>
          </html>
        `,
      }),
    });

    const customerEmailData = await customerEmailResponse.json();

    console.log("Emails sent successfully:", { adminEmailData, customerEmailData });

    return new Response(JSON.stringify({ 
      success: true,
      adminEmail: adminEmailData,
      customerEmail: customerEmailData 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-notification:", error);
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
