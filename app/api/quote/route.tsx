import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DataType {
  email: string;
}

async function sendEmail(data): Promise<void> {
  const { email } = data as DataType;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "info@berpro.ie",
    subject: "New BERpro quote request",
    text: `Email: ${email}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function POST(request: Request): Promise<Response> {
  const body = await request.json();
  console.log("body: ", body);

  if (!body.email) {
    return new Response("data not found", { status: 400 });
  }

  await sendEmail(body);

  return NextResponse.json({ data: body.name });
}
