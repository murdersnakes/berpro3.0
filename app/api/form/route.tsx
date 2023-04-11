import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DataType {
  first: string;
  last: string;
  email: string;
  date: string;
}

async function sendEmail(data): Promise<void> {
  const { first, last, email, date } = data as DataType;

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
    subject: "New BERpro form submission",
    text: `First name: ${first}\nLast name: ${last}\nEmail: ${email}\nDate: ${date}`,
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

  if (!body.first || !body.last || !body.email || !body.date) {
    return new Response("data not found", { status: 400 });
  }

  await sendEmail(body);

  const fullName = `${body.first} ${body.last}`;
  return NextResponse.json({ data: fullName });
}
