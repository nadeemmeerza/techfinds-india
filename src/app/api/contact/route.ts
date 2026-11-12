import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ipAddress } from "@vercel/functions";
import { contactRateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > 10_000) {
      return NextResponse.json(
        { message: "Request payload is too large." },
        { status: 413 },
      );
    }

    const name = typeof body.name === "string" ? body.name.trim() : "";

    const email = typeof body.email === "string" ? body.email.trim() : "";

    const subject = typeof body.subject === "string" ? body.subject.trim() : "";

    const message = typeof body.message === "string" ? body.message.trim() : "";

    const website = typeof body.website === "string" ? body.website.trim() : "";

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    // Validate field lengths
    if (
      name.length < 2 ||
      name.length > 100 ||
      email.length > 254 ||
      subject.length > 150 ||
      message.length < 10 ||
      message.length > 3000
    ) {
      return NextResponse.json(
        { message: "Please check the length of your fields." },
        { status: 400 },
      );
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // Check server configuration
    if (!process.env.RESEND_API_KEY || !CONTACT_EMAIL) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    // Escape user input before inserting it into HTML
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    const { data, error } = await resend.emails.send({
      from: "TechFinds India <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>

        <h3>Message</h3>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        { message: "Unable to send your message right now." },
        { status: 500 },
      );
    }

    if (website) {
      return NextResponse.json(
        { message: "Unable to process your request." },
        { status: 400 },
      );
    }

    // Identify the visitor
    const ip = ipAddress(request) ?? "unknown";

    // Check the visitor's request limit
    try {
      const { success, reset } = await contactRateLimit.limit(ip);

      if (!success) {
        const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));

        return NextResponse.json(
          {
            message:
              "Too many messages submitted. Please try again in 15 minutes.",
          },
          {
            status: 429,
            headers: {
              "Retry-After": String(retryAfter),
            },
          },
        );
      }
    } catch (error) {
      console.error("Contact rate limiter error:", error);

      return NextResponse.json(
        {
          message:
            "Our contact service is temporarily unavailable. Please try again later.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
