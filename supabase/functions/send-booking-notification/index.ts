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
        from: "Demo Bookings <onboarding@resend.dev>",
        to: ["admin@example.com"], // TODO: Replace with actual admin email
        subject: "New Demo Booking Received",
        html: `
          <h1>New Demo Booking</h1>
          <p>A new demo has been booked:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Company:</strong> ${company}</li>
            ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
            <li><strong>Date:</strong> ${scheduled_date}</li>
            <li><strong>Time:</strong> ${scheduled_time}</li>
          </ul>
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
        from: "Demo Team <onboarding@resend.dev>",
        to: [email],
        subject: "Demo Booking Confirmed",
        html: `
          <h1>Thank you for booking a demo, ${name}!</h1>
          <p>Your demo has been scheduled for:</p>
          <p><strong>Date:</strong> ${scheduled_date}<br>
          <strong>Time:</strong> ${scheduled_time}</p>
          <p>We'll send you a calendar invite shortly. Looking forward to showing you what we can do!</p>
          <p>Best regards,<br>The Demo Team</p>
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
