import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tfmwbcphwwpwoypddhok.supabase.co";
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_YmJwe_QL_fqphX1gw862Ww_qHbRYHdJ";
const supabase = createClient(supabaseUrl, supabasePublishableKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (name.length < 2 || name.length > 100) return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    if (email.length < 3 || email.length > 320 || !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (message.length < 5 || message.length > 5000) return NextResponse.json({ error: "Please enter at least 5 characters in the project details." }, { status: 400 });

    const { error } = await supabase.from("contact_messages").insert({ name, email, message });
    if (error) {
      console.error("CONTACT_MESSAGE_INSERT_ERROR", error);
      return NextResponse.json({ error: "Your message could not be saved. Please try again or use WhatsApp/email." }, { status: 500 });
    }

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error: emailError } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["sainimukesh46753@gmail.com"],
        replyTo: email,
        subject: `New portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`,
      });
      if (emailError) console.error("CONTACT_EMAIL_SEND_ERROR", emailError);
    } else {
      console.error("CONTACT_EMAIL_CONFIG_ERROR: RESEND_API_KEY is not configured");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_MESSAGE_REQUEST_ERROR", error);
    return NextResponse.json({ error: "Unable to send your message right now." }, { status: 500 });
  }
}
