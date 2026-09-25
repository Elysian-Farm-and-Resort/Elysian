import { NextResponse } from "next/server";

type NewsletterPayload = {
  email: string;
};

function isValidPayload(data: unknown): data is NewsletterPayload {
  if (typeof data !== "object" || data === null) return false;
  const email = (data as Record<string, unknown>).email;
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_WAITLIST_LIST_ID);
  if (!apiKey || !Number.isInteger(listId)) {
    console.error("Brevo newsletter configuration is missing or invalid.");
    return NextResponse.json(
      { error: "Newsletter is not configured." },
      { status: 500 },
    );
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email.trim(),
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      console.error("Brevo rejected newsletter signup:", response.status);
      return NextResponse.json(
        { error: "Unable to subscribe right now." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to subscribe contact with Brevo:", error);
    return NextResponse.json(
      { error: "Unable to subscribe right now." },
      { status: 502 },
    );
  }
}
