import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function formatDate(date) {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return formattedDate;
}

interface DataType {
  name: string;
  email: string;
  phone: string;
  buildingType: string;
  dateTime: string;
  numRooms: number;
  eircode: string;
  address: string;
  price: number;
}

async function sendEmail(data): Promise<void> {
  const {
    name,
    email,
    phone,
    eircode,
    address,
    buildingType,
    numRooms,
    dateTime,
    price,
  } = data as DataType;

  const formattedDateTime = formatDate(new Date(dateTime));

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
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nEircode: ${eircode}\nAddress: ${address}\nBuilding Type: ${buildingType}\nNumber of Rooms: ${numRooms}\nDate & Time: ${formattedDateTime}\nPrice: €${price}`,
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
    // !body.buildingType ||
    // !body.numRooms ||
    !body.dateTime ||
    !body.eircode ||
    !body.address
    // !body.price
  ) {
    return new Response("data not found", { status: 400 });
  }

  await sendEmail(body);

  return NextResponse.json({ data: body.name });
}
