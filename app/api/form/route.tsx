import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface DataType {
  name: string;
  email: string;
  phone: string;
  buildingType: string;
  dateTime: string;
  numRooms: number;
}

async function sendEmail(data): Promise<void> {
  const { name, email, phone, buildingType, numRooms, dateTime } =
    data as DataType;

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
    text: `name: ${name}\nemail: ${email}\nPhone: ${phone}\nBuilding Type:${buildingType}\nNumber of Rooms:${numRooms}\nDate & Time: ${dateTime}`,
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

  if (
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.buildingType ||
    !body.numRooms ||
    !body.dateTime
  ) {
    return new Response("data not found", { status: 400 });
  }

  await sendEmail(body);

  return NextResponse.json({ data: body.name });
}
