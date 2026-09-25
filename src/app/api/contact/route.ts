import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  reason: string;
  subscribeToNewsletter?: boolean;
  message: string;
};

// Basic shape validation — not exhaustive, just enough to reject junk
// submissions before they reach Brevo.
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
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (!isValidPayload(payload)) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 },
    );
  }

  const { name, email, phone, reason, message, subscribeToNewsletter } =
    payload;

  try {
    const apiKey = process.env.BREVO_API_KEY;
    const recipient = process.env.CONTACT_EMAIL_TO;
    if (!apiKey || !recipient) {
      console.error("Brevo contact email configuration is missing.");
      return NextResponse.json(
        { error: "Contact email is not configured." },
        { status: 500 },
      );
    }

    const subject = `New ${reason} inquiry from ${name} — Elysian Farms & Resort`;
    const textContent = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Reason: ${reason}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Elysian Farms & Resort",
          email: "elysian.enquiry@agrolocale.com",
        },
        to: [{ email: recipient }],
        replyTo: { email },
        subject,
        textContent,
      }),
    });

    if (!emailResponse.ok) {
      console.error("Brevo rejected contact email:", emailResponse.status);
      return NextResponse.json(
        {
          error: "Something went wrong sending your message. Please try again.",
        },
        { status: 502 },
      );
    }

    if (subscribeToNewsletter) {
      const apiKey = process.env.BREVO_API_KEY;
      const listId = Number(process.env.BREVO_NEWSLETTER_LIST_ID);

      if (!apiKey || !Number.isInteger(listId)) {
        console.error("Brevo newsletter configuration is missing or invalid.");
      } else {
        try {
          const newsletterResponse = await fetch(
            "https://api.brevo.com/v3/contacts",
            {
              method: "POST",
              headers: {
                accept: "application/json",
                "api-key": apiKey,
                "content-type": "application/json",
              },
              body: JSON.stringify({
                email: email.trim(),
                listIds: [listId],
                updateEnabled: true,
              }),
            },
          );

          if (!newsletterResponse.ok) {
            console.error(
              "Brevo rejected contact newsletter subscription:",
              newsletterResponse.status,
            );
          }
        } catch (error) {
          console.error(
            "Failed to subscribe contact to Brevo newsletter:",
            error,
          );
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 },
    );
  }
}
