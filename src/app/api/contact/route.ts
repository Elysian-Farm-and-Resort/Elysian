import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  message: string;
};

// Basic shape validation — not exhaustive, just enough to reject junk
// submissions before they reach the SMTP send.
function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.name === "string" &&
    d.name.trim().length > 0 &&
    typeof d.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) &&
    typeof d.reason === "string" &&
    typeof d.message === "string" &&
    d.message.trim().length > 0
  );
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json({ error: "Missing or invalid fields." }, { status: 400 });
  }

  const { name, email, phone, reason, message } = payload;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT || 465),
      secure: true, // true for port 465
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ZOHO_SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `New ${reason} inquiry from ${name} — Elysian Farms & Resort`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Reason: ${reason}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
